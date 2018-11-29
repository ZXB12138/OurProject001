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
		

		if(username.equals("")||password.equals(""))//�û����������Ƿ���д
		{
			//request.setAttribute("info","�뽫��Ϣ��д����");
			out.write("�뽫��Ϣ��д����");
		}
		else {
			User user=new User(username,password);
			try {
				int flag;
				flag=login(user);
				if(flag==1)
				{
					request.getSession().setAttribute("username", user.getUsername());
					out.write("��¼�ɹ�");
					
				}
				else if(flag==0)
				{
					//request.setAttribute("info","�û������������");
					out.write("�û������������");
				}
				else if(flag==-1)
				{
					out.write("��¼ʧ��");
					//request.setAttribute("info","��¼ʧ��");
					
				}
				
					
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}

	private int login(User user) throws SQLException {
		ILoginService service=new LoginServiceImpl();
		return service.check(user);//�û����������Ƿ�ƥ��,ƥ�䷵��1���û�����������󷵻�0,δ֪����-1
	
		
	}
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
