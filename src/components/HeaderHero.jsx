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

        <div className="mt-8   space-x-6 justify-center gap-4">
          <a
            className=" w-full rounded bg-blue-800 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700  sm:w-auto"
            href="/">
            Anasayfa
          </a>

          <a
            className=" w-full rounded px-12 py-3 text-sm font-medium text-blue-800 shadow hover:text-blue-700  sm:w-auto"
            href="/about">
            Hakkında
          </a>

          
        </div>
      </div>
    </div>
  )
}

export default HeaderHero
