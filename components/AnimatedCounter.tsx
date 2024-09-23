'use client'
import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({amount = 0}: {amount: number}) => {
  return (
    <div className="w-full">
     <CountUp 
     end={amount}
     decimals={2}
     decimal="."
     prefix="$"
     ></CountUp>
    </div>
  )
}

export default AnimatedCounter
