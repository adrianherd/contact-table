import React from 'react';
import './App.css';
import {Table} from "./Table";

function App() {
    fetch("https://sahmed93846.api-us1.com/api/3/contacts?status=-1&orders%5Bemail%5D=ASC", {
        "method": "GET",
        "headers": {
            'Api-Token': 'bcd062dedabcd0f1ac8a568cdcf58660c44d7e79b91763cc1a5d0c03d52c522d851fceb0'
        }
    })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.error(err);
        });
  return (
    <div className="App">
      <Table />
    </div>
  );
}

export default App;
