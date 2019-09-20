import React from "react";
import {Link} from 'react-router-dom';
import '../index.css';


export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <div className = 'navigation'>
        <Link to = {'/'}><h3>Home</h3></Link>
        <Link to = {'/characters'}><h3>Characters</h3></Link>
      </div>
    </header>
  );
}