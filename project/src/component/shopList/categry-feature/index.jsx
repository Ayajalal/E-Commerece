import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";
import style from "./style.module.css";
import Grid from "@mui/material/Grid";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Product from "../../shared/card-product";
import SortFeature from "../sort-feature";

const CategoryFeature = ({ data }) => {
  // const [category, setCategory] = useState([]);
  // const [data, setData] = useState([]);
  const [filterData, setFilter] = useState(data);
  const [sortItem, setSortItem] = useState("");
  const categoriesSet = new Set();
  data && data.map((res) => categoriesSet.add(res.category));

  let categories = [...categoriesSet];
  console.log(categories);
  // const getAllCategary = () => {
  //   // let res = await axios.get("https://dummyjson.com/products/categories");

  //   const categoryMap = data.map((res) => {
  //     return res.category;
  //   });
  //   console.log(categoryMap + "ddd");
  //   let categorySet = new Set([categoryMap]);
  //   setCategory(categorySet);

  //   // console.log(res);
  // };

  const getFilterData = (catItem) => {
    console.log(catItem, "hj");
    const filterByCat = data.filter((currItem) => {
      return currItem.category === catItem;
    });
    setFilter(filterByCat);
    // console.log({ filterByCat });
  };
  const handelData = (handelD) => {
    console.log(handelD, "soretesd");
    setSortItem(handelD);
    console.log(sortItem + "sortItemS7888");
    if (sortItem === "price") {
      filterData.sort((a, b) => {
        return a.price - b.price;
      });
    } else if (sortItem === "title") {
      filterData.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
    }
    setFilter(filterData);
    console.log(filterData + "sorted7788");
  };

  useEffect(() => {
    // getAllCategary();

    setFilter(data);
  }, [data]);

  return (
    <div className={style.container}>
      <SortFeature data={filterData} handelData={handelData} />
      <div className={style.wrapper}>
        <div className={style.category}>
          <Grid container>
            <Grid item xs={10}>
              <p className={style.filter}>Filters</p>
            </Grid>
            <Grid item xs={2}>
              <p className={style.reset}>Reset</p>
            </Grid>
            <Grid item xs={12}>
              {" "}
              <hr></hr>
            </Grid>

            <Grid item xs={12}>
              <Accordion sx={{ border: 0 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography sx={{ color: "#333333" }}>Apparels</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <ul>
                      {categories.map((item, index) => {
                        return (
                          <Grid item xs={12}>
                            <li key={index}>
                              <ArrowForwardIosIcon
                                sx={{ "font-size": "0.8rem" }}
                              />
                              <a onClick={() => getFilterData(item)}>{item}</a>
                            </li>
                          </Grid>
                        );
                      })}
                    </ul>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </div>
        <div class={style.cardproducts}>
          <Grid
            container
            display="flex"
            justify="center"
            spacing={{ xs: 2, md: 3 }}
          >
            {filterData &&
              filterData.map((filterItem, index) => (
                <Grid item xs={12} sm={6} md={4} key={filterItem.id}>
                  <Product item={filterItem} />{" "}
                </Grid>
              ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default CategoryFeature;
