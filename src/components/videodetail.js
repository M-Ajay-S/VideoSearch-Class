import React from "react";

class VideoDetail extends React.Component{
    render(){
        if(!this.props.videoSelected){
            return(
                <div>Loading...</div>
            )
        }
        const {title,description}=this.props.videoSelected.snippet
        return(
            <div>
                <div className="ui embed">
                <iframe title="video player" src={`https://www.youtube.com/embed/${this.props.videoSelected.id.videoId}`} ></iframe>
                </div>
                <div className="ui segment">
                <h4 className="ui header">
                {title}
                </h4>
                <p>
                 {description}
                </p>
                </div>
            </div>
        )
    }
}

export default VideoDetail