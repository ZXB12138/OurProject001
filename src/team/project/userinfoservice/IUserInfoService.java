package team.project.userinfoservice;

import java.sql.SQLException;

import team.project.userinfo.UserInfo;

public interface IUserInfoService {
	public boolean updata(UserInfo userinfo) throws SQLException;

}
