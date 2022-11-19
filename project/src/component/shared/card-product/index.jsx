import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PopUp from "../../wrapper/pop-up";
import React, { useState } from "react";
const ButtonStyled = styled(Button)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: fit-content;
  height: 40px;
  display: none;
  opacity: 1;
`;

const ContainerStyled = styled("div")`

  position: relative;
  &:hover {
    .test-button {
      display: block;
    }
  }  
}`;
const CardProduct = ({ item }) => {
  const [open, setOpen] = useState(false);
  const [product, setProducts] = useState([]);
  const handelProduct = (item) => {
    setProducts(item);
  };
  const closePopUp = () => {
    //close
    setOpen(false);
  };
  let { title, price, thumbnail, flagNew, id } = item;
  return (
    <ContainerStyled>
      <Card sx={{ Width: "100", margin: "10px" }}>
        <CardMedia
          component="img"
          height="200"
          image={thumbnail}
          alt="work portfolio"
        />
        <CardContent>
          <Typography gutterBottom>{title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {price}
          </Typography>
        </CardContent>
      </Card>
      <ButtonStyled
        onClick={() => {
          setOpen(true);
          handelProduct(item);
        }}
        sx={{ backgroundColor: "#33333A" }}
        variant="contained"
        className="test-button"
      >
        QUICK VIEW
      </ButtonStyled>
      <PopUp open={open} closePopUp={closePopUp} item={product} />
    </ContainerStyled>
  );
};

export default CardProduct;
