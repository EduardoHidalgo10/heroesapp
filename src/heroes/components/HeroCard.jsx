import React from 'react'
import '../../styles.css'
import { Link} from 'react-router-dom';

const HeroCard = ({hero}) => {
    const heroImageUrl = `/assets/${hero.id}.jpg`;




  return (
    <div  className="card m-3 animate__animated animate__fadeIn">
            <img className="card-img-top" src={heroImageUrl} alt={hero.superhero}/>
            <div className="card-body">
              <h5 className="card-title">{hero.superhero}</h5>
              <p className='card-text'>{hero.alter_ego}</p>
              <p className="card-text">{(hero.alter_ego !== hero.characters) && hero.characters}</p>
              <p>
              <small>{hero.first_appearance}</small>

              </p>
              <Link to={`/hero/${hero.id}`}>See hero details...</Link>
            </div>
    </div>
  )
}

export default HeroCard
