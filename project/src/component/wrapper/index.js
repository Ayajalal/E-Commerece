import './style.css'
function Wrapper(){
 const cards=[{id:1,name:"Pueraria Mirifica And Study Phyto Estrogens",
 salary:"$599.00",image:"./images/img1.png"},{id:2,name:"Pueraria Mirifica And Study Phyto Estrogens",
 salary:"$599.00",image:"./images/img2.png"},
 {id:3,name:"Pueraria Mirifica And Study Phyto Estrogens",
 salary:"$599.00",image:"./images/img3.png"},
 {id:4,name:"Pueraria Mirifica And Study Phyto Estrogens",
 salary:"$599.00",image:"./images/img4.png"},
 {id:5,name:"Pueraria Mirifica And Study Phyto Estrogens",
 salary:"$599.00",image:"./images/img5.png"},
 {id:6,name:"Pueraria Mirifica And Study Phyto Estrogens",
 salary:"$599.00",image:"./images/img6.png"},
 {id:7,name:"Pueraria Mirifica And Study Phyto Estrogens",
 salary:"$599.00",image:"./images/img7.png"},
 {id:8,name:"Pueraria Mirifica And Study Phyto Estrogens",
 salary:"$599.00",image:"./images/img8.png"},

]
    return (
        <div className="wrapper">
        <h1>Featured</h1>
        <div className='wrapper-card'>

  {
    cards.map((item)=>{
        let {name,salary,image}=item;
return <div className="card" style={{border:"none"}} >
  <img src={image}  class="card-img-top" alt="..."></img>
    <div className="card-body"  >

    <p className="card-text">{name}</p>
  <p className="card-text">{salary}</p>
  </div>
  </div>
  
  

    })
  
  }</div>
 

        </div>
    )

}
export default Wrapper;