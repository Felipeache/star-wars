import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Character_info from './components/Character_info'
import Search_button from './components/Search_button';
import Option_buttons from './components/Option_buttons';
import md5 from 'md5'

const api_url = "https://swapi.dev/api/people/";
// const nmbr  = Math.floor(Math.random() * (82));

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      apiResponse:""
    };
  }

  call_the_back(){
    fetch("http://localhost:9000/test_api")
      .then(res => res.text())
      .then(res => this.setState({apiResponse:res}));
  }

  componentDidMount(){
    this.call_the_back();
  }
//}

//class App extends Component{

  // state = {
  //   name: '',
  //   height: '',
  //   homeworld: '',
  //   starships: '',
  //   vehicles: '',
  //   birth_year: '',
  //   apiResponse:'',
  //   error: null
  // }

  // call_api = async e => {
  //   e.preventDefault();
  //   const {search_field,} = e.target.elements;
  //   const search_value = search_field.value;
  //   let api_request = api_url+'?search='+search_value;
  //   console.log(api_request)
  //   if (search_value) {
  //       const res = await fetch (api_request);
  //       const data = await res.json();
  //       this.setState({
  //         name: data.results[0].name,
  //         height: data.results[0].height,
  //         homeworld: data.results[0].homeworld,
  //         starships: data.results[0].starships,
  //         vehicles: data.results[0].vehicles,
  //         birth_year: data.results[0].birth_year}); 
  //   } else {
  //     this.setState({error: 'Attention jeune Padawan! tu as oublié ton message!'}); 
  //   }
  // }

  // get_one = async e => {
  //   const nmbr  = Math.floor(Math.random() * (82));
  //   e.preventDefault();
  //   let api_request = api_url+nmbr;
  //   const res = await fetch (api_request);
  //   const data = await res.json();
  //   console.log(data)
  //   this.setState({
  //       name: data.name,
  //       height: data.height,
  //       homeworld: data.homeworld,
  //       starships: data.starships,
  //       vehicles: data.vehicles,
  //       birth_year: data.birth_year}); 
  //   } 

    // if(Object.keys(data.homeworld).length>0){
    //     const world_request = data.homeworld
    //     const world_info =  await fetch(world_request);
    //     const world_data = await world_info.json();
    //     console.log(world_data)
    //     this.setState({
    //       homeworld: data.homeworld
    //     })
        
    //   }
  




render(){
  return (
      <div className="app container p-4">
          <div className="jumbotron">
              <p className="lead text-center p-3">
                  Au secours Obi-Wan Kenobi, vous êtes mon seul espoir! {this.state.apiResponse}
              </p>
              <Search_button query_str={this.call_api}/>
              <Option_buttons id={this.get_one}/>
          </div>
          <Character_info {...this.state}/>
      </div>
  );
}
}

export default App;
