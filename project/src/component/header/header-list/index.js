import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RightList from './right-list'
import LeftList from './left-list';

function HeaderList(){

    return(
<div className="listContainer">
<LeftList></LeftList>
<RightList></RightList>
</div>)

}

export default HeaderList;