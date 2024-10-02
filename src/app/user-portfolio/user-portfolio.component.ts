import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Project {
  id: number;
  name: string;
  budget: number;
  deadline: Date;
  description: string;
  status: string;
  startDate: Date;
}

interface Resource {
  name: string;
  projectName: string;
}

@Component({
  selector: 'app-user-portfolio',
  templateUrl: './user-portfolio.component.html',
  styleUrls: ['./user-portfolio.component.css']
})
export class UserPortfolioComponent {
  selectedUserComponent: string = 'userDashboard'; 
  userName: string = 'User'; 
  projects: Project[] = []; 
  selectedProject: Project | null = null; 
  resources: Resource[] = []; 

  constructor(private router: Router) {
    
    this.projects = [
      {
        id: 1,
        name: 'Project Alpha',
        budget: 50000,
        deadline: new Date('2024-12-31'),
        description: 'Description for Project Alpha',
        status: 'In Progress',
        startDate: new Date('2024-01-01')
      },
      {
        id: 2,
        name: 'Project Beta',
        budget: 75000,
        deadline: new Date('2025-06-30'),
        description: 'Description for Project Beta',
        status: 'Completed',
        startDate: new Date('2023-05-15')
      }
    ];

    
    this.resources = [
      { name: 'Resource A', projectName: 'Project Alpha' },
      { name: 'Resource B', projectName: 'Project Beta' }
    ];
  }

  selectUserComponent(component: string) {
    this.selectedUserComponent = component;
    if (component === 'userProjectDetails') {
      this.selectedProject = null; 
    }
  }

  viewProjectDetails(project: Project) {
    this.selectedProject = project; 
    this.selectUserComponent('userProjectDetails'); 
  }

  deleteProject(index: number) {
    this.projects.splice(index, 1); 
  }

  getTotalBudget(): number {
    return this.projects.reduce((total, project) => total + project.budget, 0); 
  }

  calculateUtilization(): number {
    const totalAllocated = this.getTotalBudget(); 
    const totalUtilized = totalAllocated * 0.75; 
    return totalUtilized / totalAllocated; 
  }

  logout() {
    
    this.router.navigate(['/login']); 
  }
}
