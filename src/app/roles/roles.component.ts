import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Http, Headers, Response } from '@angular/http';
import { RequestOptions } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { Login } from './../login/Login';
import { credentials } from './../login/credentials';
import {rolesData} from './roles_data';
import { NewTeamCreate } from './new_team';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

public rolesData: rolesData;
public data:rolesData[] = new Array<rolesData>();
private login: Login;
private accessToken: string;
data1:any;
public newteam: NewTeamCreate;
public new_role_create: rolesData;



  constructor(private router: Router, private http: Http) { 
        this.login = new Login();
        this.rolesData = new rolesData();
        this.new_role_create = new rolesData();
        this.newteam = new NewTeamCreate();
       
    }

  ngOnInit() {

        this.get_roles_data();
        //this.get_ipaddress();
  }

get_roles_data(){

        this.login = JSON.parse(localStorage.getItem('admin'));
        this.accessToken = "Bearer "+this.login.access_token;
        var headers = new Headers();
        headers.append('Authorization', this.accessToken);
        return this.http.get(credentials.host + '/api/roles_subroles', {headers: headers})
        .map(res => res.json())
            .subscribe(
                    data => {this.data = data},
                    error => alert(error),
                    () => console.log('get', this.data)
                );
}

// ip address find but not used 
get_ipaddress(){

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        let options = new RequestOptions({headers: headers });
        this.http.get('//api.ipify.org/?format=jsonp&callback=JSONP_CALLBACK')
        .map(res => res.json())
            .subscribe(
                    data => {this.data1 = data},
                    error => alert(error),
                    () => console.log('get ipaddress', this.data1)
                );
}


add_team(){

        //console.log(this.newteam);
        this.login = JSON.parse(localStorage.getItem('admin'));
        this.accessToken = "Bearer "+this.login.access_token;
        var headers = new Headers();
        headers.append('Authorization', this.accessToken);
        var body = this.newteam;
       return this.http.post(credentials.host + '/api/team_create', body, {headers: headers})
       .map(res => res.json())
                .subscribe(
                    data => {this.rolesData = data},
                    error => alert(error),
                    () => {
                            console.log(this.rolesData);
                            if(this.rolesData.success == "false")
                                {
                                alert('error');
                                 }
                                else{
                                alert('success');
                                this.get_roles_data();
                                }
                            }
                );
            
}

new_role(){
    this.new_role_create = new rolesData();
}

add_role(){


        
        //console.log(this.rolesData);
        
        this.login = JSON.parse(localStorage.getItem('admin'));
        this.accessToken = "Bearer "+this.login.access_token;

        var headers = new Headers();
        headers.append('Authorization', this.accessToken);
       //headers.append('Content-Type', 'application/json');
       var body = this.new_role_create;

 
       return this.http.post(credentials.host + '/api/role_create?', body, {headers: headers})
       .map(res => res.json())
                .subscribe(
                    data => {this.new_role_create = data},
                    error => alert(error),
                    () => {
                            console.log(this.new_role_create);
                            if(this.new_role_create.success == "false")
                                {
                                alert('error');
                                 }
                                else{
                                alert('success');
                                this.get_roles_data();
                                }
                            }
                );
            
}

roles_descr_edit(id, role_name, sub_role_name, description){

this.rolesData.id = id;
this.rolesData.role_name = role_name;
this.rolesData.sub_role_name = sub_role_name;
this.rolesData.description = description;

}

change_des(){

        console.log('before request', this.rolesData);

        let requestData = new rolesData();
        requestData.id = this.rolesData.id;
        requestData.description = this.rolesData.description;
        requestData.role_name = this.rolesData.role_name;
        requestData.sub_role_name = this.rolesData.sub_role_name;
        requestData.ip_address ="";
        requestData.mac_address ="";
        requestData.latitude ="";
        requestData.longitude ="";
        console.log('request corected', requestData);

        this.login = JSON.parse(localStorage.getItem('admin'));
        this.accessToken = "Bearer "+this.login.access_token;

        var headers = new Headers();
        headers.append('Authorization', this.accessToken);
        headers.append('Content-Type', 'application/json');
        var body = requestData;
        
        return this.http.post(credentials.host + '/api/edit_roles_subroles?', body, {headers: headers})
       .map(res => res.json())
                .subscribe(
                    data => {requestData = data},
                    error => alert(error),
                    () => {
                            
                            if(requestData.success == "true") {
                                alert('Updated Successfully');
                                this.get_roles_data();
                            } else {
                                alert('error');
                            }
                        }
                          
                );
 


        
}



}
