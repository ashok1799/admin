import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Http, Headers, Response } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { Login } from './../../login/Login';
import { CompanyPlan } from './../company-free-plan-edit/company';
import { Activity } from './../company-free-plan-edit/activity_details';
import { PlanDetail } from './../company-free-plan-edit/plan_details';
import { credentials } from './../../login/credentials';

@Component({
  selector: 'app-company-dailywage-plan-edit',
  templateUrl: './company-dailywage-plan-edit.component.html',
  styleUrls: ['./company-dailywage-plan-edit.component.css']
})
export class CompanyDailywagePlanEditComponent implements OnInit {

    private login: Login;
    private accessToken: string;
    data: any;
    public companyplan: CompanyPlan[] = [];
    public PlanDetail: PlanDetail;

  constructor(private router: Router, private http: Http) { 
        this.login = new Login();
        this.PlanDetail = new PlanDetail();
    }

  ngOnInit() {


        this.login = JSON.parse(localStorage.getItem('admin'));
        this.accessToken = "Bearer "+this.login.access_token;
        var headers = new Headers();
        headers.append('Authorization', this.accessToken);
        return this.http.get(credentials.host + '/api/all_current_plans', {headers: headers})
        .map(res => res.json())
            .subscribe(
                    data => {this.data = data},
                    error => alert(error),
                    () => {
                            this.companyplan = this.data.wages;
                            console.log('company plan', this.companyplan);
                            }
                );
        }


update(value:any, price: any, event: any){
    console.log(value);
    console.log(price);
}

criteria_change(value:any, price: any, event: any){
    this.companyplan[1].criteria = price;
    console.log(this.companyplan[1].criteria);
}


dailywages_plan_edit(){
        this.PlanDetail.plan = this.companyplan;
        this.PlanDetail.activity_log = new Activity();
        console.log(this.PlanDetail);
        this.login = JSON.parse(localStorage.getItem('admin'));
        this.accessToken = "Bearer "+this.login.access_token;
        var headers = new Headers();
        headers.append('Authorization', this.accessToken);
        var body = this.PlanDetail;
        return this.http.post(credentials.host + '/api/new_plan_create', body, {headers: headers})
        .map(res => res.json())
            .subscribe(
                    data => {this.data = data},
                    error => alert(error),
                    () => {
                            if (this.data.Success == 'true')
                            {
                            alert(this.data.Message);
                            }
                            else
                                {
                                alert(this.data.Message);
                                }
                            
                            }
                );


}


cancel(){
this.router.navigate(['/CompanyPriceConfiguration']);
}

}
