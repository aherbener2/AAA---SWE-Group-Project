package edu.gsu.swe.aaaapp;

public class Tutor {
	private int Pantherid;
	private String username;
	private String password;
	private String name;
	private String email;
	private String courses;
	
	public Tutor(String username, String password, String name, String email, int pantherid) {
	this.username = username;
	this.password = password;
	this.email = email;
	this.name = name;
	this.Pantherid = pantherid;
	}
	public void setid(int id) {
		this.Pantherid = id;
	}
	public int getid() {
		return Pantherid;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getEmail(){
		return email;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getName() {
		return name;
	}
	public void setUsername(String username){     
	  this.username = username;    
	}    
	public String getUsername(){     
	  return username;    
	}   

	public void setPassword(String password){     
	  this.password= password;    
	}    
	public String getPassword(){     
	  return password;    
	}
	
	public void addCourses() {
		// will update once database connectivity is successful
	}
	public void updateSchedule() {
		// will update once database connectivity is successful 
	}
	
	
	
	}    


