package team.project.registerservlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.sql.SQLException;

import javax.mail.MessagingException;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import team.project.PIN.PIN;
import team.project.mail.SendMail;
import team.project.registerservice.IRegisterService;
import team.project.registerservice.RegisterServiceImpl;
import team.project.user.User;

public class RegisterServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    public RegisterServlet() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html; charset=UTF-8");
		PrintWriter out =response.getWriter();
		String method=request.getParameter("method");
		if(method.equals("send")) {
				try {
					send(request,response);
				} catch (MessagingException | SQLException e) {
					e.printStackTrace();
				}	
		}
		
		else if(method.equals("register")){	
					try {
						register(request,response);
					} catch (SQLException e) {
						e.printStackTrace();
					}
		
	}

	}
	

	private void register(HttpServletRequest request, HttpServletResponse response) throws SQLException, IOException {
		IRegisterService service=new RegisterServiceImpl();
		PrintWriter out =response.getWriter();
		String username=request.getParameter("username");
		String password=request.getParameter("password");
		String QQmail=request.getParameter("QQmail");
		String PIN=request.getParameter("PIN");
		if(username.equals("")||password.equals("")||QQmail.equals("")|| PIN.equals(""))
		{
			out.write("请完善信息");
		}
		else if(!QQmail.matches("\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*"))
		{
			out.write("邮箱格式错误");
		}
		else {
			
			String [] s=new String[2];
		s=(String[]) request.getSession().getAttribute("s");
		User user=new User(username, password, QQmail);	
		if(s!=null) {
			
		
		if(PIN.equals(s[0])&&QQmail.equals(s[1])) {
			try {
				request.getSession().removeAttribute("s");
				int flag=service.register(user);
				if(flag==1)
				{
					out.write("注册成功");
					
				}
				else if(flag==0)
				{
					out.write("用户名已存在");
				}
				else if(flag==-1)
				{
					out.write("注册失败");
				}
			} catch (SQLException e) {
				e.printStackTrace();
			}
		  }
		else 
			out.write("验证码错误");
		}
		else
			out.write("无效的验证码");
		
	}		
	}
		
	

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		doGet(request, response);
	}
     
	
	private void send(HttpServletRequest request, HttpServletResponse response) throws MessagingException, IOException, SQLException {
		
		request.getSession().removeAttribute("s");
		String receive=request.getParameter("QQmail");
		PrintWriter out =response.getWriter();
		String [] s=new String[2];
		 if(receive.matches("\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*"))
		 { 
			 IRegisterService service =new RegisterServiceImpl();
			if( service.QQmailisregister(receive)) {
			 String pin=String.valueOf(PIN.getPIN());
			 SendMail.send("1252053391@qq.com", receive, pin);
			 out.write("发送成功");
			 s[0]=pin;
			 s[1]=receive;
			 request.getSession().setAttribute("s", s);
			 request.getSession().setMaxInactiveInterval(60);
			}
			else
				out.write("邮箱已注册");
			 
		 }
		 else {
			 out.write("邮箱格式错误");
		 }
		
		
	}	
}
