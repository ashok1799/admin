import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Http, Headers, Response } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { Login } from './../login/Login';
import { credentials } from './../login/credentials';
import { TaxInfo } from './tax';
import { TaxAll } from './tax_all_details';
import { CandidateTaxDetails } from './candidate_tax';
import { ActivityDetails } from './activity';

declare var $: any;
 
@Component({ 
  selector: 'app-tax-management',
  templateUrl: './tax-management.component.html',
  styleUrls: ['./tax-management.component.css']
})
export class TaxManagementComponent implements OnInit {
private login: Login;
private accessToken: string;
public candidate: TaxAll[] =[];
public company: TaxAll[] =[];
data:any;
data1:any;
public taxinfo: TaxInfo;
public candidatetax: CandidateTaxDetails;
public companytax: CandidateTaxDetails;




  constructor(private router: Router, private http: Http) { 
        this.login = new Login();
        this.taxinfo = new TaxInfo();
        this.candidatetax = new CandidateTaxDetails();
        this.companytax = new CandidateTaxDetails();

        
    }



  ngOnInit() {
    
    this.get_taxconfigure_data_candidate();
    this.get_taxconfigure_data_company();
    this.candidatetax = new CandidateTaxDetails();
  }


// initial get data for candidate
get_taxconfigure_data_candidate(){
        
        this.login = JSON.parse(localStorage.getItem('admin'));
        this.accessToken = "Bearer "+this.login.access_token;
        var headers = new Headers();
        headers.append('Authorization', this.accessToken);
        return this.http.get(credentials.host + '/api/candidate_plan_all_active_slabs', {headers: headers})
        .map(res => res.json())
            .subscribe(
                    data => {this.candidate = data},
                    error => alert(error),
                    () => console.log('get candidate tax', this.candidate)
                );
} // end get data for candidate


// initial get data for company
get_taxconfigure_data_company(){
        this.login = JSON.parse(localStorage.getItem('admin'));
        this.accessToken = "Bearer "+this.login.access_token;
        var headers = new Headers();
        headers.append('Authorization', this.accessToken);
        return this.http.get(credentials.host + '/api/company_plan_all_active_slabs', {headers: headers})
        .map(res => res.json())
            .subscribe(
                    data => {this.company = data},
                    error => alert(error),
                    () => console.log('get company tax', this.company)
                );
}// end get data for company


// initial candidate slab edit

particular_candidate_tax_slab_edit(candidate_slab_name, candidate_tax_component, candidate_tax_percentage){

this.taxinfo.slab_name = candidate_slab_name;
this.taxinfo.tax_component = candidate_tax_component;
this.taxinfo.tax_percentage = candidate_tax_percentage;

}



update_tax(active_assigned_slab){
console.log('tax update', this.taxinfo);
        this.login = JSON.parse(localStorage.getItem('admin'));
        this.accessToken = "Bearer "+this.login.access_token;
        var headers = new Headers();
        headers.append('Authorization', this.accessToken);
        var body = this.taxinfo;
        return this.http.post(credentials.host + '/api/candidate_plan_new_slab_create', body, {headers: headers})
        .map(res => res.json())
                .subscribe(
                    data => {this.data = data},
                    error => alert(error),
                    () => {
                            if (this.data.Success == 'true')
                            {
                                alert(this.data.Message);
                                console.log(this.data);
                                this.get_taxconfigure_data_candidate();
                            }
                            else{
                                alert(this.data.Message);
                            }
                            
                        }
                );

} // end candidate slab edit


// initial candidate slab history

particular_candidate_tax_slab_history(candidate_slab_name){
console.log(candidate_slab_name);
this.router.navigate(['/TaxManagementHistory', {'candidate_slab_name': candidate_slab_name}]);
}// end candidate slab history


// initial company slab edit
particular_company_tax_slab_edit(company_slab_name, company_tax_component, company_tax_percentage){

this.taxinfo.slab_name = company_slab_name;
this.taxinfo.tax_component = company_tax_component;
this.taxinfo.tax_percentage = company_tax_percentage;

}



update_tax_company(){
console.log('tax update', this.taxinfo);
        this.login = JSON.parse(localStorage.getItem('admin'));
        this.accessToken = "Bearer "+this.login.access_token;
        var headers = new Headers();
        headers.append('Authorization', this.accessToken);
        var body = this.taxinfo;
        return this.http.post(credentials.host + '/api/company_plan_new_slab_create', body, {headers: headers})
        .map(res => res.json())
                .subscribe(
                    data => {this.data = data},
                    error => alert(error),
                    () => {
                            if (this.data.Success == 'true')
                            {
                                alert(this.data.Message);
                                console.log(this.data);
                                this.get_taxconfigure_data_company();
                            }
                            else{
                                alert(this.data.Message);
                            }
                            
                        }
                );

}// end company slab edit


// initial company slab history
particular_company_tax_slab_history(company_slab_name){
console.log(company_slab_name);
this.router.navigate(['/TaxManagementHistoryCompany', {'company_slab_name': company_slab_name}]);
} // end company slab history


// candidate check box select start
update(active_assigned_slab, candidate_tax_id){

let check: boolean = active_assigned_slab;
this.candidatetax.company_tax_id = candidate_tax_id;
this.candidatetax.active_assigned_slab = active_assigned_slab;
this.candidatetax.activity_log = new ActivityDetails();

//console.log(this.candidatetax.company_tax_id);
//console.log(this.candidatetax.active_assigned_slab);
}



update_tax_slab(){
        
        console.log(this.candidatetax);

        this.login = JSON.parse(localStorage.getItem('admin'));
        this.accessToken = "Bearer "+this.login.access_token;
        var headers = new Headers();
        headers.append('Authorization', this.accessToken);
        var body = this.candidatetax;
        return this.http.post(credentials.host + '/api/new_tax_assign/'+this.candidatetax.company_tax_id, body, {headers: headers})
        .map(res => res.json())
                .subscribe(
                    data => {this.candidatetax = data},
                    error => alert(error),
                    () => {
                            if (this.candidatetax.success=="true")
                                {
                                    console.log(this.candidatetax);
                                    alert(this.candidatetax.message);
                                    
                                }
                            else
                                {
                                    alert(this.candidatetax.message);
                                }
                            }
                );
} // candidate check box select stop


// company check box select start

update_company(active_assigned_slab, company_tax_id){


let check: boolean = active_assigned_slab;
this.companytax.company_tax_id = company_tax_id;
this.companytax.active_assigned_slab = active_assigned_slab;

console.log(this.companytax);

this.companytax.activity_log = new ActivityDetails();

//console.log(this.candidatetax.company_tax_id);
//console.log(this.candidatetax.active_assigned_slab);
}

update_tax_slab_company(){
        
        console.log(this.companytax);

        this.login = JSON.parse(localStorage.getItem('admin'));
        this.accessToken = "Bearer "+this.login.access_token;
        var headers = new Headers();
        headers.append('Authorization', this.accessToken);
        var body = this.companytax;
        return this.http.post(credentials.host + '/api/new_company_tax_assign/'+this.companytax.company_tax_id, body, {headers: headers})
        .map(res => res.json())
                .subscribe(
                    data => {this.companytax = data},
                    error => alert(error),
                    () => {
                            if (this.companytax.success=="true")
                                {
                                    console.log(this.companytax);
                                    alert(this.companytax.message);
                                    
                                }
                            else
                                {
                                    alert(this.companytax.message);
                                }
                            }
                );
} // company check box select end

modelclose(){
this.get_taxconfigure_data_candidate();
this.get_taxconfigure_data_company();
}

}
