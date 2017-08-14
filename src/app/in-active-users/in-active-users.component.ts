import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Http, Headers, Response } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { Login } from './../login/Login';
import { credentials } from './../login/credentials';

@Component({
  selector: 'app-in-active-users',
  templateUrl: './in-active-users.component.html',
  styleUrls: ['./in-active-users.component.css']
})
export class InActiveUsersComponent implements OnInit {
private login: Login;
private accessToken: string;
data:any;

  constructor(private router: Router, private http: Http) { 
        this.login = new Login();

    }

  ngOnInit() {

        this.get_inactiveuser_data();
  }


get_inactiveuser_data(){

        this.login = JSON.parse(localStorage.getItem('admin'));
        this.accessToken = "Bearer "+this.login.access_token;
        var headers = new Headers();
        headers.append('Authorization', this.accessToken);
        return this.http.get(credentials.host + '/api/get_inactive_users', {headers: headers})
        .map(res => res.json())
            .subscribe(
                    data => {this.data = data},
                    error => alert(error),
                    () => console.log('get', this.data)
                );
}


inactive_particular_user_view(employee_id){
console.log(employee_id);
this.router.navigate(['/InactiveUserParticularView', {employee_id}]);
}

inactive_particular_user_edit(employee_id){
console.log(employee_id);
this.router.navigate(['/InactiveUserParticularEdit', {employee_id}]);
}


}
