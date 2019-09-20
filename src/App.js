import React from "react";
import {Route} from 'react-router-dom';
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import CharacterList from "./components/CharacterList.js";
import SearchForm from "./components/SearchForm.js";
import LocationList from './components/LocationsList';
import "bootstrap/dist/css/bootstrap.min.css";
// import {Link} from 'react-router-dom';



export default function App() {
  return (
    <main>
      <Header />

      <Route exact path = '/' component = {WelcomePage} />
      {/* <Link to={'/characters'}> Characters</Link> */}
      <Route exact path = {['/characters']} component = {CharacterList} />
      {/* <Route path = '/locations' component = {LocationList} /> */}
      {/* <Route path = '/search' component = {SearchForm} /> */}
    </main>

  );
}
