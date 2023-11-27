import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/task/task';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogComponent, TaskDialogResult } from 'src/app/task-dialog/task-dialog.component';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { firebaseConfig } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { TaskService } from 'src/app/services/task.service';
import { AuthPageComponent } from '../auth-page/auth-page.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  title = 'TaskMaster';



  todo!: Task[];
  inProgress!: Task[];
  done!: Task[];

  constructor(private dialog: MatDialog, private db: AngularFirestore, private taskService: TaskService) {

  }

  ngOnInit(): void {
    this.db.collection<Task>('tasks', ref => ref.where('status', '==', 'done')).valueChanges({ idField: 'id' }).subscribe(tasks => {
      console.log(tasks)
      this.done = tasks
    })
    this.db.collection<Task>('tasks', ref => ref.where('status', '==', 'inProgress')).valueChanges({ idField: 'id' }).subscribe(tasks => {
      console.log(tasks)
      this.inProgress = tasks
    })
    this.db.collection<Task>('tasks', ref => ref.where('status', '==', 'todo')).valueChanges({ idField: 'id' }).subscribe(tasks => {
      console.log(tasks)
      this.todo = tasks
    })
  }

  newTask(): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '270px',
      data: {
        task: {},
      },
    });
    dialogRef
      .afterClosed()
      .subscribe((result: TaskDialogResult | undefined) => {
        if (!result) {
          return;
        }
        //this.todo.push(result.task);
        this.taskService.addTask(result.task)
      });
  }

  editTask(list: 'done' | 'todo' | 'inProgress', task: Task): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '270px',
      data: {
        task,
        enableDelete: true,
      },
    });
    dialogRef.afterClosed().subscribe((result: TaskDialogResult | undefined) => {
      if (!result) {
        return;
      }
      const dataList = this[list];
      const taskIndex = dataList.indexOf(task);
      if (result.delete) {
        //dataList.splice(taskIndex, 1);
        this.db.collection<Task>('tasks').doc(task.id).delete();
      } else {
        //dataList[taskIndex] = task;
        this.db.collection<Task>('tasks').doc(task.id).update(task)
      }
    });
  }

  drop(event: CdkDragDrop<Task[]>): void {
    if (event.previousContainer === event.container) {
      return;
    }
    if (!event.container.data || !event.previousContainer.data) {
      return;
    }
    const item = event.previousContainer.data[event.previousIndex];

    item.status = event.container.id
    console.log(item.id)
    this.db.collection<Task>('tasks').doc(item.id).update(item)
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }

}
