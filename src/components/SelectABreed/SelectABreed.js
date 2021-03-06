import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DisplaySelectedBreed from '../DisplaySelectedBreed/DisplaySelectedBreed';
import styled from 'styled-components';
import './SelectABreed.css';
import unavailableImage from '../../imgs/unavailable-image.jpeg'


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

       {/* Displays breeds at the top of the page */}
      <div id="breeds">

        {breeds.map(breed => {

        const Content = styled.div`
        border: none;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        `;

        const renderBreedImage = (image) => {
          return (image === undefined || image.id === undefined ) ? unavailableImage : image.url
        }

        return(
          <Content key={breed.id} 
          id={breed.id} 
          onClick={event => selectedBreed(event.currentTarget.id)} 
          style={{ cursor: 'pointer', backgroundImage: `url('${renderBreedImage(breed.image)}')`}}
          className="eachBreed" > 
            
            <h1 >{breed.name}</h1> 
          
          </Content>
        )
        })}

      </div>

      <DisplaySelectedBreed selectedBreed={ selectedBreedId } />
    </div>
  )
}

export default SelectABreed
