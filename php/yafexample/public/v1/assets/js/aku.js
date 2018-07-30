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

    this.firstModuleId;
    this.thirdModuleId;

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

        // 悬停
        $(".firstMenu").on("mouseover", function() {
            // 悬停
            if (aku.system.getConstCmf() == 1) {
                $(".firstMenu").removeClass("menuHover1");
                $(this).addClass("menuHover1");
                menu.firstModuleId = $(this).data("id");
                // 显示浮动
                menu.floatSecMenu();
                var offset = $(this).offset();
                $("#floatMenu").css("top", offset.top);
            }
        })
        $("#firstMenu").on("mouseleave", function () {
            if (aku.system.getConstCmf() == 1) {
                $(this).removeClass("menuHover1");
                menu.floatSecMenuHide();
            }
        });
        $("#floatMenu").on("mouseover", function() {
            $("#floatMenu").removeClass("hidden");
        });
        $("#floatMenu").on("mouseleave", function() {
            $(".firstMenu").removeClass("menuHover1");
            $("#floatMenu").addClass("hidden");
        });
        
        // 固定
        $("#firstMenu").on("click", "a", function () {

            var id = parseInt($(this).data("id"));
            var level = parseInt($(this).data("level"));

            // 非悬停
            if (aku.system.getConstCmf() == 0) {

                menu.firstModuleId = $(this).data("id");

                $(".firstMenuSelectedTips").remove();
                $(this).append("<span class='firstMenuSelectedTips' style='top: 24.3929px;'><img src='/assets/img/ArrowLeft.png'></span>");
    
                $(".firstMenu").removeClass("selected currentSelected");
                $(this).addClass("selected currentSelected");

                menu.fixedSecMenu();

            }

        });

        // logo
        $("#logo").on("mouseover", function() {
            menu.settingForHover();
        });
        $("#logo").on("mouseleave", function() {
            menu.settingForHoverHide();
        });

        // 切换浮动／固定
        $("#btnFloatTop").on("click", function() {
            aku.system.setConstCmf(1);
        });
        $("#btnFloatNormal").on("click", function() {
            aku.system.setConstCmf(0);
        });

    }
    


    // 显示浮动菜单
    this.floatSecMenu = function() {
        $("#floatMenu").removeClass("hidden");

        // console.log(this.firstModuleId);
        // return;

        var firstModuleId = this.firstModuleId;

        var module = this.getModuleById(firstModuleId);

        if (!$.isEmptyObject(module)) {

            $("#floatMenu").find(".firstMenuContent").html(module.name);

            var table = document.createElement("table");
            $(table).prop("cellpadding", "0");
            $(table).prop("cellspacing", "0");

            $(table).append("<tbody></tbody>");

            $("#floatMenu").find(".otherMenuContent").html("");
            $("#floatMenu").find(".otherMenuContent").append(table);

            for (var index in module.sub) {

                var tr = document.createElement("tr");

                $(tr).append("<td valign=\"top\" class=\"floatSecMenu borderBottom\">"+ module.sub[index].name +"</td>");

                var td = document.createElement("td");
                $(td).addClass("borderBottom");
                for (var index2 in module.sub[index].sub) {
                    $(td).append("<a class=\"thirdMemu aNormal thirdMemuDisplay "+ (menu.thirdModuleId == module.sub[index]['sub'][index2].id ? 'selected currentThirdMemuSelected' : '') +"\" target=\"content\" href=\"\">"+ module.sub[index]['sub'][index2].name +"</a>");
                }
                $(td).append("<div class=\"clear\"></div>");
                $(tr).append(td);
                $("#floatMenu").find("tbody").append(tr);
            }

        }

    }
    // 隐藏浮动菜单
    this.floatSecMenuHide = function() {
        $("#floatMenu").addClass("hidden");
    }
    // 显示固定菜单
    this.fixedSecMenu = function() {

        var id = this.firstModuleId;
        var firstModuleId = this.firstModuleId;
        var module = this.getModuleById(firstModuleId);

        

        if (!$.isEmptyObject(module)) {

            // $(".firstMenuSelectedTips").remove();
            // $(this).append("<span class='firstMenuSelectedTips' style='top: 24.3929px;'><img src='/assets/img/ArrowLeft.png'></span>");

            // $(".firstMenu").removeClass("selected currentSelected");
            // $(this).addClass("selected currentSelected");

            // var module = menu.getModuleById(id);



            $("#menuNormalTopBar").find(".d").html(module.name);

            if (module.sub != undefined && module.sub.length > 0) {

                var secMemuSelectId;
                
                $("#menuNormal").html("");

                for (var index in module.sub) {

                    secMemuSelectId = (secMemuSelectId == undefined ? module.sub[index].id : secMemuSelectId);
                    
                    var secMemu = "<a class=\"secMemu aNormal secUnSelected  secmodule_"+ module.sub[index].id +"\" data-id=\""+ module.sub[index].id +"\" data-pid=\""+ module.sub[index].pid +"\" href=\"javascript:void(0);\">" + module.sub[index].name +
                    "<span class=\"secMenuSelectedTips\">"  +
                        // "<img class=\"arrowDown\" src=\"/assets/img/ArrowDown.png\">" + 
                        "<img class=\"arrowRight\" src=\"/assets/img/ArrowRight.png\">" + 
                    "</span>" +
                    "</a>";

                    secMemu = $.parseHTML(secMemu);
                    secMemu = ($.isArray(secMemu) && secMemu.length > 0) ? secMemu[0] : {};

                    $(secMemu).on("click", function() {

                        $(".secMemu img").each(function(elemindex, elem) {
                            // "<img class=\"arrowRight\" src=\"/assets/img/ArrowRight.png\">" + 
                            $(elem).removeClass("arrowRight arrowDown");
                            $(elem).addClass("arrowRight");
                            $(elem).prop("src", "/assets/img/ArrowRight.png");
                        })

                        $(".secMemu").removeClass("secMemuBg");
                        $(".secmodule_" + $(this).data("id")).addClass("secMemuBg");

                        $(".thirdMenus").addClass("hidden");
                        $(".secmenulist_" + $(this).data("id")).removeClass("hidden");

                        $(this).find("img").removeClass("arrowRight");
                        $(this).find("img").addClass("arrowDown");
                        $(this).find("img").prop("src", "/assets/img/ArrowDown.png");

                    });
                    
                    var thirdMenus = "<div class=\"thirdMenus secmenulist_"+ module.sub[index].id  +" hidden\"></div>";

                    thirdMenus = $.parseHTML(thirdMenus);
                    thirdMenus = ($.isArray(thirdMenus) && thirdMenus.length > 0) ? thirdMenus[0] : {};

                    if (module.sub[index].sub != undefined && module.sub[index].sub.length > 0) {

                        for (var index2 in module.sub[index].sub) {
                            
                            var a = "<a class=\"thirdMemu aNormal thirdMemuDisplay\" data-id=\""+ module.sub[index]['sub'][index2].id +"\" data-pid=\""+ module.sub[index]['sub'][index2].pid +"\" target=\"content\">"+ module.sub[index]['sub'][index2].name +"</a>";
                            a = $.parseHTML(a);
                            a = ($.isArray(a) && a.length > 0) ? a[0] : {};

                            $(a).on("click", function() {
                                $(".thirdMemu").removeClass("selected currentThirdMemuSelected");
                                $(this).addClass("selected currentThirdMemuSelected");
                            });

                            $(a).on("mouseover", function() {
                                if (!$(this).hasClass("currentThirdMemuSelected")) {
                                    $(this).addClass("menuHover");
                                }
                            })
                    
                            $(a).on("mouseleave", function () {
                                $(this).removeClass("menuHover");
                            });

                            $(thirdMenus).append(a);
                        }
                    }

                    var bottomBar = "<div class=\"bottomBar\">&nbsp;</div>";

                    $("#menuNormal").append(secMemu);
                    $("#menuNormal").append(thirdMenus);
                    $("#menuNormal").append(bottomBar);
                }

                if (secMemuSelectId != undefined) {
                    $(".secmodule_" + secMemuSelectId).addClass("secMemuBg");
                    $(".secmenulist_" + secMemuSelectId).removeClass("hidden");

                    $(".secmodule_" + secMemuSelectId).find("img").removeClass("arrowRight");
                    $(".secmodule_" + secMemuSelectId).find("img").addClass("arrowDown");

                    $(".secmodule_" + secMemuSelectId).find("img").prop("src", "/assets/img/ArrowDown.png");
                }

            }

            $("#menuNormalTopBar").removeClass("hidden");
            $("#menuNormal").removeClass("hidden");

        }
    }
    // 隐藏固定菜单
    this.fixedSecMenuHide = function() {

    }
    // 显示设置菜单
    this.settingForHover = function() {

        if ($("#settingForHover").length > 0) {
            $("#settingForHover").removeClass("hidden");
            return;
        }

        var html = "<div id=\"settingForHover\" class=\"borderRight textAlignLeft borderBottom \">" +

        "<div class=\"settingNormal1\">" + 
        "<input type=\"image\" name=\"btnLogOut11\" id=\"btnLogOut11\" title=\"安全退出\" src=\"/assets/img/logout.png\" style=\"border-width:0px;\"/>" + 

        "<div class=\"bottomBarForSetting\">" +
        "<span class=\"userNameStr\" style='font-size:16px;'>18616126092</span>" +
        "<span class=\"otherInfo userico\">校长</span>" +
        // "<span class=\"otherInfo signtimeico\">个人考勤</span>" +
        "</div>" +

        "<div class=\"borderBottom\">" + 
        "<table cellpadding=\"0\" cellspacing=\"0\" class=\"settingHeader\">" + 
        "<tr>" + 
        "<td id=\"btnHelp\">" + 
        "<i class=\"icon iconfont icon-shiyongbangzhu\" data-name=\"shiyongbangzhu\" data-sourceclass=\"icon-shiyongbangzhu\" data-hoverclass=\"icon-shiyongbangzhu-hover\" style=\"font-size: 40px;\"></i>" + 
        "<div class=\"name\">使用帮助</div>" + 
        "</td>" + 
        "<td id=\"btnUserCenter\" class=\"borderRight borderLeft\">" + 
        "<i class=\"icon iconfont icon-gerenziliao\" data-name=\"gerenziliao\" data-sourceclass=\"icon-gerenziliao\" data-hoverclass=\"icon-gerenziliao-hover\" style=\"font-size: 40px;\"></i>" + 
        "<div class=\"name\">个人中心</div>" + 
        "</td>" + 
        "<td id=\"btnHome\" class=\"borderRight\">" + 
        "<i class=\"icon iconfont icon-wodezhuomian\" data-name=\"wodezhuomian\" data-sourceclass=\"icon-wodezhuomian\" data-hoverclass=\"icon-wodezhuomian-hover\" style=\"font-size: 40px;\"></i>" + 
        "<div class=\"name\">我的桌面</div>" + 
        "</td>" + 
        "<td id=\"btnLockScreen\">" + 
        "<i class=\"icon iconfont icon-xitongsuoping\" data-name=\"xitongsuoping\" data-sourceclass=\"icon-xitongsuoping\" data-hoverclass=\"icon-xitongsuoping-hover\" style=\"font-size: 40px;\"></i>" + 
        "<div class=\"name\">系统锁屏</div>" + 
        "</td>" + 
        "</tr>" + 
        "</table>" + 
        "</div>" + 

        "<div class=\"info\">" + 
        "<div class=\"borderBottom\" style=\"margin-bottom: 10px; margin-top: 0px;\">" + 
        "<img src=\"/assets/img/logo.gif\" id=\"img_logo\" style=\"margin-bottom: 10px;\" />" + 
        "</div>" + 
        "<div>ETM早教管家</div>" + 
        "<div>当前版本：v11.0.0.0</div>" + 
        "<table cellpadding=\"0\" cellspacing=\"0\">" + 
        "<tr>" + 
        "<td align=\"left\" class='langbtn'>" + 
        "</td>" + 
        "<td align=\"center\">" + 
        "<div id=\"langContainer\" style='display:none;'>" + 
        "<input type='button' id=\"langSelect\" value='简体中文' class='button'  />" + 
        "<img src=\"/assets/img/ArrowDown2.png\" />" + 
        "</div>" + 
        "</td>" + 
        "<td align=\"right\" class='langbtn'>" + 
        "</td>" + 
        "</tr>" + 
        "</table>" + 
        "<div class=\"cc\">Copyright © 2018</div>" + 
        "<div class=\"clear\"></div>" + 
        "</div>" + 
        "</div>" +
        
        "</div>" ;

        html = $.parseHTML(html);
        html = ($.isArray(html) && html.length > 0) ? html[0] : {};

        // sourceclass
        // overclass

        $(html).find(".iconfont").on("mouseover", function() {
            $(html).find(".iconfont").each(function(index, elem) {
                $(elem).removeClass($(elem).data("hoverclass"));
                $(elem).addClass($(elem).data("sourceclass"));
            });
            $(this).removeClass($(this).data("sourceclass"));
            $(this).addClass($(this).data("hoverclass"));
        });

        $(html).find(".iconfont").on("mouseleave", function() {
            $(html).find(".iconfont").each(function(index, elem) {
                $(elem).removeClass($(elem).data("hoverclass"));
                $(elem).addClass($(elem).data("sourceclass"));
            });
        });


        $(html).find(".iconfont").on("click", function() {
             
            switch ($(this).data('name')) {
                case "shiyongbangzhu" : 
                menu.clickShiyongbangzhu();
                break;
                case "gerenzhongxin" : 
                menu.clickGerenzhongxin();
                break;
                case "wodezhuomian" : 
                menu.clickWodezhuomian();
                break;
                case "xitongsuoping" : 
                menu.clickXitongsuoping();
                break;
            }
        });

        // iconfont
        
        $(html).on("mouseover", function() {
            menu.settingForHover();
        });
        $(html).on("mouseleave", function() {
            menu.settingForHoverHide();
        });
        
        $(document.body).append(html);

    }
    // 隐藏设置菜单
    this.settingForHoverHide = function() {
        if ($("#settingForHover").length > 0) {
            $("#settingForHover").addClass("hidden");
        }
    }

    // 点击使用帮助
    this.clickShiyongbangzhu = function() {
        aku.loadingHelp.show();
    }
    // 点击个人中心
    this.clickGerenzhongxin = function() {

    }
    // 点击我的桌面
    this.clickWodezhuomian = function() {

    }
    // 点击系统锁屏
    this.clickXitongsuoping = function() {
        aku.loadingLockScreen.show();
    }

    // 根据module Id 获得数据
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

