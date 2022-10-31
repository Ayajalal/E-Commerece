import React, { useState } from "react";
import { Stack, Rating } from "@mui/material";

const StarRating = ({ value }) => {
  console.log(value);
  // const [data, setData] = useState(0);
  // const handelChange = () => {
  //   setData({ value });
  // };
  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        // onChange={handelChange}
        precision={0.1}
        size="small"
        readOnly
      ></Rating>
    </Stack>
  );
};

export default StarRating;

///use not good way

// import React from "react";
// import { Stack, Rating } from '@mui/material'

// const StarRating = ({
//   count,
//   value,
//   inactiveColor,
//   size,
//   activeColor,
//   onChange,
// }) => {
//   console.log(count, value);
//   const stars = Array.from({ length: count }, () => "🟊");
//   //internal handel change function
//   //   const handleChange = (value) => {
//   //     onChange(value + 1);
//   //   };

//   return (
//     <>
//       {stars.map((s, index) => {
//         let style = inactiveColor;
//         if (index < value) {
//           style = activeColor;
//         }
//         return (
//           <span
//             className={"star"}
//             key={index}
//             style={{ color: style, width: size, height: size, fontSize: size }}
//             // onClick={() => handleChange(index)}
//           >
//             {s}
//           </span>
//         );
//       })}
//     </>
//   );
// };

// export default StarRating;
