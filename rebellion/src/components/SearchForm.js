//Creation des trois butons de recherche
import React from "react";
import axios from "axios";
import ShowPeople from "../routes/ShowPeople";

//pour changer j'ai utilisé ` 🙃
class SearchForm extends React.Component{
    api_url_ = `http://localhost:9000/personnages/search/`; 


    constructor(){
        super();
        this.state={
            data:[],
            query :'',
            error : ''
        }
    }

    async send_query (e){
        e.preventDefault();
        if(!this.state.query){
            this.setState({error:"Attention jeune Padawan, tu as oublié d'écrire!"})

        }else {
        const res = await axios.get(this.api_url_+this.state.query)
        // const data = await res.json()
        this.setState({data:res.data.data})
        }
        }
    
    render(){
        return(
                <div className="app container p-4">
                    <div className="jumbotron">
                    <div className="container"></div>
                    {
                        this.state.error ? 
                        <div className="alert alert-warning">
                            {this.state.error}
                        </div>:
                        ''
                    }
                        <p className="lead text-center p-3">
                            Au secours Obi-Wan Kenobi, vous êtes mon seul espoir!
                        </p>
                        <form onSubmit={(e) => this.send_query(e)}>
                            <div className="row">
                                <div className="form-group col-md-8">
                                    <input
                                        name="search_field"
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Cherche la force..."
                                        onChange={e => this.setState({query:e.target.value})}
                                        autoFocus
                                    />
                                </div>
                                <div className="form-group col-lg-4">
                                    <input
                                        name="get_all"
                                        type="submit"
                                        className="btn btn-lg btn-danger btn-block"
                                        value="La force est avec moi!"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                    <ShowPeople {...this.state} />          
                </div>
        )
    }

}    
export default SearchForm;
