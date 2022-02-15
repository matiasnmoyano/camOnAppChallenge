import React from "react";
import { Grid,Button } from "@mui/material";
import "./styles.css"

export default function Nav () {
    return (
        <Grid className="buttonsNav">
           <Button className="btn" href="/" variant="text">Inicio</Button>
           <Button className="btn" href="/myVideos" variant="text">Todos mis videos</Button>
           <Button className="btn" href="/favorites" variant="text">Favoritos</Button>
        </Grid>
    )
}