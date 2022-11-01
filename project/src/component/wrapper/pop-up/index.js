import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import style from "./style.module.css";

import ProductSlider from "./product-slider";

import ProductDetails from "./product-details";
const PopUp = ({ closePopUp, open, item, index }) => {
  const {
    title,

    thumbnail,

    images,
  } = item;
  console.log("on popup", { item });

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
          </div>
        </DialogContent>
      </div>
    </Dialog>
  );
};

export default PopUp;
