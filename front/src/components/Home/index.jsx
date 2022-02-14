import React, {useEffect,useLayoutEffect,useState} from "react";
import {Button, Grid, Typography} from "@mui/material"
import "./styles.css"
import PreviewVideo from "../PreviewVideo"
import Upload from "../Upload";
import axios from "axios";
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
           </Grid>
           <Grid className='lists'>
            <Grid className="list1">
                <Typography>
                   Últimos videos subidos
                </Typography>
                {
                    videos && 
                    videos.map((v) => {
                        return <PreviewVideo video={v}/>
                    })
                }
            </Grid>
            <Grid className="list2">
            <Typography>
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
            </Grid>
           </Grid>
            <Upload></Upload>
       </Grid>
    )
}