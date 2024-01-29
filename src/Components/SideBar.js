import { Link } from "react-router-dom";


function SideBar()
{
    return(
        <aside id="sidebar" className="sidebar">

        <ul className="sidebar-nav" id="sidebar-nav">
    
          <li className="nav-item">
            <Link className="nav-link " to="/Accueil">
              <i className="bi bi-grid"></i>
              <span>Accueil</span>
            </Link>
          </li>
    
          <li className="nav-item">
            <Link className="nav-link collapsed" data-bs-target=" components-nav" data-bs-toggle="collapse" to="/Statistiques">
              <i className="bi bi-menu-button-wide"></i><span>Statistiques</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link collapsed" data-bs-target=" icons-nav" data-bs-toggle="collapse" to="/Historiques">
              <i className="bi bi-gem"></i><span>Historiques</span>
            </Link>
          </li>
    
        
        </ul>
    
      </aside>
    );
}

export default SideBar;