import {Link} from "react-router-dom";

function Header() {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
        <img src="/Images/logo2.jpg" alt="" width="50" height="50" class="d-inline-block align-text-top px-1"/>
          WISDOM

        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
        <Link className="nav-link" to="/about">ABOUT US</Link>
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            FACULTY
          </a>
          <ul className="dropdown-menu bg-secondary" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item bg-info text-white" to="/computing">Computing</Link></li>
            <li><Link className="dropdown-item bg-primary text-white" to="/engineering">Engineering</Link></li>
            <li><Link className="dropdown-item bg-info text-white" to="/science">Science</Link></li>
          </ul>
        </li>
        <Link className="nav-link" to="/departments">DEPARTMENTS</Link>
        <Link className="nav-link" to="/all-courses">COURSES</Link>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle btn-lg" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            USER
          </a>
          <ul className="dropdown-menu bg-secondary" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item bg-info text-white" to="/user-login">Login</Link></li>
            <li><Link className="dropdown-item bg-primary text-white" to="/user-register">Register</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item bg-info text-white" to="/user-dashboard">Dashboard</Link></li>
            <li><Link className="dropdown-item bg-primary text-white" to="/user-login">Logout</Link></li>
          </ul>
        </li> */}

        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle btn-lg" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            STAFF
          </a>
          <ul className="dropdown-menu bg-secondary" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item bg-info text-white" to="/staff-login">Login</Link></li>
            <li><Link className="dropdown-item bg-primary text-white" to="/staff-register">Register</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item bg-info text-white" to="/staff-dashboard">Dashboard</Link></li>
            <li><Link className="dropdown-item bg-primary text-white" to="/staff-login">Logout</Link></li>
          </ul>
        </li> */}

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ONLINE SERVICES
          </a>
          {/*************************************************************************************** */}
          <ul className="dropdown-menu bg-secondary" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item bg-info text-white" to="/user-dashboard">Go to Dashboard</Link></li>
            <li><Link className="dropdown-item bg-primary text-white" to="/user-register">Registration</Link></li>
            {/*<li><Link className="dropdown-item bg-info text-white" to="/signin">Payments</Link></li>*/}
            <li><Link className="dropdown-item bg-info text-white" to="/forum">Online Discussion</Link></li>
            <li><Link className="dropdown-item bg-primary text-white" to="/chat">Group Chat</Link></li>
            <li><Link className="dropdown-item bg-info text-white" to="/students">Student List</Link></li>
          </ul>
        </li>
        
        <Link className="nav-link text-primary" to="/signin"><strong>SIGN IN</strong></Link>
      </div>
    
 
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>

    </div>
  </div>
</nav>
    );
  }
  
  export default Header;
  