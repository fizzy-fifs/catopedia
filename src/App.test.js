import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import DisplaySelectedBreed from "./components/DisplaySelectedBreed/DisplaySelectedBreed";
import SelectABreed from "./components/SelectABreed/SelectABreed";

// fetch all cat breeds from api, test react app displays all cat breeds in a drop down list


it("should display a scrollable list of cat breeds", async() => {
  render(<SelectABreed />);

  await waitFor(() => {
    expect(screen.getAllByText("Aegean")).toBeInTheDocument;
  })
  
});


// Render all breed info eg.: name, country of origin etc

it("should render breed info", async() => {
  render(<SelectABreed />);

  await waitFor(() => {
    expect(screen.getAllByText("Somali")).toBeInTheDocument;
    expect(screen.getByText("Description")).toBeInTheDocument;

    let image = screen.getByAltText('American Curl');
    expect(image).toHaveAttribute('src')
  })

  

})
