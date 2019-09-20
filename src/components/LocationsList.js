import React, { useEffect, useState } from "react";
import axios from 'axios';
// import {Link} from 'react-router-dom';
import LocationCard from './LocationCard';

export default function LocationsList() {

    const [locations, setLocations] = useState ([]);
    const [locationsList] = useState(null);

useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    // const getLocations = () => {

    axios
        .get('https://rickandmortyapi.com/api/location/')

        .then(response => {
            setLocations(response.data);
        })

        .catch(error => {
            console.error('Server Error', error);
        });
    

}, [locations]);

return (
    <section className="location-list">
    {locationsList ? ( locationsList.results.map(location => <LocationCard data={location} />)):
    ( <h1>Fetching</h1>)}
    </section>
);
};


