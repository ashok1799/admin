import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Http, Headers, Response } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { Login } from './../login/Login';
import { credentials } from './../login/credentials';
import { Location } from '@angular/common';

@Component({
  selector: 'app-candidate-particular-history-users',
  templateUrl: './candidate-particular-history-users.component.html',
  styleUrls: ['./candidate-particular-history-users.component.css']
})
export class CandidateParticularHistoryUsersComponent implements OnInit {
private login: Login;
private accessToken: string;
data:any;
sub: any;
public plan_id: number;


  constructor(private router: Router, private http: Http, private route: ActivatedRoute, private location: Location) { 
    
        this.login = new Login();
    }

  ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
        this.plan_id = params['plan_id']; // (+) converts string 'id' to a number
        console.log('history associate users',this.plan_id);
        });


        this.login = JSON.parse(localStorage.getItem('admin'));
        this.accessToken = "Bearer "+this.login.access_token;
        var headers = new Headers();
        headers.append('Authorization', this.accessToken);
        return this.http.get(credentials.host + '/api/get_associated_candis/'+this.plan_id, {headers: headers})
        .map(res => res.json())
            .subscribe(
                    data => {this.data = data},
                    error => alert(error),
                    () => console.log('associate candidates', this.data)
                );
  }

}
