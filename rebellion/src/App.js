import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Character_info from './components/Character_info'
import SearchForm from './components/SearchForm';

const api_url_ = "https://swapi.dev/api/people/";

class App extends React.Component{
constructor(props){
    super(props);
    this.state = {
    apiResponse:""
    };
}

call_the_back(){
    fetch("http://localhost:9000/personnages")
    .then(res => res.text())
    .then(res => this.setState({apiResponse:res}));
}

componentDidMount(){
    this.call_the_back();
}

  call_api = async e => {
    e.preventDefault();
    const {search_field,} = e.target.elements;
    const search_value = search_field.value;
    let api_request = api_url_+'?search='+search_value;
    console.log(api_request)
    if (search_value) {
        const res = await fetch (api_request);
        const response = await res.json();
        this.setState({data: response 	}); 
		console.log("nuEVA RESPUESTQ", this.state)

		} else {
      this.setState({error: 'Attention jeune Padawan! tu as oublié ton message!'}); 
    }
  }

render(){
  return (
      <div className="app container p-4">
          <div className="jumbotron">
              <p className="lead text-center p-3">
                  Au secours Obi-Wan Kenobi, vous êtes mon seul espoir! {this.state.apiResponse}
              </p>
              <SearchForm query_str={this.call_api}/>
              {/* <Option_buttons id={this.get_one}/> */}
          </div>
          <Character_info {...this.state}/>
      </div>
  );
}
}

export default App;
