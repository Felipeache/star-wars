
//Creation des trois butons de recherche
import React from 'react'
import SearchForm from '../components/SearchForm';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { Divider } from 'semantic-ui-react';

class RamdomPeople extends React.Component{

    random = Math.floor(Math.random() * (82 - 1)) + 1;
    API = "http://localhost:9000/personnages/"


    constructor(props){
        super(props);
        this.state = {
        data:[]
        };
    }
    
    
    async componentDidMount(){
        const response = await axios.get(this.API+this.ramdom)
        const responseData = response.data.data
        this.setState({data:responseData})
        console.log("dataaaa RANDOM", responseData)
    }

    render() {
        return this.state.data.map( (people) => {
            return (
                <div>
                    <div class="card mb-3">
                        <h3 class="card-header">{people.name}</h3>
                    </div>
                    <div class="card-body">
                    <h5 class="card-title">{people.mass}</h5>
                    <h6 class="card-subtitle text-muted">Support card subtitle</h6>
                    </div>
                    <img ></img>
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Cras justo odio</li>
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item">Vestibulum at eros</li>
                    </ul>
                    <div class="card-body">
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                </div>
            )   
        })
        }

}

export default RamdomPeople;