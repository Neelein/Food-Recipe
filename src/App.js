import  Home  from './page/Home/Home';
import {Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Category from './components/Category/Category';
import FoodList from './page/FoodList/FoodList';
import SingleFood from './page/SingleFood/SingleFood'
import Search from './page/Search/Search'

function App() {
  return (
    <div className='app'>
    <Navbar/>
    <Category/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/foodList/:cate' element={<FoodList/>}/>
        <Route path='/singleFood/:id' element={<SingleFood/>}/>
        <Route path='/search/:name' element={<Search/>}/>
      </Routes>
    </div>
  );
}

export default App;
