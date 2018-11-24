package team.project.PIN;

public class PIN {
	
	//获取一个随机验证码,并返回整型
     public static int getPIN() {
        	 int pin;
        	 pin=(int) (100000+(Math.random()*999999));
			return pin;
        	  
          }
    
}
