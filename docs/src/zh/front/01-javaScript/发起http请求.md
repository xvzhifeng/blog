---
title: 发起http请求
date: 2023-11-25 21:11:22
category: 
  - front
  - 01-javaScript
tag: 
  - js
  - java
  - html
---
### JS使用AJAX发起Http请求

---

**前言：**

​		在JS中没有发起Http请求的能力，所有我们需要引入代码片段让JS发起http请求，我们称这样的代码片段为——**AJAX**（Asynchronous JAvaScript by Xml ）
​	AJAX借助 JS 中的一个内置对象：XMLHttpRequest，可简写为xhr



1、使用到对象XMLHttpRequest

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Ajax 请求</title>
</head>
<body>

<script>
    <!-- js发送http请求 利用相应的代码片段-->
    var xhr=new XMLHttpRequest(); <!-- 初始化js中的内置对象XMLHttpRequest-->
    xmlhttp.onreadystatechange=function() // 执行成功后的回调函数
{
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
        document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
    }
}
    xhr.open("post","/hhhhhhh");<!-- 提供HTTP请求的 方法和url-->
    xhr.send();<!-- 发起真正的请求-->
</script>
</body>
</html>
```



