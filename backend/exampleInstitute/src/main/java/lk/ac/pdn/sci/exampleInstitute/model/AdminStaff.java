package lk.ac.pdn.sci.exampleInstitute.model;

import jakarta.persistence.*;

@Entity
@Table(name = "adminStaff")
public class AdminStaff {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long admin_id;
    private String email;
    private String password;

    public AdminStaff() {
    }

    public AdminStaff(long admin_id,String email, String password) {
        this.admin_id = admin_id;
        this.email = email;
        this.password = password;
    }

    public long getAdmin_id() {
        return admin_id;
    }

    public void setAdmin_id(long admin_id) {
        this.admin_id = admin_id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "Admin_staff{" +
                "admin_id=" + admin_id +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
