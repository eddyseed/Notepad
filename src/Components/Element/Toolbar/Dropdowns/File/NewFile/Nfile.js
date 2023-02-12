import React, { Component } from 'react'

export default class Nfile extends Component {
    creategetWin = async () => {
        let fileTitle = document.getElementById('fileName')
        let fileNameInput = document.getElementById('fileNameInput')
        let getWinDialog = document.getElementById('getWin')
        if (fileNameInput.value === '') { alert("No file name found") } else {
            fileTitle.innerHTML = fileNameInput.value
            getWinDialog.classList.add('hidden')
            document.getElementById('mainElements').style.opacity = 1
            console.log(String(fileNameInput.value))
            localStorage.setItem(String(fileNameInput.value),'')
        }
    }
    closegetWinDialog = () => {
        document.getElementById('getWin').classList.remove('flex')
        document.getElementById('getWin').classList.add('hidden')
        document.getElementById('mainElements').style.opacity = 1
    }
    render() {
        return (
            <div className={`hidden absolute text-[#bfffbc] top-0 w-screen h-screen rounded-xl items-center justify-center select-none`} id='getWin'>
                <main className={`grid grid-flow-row h-[40vh] w-[40vw] rounded-xl border-x-style bg-[#${this.props.backgroundColor}]`} style={{
                    gridTemplateRows: "1fr 2fr 1fr"
                }}>
                    <section className='flex font-semibold text-2xl items-end px-8'>
                        <header>Create New File Options</header>
                    </section>
                    <section className='grid grid-flow-col'>
                        <label htmlFor="fileNameInput">
                            <span className='flex text-semibold h-full justify-start pl-8 items-center'>Enter File Name: </span>
                        </label>
                        <input type="text" id="fileNameInput" className='bg-[#080302] h-2/5 w-10/12 rounded-md outline-none px-3 self-center ' placeholder='e.g: index.html' />
                    </section>
                    <section className='space-x-8 flex justify-end px-12 font-[500]'>
                        <button className="btn px-8 py-2 rounded-3xl h-3/5" onClick={this.closegetWinDialog}>Cancel</button>
                        <button className="btn px-8 py-2 rounded-3xl h-3/5" onClick={this.creategetWin}>Create</button>
                    </section>
                </main>
            </div>
        )
    }
}
