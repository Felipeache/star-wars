//Cherche la valeur obtenue depuis le search
import React from 'react'

const character_info = props => {
    let main_icon = "https://cdn0.iconfinder.com/data/icons/famous-character-vol-1-colored/48/JD-34-512.png";
    let card_img = "https://images.unsplash.com/photo-1499334650700-42e4f7ffc63d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";
    
    return (

        <div>
            {
                props.error &&
                <div className="alert alert-danger">
                    <p>{props.error}</p>
                </div>
            } 
            {
                props.name ?
                <div className="card mb-3">
                    <h3 className="card-header">Profil de {props.name.split(" ")[0]}</h3>
                    <img className="card_img" src={card_img} alt="Stormtrooper"/>
                    <div className="card-body">
                        <h5 className="card-title">TOP SECRET</h5>
                        <h6 className="card-subtitle text-muted p-1">Subjet.........{props.name}</h6>
                        <h6 className="card-subtitle text-muted p-1">Height.........{props.height}</h6>
                        <h6 className="card-subtitle text-muted p-1">Homeworld......{props.homeworld}</h6>
                        <h6 className="card-subtitle text-muted p-1">Birth year........{props.birth_year}</h6>
                        <h6 className="card-subtitle text-muted p-1">Starships........{props.starships[0]}</h6>

                    </div>
                    <div className="card-body">
                        <p className="card-text">Voici mes vaisseaux, Padawan: </p>
                    </div>
                    <ul className="list-group list-group-flush">
                        {props.starships.map( (starship,index) => (
                            <li key={index} className="list-group-item">
                                Starship: {starship}
                                
                            </li>  
                        ) )}
                    <div className="card-body">
                    <p className="card-text">Et mes vehicles: </p>
                    {props.starships.map((vehicle, index1) => 
                            <li key={index1} className="list-group-item">
                                Vehicle: {vehicle}
                            </li>
                        )}
                    </div>

                    </ul>
                <div className="card-body">
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
                <div className="card-footer text-muted">
                    2 days ago
                </div>
                </div>
                :
                <div className="card card-body">
                    <p><img className="main-icon" src={main_icon} alt="R2D2"></img></p>
                </div>
                
            }


        </div>
        
    );
}

export default character_info;