function LoadingHelp() {

    this.html = "<div id=\"loading-helppannel\" class=\"kf \">" +
    "<div class=\"kefu\" style=\"top: 200px;\">" +
    "<div class=\"kf-close\">×</div>" +
    "<h3>尊敬的客户您好！您的一对一客服已在线上</h3>" +
    "<div class=\"kf-li kf-dh\">4000-313-400</div>" +
    "<div class=\"kf-li kf-wx\">" +
    "<a class=\"kf-a a-green\">微信咨询</a>" +
    "<img class=\"kf-wxhm\" src=\"/assets/img/etm-wx.png\" style=\"width:180px; height:180px;\" alt=\"\">" +
    "</div>" +
    "<div class=\"kf-li kf-qq\">" +
    "<a class=\"kf-a a-blue\" href=\"http://b.qq.com/webc.htm?new=0&sid=4000313400&o=etmcn.com&q=7\" target=\"_blank\">QQ咨询</a>" +
    "</div>" +
    "</div>" +
    "</div>";

    {/* <div class="kf-sure">
      <div class="kefu-wrong hidden" id="kefu-wrong">
        <div class="wrong-text">请输入正确的手机号或者固定电话</div>
        <a class="kf-a a-gray rewriteit">确定</a>
      </div>
    </div> */}

    this.__construct = function() {

        var help = this;

        var html = $.parseHTML(this.html);
        html = ($.isArray(html) && html.length > 0) ? html[0] : {};

        $(html).find(".kf-close").on("click", function() {
            help.hide();
        });

        this.html = html;
    };

    this.show = function() {
        if ($("#loading-helppannel").length <= 0) {
            $(document.body).append(this.html);
        };
    }

    this.hide = function() {
        if ($("#loading-helppannel").length > 0) {
            $("#loading-helppannel").remove();
        }
    }

    // 构造函数
    if (typeof this.__construct == 'function') {
        this.__construct();
    }
}

