import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Http, Headers, Response } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { Login } from './../login/Login';
import { credentials } from './../login/credentials';
import { CandidatePrice } from './../price-candidates-all/candidatepricedetails';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-candidate-plan-particular-edit',
  templateUrl: './candidate-plan-particular-edit.component.html',
  styleUrls: ['./candidate-plan-particular-edit.component.css']
})
export class CandidatePlanParticularEditComponent implements OnInit {
private login: Login;
private accessToken: string;
sub: any;
data: any;
public candidate_plan_id: number;
public candidateprice: CandidatePrice;
public displayDate: Date = new Date();

  constructor(private router: Router, private http: Http, private route: ActivatedRoute) { 

    this.login = new Login();
    this.candidateprice = new CandidatePrice();
    }

  ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
        this.candidate_plan_id = +params['candidate_plan_id']; // (+) converts string 'id' to a number
        //console.log('price edit page',this.candidate_plan_id);
        });


        this.login = JSON.parse(localStorage.getItem('admin'));
        this.accessToken = "Bearer "+this.login.access_token;
        var headers = new Headers();
        headers.append('Authorization', this.accessToken);
        return this.http.get(credentials.host + '/api/edit_plan_show/'+this.candidate_plan_id, {headers: headers})
        .map(res => res.json())
            .subscribe(
                    data => {this.candidateprice = data},
                    error => alert(error),
                    () => console.log('particular details', this.candidateprice)
                );


        
  }

save(){
let dateCheck: DatePipe = new DatePipe("en-US");

//this.displayDate = new Date();

let plan_start_date: string = dateCheck.transform(this.displayDate, 'dd-MM-yyyy hh:mm:ss');
this.candidateprice.plan_start_date = plan_start_date;
this.candidateprice.ip_address="";
this.candidateprice.mac_address="";
this.candidateprice.latitude="";
this.candidateprice.longitude="";
//console.log(plan_start_date);
//console.log(this.candidateprice);
}

change_plan(){
        console.log(this.candidateprice);
        this.login = JSON.parse(localStorage.getItem('admin'));
        this.accessToken = "Bearer "+this.login.access_token;
        var headers = new Headers();
        var body = this.candidateprice;
        headers.append('Authorization', this.accessToken);
        return this.http.post(credentials.host + '/api/create_new_plan', body, {headers: headers})
        .map(res => res.json())
            .subscribe(
                    data => {this.data = data},
                    error => alert(error),
                    () => {
                            if (this.data.Success == 'true'){
                                    alert(this.data.Message);
                                    //this.router.navigate(['/PriceCandidatesAll']);
                                }
                            else{
                                alert(this.data.Message);
                                }
                            }
                );


}

back(){
this.router.navigate(['/PriceCandidatesAll']);
}

}
