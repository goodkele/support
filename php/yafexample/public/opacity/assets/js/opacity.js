var aku = {};

function Loader()
{
    this.timeStamp = null;

    this.post = function(title, sUrl, sQueryString, callbackFunc) {

        aku.layerShadeLoading();

        if ($(sQueryString).is("form")) {
            sQueryString = $(sQueryString).serialize();
        } 

        $.ajax({
            type: "POST",
            url : sUrl,
            data : sQueryString,
            dataType : 'text',
            success : function(data) {

                var obj;
                try {
                    obj=JSON.parse(data);
                } catch (err) { obj = data; }
                
                if(typeof obj == 'object' && obj ){
                    window.parent.layer.open({
                        closeBtn : 0,
                        title: title
                        ,content: obj.data,
                        btn1 : function(index, layero) {
                            console.log(index, layero);
                            window.parent.layer.close(index);
                        }
                      }); 
                }else{
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

    this.get = function(title, sUrl, sQueryString, callbackFunc) {
        
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

aku.loader = new Loader();