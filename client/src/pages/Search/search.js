import React, { Component, useState } from "react";
import axios from "axios";

import Container from "../../components/Container/index";

import Row from "../../components/Row/index";
import Column from "../../components/Column/index";
import Card from "../..//components/Card/index"

import './search.css';

function Search() {

  const [query, setQuery] = useState('');
  const [maxResults, setMaxResults] = useState(5);
  const [response, setResponse] = useState([])

  const bookSearchFunc = (event) => {
    event.preventDefault();
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}`
      )
      .then(res => {
        setResponse(res.data.items)
      })
      .catch(err => {
        console.log('ERROR ' + err)
      });
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
          min="1"
          max="40"
          defaultValue="5"
          onChange={e => setMaxResults(e.target.value)}
        />
      </form>
      <Container style={{ marginTop: 30 }}>
        <Row>
          {response.map((items, i) => {
            let image = items.volumeInfo?.imageLinks?.thumbnail ?? 'https://via.placeholder.com/128x192.png?text=Unavailable'

            return (
              <Column key={i}>
                <Card
                  title={items.volumeInfo.title}
                  authors={items.volumeInfo.authors}
                  description={items.volumeInfo.description}
                  image={image}
                  link={items.volumeInfo.canonicalVolumeLink}
                  id={items.id}
                />
              </Column>)
          }

          )
          }
        </Row>
      </Container>

    </div>
  );

}

export default Search;