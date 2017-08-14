import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Http, Headers, Response } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { Login } from './../login/Login';
import { credentials } from './../login/credentials';
import { Location} from '@angular/common'

@Component({
  selector: 'app-tax-candidate-associate-view',
  templateUrl: './tax-candidate-associate-view.component.html',
  styleUrls: ['./tax-candidate-associate-view.component.css']
})
export class TaxCandidateAssociateViewComponent implements OnInit {
private login: Login;
private accessToken: string;
data:any;
sub: any;
public candidate_tax_id: number;

  constructor(private router: Router, private http: Http, private route: ActivatedRoute, private location: Location) { 
    this.login = new Login();
    }

  ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
        this.candidate_tax_id = +params['candidate_tax_id']; // (+) converts string 'id' to a number
        console.log('Candidate assoiciate view',this.candidate_tax_id);
        });

        this.get_candidate_associate_view_data();
  }

get_candidate_associate_view_data(){

        this.login = JSON.parse(localStorage.getItem('admin'));
        this.accessToken = "Bearer "+this.login.access_token;
        var headers = new Headers();
        headers.append('Authorization', this.accessToken);
        return this.http.get(credentials.host + '/api/candidate_tax_associated_candidates/'+this.candidate_tax_id, {headers: headers})
        .map(res => res.json())
            .subscribe(
                    data => {this.data = data},
                    error => alert(error),
                    () => console.log('particularview', this.data)
                );
}

cancel(){
this.location.back();
}

}
