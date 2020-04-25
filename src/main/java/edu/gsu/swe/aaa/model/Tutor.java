package edu.gsu.swe.aaa.model;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "tutor")
public class Tutor {
    private String pantherId;
    private String firstname;
    private String lastName;
    private String email;
    private String password;

    /**
     * @return the pantherId
     */
    public String getPantherId() {
        return pantherId;
    }

    /**
     * @param pantherId the pantherId to set
     */
    public void setPantherId(String pantherId) {
        this.pantherId = pantherId;
    }

    /**
     * @return the firstname
     */
    public String getFirstname() {
        return firstname;
    }

    /**
     * @param firstname the firstname to set
     */
    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    /**
     * @return the lastName
     */
    public String getLastName() {
        return lastName;
    }

    /**
     * @param lastName the lastName to set
     */
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    /**
     * @return the email
     */
    public String getEmail() {
        return email;
    }

    /**
     * @param email the email to set
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * @return the password
     */
    public String getPassword() {
        return password;
    }

    /**
     * @param password the password to set
     */
    public void setPassword(String password) {
        this.password = password;
    }

}