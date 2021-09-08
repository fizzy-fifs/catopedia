import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import DisplaySelectedBreed from "./components/DisplaySelectedBreed";
import SelectABreed from "./components/SelectABreed";

// fetch all cat breeds from api, test react app displays all cat breeds in a drop down list


it("should display a drop down list of cat breeds", async() => {
  render(<SelectABreed />);

  await waitFor(() => {
    expect(screen.getByText("Select A Breed")).toBeInTheDocument();
    
    let breeds = screen.getByTestId("breed selection");
    userEvent.selectOptions(breeds, "Aegean")
    
    expect(screen.getAllByText("Aegean")).toBeInTheDocument;
  })
  
});


// Render all breed info eg.: name, country of origin etc

it("should render breed info", async() => {
  render(<SelectABreed />);

  expect(screen.getByText("Select A Breed")).toBeInTheDocument();

  await waitFor(() => {
    let breeds = screen.getByTestId("breed selection");
    userEvent.selectOptions(breeds, "Somali")

    expect(screen.getAllByText("Somali")).toBeInTheDocument;
    expect(screen.getByText("Description")).toBeInTheDocument;

    let image = screen.getByAltText('Somali');
    expect(image).toHaveAttribute('src') 
  })

  
  
})

//css 