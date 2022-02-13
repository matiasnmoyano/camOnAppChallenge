import React from "react";
import {Grid, Icon, Paper, Typography,Button} from "@mui/material"
import "./styles.css"
export default function Home () {
    return (
      <Paper className="preview" elevation={2}>
        <Typography>Nombre del video.mp4</Typography>
        <Button variant="outlined">Detalles</Button>
      </Paper>
    )
}