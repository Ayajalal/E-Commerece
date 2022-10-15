import Title from "../title";
import ContentText from "../text";
import Image from "../image";
import Date from "../date";
import style from "./style.module.css";
function Grid({ items, index }) {
  const { date, title, text, img } = items;

  return (
    <div className={style.explore}>
      <Date date={date} />
      <Title title={title} index={index} />
      {text ? (
        !img ? (
          <ContentText text={text} />
        ) : (
          <>
            <ContentText text={text} index={index} />
            <Image img={img} index={index} />
          </>
        )
      ) : (
        <Image img={img} index={index} />
      )}
    </div>
  );
}
export default Grid;
