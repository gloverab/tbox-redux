import React, { useMemo } from 'react'
import ContactItem from './ContactItem'
import { defaultItems, placeholderChannels, placeholderDirect } from '../../constants'
import SectionHeader from './SectionHeader'

const PanelOne: React.FC = () => {

  const emailItems = useMemo(() => {
    return defaultItems.map(item => {
      return <ContactItem key={item.key} item={item} />
    })
  }, [])

  const placeholderChannelsItems = useMemo(() => {
    return placeholderChannels.map(item => {
      return <ContactItem key={item.key} item={item} />
    })
  }, [])

  const placeholderDirectItems = useMemo(() => {
    return placeholderDirect.map(item => {
      return <ContactItem key={item.key} item={item} />
    })
  }, [])

  return (
    <div className='panel panel-one'>
      <SectionHeader text='Main' />
      {emailItems}
      <SectionHeader text='Group Channels' />
      {placeholderChannelsItems}
      <SectionHeader text='Direct' />
      {placeholderDirectItems}
    </div>
  )
}

export default PanelOne