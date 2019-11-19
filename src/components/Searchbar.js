import React from "react"

class Searchbar extends React.Component{
   state={term:''}
    onSubmit=(e)=>{
        e.preventDefault()
        this.props.doSubmit(this.state.term)
    }
    render(){
        return(<div className="search-bar ui segment">
            <form className="ui form" onSubmit={this.onSubmit}>
            <div className="field">
            <label>VideoSearch</label>
            <input type='text' value={this.state.term} onChange={(e)=>{this.setState({term:e.target.value})}}/>
            </div>
            </form>
        </div>)
    }
}

export default Searchbar