import {Component} from "react"
import './App.css'

const coinList =[
  {
      uniqueId:0,
      imageUrl:"https://assets.ccbp.in/frontend/react-js/heads-img.png"
  },
  {
      uniqueId:1,
      imageUrl:"https://assets.ccbp.in/frontend/react-js/tails-img.png"
  }
]

class App extends Component{
  state={image:coinList[0].imageUrl,heads:0,tails:0,total:0}
  btnClick =()=>{
    const tossResult = Math.floor(Math.random() * 2)
    if(tossResult===0){
      this.setState((prev=>({heads:prev.heads+=1,total:prev.total+=1})))
      // this.setState((pre=>({total:pre.total=+1})))
    }
    else{
      this.setState((prev=>({tails:prev.tails+=1,total:prev.total+=1})))
    }
    this.setState({image:coinList[tossResult].imageUrl})

  }
  render(){
    const {image,heads,tails,total}=this.state
    return(
      <div className="main-container">
        <div className="sub-container">
            <h1 className="header">Coin Toss Game</h1>
            <p>Heads (or) Tails</p>
            <img className="image-set" src={image} alt="tossImage"/>
            <button className="button-coin" onClick={this.btnClick}>Toss Coin</button>
            <div className="btn-container">
              <p>Total: {total}</p>
              <p>Heads: {heads}</p>
              <p>Tails: {tails}</p>
            </div>
        </div>
      </div>
    )
  }
}

export default App