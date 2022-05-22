import React from 'react'

const Footer = () => {
  return (
    <div className=" max-w-screen-xl">
      <footer className="text-center">
        <div className="max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-6">
            <nav className="relative flex flex-wrap justify-center gap-8 rounded-lg  bg-slate-100 p-8  text-sm font-semibold shadow-md">
              <a className="hover:opacity-75" href="/">
                Anasayfa
              </a>

              <a
                className="hover:opacity-75"
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/haclikaynaklari">
                Twitter
              </a>

              <a
                className="hover:opacity-75"
                href="https://www.academia.edu/50159258/ONL%C4%B0NE_HA%C3%87LI_KAYNAKLARI_PROJES%C4%B0"
                target="_blank"
                rel="noopener noreferrer">
                Academia.edu
              </a>

              <a
                className="hover:opacity-75"
                href="mailto:onlinehaclikaynaklariprojesi@gmail.com"
                target="_blank"
                rel="noopener noreferrer">
                İletişim
              </a>
            </nav>

            <p className="text-xs font-medium">
              Bu websitesi açık kaynaktır ve kodları{' '}
              <a
                className="text-blue-600 hover:underline"
                href="https://github.com/Ted2xmen/online-hacli-kaynaklari"
                target="_blank"
                rel="noopener noreferrer">
                GitHub
              </a>
              'tadır. MIT lisansı ile lisanslanmıştır.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
