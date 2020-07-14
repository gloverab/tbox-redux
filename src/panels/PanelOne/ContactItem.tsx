import React, { useCallback, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateActiveBoxPrimary, selectActiveBoxPrimary } from '../../features/app/appSlice'

interface IContactItemProps {
  item: { channel_id: string, channel_name: string }
}

const ContactItem: React.FC<IContactItemProps> = ({ item }) => {
  const activeBoxPrimary = useSelector(selectActiveBoxPrimary)
  const dispatch = useDispatch()

  const handleItemClick = useCallback(() => {
    dispatch(updateActiveBoxPrimary(item))
  }, [dispatch, item])
  
  const classNames = useMemo(() => {
    let classes = 'contact-item'
    if (activeBoxPrimary.channel_id === item.channel_id) classes += ' active'
    return classes
  }, [activeBoxPrimary, item])

  return (
    <button className={classNames} onClick={handleItemClick}>
      <span>&#9786; - </span>
      <span>{item.channel_name}</span>
    </button>
  )
}

export default ContactItem