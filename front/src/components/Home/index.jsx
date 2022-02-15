import React, {useEffect,useLayoutEffect,useState} from "react";
import {Button, Grid, Typography, Paper} from "@mui/material"
import "./styles.css"
import PreviewVideo from "../PreviewVideo"
import Upload from "../Upload";
import axios from "axios";
import Nav from '../Nav'
export default function Home () {
const [videos,setVideos] = useState([])
useEffect(()=>{
    axios.get("http://localhost:4000/getVideos")
    .then((rta) => {
        setVideos(rta.data.docs)
        console.log(rta)
    })
},[])

console.log(videos)
    return (
       <Grid className="containerHome">
           <Grid className='nav'>
               <Typography variant="h1">
                   Mis Videos
               </Typography>
               <Nav></Nav>
           </Grid>
           <Grid className='lists'>
            <Paper elevation={5} className="list1">
                <Typography className="subtitle">
                   Últimos videos subidos
                </Typography>
                {
                    videos && 
                    videos.map((v) => {
                        return <PreviewVideo video={v}/>
                    })
                }
            </Paper>
            <Paper elevation={5} className="list2">
            <Typography className="subtitle">
                   Favoritos
                </Typography>
               {
                   videos &&
                   videos.map((v) => {
                       if(v.fav){
                           return <PreviewVideo video={v}></PreviewVideo>
                       }
                   })
               }
            </Paper>
           </Grid>
            <Upload></Upload>
       </Grid>
    )
}