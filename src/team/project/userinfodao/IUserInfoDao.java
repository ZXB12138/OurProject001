package team.project.userinfodao;

import java.sql.SQLException;

import team.project.userinfo.UserInfo;

public interface IUserInfoDao {
	public boolean add(UserInfo userinfo) throws SQLException;
	public boolean updata(UserInfo userinfo)throws SQLException;
	public boolean isexistence(UserInfo userinfo)throws SQLException;

}
