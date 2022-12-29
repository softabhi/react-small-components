
// import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

// import Card from './components/Card';
import Home from './components/Home';
import { CartProvider } from 'react-use-cart';
import CartList from './components/CartList';

function App() {
  return (
    <>
      <h1>wel to react</h1>
      {/* <button className='btn btn-primary'>Submit</button> */}
      {/* <Card/> */}
      <CartProvider>
        <Home />
        <CartList/>
      </CartProvider>
    </>
  );
}

export default App;
