import React from 'react'

interface ISectionHeader {
  text: string
}

const SectionHeader: React.FC<ISectionHeader> = ({ text }) => {
  return (
    <button className='section-header'>
      {text}
    </button>
  )
}

export default SectionHeader