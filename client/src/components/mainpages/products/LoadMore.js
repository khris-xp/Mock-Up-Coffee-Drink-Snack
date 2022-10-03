import React, { useContext } from 'react'
import { GlobalState } from '../../../GlobalState'

function LoadMore() {
    const state = useContext(GlobalState)
    const [page, setPage] = state.productsAPI.page
    const [result] = state.productsAPI.result
    return (
        <div>
            <div className="text-center">
                {
                    result < page * 9 ? ""
                        : <button onClick={() => setPage(page + 1)} className="p-[10px_25px] mb-[20px] border-[1px_solid_#555] capitalize">Load More</button>
                }
            </div>
        </div>
    )
}

export default LoadMore
