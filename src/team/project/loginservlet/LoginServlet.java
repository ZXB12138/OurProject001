package team.project.loginservlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import team.project.loginservice.ILoginService;
import team.project.loginservice.LoginServiceImpl;
import team.project.user.User;

public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public LoginServlet() {
        super();
    }
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html; charset=UTF-8");
		PrintWriter out=response.getWriter();
		String username=request.getParameter("username");
		String password=request.getParameter("password");
		

		if(username.equals("")||password.equals(""))//用户名和密码是否填写
		{
			//request.setAttribute("info","请将信息填写完整");
			out.write("请将信息填写完整");
		}
		else {
			User user=new User(username,password);
			try {
				int flag;
				flag=login(user);
				if(flag==1)
				{
					request.getSession().setAttribute("username", user.getUsername());
					out.write("登录成功");
					
				}
				else if(flag==0)
				{
					//request.setAttribute("info","用户名或密码错误");
					out.write("用户名或密码错误");
				}
				else if(flag==-1)
				{
					out.write("登录失败");
					//request.setAttribute("info","登录失败");
					
				}
				
					
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}

	private int login(User user) throws SQLException {
		ILoginService service=new LoginServiceImpl();
		return service.check(user);//用户名和密码是否匹配,匹配返回1，用户名或密码错误返回0,未知返回-1
	
		
	}
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
