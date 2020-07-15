export const defaultItems = [
  {
    channel_id: 'all',
    channel_name: 'All'
  },
  {
    channel_id: 'unread',
    channel_name: 'Unread'
  },
  {
    channel_id: 'sent',
    channel_name: 'Sent'
  },
  {
    channel_id: 'threads',
    channel_name: 'Threads'
  },
  {
    channel_id: 'deleted',
    channel_name: 'Deleted'
  }
]

export const placeholderChannels = [
  {
    key: 'c1',
    name: 'Ross, Chandler, Rachel'
  },
  {
    key: 'c2',
    name: 'Phoebe, Ross',
  },
  {
    key: 'c3',
    name: 'Roy, Gee, Biv',
  },
  {
    key: 'c4',
    name: 'Marty, Doc Brown, Einstein',
  }
]

export const placeholderUsers = [
  {
    id: 'ojsdksdffjld',
    name: 'Alex'
  },
  {
    id: 'ojsdkfjld',
    name: 'Raj',
    channel_name: 'Raj'
  },
  {
    id: 'ojsdfffsdkfjld',
    name: 'Margel',
    channel_name: 'Margel'
  },
  {
    id: 'ojsdfsdfffsdkfjld',
    name: 'Morgan',
    channel_name: 'Morgan'
  },
  {
    id: 'newjjjeje',
    name: 'Ben',
    channel_name: 'Ben'
  },
  {
    id: 'neddffswjjjeje',
    name: 'Olivia',
    channel_name: 'Olivia'
  },
]

export const sampleDirects = [
  {
    channel_id: 'ojsdksdffjld',
    name: 'Alex',
    channel_name: 'Alex'
  },
  {
    channel_id: 'ojsdkfjld',
    name: 'Raj',
    channel_name: 'Raj'
  },
  {
    channel_id: 'ojsdfffsdkfjld',
    name: 'Margel',
    channel_name: 'Margel'
  },
  {
    channel_id: 'ojsdfsdfffsdkfjld',
    name: 'Morgan',
    channel_name: 'Morgan'
  },
  {
    channel_id: 'newjjjeje',
    name: 'Ben',
    channel_name: 'Ben'
  },
  {
    channel_id: 'neddffswjjjeje',
    name: 'Olivia',
    channel_name: 'Olivia'
  },
]


export const sampleChannels = [
  {
    channel_id: "leshdflakfh",
    channel_name: "Alex, Raj, Margel",
    messages: [
      {
        subject: "subject1",
        body: "text body text body text body text body text body text body text body text body text body text body text body text body ",
        sender: placeholderUsers[0],
        sent_at: "12:53pm"
      },
      {
        subject: "subject1",
        body: "another message from alex. Yup I like to talk, its alright!",
        sender: placeholderUsers[0],
        sent_at: "12:53pm"
      },
      {
        subject: "subject1",
        body: "hi guys - hey hello whats up etc",
        sender: placeholderUsers[1],
        sent_at: "12:53pm"
      },
      {
        subject: "subject1",
        body: "convo body blah stuff stuff",
        sender: placeholderUsers[2],
        sent_at: "12:53pm"
      },
  ],
    channel_members: [placeholderUsers[0], placeholderUsers[1], placeholderUsers[2]]
  },
  {
    channel_id: "les2333hdflakfh",
    channel_name: "Raj, Ben, Olivia",
    messages: [
      {
        subject: "beer time",
        body: "lets get lots of expensive beer. you can pay me back",
        sender: placeholderUsers[4],
        sent_at: "12:53pm"
      },
      {
        subject: "beer time",
        body: "OKAY I'm a sucker. sounds good!",
        sender: placeholderUsers[1],
        sent_at: "12:53pm"
      },
  ],
    channel_members: [placeholderUsers[0], placeholderUsers[1], placeholderUsers[2]]
  }
]

export const sampleChannel = {
  channel_id: "leshdflakfh",
  channel_name: "channel name1",
  messages: [
    {
      subject: "subject1",
      body: "text body text body text body text body text body text body text body text body text body text body text body text body ",
      sender: placeholderUsers[1],
      sent_at: "12:53pm"
    },
    {
      subject: "subject1",
      body: "hi guys - hey hello whats up etc",
      sender: placeholderUsers[1],
      sent_at: "12:53pm"
    },
],
  channel_members: [placeholderUsers[0], placeholderUsers[1], placeholderUsers[2]]
}


export const mockSubjects = [
  {
    id: 123,
    title: "Beer chats"
  },
  {
    id: 12342,
    title: "Stuff about stuff"
  },
  {
    id: 1223342,
    title: "Subject line"
  },
  {
    id: 1142,
    title: "three Ms"
  },
  {
    id: 192342,
    title: "Business ideas"
  },
]