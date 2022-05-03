import React from 'react'

const Search = ({ setSearchTerm }) => {
  const submitSearchTerm = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div className="py-4">
      <div className="relative">
        <label className="sr-only">Search</label>
        <input
          className="w-full rounded-lg border-2 py-4 pl-3 pr-16 text-sm"
          type="text"
          placeholder="Yazar veya Eser Adına Göre Ara..."
          onChange={submitSearchTerm}
        />

        <button
          className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-gray-600 p-2 text-white"
          type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Search
