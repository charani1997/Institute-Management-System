import { Link } from "react-router-dom";

const NavbarSheet = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary mb-5">
      <div className="container">
        <Link className="navbar-brand" to="/">
          CRUD Google Sheet
        </Link>
        <div>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mt-1">
              <Link className="btn btn-primary btn-sm" to="/addsheet">
                Add
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarSheet;