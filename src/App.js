import React from "react";
import { Card, CardContent, Grid, TextField } from "@mui/material";
import { Movie } from "./component/Movie";

function App() {
  return (
    <Card sx={{ bgcolor: "lightblue" }}>
      <CardContent>
        <Grid container>
          <Grid item xs={12} sx={{ marginBottom: "25px", marginTop:"20px" }}>
            <TextField label="Search Here...." fullWidth style={{border:"2px solid blue"}} />
          </Grid>
        </Grid>

        <Movie />
      </CardContent>
    </Card>
  );
}

export default App;
