import { siteConfig } from './lib/site-config'

export default siteConfig({
  /* (required)
    The site's root Notion page
  */
  rootNotionPageId: '1553c3a7c441805d8954e4dbb7bed2d6',

  /* (optional)
    if you want to restrict pages to a single notion workspace
    (this should be a Notion ID; see the docs for how to extract this) 
  */
  rootNotionSpaceId: null,

  /* (required)
    Basic site info
  */
  name: 'Fanfus Projects',
  domain: 'fanfus.com',
  author: 'Fanfus Projects',

  /* (optional)
    Crawlable by Google and other robots, required if you want Google to index the website, defaults to false.
  */
  indexable: true,

  /* (optional)
    Open graph metadata
  */
  description: '\
Welcome to Fanfus Projects.\n\
Discover more about us.',

  /* (optional)
    Social usernames
  */
  discord: 'Shingeki no Craft Official Server',
  discord_invite: 'https://discord.gg/zf6g5KQ6H4',
  youtube: '@FanfoYT', /* Optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX` */
  twitter: 'FanfoArtss',
  // mastodon: '#', /* Optional mastodon profile URL, provides link verification */
  // github: 'nijamaDev',
  // linkedin: 'nijamaDev',
  // newsletter: '#', /* Optional newsletter URL */
  // modrinth: 'https://modrinth.com/datapack/shingeki-no-craft/versions',
  //curseforge: 'https://www.curseforge.com/minecraft/customization/shingeki-no-craft',
  // planetminecraft: 'https://www.planetminecraft.com/data-pack/shingeki-no-craft-2/',

  /* (optional)
    Default notion icon and cover images for site-wide consistency.
    Page-specific values will override these site-wide defaults.
  */
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  /* (optional)
    Whether or not to enable support for LQIP preview images.
  */
  isPreviewImageSupportEnabled: false,

  /* (optional)
    Whether or not redis is enabled for caching generated preview images.
    NOTE: If you enable redis, you need to set the `REDIS_HOST` 
    and `REDIS_PASSWORD` environment variables.
    See the readme for more info.
  */
  isRedisEnabled: false,

  /* (optional)
    Map of notion page IDs to URL paths.
    Any pages defined here will override their default URL paths.
    Example:
  */
  pageUrlOverrides: {
    '/aiko': '1553c3a7c44181f0b1c2c93c263e4b37',
    '/coral': '1553c3a7c4418153975bc908777e34e9',

    /* '/149719398400': 'f93cee3b32b440068d3d1059a351a9f3',
    '/did-you-know': '13e6ae6a2e1f476d8a2b3a5a5346a4e4',
    '/next': '72e247bea8a14bbba1a2cb3b171fe7c1',
    '/gsod':'6866cb16c3194bc0843f34b410ae4a3b' */
    // '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  },
  // pageUrlOverrides: null,
  
  /* 
    Whether to use the default notion navigation style
    or a custom one with links to important pages.
    To use `navigationLinks`, set `navigationStyle` to `custom`.
  */
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: '⭐ Home',
      pageId: '1553c3a7c441805d8954e4dbb7bed2d6'
    },
    {
      title: '👥 About Us',
      pageId: '1553c3a7c4418163bb48e8bbc44c3821'
    },
    /*{
      title: '📚 Wiki',
      pageId: '03427235b5bc4055aefb5347895e562b'
    },
    {
      title: '❤️ Download',
      pageId: '51c9a58fa9eb427fa8e703c0fb6fa362'
    }, */
    /* {
      title: '🌟 Other Projects ↗',
      url: 'https://fanfus.com?utm_source=sncraft'
    }, */
    /* {
      title: 'FAQ',
      pageId: 'd1becce18ab24a59b020cd780f5634ff'
    },
    {
      title: 'Discord',
      url: 'https://discord.gg/zf6g5KQ6H4'
    },
    {
      title: 'Support us',
      url: 'https://www.patreon.com/Fanfo'
    } */
  ]
})
