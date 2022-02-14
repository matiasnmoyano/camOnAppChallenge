import React from "react";
import { useNavigate } from "react-router-dom"; 
import {Grid, Icon, Paper, Typography,Button} from "@mui/material"
import "./styles.css"
export default function PreviewVideo ({video}) {
    let navigate = useNavigate() 
    function onDetail(id){
      console.log("hola")
       navigate( `/videoDetail/${id}`) 
    }
    return (
      <Paper className="preview" elevation={2}>
          <Typography>{video && video.name}</Typography>
          <Button onClick={() => onDetail(video._id)} variant="outlined">Detalles</Button>
      </Paper>
    )
}