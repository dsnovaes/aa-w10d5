import { NavLink } from "react-router-dom";
import './GalleryNavigation.css'


const GalleryNavigation = ({galleries}) => {
    console.log("test",galleries)
    return (
            <nav>
                <h1>Galleries</h1>
                <NavLink to="/" />
            </nav>
    );
}

export default GalleryNavigation;