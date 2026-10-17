import type { SkillGroup } from './types'

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', icon: 'devicon-python-plain' },
      { name: 'Java', icon: 'devicon-java-plain' },
      { name: 'C', icon: 'devicon-c-plain' },
      { name: 'Go', icon: 'devicon-go-plain' },
      { name: 'SQL' },
      { name: 'Racket' },
    ],
  },
  {
    title: 'Web',
    skills: [
      { name: 'HTML', icon: 'devicon-html5-plain' },
      { name: 'CSS', icon: 'devicon-css3-plain' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain' },
      { name: 'React', icon: 'devicon-react-original' },
      { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'Terraform', icon: 'devicon-terraform-plain' },
      { name: 'Ansible', icon: 'devicon-ansible-plain' },
      { name: 'OpenStack' },
      { name: 'Git', icon: 'devicon-git-plain' },
      { name: 'Linux', icon: 'devicon-linux-plain' },
    ],
  },
  {
    title: 'Power Platform',
    skills: [
      { name: 'Power Apps' },
      { name: 'Power Automate' },
      { name: 'SharePoint' },
    ],
  },
]