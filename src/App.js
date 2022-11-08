import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Navigation from "./components/ui/Navigation"
import Landingpage from "./pages/landingpage/LandingPage"
import WhatWeDo from "./pages/whatwedo/WhatWeDo"
import Maintainable from "./pages/maintainable/Maintainable"
import Getintouch from "./pages/getintouch/GetInTouch"
import { Modal } from "react-bootstrap"

function App() {
  return (
    <div>
    
      <Router>

        <Routes>
            <Route path="/" element={<Landingpage/>}/>
            <Route path="/WhatWeDo" element={<WhatWeDo/>}/>
            <Route path="/Maintainable" element={<Maintainable/>}/>
            <Route path="/GetInTouch" element={<Getintouch/>}/>
        </Routes>
        
      </Router>

    </div>
  );
}

export default App;
