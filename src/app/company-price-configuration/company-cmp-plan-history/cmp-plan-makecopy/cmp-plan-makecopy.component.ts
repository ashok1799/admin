import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Http, Headers, Response } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { Login } from './../../../login/Login';
import { credentials } from './../../../login/credentials';
import { Location } from '@angular/common';
import { MakeCopy } from './../../company-free-plan-history/free-plan-makecopy/makecopy';
import { Activity } from './../../../company-price-configuration/company-free-plan-edit/activity_details';
import { PlanDetail } from './../../../company-price-configuration/company-free-plan-edit/plan_details';


@Component({
  selector: 'app-cmp-plan-makecopy',
  templateUrl: './cmp-plan-makecopy.component.html',
  styleUrls: ['./cmp-plan-makecopy.component.css']
})
export class CmpPlanMakecopyComponent implements OnInit {
private login: Login;
private accessToken: string;
data: any;
sub: any;
public plan: string;
public label: string
public companyplan: MakeCopy;
public PlanDetail: PlanDetail;

  constructor(private router: Router, private http: Http, private route: ActivatedRoute, private location: Location) { 
         this.login = new Login();
         this.companyplan = new MakeCopy();
         this.PlanDetail = new PlanDetail();
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
        return this.http.get(credentials.host + '/api/view_plan_details/'+this.plan+'/'+this.label, {headers: headers})
        .map(res => res.json())
            .subscribe(
                    data => {this.companyplan = data},
                    error => alert(error),
                    () => console.log('company plan makecopy', this.companyplan)
                );
  }

update(value:any, price: any, event: any){

console.log(value);
console.log(price);
}

salary(value:any, price: any, event: any){

this.companyplan.plans[1].salary_limit = price;
console.log(this.companyplan.plans[1].salary_limit);

}


company_plan_make_copy(){
        this.PlanDetail.plan = this.companyplan.plans;
        this.PlanDetail.activity_log = new Activity();
        console.log(this.PlanDetail);
        //console.log(this.companyplan.plans);
        this.login = JSON.parse(localStorage.getItem('admin'));
        this.accessToken = "Bearer "+this.login.access_token;
        var headers = new Headers();
        headers.append('Authorization', this.accessToken);
        var body = this.PlanDetail;
        return this.http.post(credentials.host + '/api/make_copy_plan_create', body, {headers: headers})
        .map(res => res.json())
            .subscribe(
                    data => {this.data = data},
                    error => alert(error),
                    () => {
                            if (this.data.Success == 'true')
                            {
                            alert(this.data.Message);
                            this.router.navigate(['/CompanyPriceConfiguration']);
                            }
                            else
                                {
                                alert(this.data.Message);
                                }
                            
                            }
                );


}


cancel(){
     this.location.back();
}

}
