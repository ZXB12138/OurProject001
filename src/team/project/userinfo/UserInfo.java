package team.project.userinfo;

public class UserInfo {
	private String nickname;//昵称
	private String sex;//性别
	private String grade;//年级
	private String _class;
	private String major;//方向
	private String username;
	public String getNickname() {
		return nickname;
	}
	public void setNickname(String nickname) {
		this.nickname = nickname;
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	public String getGrade() {
		return grade;
	}
	public void setGrade(String grade) {
		this.grade = grade;
	}
	public String getMajor() {
		return major;
	}
	public void setMajor(String major) {
		this.major = major;
	}
	public UserInfo(String nickname, String sex, String grade,String _class, String major,String username) {
		super();
		this.nickname = nickname;
		this.sex = sex;
		this.grade = grade;
		this._class=_class;
		this.major = major;
		this.username=username;
	}
	public UserInfo() {
		super();
	}
	public String get_class() {
		return _class;
	}
	public void set_class(String _class) {
		this._class = _class;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	
	
}
