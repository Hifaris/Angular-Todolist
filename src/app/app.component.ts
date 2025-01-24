import { Component } from '@angular/core';
// import {NgFor,NgIf} from '@angular/common'
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone:false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?:string;

  get selectedUser(){
    return this.users.find((user)=> user.id === this.selectedUserId );
  }
  // ค่า selectedUser ถูกคำนวณใหม่เสมอเมื่อ selectedUserId เปลี่ยน 
  //  get มีค่าอ้างอิงตาม selectedUserId
  
onSelectUser(id:string){
    this.selectedUserId = id

  }
}