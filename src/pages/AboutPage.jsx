import Nav from './Nav'


const AboutPage = () => {
  return (
    <>
      <div className="mx-auto items-center justify-center pt-24 sm:h-full sm:w-full md:h-full md:w-full lg:mx-12 xl:mx-24">
        <Nav />
        <div className="text-md m-4 p-12 gradient text-white">
          React 18 - Redux Toolkit - React Router v6 - Tailwind CSS v3
        </div>
      </div>
    </>
  )
}

export default AboutPage
