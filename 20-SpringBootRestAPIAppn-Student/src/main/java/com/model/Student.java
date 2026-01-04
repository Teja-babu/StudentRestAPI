package com.model;

import org.springframework.boot.autoconfigure.AutoConfiguration;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity(name = "student")
@Table(name="student1")
public class Student 
{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int sid;
	private String name;
	private String course;
	private int hibernate;
	private int spring;
	private int springboot;
	
	private double total;
	private double percentage;
	private String grade;
	private String result;
	public Student() {
		super();
	}
	public int getSid() {
		return sid;
	}
	public void setSid(int sid) {
		this.sid = sid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCourse() {
		return course;
	}
	public void setCourse(String course) {
		this.course = course;
	}
	public int getHibernate() {
		return hibernate;
	}
	public void setHibernate(int hibernate) {
		this.hibernate = hibernate;
	}
	public int getSpring() {
		return spring;
	}
	public void setSpring(int spring) {
		this.spring = spring;
	}
	public int getSpringboot() {
		return springboot;
	}
	public void setSpringboot(int springboot) {
		this.springboot = springboot;
	}
	public double getTotal() {
		return total;
	}
	public void setTotal(double total) {
		this.total = total;
	}
	public double getPercentage() {
		return percentage;
	}
	public void setPercentage(double percentage) {
		this.percentage = percentage;
	}
	public String getGrade() {
		return grade;
	}
	public void setGrade(String grade) {
		this.grade = grade;
	}
	public String getResult() {
		return result;
	}
	public void setResult(String result) {
		this.result = result;
	}
	public Student(int sid, String name, String course, int hibernate, int spring, int springboot, double total,
			double percentage, String grade, String result) {
		super();
		this.sid = sid;
		this.name = name;
		this.course = course;
		this.hibernate = hibernate;
		this.spring = spring;
		this.springboot = springboot;
		this.total = total;
		this.percentage = percentage;
		this.grade = grade;
		this.result = result;
	}
	@Override
	public String toString() {
		return "Student [sid=" + sid + ", name=" + name + ", course=" + course + ", hibernate=" + hibernate
				+ ", spring=" + spring + ", springboot=" + springboot + ", total=" + total + ", percentage="
				+ percentage + ", grade=" + grade + ", result=" + result + "]";
	}
	
}
