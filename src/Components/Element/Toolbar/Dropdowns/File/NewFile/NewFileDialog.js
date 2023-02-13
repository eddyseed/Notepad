import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class NewFileDialog extends Component {
    static propTypes = {
        backgroundColor: PropTypes.string,
        foregroundColor: PropTypes.string,
        hidden: PropTypes.bool,
        eID: PropTypes.string
    }
    static defaultProps = {
        backgroundColor: "070C20",
        foregroundColor: "fbf5f3",
        hidden: false
    }
    createNewFile = async () => {
        let fileNameHolder = document.getElementById('fileName')
        let fileNameField = document.getElementById('fileNameField')
        let newFileDialog = document.getElementById('newFileDialog')
        try {
            if (fileNameField.value === '') { alert("No file name found") } else {
                fileNameHolder.innerHTML = fileNameField.value
                newFileDialog.classList.add('hidden')
                document.getElementById('mainElements').style.opacity = 1
                localStorage.setItem(String(fileNameField.value), '')
            }
        } catch (err) {
            alert("Problem in creating file!\nKindly try again!")
            console.error("Error:", err)
            this.closeNewFileDialog();
        } finally {
            fileNameField.value = ''
        }
    }
    closeNewFileDialog = () => {
        document.getElementById('newFileDialog').classList.remove('flex')
        document.getElementById('newFileDialog').classList.add('hidden')
        document.getElementById('mainElements').style.opacity = 1
    }
    render() {
        return (
            <div className={`${this.props.hidden?'hidden':''} absolute top-0 w-screen h-screen rounded-xl items-center justify-center select-none`} id='newFileDialog'>
                <main className={`grid grid-flow-row h-[40vh] w-[40vw] rounded-xl border-x-style bg-[#${this.props.backgroundColor}] text-[#${this.props.foregroundColor}]`} style={{
                    gridTemplateRows: "1fr 2fr 1fr"
                }}>
                    <section className='flex font-semibold text-2xl items-end px-8'>
                        <header>Create New File Options</header>
                    </section>
                    <section className='grid grid-flow-col'>
                        <label htmlFor="fileNameField">
                            <span className='flex text-semibold h-full justify-start pl-8 items-center'>Enter File Name: </span>
                        </label>
                        <input type="text" id="fileNameField" className='bg-[#080302] h-2/5 w-10/12 rounded-md outline-none px-3 self-center ' placeholder='e.g: index.html' />
                    </section>
                    <section className='space-x-8 flex justify-end px-12 font-[500]'>
                        <button className="btn px-8 py-2 rounded-3xl h-3/5" onClick={this.closeNewFileDialog}>Cancel</button>
                        <button className="btn px-8 py-2 rounded-3xl h-3/5" onClick={this.createNewFile}>Create</button>
                    </section>
                </main>
            </div>
        )
    }
}
