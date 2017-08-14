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
import { Location } from '@angular/common';

@Component({
  selector: 'app-candidate-particular-history-makecopy',
  templateUrl: './candidate-particular-history-makecopy.component.html',
  styleUrls: ['./candidate-particular-history-makecopy.component.css']
})
export class CandidateParticularHistoryMakecopyComponent implements OnInit {
private login: Login;
private accessToken: string;
sub: any;
data: any;
public plan_id: number;
public candidateprice: CandidatePrice;
public displayDate: Date = new Date();


  constructor(private router: Router, private http: Http, private route: ActivatedRoute, private location: Location) { 
    this.login = new Login();
    this.candidateprice = new CandidatePrice();
    }

  ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
        this.plan_id = +params['plan_id']; // (+) converts string 'id' to a number
        //console.log('price edit page',this.candidate_plan_id);
        });


        this.login = JSON.parse(localStorage.getItem('admin'));
        this.accessToken = "Bearer "+this.login.access_token;
        var headers = new Headers();
        headers.append('Authorization', this.accessToken);
        return this.http.get(credentials.host + '/api/get_plan_details/'+this.plan_id, {headers: headers})
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
console.log(plan_start_date);
//console.log(this.candidateprice);
}

activate_plan(){

        this.login = JSON.parse(localStorage.getItem('admin'));
        this.accessToken = "Bearer "+this.login.access_token;
        var headers = new Headers();
        var body = this.candidateprice;
        headers.append('Authorization', this.accessToken);
        return this.http.post(credentials.host + '/api/make_copy_and_create_plan', body, {headers: headers})
        .map(res => res.json())
            .subscribe(
                    data => {this.candidateprice = data},
                    error => alert(error),
                    () => {
                            if (this.candidateprice.Success == 'true'){
                                    alert(this.candidateprice.Message);
                                    //this.router.navigate(['/PriceCandidatesAll']);
                                    console.log('change plan', this.candidateprice);
                                }
                            else{
                                alert(this.candidateprice.Message);
                                }
                            }
                );


}

back(){

this.location.back();

}

}
