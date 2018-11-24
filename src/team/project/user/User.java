package team.project.user;

public class User {
	private String userid;
	private String username;
	private String password;
	private String QQmail;
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getQQmail() {
		return QQmail;
	}
	public void setQQmail(String QQmail) {
		this.QQmail = QQmail;
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public User(String username, String password, String QQmail) {
		super();
		this.username = username;
		this.password = password;
		this.QQmail = QQmail;
	}
	
	public User(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}
	public User() {
		super();
	}
	

}
