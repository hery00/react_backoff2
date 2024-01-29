// import logo from './logo.svg';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import Form_Login from './Components/Form_Login';
import Form_Culture from './Components/Form_Culture';
import List_Parcelle from './Components/List_Parcelle';

const router=createBrowserRouter([

  {
    path:'/',
    element:<Form_Login/>
  },

  {
    path:'/Accueil',
    element:
    <div>
        <Header />
        <SideBar />
        <List_Parcelle/>
      </div>

  },
 
  {
    path:'/Culture',
    element:<Form_Culture/>
  }

])

function App() {
  return (
    <>
        <RouterProvider router={router}/>
    </>
    
  );
}

export default App;
