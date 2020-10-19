import React from 'react'
import axios from 'axios';
class RandomPeople extends React.Component{

    random = Math.floor(Math.random() * (82 - 1)) + 1;
    api_url_ = "http://localhost:9000/"; 



    constructor (){
        super();
        this.state = {
            data:[]
        }
    }

    // async componentDidMount(){
    //         const response =  await fetch(this.api_url_+'personnages/'+this.random);
    //         const CleanedRes =  await response.json()
    //         console.log("**********************************************************************",typeof(CleanedRes));
    //         this.setState({data:CleanedRes});
    //         console.log("******************************************************************************STATE*",this.state.data)
    //     }

    // const CleanedRes =  await response.json()
    // this.setState({data:CleanedRes.data})
    // console.log("IMPIRMIERNDO NOMBRE", CleanedRes.data.name)


    async componentDidMount(){
        this.get_people();                
    }

    get_people = () => {
        axios.get(this.api_url_+'personnages/'+this.random)
        .then( (response) => {
            this.setState({data : response.data.data});
        })
        .catch((error) => { 
            console.log(error)

        })
    }
    

    render() {
            return (
                <div>
                    <h1>Name: {this.state.data.name}  FIN</h1>
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