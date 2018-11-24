package team.project.loginservice;

import java.sql.SQLException;

import team.project.logindao.ILoginDao;
import team.project.logindao.LoginDaoImpl;
import team.project.user.User;

public class LoginServiceImpl implements ILoginService{

	//检验用户名与密码是否匹配，如果匹配返回1，失败返回0，用户名或密码为空返回-1
	@Override
	public int check(User user) throws SQLException {
		if(!user.getUsername().equals("")||!user.getPassword().equals(""))
		{
			ILoginDao dao=new LoginDaoImpl();
			if(dao.check(user)) {
				return 1;
			}
			else
				return 0;
		}
		else 
			return -1;
	}
    
}
