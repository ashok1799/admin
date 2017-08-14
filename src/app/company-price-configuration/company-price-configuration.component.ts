import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Http, Headers, Response } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { Login } from './../login/Login';
import { credentials } from './../login/credentials';


@Component({
  selector: 'app-company-price-configuration',
  templateUrl: './company-price-configuration.component.html',
  styleUrls: ['./company-price-configuration.component.css']
})
export class CompanyPriceConfigurationComponent implements OnInit {
    private login: Login;
    private accessToken: string;
    data: any;

  constructor(private router: Router, private http: Http) { 
    this.login = new Login();
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
                    () => console.log('company plan', this.data)
                );
    
  }


free_plan_history(free){
    this.router.navigate(['/CompanyFreePlanHistory', {'plan': free}]);
}

company_plan_history(normal){

this.router.navigate(['/CompanyCmpPlanHistory', {'plan': normal}]);
}

priority_plan_history(priority){

this.router.navigate(['/PriorityPlanHistory', {'plan': priority}]);
}

dailywage_plan_history(wages){

this.router.navigate(['/DailywagePlanHistory', {'plan': wages}]);
}

free_plan_edit(){
    this.router.navigate(['/CompanyFreePlanEdit']);
}

company_plan_edit(){
    this.router.navigate(['/CompanyCompaniesPlanEdit']);
}

priority_plan_edit(){
    this.router.navigate(['/CompanyPrioritysourcingPlanEdit']);
}

dailywage_plan_edit(){
    this.router.navigate(['/CompanyDailywagePlanEdit']);
}


}
