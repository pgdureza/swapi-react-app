import React from 'react'

export default (props) => {
  return (
    <div className="swcard" data-aos="fade-up" data-aos-delay={props.delay * 100} > 
        <h2> {props.data.name} </h2>
        <p> Birthyear: { props.data.birth_year }</p>
        <p> Gender: { props.data.gender }</p>
        <p> Eye Color: { props.data.eye_color }</p>
        <img src={"https://raw.githubusercontent.com/johnlindquist/swapi-json-server/master/public/" + props.data.name.toLowerCase().split(' ').join('_') + ".jpg"} alt={props.data.name} />
      </div>
  )
}
