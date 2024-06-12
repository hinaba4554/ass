import React from 'react'
import C from '../Style/Card_Item.module.css'

function Card_Title() {
  return (
    <div>
        <div className={C.categories}>
        <h1>Featured Categories</h1>
        <a href='' style={{marginLeft : " 20px"}}> Cake & Milk</a>
        <a href=''>Coffes & Teas</a>
        <a href=''>Pet Foods</a>
        <a href="">Vegetables</a>

    </div>
    </div>
  )
}

export default Card_Title
