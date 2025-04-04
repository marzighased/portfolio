import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


interface Project {
  id: number;
  titleKey: string;
  descriptionKey: string;
  technologies: string[];
  githubLink: string;
  liveLink: string;
  thumbnail: string;
  modalImage: string;
}

@Component({
  selector: 'app-projects-overview-section',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './projects-overview-section.component.html',
  styleUrl: './projects-overview-section.component.scss'
})
export class ProjectsOverviewSectionComponent {
  selectedProject: Project | null = null;
  isModalOpen = false;

  constructor(private translate: TranslateService) {}

  projects: Project[] = [
    {
      id: 1,
      titleKey: 'PROJECTS.JOIN.TITLE',
      descriptionKey: 'PROJECTS.JOIN.DESCRIPTION',
      thumbnail: './../../../assets/images/join.jpg', 
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      githubLink: 'https://github.com/marzighased?tab=repositories',
      liveLink: 'https://join.marzighased.de',
      modalImage: './../../../assets/images/join.jpg' 
    },
    {
      id: 2,
      titleKey: 'PROJECTS.POLLO.TITLE',
      descriptionKey: 'PROJECTS.POLLO.DESCRIPTION',
      thumbnail: './../../../assets/images/elpollo.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/marzighased/El-pollo-loco',
      liveLink: 'https://elpolloloco.marzighased.de',
      modalImage: './../../../assets/images/elpollo.jpg' 
    },
    {
      id: 3,
      titleKey: 'PROJECTS.POKEDEX.TITLE',
      descriptionKey: 'PROJECTS.Pokedex.DESCRIPTION',
      thumbnail: './../../../assets/images/pk.png',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      githubLink: 'https://github.com/marzighased?tab=repositories',
      liveLink: 'https://pokedex.marzighased.de',
      modalImage: './../../../assets/images/pk.png'
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
