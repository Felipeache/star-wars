import React from 'react';
import axios from 'axios';
import Index from '../index.css';
import { Link } from "react-router-dom";
import Navbar from './Navbar';

class RandomPeople extends React.Component{

    random = Math.floor(Math.random() * (82 - 1)) + 1;
    api_url_ = "http://localhost:9000/"; 
    lorem = "Lucas ipsum dolor sit amet calamari c-3p0 darth sidious tatooine watto kessel yoda jango lobot. Padmé jabba moff darth sidious darth antilles yavin. Jawa calrissian vader organa yavin dooku padmé hutt dagobah. Fett gonk padmé mara. Darth vader skywalker organa palpatine skywalker lars. Jango skywalker chewbacca qui-gonn ewok. Calrissian leia c-3po solo luke amidala solo coruscant. Ackbar darth jar gamorrean hutt ventress. Solo ahsoka ahsoka ben tusken raider amidala. Moff maul moff tusken raider skywalker droid fisto chewbacca."
    card_img = "https://images.unsplash.com/photo-1499334650700-42e4f7ffc63d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"


    constructor (){
        super();
        this.state = {
            data:[]
        }
    }

    async componentDidMount(){
        this.get_people();                
    }

    get_people = () => {
        console.log("GET PEOPLE SPEAKING")
        axios.get(this.api_url_+'personnages/'+this.random)
        .then( (response) => {
            this.setState({data : response.data.data});
            this.random = Math.floor(Math.random() * (82 - 1)) + 1;
        })
        .catch((error) => { 
            console.log(error)

        })
    }
    
  //  <h1>Name: {this.state.data.name}  FIN</h1>

    render() {
            return (
                
                <div>   
                    <div className="card mb-3">
                        <h3 className="card-header">  TOP SECRET </h3>
                        <div className="card-body">
                            <h5 className="card-title">Subject: {(this.state.data.name)}</h5>
                        </div>
                            <img className="card_img" src={this.card_img} alt="Image blanche d'ilustration" /> 
                        <div className="card-body">
                            <p className="card-text"> {this.lorem} </p>
                            
                        </div>
                        <h3>A propos...:</h3>
                        
                        <ul className="list-group list-group-flush m-0 p-0">
                            <li className="list-group-item ">Name: {this.state.data.name}</li>
                            <li className="list-group-item ">Height: {this.state.data.height} Mts</li>
                            <li className="list-group-item ">Mass: {this.state.data.mass} Kg</li>
                            <li className="list-group-item ">Birth Year: {this.state.data.birth_year} </li>

                            
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
                        <button type="button" onClick={this.get_people}class="btn btn-outline-success">Appeler autre personnage</button>

                    </div>
                    
                </div>
            )   
        }
}//fin de la clase

export default RandomPeople


// class RamdomPeople extends React.Component{

//     random = Math.floor(Math.random() * (82 - 1)) + 1;


//     constructor(props){
//         super(props);
//         this.state = {
//         data:[]
//         };
//     }
    
    
//     async componentDidMount(){
//         const response = await axios.get(this.api_url_+"people/"+this.ramdom)
//         const responseData = response.data.data.results
//         this.setState({data:responseData})
//         console.log("SALUT JE SUIS RANDOMPEOPLE COMPONENTDIDMOUNT", responseData)
//     }

//     render() {
//         return this.state.data.map( (people) => {
//             return (
//                 <div>
//                     <div class="card mb-3">RANDOMPEOPLE
//                         <h3 class="card-header">{people.name}</h3>
//                     </div>
//                     <div class="card-body">
//                     <h5 class="card-title">{people.mass}</h5>
//                     <h6 class="card-subtitle text-muted">Support card subtitle</h6>
//                     </div>
//                     <img ></img>
//                     <div class="card-body">
//                         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                     </div>
//                     <ul class="list-group list-group-flush">
//                         <li class="list-group-item">Cras justo odio</li>
//                         <li class="list-group-item">Dapibus ac facilisis in</li>
//                         <li class="list-group-item">Vestibulum at eros</li>
//                     </ul>
//                     <div class="card-body">
//                         <a href="#" class="card-link">Card link</a>
//                         <a href="#" class="card-link">Another link</a>
//                     </div>
//                 </div>
//             )   
//         })
//         }

// }