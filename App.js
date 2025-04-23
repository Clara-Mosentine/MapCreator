import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import EditTexture from './pages/editTexture';
import Library from './pages/library';
import MapCreation from './pages/MapCreation';
import Home from './pages/homepage';
import Signup from './pages/signUp';
import Login from './pages/login';
import Assets from './pages/assetLibrary';
import EditAsset from './pages/editAsset';
function App() {

  return (
    <Router>
      <div>
        <section>                              
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signUp" element= {<Signup/>}/>
                <Route path="/MapCreation" element= {<MapCreation/>}/>
                <Route path="/texture-library" element={<Library/>}/>
                <Route path="/asset-library" element={<Assets/>}/>
                <Route path="/EditTexture" element={<EditTexture/>}/>
                <Route path="/EditAsset" element={<EditAsset/>}/>
                <Route path="/" element= {<Home/>}/>
                <Route path="/MapCreation" element= {<MapCreation/>}/>
            </Routes>                    
        </section>
      </div>
    </Router>
  );
}

export default App;
