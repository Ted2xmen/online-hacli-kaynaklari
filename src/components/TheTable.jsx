import React from 'react'
import Thead from './Thead'
import TrComponent from './TrComponent'

import data from '.././data.json'

const TheTable = () => {
  return (
    <div>
      <section className="container mx-auto p-6 font-mono">
        <div className="mb-8 w-full overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <Thead />
              <tbody className="bg-white">
                {data.map((item) => (
                  <TrComponent
                    key={item.name}
                    name={item.name}
                    eser={item.eser}
                    katki={item.katki}
                    bolge={item.bolge}
                    periyod={item.periyod}
                    dil={item.dil}
                    edisyon={item.edisyon}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>{' '}
    </div>
  )
}

export default TheTable
