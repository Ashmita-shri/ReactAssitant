import React, {useState, useEffect} from 'react';

function SummaryView({summary}){
    const [imageState, setImageState] = useState(false);
    return (
       <div className = "summaryGroup">
           <div className="image">
               {/* {summary.thumbnail.source?<img src = {summary.thumbnail.source} />:""} */}
           </div>

       </div>
   )
}


export default SummaryView;