import React from 'react'
import HeroList from '../components/HeroList'

const DcPage = () => {

  const publisher = 'DC Comics';


  return (
    <div className='container'>
      <h1>DC Comics</h1>
      <hr/>

      <HeroList publisher={publisher}/>
      
    </div>
  )
}

export default DcPage
