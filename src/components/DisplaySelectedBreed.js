import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SelectABreed from './SelectABreed';

const useAllBreeds = () => {
  const [allBreeds, setAllBreeds] = useState([]);

  const fetchCatBreeds = async() => {
    await axios.get('https://api.thecatapi.com/v1/breeds')
    .then((res) => setAllBreeds(res.data));
  };

  useEffect(() => fetchCatBreeds(), [])
  return [allBreeds]
}

function DisplaySelectedBreed(props) {
  const [allBreeds] = useAllBreeds();

  return (
    <div>
      {allBreeds.filter(breed => breed.id === props.selectedBreed).map(filteredBreed => {
        return(

          <div id="displayedBreed" key={filteredBreed.id}> 
            <h1> {filteredBreed.name} </h1> 
            <img src={filteredBreed.image.url} alt={filteredBreed.name} />
            <h3> Description </h3> {filteredBreed.description} 
            {/* {console.log(filteredBreed)} */}
          </div>
        )

      })}
    </div>
  )
}

export default DisplaySelectedBreed
