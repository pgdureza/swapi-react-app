import React from 'react'

export default (props) => {
  return (
    <div className="swcard" data-aos="fade-up" data-aos-delay={props.delay * 100} > 
        <h2> {props.data.name} </h2>
        <p> Model: { props.data.model }</p>
        <p> Manufacturer: { props.data.manufacturer }</p>
        <p> Max Atmosphering Speed: { props.data.max_atmosphering_speed }</p>
        <img src={"https://raw.githubusercontent.com/johnlindquist/swapi-json-server/master/public/" + props.data.name.toLowerCase().split(' ').join('_') + ".jpg"} alt={props.data.name} />
      </div>
  )
}
