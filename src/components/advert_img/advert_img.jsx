import React from 'react'

/* Вывод рекламного баннера под поисковой строкой */
export const AdvertImg = (props) => {
  const {img, link} = props;
  return (
    <div>
        <a href={link}>
            <img src={img} alt = '...'></img>
        </a>
    </div>
  )
}
