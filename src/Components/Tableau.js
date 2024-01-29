
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './../assets/css/table.css';

const Tableau = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Faire une requête GET vers le service web Java
        axios.get('http://projetcloud2024-production.up.railway.app/api/Parcelle/information_parcelle_par_terrain_utilisateur?id_utlisateur=1')
          .then(response => {
            setData(response.data);
          })
          .catch(error => {
            console.error('Erreur lors de la récupération des données:', error);
          });
      }, []);

  return (
    <div>

        <table>
            <thead>
            <tr>
                <th>Parcelle</th>
                <th>Terrain</th>
                <th>Utilisateur</th>
                <th>Categorie de cuture</th>
                <th>Type de culture</th>
                <th>Rendement par pieds</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Data 1</td>
                <td>Data 2</td>
                <td>Data 3</td>
            </tr>
            <tr>
                <td>Data 4</td>
                <td>Data 5</td>
                <td>Data 6</td>
            </tr>
            </tbody>
        </table>
      
    </div>
  )
}

export default Tableau
