import Title from '../shared/title'
import style from './style.module.css'
import ImageShop from './imageShop'

function Shop(){
   let shops=[{name:"Pants",image:"./images/shop1.png"},
  
   {name:"Jumpsuits",image:"./images/shop2.png"},
   {name:"Tops",image:"./images/shop3.png"},
   {name:"Accessories",image:"./images/shop4.png"},
]
return(<div className={style.all1}>
<Title headTitle={"Shop"}></Title>
<div className={style.shopWrapper}>
{shops.map((item)=>{
    let {name,image}=item;
    return(
        
        <div className={style.shop}>
<ImageShop image={image} name={name}
></ImageShop>

  
</div>

    )
})}
</div>

</div>);

}
export default Shop;