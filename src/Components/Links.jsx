import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Facebook from './Instagram'

function Links() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/Facebook' element={<Facebook></Facebook>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Links