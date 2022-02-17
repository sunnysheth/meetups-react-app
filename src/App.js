import { Route, Routes } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavouritesPage from './pages/Favourites';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>      
      <Routes>
        <Route path='/' element={<AllMeetupsPage />} exact></Route>
        <Route path='/new-meetup' element={<NewMeetupPage />}></Route>
        <Route path='/favorites' element={<FavouritesPage />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
