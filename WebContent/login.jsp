<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

</head>

<body>
<%  String str=(String)request.getAttribute("str");%>
<form action="LoginServlet" method="post">
<input type="text" name="username" id="username">
<input  type="password" name="password" id="password">
<br>
<span><%= str==null?"":str %></span><br>
<input type="submit" value="登录"  >
</form>
</body>
</html>