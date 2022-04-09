import { Routes, Route } from 'react-router-dom';
import { Home, Navigation, Signin } from './screens'
const App = () => {

  const Shop = () => {
    return <h1>I am the shop page</h1>;
  };

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<Signin />} />
      </Route>
    </Routes>
  );
}

export default App;
