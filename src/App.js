import  Home  from './page/Home/Home';
import {Route,Routes} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Category from './components/category/Category';
import FoodList from './page/foodList/FoodList';
import SingleFood from './page/singleFood/SingleFood'
import Search from './page/search/Search'

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
