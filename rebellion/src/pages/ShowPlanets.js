import React from 'react';
import SearchForm from '../components/SearchForm';
import Navbar from '../components/Navbar';
import Planets from '../components/Planetes';
import Paginator from '../components/Paginator'


const ShowPlanets = props => (
    <div className="container">
    <Navbar />
    <SearchForm/>
    <Planets />
    <Paginator />
    </div>
    
)

export default ShowPlanets;