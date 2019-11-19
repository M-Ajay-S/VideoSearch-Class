import react from 'react'
import Searchbar from './Searchbar'
import youtube from '../api/youtube'
import Videolist from './videolist'
import VideoDetail from './videodetail'

class App extends react.Component{
   state={videos:[],videoSelected:null}
    doSubmit=async (term)=>{
        console.log(term)
       const response= await youtube('/search',{params:{q:term}})
      // console.log(response.data.items)
      this.setState({videos:response.data.items, videoSelected:response.data.items[0]})
    }
    onVideoSelect=(video)=>{
        console.log('from App',video)
        this.setState({videoSelected:video})
    }
    componentDidMount(){
        this.doSubmit('boxing')
    }
    render(){
        return (<div>
            <Searchbar doSubmit={this.doSubmit}/>
            <div className='ui grid'>
                <div className='ui row'>
                    <div className='eleven wide column'>
                        <VideoDetail videoSelected={this.state.videoSelected}/>
                    </div>
                    <div className='five wide column'>
                        <Videolist videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                    </div>
                </div>
            </div>
        </div>)
    }
}


export default App