import { Switch, Route, Redirect } from 'react-router-dom'
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView";

const App = props => {
  return (
    <div className='page-wrapper'>
      <Switch>
        <Route path="/galleries/:galleryId" component={GalleryView} />
        <Route path="/galleries" component={GalleryNavigation} />
        <Route exact path="/">
          <GalleryNavigation />
          <h2>Harvard Art Museum</h2>
          <p>Look, but Don't Touch. Please select a Gallery in the navigation bar &uarr;.</p>
        </Route>
        <Route path="/">
          <h2>Page Not Found</h2>
        </Route>
      </Switch>
    </div>
    
  );
}

export default App;
