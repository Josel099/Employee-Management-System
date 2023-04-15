import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";
import './app.css'
import AddEmployee from "./Components/addEmploye/AddEmployee";
import ListEmployee from "./Components/listEmploye/ListEmployee";

function App() {
  return (
    <div >

  <Header/>
  <ListEmployee/>
  <AddEmployee/>
  <Footer/>
  
    </div>
  );
}

export default App;
