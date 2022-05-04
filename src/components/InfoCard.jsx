import React from 'react'

const InfoCard = ({kronik, seyahatname, all}) => {




  return (
    <div>
      <section className="text-center">
        <div className="mx-auto w-full py-2">
          <ul className="grid grid-cols-3 gap-4 rounded-xl border-2 border-gray-600 lg:grid-cols-4">
            <li className="p-4">
              <p className="text-2xl font-extrabold text-blue-500">{all}</p>
              <p className="mt-1 text-lg font-medium">Tümü</p>
            </li>

            <li className="p-4">
              <p className="text-2xl font-extrabold text-blue-500">{kronik}</p>
              <p className="mt-1 text-lg font-medium">Kronikler</p>
            </li>

            <li className="p-4">
              <p className="text-2xl font-extrabold text-blue-500">
                {seyahatname}
              </p>
              <p className="mt-1 text-lg font-medium">Seyahatnameler</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default InfoCard