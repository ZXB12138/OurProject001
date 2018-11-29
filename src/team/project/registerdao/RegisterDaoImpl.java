package team.project.registerdao;

import java.sql.SQLException;

import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.ScalarHandler;

import team.project.jdbcutil.JDBCUtile;
import team.project.user.User;

public class RegisterDaoImpl implements IRegisterDao{

	//添加，成功返回true，失败返回false
	@Override
	public boolean add(User user) throws SQLException {
		String sql="insert into user (userName,password,QQMail) values(?,?,?); ";
		QueryRunner qr=new QueryRunner();
		int flag=-1;
	
		flag=qr.update(JDBCUtile.getUserConnection(), sql, user.getUsername(),user.getPassword(),user.getQQmail());
		if(flag==1)
		{
			return true;
		}
		else {
			return false;
		}
	}

	//查询是否存在，存在返回true，不存在返回false
	@Override
	public boolean usernameisregister(User user) throws SQLException {
		String sql="select count(*) from user where userName=?; ";
		QueryRunner qr=new QueryRunner();
		Long flag= (long) -1;
		flag=qr.query(JDBCUtile.getUserConnection(), sql,new ScalarHandler<Long>(),user.getUsername());
		int flag2=flag.intValue();
		if(flag2==1)
		{
			return true;
		}
		else {
			return false;
		}
	}

	@Override
	public boolean delete(User user) throws SQLException {
		return false;
	}

	//查询邮箱是否已被注册，注册返回true，没有返回false
	@Override
	public boolean QQmailisregister(String QQmail) throws SQLException {
		String sql="select count(*) from user where QQMail=?; ";
		QueryRunner qr=new QueryRunner();
		Long flag= (long) -1;
		flag=qr.query(JDBCUtile.getUserConnection(), sql,new ScalarHandler<Long>(),QQmail);
		int flag2=flag.intValue();
		if(flag2==1)
		{
			return true;
		}
		else {
			return false;

	}
	}
}
