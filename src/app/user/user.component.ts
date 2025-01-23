import { Component,Input,input,computed, Output,EventEmitter,output} from '@angular/core';
import { User } from './user.modal';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone:true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent]
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