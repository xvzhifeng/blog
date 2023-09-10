---
title: 01-windows-install
date: 2023-09-10 16:03:24
category: 
  - Go
  - 00-环境准备
tag: 
  - go
---
## window install Go

#### 1、安装包下载路径

[install package](https://go.dev/dl/)

#### 2、下载当前系统对应的安装文件

![image-20230606204826357](00-resource/image-20230606204826357.png)

例如： windows 选择第一个

#### 3、安装

直接一路next，直到安装成功。

#### 4、检验是否安装成功

打开windows命令行（window+R）

输入命令`go version`

![image-20230606205209994](00-resource/image-20230606205209994.png)

出现上图所示，安装成功。

参考链接：

[Go 语言之旅 (go-zh.org)](https://tour.go-zh.org/welcome/1)

### 5、修改为国内代理

在后续安装tools时，失败时可以尝试修改代理

```go
go env -w GOPROXY=https://goproxy.cn,direct
```

