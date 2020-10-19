//Creation des trois butons de recherche
import React from 'react'
import SearchForm from '../components/SearchForm';
import Navbar from '../components/Navbar';
import RandomPeople from '../components/RandomPeople'
import axios from 'axios';
import Personnages from '../components/Personnages'


class Index extends React.Component{


    constructor(props){
        super(props);
        this.state = {
        data:[]
        };
    }
    

    // call_the_back = async (res) =>{
    //     let api = await axios.get("http://localhost:9000/personnages")
    //     //console.log("********************************************************************",api)
    //     .then(res => res.data)
    //     .then(res => this.setState({data:res})
    //     .then(console.log("RESPUESSSSSSTA", res)));
    // };
    
    async componentDidMount(){
        const response = await axios.get("http://localhost:9000/personnages")
        const responseData = await response.data.data.results
        this.setState({data:responseData})
        console.log("dataaaa", this.state.data)
                
    }

    render() {     
            return(
                <div className="container">
                    <Navbar />
                   <SearchForm />{/* <SearchForm query_str={this.call_api}/> */}
                    <RandomPeople  />
                    <Personnages />
                    
                </div>
            )
            

   
    }
    
}

export default Index;