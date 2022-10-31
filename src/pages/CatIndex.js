import React from "react";
import mockCats from "../mockData";
import { useParams } from "react-router-dom";

const CatIndex = ({ cats }) => {
  console.log(cats)
  return (
    <>
    <h1>meet your new date</h1>
        {cats?.map((cat, index) => {
          return (
            <>
              <p>{cat.name}</p>
              <p>{cat.age}</p>
            </>
          )
        })}

        </>
  )
}






export default CatIndex