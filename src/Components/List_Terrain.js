

import React from 'react'
import { useEffect, useState } from 'react';
const List_Terrain = () => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
    
        const response = await fetch('http://projetcloud2024-production.up.railway.app/api/Terrain/listsTerrain');
     
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

       
        const jsonData = await response.json();

        setData(jsonData);
      } catch (error) {

        setError(error);
      } finally {

        setLoading(false);
      }
    };


    fetchData();

    return () => {
  
    };
  }, []);

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
              <h5 className="card-title">Liste des Terrain</h5>
             
              <table className="table datatable">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Description</th>
                    <th scope="col">Latitude</th>
                    <th scope="col">Longitude</th>
                  </tr>
                </thead>
                <tbody>
                {data.map((item,index) => (
                <tr key={`${item.id_terrain}_${index}`}>
                    <th scope="row">{item.id_terrain}</th>
                    <td>{item.description}</td>
                    <td>{item.latitude}</td>
                    <td>{item.longitude}</td>
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

export default List_Terrain

