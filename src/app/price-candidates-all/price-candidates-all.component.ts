import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Http, Headers, Response } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { Login } from './../login/Login';
import { credentials } from './../login/credentials';
import { CandidatePrice } from './candidatepricedetails';


@Component({
  selector: 'app-price-candidates-all',
  templateUrl: './price-candidates-all.component.html',
  styleUrls: ['./price-candidates-all.component.css']
})
export class PriceCandidatesAllComponent implements OnInit {
private login: Login;
private accessToken: string;
data:any[];
public candidateprice: CandidatePrice;

  constructor(private router: Router, private http: Http) { 
        this.login = new Login();
        this.candidateprice = new CandidatePrice();
    }

  ngOnInit() {
    
        this.get_candidate_price_data();
  }

get_candidate_price_data(){

        this.login = JSON.parse(localStorage.getItem('admin'));
        this.accessToken = "Bearer "+this.login.access_token;
        var headers = new Headers();
        headers.append('Authorization', this.accessToken);
        return this.http.get(credentials.host + '/api/get_all_current_plans', {headers: headers})
        .map(res => res.json())
            .subscribe(
                    data => {this.data = data},
                    error => alert(error),
                    () => console.log('price', this.data)
                );
}


plan_edit(candidate_plan_id){

console.log(candidate_plan_id);
this.router.navigate(['/CandidatePlanParticularEdit', {candidate_plan_id}]);
}

plan_history(plan){

console.log(plan);
this.router.navigate(['/CandidateParticularPlanHistory', {'plan': plan}]);

}




}
