import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        // two {} if wanna do special style
        <nav className = "navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <Link to ="/">Home</Link>
                <Link to ="/create">New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;