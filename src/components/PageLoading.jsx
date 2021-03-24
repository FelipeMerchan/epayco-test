import React from 'react'

import { Loader } from '@components/Loader'
import '@styles/components/PageLoading.scss'

export const PageLoading = () => {
  return (
    <div className="PageLoading">
      <Loader />
    </div>
  )
}
