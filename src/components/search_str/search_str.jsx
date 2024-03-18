import React from 'react'

/* Вывод поисковой строки (логотип + поисковая строка + ссылка-подсказка) */
export const SearchStr = (props) => {
  const {img, text, link} = props;
  return (
    <table><tr>
      <td>
        <img src={img} alt = '...'></img>
        <input type='search'></input>
        <button >Найти</button>
      </td>
    </tr><tr>
      <td>
        <a href = {link}>{text}</a>
      </td>
    </tr>
    </table>
  )
}
