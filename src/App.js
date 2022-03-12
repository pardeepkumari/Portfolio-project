import logo from './logo.svg';
import './App.css';
import NewNavbar from './Components/LAYOUT/Navbar';
// import Home from './Components/HOME/Home';

import MyRouting from './Components/Routing-Module/Routing';
import DATA from './Components/Data';
// import Product from './Components/PRODUCT/Product';

function App() {
  return (
    <div className="App">
    {/* <DATA/> */}
      {/* <Product/> */}
      <MyRouting/>
    </div>
  );
}

export default App;
