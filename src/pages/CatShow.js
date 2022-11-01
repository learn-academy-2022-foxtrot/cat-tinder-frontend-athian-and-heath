import React from "react";
import { useParams } from "react-router-dom"
import mockCats from "../mockData";
import { Card } from "reactstrap";


const CatShow = ({ cats }) => {
  const { id } = useParams()

  let showCat = cats?.find((cat) => cat.id === +id)


  return (
    <>
      <h3>Cat Show page</h3>

      {showCat &&
        <Card>{showCat.name}, {showCat.age}, {showCat.enjoys}</Card>}

      <img src={showCat.image} alt="an eligible cat" />
    </>

  )

}

export default CatShow