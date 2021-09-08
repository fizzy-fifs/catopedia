import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SelectABreed from './SelectABreed';

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
  return (
    <div>
      <SelectABreed />
    </div>
  )
}

export default AllBreeds
