import React, { useState } from "react";
import "./../assets/css/Inscription.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Form_Inscription() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [confirmationMotDePasse, setConfirmationMotDePasse] = useState('');
  const [dateNaissance, setDateNaissance] = useState('');
  const [sexe, setSexe] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = 'https://projetcloud2024-production.up.railway.app/api/Personne/insertPersonne';

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        
        body: JSON.stringify({
          nom: nom,
          email: email,
          pwd: motDePasse,
          dtn: dateNaissance,
          sexe: sexe,
        }),
      });

      if (!response.ok) {
        throw new Error('La réponse du réseau n\'était pas correcte');
      }

      window.location.href="/";

    } catch (error) {
      console.error('Une erreur s\'est produite lors de l\'inscription :', error);
    }
  };

  return (
    <div className="glass-container">
      <div className="glass-form card">
        <div className="card-body">
          <h5 className="card-title">Inscription</h5>
          <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-md-12">
              <input
                type="text"
                className="form-control"
                placeholder="Nom"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <input
                type="password"
                className="form-control"
                placeholder="Mot de passe"
                value={motDePasse}
                onChange={(e) => setMotDePasse(e.target.value)}
              />
            </div>
            <div className="col-12">
              <input
                type="password"
                className="form-control"
                placeholder="Ressaisir le Mot de passe"
                value={confirmationMotDePasse}
                onChange={(e) => setConfirmationMotDePasse(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <input
                type="date"
                className="form-control"
                placeholder="Date de naissance"
                value={dateNaissance}
                onChange={(e) => setDateNaissance(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <select
                id="inputState"
                className="form-select"
                value={sexe}
                onChange={(e) => setSexe(e.target.value)}
              >
                <option disabled value="">Sexe</option>
                <option value="M">Male</option>
                <option value="F">Femele</option>
              </select>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Valider
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form_Inscription;
