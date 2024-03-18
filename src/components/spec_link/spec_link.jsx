import React from 'react'

/*Вывод специальной ссылки с настраиваемыми параметрами */
export const SpecLink = (props) => {
  const {img, type, text1, text1_type, text2, text2_type, text3, text3_type, link} = props;
  return (
    <div className = {`message message-${type}`}>
      <a href = {link}>
        <img src={img} alt = {(typeof(img) !=='undefined')?'...':''}/>
        <span className={`text text-${text1_type}`}>{text1}</span>
        <span className={`text text-${text2_type}`}>{text2}</span>
        <span className={`text text-${text3_type}`}>{text3}</span>
      </a>
    </div>
  )
}