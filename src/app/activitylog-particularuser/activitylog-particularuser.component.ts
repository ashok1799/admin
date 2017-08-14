import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Http, Headers, Response } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { Login } from './../login/Login';
import { credentials } from './../login/credentials';
import { Location } from '@angular/common';
import { ActivityInformation } from './activitydetails'

@Component({
  selector: 'app-activitylog-particularuser',
  templateUrl: './activitylog-particularuser.component.html',
  styleUrls: ['./activitylog-particularuser.component.css']
})
export class ActivitylogParticularuserComponent implements OnInit {
private login: Login;
private accessToken: string;
data:any;
sub: any;
public employee_id: number;
public activity: ActivityInformation[]= [];

  constructor(private router: Router, private http: Http, private route: ActivatedRoute, private location: Location) { 
    this.login = new Login();
    }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
    this.employee_id = +params['employee_id']; // (+) converts string 'id' to a number
    console.log('activity parricular user',this.employee_id);
    });
    this.get_activeuser_data();
  }

get_activeuser_data(){

        this.login = JSON.parse(localStorage.getItem('admin'));
        this.accessToken = "Bearer "+this.login.access_token;
        var headers = new Headers();
        headers.append('Authorization', this.accessToken);
        return this.http.get(credentials.host + '/api/employes_activities/'+this.employee_id, {headers: headers})
        .map(res => res.json())
            .subscribe(
                    data => {this.activity = data},
                    error => alert(error),
                    () => console.log('particularview', this.activity)
                );
}

cancel(){
this.location.back();
}

}
