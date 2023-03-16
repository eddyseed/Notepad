import React, { Component } from 'react'
import shortcuts from '../../../../Assets/Shortcuts'

const colorPalette = {
    primary: "D6E5E3", //Light Color
    secondary: "000411", // Dark Color
    tertiary: "A6B1E1",
    raisinBlack: "242124"
}
export default class Format extends Component {
    constructor() {
        super();
        this.state = {
            darkModeEnabled: true,
            staticElements: ['toolBar', 'statusbar'],
            menuDropDowns: ['fileDropDown', 'editDropDown', 'formatDropDown'],
            floatingElements: ['newFileDialog', 'saveFileDialog', 'openFileDialog'],
            fileNameFields: ['nFileNameField', 'sFileNameField']
        }
    }
    setDarkMode = () => {
        this.state.staticElements.forEach(element => {
            document.getElementById(element).style.backgroundColor = "#" + colorPalette.secondary
            document.getElementById(element).style.color = "#" + colorPalette.primary
            document.getElementById(element).style.border = "1px solid rgba(255, 255, 255, 0.176)"
        });
        this.state.menuDropDowns.forEach(element => {
            document.getElementById(element).style.backgroundColor = "#" + colorPalette.secondary
            document.getElementById(element).style.color = "#" + colorPalette.primary
            document.getElementById(element).style.border = "1px solid rgba(255, 255, 255, 0.176)"
        })
        this.state.floatingElements.forEach(element => {
            document.getElementById(element).children[0].setAttribute('style', `
            background: #000;
            color: #${colorPalette.primary};
            border:1px solid rgba(255, 255, 255, 0.176);
            `)
        })
        this.state.fileNameFields.forEach(element => {
            document.getElementById(element).style.backgroundColor = "#" + colorPalette.raisinBlack
        })
        document.getElementById('textfield').style.backgroundColor = "#" + colorPalette.secondary
        document.getElementById('textfield').style.color = "#" + colorPalette.primary
        document.getElementById('textfield').style.border = "1px solid rgba(255, 255, 255, 0.176)"
    }
    setLightMode = () => {
        this.state.staticElements.forEach(element => {
            document.getElementById(element).style.backgroundColor = "#" + colorPalette.tertiary
            document.getElementById(element).style.color = "#" + colorPalette.secondary
            document.getElementById(element).style.border = "1px solid rgba(0, 0, 0, 0.176)"
        });
        this.state.menuDropDowns.forEach(element => {
            document.getElementById(element).style.backgroundColor = "#" + colorPalette.primary
            document.getElementById(element).style.color = "#" + colorPalette.secondary
            document.getElementById(element).style.border = "1px solid rgba(0, 0, 0, 0.176)"
        })
        document.getElementById('textfield').style.backgroundColor = "#" + colorPalette.primary
        document.getElementById('textfield').style.color = "#" + colorPalette.secondary
    }
    componentDidMount() {
        this.state.darkModeEnabled ? this.setDarkMode(this.state.staticElements) : this.setLightMode(this.state.staticElements)
    }
    toggleMode = () => {
        if (this.state.darkModeEnabled) {
            this.setLightMode();
            this.setState({
                darkModeEnabled: false
            })
        } else {
            this.setDarkMode();
            this.setState({
                darkModeEnabled: true
            })
        }
    }
    render() {
        return (
            <div className={`top-${this.props.y} left-${this.props.x} space-y-4 ${this.props.hidden ? 'hidden' : ''}`} id={`${this.props.eID}`}>
                <ul className='sector space-y-1'>
                    <ul className='space-x-4' onClick={this.toggleWordWrap}><li><i className="fa-solid fa-cut"></i><span>Word Wrap</span></li><li>{shortcuts.wordwrap}</li></ul>
                </ul>
                <ul> <li className='flex items-center justify-center'><hr className='w-[80%]' /></li></ul>
                <ul className='sector space-y-1' onClick={this.toggleMode}>
                    <ul className='space-x-4'><li><i className="fa-regular fa-eye"></i><span>Dark Mode</span></li><li>{shortcuts.toggleMode}</li></ul>
                </ul>
            </div>
        )
    }
}