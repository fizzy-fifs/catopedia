import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import AllBreeds from "./components/AllBreeds";

// fetch all cat breeds from api, test react app displays all cat breeds in a drop down list

// const catApi =
//   await fetch('https://api.thecatapi.com/v1/breeds')
//   .then(res => res.json())
//   .then(data => data)
// ;

it("should display a drop down list of cat breeds", () => {
  render(<AllBreeds />);

  expect(screen.getByText("Select A Breed")).toBeInTheDocument();

  fireEvent.change(screen.getByTestId("breed selection"), {
    target: { value: "Donskoy" },
  });
  // expect(screen.getByText("Origin: Russia"));
});
