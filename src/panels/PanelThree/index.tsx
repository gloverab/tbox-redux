import React, { useCallback, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectActiveBoxPrimary, selectActiveSubject } from '../../features/app/appSlice'
import Compose from './compose'
import Subject from './Subject'
import { mockSubjects } from '../../constants'

const PanelThree: React.FC = () => {
  const [borderBottom, setBorderBottom] = useState('')
  const activeBoxPrimary = useSelector(selectActiveBoxPrimary)

  const updateBorderBottom = useCallback((num: string) => {
    setBorderBottom(num)
  }, [])

  const subjects = useMemo(() => {
    return mockSubjects.map((item, i) => {
      return <Subject number={i + 1} item={item} updateBorderBottom={updateBorderBottom} />
    })
  }, [])

  const subjectClasses = useMemo(() => {
    let classNames = 'subjects'
    if (borderBottom) classNames += borderBottom
    return classNames
  }, [borderBottom])

  const messagesClasses = useMemo(() => {
    let classNames = 'messages'
    if (borderBottom) classNames += borderBottom
    return classNames
  }, [borderBottom])
  
  return (
    <div className='panel panel-three'>
      <div className={subjectClasses}>
        <Subject number={0} item={{ id: 1838339, title: 'General' }} updateBorderBottom={updateBorderBottom} />
        {subjects}
      </div>

      <div className={messagesClasses}>
        {activeBoxPrimary?.messages?.map((mes: any, i: number, arr: any[]) => {
          const showSenderName = mes.sender.id !== arr[i - 1]?.sender?.id
          let mesClasses = 'message'
          if (!showSenderName) mesClasses += ' hide-sender'
          return (
            <div className={mesClasses}>
              {showSenderName && <span className='message-sender-name'>{mes.sender.name}</span>}
              <span className='message-message'>{mes.body}</span>
            </div>
        )})}
      </div>
      
        <Compose />
    </div>
  )
}

export default PanelThree