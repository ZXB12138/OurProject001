package team.project.PIN;

public class PIN {
	
	//��ȡһ�������֤��,����������
     public static int getPIN() {
        	 int pin;
        	 pin=(int) (100000+(Math.random()*999999));
			return pin;
        	  
          }
    
}
