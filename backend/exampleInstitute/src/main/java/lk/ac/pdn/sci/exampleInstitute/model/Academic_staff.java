package lk.ac.pdn.sci.exampleInstitute.model;

import jakarta.persistence.*;

@Entity
@Table(name = "academic_staff")
public class Academic_staff {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long staff_id;
    @Column(name = "first_name", nullable = false)
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "salary",nullable = false)
    private double salary;
    //private String staff_role;
    @Column(unique = true)
    private String username;
    @Column(name = "password",unique = true)
    private String password;
    @Column(name = "email",unique = true)
    private String email;
    @Column(name = "mobileNumber")
    private String mobileNumber;

    public Academic_staff() {
    }

    public Academic_staff(long staff_id, String firstName, String lastName, double salary, String username, String password, String email, String mobileNumber) {
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

    @Override
    public String toString() {
        return "Academic_staff{" +
                "staff_id=" + staff_id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", salary=" + salary +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                ", mobileNumber='" + mobileNumber + '\'' +
                '}';
    }
}

