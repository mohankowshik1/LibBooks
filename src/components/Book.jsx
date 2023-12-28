import React from 'react'

const Book = () => {
  return (
    <div className="book-container">
        <div className="image-wrapper">
            <img src={} alt={} />
        </div>
        <div className="book-title-wrapper">
            <h2 className='p-2 font-semibold text-lg m-2'>{}</h2>
        </div>
        <div className="author-wrapper">
            <h3 className='p-2 text-gray-600 m-2 text-sm'>{}</h3>
        </div>
    </div>
  )
}

export default Book