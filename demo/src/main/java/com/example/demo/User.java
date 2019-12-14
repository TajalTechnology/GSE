package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "user_info")
public class User {
	
	@Id
	private long id;
	private String username;
	private String passw0rd;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassw0rd() {
		return passw0rd;
	}
	public void setPassw0rd(String passw0rd) {
		this.passw0rd = passw0rd;
	}
	
	 

}
