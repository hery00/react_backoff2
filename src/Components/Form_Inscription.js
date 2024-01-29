import React from "react";
import "../Css/Inscription.css" ;



function Form_Inscription() {
    return(

        <div className="glass-container">
        <div className="glass-form card">
        <div className="card-body">
          <h5 className="card-title">Inscription</h5>

   
          <form className="row g-3">
            <div className="col-md-12">
              <input type="text" className="form-control" placeholder="Nom" />
            </div>
            <div className="col-md-6">
              <input type="email" className="form-control" placeholder="Email"/>
            </div>
            <div className="col-md-6">
              <input type="password" className="form-control" placeholder="Mot de passe" />
            </div>
            <div className="col-12">
              <input type="password" className="form-control" placeholder="Ressaisir le Mot de passe" />
            </div>
            <div className="col-md-6">
              <input type="date" className="form-control" placeholder="Date de naissance" />
            </div>
            <div className="col-md-6">
              <select id="inputState" className="form-select">
              <option disabled selected>Sexe</option>
                <option selected>Male</option>
                <option>Femele</option>
              </select>
            </div>
            
            <div className="text-center">
              <button type="submit" className="btn btn-primary">Valider</button>
            
            </div>
          </form>
        </div>
      </div>
    </div>

    );
 
}

export default Form_Inscription;