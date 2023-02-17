import React, { Component } from 'react'
import PropTypes from 'prop-types'
import shortcuts from '../../../../Assets/Shortcuts'
import { colorPalette, setBackground, setForeground } from '../../../../Assets/Colors'
export default class Format extends Component {
    componentDidMount() {
        window.addEventListener('keydown', (e) => {
            if (e.altKey && e.shiftKey && e.key.toLowerCase() === 'w') {
                e.preventDefault()
                this.toggleWordWrap()
            }else if(e.altKey && e.key.toLowerCase()==='p'){
                e.preventDefault()
                this.toggleDarkMode()
            }
        })
        localStorage.setItem('darkModeEnabled', '0')
        const EArray = [
            'statusbar',
            'menuBar',
            'quickToolBar',
            'newFileInnerWin'
        ]

        const another_array = [
            'fileDropDown',
            'editDropDown',
            'formatDropDown'
        ]
        if (localStorage.getItem('darkModeEnabled') === '0') {
            setBackground(EArray, '000', true)
            setBackground('textfield', '171515', false)
            setBackground(another_array, '000', true)
            setForeground(another_array, 'BFFFBC', true)
            setForeground('textfield', 'BFFFBC', false)
            another_array.forEach(element => {
                document.getElementById(element).style.border = "1px solid rgba(255, 255, 255, 0.15)";
            });
        } else {
            setBackground(EArray, colorPalette['Blue-Black'], true)
            setBackground('textfield', 'fff', false)
            setForeground('textfield', colorPalette['Blue-Black'], false)
            setBackground(another_array, 'fff', true)
            setForeground(another_array, colorPalette['Blue-Black'], true)
            another_array.forEach(element => {
                document.getElementById(element).style.border = "1px solid rgba(0, 0, 0, 0.15)";
            });
        }
    }
    static propTypes = {
        hidden: PropTypes.bool,
        x: PropTypes.number,
        y: PropTypes.number
    }
    static defaultProps = {
        hidden: false
    }
    toggleWordWrap = () => {
        if (document.getElementById('textfield').getAttribute('wrap') === 'off')
            document.getElementById('textfield').setAttribute('wrap', 'on')
        else {
            document.getElementById('textfield').setAttribute('wrap', 'off')
        }
    }
    toggleDarkMode = () => {
        const EArray = [
            'statusbar',
            'menuBar',
            'quickToolBar',
            'newFileInnerWin'
        ]
        const another_array = [
            'fileDropDown',
            'editDropDown',
            'formatDropDown'
        ]
        if (localStorage.getItem('darkModeEnabled') === '1') {
            console.log("Dark")
            setBackground(EArray, '000', true)
            setBackground('textfield', '171515', false)
            setBackground(another_array, '000', true)
            setForeground(another_array, 'BFFFBC', true)
            setForeground('textfield', 'BFFFBC', false)
            another_array.forEach(element => {
                document.getElementById(element).style.border = "1px solid rgba(255, 255, 255, 0.15)";
            });
            localStorage.setItem('darkModeEnabled', '0')
        } else if (localStorage.getItem('darkModeEnabled') === '0') {
            setBackground(EArray, colorPalette['Blue-Black'], true)
            setBackground('textfield', 'fff', false)
            setForeground('textfield', colorPalette['Blue-Black'], false)
            setBackground(another_array, 'fff', true)
            setForeground(another_array, colorPalette['Blue-Black'], true)
            another_array.forEach(element => {
                document.getElementById(element).style.border = "1px solid rgba(0, 0, 0, 0.15)";
            });
            localStorage.setItem('darkModeEnabled', '1')
        }
    }
    render() {
        return (
            <div className={`top-${this.props.y} left-${this.props.x} space-y-4 ${this.props.hidden ? 'hidden' : ''}`} id={`${this.props.eID}`}>
                <ul className='sector space-y-1'>
                    <ul className='space-x-4' onClick={this.toggleWordWrap}><li><i className="fa-solid fa-cut"></i><span>Word Wrap</span></li><li>{shortcuts.wordwrap}</li></ul>
                </ul>
                <ul> <li className='flex items-center justify-center'><hr className='w-[80%]' /></li></ul>
                <ul className='sector space-y-1' onClick={this.toggleDarkMode}>
                    <ul className='space-x-4'><li><i className="fa-regular fa-eye"></i><span>Dark Mode</span></li><li>{shortcuts.toggleMode}</li></ul>
                </ul>
            </div>
        )
    }
}
