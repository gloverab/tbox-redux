import React, { useCallback, useMemo, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectActiveBoxPrimary } from '../../features/app/appSlice'
import ContactItem from '../PanelOne/ContactItem'

const Compose: React.FC = () => {
  const [expanded, setExpanded] = useState(false)
  const [messageVal, setMessageVal] = useState('')
  const activeBoxPrimary = useSelector(selectActiveBoxPrimary)

  const handleChange = useCallback((e) => {
    setMessageVal(e.target.value)
  }, [])

  const placeholderText = useMemo(() => {
    return activeBoxPrimary.key ? `Message ${activeBoxPrimary.name}` : 'Write New Message'
  }, [activeBoxPrimary])

  const handleSubmit = useCallback((e) => {
    debugger
  }, [])

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' && !expanded) {
      e.preventDefault()
      setExpanded(true)
    }
  }, [expanded])

  useEffect(() => {
    if (messageVal === '') {
      setExpanded(false)
    }
  }, [messageVal])

  const classNames = useMemo(() => {
    let classes = 'new-message-bottom-button'
    if (messageVal !== '') classes += ' has-value'
    return classes
  }, [messageVal])
  
  return (
    <div className='form-wrapper'>
      <form className='new-message-bottom-form' onBlur={() => setExpanded(false)} onSubmit={handleSubmit}>
        <textarea
          className='new-message-bottom-textbox'
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholderText}
          rows={expanded ? 10 : 1}
          value={messageVal}
        />
        <input className={classNames} type='submit' value={expanded ? "Send" : '+'} />
      </form>
    </div>
  )
}

export default Compose