package team.project.registerservice;

import java.sql.SQLException;

import team.project.registerdao.IRegisterDao;
import team.project.registerdao.RegisterDaoImpl;
import team.project.user.User;

public class RegisterServiceImpl implements IRegisterService{
	
	
    //用户注册，将用户信息添加到数据库中，返回1添加成功，返回-1添加失败，返回0用户已存在
	@Override
	public int register(User user) throws SQLException {
            IRegisterDao dao=new RegisterDaoImpl();
            if(!dao.usernameisregister(user)) {
            	if(dao.add(user)) {
            		return 1;
            	}
            	else
            		return -1;
            }
            else 
			  return 0;
	}

	@Override
	public boolean QQmailisregister(String QQmail) throws SQLException {
		 IRegisterDao dao=new RegisterDaoImpl();
		 if(!dao.QQmailisregister(QQmail))
		 {
			 return true;
		 }
		 else 
			 return false;
	}
	

}
