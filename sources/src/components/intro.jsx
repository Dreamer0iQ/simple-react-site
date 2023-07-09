import React from 'react'

export default function intro() {
  return (
    <div className = "videoWrapper">
        <video playsInline autoPlay muted id="myVideo">
            <source src={`img/${window.screen.width < 500 ? "airflow-mobile" : "airflow"}.mp4`} type="video/mp4"/>
        </video>
        <div className = "scrollDown">листайте вниз <br/> <span className='arrowDown'></span></div>
    </div>
  )
}
