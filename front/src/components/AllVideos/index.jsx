import React from "react";
import { Grid, Typography } from "@mui/material";
import PreviewVideo from "../PreviewVideo"
import "./styles.css"
export default function AllVideos () {
    return (
       <Grid className="containerAllVideos">
           <Typography className='title' variant='h2'>Todos tus videos</Typography>
            <Grid className="containerPreviews">
            <PreviewVideo></PreviewVideo>
            <PreviewVideo></PreviewVideo>
            <PreviewVideo></PreviewVideo>
            </Grid>
       </Grid>
    )
}