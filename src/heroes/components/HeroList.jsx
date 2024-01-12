import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'
import HeroCard from './HeroCard';

const HeroList = ({publisher}) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])



  return (
    <div className='animate__animated animate__backInLeft row rows-cols-1 row-cols-md-3 g-3'>
        {heroes.map(hero => (
           
            <HeroCard hero={hero}/>
                      
        ))}
    </div>
  )
}

export default HeroList
