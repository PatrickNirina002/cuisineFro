import React, { Component } from 'react';

class Bienvenue extends Component {
    render() {
        return (
            <div id="nafafy">
                <p>Bienvenue sur la site cuisine  ,</p><span className='nom'>{localStorage.getItem('anarana')}</span>
               <span>  vous êtes l'admin de cette page afin de partager votre atelier</span>
               <span>que vous pouvez poster votre atelier</span><br/>
               <span> cliquer ajouter atelier pour ajouter votre atelier</span><br/>
               <span> cliquer ajouter atelier pour voir la liste de produit</span>
            </div>
        );
    }
}

export default Bienvenue;