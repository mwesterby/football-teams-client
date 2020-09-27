import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Listings from './Listings';
import Details from './Details';

function Main() {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Listings} />
        <Route path='/details/:id' component={Details} />
      </Switch>
    </main>
  );
}

// function Header() {
//   return (
//     <header>
//       <nav>
//         <ul>
//           <li><Link to='/'>Home</Link></li>
//           <li><Link to='/details/1'>Details</Link></li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Main />
    </div>
  );
}

export default App;
