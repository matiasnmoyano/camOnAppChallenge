import React, {useEffect,useState} from "react";
import { Grid, Typography } from "@mui/material";
import PreviewVideo from "../PreviewVideo"
import "./styles.css"
import axios from "axios";
import Nav from "../Nav";
export default function AllfavoriteVideos () {
    const [allVideos,setAllVideos] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:4000/getVideos")
        .then((rta) => {
            setAllVideos(rta.data.docs.filter((v) => v.fav === true))
            console.log(rta)
        })
    },[])
    return (
       <Grid className="containerAllVideos">
           <Typography className='title' variant='h2'>Tus videos favoritos</Typography>
            <Nav></Nav>
            <Grid className="containerPreviews">
                 {allVideos && allVideos.map((v) => {
                   return <PreviewVideo video={v}></PreviewVideo>
                })}
            </Grid>
       </Grid>
    )
}