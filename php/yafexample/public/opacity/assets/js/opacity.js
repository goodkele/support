var aku = {};

/**
 * Loader
 */
function Loader()
{
    this.timeStamp = null;

    this.post = function(title, sUrl, sQueryString, callbackFunc) {
        this.request("POST", title, sUrl, sQueryString, callbackFunc);
    }

    this.get = function(title, sUrl, sQueryString, callbackFunc) {
        this.request("GET", title, sUrl, sQueryString, callbackFunc);
    }

    this.request = function(method, title, sUrl, sQueryString, callbackFunc) {
        aku.layerShadeLoading();

        if ($(sQueryString).is("form")) {
            sQueryString = $(sQueryString).serialize();
        } 

        $.ajax({
            type: method,
            url : sUrl,
            data : sQueryString,
            dataType : 'text',
            success : function(data) {
                var obj;
                try {
                    obj=JSON.parse(data);
                } catch (err) { obj = data; }
                
                if(typeof obj == 'object' && obj ){
                    // 返回 json
                    if (obj.auto_script) {
                        eval(obj.auto_script);
                    }

                    window.parent.layer.open({
                        closeBtn : 0,
                        title: title
                        ,content: obj.data,
                        btn1 : function(index, layero) {
                            // console.log(index, layero);
                            window.parent.layer.close(index);
                            if (obj.script_code) {
                                eval(obj.script_code);
                            }
                        }
                      }); 
                }else{
                    // 返回 html
                    window.parent.layer.open({
                        title: title
                        ,content: obj,
                        btn : []
                    });
                }
            },
            error : function(xhr, textStatus, errorThrown) {
                layer.alert(
                    textStatus + "/" + errorThrown, {closeBtn: 0}
                    , function(){
                    }
                );
            },
            complete : function(xhr, textStatus) {
                aku.layerShadeLoadingClose(aku.layerShadeLoadingIndex);
            }
        });
    }
    
}

aku.layerShadeLoading = function() {
    this.layerShadeLoadingIndex = window.parent.layer.load(1, {
        shade: [0.1,'#000'],
        scrollbar : false
    });
}

aku.layerShadeLoadingClose = function() {
    window.parent.layer.close(this.layerShadeLoadingIndex);
}



aku.layerConfirm = function() {
    
}

/**
 * Table Manager 类
 */
function ListTableManager() {

    this.Tables = [];

    this.render = function(obj) {
        var objTable = new ListTable(obj);
        this.Tables.push(objTable);
    }
    

    this.findTable = function(tableId) {
        for (i=0; i<this.Tables.length; i++) {
            if (this.Tables[i].options.id == tableId) {
                return this.Tables[i];
            }
        }
        return false;
    }
}

/**
 * Table 类
 */
