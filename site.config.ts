import { siteConfig } from './lib/site-config'

export default siteConfig({
  /* (required)
    The site's root Notion page
  */
  rootNotionPageId: 'f9b740741d2c4e4bbc837800cc3a81b3',

  /* (optional)
    if you want to restrict pages to a single notion workspace
    (this should be a Notion ID; see the docs for how to extract this) 
  */
  rootNotionSpaceId: null,

  /* (required)
    Basic site info
  */
  name: 'Shingeki no Craft Official Site & Wiki',
  domain: 'sncraft.fanfus.com',
  author: 'Fanfus Projects',

  /* (optional)
    Open graph metadata
  */
  description: '\
Shingeki no Craft Official Site and Wiki.\n\
An Attack on Titan Minecraft Datapack.\n\
Sncraft by Fanfus Projects',

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
  curseforge: 'https://www.curseforge.com/minecraft/customization/shingeki-no-craft',
  planetminecraft: 'https://www.planetminecraft.com/data-pack/shingeki-no-craft-2/',

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
    '/149719398400': 'f93cee3b32b440068d3d1059a351a9f3',
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
      title: 'Get Started',
      pageId: '606e973b50894bfeb44a9da19033133e'
    },
    {
      title: 'Wiki',
      pageId: '03427235b5bc4055aefb5347895e562b'
    },
    {
      title: 'Download',
      pageId: '51c9a58fa9eb427fa8e703c0fb6fa362'
    },
    /* {
      title: 'FAQ',
      pageId: 'd1becce18ab24a59b020cd780f5634ff'
    },
    {
      title: 'Discord',
      url: 'https://discord.gg/zf6g5KQ6H4'
    },
    {
      title: 'About us',
      pageId: 'da705a355d6f49c18078b6cd948bce4e'
    },
    {
      title: 'Support us',
      url: 'https://www.patreon.com/Fanfo'
    } */
  ]
})
