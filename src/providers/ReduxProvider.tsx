'use client'

import { store } from "@/store/store"
import React from "react"
import { Provider } from 'react-redux'

interface IBaseComponentProps {
  children: React.ReactNode
}

const ReduxProvider = ({ children }: IBaseComponentProps) => {
  return <Provider store={store}>{children}</Provider>
}

export default ReduxProvider
