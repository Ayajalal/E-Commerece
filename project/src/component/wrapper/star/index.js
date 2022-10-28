import React from "react";

const StarRating = ({
  count,
  value,
  inactiveColor,
  size,
  activeColor,
  onChange,
}) => {
  console.log(count, value);
  const stars = Array.from({ length: count }, () => "🟊");
  //internal handel change function
  //   const handleChange = (value) => {
  //     onChange(value + 1);
  //   };

  return (
    <>
      {stars.map((s, index) => {
        let style = inactiveColor;
        if (index < value) {
          style = activeColor;
        }
        return (
          <span
            className={"star"}
            key={index}
            style={{ color: style, width: size, height: size, fontSize: size }}
            // onClick={() => handleChange(index)}
          >
            {s}
          </span>
        );
      })}
    </>
  );
};

export default StarRating;
