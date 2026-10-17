import type { Project } from './types'

export const projects: Project[] = [
  {
    title: 'Library Management Database',
    description:
      'Library management system with a desktop GUI and a relational database backend.',
    tags: ['Python', 'SQLite', 'Tkinter'],
    href: 'https://github.com/arshiyamoallem/Library-Management-Database',
    icon: 'database',
  },
  {
    title: 'CmdConnect',
    description: 'Console-based social media app.',
    tags: ['Python', 'CLI'],
    href: 'https://github.com/arshiyamoallem/social-media-app',
    icon: 'users',
  },
  {
    title: 'Video Game Hub',
    description: 'Console-based game launcher.',
    tags: ['Python', 'CLI'],
    href: 'https://github.com/arshiyamoallem/video-game-hub',
    icon: 'gamepad',
  },
  {
    title: 'Tic Tac Toe',
    description: 'Tic Tac Toe game with a graphical interface.',
    tags: ['Python', 'Tkinter'],
    href: 'https://github.com/arshiyamoallem/TicTacToe',
    icon: 'gamepad',
  },
]