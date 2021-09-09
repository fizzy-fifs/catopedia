import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SelectABreed from '../SelectABreed/SelectABreed';
import './DisplaySelectedBreed.css';
import unavailableImage from '../../imgs/unavailable-image.jpeg';



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

      const renderBreedImage = (image) => {
        if (image === undefined || image.id === undefined ) {
          return unavailableImage
        } else {
          return image.url
        }
      }

        return(

          <div id="displayedBreed" key={filteredBreed.id}> 
            <header> <h1>  <i className="fas fa-heading"> {filteredBreed.name}  </i> </h1>  </header>
            <img src={renderBreedImage(filteredBreed.image)} alt={filteredBreed.name} className="displayedBreedImage"/>
            <h3> Description </h3> {filteredBreed.description} 
            <h4> Origin: {filteredBreed.origin} </h4>
            <p>
              Adaptability:      {filteredBreed.adaptability} <br/><br/>
              Affection Level:   {filteredBreed.affecttion_level} <br/><br/>
              Child Friendly:    {filteredBreed.child_friendly}<br/><br/>
              Dog Friendly:      {filteredBreed.dog_friendly}<br/><br/>
              Energy Level:      {filteredBreed.energy_level}<br/><br/>
              Grooming:          {filteredBreed.grooming}<br/><br/>
              Health Issues:     {filteredBreed.health_issues}<br/><br/>
              Intelligence:      {filteredBreed.intelligence}<br/><br/>
              Shedding Level:    {filteredBreed.shedding_level}<br/><br/>
              Social Needs:      {filteredBreed.social_needs}<br/><br/>
              Stranger Friendly:  {filteredBreed.starnger_friendly}<br/><br/>
              Vocalisation:      {filteredBreed.vocalisation}
            </p>
              
            <a href={filteredBreed.wikipedia_url} style={{ alignItems: 'center' }}> Learn More </a>
          </div>
        )

      })}
    </div>
  )
}

export default DisplaySelectedBreed
