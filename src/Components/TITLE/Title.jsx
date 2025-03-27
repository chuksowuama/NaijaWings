import React from 'react'
import "./title.css"

const Title = (props) => {
  return (
    <>
    <div className={props.titleContainer}>
        <h1 className={props.Headerclass}>{props.HeaderText}</h1>
        <p className={props.subheaderclass}>{props.SubheaderText}</p>
    </div>
    {/* titleContainer="titleContainer"
        Headerclass="Headerclas"
        HeaderText="Hello world"
        subheaderclass="subheaderclass"
        SubheaderText="SubheaderText" */}
    </>
  )
}

export default Title
