import React from "react"
import Videoitem from "./videoitem"

class Videolist extends React.Component{


    render(){
        const video=this.props.videos.map((vid)=>{
            
               return(
                   <Videoitem key={vid.id.videoId} video={vid} onVideoSelect={this.props.onVideoSelect}/>
               )
           })
        return(
        <div className="ui divided relaxed list">
        {video}
        </div>
        )
    }
}

export default Videolist