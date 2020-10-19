import React from 'react'
import SearchForm from '../components/SearchForm';
import Navbar from '../components/Navbar'
import Personnages from '../components/Personnages'


const ShowPeople = props => (
    <div className="container">
        <Navbar />
        <SearchForm/>
        <Personnages />
    </div>
    
)

export default ShowPeople;