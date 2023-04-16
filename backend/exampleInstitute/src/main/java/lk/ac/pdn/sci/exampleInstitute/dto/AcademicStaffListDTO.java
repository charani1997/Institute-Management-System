package lk.ac.pdn.sci.exampleInstitute.dto;

public class AcademicStaffListDTO {
    private long staff_id;

    private String firstName;

    private String lastName;

    private double salary;
    private String email;

    public AcademicStaffListDTO() {
    }

    public AcademicStaffListDTO(long staff_id, String firstName, String lastName, double salary, String email) {
        this.staff_id = staff_id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
        this.email = email;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "AcademicStaffListDTO{" +
                "staff_id=" + staff_id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", salary=" + salary +
                ", email='" + email + '\'' +
                '}';
    }
}
