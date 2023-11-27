import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskComponent } from './task/task.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { firebaseConfig } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { MatSelectModule } from '@angular/material/select';
import { AuthPageComponent } from './components/auth-page/auth-page.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ButtonModule } from 'primeng/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'





@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskDialogComponent,
    AuthPageComponent,
    DashboardComponent,
  ],
  imports: [
    MatIconModule,
    MatProgressSpinnerModule,
    ButtonModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    DragDropModule,
    MatToolbarModule,
    MatCardModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    AngularFireAuthModule,
    provideFirebaseApp(() => initializeApp({ "projectId": "taskmaster-1e198", "appId": "1:557620631532:web:ec76fa3ab3504c641b52c9", "storageBucket": "taskmaster-1e198.appspot.com", "apiKey": "AIzaSyDBdV6IS5-Xl4tyeaz__ulvDrxRUmCbxzc", "authDomain": "taskmaster-1e198.firebaseapp.com", "messagingSenderId": "557620631532", "measurementId": "G-CDBBER2E8B" })),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage()),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    MatSelectModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
