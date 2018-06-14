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

* mysql启动 sudo service mysql start;
* mysql关闭 sudo service mysql stop;
* mysql重启 sudo service mysql restart;

* apt install php7.2 php7.2-common php7.2-dev php7.2-fpm php7.2-mbstring php7.2-xml php7.2-opcache php7.2-mysql php7.2-gd php7.2-curl
* service php7.2-fpm start
* service php7.2-fpm stop
* service php7.2-fpm restart

* sudo apt-get install nginx

* netstat -an|grep 3306






# 后端

## PHP

* [PSR PHP 标准规范](https://psr.phphub.org/) 
* [PDO 防止SQL注入](https://www.zhihu.com/question/23922206)
* [phpspider](https://github.com/owner888/phpspider)
* [浅谈数据仓库建设中的数据建模方法](https://www.ibm.com/developerworks/cn/data/library/techarticles/dm-0803zhousb/index.html)
* [跨站请求伪造 CSRF ](https://zh.wikipedia.org/wiki/%E8%B7%A8%E7%AB%99%E8%AF%B7%E6%B1%82%E4%BC%AA%E9%80%A0)
* [Web 应用程序常见漏洞 CSRF 的入侵检测与防范](https://www.ibm.com/developerworks/cn/rational/r-cn-webcsrf/)
* [源码解读：php artisan serve](https://zhuanlan.zhihu.com/p/27573264)

# 前端

## Javascript

* [阮一峰 React 入门实例教程](https://www.cnblogs.com/axl234/p/8269018.html)
* [阮一峰 react-demos 源代码](https://github.com/ruanyf/react-demos)
* [阮一峰 webpack-demos 源代码](https://github.com/ruanyf/webpack-demos)
* [create-react-app的使用及原理分析](https://www.cnblogs.com/axl234/p/8269018.html)
* [Layui Layui/LayaAdmin/Lay论坛](http://www.layui.com/)

## Redis
* [使用 redis-py 储存地理位置数据](https://zhuanlan.zhihu.com/p/22067024)


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
