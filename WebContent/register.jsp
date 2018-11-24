<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript"  src="js/jquery.js">  </script>
<script type="text/javascript">

function send(){
	var QQmail=$("#QQmail").val();
	$.ajax({
		url:"RegisterServlet?method=send",//url:服务器地址;
		请求方式:"post",//请求方式：post|get;
		data:"QQmail="+QQmail,//data:请求数据;
		success:function(result,testStatus){

			  alert(result);
		},
		error:function(xhr,errorMessage,e){
			
		}
	});

}
function register(){
	var username=$("#username").val();
	var password=$("#password").val();
	var QQmail=$("#QQmail").val();
	var PIN=$("#PIN").val();
	$.ajax({
		url:"RegisterServlet?method=register",//url:服务器地址;
		请求方式:"post",//请求方式：post|get;
		data:"username="+username+"&password="+password+"&QQmail="+QQmail+"&PIN="+PIN,//data:请求数据;
		success:function(result,testStatus){
			alert(result);
		},
		error:function(xhr,errorMessage,e){
			
		}
	});
}
</script>
</head>
<body>

用户名：<input type="text" name="username" id="username"><br>
密码：<input type="password" name=password id="password"><br>
QQ邮箱：<input type="text" name="QQmail" id="QQmail"> <input type="button" value="发送验证码" onclick="send()"><br>
验证码：<input type="text" name="PIN" id="PIN"><br>
<input type="button" value="注册" onclick="register()">
<span></span>



</body>
</html>