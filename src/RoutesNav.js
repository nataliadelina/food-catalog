import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from "./views/Home";
import About from "./views/About";
import Foods from "./views/Foods";
import FilteredFoods from "./views/FilteredFoods";
import NotFound from "./views/NotFound";

export default function RoutesNav() {
    return (
        <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/foods' element={<Foods />} />
            <Route path='/filteredFoods' element={<FilteredFoods />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
