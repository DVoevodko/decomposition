import React from 'react'
/* Вывод типа новостей */
export const TypeNews = (props) => {
    const {text, link} = props;
    return (
      <td>
        <a href={link}>
            {text}          
        </a>
      </td>
  )
}
