import { NavLink, useParams } from 'react-router-dom'
import harvardArt from '../../data/harvardArt.js'
const galleryNames = Object.values(harvardArt.records)

const GalleryView = () => {
    
    const { galleryId } = useParams();
    const gallery = galleryNames.find(gallery => gallery.gallerynumber === galleryId);
    return (
        <>
            <NavLink to={'/'}>&larr; Home page</NavLink>
            <h1>{gallery.name}</h1>
        </>
    );
}

export default GalleryView;