import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import style from "./style.module.css";
import Grid from "@mui/material/Grid";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Product from "../../shared/card-product";
import SortFeature from "../sort-feature";
import AxiosInstance from "../../customHooks/axiosCustom";

const CategoryFeature = () => {
  const [sortItem, setSortItem] = useState("");
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);
  const [filter, setFilter] = useState(product);
  const categoriesSet = new Set();
  const getAllData = async () => {
    const res = await AxiosInstance.get("products");
    const result = res.data.products;
    if (result.length > 0) {
      result.forEach((res) => categoriesSet.add(res.category)); //{}
      setCategory([...categoriesSet]);
    }
    setProduct(result);
    setFilter(result);
    console.log(res.data, "all Data");
  };

  useEffect(() => {
    getAllData();
  }, []);

  const getFilterData = (catItem) => {
    const filterByCat = product.filter((currItem) => {
      return currItem.category === catItem;
    });
    setFilter(filterByCat);
    console.log(filterByCat + "filterByCat");
  };
  const handelData = (handelD) => {
    // console.log(handelD, "soretesd");
    setSortItem(handelD);
    // console.log(sortItem + "sortItemS7888");
    if (handelD === "price") {
      filter.sort((a, b) => {
        return a.price - b.price;
      });
      // setSortItem("");
    } else if (handelD === "title") {
      filter.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
      // setSortItem("");
    }
    setFilter(filter);
    // setSortItem("");
    // console.log(filterData + "sorted7788");
  };

  return (
    <div className={style.container}>
      <SortFeature data={filter} handelData={handelData} />
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
                      {console.log(category, "dd")}
                      {category.map((item, index) => {
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
            {filter.map((filterItem, index) => (
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
