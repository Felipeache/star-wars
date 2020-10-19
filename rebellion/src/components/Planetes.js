import React from 'react';
import axios from 'axios';
import Index from '../index.css';
import { Link } from "react-router-dom";

class Planets extends React.Component{

    random = Math.floor(Math.random() * (60 - 1)) + 1;
    api_url_ = "http://localhost:9000/"; 
    lorem = "Kaleesh veila ozzel olié mohc neimoidian poggle aruzan. Yarael stereb kota jacen. Ebe mirta ackbar gavyn coruscant whitesun plagueis. Offee thennqora zuggs frozian. Bib offee amidala lorth tarpals vivenda chagrian zam. Mustafar quelli besalisk fisto isard woostoid ventress iego. Wat r5-d4 solo needa annoo ikrit gavyn. Ackbar bel whaladon omas umbaran panaka wirutid. Jettster vader castell c'baoth sanyassan wat bossk. Obi-wan darth chirrpa allana theelin draethos dressellian boba. Zam ben tchuukthai joruus khai boba."
    card_img = "https://static2.cbrimages.com/wordpress/wp-content/uploads/2020/07/star-wars-death-star-earth.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5"


    constructor (){
        super();
        this.state = {
            data:[],
            previous:[],
            next:[]
        }
    }

    async componentDidMount(){
        this.get_planet();                
    }

    get_planet = () => {
        axios.get(this.api_url_+'planetes/'+this.random)
        .then( (response) => {
            this.setState({data : response.data.data});
            this.random = Math.floor(Math.random() * (60 - 1)) + 1;
        })
        .catch((error) => { 
            console.log(error)

        })
    }
    
    get_all_planets = () => {
        axios.get(this.api_url_+'planetes/')
        .then( (response) => {
            this.setState({data : response.data.data});
            this.setState({previous : response.data.data.previous});
            this.setState({next : response.data.data.next});;
        })
        .catch((error) => { 
            console.log(error)
        })
    }




    render() {
            return (
                
                <div>   

                    <div className="card mb-3">
                        <h3 className="card-header">  GUIDE DES PLANETES </h3>
                        <div className="card-body">
                            <h5 className="card-title">Planète: {(this.state.data.name)}</h5>
                        </div>
                            <img className="card_img" src={this.card_img} alt="Image d'ilustration" /> 
                        <div className="card-body">
                            <p className="card-text"> {this.lorem} </p>
                            
                        </div>
                        <h3>A propos...:</h3>
                        
                        <ul className="list-group list-group-flush m-0 p-0">
                            <li className="list-group-item ">Name: {this.state.data.name}</li>
                            <li className="list-group-item ">Rotation Period: {this.state.data.rotation_period} days</li>
                            <li className="list-group-item ">Diameter: {this.state.data.diameter} Kms</li>
                            <li className="list-group-item ">Climate: {this.state.data.climate} </li>
                            <li className="list-group-item ">Population: {this.state.data.population} </li>

                            
                        </ul>
                        <div class="card-body">
                            {/* {
                                this.state.data.map( (world) => {      
                            <a className="card-link"><Link to="{this.state.data.homeworld}" className="card-link">Visit his world </Link></a>
                            
                            })
                            } */}

                            
                            <a href="#" className="card-link">Vehicles link</a>
                            <a href="#" className="card-link">Starships link</a>

                        </div>
                        <div className="card-footer text-muted">
                        tu veux appeler quelqu'un d'autre?
                        </div>
                        <button type="button" onClick={this.get_planet}class="btn btn-outline-success">Emmène moi ailleurs</button>
                        <button type="button" onClick={this.get_all_planets}class="btn btn-outline-success">Voir ous les planèts</button>
                    </div>
                    
                </div>
            )   
        }
}//fin de la clase

export default Planets

