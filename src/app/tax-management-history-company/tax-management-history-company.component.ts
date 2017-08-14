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
  selector: 'app-tax-management-history-company',
  templateUrl: './tax-management-history-company.component.html',
  styleUrls: ['./tax-management-history-company.component.css']
})
export class TaxManagementHistoryCompanyComponent implements OnInit {
private login: Login;
private accessToken: string;
data:any;
sub: any;
public company_slab_name: string;

  constructor(private router: Router, private http: Http, private route: ActivatedRoute, private location: Location) { 
    this.login = new Login();
    }

  ngOnInit() {

        this.sub = this.route.params.subscribe(params => {
        this.company_slab_name = params['company_slab_name']; // (+) converts string 'id' to a number
        console.log('edit page',this.company_slab_name);
    });

    this.get_company_slab_data();
  }

get_company_slab_data(){

        this.login = JSON.parse(localStorage.getItem('admin'));
        this.accessToken = "Bearer "+this.login.access_token;
        var headers = new Headers();
        headers.append('Authorization', this.accessToken);
        return this.http.get(credentials.host + '/api/company_plan_slab_history/'+this.company_slab_name, {headers: headers})
        .map(res => res.json())
            .subscribe(
                    data => {this.data = data},
                    error => alert(error),
                    () => console.log('particularview', this.data)
                );
}

particular_assoicate_view(company_tax_id){

this.router.navigate(['/TaxCompanyAssociateView',{company_tax_id}]);
}

cancel(){
this.location.back();
}

}
