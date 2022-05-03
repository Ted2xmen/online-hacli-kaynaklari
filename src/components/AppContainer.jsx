const AppContainer = () => {
  return (
    <div className="max-w-screen-xl mx-auto bg-blue-50 px-4 py-24 lg:flex lg:h-screen lg:items-center">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-6xl font-extrabold sm:text-5xl">
          Online Haçlı Kaynakları Projesi
        </h1>

        <p className="mt-4 sm:text-xl sm:leading-relaxed">
          Haçlı çalışmaları alanındaki birincil kaynaklara hızlı ulaşımı amaç
          edinmiş bağımsız bir projedir.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            className="block w-full rounded bg-gray-800 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
            href="/">
            Anasayfa
          </a>

          <a
            className="block w-full rounded px-12 py-3 text-sm font-medium text-gray-800 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
            href="/about">
            Hakkında
          </a>
        </div>
      </div>
    </div>
  )
}

export default AppContainer
