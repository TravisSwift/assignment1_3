import logo from '../logo.svg';

export function Navbar() {

    return (
        <nav className="navbar">
            <img className="logo" src={logo} alt="React Logo" />
            <p className="site-name">My React Site</p>
            <ul className="nav-list">
                <li className="nav-link"> <a href="https://reactjs.org"> Learn React </a></li>
                <li className="nav-link"> <a href="https://reactjs.org/community/support.html"> React Support</a> </li>
                <li className="nav-link"> <a href="https://medium.com/tag/reactjs/latest"> React News </a></li>
            </ul>
        </nav>
    )
}