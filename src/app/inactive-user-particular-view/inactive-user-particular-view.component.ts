import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Http, Headers, Response } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { Login } from './../login/Login';
import { credentials } from './../login/credentials';

@Component({
  selector: 'app-inactive-user-particular-view',
  templateUrl: './inactive-user-particular-view.component.html',
  styleUrls: ['./inactive-user-particular-view.component.css']
})
export class InactiveUserParticularViewComponent implements OnInit {
private login: Login;
private accessToken: string;
data:any;
sub: any;
public employee_id: number;


  constructor(private router: Router, private http: Http, private route: ActivatedRoute) { 
        this.login = new Login();
    }

  ngOnInit() {

            this.sub = this.route.params.subscribe(params => {
            this.employee_id = +params['employee_id']; // (+) converts string 'id' to a number
            console.log('edit page',this.employee_id);
                });

        this.get_inactiveuser_data();
  }

   get_inactiveuser_data(){

        this.login = JSON.parse(localStorage.getItem('admin'));
        this.accessToken = "Bearer "+this.login.access_token;
        var headers = new Headers();
        headers.append('Authorization', this.accessToken);
        return this.http.get(credentials.host + '/api/view_active_user/'+this.employee_id, {headers: headers})
        .map(res => res.json())
            .subscribe(
                    data => {this.data = data},
                    error => alert(error),
                    () => console.log('particularview', this.data)
                );
}

    back(){

    this.router.navigate(['/InActiveUsers']);
    } 

}
