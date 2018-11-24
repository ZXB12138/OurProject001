package team.project.loginservice;

import java.sql.SQLException;

import team.project.logindao.ILoginDao;
import team.project.logindao.LoginDaoImpl;
import team.project.user.User;

public class LoginServiceImpl implements ILoginService{

	//�����û����������Ƿ�ƥ�䣬���ƥ�䷵��1��ʧ�ܷ���0���û���������Ϊ�շ���-1
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
