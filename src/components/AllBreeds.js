import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useBreeds = () => {
  const [breeds, setBreeds] = useState([]);

  const fetchCatBreeds = async() => {
    await axios.get('https://api.thecatapi.com/v1/breeds')
    .then((res) => setBreeds(res.data));
  };

  useEffect(() => fetchCatBreeds(), [])
  return [breeds]
}

function AllBreeds() {
  const [breeds] = useBreeds();

  console.log(breeds)

  return (
    <div>

      <select data-testid="breed selection">
        <option default value="Select A Breed"> Select A Breed </option>
        {breeds.map(breed => {
          return(
            <option  key={breed.name} value={breed.name}> {breed.name} </option>
          )
        })}
      </select>
      
    </div>
  )
}

export default AllBreeds
