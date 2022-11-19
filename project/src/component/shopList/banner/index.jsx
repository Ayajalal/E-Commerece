import React from 'react'
import style from './style.module.css'
import Grid from '@mui/material/Grid';
const Banner = () => {
  return (
       <div className={style.container}>
        <div className={style.wrapper}>
        <h1 className={style.header}>Apparels</h1>
        <p className={style.description}>White Gold began gaining popularity in the early 1900’s as an alternative to platinum. </p>
        </div>

       

    </div>
//  <Grid container>
//     <Grid item xs={12}></Grid>
//   <div class={style.image}>
//         <h1>Apparels</h1>
//         <p>White Gold began gaining popularity in the early 1900’s as an alternative to platinum. </p>
//              <img src={"./images/img5.png"} alt="shopList pic "></img>
//       </div>
// </Grid >
  )
}

export default Banner