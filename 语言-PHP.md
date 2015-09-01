# PHP

---
1. 安装
PHP性能分析工具xhprof，图形化工具xhgui
日志，程序日志通过LogStash进入到ElasticSearch，使用Kibana搜索。业务日志通过LogStash落地日志服务器


## 1 安装

cd ../php-x.x.x
./configure --prefix=/usr/local/php7 --enable-fpm --enable-mbstring  --enable-pcntl --with-pdo-mysql=/usr/local/mysql
make
sudo make install


