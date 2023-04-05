import React, { useContext, useEffect } from 'react'
import { getContrastYIQ } from '../Helpers'
import MainContex from '../MainContex'
import Clipboard from 'react-clipboard.js';
function Brand({ item }) {
    const { selectedBrands, setSelectedBrands ,setCopyColor} = useContext(MainContex)
    const toogleSelected = () => {
        if (selectedBrands.includes(item.slug)) {
            setSelectedBrands(selectedBrands.filter(b => b !== item.slug))
        } else {
            setSelectedBrands([...selectedBrands, item.slug])
        }
    }
    const setColor = (color) =>{
        setCopyColor(color)
    }
    return (
        <div className={`brand ${selectedBrands.includes(item.slug) ? "selected" : ""}`}>
            <h5 onClick={toogleSelected}>{item.title}</h5>
            <div className='brand-colors'>
                {
                    item.colors.map(color => (
                        <Clipboard  data-clipboard-text={color} onSuccess={()=>setColor(color)} component="span" style={{ "--bgColor": `#${color}`, "--textColor": `${getContrastYIQ(color)}` }}>
                            {color}
                         </Clipboard>
                    ))
                }

            </div>
        </div>
    )
}

export default Brand