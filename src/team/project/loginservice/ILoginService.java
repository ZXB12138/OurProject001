package team.project.loginservice;

import java.sql.SQLException;

import team.project.user.User;

public interface ILoginService {
      public int check(User user) throws SQLException;
}
