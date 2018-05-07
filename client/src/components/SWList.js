import React from 'react'
import PeopleCard from "./PeopleCard";
import PlanetCard from "./PlanetCard";
import VehicleCard from "./VehicleCard";

const getCard = (type, item, index) => {
  let card;
  switch (type) {
    case 'people':
      card = <PeopleCard data={item} key={item.url} delay={index}/>
      break
    case 'vehicles':
      card = <VehicleCard data={item} key={item.url} delay={index}/>;
      break
    case 'planets':
      card = <PlanetCard data={item} key={item.url} delay={index}/>;
      break
    default:
      break;
  }
  return card;
}


export default (props) => {
  return (
    <div className="swlist">
      <div className="swlist-selector">
        <label> Show info for </label>
        <select onChange={props.selectHandler} value={props.type}>
          <option value="people">People</option>
          <option value="vehicles">Vehicles</option>
          <option value="planets">Planets</option>
        </select>
      </div>
      {props.items.map((item, index) => getCard(props.type, item, index) )}
    </div>
  )
}