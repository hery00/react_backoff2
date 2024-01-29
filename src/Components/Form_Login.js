import React from 'react';
import '../Css/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Form_Login() {
  return (
    <div class="card">
            <div class="card-body">
              <h5 class="card-title">Se connecter</h5>
      
      <form className="row g-3">

        <div className="col-md-6">
          
          <div className="form-floating">
            <input type="email" className="form-control" id="floatingEmail" placeholder="Your Email" name="email" />
            <label htmlFor="floatingEmail">Email</label>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="header" />
            <label htmlFor="floatingPassword">Password</label>
          </div>
        </div>
        <div className="col-md-12">
          <button type="submit" className="btn btn-primary">Valider</button>
          <button type="reset" className="btn btn-secondary">S'inscrire</button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Form_Login;
