import React, { useCallback, useState } from 'react'

const PanelTwo: React.FC = () => {
  const [searchVal, setSearchVal] = useState('')

  const handleChange = useCallback((e) => {
    setSearchVal(e.target.value)
  }, [])

  const handleSubmit = useCallback((data) => {
    return null
  }, [])

  return (
    <div className='panel panel-two'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={searchVal}
          onChange={handleChange}
          placeholder='search'
        />
        <input type='submit' value='submit' />
      </form>
      <span>Panel Two</span>
    </div>
  )
}

export default PanelTwo