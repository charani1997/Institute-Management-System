package lk.ac.pdn.sci.exampleInstitute.dto;

public class AdminStaffDTO {
    private long admin_id;
    private String email;
    private String password;

    public AdminStaffDTO() {
    }

    public AdminStaffDTO(long admin_id,String email, String password) {
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
        return "AdminStaffDTO{" +
                "admin_id=" + admin_id +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
