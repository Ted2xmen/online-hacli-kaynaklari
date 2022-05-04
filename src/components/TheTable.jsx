import React, { useState } from 'react'
import Thead from './Thead'
import TrComponent from './TrComponent'
import Search from './Search'
import data from '.././data.json'
import Filter from './Filter'

const TheTable = ( ) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('')



  return (
    <div>
      <section className="container mx-auto p-6">
        <div className="mb-8 w-full overflow-hidden rounded-lg ">
          <Filter setCategory={setCategory} />
          <Search setSearchTerm={setSearchTerm} />
          <div className="w-full overflow-x-auto shadow-lg">
            <table className="w-full">
              <Thead />
              <tbody className="divide-y-2 bg-gray-50">
                {data
                  .filter((f) => f.tur === category ? null : data )
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
