import React from 'react'

const TrComponent = (data) => {
  const { name, lang, eser, katki, bolge, periyod, dil, edisyon, translate, tur } =
    data
  return (
    <tr className="text-gray-700 hover:bg-gray-100">
      <td className=" px-4 py-3">
        <div className="flex items-center text-sm">
          <div>
            <p className="text-lg font-semibold uppercase text-black">{name}</p>
            {lang.map((item, index) => (
              <div key={index} className="ml-2 pt-2">
                <span className="block">🏴󠁧󠁢󠁥󠁮󠁧󠁿 {item.eng}</span>
                <span className="block">🇫🇷 {item.fr}</span>
                <span className="block">🇩🇪 {item.de}</span>
              </div>
            ))}
          </div>
        </div>
      </td>
      <td className="px-4 py-3 text-base">{eser}</td>
      <td className="px-2 py-3 text-base">{tur}</td>

      <td className="px-3 py-3 text-xs">
        <span className="rounded-sm bg-indigo-100 p-1 font-semibold leading-tight text-indigo-700">
          {periyod}
        </span>
      </td>
      <td className=" px-3 py-3 text-sm">
        {bolge.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </td>
      <td className=" px-3 py-3 text-sm">{dil}</td>

      <td className=" px-3 py-3 text-sm">
        {edisyon.map((item, index) => (
          <p className="py-1">
            <a
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
              href={item.link}>
              {item.name}
            </a>
          </p>
        ))}
      </td>

      <td className=" px-3 py-3 text-sm">
        {translate.map((item, index) => (
          <div className="ml-2 pt-2">
            <span className="block">
              <a
                key={index}
                className="text-blue-500 underline"
                href={item.link}>
                {item.durum}{' '}
              </a>
            </span>
          </div>
        ))}
      </td>

      <td className=" px-3 py-3 text-sm">
        {katki.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </td>
    </tr>
  )
}

export default TrComponent
