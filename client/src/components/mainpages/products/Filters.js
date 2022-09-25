import React, { useContext } from 'react'
import { GlobalState } from '../../../GlobalState'

function Filters() {
  const state = useContext(GlobalState)
  const [categories] = state.categoriesAPI.categories

  const [category, setCategory] = state.productsAPI.category
  const [sort, setSort] = state.productsAPI.sort
  const [search, setSearch] = state.productsAPI.search

  const handleCategory = e => {
    setCategory(e.target.value)
    setSearch('')
  }

  return (
    <div className="filter_menu">
      <div className="row">
        <span>Filters: </span>
        <select name="category" value={category} onChange={handleCategory}>
          <option value=''>All Product</option>
          {
            categories.map(category => (
              <option value={"category=" + category._id} key={category._id}>
                {category.name}
              </option>
            ))
          }
        </select>
      </div>

      <div className="search">
        <form action="">
          <input type="search" value={search} required
            onChange={e => setSearch(e.target.value.toLowerCase())} />
          <i className="fa fa-search"></i>
        </form>
      </div>
      {/* <input type="text" className="" value={search} placeholder="Enter your search!"
        onChange={e => setSearch(e.target.value.toLowerCase())} /> */}
      <div className="row">
        <span>Sort By: </span>
        <select value={sort} onChange={e => setSort(e.target.value)}>
          <option value=''>Newest</option>
          <option value='sort=oldest'>Oldest</option>
          <option value='sort=-sold'>Best sales</option>
          <option value='sort=-price'>Price: Hight-Low</option>
          <option value='sort=price'>Price: Low-Hight</option>

        </select>
      </div>
    </div>
  )
}

export default Filters
