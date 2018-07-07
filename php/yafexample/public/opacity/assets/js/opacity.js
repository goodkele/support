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
                            console.log(index, layero);
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
}

/**
 * Table 类
 */
function ListTable(obj) {

    if (typeof obj != 'object') {
        return false;
    }

    var options = {
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
        method : '',    // 接口http请求类型，默认：get
        where : '', // 接口的其它参数。如：where: {token: 'sasasas', id: 123}
        headers : '',   // 接口的请求头。如：headers: {token: 'sasasas'}。注：该参数为 layui 2.2.6 开始新增
        request : '',   // 用于对分页请求的参数：page、limit重新设定名称，如：
        // request: {
        //   pageName: 'curr' //页码的参数名称，默认：page
        //   ,limitName: 'nums' //每页数据量的参数名，默认：limit
        // }              
        // 那么请求数据时的参数将会变为：?curr=1&nums=30
        response : '',  // 用于对返回的数据格式的自定义，如：
        // response: {
        //   statusName: 'status' //数据状态的字段名称，默认：code
        //   ,statusCode: 200 //成功的状态码，默认：0
        //   ,msgName: 'hint' //状态信息的字段名称，默认：msg
        //   ,countName: 'total' //数据总数的字段名称，默认：count
        //   ,dataName: 'rows' //数据列表的字段名称，默认：data
        // }                    
        // 你接口返回的数据格式，比如遵循 response 对应的字段名称。比如上面对应的格式为：
        
    };

    var colsOptions = {
         field : '', //    String  （必填项）设定字段名。字段名的设定非常重要，且是表格数据列的唯一标识
         title : '', //    String  （必填项）设定标题名称
         width : 0, //    Number/String   设定列宽（默认自动分配）。支持填写：数字、百分比。请结合实际情况，对不同列做不同设定。注意：如果是 layui 2.2.0 之前的版本，列宽必须设定一个固定数字
         minWidth : 60, // Number  （layui 2.2.1 新增）局部定义当前常规单元格的最小宽度（默认：60），一般用于列宽自动分配的情况。其优先级高于基础参数中的 cellMinWidth
         type : '', // String  设定列类型。可选值有：normal（常规列，无需设定）、checkbox（复选框列）、space（空列）、numbers（序号列）。注意：该参数为 layui 2.2.0 新增。而如果是之前的版本，复选框列采用 checkbox: true、空列采用 space: true
         sort : '', // Boolean 是否允许排序（默认：false）。如果设置 true，则在对应的表头显示排序icon，从而对列开启排序功能。注意：不推荐对值同时存在“数字和普通字符”的列开启排序，因为会进入字典序比对。比如：'贤心' > '2' > '100'，这可能并不是你想要的结果，但字典序排列算法（ASCII码比对）就是如此。
         initSort : '', // Object  初始排序状态。用于在数据表格渲染完毕时，默认按某个字段排序。注：该参数为 layui 2.1.1 新增
         unresize : '', // Boolean 是否禁用拖拽列宽（默认：false）。默认情况下会根据列类型（type）来决定是否禁用，如复选框列，会自动禁用。而其它普通列，默认允许拖拽列宽，当然你也可以设置 true 来禁用该功能。
         edit  : '', // 单元格编辑类型（默认不开启）目前只支持：text（输入框）	
         event : '', // 自定义单元格点击事件名，以便在 tool 事件中完成对该单元格的业务处理	
         style : '', //    String  自定义单元格样式。即传入 CSS 样式	
         align : '', //    String  单元格排列方式。可选值有：left（默认）、center（居中）、right（居右）
         toolbar : '', //  String  绑定列工具条。设定后，可在每行列中出现一些自定义的操作性按钮	
    }

    /**
     * 表头支持排序/按条件搜索。初始化排序
     * 表头支持自选择字段
     * 
     * 单元格支持拖拽大小
     * 
     * 
     */

    $.extend(options, obj);

    this.__construct = function() {
        if (!options.id) {
            options.id = this.calcTableId();
        }



        console.log(options);
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
function ListPage() {

}



aku.loader = new Loader();
aku.table = new ListTableManager();