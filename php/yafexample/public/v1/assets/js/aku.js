var aku = {};

function Menu() {

    /*
    招生推广
    呼叫中心
    学员管理
    合同签约
    教学管理
    活动中心
    资产管理
    积分商城
    财务管理
    协同办公
    员工管理
    统计报表
    家校互联
    系统配置
    */
    this.options = [
        {
            id : 1,
            name : '招生推广',
            level : 1,
            pid : 0,
            sub : [
                {
                    id : 100,
                    name : '微信公众号',
                    level : 2,
                    pid : 1,
                    sub : [
                        {
                            id : 1100001,
                            name : '微关注学员',
                            level : 3,
                            pid : 100,
                        }
                    ]
                },
                {
                    id : 101,
                    name : '手机短信管理',
                    level : 2,
                    pid : 1,
                    sub : [
                        {
                            id : 1101001,
                            name : '学员短信发送',
                            level : 3,
                            pid : 101,
                        }
                    ]
                }
            ],
        },
        {
            id : 2,
            name : '呼叫中心',
            level : 1,
            pid : 0,
            sub : [],
        },
        {
            id : 3,
            name : '学员管理',
            level : 1,
            pid : 0,
            sub : [],
        },
        {
            id : 4,
            name : '合同签约',
            level : 1,
            pid : 0,
            sub : [],
        },
        {
            id : 5,
            name : '教学管理',
            level : 1,
            pid : 0,
            sub : [],
        },
        {
            id : 6,
            name : '活动中心',
            level : 1,
            pid : 0,
            sub : [],
        },
        {
            id : 7,
            name : '资产管理',
            level : 1,
            pid : 0,
            sub : [],
        },
        {
            id : 8,
            name : '积分商城',
            level : 1,
            pid : 0,
            sub : [],
        },
        {
            id : 9,
            name : '财务管理',
            level : 1,
            pid : 0,
            sub : [],
        },
        {
            id : 10,
            name : '协同办公',
            level : 1,
            pid : 0,
            sub : [],
        },
        {
            id : 11,
            name : '员工管理',
            level : 1,
            pid : 0,
            sub : [],
        },
        {
            id : 12,
            name : '统计报表',
            level : 1,
            pid : 0,
            sub : [],
        },
        {
            id : 13,
            name : '家校互联',
            level : 1,
            pid : 0,
            sub : [],
        },
        {
            id : 14,
            name : '系统配置',
            level : 1,
            pid : 0,
            sub : [],
        },
    ];

    var menu = this;

    this.__construct = function() {

        // this.options

    }



    this.renderMenu = function() {
        var logoHtml = "<a id='logo' href='javascript:void(0);' class=' aWhite selected currentSelected' style='width:60px;height:60px; padding: 0 3px 0 2px;'>" + 
            "<img class='sex' style='border-radius: 40px;width: 40px;height: 40px;margin-top: 10px;' src='/assets/img/icon.jpg'  />" + 
        "</a>";

        var cells = [];
        for (var index in this.options) {
            cells.push("<a class='aWhite firstMenu ' href='javascript:void(0);' style='text-align: center;' data-id=\""+ this.options[index].id +"\" data-level=\""+ this.options[index].level +"\" >"+ this.options[index].name +"</a>") ;
        }
        
        $("#firstMenu").html('');
        $("#firstMenu").append(logoHtml);
        $("#firstMenu").append(cells.join("\n"));
    }

    this.bindEvent = function() {


        $("#firstMenu").on("mouseover", "a", function() {
            
            // 悬停
            if (aku.system.getConstCmf() == 1) {
                
            }

        })

        $("#firstMenu").on("mouseleave", "a", function () {

        });


        $("#firstMenu").on("click", "a", function () {
            
            $(".firstMenuSelectedTips").remove();

            $(this).append("<span class='firstMenuSelectedTips' style='top: 24.3929px;'><img src='/assets/img/ArrowLeft.png'></span>");

            // console.log($(this).data("id"))
            // console.log($(this).data("level"));

            var id = parseInt($(this).data("id"));
            var level = parseInt($(this).data("level"));
            
            // 非悬停
            if (aku.system.getConstCmf() == 0) {

                var module = menu.getModuleById(id);

                $("#menuNormalTopBar").removeClass("hidden");
                $("#menuNormal").removeClass("hidden");

            }

            

            // $("#childMenu");

            // menuNormalTopBar
            // menuNormal


        });

        this.getModuleById = function(id) {
            for (var index in this.options) {
                if (this.options[index].id == id) {
                    return this.options[index];
                }
                if (this.options[index].sub != undefined && this.options[index].sub.length > 0) {
                    for (var index2 in this.options[index].sub) {
                        if (this.options[index]['sub'][index2].id == id) {
                            return this.options[index]['sub'][index2];
                        }
                        if (this.options[index]['sub'][index2].sub != undefined && this.options[index]['sub'][index2].sub.length > 0) {
                            for (var index3 in this.options[index]['sub'][index2].sub) {
                                if (this.options[index]['sub'][index2]['sub'][index3].id == id) {
                                    return this.options[index]['sub'][index2]['sub'][index3];
                                }
                            }
                        }
                    }
                }
            }
        }

        // 


        // function leftMenuHover() {
        //     $(".firstMenu").on("mouseover", function () {
        //       $(this).addClass("selected");
        //       $(this).addClass("currentSelected");
        //       return false;
        //     })
      
        //     $(".firstMenu").on("mouseleave", function () {
        //       $(this).removeClass("selected");
        //       $(this).removeClass("currentSelected");
        //       return false;
        //     })
        //   }
      
        //   function logoEvent() {
      
        //     $("#logo").hover(function () {
        //       $("#settingForHover").removeClass("hidden");
        //     }, function () {
        //       $("#settingForHover").addClass("hidden");
        //     });
      
        //     $("#settingForHover").hover(function () {
        //       $("#settingForHover").removeClass("hidden");
        //     }, function () {
        //       $("#settingForHover").addClass("hidden");
        //     });
      
      
        //     $(".fixIndex").hover(function () {
        //       $("#settingForHover").removeClass("hidden");
        //     }, function () {
        //       $("#settingForHover").addClass("hidden");
        //     });
        //   }
    }

    this.autoResize = function() {
        
        var menuheight = aku.system.height - $("#logo").outerHeight();
        menuheight = menuheight < 0 ? 0 : menuheight;
        var menulength = $(".firstMenu").length;
        if (menulength) {
          menuheight = menuheight / menulength;
          menuheight = Math.round(menuheight * 10000) / 10000;
          menuheight = menuheight - 18;
        }
  
        $(".firstMenu").each(function (index, elem) {
          $(elem).css("height", menuheight + "px");
          $(elem).css("line-height", menuheight + "px");
        });
    }



    // 构造函数
    if (typeof this.__construct == 'function') {
        this.__construct();
    }
}

