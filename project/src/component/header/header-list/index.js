import style from "./style.module.css";

import RightList from "./menu-list";
import LeftList from "./left-list";

function HeaderList() {
  return (
    <div className={style.listContainer}>
      <LeftList></LeftList>
      {/* <RightList></RightList> */}
    </div>
  );
}

export default HeaderList;
