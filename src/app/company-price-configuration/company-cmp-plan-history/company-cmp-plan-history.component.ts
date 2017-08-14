import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Http, Headers, Response } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { Login } from './../../login/Login';
import { credentials } from './../../login/credentials';
import { Location } from '@angular/common';

@Component({
  selector: 'app-company-cmp-plan-history',
  templateUrl: './company-cmp-plan-history.component.html',
  styleUrls: ['./company-cmp-plan-history.component.css']
})
export class CompanyCmpPlanHistoryComponent implements OnInit {
    private login: Login;
    private accessToken: string;
    data:any[];
    sub: any;
    public plan: string;

  constructor(private router: Router, private http: Http, private route: ActivatedRoute, private location: Location) { 
    this.login = new Login();
    }

  ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
        this.plan = params['plan']; // (+) converts string 'id' to a number
        console.log('company plan',this.plan);
        });

        this.login = JSON.parse(localStorage.getItem('admin'));
        this.accessToken = "Bearer "+this.login.access_token;
        var headers = new Headers();
        headers.append('Authorization', this.accessToken);
        return this.http.get(credentials.host + '/api/plan_history/'+this.plan, {headers: headers})
        .map(res => res.json())
            .subscribe(
                    data => {this.data = data},
                    error => alert(error),
                    () => console.log('particular details', this.data)
                );
  }

cmp_plan_history_view(plan, label){

        console.log(plan);
        this.router.navigate(['/CmpPlanView', {'plan': plan, 'label': label}]);
}


cmp_plan_history_makecopy(plan, label){
        this.router.navigate(['/CmpPlanMakecopy', {'plan': plan, 'label': label}]);
}


cmp_plan_history_users(plan, label){
        this.router.navigate(['/CmpPlanAssociatecompany', {'plan': plan, 'label': label}]);
}

back(){
    this.location.back();
}

}
