import React, {Component, useState} from "react";
import axios from "axios";

import Container from "../../components/Container/index";

import Row from "../../components/Row/index";
import Column from "../../components/Column/index";


import './search.css';

function Search() {
  
    const [query, setQuery] = useState('')
    const [maxResults, setMaxResults] = useState(10);

    const bookSearchFunc = (event) => { 
      event.preventDefault();
      axios 
        .get(
         `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}`
        )
        .then(res => {
          console.log(res)
        } );
    };

      return (
      <div>
        <div className="row">
          <h1 className="searchTitle">Search for a Book</h1>
        </div>
        <form className="search-form form-inline">
          <input 
          className="bookSearch" 
          placeholder="Book" 
          onChange={e => setQuery(e.target.value)}
          />
          <button 
          type="submit" 
          className="btn bookSearchBtn "
          onClick={bookSearchFunc}>
            Search
          </button>
          <input
          className="amountSearch"
          type="number"
          placeholder= "Amount"
          min="1"
          max="40"
          onChange={e => setMaxResults(e.target.value)}
          />
        </form>
        <Container style={{ marginTop: 30 }}>
        </Container>

      </div>
      );

}

export default Search;