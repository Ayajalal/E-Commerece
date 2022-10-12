import style from './style.module.css'
function ShowMore({buttonTitle}){
return (<center><button  className={style.showMore} >{buttonTitle}</button></center>)
}
export default ShowMore; 