import React from 'react';
import { BrowserRouter , Route} from 'react-router-dom';

import '../App/App.css';
import Home from '../Home-Page/Home'
import Course from '../Course-Content/Course'
import Footer from '../Home-Page/Footer/Footer'

function App() {
  return (
    <>
    <div className='body'>
      <BrowserRouter>
        <React.Fragment>
          <Route path='/' exact component={Home}/>
          <Route path='/Certificates' exact component={Course}/>
        </React.Fragment>
      </BrowserRouter>
    </div>
    <Footer />
    </>
  );
}

export default App;
