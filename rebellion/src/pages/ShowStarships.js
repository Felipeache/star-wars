import React from 'react'
import SearchForm from '../components/SearchForm';
import Navbar from '../components/Navbar'

const ShowStarships = props => (
  <div className="container">
  <Navbar />
  <h1>SHOW STARSHIPS</h1>
  <SearchForm/>
  </div>
    
)

export default ShowStarships;