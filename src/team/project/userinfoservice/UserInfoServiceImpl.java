package team.project.userinfoservice;

import java.sql.SQLException;

import team.project.userinfo.UserInfo;
import team.project.userinfodao.IUserInfoDao;
import team.project.userinfodao.UserInfoDaoImpl;

public class UserInfoServiceImpl implements IUserInfoService{

	@Override
	public boolean updata(UserInfo userinfo) throws SQLException {
		IUserInfoDao dao=new UserInfoDaoImpl();
		if(dao.isexistence(userinfo)) {
			boolean flag1;
			flag1=dao.updata(userinfo);
			return flag1;
		}
		else
		{
			boolean flag2;
			flag2=dao.add(userinfo);
			return flag2;
		}
		
	
	}

	
}
