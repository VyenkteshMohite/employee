
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import FooterComponenet from './components/FooterComponenet';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';

function App() {
  return (
    <div>
       <Router>
        {/* for rounting we have used this */}
          <HeaderComponent></HeaderComponent>
            <div className="container">
              <Routes>
                <Route exact path="" Component={ListEmployeeComponent}></Route>
                <Route path="/employee" Component={ListEmployeeComponent}></Route>
                <Route path="/add-employee" Component={AddEmployeeComponent}></Route>
                <Route path="/edit-employee/:id" Component={AddEmployeeComponent}></Route>
              </Routes>
          </div>
          <FooterComponenet></FooterComponenet>
        </Router>
    </div>
  );
}

export default App;
