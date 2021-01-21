import React from 'react';
import './App.css';
import {Table} from "./Table";

function App() {
    fetch("api/3/contacts?status=-1&orders[email]=ASC", {
        "method": "GET",
        "headers": {
            'Api-Token': 'bcd062dedabcd0f1ac8a568cdcf58660c44d7e79b91763cc1a5d0c03d52c522d851fceb0'
        }
    })
        .then(response => {
            response.text().then(function(data) {
                console.log("poop");
                console.log(data);
            });
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
