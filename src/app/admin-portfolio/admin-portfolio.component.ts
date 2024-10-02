import { Component } from '@angular/core';
import { Router } from '@angular/router'; 


interface Project {
  id: number;
  name: string;
  description: string;
  budget: number;
  deadline: Date;
}

interface Portfolio {
  id: number;
  name: string;
  description: string;
  budget: number;
  deadline: Date | null;
  projects: Project[];
  performance: number;
}

@Component({
  selector: 'app-admin-portfolio',
  templateUrl: './admin-portfolio.component.html',
  styleUrls: ['./admin-portfolio.component.css']
})
export class AdminPortfolioComponent {
  selectedAdminComponent: string = 'adminDashboard'; 
  portfolios: Portfolio[] = []; 
  totalUsers: number = 100; 
  totalBudget: number = 1000000; 
  activePortfolios: number = 2; 
  completedProjects: number = 5; 
  newPortfolio: Portfolio = { id: 0, name: '', description: '', budget: 0, deadline: null, projects: [], performance: 0 }; // Initialize with type
  selectedPortfolio: Portfolio | null = null; 
  activeProjects: number = 10; 
  totalResourcesAllocated: number = 50; 

  constructor(private router: Router) {
    this.portfolios = [
      {
        id: 1,
        name: 'Portfolio 1',
        description: 'This is the description for Portfolio 1',
        budget: 200000,
        deadline: new Date('2024-12-31'),
        projects: [
          { id: 1, name: 'Project 1', description: 'Project 1 Description', budget: 50000, deadline: new Date('2024-11-30') },
          { id: 2, name: 'Project 2', description: 'Project 2 Description', budget: 60000, deadline: new Date('2024-12-15') }
        ],
        performance: 85
      },
      {
        id: 2,
        name: 'Portfolio 2',
        description: 'This is the description for Portfolio 2',
        budget: 300000,
        deadline: new Date('2025-06-30'),
        projects: [],
        performance: 90
      }
    ];
  }

  selectAdminComponent(component: string) {
    this.selectedAdminComponent = component;
  }

  addPortfolio() {
    if (this.newPortfolio.name && this.newPortfolio.description) {
      const newId = this.portfolios.length + 1;
      this.portfolios.push({
        id: newId,
        name: this.newPortfolio.name,
        description: this.newPortfolio.description,
        budget: 0,
        deadline: null,
        projects: [],
        performance: 0
      });
      this.newPortfolio = { id: 0, name: '', description: '', budget: 0, deadline: null, projects: [], performance: 0 }; // Reset the new portfolio
      this.selectAdminComponent('adminPortfolioList');
    }
  }

  viewPortfolioDetails(id: number) {
    this.selectedPortfolio = this.portfolios.find(p => p.id === id) || null;
    this.selectAdminComponent('adminPortfolioDetails');
  }

  deletePortfolio(id: number) {
    this.portfolios = this.portfolios.filter(p => p.id !== id);
    this.selectAdminComponent('adminPortfolioList');
  }

  
  editPortfolio(id: number) {
    this.selectedPortfolio = this.portfolios.find(p => p.id === id) || null;
    
    
    if (this.selectedPortfolio) {
      this.newPortfolio = { ...this.selectedPortfolio }; 
      this.selectAdminComponent('adminInvestmentPortfolioManagement');
    }
  }

  
  viewProjectDetails(id: number) {
    const project = this.selectedPortfolio?.projects.find((p: Project) => p.id === id); // Explicitly define type for p
    if (project) {
      
      console.log('Viewing Project:', project);
      
    }
  }

  logout() {
    
    this.router.navigate(['/login']);
  }
}
