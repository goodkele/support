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
        cols : [],  // Array 置表头。值是一个二维数组。方法渲染方式必填
        width : '', // Number 设定容器宽度。table容器的默认宽度是跟随它的父元素铺满，你也可以设定一个固定值，当容器中的内容超出了该宽度时，会自动出现横向滚动条。
        height : '', // Number/String
        cellMinWidth : '',  // Number 
        done : '', // Function 数据渲染完的回调。你可以借此做一些其它的操作
        data : '',  // Array 直接赋值数据。既适用于只展示一页数据，也非常适用于对一段已知数据进行多页展示。	
        page : '',  // Boolean 开启分页（默认：true）
        limit : '', // Number 每页显示的条数（默认：10）。值务必对应 limits 参数的选项。优先级低于 page 参数中的 limit 参数。
        limits : '',    // Array 每页条数的选择项，默认：[10,20,30,40,50,60,70,80,90]。优先级低于 page 参数中的 limits 参数。
        loading : '',   //  Boolean 是否显示加载条（默认：true）。如果设置 false，则在切换分页时，不会出现加载条。该参数只适用于 url 参数开启的方式
        text : '',  // Object 自定义文本，如空数据时的异常提示等。注：layui 2.2.5 开始新增。
        initSort :'',   // Object 初始排序状态。用于在数据表格渲染完毕时，默认按某个字段排序。注：该参数为 layui 2.1.1 新增
        
    };

    $.extend(options, obj);

    this.__construct = function() {
        if (!options.id) {
            options.id = this.calcTableId();
        }


    

        console.log(options);
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