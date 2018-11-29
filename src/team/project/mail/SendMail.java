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
		p.setProperty("mail.transport.protocol", "smtp");//ʹ��Э��
		p.setProperty("mail.smtp.host", "smtp.qq.com");//Э���ַ
		p.setProperty("mail.smtp.port", "465");//Э��˿�
		p.setProperty("mail.smtp.auth", "true");//��Ҫ��Ȩ
		//QQ:SSl��ȫ��֤
		p.setProperty("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
		p.setProperty("mail.smtp.socketFactory.fallback", "false");
		p.setProperty("mail.smtp.socketFactory.port", "465");
		Session session=Session.getInstance(p);
		MimeMessage message =new MimeMessage(session);
		
		//�ʼ������⡢���ġ��ռ��ˡ�������{����}
    	Address address =new InternetAddress(send, "����", "UTF-8");
    	message.setFrom(address);//������ַ
    	message.setSubject("��֤��","UTF-8");//����
    	message.setContent(PIN, "text/html; charset=UTF-8");//����
    	message.setRecipient(MimeMessage.RecipientType.TO, new InternetAddress(receive,"�ռ���","UTF-8"));
    	message.setSentDate(new Date());//����ʱ��
    	message.saveChanges();//�����ʼ�
    	Transport transport=session.getTransport();//�������Ӷ���
		transport.connect("smtp.qq.com",send,"rnjafxzwfpxuhaba");//��������
        transport.sendMessage(message,message.getAllRecipients());  
		
	}

}
