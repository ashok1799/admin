import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Http, Headers, Response } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { Login } from './../login/Login';
import { credentials } from './../login/credentials';
import {Accordion, AccordionGroup} from './accordion';
import { User_Details } from './userdetails';
import { Roles_subrole } from './role';
import { BranchDetails } from './branch_details';
import { Records} from './Records';
import { Area } from './allocate_area_details';
 




@Component({
  selector: 'app-active-user-creation',
  templateUrl: './active-user-creation.component.html',
  styleUrls: ['./active-user-creation.component.css']  
})




export class ActiveUserCreationComponent implements OnInit {

    private login: Login;
    private accessToken: string;
    data: any;
    public branches: BranchDetails[] = [];
    isGroupOpen = false;
    public admin = [];
    eventChkArr: any = [];
    isClassVisible: boolean;
    private filter: any[];
    private city: string;
    private state: string;
    data1: any;
    public search_city: string;
    public show_taluk: boolean;



public userCreation: User_Details;





  constructor(private router: Router, private http: Http) { 
        this.login = new Login();
        this.userCreation = new User_Details();
        this.isClassVisible = true;
        this.show_taluk = false;
    }

  ngOnInit() {

        this.login = JSON.parse(localStorage.getItem('admin'));
        this.accessToken = "Bearer "+this.login.access_token;
        var headers = new Headers();
        headers.append('Authorization', this.accessToken);
        return this.http.get(credentials.host + '/api/users', {headers: headers})
        .map(res => res.json())
            .subscribe(
                    data => {this.data = data},
                    error => alert(error),
                    () => {
                            this.branches = this.data.branches;
                        //this.userCreation.roles = this.data.roles_subRoles;
                        console.log('mm', this.data);
                        //console.log('mm', this.branches);
                    }
                );
  }


onclick(c, role){


this.admin.push(c);


console.log('checkbox', this.admin);


}

  updateChecked(value: any, role:any, event: any) {
    if (event.target.checked) {
        if (this.userCreation.roles.length == 0) {
            let first = new Roles_subrole();
            first.role_name = role;
            first.sub_role_name.push(value);
            this.userCreation.roles.push(first);
            
        } else {
        console.log('role_name', role);
        let create_new_role: boolean = false;
        let new_index: number;
            for (let i of this.userCreation.roles) {
                if (i.role_name != role) {
                    create_new_role = true;
                } 
                if (i.role_name == role) {
                    create_new_role = false;
                    new_index = this.userCreation.roles.indexOf(i);
                    break;
                }
            }

            if (create_new_role) {
                let r_o = new Roles_subrole();
                r_o.role_name = role;
                r_o.sub_role_name.push(value);
                this.userCreation.roles.push(r_o);
            } else {
                this.userCreation.roles[new_index].sub_role_name.push(value);
            }
            
        }
        console.log(role, this.userCreation);

     
    }




    else if (!event.target.checked) {
    for (let i of this.userCreation.roles) {

        if(i.role_name == role){
        var index = this.userCreation.roles.indexOf(i);
        console.log('index', index);
         this.userCreation.roles[index].sub_role_name.splice(this.userCreation.roles[index].sub_role_name.indexOf(value), 1);
         if(i.sub_role_name.length == 0){
                var index = this.userCreation.roles.indexOf(i);
                //console.log(i);
                this.userCreation.roles.splice(index, 1);
                console.log(role, this.userCreation);
                
                }
         console.log(role, this.userCreation);
         //console.log(this.userCreation.roles[index].sub_role.indexOf[value]);

            
            }
        }



}
  }



save(){

        console.log(this.userCreation);
        this.login = JSON.parse(localStorage.getItem('admin'));
        this.accessToken = "Bearer "+this.login.access_token;
        var headers = new Headers();
        headers.append('Authorization', this.accessToken);
        headers.append('Content-Type', 'application/json');
        var body = this.userCreation;
        return this.http.post(credentials.host + '/api/users', body, {headers: headers})
        .map(res => res.json())
            .subscribe(
                    data => {this.userCreation = data},
                    error => alert(error),
                    () => {
                            if (this.userCreation.success == 'true'){
                                alert(this.userCreation.msg);
                                console.log('create_user', this.userCreation);
                                this.router.navigate(['/ActiveUsers']);
                                }
                                else{
                                    alert(this.userCreation.msg);
                                    }
                            }
                );

}

cancel(){

this.router.navigate(['/ActiveUsers']);
}

  onSelect(value: string) {
    console.log(' BEFORE FILTER ', value);
    this.filter = this.branches.filter(branch => branch.branch_name == value);
    console.log(' FILTER ', this.filter);
    this.userCreation.city = this.filter[0].city_name;
    this.userCreation.state = this.filter[0].state_name;
    //console.log(' CITY ',this.userCreation.city);
    //console.log(' STATE ',this.userCreation.state);
  }


/* Api request for taluk select based on district name
get_taluk(city_name){

        
    
        this.search_city = city_name;
        console.log(this.search_city);
        //this.userCreation.allocate_area[0].city_name = city_name;
            return this.http.get('https://data.gov.in/api/datastore/resource.json?resource_id=6176ee09-3d56-4a3b-8115-21841576b2f6&api-key=616f02620790eef75f0422d4590f8816&filters[Districtname]='+this.search_city+'&fields=taluk')
           .map(res => res.json())
           .subscribe(    
                     data => {this.data1 = data }, 
                     error => alert(error),
                     () => {
                            console.log(this.data1);
                            for (let i of this.data1) {
                                console.log(i);
                                    }
                            }
            );
}

allocate_area(taluk_data){

console.log(taluk_data);
console.log(this.search_city);

        if (this.userCreation.allocate_area.length == 0) {
            let first = new Area();
            first.city_name = this.search_city;
            first.taluk_name.push(taluk_data);
            this.userCreation.allocate_area.push(first);
            console.log(this.userCreation);
            this.show_taluk = true;
        } else {
        console.log('city_name', this.search_city);
        let create_new_city: boolean = false;
        let new_index: number;
            for (let i of this.userCreation.allocate_area) {
                if (i.city_name != this.search_city) {
                    create_new_city = true;
                } 
                if (i.city_name == this.search_city) {
                    create_new_city = false;
                    new_index = this.userCreation.allocate_area.indexOf(i);
                    break;
                }
            }

            if (create_new_city) {
                let r_o = new Area();
                r_o.city_name = this.search_city;
                r_o.taluk_name.push(taluk_data);
                this.userCreation.allocate_area.push(r_o);
            } else {
                this.userCreation.allocate_area[new_index].taluk_name.push(taluk_data);
            }
            
        }


}*/

}
