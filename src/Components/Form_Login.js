import React, { useState } from 'react';
import '../assets/css/login.css';
import '../Images/back.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

function Form_Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const url = new URL('http://projetcloud2024-production.up.railway.app/api/login');
      url.searchParams.append('email', email);
      url.searchParams.append('pwd', password);
  
      const response = await fetch(url, 
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('La réponse du réseau n\'était pas correcte');
      }
      window.location.href="/Accueil"
       
    } catch (error) {
     
      console.error('Une erreur s\'est produite lors de la connexion :', error);
    }
  };
  

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Se connecter</h5>
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="floatingEmail"
                placeholder="Votre adresse e-mail"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="floatingEmail">Adresse e-mail</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Mot de passe"
                name="header"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="floatingPassword">Mot de passe</label>
            </div>
          </div>
          <div className="col-md-12">
            <button type="submit" className="btn btn-primary">
              Valider
            </button>
            <button type="reset" className="btn btn-secondary">
              S'inscrire
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form_Login;
