import { useState } from 'react';
import './driverCard.css'; 

export const DriverCard = ({driver, index, increase, decrease, borderHover}) => {
    const {hex, points, firstName, lastName, team, number, country, image} = driver
    
  

    return (<div style={{'--team-color':hex}} className='driver-card'>
        <div className="driver-stats">
          <div className="rank">{index + 1}</div>
          <div className='score'>
            <div className='add-points'>
            <div className='add-points-bttn'>
                <button onClick={()=>increase(number)} className='increase-points'></button>
                <button onClick={()=>decrease(number)} className='decrease-points'></button>
            </div>
            </div>
            <div className='points'>
          <div className="driver-points">
          {points} <span className="backg-blk points-text">PTS</span>
            </div>
          </div>
          </div>
        </div>
        <div className="driver-info">
          <div className="driver-name">
            <span className="first-name">{firstName.toUpperCase()}</span>
            <span className="last-name">{lastName.toUpperCase()}</span>
          </div>
          <div className="driver-country">
            <img className="country-image" src={require(`../../Constant/country/${country}.jpg`)} alt="" />
          </div>
        </div>
        <div className="driver-team">{team}</div>
        <div className="driver-appearance">
          <div  className="driver-number">{number}</div>
          <div className="driver-photo">
            <img
              className="driver-image"
              src={image}
              alt=""
            />
          </div>
        </div>
        <div className="flip-card-back">
          <p className="info-card">Some Informations</p>
        </div>
      </div> )
}