# Table of Contents

---



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

## Redis
* [使用 redis-py 储存地理位置数据](https://zhuanlan.zhihu.com/p/22067024)
* [Redis环境搭建和代码测试及与GIS结合的GEO数据类型预研](http://www.cnblogs.com/naaoveGIS/p/6728459.html)
* [WebGIS中GeoHash编码的研究和扩展](http://www.cnblogs.com/naaoveGIS/p/5164187.html)
* [阿里云Redis GEO地理位置功能上线啦](https://yq.aliyun.com/articles/62844)
* [Redis持久化方式对比](http://www.cnblogs.com/wupeixuan/p/8667335.html)



## 数据库
* [MySQL索引总结](https://zhuanlan.zhihu.com/p/29118331)
* [MySQL锁总结](https://zhuanlan.zhihu.com/p/29150809)
* [数据库事务与MySQL事务总结](https://zhuanlan.zhihu.com/p/29166694)



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


