import React, { Component } from 'react'

export default class LikeButton extends Component {
    constructor(props){
        super(props);

        this.state = {
           Like: false
        }
    }
    isLike = () => {
        this.setState ({
            Like: !this.state.Like
        })
    }


    render() {
    return (
      <>
      <div onClick={this.isLike}>{this.state.Like ? <i class="fa-regular fa-thumbs-up"></i> : <i className="fa-solid fa-thumbs-up"></i>}</div>
      </>
    )
  }
}
