import React, { useState } from 'react'
import Modal from 'react-modal'
import { GrClose } from "react-icons/gr"
function SideBar() {
    const [modalIsOpen, setIsOpen] = useState(false)
    const toggleModal = () => {
        setIsOpen(!modalIsOpen)
    }

    return (
        <>
            <aside className='sideBar'>
                <div className='logo'>
                    <a href='#'>Brand<b>Color</b></a>
                </div>
                <div className='description'>
                    The biggest collection of official brand color codes around. Curated by @brandcolors and friends.
                </div>
                <nav className='menu'>
                    <ul>
                        <li>
                            <a onClick={toggleModal}>
                                About BrandColors
                            </a>
                        </li>
                    </ul>

                </nav>
            </aside>
            <Modal isOpen={modalIsOpen}
                onRequestClose={toggleModal}
                className="Modal"
                overlayClassName="Overlay">
                <button onClick={toggleModal}><GrClose /></button>
                <h2>About BrandColors</h2>
                <p>BrandColors was created by DesignBombs. The goal was to create a helpful reference for the brand color codes that are needed most often.</p>
                <p>It's been featured by Smashing Magazine, CSS-Tricks, Web Design Depot, Tuts+, and over 2 million pageviews. There are now over 600 brands with 1600 colors and the collection is always growing.</p>
            </Modal>
        </>
    )
}

export default SideBar