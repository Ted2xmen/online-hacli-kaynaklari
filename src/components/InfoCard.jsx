import React from 'react'

const InfoCard = ({ kronik, seyahatname, all }) => {
  return (
    <div className='hidden md:block lg:block xl:block'>
      <section className="text-center">
        <div className="mx-auto w-full py-2">
          <ul className="info-ul">
            <li>
              <p className="info-data">{all}</p>
              <p className="info-title">Tümü</p>
            </li>

            <li>
              <p className="info-data">{kronik}</p>
              <p className="info-title">Kronik</p>
            </li>

            <li>
              <p className="info-data">{seyahatname}</p>
              <p className="info-title">Seyahatname</p>
            </li>

            <li>
              <p className="info-data">1000</p>
              <p className="info-title">Mektup</p>
            </li>

            <li>
              <p className="info-data">50</p>
              <p className="info-title">Şiir</p>
            </li>

            <li>
              <p className="info-data">100</p>
              <p className="info-title">Hatırat</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default InfoCard
