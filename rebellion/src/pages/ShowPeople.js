import React from 'react'
import SearchForm from '../components/SearchForm';
import Navbar from '../components/Navbar'

const ShowPeople = props => (
    <div className="container">
    <Navbar />
    <h1>SHOW PEOPLE</h1>
    <SearchForm/>
    </div>
    
)

export default ShowPeople;