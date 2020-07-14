import React, { useCallback, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectActiveBoxPrimary } from '../../features/app/appSlice'
import Compose from './compose'

const Message: React.FC = () => {
  const activeBoxPrimary = useSelector(selectActiveBoxPrimary)
  
  return (
    <div className='message'>
      <span>{activeBoxPrimary.channel_name}</span>
      <Compose />
    </div>
  )
}

export default Message