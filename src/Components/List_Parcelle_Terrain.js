
import React from 'react'
import { useEffect, useState } from 'react';
import Bouton from './Bouton';
import { Link } from 'react-router-dom';
const List_Parcelle_Terrain = () => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Perform the fetch request
        const response = await fetch('http://projetcloud2024-production.up.railway.app/api/Parcelle/listParcelleterrain');
        
        // Check if the request was successful
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        // Convert the response to JSON
        const jsonData = await response.json();
        // Update the state with the fetched data
        setData(jsonData);
      } catch (error) {
        // Update the state with the error
        setError(error);
      } finally {
        // Set loading to false regardless of success or failure
        setLoading(false);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();

    // Clean up function
    return () => {
      // You can perform any cleanup here if necessary
    };
  }, []); // Empty dependency array to run effect only once

  if (loading) 
  {
    return <div>Loading...</div>;
  }

  if (error) 
  {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }
  return (
    <div>
        <div className="row">
        <div className="col-lg-12">

          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Liste des Parcelles</h5>
             
              <table className="table datatable">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">dimension</th>
                    <th scope="col">Nombre pieds</th>
                    <th scope="col">Utilisateur</th>
                    <th scope="col">Terrain</th>
                    <th scope="col">Categorie</th>
                    <th scope="col">Type</th>
                    <th scope="col">Prix du Parcelle</th>
                  </tr>
                </thead>
                <tbody>
                {data.map((item,index) => (
                  <tr key={`${item.id_parcelle}_${index}`}>
                    <th scope="row">{item.id_parcelle}</th>
                    <td>{item.dimension}</td>
                    <td>{item.nb_pieds}</td>
                    <td>{item.nom}</td>
                    <td>{item.id_terrain}</td>
                    <td>{item.nom_categorie}</td>
                    <td>{item.nom_type}</td>
                    <td>{item.prix_parcelle}</td>
                  </tr>
                ))}
                </tbody>
              </table>
            

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default List_Parcelle_Terrain
