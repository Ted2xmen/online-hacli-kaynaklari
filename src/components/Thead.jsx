import React from 'react'

const Thead = () => {
  return (
    <thead>
      <tr className="text-md border-b border-gray-600 bg-gray-100 text-left font-semibold uppercase tracking-wide text-gray-900">
        <th className="px-4 py-3">Yazar</th>
        <th className="px-4 py-3">Eser / Tür</th>
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