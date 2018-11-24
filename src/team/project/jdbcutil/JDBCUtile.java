package team.project.jdbcutil;

import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

public class JDBCUtile {
	private static String DRIVER;
	private static  String URL;
	private static  String USERNAME;
	private static  String PASSWORD;
	static {
		try {
			Class.forName("com.mysql.jdbc.Driver");
			loadconfig();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
		
	}
	private static void loadconfig() {
		Properties p=new Properties();
		InputStream is=Thread.currentThread().getContextClassLoader().getResourceAsStream("JDBC.propertise"); 
		try {
			p.load(is);
			DRIVER=p.getProperty("jdbc.user.driver");
			URL=p.getProperty("jdbc.user.url");
			USERNAME=p.getProperty("jdbc.user.username");
			PASSWORD=p.getProperty("jdbc.user.password");
		} catch (IOException e) {
			
			e.printStackTrace();
		}
	}
	public static Connection getUserConnection() {
		Connection conn=null;
		try {
			conn=DriverManager.getConnection(URL, USERNAME, PASSWORD);
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return conn;
		
	}
}
