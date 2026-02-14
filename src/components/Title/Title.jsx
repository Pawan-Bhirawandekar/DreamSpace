import React from 'react'
import './Title.css'

const Title = ({title,subTitle, id}) => {
  return (
    <div className="title" id={id}>
        <h2 className='heading-title'>{title}</h2>
        <h3>{subTitle}</h3>
    </div>
  )
}

export default Title
