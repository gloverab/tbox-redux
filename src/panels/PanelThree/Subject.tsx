import React, { useMemo, useCallback, } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectActiveSubject, updateActiveSubject } from '../../features/app/appSlice'

interface IContactItemProps {
  number: number
  item: { id: number, title: string }
  updateBorderBottom: (num: string) => void
}

const Subject: React.FC<IContactItemProps> = ({number, item, updateBorderBottom}) => {
  const activeSubject = useSelector(selectActiveSubject)
  const dispatch = useDispatch()

  const classes = useMemo(() => {
    let classNames = `subject-button _${number}`
    if (activeSubject.id === item.id) {
      updateBorderBottom(` _${number}`)
      classNames += ' active'
    }
    return classNames
  }, [activeSubject, item, number])

  const handleClick = useCallback(() => {
    dispatch(updateActiveSubject(item))
  }, [item])

  return (
    <div className='subject'>
      <button className={classes} onClick={handleClick}>
        <span>{item.title}</span>
      </button>
    </div>
  )
}

export default Subject