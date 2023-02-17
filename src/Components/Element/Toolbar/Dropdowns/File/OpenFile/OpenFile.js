import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class OpenFile extends Component {
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
    openFileProcess = () => {
        let fileName = document.getElementById('oFileNameField')
        try {
            if (Boolean(localStorage[fileName.value])) {
                document.getElementById('textfield').value = localStorage.getItem(String(fileName.value))
                document.getElementById('fileDropDown').classList.add('hidden')
                document.getElementById('fileName').innerHTML = fileName.value
                document.title = fileName.value
            } else {
                alert("File Not Found!")

            }
        } catch (err) {
            console.log("Error", err)
        }
    }
    closeOpenFileDialog=()=>{
        document.getElementById('openFileDialog').classList.remove('flex')
        document.getElementById('openFileDialog').classList.add('hidden')
        document.getElementById('mainElements').style.opacity = 1
    }
    render() {
        return (
            <div className={`${this.props.hidden ? 'hidden' : ''} absolute top-0 w-screen h-screen items-center justify-center select-none animate__animated animate__slideInDown`} id='openFileDialog'>
                <main className={`grid grid-flow-row h-[40vh] w-[40vw] rounded-xl border-x-style bg-[#${this.props.backgroundColor}] text-[#${this.props.foregroundColor}]`} style={{
                    gridTemplateRows: "1fr 2fr 1fr"
                }}>
                    <section className='flex font-semibold text-2xl items-end px-12'>
                        <header>{this.props.title}</header>
                    </section>
                    <section className='flex justify-center'>
                        <input type="text" id="oFileNameField" className='bg-[#171515] text-[#fbf5f3] h-2/5 w-10/12 rounded-md outline-none px-3 self-center ' placeholder='e.g. index.html' autoComplete='off' />
                    </section>
                    <section className='space-x-8 flex justify-end px-12 font-[500]'>
                        <button className="btn px-8 py-2 rounded-3xl h-3/5" onClick={this.closeOpenFileDialog}>Cancel</button>
                        <button className="btn px-8 py-2 rounded-3xl h-3/5" onClick={this.openFileProcess}>Create</button>
                    </section>
                </main>
            </div>
        )
    }
}
