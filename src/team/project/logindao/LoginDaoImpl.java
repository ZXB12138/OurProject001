package team.project.logindao;

import java.sql.SQLException;

import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.ScalarHandler;

import team.project.jdbcutil.JDBCUtile;
import team.project.user.User;

public class LoginDaoImpl implements ILoginDao{

	@Override
	public boolean check(User user) throws SQLException {
		String sql="select count(*) from user where username=? and password=?;";
		QueryRunner qr=new QueryRunner();
		Long flag= (long) -1;
		flag=qr.query(JDBCUtile.getUserConnection(), sql,new ScalarHandler<Long>(),user.getUsername(),user.getPassword());
		int flag2=flag.intValue();
		if(flag2==1)
		{
			return true;
		}
		else {
			return false;
		}	}

}
