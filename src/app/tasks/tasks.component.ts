import { Component,Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import {dummyTasks} from '../dummy-tasks'
import { NewTaskComponent } from './new-task/new-task.component';
import {type NewTaskData } from './task/task.modal';
@Component({
  selector: 'app-tasks',
  standalone:true,
  imports: [TaskComponent,NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) userId!:string;
 @Input({required:true}) name!:string;
 isAddingTask:boolean = false;
 
 tasks= dummyTasks

 get selectedUserTasks(){
   return this.tasks.filter((task)=> task.userId === this.userId)
 }
 
 onCompleteTask(id: string){
 
 }

 onStartAddTask(){
     this.isAddingTask = true
 }

 onCancelAddTask(){
  this.isAddingTask = false
 }

 onAddTask(taskData:NewTaskData){
    
     this.isAddingTask = false
 }
}

