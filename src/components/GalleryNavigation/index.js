import { NavLink } from "react-router-dom";
import './GalleryNavigation.css'
import harvardArt from '../../data/harvardArt.js'

const galleryNames = Object.values(harvardArt.records)

const GalleryNavigation = ({galleries}) => {
    // console.log("test",galleries)
    return (
            <nav>
                <NavLink to={'/'}>Home page</NavLink>
                <h1>Galleries</h1>
                <ul>
                    {galleryNames.map((gallery, i) => (
                        <li key={i}><NavLink to={`/galleries/${gallery.gallerynumber}`}>{gallery.name}</NavLink></li>
                    ))}
                </ul>
            </nav>
    );
}

export default GalleryNavigation;