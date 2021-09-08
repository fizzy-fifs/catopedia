import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import AllBreeds from "./components/AllBreeds";

// fetch all cat breeds from api, test react app displays all cat breeds in a drop down list


it("should display a drop down list of cat breeds", async() => {
  render(<AllBreeds />);

  expect(screen.getByText("Select A Breed")).toBeInTheDocument();
 
  await waitFor(() => {
    let breeds = screen.getByTestId("breed selection");
    
    let selectedOption = userEvent.selectOptions(screen.getByTestId("breed selection"), "Aegean")
   
    expect(screen.getByText("Aegean")).toBeInTheDocument;
  })
});


// Render all breed info eg.: name, country of origin etc



//css