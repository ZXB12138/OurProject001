import java.io.UnsupportedEncodingException;

import javax.mail.MessagingException;

import team.project.PIN.PIN;
import team.project.mail.SendMail;

public class test {

	public static void main(String[] args) throws UnsupportedEncodingException, MessagingException {
          String pin=String.valueOf(PIN.getPIN());
          SendMail.send("1252053391@qq.com", "2674555767@qq.com", pin);
	}

}
