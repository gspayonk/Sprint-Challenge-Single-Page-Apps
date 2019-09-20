import React, { useEffect, useState } from "react";
import axios from 'axios';
// import {Link} from 'react-router-dom';
import LocationCard from './LocationCard';

export default function LocationsList() {

    const [locations, setLocations] = useState ('https://rickandmortyapi.com/api/location/');
    cons [locationsList, setList] = useState(null);

useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    // const getLocations = () => {

    axios
        .get(`${locations}`)

        .then(response => {
            setLocations(response.data);
        })

        .catch(error => {
            console.error('Server Error', error);
        });
    

}, [locations]);

return (
    <section className="location-list">
    {locationList ? ( locationList.results.map(location => <LocationCard data={location} />)):
    ( <h1>Fetching</h1>)}
    </section>
);
};


