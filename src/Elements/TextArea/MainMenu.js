import React, { Component } from 'react'

export default class MainMenu extends Component {
    openDialog = () => {
        let reader = new FileReader()
        reader.onload = function () {
            alert("BURJ KHALIFA")
        }
    }
    render() {
        return (
            <div className='absolute top-0 left-[8rem] h-screen hidden items-center w-1/5' id='mainMenu'>
                <section className={`w-full rounded-tl-xl rounded-bl-xl h-[90vh] bg-[${this.props.background}]`}>
                    <div className='grid h-full' style={{
                        gridTemplateRows: "1fr 8fr"
                    }}>
                        <section className="flex items-center px-6 space-x-6">
                            <button onClick={this.props.trigger}><span><i className="fa-solid fa-bars-staggered text-white text-2xl"></i></span></button>
                            <span className='font-semibold text-xl text-white'>File Options</span>
                        </section>
                        <div className='grid h-full' style={{
                            gridTemplateRows: "repeat(10,1fr)"
                        }}>
                            <section className="menu-items">
                                <div><i className="fa-solid fa-plus"></i></div>
                                <button><span>Create New</span></button>
                            </section>
                            <section className="menu-items">
                                <div><i className="fa-regular fa-file"></i></div>
                                <label className={`label`} htmlFor='openFile'>
                                <button><span>Open File</span></button>
                                
                                </label>
                            </section>
                            <section className="menu-items">
                                <div><i className="fa-solid fa-star"></i></div>
                                <button><span>Starred Files</span></button>
                            </section>
                            <section className="menu-items">
                                <div><i className="fa-solid fa-download"></i></div>
                                <button><span>Download</span></button>
                            </section>
                            <section className="menu-items">
                                <div><i className="fa-solid fa-print"></i></div>
                                <button><span>Print Copy</span></button>
                            </section>
                            <section className="menu-items">
                                <div><i className="fa-solid fa-close"></i></div>
                                <button onClick={this.props.trigger}><span>Close Menu</span></button>
                            </section>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
