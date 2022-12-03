import Icon from "../../../shared/icon";
const listLeft = ["SHOP", "FABRIC", "JOURNAL", "ABOUT"];
function MenuList({ dir }) {
  return (
    <li>
      {listLeft.map((item) => {
        return (
          <a href="#" className="me-2">
            {item} <Icon nameIcon={"fal fa-chevron-down arrow fa-sm"} />
          </a>
        );
      })}
    </li>
  );
}
export default MenuList;
