package team.project.registerservice;

import java.sql.SQLException;

import team.project.user.User;

public interface IRegisterService {
	public int register(User user)throws SQLException;//�û�ע��
	public boolean QQmailisregister(String QQmail)throws SQLException;//�����Ƿ��ѱ�ע��
	

}
