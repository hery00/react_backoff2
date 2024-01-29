import React from 'react';

const Bouton = (props) => {
  const { name } = props;

  return (
    <div>
      <button type="submit" className="btn btn-secondary">{name}</button>
    </div>
  );
}

export default Bouton;
