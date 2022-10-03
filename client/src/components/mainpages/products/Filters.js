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
    <div className="w-full min-h-[40px] overflow-hidden flex justify-between items-center flex-wrap m-[15px_0] pt-[35px]">
      <div className="grid-rows-1">
        <span>Filters: </span>
        <select name="category" value={category} onChange={handleCategory} className="border-[1px] border-[solid] border-[#ccc] outline-none h-[40px] p-[0_5px] font-tight">
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

      <input type="text" className="border-[1px] border-[solid] border-[#ccc] outline-none h-[40px] p-[0_5px] flex-[1] m-[0_10px] font-tight " value={search} placeholder="Enter your search!"
        onChange={e => setSearch(e.target.value.toLowerCase())}  />
      <div className="grid-rows-1">
        <span>Sort By: </span>
        <select value={sort} onChange={e => setSort(e.target.value)} className="border-[1px] border-[solid] border-[#ccc] outline-none h-[40px] p-[0_5px] font-tight">
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
