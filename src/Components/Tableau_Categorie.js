import React from 'react'
import { useEffect, useState } from 'react';

const Tableau_Categorie = () => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Perform the fetch request
        const response = await fetch('https://projetcloud2024-production.up.railway.app/api/categorie/list_categorie');
        
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }
    // const [data, setData] = useState([]);

    // useEffect(() => {
        
    //     axios.get('http://projetcloud2024-production.up.railway.app/api/categorie/list_categorie')
    //       .then(response => {
    //         setData(response.data);
    //       })
    //       .catch(error => {
    //         console.error('Erreur lors de la récupération des données:', error);
    //       });
    //      console.log(data);
    //   }, []);


  return (
    <div>
       
       {/* <span><Link to={/Form_Parcelle}><Bouton name="Inserer"/></span></Link> */}
    
      <table>
            <thead>
            <tr>
                <th>Categories</th>
                <th>Terrain</th>
                <th>Utilisateur</th>
                <th>Categorie de cuture</th>
                <th>Type de culture</th>
                <th>Rendement par pieds</th>
            </tr>
            
            </thead>
            <tbody>
            {data.map((item) =>
            (
            <tr>
                <td>{item.nom_categorie}</td>
                <td>{item.rendement_par_pieds}</td>
                <td>{item.prix_unitaire}</td>
            </tr>
             ))}
            </tbody>
        </table>
    
    </div>
  )
}

export default Tableau_Categorie
