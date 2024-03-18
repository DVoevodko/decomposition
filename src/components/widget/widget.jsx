import React from 'react'

/* Вывод виджета с дочерними компонентами */
export const Widget = (props) => {
  const {title, link, button_link, button_txt, children} = props;
  const ctx = React.Children.map(children, c => <div> {c} </div>);
  return (
    <div>
      <a href={link}>
        {title}
        <a href={button_link} className="btn btn-primary">{(typeof(button_link) !== "undefined")?button_txt:''}</a>
      </a>
      {ctx}
    </div>
  )
}
