import React from 'react'

export default function Footer() {
    const year = new Date().getFullYear();
  return (
    <>
    <div style={{backgroundColor: 'bisque', color: 'rgb(230, 180, 140)', display: 'flex', justifyContent: 'center'}}>
     Copyright {year}
    </div>
    </>
  )
}
