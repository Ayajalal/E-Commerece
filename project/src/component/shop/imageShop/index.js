import style from './style.module.css'
function ImageShop({image,name}){
return (
<div className="ContainerShop">
<img src={image} className={style.shopImg}></img>
<p className='nameImg'>{name}</p>
</div>) 


}
export default ImageShop;