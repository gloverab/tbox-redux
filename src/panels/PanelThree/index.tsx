import React, { useCallback, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectActiveBoxPrimary } from '../../features/app/appSlice'
import Compose from './compose'

const PanelThree: React.FC = () => {
  const activeBoxPrimary = useSelector(selectActiveBoxPrimary)
  
  return (
    <div className='panel panel-three'>
        <span>{activeBoxPrimary.name}</span>
        <Compose />
    </div>
  )
}

export default PanelThree