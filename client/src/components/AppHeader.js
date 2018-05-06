import React from 'react'
// import logo from '../assets/swapilogo.jpg'

export default () => {
  return (
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Starwars API App</h1> */}
        <div className="starwars-demo">
          <img src="//cssanimation.rocks/demo/starwars/images/star.svg" alt="Star" className="star" />
          <img src="//cssanimation.rocks/demo/starwars/images/wars.svg" alt="Wars" className="wars" />
          <h2 className="byline" id="byline"> SWAPI REACT </h2>
        </div>
      </header>
  )
}