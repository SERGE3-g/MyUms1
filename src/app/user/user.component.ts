import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../classes/User';

import { faPencilAlt, faTrash, faInfo } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html'

  //inputs: ['user:user-data']
})
export class UserComponent implements OnInit {

  //questo è un decorator che serve per dire che la proprietà user è un input e viene passato da un componente padre

  @Input('user-data') user: User = new User();                //{ id: 0, name: '', email: '', phone: '' };
  @Output('onDeleteUser') userDeleted = new EventEmitter();   //userDeleted = new EventEmitter<User>();
  @Output('onSelectUser') onSelectUser = new EventEmitter();  //onSelectUser = new EventEmitter<User>();

  faPen = faPencilAlt;
  faTrash = faTrash;
  faInfo = faInfo;

  constructor(private userService: UserService, private router: Router) {

  }

  ngOnInit() {
  }
  deleteUser() {

    this.userDeleted.emit(this.user);


  }
  showUserDetail() {
    this.router.navigateByUrl('/users/' + this.user?.id);
  }
  updateUser() {
    // this.route.navigateByUrl('/users/' + this.user?.id + '/edit');
    //this.route.navigate(['users', this.user?.id, 'edit']);
    //this.onSelectUser.emit(this.user);

  }

}
