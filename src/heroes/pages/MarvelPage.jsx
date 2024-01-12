import React from 'react'
import HeroList from '../components/HeroList'

const MarvelPage = () => {

  const publisher = 'Marvel Comics';

  
  return (
    <div className='container'>
      <h1>Marvel Comics</h1>
      <hr/>

      <HeroList publisher={publisher}/>
        
    </div>
  )
}

export default MarvelPage
