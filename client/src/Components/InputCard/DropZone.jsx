import React from 'react'
import imageUrl from '../../assets/image.svg'
import {postImage} from '../../API/image';
import {DisplayContext} from '../../Contexts/DisplayContext';
import { useContext } from 'react';
import { SERVER_URL } from '../../assets/constants';
function DropZone({inputRef}) {
    
    const {changeWhatToDisplay,setUrl,localUrl}=useContext(DisplayContext);

    function getImage(e){
        e.preventDefault();
        const image=e.target.files[0];
        return image;
    }
    async function sendImage(e){

        changeWhatToDisplay(1);
        const image=getImage(e);
        const id=await postImage(image);
        // console.log(id);
        localUrl.current=URL.createObjectURL(image);
        setUrl(`${SERVER_URL}image/${id}`);
        changeWhatToDisplay(2);
        

    }
  return (
    <div className='drop-image'>
        <img src={imageUrl} className='input-image-dummy'/>
        <div className='drop-text' >Drag & Drop your image here</div>
        <input 
            ref={inputRef}
            className='input-file'
            type="file"
            accept="image/*"
            onChange={sendImage}
            >
        </input> 
    </div>
  )
}

export default DropZone