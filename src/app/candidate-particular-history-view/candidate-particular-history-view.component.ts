import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Http, Headers, Response } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { Login } from './../login/Login';
import { Location } from '@angular/common';
import { CandidatePrice } from './../price-candidates-all/candidatepricedetails';

@Component({
  selector: 'app-candidate-particular-history-view',
  templateUrl: './candidate-particular-history-view.component.html',
  styleUrls: ['./candidate-particular-history-view.component.css']
})
export class CandidateParticularHistoryViewComponent implements OnInit {
private login: Login;
private accessToken: string;
data:any;
sub: any;
public plan_id: number;
public candidateprice: CandidatePrice;

  constructor(private router: Router, private http: Http, private route: ActivatedRoute, private location: Location) { 

         this.login = new Login();
         this.candidateprice = new CandidatePrice();
    }

  ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
        this.plan_id = params['plan_id']; // (+) converts string 'id' to a number
        //console.log('history view page',this.plan_id);
        });



        this.login = JSON.parse(localStorage.getItem('admin'));
        this.accessToken = "Bearer "+this.login.access_token;
        var headers = new Headers();
        headers.append('Authorization', this.accessToken);
        return this.http.get('http://192.168.1.5/Ready2jobs-Admin/public/api/get_plan_details/'+this.plan_id, {headers: headers})
        .map(res => res.json())
            .subscribe(
                    data => {this.candidateprice = data},
                    error => alert(error),
                    () => console.log('history view page', this.candidateprice)
                );
  }


back(){

this.location.back();

}

}
