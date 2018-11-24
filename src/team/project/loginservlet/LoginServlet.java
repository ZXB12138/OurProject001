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
		if(username.equals("")||password.equals(""))
		{
			request.setAttribute("str","请将信息填写完整");
			request.getRequestDispatcher("login.jsp").forward(request, response);
		}
		else {
			User user=new User(username,password);
			try {
				int flag;
				flag=login(user);
				if(flag==1)
				{
					request.getRequestDispatcher("welcome.jsp").forward(request, response);
				}
				else if(flag==0)
				{
					request.setAttribute("str","用户名或密码错误");
					request.getRequestDispatcher("login.jsp").forward(request, response);
				}
				else if(flag==-1)
				{
					request.setAttribute("str","登录失败");
					request.getRequestDispatcher("login.jsp").forward(request, response);
				}
				
					
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}

	private int login(User user) throws SQLException {
		ILoginService service=new LoginServiceImpl();
		return service.check(user);
	
		
	}
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
