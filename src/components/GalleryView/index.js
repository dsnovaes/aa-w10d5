import { useParams } from 'react-router-dom'


const GalleryView = (props) => {
    
    const { galleryId } = useParams();
    return (
        <h1>The Gallery View</h1>
    );
}

export default GalleryView;