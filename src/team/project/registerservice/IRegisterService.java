package team.project.registerservice;

import java.sql.SQLException;

import team.project.user.User;

public interface IRegisterService {
	public int register(User user)throws SQLException;//用户注册
	public boolean QQmailisregister(String QQmail)throws SQLException;//邮箱是否已被注册
	

}
