import React from 'react'

const TrComponent = (data) => {
    const {name, lang, eser, katki, bolge, periyod, dil, edisyon} = data
  return (
    <tr className="text-gray-700">
      <td className="border px-4 py-3">
        <div className="flex items-center text-sm">
          <div>
            <p className="font-semibold text-black"> {name} </p>
          </div>
        </div>
      </td>
      <td className="text-ms border px-4 py-3 font-semibold">{eser}</td>
      <td className="border px-4 py-3 text-xs">
        <span className="rounded-sm bg-green-100 px-2 py-1 font-semibold leading-tight text-green-700">
          {periyod}
        </span>
      </td>
      <td className="border px-4 py-3 text-sm">
        {bolge.map((item) => (
          <p>{item}</p>
        ))}
      </td>
      <td className="border px-4 py-3 text-sm">{dil}</td>

      <td className="border px-4 py-3 text-sm">
        {edisyon.map((item) => (
          <p className='py-1'>
            <a target="_blank" rel='noopener noreferrer'  className='text-blue-500 underline' href={item.link}>{item.name}</a>
          </p>
        ))}
      </td>

      <td className="border px-4 py-3 text-sm">TR. Kısmen</td>
      <td className="border px-4 py-3 text-sm">
        {katki.map((item) => (
          <p>{item}</p>
        ))}
      </td>
    </tr>
  )
}

export default TrComponent
