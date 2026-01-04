package com.service;

import java.util.List;

import com.model.Student;

public interface StudentService 
{
	public Student saveStudent(Student stud);
	public Student getoneStudent(int sid);
	public List<Student> getallStudent();
	public Student updateStudent(Student stud,int sid);
	public void deleteStudent(int sid);
}
