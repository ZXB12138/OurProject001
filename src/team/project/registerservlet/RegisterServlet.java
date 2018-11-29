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
		String password2=request.getParameter("password2");
		String QQmail=request.getParameter("QQmail");
		String PIN=request.getParameter("PIN");
        
		if(username.equals("")||password.equals("")||QQmail.equals("")|| PIN.equals(""))//��Ϣ�Ƿ�ȫ����д
		{
			out.write("��������Ϣ");
			//request.setAttribute("info","��������Ϣ");
		}
		else if(!password.equals(password2)) {//���������Ƿ���ͬ
			out.write("�������벻��ͬ");
		}
		else if(!QQmail.matches("\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*"))//�����ʽ�Ƿ���ȷ
		{
			out.write("�����ʽ����");
		}
		else {
			
			String [] s=new String[2];
		s=(String[]) request.getSession().getAttribute("s");//��ȡע���������֤��
		User user=new User(username, password, QQmail);	
		if(s!=null) {
		
		if(PIN.equals(s[0])&&QQmail.equals(s[1])) {//ע���������֤���Ƿ�ƥ��
			try {
				
				request.getSession().removeAttribute("s");
				int flag=service.register(user);
				if(flag==1)
				{
					out.write("1");
					
				}
				else if(flag==0)
				{
					out.write("�û����Ѵ���");
				}
				else if(flag==-1)
				{
					out.write("ע��ʧ��");
				}
			} catch (SQLException e) {
				e.printStackTrace();
			}
		  }
		else 
			out.write("��֤�����");
		}
		else
			out.write("��Ч����֤��");
		
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
			 out.write("���ͳɹ�");
			 s[0]=pin;
			 s[1]=receive;
			 request.getSession().setAttribute("s", s); //��ע���������֤�봫��session��
			 request.getSession().setMaxInactiveInterval(60); //����sessionʱ��
			}
			else
				out.write("������ע��");
			 
		 }
		 else {
			 out.write("�����ʽ����");
		 }
		
		
	}	
}
