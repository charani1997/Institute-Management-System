function Students(){
    return(
      
        <div className="container">
            <div className="row">
                <h1>List: Students</h1>
            </div>
            <table class="table">
                <thead className="table-dark">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Student First Name</th>
                    <th scope="col">Student Last Name</th>
                    <th scope="col">Student Email Address</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody className="table-secondary">
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo1</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@mdoe</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    <td>@mdoa</td>
                    </tr>
                    
                </tbody>
            </table>

        </div>

    )
}

export default Students;