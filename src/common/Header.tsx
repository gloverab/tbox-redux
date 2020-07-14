import React, { useCallback, useState } from 'react';
import SectionHeader from '../panels/PanelOne/SectionHeader';

const Header: React.FC = () => {
  const [searchVal, setSearchVal] = useState('')

  const handleChange = useCallback((e) => {
    setSearchVal(e.target.value)
  }, [])

  const handleSubmit = useCallback((data) => {
    return null
  }, [])

  const handleProfileClick = useCallback((e) => {
    return null
  }, [])

  return (
    <div className='header'>
      <div className='header-left'>
      <SectionHeader text='Inbox' />
      </div>
      <div className='header-right'>
        <form className='header-search-form' onSubmit={handleSubmit}>
          <input
            className='header-search'
            type='text'
            value={searchVal}
            onChange={handleChange}
            placeholder='Search mail'
          />
        </form>
        <div className='icons'>
          <button className='profile-circle' onClick={handleProfileClick}>
            <span>AG</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header