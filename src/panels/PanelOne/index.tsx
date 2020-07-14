import React, { useMemo } from 'react'
import ContactItem from './ContactItem'
import { defaultItems, sampleChannels, sampleDirects } from '../../constants'
import SectionHeader from './SectionHeader'

const PanelOne: React.FC = () => {

  const emailItems = useMemo(() => {
    return defaultItems.map(item => {
      return <ContactItem key={item.channel_id} item={item} />
    })
  }, [])

  const placeholderChannelsItems = useMemo(() => {
    return sampleChannels.map(item => {
      return <ContactItem key={item.channel_id} item={item} />
    })
  }, [])

  const placeholderDirectItems = useMemo(() => {
    return sampleDirects.map(item => {
      return <ContactItem key={item.channel_id} item={item} />
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