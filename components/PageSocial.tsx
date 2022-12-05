import type * as React from 'react'
import cs from 'classnames'
import 
{ /* Font Awesome Icons */
  FaDiscord,
  //FaMastodon,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import 
{ /* Simple Icons */
  SiCurseforge,
  SiModrinth,
} from "react-icons/si";

import * as config from '@/lib/config'

import styles from './PageSocial.module.css'

interface SocialLink {
  name: string
  title: string
  icon: React.ReactNode
  href?: string
}

const socialLinks: SocialLink[] = [
  config.discord && {
    name: 'discord',
    href: `${config.discord_invite}`, // Invite URL of the Discord server
    title: `${config.discord} on Discord`, // Name of the Discord server
    icon: (<FaDiscord />)
  },

  config.youtube && {
    name: 'youtube',
    href: `https://www.youtube.com/${config.youtube}`,
    title: `YouTube ${config.youtube}`,
    icon: (<FaYoutube />)
  },

  config.twitter && {
    name: 'twitter',
    href: `https://twitter.com/${config.twitter}`,
    title: `Twitter @${config.twitter}`,
    icon: (<FaTwitter />)
  },

  config.github && {
    name: 'github',
    href: `https://github.com/${config.github}`,
    title: `GitHub @${config.github}`,
    icon: (<FaGithub />)
  },

  config.linkedin && {
    name: 'linkedin',
    href: `https://www.linkedin.com/in/${config.linkedin}`,
    title: `LinkedIn ${config.author}`,
    icon: (<FaLinkedin />)
  },

  config.curseforge && {
    name: 'curseforge',
    href: `${config.curseforge}`,
    title: `Shingeki no Craft on CurseForge`,
    icon: (<SiCurseforge />)
  },

  config.planetminecraft && {
    name: 'planetminecraft',
    href: `${config.planetminecraft}`,
    title: `Shingeki no Craft on planetminecraft`,
    icon: (
<svg
  viewBox="0 0 64 64"
  xmlns="http://www.w3.org/2000/svg">
  <g>
    <path
      d="m 19,38 h 9 v 3 h -9 z" />
    <path
      d="m 23,14 h 1 v 2 h -1 z" />
    <path
      d="m 24,8 h 3 v 2 h -3 z" />
    <path
      d="m 24,18 v -2 h 1 v 1 h 1 v 1 z" />
    <path
      d="M 14,13 V 8 h 8 v 2 h -1 v 1 h 1 v 2 z" />
    <path
      d="M 14,22 V 13 H 9 v 9 H 5 v 13 h 4 v 1 h 5 v -2 h -2 v -1 h -2 v -3 h 1 v -1 h 3 v 1 h 1 v 1 h 1 v -4 h 2 v -5 z" />
    <path
      d="m 19,45 v -4 h 15 v 4 z" />
    <path
      d="m 5,22 v -4 h 4 v 4 z" />
    <path
      d="M 9,13 V 8 h 5 v 5 z" />
    <path
      d="M 19,8 V 4 h 9 V 6 H 27 V 8 H 24 V 7 h -2 v 1 z" />
    <path
      d="m 9,37 v -1 h 5 v 1 h 2 v 2 h 1 v 1 h 2 v 1 h -3 v -1 h -1 v -1 h -3 v -2 z" />
    <path
      d="M 39,11 V 8 h 7 v 9 h -1 v -4 h -3 v -2 z" />
    <path
      d="m 49,18 h 2 v 18 h -3 v -4 h -2 v -5 h 3 z" />
    <path
      d="M 37,50 V 45 H 19 v 3 h 4 v 2 z" />
    <path
      d="M 9,8 V 4 H 19 V 8 H 9 V 18 H 5 V 8 Z" />
    <path
      d="M 37,8 V 4 h 9 v 4 h 5 v 10 h 5 V 36 H 51 V 18 H 46 V 8 Z" />
    <path
      d="m 26,51 v -1 h 8 v 1 h -1 v 3 h -1 v 1 h -3 v -2 h -2 v -2 z" />
    <path
      d="m 51,38 v -2 h -2 v 1 h 1 v 1 z" />
    <path
      d="m 14,22 v -9 h 9 v 9 z" />
    <path
      fill="none" strokeWidth="5"
      d="m 2.4949531,20.973545 -0.1877353,20.190716 1.0080021,0.04577 0.029325,0.999413 0.993155,0.01448 0.00663,0.993156 2.0324463,0.02969 0.018405,7.181292 1.0103337,-0.02233 0.026995,1.026038 0.9908238,0.01681 0.018773,1.030702 2.0285203,-0.0043 0.02895,2.02852 1.018187,0.0019 v 1.020149 l 1.009964,0.0062 0.01448,1.01426 1.00567,0.02306 v 1.003707 l 7.163624,0.02896 0.02663,2.026189 0.999782,0.01644 0.01014,1.009966 1.01426,0.01914 0.02269,1.001376 16.342516,-0.01252 0.03166,-0.997818 0.999044,-0.02896 0.01644,-0.999781 1.014629,-0.01014 0.02663,-2.046557 6.095007,-0.0024 0.04185,-1.011929 0.997082,-0.0019 0.01914,-1.01426 1.015853,-0.0082 0.02074,-1.020519 1.024445,-0.0043 0.01055,-2.050851 3.057628,-0.01681 0.0059,-0.993155 1.001744,-0.01448 0.03092,-1.026776 0.979045,-0.0043 0.03092,-7.148408 2.005452,-0.01055 0.02503,-1.016223 1.026407,-0.03129 -0.0043,-0.995486 1.034628,-0.03951 -0.01645,-20.44422 -5.077189,0.0039 -0.03522,-10.251436 -5.116284,0.01877 0.01215,-4.0770338 -9.193003,-0.014847 -0.03325,-4.1145868 -18.407847,0.012516 -0.03097,4.0753911 -10.247841,0.015359 0.0228,4.0779945 -4.0919409,0.0096 -0.1095941,10.352715 z" />
  </g>
</svg>
      )
  },

  config.newsletter && {
    name: 'newsletter',
    href: `${config.newsletter}`,
    title: `Newsletter ${config.author}`,
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M12 .64L8.23 3H5V5L2.97 6.29C2.39 6.64 2 7.27 2 8V18C2 19.11 2.9 20 4 20H20C21.11 20 22 19.11 22 18V8C22 7.27 21.61 6.64 21.03 6.29L19 5V3H15.77M7 5H17V9.88L12 13L7 9.88M8 6V7.5H16V6M5 7.38V8.63L4 8M19 7.38L20 8L19 8.63M8 8.5V10H16V8.5Z' />
      </svg>
    )
  },

].filter(Boolean)

export function PageSocial() {
  return (
    <div className={styles.pageSocial}>
      {socialLinks.map((action) => (
        <a
          className={cs(styles.action, styles[action.name])}
          href={action.href}
          key={action.name}
          title={action.title}
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className={styles.actionBg}>
            <div className={styles.actionBgPane} />
          </div>

          <div className={styles.actionBg}>{action.icon}</div>
        </a>
      ))}
    </div>
  )
}
