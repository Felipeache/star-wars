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
    

    get_people = async (res) =>{
        let api = await axios.get("http://localhost:9000/personnages")
        //console.log("********************************************************************",api)
        .then(res => res.data.data.results)
        .then(res => this.setState({data:res})
        .then(console.log("RESPUESSSSSSTA", res)));
    };
    
     async componentDidMount(){
    //     const response = await axios.get("http://localhost:9000/personnages")
    //     const responseData = await response.data.data.results
    //     this.setState({data:responseData})
    //     console.log("dataaaa", this.state.data)
                
     }

    render() {     
            return(
                <div className="container">
                    <Navbar />
                    <SearchForm query_={this.get_people}/>
                    <RandomPeople />

                    
                </div>
            )
    }
    
}

export default Index;