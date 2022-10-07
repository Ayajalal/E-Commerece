import './style.css'
function LeftList(){
    const list=["SHOP","FABRIC","JOURNAL","ABOUT"]
    return(
        <div className="leftList">
<h4 className='nameHeader'>matter</h4>
{
    list.map((item)=>{
        return <button href="">{item}<i class="fal fa-chevron-down arrow" ></i></button>
    })
}


</div>
    )
}
export default LeftList;