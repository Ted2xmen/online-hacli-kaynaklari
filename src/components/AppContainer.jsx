import Counter from './Counter'
import Nav from '../pages/Nav'

const AppContainer = () => {
  return (
    <div className="mx-auto items-center justify-center pt-24 sm:h-full sm:w-full md:h-full md:w-full lg:mx-12 xl:mx-24">
      <Nav />
      <div className="gradient title m-4 p-12">React Starter</div>
      <div className="gradient m-4 p-12">
        <Counter />
      </div>
    </div>
  )
}

export default AppContainer
