import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Http, Headers, Response } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { Login } from './../../../login/Login';
import { credentials } from './../../../login/credentials';
import { Location } from '@angular/common';
import { Associate } from './../../company-free-plan-history/free-plan-associatecompany/company'

@Component({
  selector: 'app-cmp-plan-associatecompany',
  templateUrl: './cmp-plan-associatecompany.component.html',
  styleUrls: ['./cmp-plan-associatecompany.component.css']
})
export class CmpPlanAssociatecompanyComponent implements OnInit {
private login: Login;
private accessToken: string;
public data: Associate[] = [];
sub: any;
public plan: string;
public label: string

  constructor(private router: Router, private http: Http, private route: ActivatedRoute, private location: Location) { 
         this.login = new Login();
    }

  ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
        this.plan = params['plan']; // (+) converts string 'id' to a number
        this.label = params['label']; 
        console.log('company plan',this.plan);
        console.log('company plan',this.label);
        });

        this.login = JSON.parse(localStorage.getItem('admin'));
        this.accessToken = "Bearer "+this.login.access_token;
        var headers = new Headers();
        headers.append('Authorization', this.accessToken);
        return this.http.get(credentials.host + '/api/get_associated_companies/'+this.plan+'/'+this.label, {headers: headers})
        .map(res => res.json())
            .subscribe(
                    data => {this.data = data},
                    error => alert(error),
                    () => console.log('free plan makecopy associate company', this.data)
                );
  }

cancel(){
     this.location.back();
}


}
