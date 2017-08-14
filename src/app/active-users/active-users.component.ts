import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Http, Headers, Response } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { Login } from './../login/Login';
import { credentials } from './../login/credentials';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
private login: Login;
private accessToken: string;
data:any;


  constructor(private router: Router, private http: Http) { 
        this.login = new Login();

    
    }

  ngOnInit() {
        this.get_activeuser_data();
  }

get_activeuser_data(){

        this.login = JSON.parse(localStorage.getItem('admin'));
        this.accessToken = "Bearer "+this.login.access_token;
        var headers = new Headers();
        headers.append('Authorization', this.accessToken);
        return this.http.get(credentials.host + '/api/get_active_users', {headers: headers})
        .map(res => res.json())
            .subscribe(
                    data => {this.data = data},
                    error => alert(error),
                    () => console.log('get', this.data)
                );
}


particular_user_view(employee_id){
console.log(employee_id);
this.router.navigate(['/ActiveUserParticularView', {employee_id}]);
}

particular_user_edit(employee_id){
console.log(employee_id);
this.router.navigate(['/ActiveUserParticularEdit', {employee_id}]);
}


user_create(){

this.router.navigate(['/ActiveUserCreation']);
}

}
