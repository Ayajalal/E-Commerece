import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";

import style from "./style.module.css";

import ProductSlider from "./product-slider";
import { useNavigate } from "react-router-dom";

import ProductDetails from "./product-details";
import PDP from "../../../pages/PDP";
const PopUp = ({ closePopUp, open, item, index }) => {
  const navigate = useNavigate();
  const {
    title,

    thumbnail,

    images,
  } = item;

  // console.log("on popup", { item });

  return (
    <Dialog sx={{ m: 0, p: 2 }} fullScreen={true} open={open}>
      <div className={style.wrapper}>
        <DialogTitle>
          <h5>{title}</h5>
          <CloseIcon
            onClick={closePopUp}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          />
        </DialogTitle>
        <DialogContent>
          <div className={style.main}>
            <ProductSlider images={images} thumbnail={thumbnail} />
            <ProductDetails item={item} />

            <Button
              variant="contained"
              sx={{
                width: "302px",
                backgroundColor: "#33333A",
                mt: 12,
                mx: "auto",
              }}
              onClick={() => navigate("pdp", { item })}
            >
              View Full product Details
            </Button>
          </div>
        </DialogContent>
      </div>
    </Dialog>
  );
};

export default PopUp;
