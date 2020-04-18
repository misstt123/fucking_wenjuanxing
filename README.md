<br/>  
  
# 问卷星批量提交助手

#### 介绍
使用python脚本大量填写问卷星调查问卷，使用ip代理池

#### 安装教程
需要安装`requirement.txt`里面提到的所有包。

#### 使用说明(参数说明)
##### 输入
1.  将 `config.ini`的`id`改为自己问卷的id
2.  将 `config.ini`的`proxyAPI`改为自己购买的ip代理api
    > ip默认以 `\n` 分隔 
4.  `config.ini`的`thread_count`为启用线程数（默认3）
##### 输出
1.  `config.ini`的`count{n}`为第n个线程的ip使用数
2.  `config.ini`的`fail{n}`为第n个线程的ip不可用数
    >可用来校验ip代理商的可用率
3. `python wenjuanxin_private.py`运行程序即可。

#### 功能  
- [x] ip代理
- [x] 日志模块
- [x] 多线程
- [x] server酱通知
- [x] QQ授权投票  
- [ ] 多问卷id
- [ ] ADSL切换