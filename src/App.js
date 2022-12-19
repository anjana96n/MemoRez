
import './App.css';
import {LandingPage} from './Pages/LandingPage/LandingPage';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {SignInPage} from './Pages/SignInPage/SignInPage'
import {SignUpPage} from './Pages/SignUpPage/SignUpPage'
import { TopNavBar } from './Components/TopNavBar/TopNavBar';
import { Footer } from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <TopNavBar/>
      <BrowserRouter>
      <Routes>
                <Route path="/" exact element={<LandingPage />} />
                <Route path="/signin" exact element={<SignInPage/>} />
                <Route path="/signup" exact element={<SignUpPage/>} />
            </Routes>
      </BrowserRouter>
      <Footer/>
       
    </div>
  );
}

export default App;
