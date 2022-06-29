import React from 'react'

const TrComponent = (data) => {
  const {
    name,
    lang,
    eser,
    katki,
    bolge,
    periyod,
    dil,
    edisyon,
    translate,
    tur,
  } = data

  return (
    <tr className="text-gray-700 hover:bg-gray-100 ">
      <td className=" px-1 py-3">
        <div className="flex items-center text-sm">
          <div>
            <p className="text-base font-bold uppercase text-black">{name}</p>
            {lang.map((item, index) => (
              <div key={index} className="ml-2 pt-2">
                {item.eng ? (
                  <span className="block text-xs">🏴󠁧󠁢󠁥󠁮󠁧󠁿 {item.eng} </span>
                ) : null}
                {item.fr ? (
                  <span className="block text-xs">🇫🇷 {item.fr} </span>
                ) : null}
                {item.de ? (
                  <span className="block text-xs">🇩🇪 {item.de} </span>
                ) : null}
                {item.it ? (
                  <span className="block text-xs">🇮🇹 {item.it} </span>
                ) : null}
                {item.ar ? (
                  <span className="block text-xs">🇦🇪 {item.ar} </span>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </td>

      <td className="px-1 py-3">
        {eser}
        <span className="ml-2 inline-block rounded-sm bg-yellow-300 p-1 text-xs text-black opacity-25 hover:opacity-100">
          {tur}
        </span>
      </td>

      <td className="space-y-1 px-1 py-3 text-xs">
        {periyod.map((item, index) => (
          <button
            key={index}
            className="block rounded-sm bg-indigo-100 p-1 font-semibold leading-tight text-indigo-700">
            {item}
          </button>
        ))}
      </td>

      <td className=" px-1 py-3 text-sm">
        {bolge.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </td>

      <td className=" px-0 py-2 text-xs">
        <span className="text-xs  tracking-tight">{dil}</span>
      </td>

      <td className=" px-2 py-3 text-xs">
        {edisyon.map((item, index) => (
          <p className="py-1" key={index}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="tracking-tight text-blue-500 underline"
              href={item.link}>
              {item.name}
            </a>
          </p>
        ))}
      </td>

      <div className="max-h-40 overflow-y-auto">
        <td className="py-2 text-xs">
          {translate.map((item, index) => (
            <span className="ml-2 pt-1" key={index}>
              <a
                className="m-1 block p-1 tracking-tight text-blue-500"
                href={item.link} target="_blank" rel='noreferrer'>
                {item.durum}
              </a>
            </span>
          ))}
        </td>
      </div>

      <td className="py-3 text-xs">
        {katki.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </td>
    </tr>
  )
}

export default TrComponent
