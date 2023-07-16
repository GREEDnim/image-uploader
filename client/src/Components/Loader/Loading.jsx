import React from 'react'
import './Loader.css'
function Loading() {
  return (
    <div className='loader-container'>
      <div className="loader-text">Uploading...</div>
      <div className="loader-bar">
        <div className="loader-content"></div>
      </div>
    </div>
  )
}

export default Loading