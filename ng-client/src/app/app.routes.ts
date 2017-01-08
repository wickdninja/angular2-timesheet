import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login';
import {NavigationComponent} from './navigation';
import {EmployeeListComponent} from './employee';
import {ProjectListComponent} from './project';
import {TimesheetListComponent} from './timesheet';

const appRoutes: Routes = [
  {
    path: 'home',
    component: NavigationComponent,
    children: [
      {path: 'projects', component: ProjectListComponent, pathMatch: 'full'},
      {path: 'employees', component: EmployeeListComponent, pathMatch: 'full'},
      {path: 'timesheets', component: TimesheetListComponent, pathMatch: 'full'}
    ]
  },
  {path: 'login', component: LoginComponent},
  {
    path: '',
    redirectTo: '/home/projects',
    pathMatch: 'full'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
