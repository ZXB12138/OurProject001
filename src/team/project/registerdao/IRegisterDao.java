package team.project.registerdao;

import java.sql.SQLException;

import team.project.user.User;

public interface IRegisterDao {
        public boolean add(User user) throws SQLException;
        public boolean usernameisregister(User user) throws SQLException;
        public boolean delete(User user)throws SQLException;
        public boolean QQmailisregister(String QQmail)throws SQLException;
}
