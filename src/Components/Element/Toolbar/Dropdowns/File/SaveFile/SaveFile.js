import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class SaveFile extends Component {
    static propTypes = {
        backgroundColor: PropTypes.string,
        foregroundColor: PropTypes.string,
        hidden: PropTypes.bool,
        eID: PropTypes.string,
        title: PropTypes.string
    }
    static defaultProps = {
        backgroundColor: "070C20",
        foregroundColor: "fbf5f3",
        hidden: false,
        title: "A basic window"
    }
    getFileName = () => {
        let FILENAME = document.getElementById("sFileNameField");
        if (FILENAME.value === '') { console.warn('No file name found'); }
        else if (FILENAME.value.length > 4) {
            document.getElementById('fileName').innerHTML = FILENAME.value
            localStorage.setItem(FILENAME.value, document.getElementById('textfield').value)
            document.title = document.getElementById('fileName').innerHTML
        } else {
            alert("beta kuch to kale kaam ho rhe hai SaveFile.js me")
        }
    }
    closeSaveFileDialog=()=>{
        document.getElementById('saveFileDialog').classList.remove('flex')
        document.getElementById('saveFileDialog').classList.add('hidden')
        document.getElementById('mainElements').style.opacity = 1
    }
    render() {
        return (
            <div className={`${this.props.hidden ? 'hidden' : ''} absolute top-0 w-screen h-screen items-center justify-center select-none animate__animated animate__slideInDown`} id='saveFileDialog'>
                <main className={`grid grid-flow-row h-[40vh] w-[40vw] rounded-xl border-x-style bg-[#${this.props.backgroundColor}] text-[#${this.props.foregroundColor}]`} style={{
                    gridTemplateRows: "1fr 2fr 1fr"
                }}>
                    <section className='flex font-semibold text-2xl items-end px-12'>
                        <header>{this.props.title}</header>
                    </section>
                    <section className='flex justify-center'>
                        <input type="text" id="sFileNameField" className='bg-[#171515] text-[#fbf5f3] h-2/5 w-10/12 rounded-md outline-none px-3 self-center ' placeholder='e.g. index.html' autoComplete='off' />
                    </section>
                    <section className='space-x-8 flex justify-end px-12 font-[500]'>
                        <button className="btn px-8 py-2 rounded-3xl h-3/5" onClick={this.closeSaveFileDialog}>Cancel</button>
                        <button className="btn px-8 py-2 rounded-3xl h-3/5" onClick={this.getFileName}>Create</button>
                    </section>
                </main>
            </div>
        )
    }
}
