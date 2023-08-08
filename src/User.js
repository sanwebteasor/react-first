import React from 'react'

export default function User(props) {
   const {data}=props;
  return (
    <>

    <div>User component</div>
    <h2>{data.name}</h2>
    <h2>{data.age}</h2>
    </>
  )
}
