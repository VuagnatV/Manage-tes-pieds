import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthPageComponent } from './components/auth-page/auth-page.component';

const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'auth', component: AuthPageComponent },
    // Add more routes for other pages
];

@NgModule({
    imports: [RouterModule.forRoot(routes), BrowserModule],
    exports: [RouterModule]
})
export class AppRoutingModule { }