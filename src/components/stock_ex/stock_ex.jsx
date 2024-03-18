import React from 'react'
import { Currency } from './currency/currency'

/* Вывод биржевых курсов */
export const StockEx = () => {
  return (
    <div>
       <Currency curr = "USD MOEX" cost = "63,52" delta = "+0,09" link = "link_curr_usdmoex"/>
       <Currency curr = "EUR MOEX" cost = "70,86" delta = "+0,14" link = "link_curr_usdeur"/>
       <Currency curr = "НЕФТЬ" cost = "64,90" delta = "+1,63%" link = "link_curr_oil"/>
    </div>
  )
}
