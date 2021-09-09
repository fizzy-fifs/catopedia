# Catopedia

Catopedia is a simple wiki application that provides users with detailed information on sixty-seven different cat breeds. Built as a single page application, catopedia is the result of a tech test and was designed based on the following specifications:
  * Sign up and create an API key at https://thecatapi.com/
  * Create an app that retrieves some data from one of the cat API endpoints (of your choice) and renders it on a web page. (Be creative!) 

## Approach
 ### Planning
 The planning stage produced the following user stories:
```
   As a cat lover
  So that I can learn more about cats
  I would like to see all available cat breeds 

  As a cat lover
  So that I can learn more about cats
  I would like to see information about a selected breed

  As a cat lover
  So that I can learn even more about my favourite breed
  I would like to be directed to a credible external source with more  information on a selected breed

```

### Implementation
  Test Driven Development was used in implementing each feature higlighted in the user stories. Git and github was used for version control, with regular commits made. 
  
### Deployment
 Heroku was used to host this application

## Tech/framework used
### Built with

  * React.Js 17.0.2

### Testing Framework
  * React Testing Library 11.1.0

## Usage
Catopedia is a web application designed to run on a web browser.

To run:
  * simply visit: https://catopedia.herokuapp.com in a browser of your choice.

Alternatively, catopedia can be installed on a local machine and run via local host.

To install clone the repo, 'cd' into the application directory and run "npm start".

```
$ git clone https://github.com/fizzy-fifs/catopedia.git
$ cd catopedia
$ npm start
```
 
Users can interact with the application by scrolling through cat breeds at the top of the page. Clicking on a breed will dynamically render the breed information at the centre of the page

![Screenshot 2021-09-09 at 12 15 29](https://user-images.githubusercontent.com/79870430/132676225-8a5aacee-99c0-498f-80c2-972029a1a382.png)


###### *© Fifolu Akinyemi*
