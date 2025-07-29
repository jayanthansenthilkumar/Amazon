import React from 'react'

const LaptopHeader = () => {
  return (
    <div className="LaptopHeader">
    <p className='laptop-header'>
        1-16 of over 100,000 results for <span className='search-text'>"Laptop"</span>
    </p>
    <select className="result-sort-dropdown">
        <option value="featured">Featured</option>
        <option value="price-low-high">Price: Low to High</option>
        <option value="price-high-low">Price: High to Low</option>
        <option value="newest">Newest Arrivals</option>
    </select>
</div>

  )
}

export default LaptopHeader