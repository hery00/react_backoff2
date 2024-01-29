// import logo from './logo.svg';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import Form_Login from './Components/Form_Login';
import Form_Culture from './Components/Form_Culture';
import List_Parcelle_Terrain from './Components/List_Parcelle_Terrain';
import Recherche from './Components/Recherche';
import List_Terrain from './Components/List_Terrain';
import Form_Inscription from './Components/Form_Inscription';
import List_Parcelle from './Components/List_Parcelle';

const router=createBrowserRouter([

  {
    path:'/',
    element:<Form_Login/>
  },
  {
    path:'/Form_Inscription',
    element:
    <Form_Inscription/>
  },

  {
    path:'/Accueil',
    element:
    <div>
        <Header />
        <SideBar />
        <Recherche/>
        <List_Parcelle_Terrain/>
        <List_Terrain/>
      </div>

  },
 
  {
    path:'/Culture',
    element:<Form_Culture/>
  },
  {
    path:'/Statistiques',
    element:<div></div>
  },
  {
    path:'/Historiques',
    element:<div></div>
  },
  {
    path:'/Parcelle',
    element: 
    <div>
        <Header />
        <SideBar />
        <List_Parcelle/>

    </div>
  },
  {
    path:'/Terrain',
    element: 
    <div>
      <Header />
        <SideBar />
        <List_Terrain/>

    </div>
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
