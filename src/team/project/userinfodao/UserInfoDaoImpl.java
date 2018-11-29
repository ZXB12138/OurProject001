package team.project.userinfodao;

import java.sql.SQLException;

import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.ScalarHandler;

import team.project.jdbcutil.JDBCUtile;
import team.project.userinfo.UserInfo;

public class UserInfoDaoImpl implements IUserInfoDao{

	@Override
	public boolean add(UserInfo userinfo) throws SQLException {
		String sql="insert into userinfo (nickName,sex,grade,class,major,userName) values(?,?,?,?,?,?); ";
		QueryRunner qr=new QueryRunner();
		int flag=-1;
		flag=qr.update(JDBCUtile.getUserConnection(), sql, userinfo.getNickname(),userinfo.getSex(),userinfo.getGrade(),userinfo.get_class(),userinfo.getMajor(),userinfo.getUsername());
		if(flag==1)
		{
			return true;
		}
		else {
			return false;
		}
		
	}

	@Override
	public boolean updata(UserInfo userinfo) throws SQLException {
		String sql="updata userinfo set nickName=?,sex=?,grade=?,class=?,major=? where userName=?; ";
		QueryRunner qr=new QueryRunner();
		int flag=-1;
		flag=qr.update(JDBCUtile.getUserConnection(), sql, userinfo.getNickname(),userinfo.getSex(),userinfo.getGrade(),userinfo.get_class(),userinfo.getMajor(),userinfo.getUsername());
		if(flag==1)
		{
			return true;
		}
		else {
			return false;
		}
	}

	@Override
	public boolean isexistence(UserInfo userinfo) throws SQLException {
		String sql="select  count(*)  from userinfo where userName=?; ";
		QueryRunner qr=new QueryRunner();
		Long flag=(long) -1;
		flag=qr.query(JDBCUtile.getUserConnection(), sql, new ScalarHandler<Long>(),userinfo.getUsername());
		if(flag.intValue()==1)
		{
			return true;
		}
		else {
			return false;
		}
	}
 
	

}
