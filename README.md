# Table of Contents

---

1. Programming Language
2. Operating System
3. Software Design
4. Other

## 1 Programming Language
* PHP
	* PHP 安装
	* PHP性能分析工具xhprof，图形化工具xhgui
	* 日志，程序日志通过LogStash进入到ElasticSearch，使用Kibana搜索。业务日志通过LogStash落地日志服务器
* GO
* expect


## 3 Design
* [游戏制作与发布流程](设计-制作与发布流程.md)
* [PHPNET架构](设计-PHPNET架构.md)

## 4 Other
* QPS计算公式，80%的请求发生在40%的时间里，每台服务器请求数量 = ((80%*总PV量) / (24小时 * 60分钟 * 40%))。例500W PV的网站，(0.8* 50000000) / (24*60*60*0.4) =1157。峰值没秒处理1157个请求
* Help Desk http://www.hesk.com/
* 电商 https://www.prestashop.com/


