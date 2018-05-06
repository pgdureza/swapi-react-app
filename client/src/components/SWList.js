import React from 'react'
import PeopleCard from "./PeopleCard";
import PlanetCard from "./PlanetCard";

export default (props) => {
  console.log('theprops', props)
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
      {props.items.map((item, index) => 
        { return props.type === 'people' ? (
            <PeopleCard data={item} key={item.url} delay={index}/>
          ) : (
            <PlanetCard data={item} key={item.url} delay={index}/>
        )}
      )}
    </div>
  )
}
