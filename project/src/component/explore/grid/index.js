import './style.css'
import Title from '../title'
import ContentText from '../text'
import Image from '../image';
import Date from '../date'

function Grid({items,index}) {
    const{date,title,text,img}=items
 
    
    return (
        <>
        <Date date={date}/>
        <Title title={title} index={index}/>
        {text?(
                !img ?(
                    <ContentText text={text}/>
                ):(<>
                 <ContentText text={text} index={index}/>
                <Image img={img} index={index}/>
                </>)
                ):(<Image img={img} index={index}/>
            
        )}

        </>
    );
  
 
}
export default Grid;
