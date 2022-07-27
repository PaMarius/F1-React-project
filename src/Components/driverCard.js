import './driverCard.css'; 

export const DriverCard = ({driver, index}) => {
    const {points, firstName, lastName, team, number, country} = driver

    return (<div className='driver-card'>
        <div className="driver-stats">
  <div className="rank">{index + 1}</div>
  <div className="driver-points">
  {points} <span className="backg-blk points">PTS</span>
  </div>
</div>
<div className="driver-info">
  <div className="driver-name">
    <span className="first-name">{firstName.toUpperCase()}</span>
    <span className="last-name">{lastName.toUpperCase()}</span>
  </div>
  <div className="driver-country">{country}
    {/* <img className="country-image" alt="" /> */}
  </div>
</div>
<div className="driver-team">{team}</div>
<div className="driver-appearance">
  <div  className="driver-number">{number}</div>
  <div className="driver-photo">
    <img
      className="driver-image"
      src="${image}"
      alt=""
    />
  </div>
</div>
<div className="flip-card-back">
  <p className="info-card">Some Informations</p>
</div>
   </div> )
}