import React from 'react'
import { useSelector } from 'react-redux'

const Accountstatus = () => {
  const isSavingsAccount = useSelector(state => state.isSavingsAccount);
  return (
    <div>
        <h1>{isSavingsAccount ? "Savings Account" : "Checking Account"}</h1>
    </div>
  )
}

export default Accountstatus