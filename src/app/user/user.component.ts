import {
  Component,
  Input,
  input,
  computed,
  Output,
  EventEmitter,
  output,
} from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent],
})
export class UserComponent {
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input() name!: string;
  @Input({ required: true }) user!: User;

  @Input({ required: true }) selected!: boolean;

  @Output() select = new EventEmitter<string>();
  // select = output<string>(); // doesn't not create any kind of signal

  // *** signals ***
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => {
  //   return "../../assets/users/" + this.avatar();
  // })

  get imagePath() {
    // return "../../assets/users/" + this.avatar;
    return '../../assets/users/' + this.user.avatar;
  }

  onSelectedUser() {
    // this.select.emit(this.id);
    this.select.emit(this.user.id);
  }
}
