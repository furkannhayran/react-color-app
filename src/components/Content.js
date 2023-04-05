import Search from './Search'
import Brand from './Brand'
import MainContex from '../MainContex'
import { useContext, useEffect } from 'react'
import Download from './Download'
function Content() {
    const { brand, selectedBrands } = useContext(MainContex)
    return (
        <main className='content'>
            <header className='header'>
                <Search />
                <Download />
            </header>
            <section className='brands'>
                {
                    brand.map(item => (<Brand item={item} />))
                }
            </section>
        </main>
    )
}

export default Content