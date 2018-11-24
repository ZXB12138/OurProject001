package team.project.logindao;

import java.sql.SQLException;

import team.project.user.User;

public interface ILoginDao {
       public boolean check(User user) throws SQLException;
}
