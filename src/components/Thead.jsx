import React from 'react'

const Thead = () => {
  return (
    <thead>
      <tr className="text-md border-b border-red-900 bg-gray-800 text-left font-semibold uppercase tracking-wide text-gray-200">
        <th className="px-4 py-3">Yazar</th>
        <th className="px-4 py-3">Eser</th>
        <th className="px-4 py-3">Tür</th>
        <th className="px-4 py-3">Periyod</th>
        <th className="px-4 py-3">Bölge</th>
        <th className="px-4 py-3">Dil</th>
        <th className="px-4 py-3">Edisyon</th>
        <th className="px-4 py-3">Çeviri</th>
        <th className="px-4 py-3">Hazırlayanlar</th>
      </tr>
    </thead>
  )
}

export default Thead
