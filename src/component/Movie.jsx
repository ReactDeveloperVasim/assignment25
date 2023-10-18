import { Card, CardContent, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

export const Movie=()=>{
    const[data,setData]=useState([]);

    const getdata=async()=>{
        const result=await axios.get("https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies");
        setData(result.data);
    };

    useEffect(()=>{
        getdata();
    },[])
    return(
        <Grid container spacing={2}>
            {
                data.slice(0,4).map((item)=>
                    <Grid item xs={3}>
                    <Card sx={{height:"480px"}}>
                        <CardContent>
                        <img src={item.Poster} alt="" style={{height:"300px", width:"300px" , marginLeft:"15px",marginTop:"10px"}} />
                        <h2  style={{textAlign:"center"}}>{item.Title}</h2>
                        <h3  style={{textAlign:"center"}}>{item.Year}</h3>
                        </CardContent>
                    </Card>
                       
                    </Grid>
                )
            }
        </Grid>
    );
} 