// // import { Route, Routes } from 'react-router-dom'
// // import './App.css'
// // import NavBar from './NavBar'
// // import Home from './Components/Home'
// // // import About from './Components/About'
// // import Contact from './Components/Contact'
// // import Page404 from './Components/Page404'

// // function App() {
// //   return (
// //     <div>
// //       <NavBar />
// //       <Routes>
// //         <Route path='/' element={<Home />} />
// //         <Route path='/about' element={<About />} />
// //         <Route path='/contact' element={<Contact />} />
// //         <Route path='/contact' element={<Contact />} />
// //         <Route path='/*' element={<Page404 />} />
// //       </Routes>

// //     </div>
// //   )
// // }

// // export default App



// import NavBar from './NavBar'
// import { Route, Routes } from 'react-router-dom'
// import Home from './Components/Home'
// import Cart from './Components/Cart'
// import Page404 from './Components/Page404'
// import { useState } from 'react'

// const App = () => {
//   let [apiData, SetApiData] = useState([]);

//   // console.log(storeData);
  
//   return (
//     <div>
//       <NavBar />
//       <Routes>
//         <Route path='/' element={<Home apiData={apiData} SetApiData={SetApiData}/>} />
//         {/* <Route path='/' element={< apiData={apiData} SetApiData={SetApiData}/>} /> */}
//         {/* <Route path='/cart' element={<Cart/>} /> */}
//         <Route path='/*' element={<Page404 />} />
//       </Routes>
//     </div>
//   )
// }

// export default App


// import { Route, Routes } from 'react-router-dom'
// import './App.css'
// import NavBar from './NavBar'
// import Home from './Components/Home'
// // import About from './Components/About'
// import Contact from './Components/Contact'
// import Page404 from './Components/Page404'

// function App() {
//   return (
//     <div>
//       <NavBar />
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/contact' element={<Contact />} />
//         <Route path='/contact' element={<Contact />} />
//         <Route path='/*' element={<Page404 />} />
//       </Routes>

//     </div>
//   )
// }

// export default App



import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import OneCard from './Components/OneCard';
import { useState } from 'react';

const App = () => {
  const [apiData, setApiData] = useState([]);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home apiData={apiData} setApiData={setApiData} />} />
        <Route path='/cart/:id' element={<OneCard apiData={apiData} setApiData={setApiData} />} />
      </Routes>
    </div>
  );
};

export default App;




