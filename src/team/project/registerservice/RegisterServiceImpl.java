package team.project.registerservice;

import java.sql.SQLException;

import team.project.registerdao.IRegisterDao;
import team.project.registerdao.RegisterDaoImpl;
import team.project.user.User;

public class RegisterServiceImpl implements IRegisterService{
	
	
    //�û�ע�ᣬ���û���Ϣ��ӵ����ݿ��У�����1��ӳɹ�������-1���ʧ�ܣ�����0�û��Ѵ���
	@Override
	public int register(User user) throws SQLException {
            IRegisterDao dao=new RegisterDaoImpl();
            if(!dao.usernameisregister(user)) {
            	if(dao.add(user)) {
            		return 1;
            	}
            	else
            		return -1;
            }
            else 
			  return 0;
	}

	@Override
	public boolean QQmailisregister(String QQmail) throws SQLException {
		 IRegisterDao dao=new RegisterDaoImpl();
		 if(!dao.QQmailisregister(QQmail))
		 {
			 return true;
		 }
		 else 
			 return false;
	}
	

}
