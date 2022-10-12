
import style from './style.module.css'
import Title from '../shared/title'
import CardVedio from './card'
import ShowMore from '../shared/show-more';
function RecommendedVideos(){
  return <div className={style.all}>
    <Title headTitle={"Recommended Videos"}></Title>
    <CardVedio></CardVedio>
    <ShowMore buttonTitle={"Show More"}/>
  </div>
    
}
export default RecommendedVideos;