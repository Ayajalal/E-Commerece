import  style from './style.css'
function Title({title,index}){
const titleStyles=index===0?style.p:style.titles;
return <h3  className={titleStyles}>{title}</h3>
}
export default Title;