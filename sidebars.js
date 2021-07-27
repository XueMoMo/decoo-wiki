/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */

  mySidebar: [
    {
      type: 'doc',
      id: 'introduction',
      label: 'Introduction'
    },

    {
      type: 'category',
      label: 'General',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'general/gettingStarted',
          label: 'Getting Started'
        },
        {
          type: 'doc',
          id: 'general/architecture',
          label: 'Decoo Architecture'
        },
        // {
        //   type: 'doc',
        //   id: 'general/apiKeys',
        //   label: 'API Keys'
        // },
        {
          type: 'doc',
          id: 'general/pinningWithApi',
          label: 'Pinning with API'
        },
        {
          type: 'doc',
          id: 'general/retrievingFiles',
          label: 'Retrieving Files'
        },
        {
          type: 'doc',
          id: 'general/faq',
          label: 'FAQ'
        },
      ]
    },
    {
      type: 'category',
      label: 'Endpoint API',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'pinning/pinFile',
          label: 'pinFile'
        },
        {
          type: 'doc',
          id: 'pinning/pinByHash',
          label: 'pinByHash'
        }
      ]
    },
    {
      type: 'category',
      label: 'Decoo Cloud API',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'pinning/pinJobs',
          label: 'pinJobs'
        },
        {
          type: 'doc',
          id: 'pinning/pinList',
          label: 'pinList'
        },
      ]
    },
    {
      type: 'doc',
      id: 'pinningServicesApi',
      label: 'IPFS Pinning Service API'
    }

  ]

};
