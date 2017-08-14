import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Http, Headers, Response } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { Login } from './../login/Login';
import { credentials } from './../login/credentials';
import {Accordion, AccordionGroup} from './../active-user-creation/accordion';
import { User_Details } from './../active-user-creation/userdetails';
import { Roles_subrole } from './../active-user-creation/role';
import { Location } from '@angular/common';

@Component({
  selector: 'app-inactive-user-particular-edit',
  templateUrl: './inactive-user-particular-edit.component.html',
  styleUrls: ['./inactive-user-particular-edit.component.css']
})
export class InactiveUserParticularEditComponent implements OnInit {
private login: Login;
private accessToken: string;
public userCreation: User_Details;
public employee_id: number;
sub: any;
data: any;
public meta: any;
private filter: any[];


  constructor(private router: Router, private http: Http, private route: ActivatedRoute, private location: Location) { 

    this.login = new Login();
    this.userCreation = new User_Details();
    }

  ngOnInit() {

            this.sub = this.route.params.subscribe(params => {
            this.employee_id = +params['employee_id']; // (+) converts string 'id' to a number
            //console.log('inactive user edit page',this.employee_id);
                });

            this.login = JSON.parse(localStorage.getItem('admin'));
            this.accessToken = "Bearer "+this.login.access_token;
            var headers = new Headers();
            headers.append('Authorization', this.accessToken);
            return this.http.get(credentials.host + '/api/get_edit_show/'+this.employee_id, {headers: headers})
                .map(res => res.json())
                .subscribe(
                    data => {this.userCreation = data},
                    error => alert(error),
                     () => {
                                this.meta = this.userCreation.meta;
                               console.log('inactive user details', this.userCreation);
                              //console.log('user details particular', this.meta);
                            }
                   );
    }

    onSelect(value: string) {
    this.filter = this.meta.branches.filter(branches => branches.branch_name == value);
    console.log(' FILTER ', this.filter);
    this.userCreation.city = this.filter[0].city_name;
    this.userCreation.state = this.filter[0].state_name;
  }


updateChecked(value: any, role:any, event: any) {
if (event.target.checked) 
    {

        console.log(value);
        for (let i of this.userCreation.roles_status) 
            {
                if (i.role_name == role) 
                    {
                        let new_index = this.userCreation.roles_status.indexOf(i);
                        console.log(new_index);
                        //console.log(this.userCreation);

                        for (let j of this.userCreation.roles_status[new_index].sub_role_status) 
                            {
                                let new_s_r_name_index = this.userCreation.roles_status[new_index].sub_role_status.indexOf(j);
                                //console.log(new_s_r_name_index);

                                if (this.userCreation.roles_status[new_index].sub_role_status[new_s_r_name_index].s_r_name == value)
                                    {
                                        //console.log('subrole name', this.userCreation.roles_status[new_index].sub_role_status[new_s_r_name_index].s_r_name);
                                        //console.log('subrole checked', this.userCreation.roles_status[new_index].sub_role_status[new_s_r_name_index].checked);
                                        //console.log(new_s_r_name_index);
                                        this.userCreation.roles_status[new_index].sub_role_status[new_s_r_name_index].checked = "true";
                                        console.log('subrole checked', this.userCreation.roles_status[new_index].sub_role_status[new_s_r_name_index].checked);
                                        console.log(this.userCreation);
                                    }
                            }
                    }
            }
    }


else if (!event.target.checked) 
    {
        for (let i of this.userCreation.roles_status) 
            {
                if (i.role_name == role) 
                    {
                        let new_index = this.userCreation.roles_status.indexOf(i);
                        console.log(new_index);
                        //console.log(this.userCreation);

                        for (let j of this.userCreation.roles_status[new_index].sub_role_status) 
                            {
                                let new_s_r_name_index = this.userCreation.roles_status[new_index].sub_role_status.indexOf(j);
                                //console.log(new_s_r_name_index);

                                if (this.userCreation.roles_status[new_index].sub_role_status[new_s_r_name_index].s_r_name == value)
                                    {
                                        //console.log('subrole name', this.userCreation.roles_status[new_index].sub_role_status[new_s_r_name_index].s_r_name);
                                        //console.log('subrole checked', this.userCreation.roles_status[new_index].sub_role_status[new_s_r_name_index].checked);
                                        //console.log(new_s_r_name_index);
                                        this.userCreation.roles_status[new_index].sub_role_status[new_s_r_name_index].checked = "false";
                                        console.log('subrole checked', this.userCreation.roles_status[new_index].sub_role_status[new_s_r_name_index].checked);
                                        console.log(this.userCreation);
                                    }
                            }
                    }
            }

    }

}


save()
{

    this.userCreation.f_reporting_staff = this.userCreation.f_reporting_staff_email;
    this.userCreation.ip_address ="";
    this.userCreation.mac_address ="";
    this.userCreation.latitude ="";
    this.userCreation.longitude ="";
    console.log('success', this.userCreation);
            this.login = JSON.parse(localStorage.getItem('admin'));
            this.accessToken = "Bearer "+this.login.access_token;
            var headers = new Headers();
            headers.append('Authorization', this.accessToken);
            var body = this.userCreation;
            return this.http.put(credentials.host + '/api/edit_active_user/'+this.employee_id, body, {headers: headers})
            .map(res => res.json())
                .subscribe(
                        data => {this.data = data},
                        error => alert(error),
                        () => {
							
							if (this.data.success == "true")
							{
								alert('successfully updated');
                                                                this.router.navigate(['/InActiveUsers']);
							}
							else{
								alert('does not updated please check');
							}
						}
                    );

}


back(){
        this.location.back();

    }

}
