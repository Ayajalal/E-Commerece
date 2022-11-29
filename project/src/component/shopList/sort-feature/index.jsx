import React, { useState, useRef } from "react";
import style from "./style.module.css";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
const SortFeature = ({ handelData }) => {
  const ref = useRef(null);

  const handleClick = () => {
    // 👇️ clear input field value
    ref.current.value = "";
  };
  const handleChange = (event) => {
    let selected = event.target.value;
    handelData(selected);
  };
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <Grid container display="flex" spacing={2}>
          <Grid item xs={12} md={8}>
            <p className={style.name}>Women</p>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={style.sort}>
              <p>Sort by</p>

              <FormControl>
                <Select
                  ref={ref}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  sx={{ minWidth: 200, height: 40 }}
                  onChange={handleChange}
                >
                  <MenuItem value={"price"}>PRICE</MenuItem>
                  {/* <MenuItem value={"rating"}>RATING</MenuItem> */}
                  <MenuItem value={"title"}>TITLE</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SortFeature;
// else if (sortItem === "rating") {
//       data.sort((a, b) => {
//         return a.rating - b.rating;
//       });
//       setSortData(data);
//     }

//  let selected = event.target.value;
//  setSortItem(selected);
//  console.log(sortItem, "change");
//  if (sortItem === "price") {
//    let sorted = data.sort((a, b) => {
//      return a.price - b.price;
//    });
//    setSortData(sorted);
//    handelData(sortData);
//  } else if (sortItem === "title") {
//    let sorted = data.sort((a, b) => {
//      return a.title.localeCompare(b.title);
//    });
//    setSortData(sorted);
//    handelData(sortData);
//  }
