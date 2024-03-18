import React from 'react'
/* Вывод "быстрых" ссылок над поисковой строкой */
export const QLink = (props) => {
  const {text, link} = props;
  return (
    <td>
      <a href = {link}>{text}</a>
    </td>
  )
}
