import { Component } from '@angular/core';

interface Project {
  name: string;
  description: string;
  budget: number;
  deadline: Date;
  status: string;
}

interface UserProfile {
  username: string;
  email: string;
}

interface Notification {
  message: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  selectedComponent: string = 'projectList'; 
  portfolio: Project[] = []; 
  selectedProject: Project | null = null; 
  totalBudget: number = 50000; 
  budgetSpent: number = 20000; 
  budgetRemaining: number = this.totalBudget - this.budgetSpent; 
  newProject: Project = { name: '', description: '', budget: 0, deadline: new Date(), status: 'Pending' };
  teamMembers = [{ name: 'Alice', role: 'Developer' }, { name: 'Bob', role: 'Designer' }]; 
  notifications: Notification[] = [{ message: 'Project deadline approaching!' }, { message: 'New project added.' }]; 
  userProfile: UserProfile = { username: 'user123', email: 'user@example.com' }; 

  constructor() {
    
    this.portfolio = [
      {
        name: 'Project A',
        description: 'Description of Project A',
        budget: 10000,
        deadline: new Date('2024-12-31'),
        status: 'In Progress'
      },
      {
        name: 'Project B',
        description: 'Description of Project B',
        budget: 20000,
        deadline: new Date('2025-01-15'),
        status: 'Completed'
      }
    ];
  }

  
  selectComponent(component: string): void {
    this.selectedComponent = component;
    if (component === 'projectDetail') {
      this.selectedProject = null; 
    }
  }

  
  selectProject(project: Project): void {
    this.selectedProject = project;
    this.selectComponent('projectDetail'); 
  }

  
  addProject(): void {
    if (this.newProject.name && this.newProject.description && this.newProject.budget > 0) {
      this.portfolio.push({ ...this.newProject });
      this.notifications.push({ message: `New project "${this.newProject.name}" added.` });
      this.newProject = { name: '', description: '', budget: 0, deadline: new Date(), status: 'Pending' }; // Reset form
    } else {
      alert('Please fill in all the project details.');
    }
  }

  // Method to delete a project from the portfolio
  deleteProject(index: number): void {
    if (confirm('Are you sure you want to delete this project?')) {
      const deletedProject = this.portfolio[index].name;
      this.portfolio.splice(index, 1);
      this.notifications.push({ message: `Project "${deletedProject}" deleted.` });
    }
  }

  // Method to update the status of a project
  updateProjectStatus(project: Project, status: string): void {
    project.status = status;
    this.notifications.push({ message: `Project "${project.name}" status updated to "${status}".` });
  }

  // Expanded method to manage user profile
  updateUserProfile(updatedProfile: UserProfile): void {
    this.userProfile = { ...updatedProfile };
    this.notifications.push({ message: 'User profile updated.' });
  }

  // Example method to view notifications (could be expanded)
  viewNotifications(): Notification[] {
    return this.notifications;
  }

  // Method to clear all notifications
  clearNotifications(): void {
    if (confirm('Are you sure you want to clear all notifications?')) {
      this.notifications = [];
    }
  }
}
