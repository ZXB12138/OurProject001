package team.project.mail;

import java.io.UnsupportedEncodingException;
import java.util.Date;
import java.util.Properties;

import javax.mail.Address;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

public class SendMail {
	
	public static void send(String send,String receive,String PIN) throws UnsupportedEncodingException, MessagingException {
		Properties p=new Properties();
		p.setProperty("mail.transport.protocol", "smtp");//使用协议
		p.setProperty("mail.smtp.host", "smtp.qq.com");//协议地址
		p.setProperty("mail.smtp.port", "465");//协议端口
		p.setProperty("mail.smtp.auth", "true");//需要授权
		//QQ:SSl安全认证
		p.setProperty("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
		p.setProperty("mail.smtp.socketFactory.fallback", "false");
		p.setProperty("mail.smtp.socketFactory.port", "465");
		Session session=Session.getInstance(p);
		MimeMessage message =new MimeMessage(session);
		
		//邮件：标题、正文、收件人、发件人{附件}
    	Address address =new InternetAddress(send, "周旭波", "UTF-8");
    	message.setFrom(address);//发件地址
    	message.setSubject("验证码","UTF-8");//主题
    	message.setContent(PIN, "text/html; charset=UTF-8");//正文
    	message.setRecipient(MimeMessage.RecipientType.TO, new InternetAddress(receive,"收件人","UTF-8"));
    	message.setSentDate(new Date());//发送时间
    	message.saveChanges();//保存邮件
    	Transport transport=session.getTransport();//建立连接对象
		transport.connect("smtp.qq.com",send,"rnjafxzwfpxuhaba");//建立连接
        transport.sendMessage(message,message.getAllRecipients());  
		
	}

}
