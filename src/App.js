import React, { Component } from 'react'
import './App.css'
import TArea from './Elements/TextArea/TArea'
const colors = {
  lavender: "#DCD6F7",
  bluePurple: "#A6B1E1",
  green: "#14342B",
  russianGreen: "#60935D"
}
export default class App extends Component {
  render() {
    return (
      <div className={`bg-[${colors.russianGreen}]`} id='parent'>  
        <TArea height='90vh' primaryColor={colors.green}/>
      </div>
    )   
  }
}
