import React from 'react'
import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import HeroCard from '../components/HeroCard'
import { getHeroByName } from '../helpers/getHeroByName';

const SearchPage = () => {
  
  const navigate = useNavigate();
  const location = useLocation();


  const {q = ''} = queryString.parse(location.search);
  const heroes = getHeroByName(q);

  const {searchText,onInputChange} = useForm({
    searchText: q
  });


  const onSearchSubmit = (e) => {
    e.preventDefault();


    navigate(`?q=${searchText}`);

    console.log({searchText})

  }

  return (
    <>
      
      <hr />

      <div className='row'>
        <div className='col-5'>
          <h4>Search a Hero</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input type='text'
             placeholder='Search a hero'
             className='form-control'
             name='searchText'
             autoComplete='off'
             value={searchText}
             onChange={onInputChange}
             />
          <button className='btn btn-outline-primary mt-1'>
            Search
          </button>
          </form>
        </div>



        <div className='col-7'>
          <h4>Results</h4>
          <hr />


          {
            (q === '')
            ?<div className='alert alert-primary'>Search a Hero</div>
            :(heroes.length === 0) && <div className='alert alert-danger'>There's no results with <strong>{q}</strong></div>
          }


          {heroes.map(hero => (
            <HeroCard key={hero.id} hero={hero} />
          ))}

          
        </div>

      </div>




    </>
  )
}

export default SearchPage
