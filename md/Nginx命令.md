# Nginx命令

## 日志配置 

$bytes_sent（1.3.8, 1.2.5）：nginx返回给客户端的字节数，包括响应头和响应体。
$body_bytes_sent：nginx返回给客户端的响应体的字节数（即不含响应头）。
$content_length：“Content-Length”请求头的值，等同于$http_content_length。即，nginx从客户端收到的请求头中Content-Length字段的值，不是nginx返回给客户端响应中的Content-Length字段（$sent_http_content_length）的值。
$request_length（1.3.12, 1.2.7）：请求的字节数（包括请求行、请求头和请求体）。注意，由于$request_length是请求解析过程中不断累加的，如果解析请求时出现异常或提前完成，则$request_length只是已经累加部分的长度，并不是nginx从客户端收到的完整请求的总字节数（包括请求行、请求头、请求体）。例如，向nginx的静态文件的URL POST数据，则POST的数据（即请求体）不会计算在内。
$upstream_response_length（0.7.27）：保存从upstream服务器获得的响应体的字节数，不包括响应头，1.11.4中增加的$upstream_bytes_received变量是包括响应头的。如果有多个响应长度的话使用逗号和冒号分隔，就像$upstream_addr中的地址那样

