import React, { useContext, useEffect, useState } from 'react'
import MainContex from '../MainContex'
import { FiLink2 } from 'react-icons/fi'
import { HiDownload } from 'react-icons/hi'
import { GrClose } from 'react-icons/gr'


function Download() {
    const { brand,selectedBrands } = useContext(MainContex)

    const getLink = () => {
        prompt("helo", `http://localhost:3000/c/${selectedBrands.join(",")}`)
    }

    const [download, setDownload] = useState()

    useEffect(() => {
        if (selectedBrands.length > 0) {
            let output = ""
            selectedBrands.map(slug => {
                let brande = brand.find(item => item.slug === slug)
                console.log(brande)
                brande.colors.map((color, key) => {
                    output += `--${slug}-${key}:#${color}\n`
                })
            })
            const blob = new Blob([output])
            const url = URL.createObjectURL(blob)
            return ()=>{
                URL.revokeObjectURL(url)
                setDownload("")
            }
        }
    }, [selectedBrands])
    return (
        <div className='download'>
            <div  className='actions'>
                <a download="test.css"  href={download}>
                    <HiDownload />
                </a>
                <button onClick={getLink}>
                    <FiLink2 />
                </button>
            </div>
            <GrClose />
            <div>{selectedBrands.length} brands collection</div>
            <div className='allBrands'>
                <div> <HiDownload /> </div>
                <p>All Brands</p>
            </div>

        </div>
    )
}

export default Download