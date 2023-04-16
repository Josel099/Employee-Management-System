import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";
import './app.css'
import AddEmployee from "./Components/addEmploye/AddEmployee";
import ListEmployee from "./Components/listEmploye/ListEmployee";
import { BrowserRouter,Route,Routes } from "react-router-dom";

function App() {
  return (
    <div >
  <BrowserRouter>
  <Header/>
  <div className="routerContainer">
  <Routes>
    <Route path="/" element={<ListEmployee/>}/>
    <Route path="/employee" element={<ListEmployee/>}/>
    <Route path="/add-employee" element={<AddEmployee/>}/>
    <Route path="/add-employee/:id" element={<AddEmployee/>}/>
  </Routes>
  </div>
  <Footer/>

  </BrowserRouter>
    </div>
  );
}

export default App;
