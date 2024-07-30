import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NgFor, NgIf } from '@angular/common';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NgFor, NewTaskComponent, NgIf],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  // @Input() name: string | undefined;

  @Input({ required: true }) userId!: string;

  isAddingTask = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  // onCancelAddTask() {
  onCloseAddTask() {
    this.isAddingTask = false;
  }

  // onAddTaskt(taskData: NewTaskData) {
  //   this.isAddingTask = false;
  // }
}