function LoadingLockScreen () {
    this.html = "<div id=\"lockScreen\" class=\"hidden\">" + 
    "<div id=\"moveLock\" class=\"lockNormal\">&nbsp;</div>" + 
    "</div>";

    this.__construct = function() {
    }

    this.show = function() {

        if ($("#lockScreen").length <= 0) {
            var help = this;
            var html = $.parseHTML(this.html);
            html = ($.isArray(html) && html.length > 0) ? html[0] : {};

            $(html).css("width", aku.system.width + "px");
            $(html).css("height", aku.system.height + "px");
    
            $(html).find("#moveLock").css("left", (aku.system.width/2 - ($(html).find("#moveLock").outerWidth() / 2)) + "px");
    
            $(html).find("#moveLock").on("mouseover", function() {
                $(this).removeClass("lockNormal");
                $(this).addClass("lockHover");
            })
    
            $(html).find("#moveLock").on("mouseleave", function() {
                $(this).removeClass("lockHover");
                $(this).addClass("lockNormal");
            });
    
            $(html).find("#moveLock").on("click", function() {
                help.hide();
            });
    
            $(document.body).append(html);

            $("#lockScreen").slideDown();
        };
    }

    this.hide = function() {
        if ($("#lockScreen").length > 0) {
            $("#lockScreen").slideUp("fast", function() {
                $("#lockScreen").remove();
            });
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
    aku.loadingHelp = new LoadingHelp();
    aku.loadingLockScreen = new LoadingLockScreen();

    aku.menu.renderMenu();
    aku.menu.bindEvent();
    aku.menu.autoResize();
})

