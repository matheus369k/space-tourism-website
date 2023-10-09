import { Route, Routes } from 'react-router-dom';

import Navbar from './Components/layout/Navbar';
import Home from './page/Home';
import Destination from './page/Destination';
import Crew from './page/Crew';
import Technology from './page/Technology';
import Container from './Components/Container';


function App() {
  return (
    <>
       <Navbar/>
       <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/destination' element={<Destination />} />
          <Route path='/crew' element={<Crew />} />
          <Route path='/technology' element={<Technology />} />
        </Routes>
       </Container>
    </>
  );
}

export default App;
