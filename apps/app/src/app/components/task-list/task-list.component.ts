import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  styleUrls: ['./task-list.component.scss'],
  templateUrl: './task-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListComponent {
  readonly form: FormGroup = new FormGroup({ name: new FormControl(), priority: new FormControl() });

  constructor(private _taskService: TaskService) {
  }

  onFormSubmitted(form: FormGroup): void {
  }
}
