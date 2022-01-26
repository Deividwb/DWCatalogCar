import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
            <div className="container-fluid">
                <Link to="/" className="nav-logo-text" >
                <h4>Carros top</h4>
                </Link>
                <div>
                    <ul>
                        <li>
                            <NavLink to="/" activeClassName="active">
                            Home
                            </NavLink>
                        </li>
                        <li>
                        <NavLink to="/products" activeClassName="active">
                            Catalógo
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;