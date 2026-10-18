import type { TimelineEntry } from './types'

export const experience: TimelineEntry[] = [
  {
    title: 'Digital Solutions Developer Co-op',
    organization: 'Department of National Defence and Canadian Armed Forces (DND)',
    dates: 'Sept 2026 - Present',
    bullets: [
      'Developed client-facing web applications using Power Apps to digitize internal workflows',
      'Engineered automated backend workflows with Power Automate to streamline client approvals',
      'Designed structured SharePoint lists and schemas, enforcing secure role-based access',
      'Gathered technical requirements in an Agile team to deliver prototypes, testing, and documentation',
    ],
  },
  {
    title: 'Cloud IT Technician',
    organization: 'Shared Services Canada (SSC)',
    dates: 'May 2025 - Dec 2025',
    bullets: [
      'Configured 4 OpenStack VMs and a load balancer routing SSH traffic across backend nodes',
      'Automated virtual infrastructure deployments using Terraform and Ansible, establishing Infrastructure as Code (IaC) workflows in a private cloud setting',
      'Administered Linux systems in Red Hat and Ubuntu environments, performing system configuration, troubleshooting, and maintenance tasks',
      'Maintained private cloud health and system reliability utilizing Git workflows and internal DevOps tooling',
    ],
  },
]