import { Component } from '@angular/core';

@Component({
  selector: 'app-port-dash',
  templateUrl: './port-dash.component.html',  
  styleUrls: ['./port-dash.component.css']     
})
export class PortComponent {
  projectName: string = '';
  projectDescription: string = '';
  portfolio: { name: string; description: string }[] = [];
  selectedComponent: { key: string; title: string } | null = null;

  addProject() {
    if (this.projectName && this.projectDescription) {
      this.portfolio.push({ name: this.projectName, description: this.projectDescription });
      this.projectName = '';
      this.projectDescription = '';
    }
  }

  deleteProject(index: number) {
    this.portfolio.splice(index, 1);
  }

  selectProject(project: { name: string; description: string }) {
    alert(`Viewing details for project: ${project.name}`);
  }

  selectComponent(componentKey: string) {
    const components: { [key: string]: { key: string; title: string } } = {
      projectList: { key: 'projectList', title: 'Project List' },
      projectDetail: { key: 'projectDetail', title: 'Project Detail' },
      resourceManagement: { key: 'resourceManagement', title: 'Resource Management' },
      timeline: { key: 'timeline', title: 'Timeline' },
      budgetManagement: { key: 'budgetManagement', title: 'Budget Management' },
      teamManagement: { key: 'teamManagement', title: 'Team Management' },
      reports: { key: 'reports', title: 'Reports' },
      taskTracking: { key: 'taskTracking', title: 'Task Tracking' },
      userProfile: { key: 'userProfile', title: 'User Profile' },
      settings: { key: 'settings', title: 'Settings' },
      notifications: { key: 'notifications', title: 'Notifications' },
      adminPanel: { key: 'adminPanel', title: 'Admin Panel' },
      portfolioOverview: { key: 'portfolioOverview', title: 'Portfolio Overview' },
    };

    if (components[componentKey]) {
      this.selectedComponent = components[componentKey];
    } else {
      this.selectedComponent = null; 
    }
  }
}
