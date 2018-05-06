import React from 'react'

export default (props) => {
  return (
    <div className="swcard" data-aos="fade-up" data-aos-delay={props.delay * 100} > 
        <h2> {props.data.name} </h2>
        <p> Climate: { props.data.climate }</p>
        <p> Orbital Period: { props.data.orbital_period }</p>
        <p> Terrain: { props.data.terrain }</p>
      </div>
  )
}
