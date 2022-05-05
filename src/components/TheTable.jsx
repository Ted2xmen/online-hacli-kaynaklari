import React, { useState, useEffect } from 'react'
import Thead from './Thead'
import TrComponent from './TrComponent'
import Search from './Search'
import data from '.././data.json'
import Filter from './Filter'
import InfoCard from './InfoCard'
import axios from "axios";

const TheTable = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('')
const [apiData, setData] = useState([])



 const getData = async () => {
   const apiData = await axios.get(
     `https://onlinehaclikaynaklari.github.io/hacli-kaynaklari-projesi-verileri/data.json`
   )
   setData(apiData.data)
 } 
console.log(apiData.data)
   useEffect(() => {
     getData()
   }, [])


   const kronik = apiData.filter((f) => f.tur === 'Kronik')
   const seyahatname = apiData.filter((f) => f.tur === 'Seyahatname')

  return (
    <div>
      <section className="container mx-auto p-6">
        <div className="mb-8 w-full overflow-hidden rounded-lg ">
          <div className="flex items-center justify-between sm:flex-wrap md:flex-wrap md:space-x-2 lg:flex-wrap">
            <Filter setCategory={setCategory} />
            <InfoCard
              kronik={kronik.length}
              seyahatname={seyahatname.length}
              all={data.length}
            />
          </div>

          <Search setSearchTerm={setSearchTerm} />
          <div className="w-full overflow-x-auto shadow-lg">
            <table className="w-full">
              <Thead />
              <tbody className="divide-y-2">
                {apiData
                  .filter((f) => (f.tur === category ? null : data))
                  .filter(
                    (filtered) =>
                      filtered.name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                      filtered.eser
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                  )
                  .map((item, index) => (
                    <TrComponent
                      key={index}
                      lang={item.lang}
                      name={item.name}
                      eser={item.eser}
                      tur={item.tur}
                      katki={item.katki}
                      bolge={item.bolge}
                      periyod={item.periyod}
                      dil={item.dil}
                      edisyon={item.edisyon}
                      translate={item.translate}
                    />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TheTable
