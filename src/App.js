import './App.css';
import Content from './components/Content';
import SideBar from './components/SideBar';
import MainContex from './MainContex';
import brandData from './data.json'
import { useEffect, useState } from 'react';
import Copied from './components/Copied';

function App() {

  const brandsArray = []
  Object.keys(brandData).map(key => brandsArray.push(brandData[key]))

  // bu Şekilde de kullanılabilir yada forin ile dönülerek de yapılabilir
  // const data =  Object.entries(brandData)
  // console.log(data)
  const [brand, setBrand] = useState(brandsArray)
  const [selectedBrands, setSelectedBrands] = useState([])
  const [copyColor, setCopyColor] = useState(false)
  const [search, setSearch] = useState("")

  useEffect(() => {
    setBrand(
      brandsArray.filter(item=>item.title.toLowerCase().includes(search))
    )
  }, [search])
  var data = {
    brand,
    setBrand,
    setSelectedBrands,
    selectedBrands,
    setCopyColor,
    setSearch,
    search
  }
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setCopyColor(false)
    }, 1500)
    return () => {
      clearTimeout(timeOut)
    }
  }, [copyColor])

  return (
    <>
      <MainContex.Provider value={data}>
        {copyColor && <Copied color={copyColor} />}
        <SideBar />
        <Content />
      </MainContex.Provider>

    </>
  );
}

export default App;
