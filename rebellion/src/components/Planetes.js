//Creation des trois butons de recherche
import React from 'react'

const Get_world_info = props => (
    <form onSubmit={props.query_str}>
            <div className="row">
                <div className="form-group col-md-8">
                    <input name="search_field" type="text" className="form-control form-control-lg" 
                        placeholder="Cherche la force..." autoFocus/> 
                </div>
                <div className="form-group col-lg-4">
                    <input name="get_all"type="submit" className="btn btn-lg btn-danger btn-block" 
                    value="La force est avec moi!"/> 
                </div>
                
            </div>
    </form> 
    
)

export default Get_world_info;