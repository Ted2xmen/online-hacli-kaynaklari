const HeaderHero = () => {
  return (
    <div className="max-w-screen-xl mx-auto bg-slate-100 px-4 py-20 lg:flex  lg:items-center">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-6xl font-bold sm:text-5xl">
          Online Haçlı Kaynakları Projesi
        </h1>

        <p className="py-6 sm:text-xl sm:leading-relaxed">
          Haçlı çalışmaları alanındaki birincil kaynaklara hızlı ulaşımı amaç
          edinmiş bağımsız bir projedir.
        </p>

        <div className="space-x-6">
          <a
            className=" rounded-lg p-2 shadow hover:bg-blue-600 hover:text-white "
            href="/">
            Anasayfa
          </a>
          <a
            className=" rounded-lg p-2 shadow hover:bg-blue-600 hover:text-white "
            href="/about">
            Hakkında
          </a>
          <a
            className=" rounded-lg p-2 shadow hover:bg-blue-600 hover:text-white "
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/haclikaynaklari">
            Twitter
          </a>

          <a
            className=" rounded-lg p-2 shadow hover:bg-blue-600 hover:text-white "
            href="https://www.academia.edu/50159258/ONL%C4%B0NE_HA%C3%87LI_KAYNAKLARI_PROJES%C4%B0"
            target="_blank"
            rel="noopener noreferrer">
            Academia.edu
          </a>
        </div>
      </div>
    </div>
  )
}

export default HeaderHero
