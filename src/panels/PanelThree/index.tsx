import React, { useCallback, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectActiveBoxPrimary } from '../../features/app/appSlice'
import Compose from './compose'

const PanelThree: React.FC = () => {
  const activeBoxPrimary = useSelector(selectActiveBoxPrimary)
  
  return (
    <div className='panel panel-three'>
      {activeBoxPrimary?.messages?.map((mes: any, i: number, arr: any[]) => {
        const showSenderName = mes.sender.id !== arr[i - 1]?.sender?.id
        let classes = 'message'
        if (!showSenderName) classes += ' hide-sender'
        return (
          <div className={classes}>
            {showSenderName && <span className='message-sender-name'>{mes.sender.name}</span>}
            <span className='message-message'>{mes.body}</span>
          </div>
      )})}
      
        <Compose />
    </div>
  )
}

export default PanelThree