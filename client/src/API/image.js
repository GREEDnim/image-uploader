import { API } from "./index";

export async function postImage(image){

    try {
        const imageObj = new FormData();
        imageObj.append('image',image);
        const response =await API.post('/image',imageObj,{
            headers: {
             'content-type': 'multipart/form-data' ,
            }});
        // console.log(response);
        return response.data.imageId;

    } catch (error) {
        console.log(error);
    }
}