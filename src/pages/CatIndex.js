import React from "react";
import mockCats from "../mockData";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom"


const CatIndex = ({ cats }) => {
  console.log(cats)
  return (
    <>
      <h1>Meet someone groovy..</h1>
      {cats?.map((cat, index) => {
        return (
          <>
            <img alt={`profile of a cat named ${cat.name}`} src={cat.image} />

            <NavLink to={`/catshow/${cat.id}`} className="nav-link">
              {cat.name}
            </NavLink>
          </>
        )
      })}

    </>
  )
}






export default CatIndex