import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Http, Headers, Response } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { Login } from './../login/Login';
import { credentials } from './../login/credentials';

@Component({
  selector: 'app-candidate-particular-plan-history',
  templateUrl: './candidate-particular-plan-history.component.html',
  styleUrls: ['./candidate-particular-plan-history.component.css']
})
export class CandidateParticularPlanHistoryComponent implements OnInit {
private login: Login;
private accessToken: string;
data:any[];
sub: any;
public plan: string;


  constructor(private router: Router, private http: Http, private route: ActivatedRoute) { 

        this.login = new Login();
    }

  ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
        this.plan = params['plan']; // (+) converts string 'id' to a number
        console.log('price edit page',this.plan);
        });

        this.login = JSON.parse(localStorage.getItem('admin'));
        this.accessToken = "Bearer "+this.login.access_token;
        var headers = new Headers();
        headers.append('Authorization', this.accessToken);
        return this.http.get(credentials.host + '/api/get_plan_history/'+this.plan, {headers: headers})
        .map(res => res.json())
            .subscribe(
                    data => {this.data = data},
                    error => alert(error),
                    () => console.log('particular details', this.data)
                );

  }


plan_history_view(plan_id){
    console.log(plan_id);
    this.router.navigate(['/CandidateParticularHistoryView', {plan_id}]);
}

plan_history_makecopy(plan_id){
    console.log('makecopy', plan_id);
    this.router.navigate(['/CandidateParticularHistoryMakecopy', {plan_id}]);
}

plan_history_users(plan_id){
    console.log('associate users', plan_id);
    this.router.navigate(['/CandidateParticularHistoryUsers', {plan_id}]);

}

}
