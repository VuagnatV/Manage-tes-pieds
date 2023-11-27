import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Task } from '../task/task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  firestore: AngularFirestore;

  constructor(firestore: AngularFirestore) {
    this.firestore = firestore
  }

  updateTask(taskId: string, updatedData: Partial<Task>): Promise<void> {
    const taskRef = this.firestore.collection<Task>('tasks').doc(taskId);
    return taskRef.update(updatedData);
  }

  addTask(taskData: Task): void {
    this.firestore.collection<Task>('tasks').add(taskData);
  }

}
