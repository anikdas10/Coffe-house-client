import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <ul className="flex items-center justify-center mt-20 gap-4">
                <li>
                    <NavLink to='/addCoffee' className="btn">Add Coffee</NavLink>
                </li>
                <li>
                    <NavLink to='/updateCoffee' className="btn">Update Coffee</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;