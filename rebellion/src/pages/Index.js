//Creation des trois butons de recherche
import React from 'react'
import SearchForm from '../components/SearchForm';
import Navbar from '../components/Navbar';
import RandomPeople from '../components/RandomPeople'
import axios from 'axios';


class Index extends React.Component{

    const 


    constructor(props){
        super(props);
        this.state = {
            data:[]
        };
    }
        
    render() {     
            return(
                <div>
                    <div className="container">
                        <Navbar />
                        <SearchForm query_={this.get_people}/>
                        <RandomPeople />
                    </div>
                </div>
            )
    }
    
}

export default Index;