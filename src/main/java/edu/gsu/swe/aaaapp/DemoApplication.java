package edu.gsu.swe.aaaapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages={"edu.gsu.swe.aaaapp.TutorController", "edu.gsu.swe.aaaapp.TutorRepository"})
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

}
