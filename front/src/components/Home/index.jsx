import React from "react";
import {Button, Grid, Typography} from "@mui/material"
import "./styles.css"
import PreviewVideo from "../PreviewVideo"
import Upload from "../Upload";
export default function Home () {
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
                <PreviewVideo/>
                <PreviewVideo/>
                <PreviewVideo/>
            </Grid>
            <Grid className="list2">
            <Typography>
                   Favoritos
                </Typography>
                <PreviewVideo/>
                <PreviewVideo/>
            </Grid>
           </Grid>
            <Upload></Upload>
       </Grid>
    )
}