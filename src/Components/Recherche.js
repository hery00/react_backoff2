import React from 'react';
import './../assets/css/recherche.css';

const Recherche = () => {
  return (
    <>
    <div className='container'>
      <form action="/resultats-de-recherche" method="get">
      <input type="text" id="dimensions" name="dimensions" placeholder="Rechercher" />
        <select id="type" name="type">
          <option value="tous">Types</option>
          <option value="ordinateur">Ordinateur</option>
          <option value="smartphone">Smartphone</option>
          <option value="accessoire">Accessoire</option>
        </select>

        
    
        <select id="categorie" name="categorie">
          <option value="toutes">Categories</option>
          <option value="electronique">Électronique</option>
          <option value="vetements">Vêtements</option>
          <option value="maison">Maison</option>
        </select>

        

        <button type="submit">Rechercher</button>
      </form>
      </div>
    </>
  );
};

export default Recherche;
