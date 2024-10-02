import { Component } from '@angular/core';

interface Project {
  name: string;
  description: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  portfolio: Project[] = []; 
  projectName: string = ''; 
  projectDescription: string = ''; 
  selectedComponent: { title: string; key: string } | null = null; 

  constructor() {
    
    this.portfolio = [
      { name: 'Project 1', description: 'Description of Project 1' },
      { name: 'Project 2', description: 'Description of Project 2' }
    ];
  }

  
  selectComponent(key: string) {
    const components: { [key: string]: { title: string; key: string } } = {
      projectList: { title: 'Project List', key: 'projectList' },
      projectDetail: { title: 'Project Detail', key: 'projectDetail' },
      resourceManagement: { title: 'Resource Management', key: 'resourceManagement' },
      timeline: { title: 'Timeline', key: 'timeline' },
      budgetManagement: { title: 'Budget Management', key: 'budgetManagement' },
      teamManagement: { title: 'Team Management', key: 'teamManagement' },
      reports: { title: 'Reports', key: 'reports' },
      taskTracking: { title: 'Task Tracking', key: 'taskTracking' },
      userProfile: { title: 'User Profile', key: 'userProfile' },
      settings: { title: 'Settings', key: 'settings' },
      notifications: { title: 'Notifications', key: 'notifications' },
      adminPanel: { title: 'Admin Panel', key: 'adminPanel' },
      portfolioOverview: { title: 'Portfolio Overview', key: 'portfolioOverview' }
    };

    this.selectedComponent = components[key] || null; 
  }

  
  addProject() {
    if (this.projectName && this.projectDescription) {
      this.portfolio.push({ name: this.projectName, description: this.projectDescription });
      this.projectName = ''; 
      this.projectDescription = ''; 
    }
  }

  
  deleteProject(index: number) {
    if (index >= 0 && index < this.portfolio.length) {
      this.portfolio.splice(index, 1); 
    }
  }

  
  selectProject(project: Project) {
    console.log('Selected project:', project);
    
  }
}
