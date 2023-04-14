package lk.ac.pdn.sci.exampleInstitute.dto;

import jakarta.persistence.Column;

public class Academic_staffDTO {
    private long staff_id;

    private String firstName;

    private String lastName;

    private double salary;
    //private String staff_role;

    private String username;

    private String password;

    private String email;

    private String mobileNumber;

    public Academic_staffDTO(){

    }

    public Academic_staffDTO(long staff_id, String firstName, String lastName, double salary, String username, String password, String email, String mobileNumber) {
        super();
        this.staff_id = staff_id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
        this.username = username;
        this.password = password;
        this.email = email;
        this.mobileNumber = mobileNumber;
    }

    public long getStaff_id() {
        return staff_id;
    }

    public void setStaff_id(long staff_id) {
        this.staff_id = staff_id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }
}
