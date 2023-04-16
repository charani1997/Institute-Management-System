package lk.ac.pdn.sci.exampleInstitute.dto;

public class StudentListDTO {
    private long stu_id;
    private String firstName;
    private String lastName;
    private String email;

    public StudentListDTO() {
    }

    public StudentListDTO(long stu_id, String firstName, String lastName, String email) {
        this.stu_id = stu_id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "StudentListDTO{" +
                "stu_id=" + stu_id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
