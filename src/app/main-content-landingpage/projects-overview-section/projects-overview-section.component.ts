import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveLink: string;
  thumbnail: string;
  modalImage: string;
}

@Component({
  selector: 'app-projects-overview-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-overview-section.component.html',
  styleUrl: './projects-overview-section.component.scss'
})
export class ProjectsOverviewSectionComponent {
  selectedProject: Project | null = null;
  isModalOpen = false;

  projects: Project[] = [
    {
      id: 1,
      title: 'Join',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      thumbnail: './../../../assets/images/join.png', 
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      githubLink: 'https://github.com/yourusername/join',
      liveLink: 'https://your-live-link.com/join',
      modalImage: './../../../assets/images/join.png' 
    },
    {
      id: 2,
      title: 'El Pollo Loco',
      description: 'Jump and run game based on object-oriented programming.',
      thumbnail: './../../../assets/images/pollo loco.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/yourusername/el-pollo-loco',
      liveLink: 'https://your-live-link.com/el-pollo-loco',
      modalImage: './../../../assets/images/pollo loco.png' 
    },
    {
      id: 3,
      title: 'DA Bubble',
      description: 'Angular-based chat application with real-time messaging.',
      thumbnail: './../../../assets/images/da bubble.png',
      technologies: ['Angular', 'Firebase', 'TypeScript'],
      githubLink: 'https://github.com/yourusername/da-bubble',
      liveLink: 'https://your-live-link.com/da-bubble',
      modalImage: './../../../assets/images/da bubble.png'
    }
  ];

  openProjectModal(project: Project): void {
    this.selectedProject = project;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedProject = null;
  }

  nextProject(): void {
    if (this.selectedProject) {
      const currentIndex = this.projects.findIndex(p => p.id === this.selectedProject?.id);
      const nextIndex = (currentIndex + 1) % this.projects.length;
      this.selectedProject = this.projects[nextIndex];
    }
  }
}
