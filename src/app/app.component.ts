import { Component, OnInit } from '@angular/core';
import { Task } from './task/task';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogComponent, TaskDialogResult } from './task-dialog/task-dialog.component';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { firebaseConfig } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { TaskService } from './services/task.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthPageComponent } from './components/auth-page/auth-page.component';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user$: Observable<firebase.default.User | null>;

  constructor(private db: AngularFirestore, private taskService: TaskService, private auth: AngularFireAuth, private router: Router) {
    this.user$ = auth.authState;
    console.log(this.user$)
    this.auth.authState.subscribe(user => {
      console.log(user)
      if (user) {
        this.router.navigate(['']);
      } else {
        this.router.navigate(['auth']);
      }
    });
  }
  ngOnInit(): void {
    this.user$.subscribe(data => {
      console.log(data)
    })
  }

  logout() {
    this.auth.signOut()
  }

}
