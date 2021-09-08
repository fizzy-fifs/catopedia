import { render, screen } from '@testing-library/react';
import App from './App';

// fetch all cat breeds from api, test react app displays all cat breeds in a drop down list

const catApi = 
  await fetch('https://api.thecatapi.com/v1/breeds')
  .then(res => res.json())
  .then(data => data)
;

it('should display a drop down list of cat breeds', () => {
  render(<AllBreeds />);

  expect(screen.getByLabelText(/Select a breed/i)).toBeInTheDocument();
  expect(screen.getByTestId(/breed selection/i)).toEqual('Abyssinian');

  userEvent.change(screen.getByTestId(/breed selection/i), {
    target: { value: "Donskoy" }
  })
  expect(screen.getByText("Origin: Russia"));
});
