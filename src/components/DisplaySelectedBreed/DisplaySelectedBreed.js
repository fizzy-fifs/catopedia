import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DisplaySelectedBreed.css';
import unavailableImage from '../../imgs/unavailable-image.jpeg';
import { FaStar } from 'react-icons/fa';




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
        return (image === undefined || image.id === undefined ) ? unavailableImage : image.url
      }

      const starRating = (arg) => {
        let stars = [];
        for (let i=1; i <= arg; i++ ) { stars.push(i) };

        return stars.map(star => { return( <FaStar /> ) });
      }

      return(

        <div id="displayedBreed" key={filteredBreed.id}> 
          <header> <h1>  <i className="fas fa-heading"> {filteredBreed.name}  </i> </h1>  </header>
          <img src={renderBreedImage(filteredBreed.image)} alt={filteredBreed.name} className="displayedBreedImage"/>
          <h3> Description </h3> {filteredBreed.description} 
          <h4> Origin: {filteredBreed.origin} </h4>
          <h5>
            Adaptability:      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{starRating(filteredBreed.adaptability)} <br/><br/>
            Affection Level:   &nbsp;&nbsp;{starRating(filteredBreed.affection_level)} <br/><br/>
            Child Friendly:    &nbsp;&nbsp;&nbsp;&nbsp;{starRating(filteredBreed.child_friendly)}<br/><br/>
            Dog Friendly:      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{starRating(filteredBreed.dog_friendly)}<br/><br/>
            Energy Level:      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{starRating(filteredBreed.energy_level)}<br/><br/>
            Grooming:          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{starRating(filteredBreed.grooming)}<br/><br/>
            Health Issues:     &nbsp;&nbsp;&nbsp;&nbsp;{starRating(filteredBreed.health_issues)}<br/><br/>
            Intelligence:      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{starRating(filteredBreed.intelligence)}<br/><br/>
            Shedding Level:    &nbsp;&nbsp;{starRating(filteredBreed.shedding_level)}<br/><br/>
            Social Needs:      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{starRating(filteredBreed.social_needs)}<br/><br/>
            Stranger Friendly: {starRating(filteredBreed.stranger_friendly)}<br/><br/>
            Vocalisation:      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{starRating(filteredBreed.vocalisation)}
          </h5>
            
          <a href={filteredBreed.wikipedia_url} style={{ alignItems: 'center' }}> Learn More </a>
        </div>
      )

      })}
    </div>
  )
}

export default DisplaySelectedBreed
