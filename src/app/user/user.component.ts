import { Component,Input,input,computed, Output,EventEmitter,output} from '@angular/core';
import { User } from './user.modal';


@Component({
  selector: 'app-user',
  standalone:false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({required:true}) user!:User
  @Input({required:true}) selected!: boolean
  @Output() select = new EventEmitter<string>()
  // select = output<string>()

  get imagePath(){
    return 'assets/users/' + this.user.avatar
  }

  onSelectUser(){
     this.select.emit(this.user.id)
  }
}
