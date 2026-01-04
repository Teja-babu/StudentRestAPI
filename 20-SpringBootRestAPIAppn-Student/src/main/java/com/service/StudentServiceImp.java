package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.stereotype.Service;

import com.model.Student;
import com.repo.StudentRepo;


@Service
public class StudentServiceImp implements StudentService 
{

	@Autowired StudentRepo repo;
	
	@Override
	public Student saveStudent(Student stud) 
	{
		double tot=0.0,per=0.0;
		String gr="un",res=null;
		
		tot=stud.getHibernate()+stud.getSpring()+stud.getSpringboot();
		per=tot/3;
		
		if(per>=90)
		{
			gr="A grade";
		}
		else if(per>=80)
		{
			gr="B grade";
		}
		else if(per>=70)
		{
			gr="C grade";
		}
		else if(per>=60)
		{
			gr="D grade";
		}
		else {
			gr="F grade";
		}
		
		if(stud.getHibernate()>=35 && stud.getSpring()>=35 && stud.getSpringboot()>=35)
		{
			res="pass";
		}
		else
		{
			res="fail";
		}
		
		stud.setTotal(tot);
		stud.setPercentage(per);
		stud.setGrade(gr);
		stud.setResult(res);
		
		return repo.save(stud);
	}

	@Override
	public Student getoneStudent(int sid) 
	{
		Student one=repo.findById(sid).get();
		return one;
	}

	@Override
	public List<Student> getallStudent()
	{
		List<Student>all=repo.findAll();
		return all;
	}

	@Override
	public void deleteStudent(int id) 
	{	
		repo.deleteById(id);
		
	}
	
	@Override
	public Student updateStudent(Student stud,int sid)
	{
		Student old=repo.findById(sid).get();
		
		double tot=0.0,per=0.0;
		String gr=null,res=null;
		
		tot=stud.getHibernate()+stud.getSpring()+stud.getSpringboot();
		per=tot/3;
		
		if(per>=90)
		{
			gr="A grade";
		}
		else if(per>=80)
		{
			gr="B grade";
		}
		else if(per>=70)
		{
			gr="C grade";
		}
		else if(per>=60)
		{
			gr="D grade";
		}
		
		if(stud.getHibernate()>=35 && stud.getSpring()>=35 && stud.getSpringboot()>=35)
		{
			res="pass";
		}
		else
		{
			res="fail";
		}
		
		old.setName(stud.getName());
		old.setCourse(stud.getCourse());
		old.setHibernate(stud.getHibernate());
		old.setSpring(stud.getSpring());
		old.setSpringboot(stud.getSpringboot());
		old.setTotal(tot);
		old.setPercentage(per);
		old.setGrade(gr);
		old.setResult(res);
		
		return repo.save(old);
	}

	

}
