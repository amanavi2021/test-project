import { NavLink } from "react-router-dom"; 

export default function Nav() {
    return (
        <nav>
             <NavLink to="/">
                Home
            </NavLink>    
            <NavLink to="/catalog">
                Catalog
            </NavLink>
            <NavLink to="/favorites">
                Favorites
            </NavLink>
        </nav>
    )
}