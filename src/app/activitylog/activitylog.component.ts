import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Http, Headers, Response } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { Login } from './../login/Login';
import { credentials } from './../login/credentials';

@Component({
  selector: 'app-activitylog',
  templateUrl: './activitylog.component.html',
  styleUrls: ['./activitylog.component.css']
})
export class ActivitylogComponent implements OnInit {
private login: Login;
private accessToken: string;
data:any;

  constructor(private router: Router, private http: Http) { 
        this.login = new Login();

    
    }

  ngOnInit() {
    this.get_activitylog_alluser();
  }

get_activitylog_alluser(){

        this.login = JSON.parse(localStorage.getItem('admin'));
        this.accessToken = "Bearer "+this.login.access_token;
        var headers = new Headers();
        headers.append('Authorization', this.accessToken);
        return this.http.get(credentials.host + '/api/all_employess', {headers: headers})
        .map(res => res.json())
            .subscribe(
                    data => {this.data = data},
                    error => alert(error),
                    () => console.log('get', this.data)
                );
}

particular_user_activity(employee_id){
console.log(employee_id);
this.router.navigate(['/ActivitylogParticularuser', {employee_id}]);
}

}
