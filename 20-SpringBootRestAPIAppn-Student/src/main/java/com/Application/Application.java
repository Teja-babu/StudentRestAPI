package com.Application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.boot.autoconfigure.AutoConfigurationPackage;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;



@EnableJpaRepositories(basePackageClasses = {com.repo.StudentRepo.class})
@EntityScan(basePackageClasses = {com.model.Student.class})
@ComponentScan(basePackageClasses = {com.controller.StudentController.class,com.repo.StudentRepo.class,com.service.StudentServiceImp.class,com.model.Student.class})
@SpringBootApplication
public class Application {
		
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

}
