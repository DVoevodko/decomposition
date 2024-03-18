import React from 'react'

/* курс валюты */
export const Currency = (props) => {
  const {curr, cost, delta, link} = props;
  return (
    <a href = {link}>{curr}{cost}{delta}</a>
  )
}
