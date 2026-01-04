package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.web.bind.annotation.RestController;

import com.model.Student;
import com.service.StudentServiceImp;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.PutMapping;




@AutoConfiguration
@RestController
@CrossOrigin(origins= {"*"})
public class StudentController 
{
	@Autowired StudentServiceImp service;
	
	@RequestMapping("/")
	@ResponseBody
	public String home() {
		
		return "RestApiApp-Student is Running";
	}
	
	@PostMapping("/save")
	public String saveDetails(@RequestBody Student stud) 
	{
		Student data=service.saveStudent(stud);
		String message=null;
		if(data!=null)
		{
			message="data saved successfully";
		}
		else
		{
			message="data is failed";
		}
		return message;
	}
	
	@GetMapping("/getone/{sid}")
	public Student getStudent(@PathVariable("sid") int sid)
	{
		System.out.println("request ACEPTED BY getOne"+sid);
		Student get=service.getoneStudent(sid);
		return get;
	}
	
	@GetMapping("/getall")
	public List<Student> getallStudents()
	{
		List<Student>all=service.getallStudent();
		return all;
	}
	
	@DeleteMapping("/delete/{sid}")
	public void delete(@PathVariable("sid") int sid)
	{
		service.deleteStudent(sid);
	}
	
	@PutMapping("/update/{sid}")
	public Student update(@PathVariable int sid, @RequestBody Student student)
	{
		Student update=service.updateStudent(student, sid);
		return update;
	}
}
