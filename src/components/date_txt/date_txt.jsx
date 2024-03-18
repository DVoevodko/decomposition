import React from 'react'
/* Вывод текущей даты/времени */
export const DateTxt = () => {
  var now = new Date()
  return (
    <td>
        <p> {now.toLocaleString()} </p>
    </td>
  )
}
