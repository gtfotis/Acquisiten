import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import "react-toastify";

// hardcode for now
const isAuthenticated = true;

const Nav = () => {
    //   const logout = (e) => {
    //     e.preventDefault();
    //     localStorage.removeItem("token");
    //     setAuth(false);
    //     toast.success("See you next time!");
    //   };
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-gray">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    Acquisiten
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse justify-content-between"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav mr-auto">

                        {!isAuthenticated ? (
                            <>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/register" className="nav-link">
                                        Register
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">
                                        Login
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link to="/explore" className="nav-link">
                                        Explore
                                    </Link>
                                </li>
                                <li className="nav-item">

                                    <Link
                                        to="/dashboard"
                                        className="nav-link logoutBtn"
                                        href="/dashboard"
                                    >
                                        Dashboard
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a
                                        href="/logout"
                                        type="button"
                                        className="nav-link logoutBtn"
                                    // onClick={(e) => logout(e)}
                                    >
                                        Logout
                                    </a>
                                </li>
                            </>
                        )}
                    </ul>
                    <span class="navbar-text">
                        Acquisitions made easier with Insiten
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
