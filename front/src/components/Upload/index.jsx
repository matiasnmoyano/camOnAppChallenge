import React, {useState} from "react";
import axios from 'axios'
export default function Upload(){
    const [file,setFile] = useState(null)
    
    const onClick = (e) =>{
        e.preventDefault()
        let formData = new FormData()
        formData.append("image",file[0],"otracosa.png")
        formData.append("hola",45)
        console.log(formData)
         axios.create({
            headers: {
            'Content-Type': 'multipart/form-data'
            }    
        })
        .post("http://localhost:4000/upload",formData)
        .then((rta) => {
            console.log(rta)
        }) 
    }
    return (
        <form onSubmit={onClick} encType="multipart/form-data">
            <input type='file' id="file" name="file" onChange={(e) => {
                setFile(e.target.files)}}
            >
            </input>
            <input type="submit"/>
        </form>
    )
}