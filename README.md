# Table of Contents

---


* [运维](https://github.com/goodkele/support/blob/master/README.md#运维)
    * [Ubuntu环境搭建](https://github.com/goodkele/support/blob/master/README.md#Ubuntu环境搭建)
* [数据库](https://github.com/goodkele/support/blob/master/README.md#数据库)
    * [Redis](https://github.com/goodkele/support/blob/master/README.md#Redis)
* [后端](https://github.com/goodkele/support/blob/master/README.md#后端)
    * [PHP](https://github.com/goodkele/support/blob/master/README.md#PHP)
* [前端](https://github.com/goodkele/support/blob/master/README.md#前端)
    * [Javascript](https://github.com/goodkele/support/blob/master/README.md#Javascript)
* [产品](https://github.com/goodkele/support/blob/master/README.md#产品)
    * [SAAS学校管理系统](https://github.com/goodkele/support/blob/master/README.md#SAAS学校管理系统)
* [开源项目](https://github.com/goodkele/support/blob/master/README.md#开源项目)
    * [框架](https://github.com/goodkele/support/blob/master/README.md#框架)
    * [CRM](https://github.com/goodkele/support/blob/master/README.md#CRM)




# 运维

## Ubuntu环境搭建
* sudo apt install gcc g++ 
* sudo apt install make make-guide

* sudo apt install openssl libssl-dev  
* sudo apt install libpcre3 libpcre3-dev   
* sudo apt install zlib1g-dev  


* mount -t vboxsf www /data/www

* sudo apt-get update;
* sudo apt-get install mysql-server ;
* sudo mysql_secure_installation;

* grant all privileges on *.* to 'root'@'%' identified by 'xxxxxx';


grant all privileges on *.* to 'root'@'%' identified by '!Mima2008';

* mysql启动 sudo service mysql start;
* mysql关闭 sudo service mysql stop;
* mysql重启 sudo service mysql restart;

* apt install php7.2 php7.2-common php7.2-dev php7.2-fpm php7.2-mbstring php7.2-xml php7.2-opcache php7.2-mysql php7.2-gd php7.2-curl
* service php7.2-fpm start
* service php7.2-fpm stop
* service php7.2-fpm restart

* sudo apt-get install nginx

* netstat -an|grep 3306


* apt-get install postgresql-10
* apt-get install pgadmin3
* apt-get install postgresql-10-postgis-2.4
* apt-get install postgresql-server-dev-10
* apt-get install install postgresql-common
* apt-get install postgresql-10-plr
* apt-get install postgresql-contrib

# 后端

## PHP

* [PSR PHP 标准规范](https://psr.phphub.org/) 
* [PDO 防止SQL注入](https://www.zhihu.com/question/23922206)
* [phpspider](https://github.com/owner888/phpspider)
* [浅谈数据仓库建设中的数据建模方法](https://www.ibm.com/developerworks/cn/data/library/techarticles/dm-0803zhousb/index.html)
* [跨站请求伪造 CSRF ](https://zh.wikipedia.org/wiki/%E8%B7%A8%E7%AB%99%E8%AF%B7%E6%B1%82%E4%BC%AA%E9%80%A0)
* [Web 应用程序常见漏洞 CSRF 的入侵检测与防范](https://www.ibm.com/developerworks/cn/rational/r-cn-webcsrf/)
* [源码解读：php artisan serve](https://zhuanlan.zhihu.com/p/27573264)
* [md5/sha1+salt和Bcrypt](http://www.cnblogs.com/lixiong/archive/2011/12/24/2300098.html)
* [彻底理解PHP的SESSION机制](http://www.cnblogs.com/acpp/archive/2011/06/10/2077592.html)
* [C# 封装miniblink 使用HTML/CSS/JS来构建.Net 应用程序界面和简易浏览器](https://www.cnblogs.com/dskin/p/8664912.html)
* [使用 TCPDF 动态创建 PDF](https://www.ibm.com/developerworks/cn/opensource/os-tcpdf/index.html)
* [PHPExcel 最新版本](https://github.com/PHPOffice/PhpSpreadsheet)
* [下载量最高的 50 个 Laravel 扩展包](https://github.com/godruoyi/laravel-package-top)
* [php Markdown解析器](http://parsedown.org/)
* [uuid v1 之 v5](http://www.postgres.cn/docs/9.4/uuid-ossp.html)
* [pgSql 手册](http://www.postgres.cn/docs/9.4/index.html)
* [大家都是如何收集系统日志并进行分析的？](https://www.zhihu.com/question/21427267)
* [laravel验证表单文档](https://docs.golaravel.com/docs/5.0/validation/)
* [laravel表单验证](https://blog.csdn.net/woshihaiyong168/article/details/53406149)
* [Laravel教程 七：表单验证 Validation](https://www.codecasts.com/blog/post/programming-with-laravel-5-form-request-and-validation)
* [HTTP 消息结构](http://www.runoob.com/http/http-messages.html)
* [jquery ajax发送Post请求，如何添加请求头](https://www.oschina.net/question/263977_57725)
* [jQuery AJAX 方法](http://www.runoob.com/jquery/jquery-ref-ajax.html)
* [jQuery ajax - ajax() 方法](http://www.w3school.com.cn/jquery/ajax_ajax.asp)


# 前端

## Javascript

* [阮一峰 React 入门实例教程](https://www.cnblogs.com/axl234/p/8269018.html)
* [阮一峰 react-demos 源代码](https://github.com/ruanyf/react-demos)
* [阮一峰 webpack-demos 源代码](https://github.com/ruanyf/webpack-demos)
* [create-react-app的使用及原理分析](https://www.cnblogs.com/axl234/p/8269018.html)
* [Layui Layui/LayaAdmin/Lay论坛](http://www.layui.com/)

## Redis
* [使用 redis-py 储存地理位置数据](https://zhuanlan.zhihu.com/p/22067024)
* [Redis环境搭建和代码测试及与GIS结合的GEO数据类型预研](http://www.cnblogs.com/naaoveGIS/p/6728459.html)
* [WebGIS中GeoHash编码的研究和扩展](http://www.cnblogs.com/naaoveGIS/p/5164187.html)
* [阿里云Redis GEO地理位置功能上线啦](https://yq.aliyun.com/articles/62844)
* [Redis持久化方式对比](http://www.cnblogs.com/wupeixuan/p/8667335.html)

# 产品

## SAAS学校管理系统

* [ETM早教管理系统](http://www.etmcn.com/html/)
* [爱校-学校管理系统](http://www.xiaohe.com/)

## 创新产品
* [他是实体商圈的空中雷达 消费数据分析店铺现状 指导经营选址](https://www.pencilnews.cn/p/8357.html)
* [小满信息](http://www.xmandata.com/index.html#position-advantage)

# 开源项目

## 框架
* [Yay](http://www.laruence.com/manual/)
* [CI](http://codeigniter.org.cn/)
* [Laravel](https://www.golaravel.com/)
* [Lumen](https://lumen.golaravel.com/)
* [yii](http://www.yiichina.com/)
* [Symphony](https://www.oschina.net/p/symfony)
* [Kohana](https://www.oschina.net/p/kohana)
* [ThinkPHP](http://www.thinkphp.cn/)
* [BaigoSSO 单点登录系统](https://www.oschina.net/p/baigosso)
* [Oauth](https://www.oschina.net/p/oauth)
* [Drupal](https://www.oschina.net/p/drupal)

## CRM

* [然之协同办公](https://www.oschina.net/p/ranzhi)
* [喧喧-燃之团队](https://www.oschina.net/p/xuanxuan)
* [SugarCRM](https://www.oschina.net/p/sugarcrm)
* [TpFlow-工作流插件](https://www.oschina.net/p/tpflow)
* [ONES-开源企业管理软件](https://www.oschina.net/p/open-x)
* [小微OA](https://www.oschina.net/p/smeoa)
* [悟空CRM](https://www.oschina.net/p/5kcrm)
* [Openbia OA](https://www.oschina.net/p/openbiz-oa)
* [mallerp 订单管理系统](https://www.oschina.net/p/mallerp)
* [CourseSEL 在线选课系统](https://www.oschina.net/p/coursesel)
* [易课CRM](https://www.oschina.net/p/c3crm)
* [蓝科PHP后台权限管理系统-集成RBAC](https://www.oschina.net/p/ranko-php-basictemplate)
* [Phpcj-中学成绩查询分析](https://www.oschina.net/p/phpcj)
* [SimpleHRM人力资源管理系统](https://www.oschina.net/p/simplehrm)
* [HornERP-OpenERP中国本地化改造项目](https://www.oschina.net/p/hornerp)
* [CuteFlow工作流工具](https://www.oschina.net/p/cuteflow)
* [OpenX开源广告发布系统](https://www.oschina.net/p/openx)
* [BlueERP 财务管理系统](https://www.oschina.net/p/blueerp)
* 
## 社区

* [EoenYoubbs](https://www.oschina.net/p/youbbs-eoen)
* [PHPDish-Symfony社区](https://www.oschina.net/p/phpdish)
* [MonicaHQ个人人际关系管理软件](https://www.oschina.net/p/monicahq)
* [Modoer-PHP点评系统](https://www.oschina.net/p/modoer)
* [OpenCenter-PHP通用用户中心框架](https://www.oschina.net/p/opencenter)
* [拍旁轻博客](https://www.oschina.net/p/paipang)
* [PHP168 独立分类信息系统](https://www.oschina.net/p/php168)
* [UCenter Home](https://www.oschina.net/p/ucenter+home)

## 集成SDK
* [PaySDK-微信支付宝支付接口](https://www.oschina.net/p/pay-sdk)
* [LaneWeChat](https://www.oschina.net/p/lanewechat)
* [Wechat-php-sdk 微信公众平台PHP开发包](https://www.oschina.net/p/wechat-php-sdk)
* [Wechat-sdk-php PHP微信SDK](https://www.oschina.net/p/wechat-sdk-php)
* [CI_WeChat-PHP-SDK-CodeIgniter 微信开发类库](https://www.oschina.net/p/ci_wechat-php-sdk)

## 商城
* [Magento](https://www.oschina.net/p/magento)
* [ECJia到家O2O移动电商系统](https://www.oschina.net/p/ecjia-daojia)
* [WduWind在线教育建站工具](https://www.oschina.net/p/eduwind)

## 微信
* [iWshop微信开源商城](https://www.oschina.net/p/iwshop)
* [RhaPHP微信小程序，公众号管理系统](https://www.oschina.net/p/rhaphp)
* [Weiphp微信开发平台](https://www.oschina.net/p/weiphp)
* [Wasy-WeChat](https://www.oschina.net/p/easy-wechat)
* [微擎-微信公众平台自主引擎](https://www.oschina.net/p/we7-weixin)
* [微笑微信](https://www.oschina.net/p/sylai)

## 其他
* [Yourls-短网址服务](https://www.oschina.net/p/yourls)
* [Beanbun爬虫](https://www.oschina.net/p/beanbun)
* [XunSearch-全文搜索引擎](https://www.oschina.net/p/xunsearch)
* [Php-logstash-日志文件监控转存](https://www.oschina.net/p/php-logstash)
* [pChart-PHP图表制作](https://www.oschina.net/p/pchart)
* [Pikik 网站访问统计系统](https://www.oschina.net/p/piwik)
* [ClickHeat网站热图生成工具](https://www.oschina.net/p/clickheat)
* [Phpml基于PHP-ML库实现的机器学习](https://www.oschina.net/p/phpml)
* [HyperDown-PHP Markdown 解析器](https://www.oschina.net/p/hyperdown)
* [最小物联网系统IOT](https://www.oschina.net/p/iot-BareMinimum)
* [Devana战争策略网页游戏](https://www.oschina.net/p/devana)
* [Yioop PHP搜索引擎](https://www.oschina.net/p/yioop)
* [QuoraCms](https://www.oschina.net/p/quoracms)
* [部落战争](https://github.com/Shadowss/TravianZ)
* [Phaos-MRPG游戏](https://www.oschina.net/p/phaos)
* [Help Desk](http://www.hesk.com/)



# Other
* QPS计算公式，80%的请求发生在40%的时间里，每台服务器请求数量 = ((80%*总PV量) / (24小时 * 60分钟 * 40%))。例500W PV的网站，(0.8* 50000000) / (24*60*60*0.4) =1157。峰值没秒处理1157个请求



* RBAC https://blog.csdn.net/painsonline/article/details/7183613/



# 国家地区语言缩写码

    国家/地区	语言代码	国家/地区	语言代码
    简体中文(中国)	zh-cn	繁体中文(台湾地区)	zh-tw
    繁体中文(香港)	zh-hk	英语(香港)	en-hk
    英语(美国)	en-us	英语(英国)	en-gb
    英语(全球)	en-ww	英语(加拿大)	en-ca
    英语(澳大利亚)	en-au	英语(爱尔兰)	en-ie
    英语(芬兰)	en-fi	芬兰语(芬兰)	fi-fi
    英语(丹麦)	en-dk	丹麦语(丹麦)	da-dk
    英语(以色列)	en-il	希伯来语(以色列)	he-il
    英语(南非)	en-za	英语(印度)	en-in
    英语(挪威)	en-no	英语(新加坡)	en-sg
    英语(新西兰)	en-nz	英语(印度尼西亚)	en-id
    英语(菲律宾)	en-ph	英语(泰国)	en-th
    英语(马来西亚)	en-my	英语(阿拉伯)	en-xa
    韩文(韩国)	ko-kr	日语(日本)	ja-jp
    荷兰语(荷兰)	nl-nl	荷兰语(比利时)	nl-be
    葡萄牙语(葡萄牙)	pt-pt	葡萄牙语(巴西)	pt-br
    法语(法国)	fr-fr	法语(卢森堡)	fr-lu
    法语(瑞士)	fr-ch	法语(比利时)	fr-be
    法语(加拿大)	fr-ca	西班牙语(拉丁美洲)	es-la
    西班牙语(西班牙)	es-es	西班牙语(阿根廷)	es-ar
    西班牙语(美国)	es-us	西班牙语(墨西哥)	es-mx
    西班牙语(哥伦比亚)	es-co	西班牙语(波多黎各)	es-pr
    德语(德国)	de-de	德语(奥地利)	de-at
    德语(瑞士)	de-ch	俄语(俄罗斯)	ru-ru
    意大利语(意大利)	it-it	希腊语(希腊)	el-gr
    挪威语(挪威)	no-no	匈牙利语(匈牙利)	hu-hu
    土耳其语(土耳其)	tr-tr	捷克语(捷克共和国)	cs-cz
    斯洛文尼亚语	sl-sl	波兰语(波兰)	pl-pl
    瑞典语(瑞典)	sv-se	西班牙语 (智利)	es-cl


