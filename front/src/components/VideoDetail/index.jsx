import { Paper, Typography, Grid, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./styles.css"
import axios from "axios";
import ReactPlayer from "react-player"
export default function VideoDetail () {
    const [detail,setDetail] = useState({})
    let navigate = useNavigate()
    const {id} = useParams()
    useEffect(() => {
        axios.get(`http://localhost:4000/getVideo/${id}`)
        .then((rta) => {
            setDetail(rta.data)
            console.log(detail)
        })
    },[])
    function goBack () {
        navigate("/")
    }
    function handleFav () {
        axios.post(`http://localhost:4000/addFav/${id}`)
        .then((r) => {
            console.log(r)
            location.reload()
        })
    }
    function handleQuitFav () {
        axios.post(`http://localhost:4000/quitFav/${id}`)
        .then((r) => {
            console.log(r)
            location.reload()
        })
    }
    const myUrl = "http://localhost:8887/api/uploads/"
    return (
        <Grid  className="containerVideo">
        <Paper className="paperVideo" elevation={10}>
           <div className="video">
               {
                   detail &&
                     <ReactPlayer url={myUrl+detail.path} width="100%" height="100%" controls={true}></ReactPlayer>
               }
           </div>
           <Grid className="details">
               {
                   detail &&
                   <>
                   <Typography variant="h4">Nombre: {detail.name}</Typography>
                   <Typography variant="h6">Descripción: {detail.description}</Typography>
                   <Typography variant="h8">Autor: {detail.author}</Typography>
                   </>
               }
           </Grid>
           {
               detail && detail.fav === false ?
                <Button onClick={() => handleFav()}>Agregar a favoritos</Button>
                :
                <Button onClick={() => handleQuitFav()}>Quitar de favoritos</Button>
           }
        </Paper>
        <Button onClick={() => goBack()} className='btnVolver'variant='outlined'>Volver</Button>
        </Grid>
    )
}