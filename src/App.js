
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import FooterComponenet from './components/FooterComponenet';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';

function App() {
  return (
    <div>
       <Router>
        {/* for rounting we have used this */}
          <HeaderComponent></HeaderComponent>
            <div className="container">
              <Routes>
                <Route exact path="/" Component={ListEmployeeComponent}></Route>
                <Route path="/employee" Component={ListEmployeeComponent}></Route>
              </Routes>
          </div>
          <FooterComponenet></FooterComponenet>
        </Router>
    </div>
  );
}

export default App;
