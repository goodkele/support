# Mysql命令

## mysqldump 

### 选项
* -u 用户名
* -h IP地址
* -p 密码
* -P 端口
* -f 发现sql错误，仍然继续备份
* -d 只导出表结构
* -X 导出为xml文件


### 例

导出单库
> mysqldump -uroot -h127.0.0.1 -p db1 > /root/sql1.sql

导出单表
> mysqldump -uroot -h127.0.0.1 -p db1 table1 > /root/sql1.sql

导出多表
> mysqldump -uroot -h127.0.0.1 -p db1 table1 table2 > /root/sql1.sql

还原数据库
> mysql> source /root/sql1.sql

还原数据库-指定数据库
> mysql -uroot -p db1 < /root/sql1.sql

## mysql>

服务器状态信息
> show status 

> SHOW CREATE DATABASE
> SHOW CREATE TABLE
