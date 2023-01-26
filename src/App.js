import logo from "./logo.svg";
import "./App.css";
import Inner from "./Inner";
import { Component } from "react";
import { render } from "@testing-library/react";

class App extends Component {
  constructor() {
    super()
    this.state = {
         nameMan: "Stepan",
         ageMan: 25,
         displayBlock: "block",
         textButton: "Hide",
         toggleText: true,
         isToggle: true
       }
  }
  

  btnClick = () => {
    this.setState({ nameMan: 'Mykola', ageMan: 30})

  }

  hideShowClick = () => {
    this.setState({isToggle: !this.state.isToggle})
    this.state.isToggle ? this.setState({displayBlock:"none"}) : this.setState({displayBlock:"block"});  
  }
  changeText = () => {
    this.setState({toggleText: !this.state.toggleText})
    this.state.toggleText ? this.setState({textButton:"Show"}) : this.setState({textButton:"Hide"});  
  }

  

  render() {
    return (
      
      <>
        <Inner name={this.state.nameMan} age={this.state.ageMan} hiding={this.state.displayBlock} text={this.state.textButton}/>

        <button onClick={this.btnClick} >Change name and age</button> <br />
        <button onClick={this.hideShowClick} >Hide/Show block</button> <br />
        <button onClick={this.changeText}>{this.state.textButton}</button>

      </> 
    );
  }
}

export default App;





