import React from "react";
import { useParams } from "react-router-dom"
import mockCats from "../mockData";
import { Card } from "reactstrap";


const CatShow = ({cats}) => {
  const { id } = useParams()

  let showCat = cats?.find((cat) => cat.id === +id)
  console.log(showCat)


return (
  <>
<h3>Cat Show page</h3>

{showCat && 
<Card>{showCat.name},{showCat.age}</Card> }
</>

  )

}

export default CatShow