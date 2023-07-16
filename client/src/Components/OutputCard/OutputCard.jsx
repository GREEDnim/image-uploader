import React from 'react'
import { DisplayContext } from '../../Contexts/DisplayContext';
import { useContext } from 'react';
import './outputcard.css'
import tick from '../../assets/tick.svg'
function OutputCard() {

  const {url,localUrl}=useContext(DisplayContext);
  function copyToClipboard(e){
     navigator.clipboard.writeText(url);
     e.target.innerText="Copied";
  }
  return (
    <div className='output-card'>
      <div className='tick'> <img src={tick} alt="success" /></div>
      <div className='output-text'>Uploaded Successfully!</div>
      <div className='preview-image'>
          <img src={localUrl.current} alt='fetched image' />
      </div>
      <div className='link-container'>
        <div className='url'>{url}</div>
        <button className='button-copy' onClick={copyToClipboard}>Copy Link</button>
      </div>
        
    </div>
  )
}

export default OutputCard;