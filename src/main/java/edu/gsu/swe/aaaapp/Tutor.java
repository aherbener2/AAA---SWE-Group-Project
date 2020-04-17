package edu.gsu.swe.aaaapp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tutor")
public class Tutor {
	private int Pantherid;
//	private String username;
	private String password;
	private String firstName;
	private String lastName;
	private String email;
//	private String courses;

	public Tutor(String password, String firstName, String lastName, String email, int pantherid) {
//	this.username = username;
		this.password = password;
		this.email = email;
		this.firstName = firstName;
		this.lastName = lastName;
		this.Pantherid = pantherid;
	}

	public void setid(int id) {
		this.Pantherid = id;
	}

	@Column(name = "lastName", nullable = false)
	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	@Id
	@Column(name = "pantherId", nullable = false)
	public int getid() {
		return Pantherid;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Column(name = "email", nullable = false)
	public String getEmail() {
		return email;
	}

	public void setFirstName(String name) {
		this.firstName = name;
	}

	@Column(name = "firstName", nullable = false)
	public String getFirstName() {
		return firstName;
	}
//	public void setUsername(String username){     
//	  this.username = username;    
//	}    
//	public String getUsername(){     
//	  return username;    
//	}   

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPassword() {
		return password;
	}

	public void addCourses() {
		// will update once database connectivity is successful
	}

	public void updateSchedule() {
		// will update once database connectivity is successful
	}

}
