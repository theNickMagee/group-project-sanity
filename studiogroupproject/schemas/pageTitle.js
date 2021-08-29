export default {
    name: 'pageTitle',
    title: 'Group Info',
    type: 'document',
    fields: [
      {
        name: 'groupName',
        title: 'Group Name',
        type: 'string',
      },
      {
        name: 'groupDesc',
        title: 'Description',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'groupName',
          maxLength: 96,
        },
      },
    ],
    
    preview: {
      select: {
        title: 'groupName',
      },
    },
  }