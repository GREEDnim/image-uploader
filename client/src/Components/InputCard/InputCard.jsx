import React from 'react'
import DropZone from './DropZone';
import './inputcard.css'
import { useRef, } from 'react';

function InputImage() {

  const inputRef=useRef(null);

  function clickInputElement(){
      inputRef.current.click();
  }

  return (
    <div className='input-card'>
        <div className='head-text'>Upload your image</div>
        <div className="sub-text">File should be Jpeg, Png,...</div>
        <DropZone inputRef={inputRef}></DropZone>
        <div className='or'>Or</div>
        <button className='button-image' onClick={clickInputElement} >Choose a file</button>
    </div>
  )
}

export default InputImage