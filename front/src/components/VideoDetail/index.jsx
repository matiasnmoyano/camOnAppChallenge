import { Paper, Typography, Grid, Button } from "@mui/material";
import React from "react";
import "./styles.css"
export default function VideoDetail () {
    return (
        <Grid  className="containerVideo">
        <Paper className="paperVideo" elevation={10}>
           <div className="video"></div>
           <div className="details"></div>
        </Paper>
        <Button className='btnVolver'variant='outlined'>Volver</Button>
        </Grid>
    )
}