package team.project.userinfoservlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import team.project.userinfo.UserInfo;
import team.project.userinfoservice.IUserInfoService;
import team.project.userinfoservice.UserInfoServiceImpl;

public class UserInfoServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public UserInfoServlet() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String nickname=request.getParameter("nickname");
		String sex=request.getParameter("sex");
		String grade=request.getParameter("grade");
		String major=request.getParameter("major");
		String _class=request.getParameter("class");
		String username=(String) request.getSession().getAttribute("username");
		UserInfo userinfo=new UserInfo(nickname,sex,grade,_class,major,username);
		IUserInfoService service =new UserInfoServiceImpl();
		try {
			PrintWriter out=response.getWriter();
			boolean flag;
			flag=service.updata(userinfo);
			if(flag==true)
			{
				out.write("保存成功");
			}
			else {
				out.write("保存失败");
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
