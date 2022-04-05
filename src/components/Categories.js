import React, { useState, useEffect } from 'react'
import sanityClient from "../Client";
import Category from "./Category";

export default function Categories() {
    const [categories, setCategories] = useState(null);
    console.log("data categories:", categories);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "category"]{
                    title,
                    slug,
                    description,
                    image{
                    asset->{
                    _id,
                    url
                    },
                    },
                    hexCode,
                    }`
            )
            .then((data) => setCategories(data))
            .catch(console.error);
    }, []);


    // <Category key={category._id} category="category" />


    return (
        <div>
            <h3>All Categories🥘</h3>

            {categories &&
                categories.map((category) => (
                    <p>{category.title}</p>

                ))}
        </div>
    )
}
