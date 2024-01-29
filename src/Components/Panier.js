import { useState } from "react";

const Panier = () => 
{
    const [countPanier,setPanier]= useState(0);
    
    function addpanier(){
        if (countPanier<=10){
            return setPanier(countPanier+1);
        }
    }
    return ( <>
            <p>{countPanier}</p>
            <button onClick={addpanier}>add panier</button>
        </>
    )
}
export default Panier;