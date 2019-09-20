import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import axios from 'axios';
import '../index.css';
import * as Yup from 'yup';
import CharacterCard from './CharacterCard';


function SearchForm({status, values}) {

  const [characters, setCharacters] = useState(null);

  useEffect (() =>{
    status && setCharacters(status);
  }, [status]);

  // const handleSearch = event => {
  //   setSearch(event.target.value);
  // }

  // const resetInput = () => {
  //   setSearch('')
  // }

  // const callSearch = event => {
  //   event.preventDefault();
  //   props.search(searchChar);
  //   resetInput();
  // }

  return (
    <section className="search-form">
      <Form className = 'search'>
        <Field type = 'text' name = 'name' placeholder = 'Enter Name' />
        <button type= 'submit'> Submit </button>
      </Form>  
      {characters ? characters.results.map( character => <CharacterCard data = {character} />) : null }
    </section>
  );
}

const FormikSearchForm = withFormik ({
  mapPropsToValues({name}) {
    return {
      name : name || ''
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required('Your name!')
  }),
  handleSubmit(values, {setStatus}) {
    axios

        .get(`https://rickandmortyapi.com/api/character/?name=${values.name}`)

        .then(response => {
          console.log(response);
          setStatus(response.data);
        })

        .catch(error => {
          console.error('Server Error', error);
        });

  }

  })(SearchForm)

export default FormikSearchForm;