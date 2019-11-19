import "./videoitem.css"
import React from "react";

class Videoitem extends React.Component{
    render(){
        const {snippet}=this.props.video
        return(
            <div className="video-item item" onClick={()=>{this.props.onVideoSelect(this.props.video)}}>
            <img className="ui image" src={snippet.thumbnails.default.url} alt={snippet.description}/>
            <div className="content">
            <div className="header">
                {snippet.title} 
            </div>
            </div>
            </div>
        )
    }
}

export default Videoitem