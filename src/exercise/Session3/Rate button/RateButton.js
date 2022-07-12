import React, { Component } from 'react'

const MAX_STAR = 5

export default class RateButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            star: 0
        }
    }
    setStar = (data) => {
        this.setState({
            star: data
        })
    }

    ratingStar = (star) => {
        
        let content = []

        for (let i = 0; i < star; i++) {
            content.push(<i onClick={this.setStar.bind(this, i+1)} class="fa-solid fa-star"></i>)
        }

        for (let i = star; i < MAX_STAR; i++) {
            content.push(<i onClick={this.setStar.bind(this, i+1)} class="fa-regular fa-star"></i>)
        }
        return content;
    }
    
  render() {
    return (
        <>
      <div>{this.ratingStar(this.state.star)}</div>
      
        </>
    )
  }
}