function LoadingMask() {

    this.maskHtml = "<div id=\"loading-pannel\">" + 
    "<div id='loading-mask'  ></div>" + 
    "<div id='loading'>" +
    "<div class=\"loading-indicator\">" +
    "<img src=\"/assets/img/loading.gif\" style=\"margin-right: 8px; float: left; vertical-align: top; margin-left: 136px\" />" +
    "<div id=\"loading-msg\" style=\"font-size: 12px; font-weight: normal;\">" +
    "执行中，请耐心等待 ..." +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>";

    this.__construct = function() {
        //$(document.body).append(this.maskHtml);
        //this.show();
    }

    this.show = function() {
        if ($("#loading-pannel").length <= 0) {
            $(document.body).append(this.maskHtml);
        }
    }

    this.hide = function() {
        if ($("#loading-pannel").length > 0) {
            $("#loading-pannel").remove();
        }
    }

    // 构造函数
    if (typeof this.__construct == 'function') {
        this.__construct();
    }
}

function System() {
    
    this.height = 0;
    this.width = 0;

    this.CONST_MENU_FLOAT = "const_cmf";

    this.__construct = function() {
        this.height = $(document.body).outerHeight();
        this.width = $(document.body).outerWidth();
    }

    this.getConstCmf = function() {
        var value = $.cookie(this.CONST_MENU_FLOAT);
        return parseInt(value == undefined ? 0 : value);
    }

    this.setConstCmf = function(value) {
        return $.cookie(this.CONST_MENU_FLOAT, value);
    }
    
    

    // 构造函数
    if (typeof this.__construct == 'function') {
        this.__construct();
    }
}


$(document.body).ready(function() {
    aku.system = new System();
    aku.menu = new Menu();
    aku.loadingMask = new LoadingMask();

    aku.menu.renderMenu();
    aku.menu.bindEvent();
    aku.menu.autoResize();
})

