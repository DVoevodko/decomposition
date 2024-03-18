import React from 'react'
/* Вывод рекламной карточки справа от новостей */
export const AdvertCard = (props) => {
  const {img, title, text, link} = props;
  return (
    <>
    <div>
        <img src={img} alt = '...'></img>
    </div>
    <div>
        <a href = {link}>{title}</a>
    </div>
    <div>
        {text}
    </div>
    </>
  )
}