function ListTable(obj) {

    if (typeof obj != 'object') {
        return false;
    }

    this.options = {
        id : '',    // String 设定容器唯一ID
        elem : '',  // String 定原始 table 容器的选择器或 DOM，方法渲染方式必填
        cols : [],  // Array 置表头。值是一个二维数组。方法渲染方式必填,例：
        width : '100%', // Number 设定容器宽度。table容器的默认宽度是跟随它的父元素铺满，你也可以设定一个固定值，当容器中的内容超出了该宽度时，会自动出现横向滚动条。
        height : '100%', // Number/String   设定容器高度	
        cellMinWidth : 60,  // Number （layui 2.2.1 新增）全局定义所有常规单元格的最小宽度（默认：60），一般用于列宽自动分配的情况。其优先级低于表头参数中的 minWidth
        done : '', // Function 数据渲染完的回调。你可以借此做一些其它的操作
        data : '',  // Array 直接赋值数据。既适用于只展示一页数据，也非常适用于对一段已知数据进行多页展示。	
        page : true,  // Boolean 开启分页（默认：true）
        limit : 10, // Number 每页显示的条数（默认：10）。值务必对应 limits 参数的选项。优先级低于 page 参数中的 limit 参数。
        limits : [10,20,30,40,50,60,70,80,90],    // Array 每页条数的选择项，默认：[10,20,30,40,50,60,70,80,90]。优先级低于 page 参数中的 limits 参数。
        loading : true,   //  Boolean 是否显示加载条（默认：true）。如果设置 false，则在切换分页时，不会出现加载条。该参数只适用于 url 参数开启的方式
        text : {},  // Object 自定义文本，如空数据时的异常提示等。注：layui 2.2.5 开始新增。例:{none: '暂无相关数据' //默认：无数据。注：该属性为 layui 2.2.5 开始新增}
        //initSort :'',   // Object 初始排序状态。用于在数据表格渲染完毕时，默认按某个字段排序。注：该参数为 layui 2.1.1 新增

        url : '',   // 接口地址。默认会自动传递两个参数：?page=1&limit=30（该参数可通过 request 自定义） page 代表当前页码、limit 代表每页数据量
        method : 'get',    // 接口http请求类型，默认：get
        where : {}, // 接口的其它参数。如：where: {token: 'sasasas', id: 123}
        headers : {},   // 接口的请求头。如：headers: {token: 'sasasas'}。注：该参数为 layui 2.2.6 开始新增
        request : { // 用于对分页请求的参数：page、limit重新设定名称，如：
            pageName : 'page',  //页码的参数名称，默认：page
            limitName : 'limit',    //每页数据量的参数名，默认：limit
        },
        response : {    // 用于对返回的数据格式的自定义，如：
            statusName: 'code', //数据状态的字段名称，默认：code
            statusCode: 0, //成功的状态码，默认：0
            msgName: 'msg', //状态信息的字段名称，默认：msg
            dataName: 'data', //数据列表的字段名称，默认：data
            listName : 'data',  // 结果集名字
            countName: 'total', //数据总数的字段名称，默认：total
            pageStatName : 'page_stat', // 分页状态信息,例如：显示从 1 条数据到 30 条数据，共 1823 条数据
            currentPageName : 'current_page',   // 当前页
            lastPageName : 'last_page',     // 最后一页
            currentLimit : 'current_limit', // 每页记录数
            fromName : 'from',  // 从第几条数据开始
            toName : 'to'   // 到第几条数据
        },

//         "total": 50,
//    "per_page": 15,
//    "current_page": 1,
//    "last_page": 4,
//    "first_page_url": "http://laravel.app?page=1",
//    "last_page_url": "http://laravel.app?page=4",
//    "next_page_url": "http://laravel.app?page=2",
//    "prev_page_url": null,
//    "path": "http://laravel.app",
//    "from": 1,
//    "to": 15,
//    "data":[
//         {
//             // 结果集
//         },
//         {
//             // 结果集
//         }
//    ]
    };

    var colsOptions = {
         field : '', //    String  （必填项）设定字段名。字段名的设定非常重要，且是表格数据列的唯一标识
         title : '', //    String  （必填项）设定标题名称
         width : 0, //    Number/String   设定列宽（默认自动分配）。支持填写：数字、百分比。请结合实际情况，对不同列做不同设定。注意：如果是 layui 2.2.0 之前的版本，列宽必须设定一个固定数字
         minWidth : 60, // Number  （layui 2.2.1 新增）局部定义当前常规单元格的最小宽度（默认：60），一般用于列宽自动分配的情况。其优先级高于基础参数中的 cellMinWidth
         type : '', // String  设定列类型。可选值有：normal（常规列，无需设定）、checkbox（复选框列）、space（空列）、numbers（序号列）。注意：该参数为 layui 2.2.0 新增。而如果是之前的版本，复选框列采用 checkbox: true、空列采用 space: true
         sort : false, // Boolean 是否允许排序（默认：false）。如果设置 true，则在对应的表头显示排序icon，从而对列开启排序功能。注意：不推荐对值同时存在“数字和普通字符”的列开启排序，因为会进入字典序比对。比如：'贤心' > '2' > '100'，这可能并不是你想要的结果，但字典序排列算法（ASCII码比对）就是如此。
         initSort : '', // string   ASC or DESC  初始排序状态。用于在数据表格渲染完毕时，默认按某个字段排序。注：该参数为 layui 2.1.1 新增
         unresize : false, // Boolean 是否禁用拖拽列宽（默认：false）。默认情况下会根据列类型（type）来决定是否禁用，如复选框列，会自动禁用。而其它普通列，默认允许拖拽列宽，当然你也可以设置 true 来禁用该功能。
         edit  : 'text' , // 单元格编辑类型（默认不开启）目前只支持：text（输入框）	
        //  event : '', // 自定义单元格点击事件名，以便在 tool 事件中完成对该单元格的业务处理	
         style : '', //    String  自定义单元格样式。即传入 CSS 样式	
         align : 'center', //    String  单元格排列方式。可选值有：left（默认）、center（居中）、right（居右）
         toolbar : '', //  String  绑定列工具条。设定后，可在每行列中出现一些自定义的操作性按钮	
         columnPannel : {}, // 列 面板，type:text文本框，BETWEEN-INT 整型区间，BETWEEN 文本区间，BETWEEN-DATE 日期区间，STATEUS 状态值
    }


    var hdiv = "<div class=\"hDiv\">" +
    "<div class=\"hDivBox\">" +
        "<table cellpadding=\"0\" cellspacing=\"0\">" +
        "<thead>" +
            "<tr>" +
                "<th align=\"right\" >" +
                    "<div style=\"text-align: center; width: 100px;\">操作</div>" +
                "</th>" +
                "<th align=\"Center\"  class=\"\">" +
                    "<div style=\"text-align: center; width: 100px;\">学员姓名</div>" +
                "</th>"
                "<th align=\"Center\"  class=\"\">"
                    "<div style=\"text-align: center; width: 100px;\">手机号码</div>"
                "</th>"
                "<th align=\"Center\" class=\"\">"
                    "<div style=\"text-align: center; width: 100px;\">跟进方式</div>"
                "</th>"
                "<th align=\"left\" >"
                    "<div style=\"text-align: center; width: 260px;\">跟进内容</div>"
                "</th>"
                "<th align=\"Center\" class=\"sorted\">"
                    "<div class=\"sdesc\" style=\"text-align: center; width: 120px;\">跟进时间</div>"
                "</th>"
                "<th align=\"Center\">"
                    "<div style=\"text-align: center; width: 120px;\">预计下次跟进时间</div>"
                "</th>"
                "<th align=\"Center\"  class=\"\">"
                    "<div style=\"text-align: center; width: 100px;\">跟进人</div>"
                "</th>"
                "<th align=\"Center\" >"
                    "<div style=\"text-align: center; width: 100px;\">状态</div>"
                "</th>"
            "</tr>"
        "</thead>"
        "</table>"
    "</div>"
    "</div>";

{/* <div id=\"btnShowOrHide\" style=\"
background-image: url('/opacity/images/more.png');
background-repeat: no-repeat;
width: 24px;
height: 28px;
z-index: 999;
position: absolute; top: 3px; left: 1174px;
cursor: default;
cursor:hand;
\"
title=\"隐藏/显示列\">&nbsp;</div> */}


    /**
     * 表头支持排序/按条件搜索。初始化排序
     * 表头支持自选择字段
     * 
     * 单元格支持拖拽大小
     * 
     * 
     */


    // var myObject = {
    //     a: {
    //       one: 1,
    //       two: 2,
    //       three: 3
    //     },
    //     b: [ 1, 2, 3 ]
    //   };
    //   var shallowEncoded = $.param( myObject, true );
    //   console.log(shallowEncoded);


    this.flexigrid = {};    // table
    this.listPage = {}; // 分页

    this.__construct = function() {

        $.extend(this.options, obj);

        if (!this.options.id) {
            this.options.id = this.calcTableId();
        }

        if (this.options.cols.length > 0) {
            for (var i=0; i < this.options.cols.length; i++) {
                this.options.cols[i] = $.extend({}, colsOptions, this.options.cols[i]);
            }
        }

        // 实例化分页
        if ($.isEmptyObject(this.listPage)) {
            this.listPage = new ListPage({
                url : this.options.url, 
                method : this.options.method,
                where : this.options.where,
                headers : this.options.headers,
                request : this.options.request,
                response : this.options.response,
            });
        }



        var flexigrid = $.parseHTML("<div id=\""+ this.options.id +"\" class=\"flexigrid\" ></div>");

        $(this.options.elem).html('');
        $(this.options.elem).append(flexigrid);

        this.flexigrid = $("#" + this.options.id);

        


        this.renderHdiv();

    }


    this.renderHdiv = function() {

        this.flexigrid.find(".hDiv").html('');

        // var hdiv = "<div class=\"hDiv\">" +
        // "<div class=\"hDivBox\">" +
        //     "<table cellpadding=\"0\" cellspacing=\"0\">" +
        //     "<thead>" +
        //         "<tr>" +
        //             "<th align=\"right\" >" +
        //                 "<div style=\"text-align: center; width: 100px;\">操作</div>" +
        //             "</th>" +
        //             "<th align=\"Center\"  class=\"\">" +
        //                 "<div style=\"text-align: center; width: 100px;\">学员姓名</div>" +
        //             "</th>"
        //             "<th align=\"Center\"  class=\"\">"
        //                 "<div style=\"text-align: center; width: 100px;\">手机号码</div>"
        //             "</th>"
        //             "<th align=\"Center\" class=\"\">"
        //                 "<div style=\"text-align: center; width: 100px;\">跟进方式</div>"
        //             "</th>"
        //             "<th align=\"left\" >"
        //                 "<div style=\"text-align: center; width: 260px;\">跟进内容</div>"
        //             "</th>"
        //             "<th align=\"Center\" class=\"sorted\">"
        //                 "<div class=\"sdesc\" style=\"text-align: center; width: 120px;\">跟进时间</div>"
        //             "</th>"
        //             "<th align=\"Center\">"
        //                 "<div style=\"text-align: center; width: 120px;\">预计下次跟进时间</div>"
        //             "</th>"
        //             "<th align=\"Center\"  class=\"\">"
        //                 "<div style=\"text-align: center; width: 100px;\">跟进人</div>"
        //             "</th>"
        //             "<th align=\"Center\" >"
        //                 "<div style=\"text-align: center; width: 100px;\">状态</div>"
        //             "</th>"
        //         "</tr>"
        //     "</thead>"
        //     "</table>"
        // "</div>"
        // "</div>";

        var ths = [];
        for (var i=0; i < this.options.cols.length; i++)  {

        //     var colsOptions = {
        //         field : '', //    String  （必填项）设定字段名。字段名的设定非常重要，且是表格数据列的唯一标识
        //         title : '', //    String  （必填项）设定标题名称
        //         width : 0, //    Number/String   设定列宽（默认自动分配）。支持填写：数字、百分比。请结合实际情况，对不同列做不同设定。注意：如果是 layui 2.2.0 之前的版本，列宽必须设定一个固定数字
        //         minWidth : 60, // Number  （layui 2.2.1 新增）局部定义当前常规单元格的最小宽度（默认：60），一般用于列宽自动分配的情况。其优先级高于基础参数中的 cellMinWidth
        //         type : '', // String  设定列类型。可选值有：normal（常规列，无需设定）、checkbox（复选框列）、space（空列）、numbers（序号列）。注意：该参数为 layui 2.2.0 新增。而如果是之前的版本，复选框列采用 checkbox: true、空列采用 space: true
        //         sort : false, // Boolean 是否允许排序（默认：false）。如果设置 true，则在对应的表头显示排序icon，从而对列开启排序功能。注意：不推荐对值同时存在“数字和普通字符”的列开启排序，因为会进入字典序比对。比如：'贤心' > '2' > '100'，这可能并不是你想要的结果，但字典序排列算法（ASCII码比对）就是如此。
        //         initSort : '', // string   ASC or DESC  初始排序状态。用于在数据表格渲染完毕时，默认按某个字段排序。注：该参数为 layui 2.1.1 新增
        //         unresize : false, // Boolean 是否禁用拖拽列宽（默认：false）。默认情况下会根据列类型（type）来决定是否禁用，如复选框列，会自动禁用。而其它普通列，默认允许拖拽列宽，当然你也可以设置 true 来禁用该功能。
        //         edit  : 'text' , // 单元格编辑类型（默认不开启）目前只支持：text（输入框）	
        //        //  event : '', // 自定义单元格点击事件名，以便在 tool 事件中完成对该单元格的业务处理	
        //         style : '', //    String  自定义单元格样式。即传入 CSS 样式	
        //         align : 'center', //    String  单元格排列方式。可选值有：left（默认）、center（居中）、right（居右）
        //         toolbar : '', //  String  绑定列工具条。设定后，可在每行列中出现一些自定义的操作性按钮	
        //         columnPannel : {type:'text'}, // 列面板，type:text文本框,between文本区间,between-date日期区间,status状态值,custom自定义
        //    }

        // if ($.isEmptyObject(this.listPage)) {

            
            var cursor = "";
            if (this.options.cols[i].sort || !$.isEmptyObject(this.options.cols[i].columnPannel)) {
                cursor = "cursor: pointer;";
            }
            var width = "";
            if (this.options.cols[i].width) {
                width = "width:" + (aku.isPercent(this.options.cols[i].width) ? this.options.cols[i].width : this.options.cols[i].width + "px") + ";";
            }
            var minWidth = "";
            if (this.options.cols[i].minWidth) {
                minWidth = "min-width:" + (aku.isPercent(this.options.cols[i].minWidth) ? this.options.cols[i].minWidth : this.options.cols[i].minWidth + "px") + ";";
            }
            var center = "";
            if (this.options.cols[i].align) {
                center = "text-align:" + this.options.cols[i].align + ";";
            }

            var thclass = "";
            var thdivclass = "";
            if (!$.isEmptyObject(this.options.cols[i].columnPannel)) {
                thclass = "thOver dropdownStatus";
            } else if (this.options.cols[i].sort ) {
                thclass = "thOver "
                if (this.options.cols[i].initSort) {
                    thdivclass = "s" + this.options.cols[i].initSort;
                }
            }

            // sasc
            // sdesc
            
            var th = "<th align=\""+ this.options.cols[i].align +"\" class=\""+ thclass +"\" data-field=\""+ this.options.cols[i].field +"\" data-sort=\""+ this.options.cols[i].sort +"\" data-initsort=\""+ this.options.cols[i].initSort +"\" data-tableid=\""+ this.options.id +"\" data-colsid=\""+ i +"\" >" +
                        "<div class=\""+ thdivclass +"\"  style=\""+ center + cursor + width + minWidth +" \">"+ this.options.cols[i].title +"</div>" +
                    "</th>";

            th = $.parseHTML(th);
            th = ($.isArray(th) && th.length > 0) ? th[0] : {};
            if ($.isEmptyObject(th)) {
                return;
            }

            // 绑定排序事件
            if (this.options.cols[i].sort && $.isEmptyObject(this.options.cols[i].columnPannel)) {
                $(th).on("mouseover", function() {
                    if ($(this).data('initsort')) {
                        // $(this).find("div").hasClass("sasc");

                        if ($(this).data('initsort') == "asc") {
                            $(this).find("div").removeClass("sasc");
                            $(this).find("div").addClass("sdesc");
                        } else {
                            $(this).find("div").removeClass("sdesc");
                            $(this).find("div").addClass("sasc");
                        }

                    } else {
                        $(this).find("div").addClass("sasc");
                    }
                });
                $(th).on("mouseleave", function() {
                    if (!$(this).data('initsort')) {
                        $(this).find("div").removeClass("sasc");
                        $(this).find("div").removeClass("sdesc");
                    } else {
                        $(this).find("div").removeClass("sasc");
                        $(this).find("div").removeClass("sdesc");
                        $(this).find("div").addClass("s" + $(this).data('initsort'));
                    }
                });

                // 切换排序
                $(th).on("click", function() {
                    var table = aku.table.findTable($(this).data("tableid"));
                    var colsid = $(this).data("colsid");
                    if (table) {
                        if ($(this).data("initsort")) {
                            if ($(this).data('initsort') == "asc") {
                                $(this).find("div").removeClass("sasc");
                                $(this).find("div").addClass("sdesc");
                                table.options.cols[colsid].initSort = "desc";
                                $(this).data("initsort", "desc");
                            } else {
                                $(this).find("div").removeClass("sdesc");
                                $(this).find("div").addClass("sasc");

                                table.options.cols[colsid].initSort = "asc";
                                $(this).data("initsort", "asc");
                            }
                        } else {
                            table.options.cols[colsid].initSort = "asc";
                            $(this).data("initsort", "asc");
                        }
                    }
                });
            }



            // 绑定列面板事件
            if (!$.isEmptyObject(this.options.cols[i].columnPannel)) {

                $(th).on("click", function(table) {
                    var options = table.options;
                    var i = i;
                    return (function() {
                        
                        var tableid = $(this).data("tableid"); 
                        var currentTable = aku.table.findTable(tableid);
                        var colsid = $(this).data("colsid");
                        var offset = $(this).offset();
                        
                        if ($(".flexigridColumnHeader").length > 0) {
                            $(".flexigridColumnHeader").remove();
                            return false;
                        }

                        // 文本
                        if (options.cols[colsid].columnPannel.type == "text") {

                            var width = "";
                            if (table.options.cols[colsid].width) {
                                width = "width:" + (aku.isPercent(table.options.cols[colsid].width) ? table.options.cols[colsid].width : table.options.cols[colsid].width + "px") + ";";
                            }
                            if (width == "") width = "width : 100px;";

                            var minWidth = "";
                            if (table.options.cols[colsid].minWidth) {
                                minWidth = "min-width:" + (aku.isPercent(table.options.cols[colsid].minWidth) ? table.options.cols[colsid].minWidth : table.options.cols[colsid].minWidth + "px") + "; ";
                            }

                            var html = "<div class=\"flexigridColumnHeader\" style=\"background-color: rgb(249, 249, 249); border-left: 1px solid rgb(218, 216, 212); border-right: 1px solid rgb(218, 216, 212); border-bottom: 1px solid rgb(218, 216, 212); overflow-x: hidden; overflow-y: auto; position: absolute; height: 61px; "+ width + minWidth +"  \" > " +
                            "<form class=\"flexigridColumnHeaderForm\">" + 
                            "<div class=\"tmpContainer\" style=\"padding-top:5px;text-align:center;\">" +
                            "<input type=\"text\" class=\"int\" name=\"flexTitle\" style=\"width:90%\"> " +
                            "</div> " +
                            "<div class=\"tmpContainer\" style=\"width:100%;padding-top:5px; text-align: right;\"> " +
                            "<input type=\"button\" class=\"button\" style=\"margin-right:5px;\" value=\"确定\">  " +
                            "</div> " +
                            "</form>" + 
                            "</div> ";
                            html = $.parseHTML(html);
                            html = ($.isArray(html) && html.length > 0) ? html[0] : {};
                            
                            $(html).css("left", offset.left + "px");
                            $(html).css("top", offset.top-10 + $(this).outerHeight()+1 + "px");

                            if (!$.isEmptyObject(currentTable.options.cols[colsid].columnPannel.data)) { 
                                $(html).find("input[type=text]").val(currentTable.options.cols[colsid].columnPannel.data.flexTitle);
                            }

                            $(html).find("input[type=button]").on("click", function() {
                                var query = $(html).find(".flexigridColumnHeaderForm").serialize();
                                var data = aku.queryToJson(query);
                                if (data.flexTitle) {
                                    $(".hDivBox").find("th[data-colsid="+ colsid +"]").find("div").html(data.flexTitle)
                                } else {
                                    $(".hDivBox").find("th[data-colsid="+ colsid +"]").find("div").html(options.cols[colsid].title)
                                }
                                currentTable.options.cols[colsid].columnPannel.data = data;
                                $(".flexigridColumnHeader").remove();
                            });

                            $(document.body).append(html);
                        }

                        // 文本区间
                        if (options.cols[colsid].columnPannel.type == "between") {

                            var html = "<div class=\"flexigridColumnHeader\" style=\"background-color: rgb(249, 249, 249); border-left: 1px solid rgb(218, 216, 212); border-right: 1px solid rgb(218, 216, 212); border-bottom: 1px solid rgb(218, 216, 212); overflow-x: hidden; overflow-y: auto; position: absolute; height: 61px; width:150px;  \" > " +
                            "<form class=\"flexigridColumnHeaderForm\">" + 
                            "<div class=\"tmpContainer\" style=\"padding-top:5px;text-align:center;\">" +
                            "<input type=\"text\" class=\"int\" name=\"flexMin\" style=\"width:64px\"> - " +
                            "<input type=\"text\" class=\"int\" name=\"flexMax\" style=\"width:64px\">" +
                            "</div> " +
                            "<div class=\"tmpContainer\" style=\"width:100%;padding-top:5px; text-align: right;\"> " +
                            "<input type=\"button\" class=\"button\" style=\"margin-right:5px;\" value=\"确定\">  " +
                            "</div> " +
                            "</form>" + 
                            "</div> ";
                            html = $.parseHTML(html);
                            html = ($.isArray(html) && html.length > 0) ? html[0] : {};
                            
                            $(html).css("left", offset.left + "px");
                            $(html).css("top", offset.top-10 + $(this).outerHeight()+1 + "px");

                            if (!$.isEmptyObject(currentTable.options.cols[colsid].columnPannel.data)) { 
                                $(html).find("input[name=flexMin]").val(currentTable.options.cols[colsid].columnPannel.data.flexMin);
                                $(html).find("input[name=flexMax]").val(currentTable.options.cols[colsid].columnPannel.data.flexMax);
                            }

                            $(html).find("input[type=button]").on("click", function() {
                                var query = $(html).find(".flexigridColumnHeaderForm").serialize();
                                var data = aku.queryToJson(query);
                                if (data.flexMin || data.flexMax) {
                                    $(".hDivBox").find("th[data-colsid="+ colsid +"]").find("div").html(data.flexMin + " 至 " + data.flexMax);
                                } else {
                                    $(".hDivBox").find("th[data-colsid="+ colsid +"]").find("div").html(options.cols[colsid].title)
                                }
                                currentTable.options.cols[colsid].columnPannel.data = data;
                                $(".flexigridColumnHeader").remove();
                                $(".flexigridColumnHeader").remove();
                            });

                            $(document.body).append(html);
                        }

                        // 文本区间-日期
                        if (options.cols[colsid].columnPannel.type == "between-date") {

                        }

                        // 状态列表
                        if (options.cols[colsid].columnPannel.type == "status") {

                        }

                        // 自定义
                        if (options.cols[colsid].columnPannel.type == "between-custom") {

                        }
          
                        return false;

                    });

                }(this));
                
            }
            
            
            ths.push(th);
        }

        // console.log(ths.toString());

        var hdiv = $.parseHTML("<div class=\"hDiv\">" +
        "<div class=\"hDivBox\">" +
            "<table cellpadding=\"0\" cellspacing=\"0\">" +
            "<thead>" +
                "<tr>" +
                // ths.join("") +
                "</tr>" +
            "</thead>" +
            "</table>" +
        "</div>" +
        "</div>");

        for (var i=0; i<ths.length; i++) {
            $(hdiv).find('tr').append(ths[i]);
        }

        this.flexigrid.append(hdiv);
    }


    this.renderBdiv = function() {

    }

    this.renderPdiv= function() {

    }


    this.on = function() {

    }

    this.calcTableId = function() {
        return "table_" + Math.floor(Math.random() * 100000 + 1)
    }

    if (typeof this.__construct == 'function') {
        this.__construct();
    }
}

/**
 * Table 分页类
 */
function ListPage(obj) {

    var pagediv = "";

    this.render = function() {

    }
}

/**
 * 判断是不是百分比
 */
aku.isPercent = function(obj) {
    if ((typeof obj == "string") && obj.indexOf("%") != -1) {
        return true;
    }
    return false;
}

/**
 * query 转 json
 */
aku.queryToJson = function(data) {
    data = decodeURIComponent(data, true);
    data=data.replace(/&/g,"\",\"").replace(/=/g,"\":\"").replace(/\+/g," ").replace(/[\r\n]/g,"<br>");    
    data="{\""+data+"\"}";
    return JSON.parse(data);
}

aku.loader = new Loader();
aku.table = new ListTableManager();



// $("body").on("click", function() {
//     console.log("asdf");
//     // $("#flexigridColumnHeader").size()
// });

// $(document).click(function(){
    
//     if ($(".flexigridColumnHeader").length > 0) {
//         $(".flexigridColumnHeader").remove();
//     }
//     return false;
    
// });


