import { Ad, CV19info, Cards, Category, Notifications } from '@/components'
import React from 'react'

export default function Home() {
  return (
    <>
      <Category />
      <Ad />
      <CV19info />
      <Cards/>
      <Notifications/>
    </>
  )
}
