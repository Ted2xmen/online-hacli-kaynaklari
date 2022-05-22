const Filter = ({ setCategory }) => {
  const options = [
    {
      label: 'Tümü',
      value: 'all',
    },
    {
      label: 'Kronik',
      value: 'Şiir',
    },
    {
      label: 'Şiir',
      value: 'Kronik',
    },
  ]

  const handleFilter = (e) => {
    setCategory(e.target.value)
  }

  return (
    <div>
      <div className="flex justify-center">
        <div className="mb-3 ">
          <select
            className="form-select cursor-pointer m-0 px-6 xl:px-8
      
      w-full
      appearance-none
      rounded-lg
      shadow-md
      bg-slate-100  
      py-4 mt-3 text-sm
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
