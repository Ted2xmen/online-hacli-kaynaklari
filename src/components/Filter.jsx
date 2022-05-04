const Filter = ({ setCategory }) => {
  const options = [
    {
      label: 'Tümü',
      value: 'all',
    },
    {
      label: 'Kronikler',
      value: 'Seyahatname',
    },
    {
      label: 'Seyahatnameler',
      value: 'Kronik',
    },
  ]

  const handleFilter = (e) => {
    setCategory(e.target.value)
  }

  return (
    <div>
      <div className="flex justify-center">
        <div className="mb-3 xl:w-96">
          <select
            className="form-select m-0
      
      w-full
      appearance-none
      rounded
      border
      border-solid
      border-gray-300
      bg-white bg-clip-padding bg-no-repeat
      px-3 py-1.5 text-base
      font-normal
      text-gray-700
      transition
      ease-in-out
      focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
            aria-label="Default select example"
            onChange={handleFilter}>
            {options.map((option, index) => {
              return (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              )
            })}
          </select>
        </div>
      </div>
    </div>
  )
}

export default Filter
