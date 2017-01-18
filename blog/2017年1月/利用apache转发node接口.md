### 加载proxy/proxy_http模块
在http.conf中找到,并且去掉前面的#:
> http.conf一般在apache安装的conf目录下
```bash
#LoadModule proxy_module modules/mod_proxy.so
#LoadModule proxy_http_module modules/mod_proxy_http.so
```

### 加载vhost模块
在http.conf中找到,并且去掉前面的#:

``` bash
#Include conf/extra/httpd-vhosts.conf

#...

#LoadModule vhost_alias_module modules/mod_vhost_alias.so
```

>无法正常加载请自行google/百度

在`httpd-vhost.conf`(根据自己的vhost的配置文件而定)中加入如下：
```bash
<VirtualHost *:80>    
#访问下面的域名转发node接口
  ServerName node.js

  ProxyRequests off

  <Proxy *>
    Order deny,allow
    Allow from all
  </Proxy>

# 转发/node下的所有请求到http://localhost:8080/
  <Location /node>
    ProxyPass http://localhost:8080/
    ProxyPassReverse http://localhost:8080/
  </Location>
</VirtualHost>
```

重启apache,

现在访问 http://node.js/node/ 则会转发到 http://localhost:8080/ 上。

### 如何测试？
肯定不会在服务器上做上面的一些炒作，因为一步弄错，可能apache就会重启失败。
所以必须确保万无一失之后才把转发部到线上。

*已window下的环境为例*
1. 下载wamp/xampp或者自行搭建apache环境
2. 安装各个模块
3. 修改host，使访问某个域名能够访问自己本地的apache
4. 启动一个Node服务
5. 执行上面的配置
6. 配置成功，直接把这一套搬到线上
