import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView";
import { Route } from 'react-router-dom'

function App() {
  return (
    <>
      <GalleryNavigation galleries={harvardArt.records} />
    </>
  );
}

<Switch>
  <Route path="/galleries/:galleryId" component={GalleryView} />
  <Route path="/galleries" component={GalleryNavigation} />
  <Redirect to="/galleries" />
</Switch>

export default App;
