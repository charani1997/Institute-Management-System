package lk.ac.pdn.sci.exampleInstitute.model;

import jakarta.persistence.*;

import java.util.Date;
@Entity
@Table(name = "students")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long stu_id;
    @Column(name = "first_name", nullable = false)
    private String firstName;
    @Column(name = "last_name",nullable = false)
    private String lastName;
    @Column(name = "dob",nullable = false)
    private Date dateOfBirth;
    @Column(name = "admissionDate",nullable = false)
    private Date admissionDate;
    @Column(name = "email",nullable = false)
    private String email;
    @Column(name = "address")
    private String address;
    @Column(unique = true)
    private String username;
    @Column(name = "password",nullable = false)
    private String password;
    @Column(length = 10, unique = true)
    private int mobileNumber;

    public Student(){

    }

    public Student(String firstName, String lastName, Date dateOfBirth, Date admissionDate, String email, String address, String username, String password, int mobileNumber) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.admissionDate = admissionDate;
        this.email = email;
        this.address = address;
        this.username = username;
        this.password = password;
        this.mobileNumber = mobileNumber;
    }

    public long getStu_id() {
        return stu_id;
    }

    public void setStu_id(long stu_id) {
        this.stu_id = stu_id;
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

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public Date getAdmissionDate() {
        return admissionDate;
    }

    public void setAdmissionDate(Date admissionDate) {
        this.admissionDate = admissionDate;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
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

    public int getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(int mobileNumber) {
        this.mobileNumber = mobileNumber;
    }
}
