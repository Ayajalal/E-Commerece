import style from './style.module.css'
import Title from '../shared/title'
function AsSoonAs(){
return(<div className={style.soonWrapper}>
   <Title headTitle={"As Seen On"}></Title>  
   <center><img src="./images/soon.png" alt="soon"></img></center>
</div>)
}
export default AsSoonAs;