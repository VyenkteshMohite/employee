
import './App.css';
import FooterComponenet from './components/FooterComponenet';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';

function App() {
  return (
    <div>
        <HeaderComponent></HeaderComponent>
        <ListEmployeeComponent></ListEmployeeComponent>
        <FooterComponenet></FooterComponenet>
    </div>
  );
}

export default App;
