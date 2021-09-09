import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DisplaySelectedBreed from '../DisplaySelectedBreed/DisplaySelectedBreed';
import './SelectABreed.css';

const useBreeds = () => {
  const [breeds, setBreeds] = useState([]);

  const fetchCatBreeds = async() => {
    await axios.get('https://api.thecatapi.com/v1/breeds')
    .then((res) => setBreeds(res.data));
  };

  useEffect(() => fetchCatBreeds(), [])
  return [breeds]
} 

function SelectABreed() {
  const [breeds] = useBreeds();
  const [selectedBreedId, setSelectedBreedId] = useState("abys");

  const selectedBreed = async(breedId) => {
    await setSelectedBreedId(breedId);
    return selectedBreedId;
  };

   
  return (
    <div>

       <select data-testid="breed selection" onChange={event => selectedBreed(event.target[event.target.selectedIndex].id)}>
        <option default value="Select A Breed"> Select A Breed </option>
        {breeds.map(breed => {
          return(
            <option  key={breed.id} id={breed.id} value={breed.name} > {breed.name}  </option>
          )
        })}
      </select>

      <DisplaySelectedBreed selectedBreed={ selectedBreedId } />
    </div>
  )
}

export default SelectABreed
