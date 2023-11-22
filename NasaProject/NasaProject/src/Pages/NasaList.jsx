import React from 'react'
import Form from '../components/Form'
import { useEffect, useState } from 'react';
import NassaDisplay from '../components/NassaDisplay';


function NasaList() {
  const [nassa, setNassa] = useState(null);
  
  // Function getNassa
  const getNassa = async (searchTerm) => {
    // create a variable that combines the parts of the url into one
    const baseUrl = 'https://images-api.nasa.gov';
    const url = baseUrl  + searchTerm;
    // make fetch request and store response
    console.log(url);
    try {
      // fetch with the url, returns the same thing as when i put that url in the address bar
      const response = await fetch(url);
      console.log(url);
      const data = await response.json();
      console.log(data);
      setNassa(data);
    } catch (e) {
      console.error(e);
    }
  }

    // This will run on the first render but not on subsquent renders
    useEffect(() => {
      
      getNassa();
    }, []);
  


  return (
    <div>
      <h3>This is NasaList page</h3>
      
      <Form nassasearch= {getNassa} />
      <NassaDisplay nassa={nassa}/>
      

      </div>
    
  )
}

export default NasaList