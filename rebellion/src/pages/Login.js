import React, {Component}from 'react';
import axios from 'axios';
import md5 from 'md5';

const auth_call = 'http://localhost:9000/users'


class Login extends Component{
    state = {
        form:{
            username:"",
            password:""
        }
    }

    get_values = async (e) => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]:e.target.value
            }
        })
        //console.log(this.state.form)
    }

    DoLogin = async (e) =>{
        await axios.get(auth_call, {
            params:
                {
                    username: this.state.form.username, 
                    password: md5(this.state.form.password)
                } 
            }).then(response => {
                console.log(response);
                if (response.data.response.length>0){
                    alert("Welcome great master") 
                    window.location.href = "/index"                 

                }
                else{
                    alert('Les espions du seigneur Vader sont partout!');
                }
            })
            .catch(error => {
                alert('Les espions du seigneur Vader sont partout!');
            })
    }

    render() {
        return(
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-3">Bienvenue dans l'Alliance Rebelle jeune Padawan!</h1>
                        <p className="lead">Nous avons besoin de personnes motivées pour défaire l'Empire.</p>
                        <hr className="my-4" />
                        <p>Les espions du seigneur Vader sont partout! Il nous faut donc savoir qui est tu!</p>
                        <p className="lead"></p>
                        <form class="form-group">
                            <fieldset />
                            <legend className="text-success text-center">Login</legend>
                                <div className="row  p-1 m-1">
                                    <label for="username" className="col-sm-2 col-form-label">Utilisateur:</label>
                                    <div class="col-sm-10">
                                        <input 
                                                type="text" 
                                                className="form-control" 
                                                name="username" 
                                                placeholder="Utilisateur"
                                                onChange={this.get_values}
                                        />
                                    </div>    
                                </div>
                                    <div class="row  p-1 m-1">
                                        <label for="password" className="col-sm-2 col-form-label">Password:</label>
                                        <div class="col-sm-10">
                                        <input type="password" 
                                                className="form-control" 
                                                name="password" 
                                                placeholder="Password"
                                                onChange={this.get_values} />
                                    </div>    
                                </div>
                            <button type="button" onClick={ () => this.DoLogin()} class="btn btn-outline-success">Login</button>
                        </form>
                
                            

                    
                </div>
            </div>
 

        )
    }
}

export default Login;