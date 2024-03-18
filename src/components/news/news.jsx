import React from 'react'

/* Вывод ссылки на новость (иконка+текст) */

export const News = (props) => {
  const {icon, text, link} = props;
  return (
    <div>
        <a href={link}>
            <img src={icon} alt = '...'></img>
            {text}
        </a>
    </div>
  )
}
