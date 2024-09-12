import React from 'react'
import './AppDownloade.css'
import { assets } from '../../assets/assets'

const AppDownloade = () => {
  return (
    <div className='app-downloade' id='app-downloade'>
        <p>For Better Experience Downloade <br /> Tomato App</p>
        <div className="app-downloade-platforms">
          <img src={assets.play_store} alt="" />
          <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownloade