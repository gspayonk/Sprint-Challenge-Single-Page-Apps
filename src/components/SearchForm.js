import React, { useState} from "react";
import { Form, withFormik } from "formik";
import axios from 'axios';
import '../index.css';
import * as Yup from 'yup';



function SearchForm(props) {

  const [searchCharacters, setSearchCharacters] = useState('');
  
  function handleSearch (event) {
    setSearchCharacters(event.target.value);
  };

  function findSearch (event) {
    event.preventDefault ();
    props.search(searchCharacters)
  };

  // useEffect (() =>{

  //   const results = searchCharacters.filter(character =>
  //     character.toLowerCase().includes(searchCharacters)
  //   );

  //     setSearchResults(results);
  //   }, [searchCharacters]);


  return (
    <section className="search-form">
      <Form onSubmit = {findSearch}>
        <input
          value ={searchCharacters}
          onChange = {handleSearch}
          type = 'text'
          />
          <input onClick = {findSearch} type = 'submit' value='Search' />
      </Form>  
      {/* <div className='characterlist'>
        {searchResults.map( character => (
          <li>{character}</li>
        ))}
      </div> */}
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

        .post(`https://rickandmortyapi.com/api/character/?name=`, values)

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