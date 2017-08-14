import { Component, OnInit } from '@angular/core';
import {Accordion, AccordionGroup} from './../active-user-creation/accordion';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Http, Headers, Response } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { Login } from './../login/Login';
import { credentials } from './../login/credentials';
import { MetaDataDetails } from './adddata';
declare var $: any;

@Component({
  selector: 'app-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.css']
})
export class MetadataComponent implements OnInit {
private login: Login;
private accessToken: string;
data:any;
public meta: MetaDataDetails;
public change_data: string;
public copy:any;



  constructor(private router: Router, private http: Http) {
        this.login = new Login();
        this.meta = new MetaDataDetails();
     }

  ngOnInit() {
            this.getAllmetadata();
            $(document).ready(function () {
            $.getJSON("http://freegeoip.net/json/?callback=?", function (data) {
                var obj = data;
                var copy = Object.assign({}, obj);
                //console.log('ipaddress track', copy);
                //alert(data.ip);
            });
            });
            
            //console.log('ipaddress track', copy);

  }



getAllmetadata(){

        this.login = JSON.parse(localStorage.getItem('admin'));
        this.accessToken = "Bearer "+this.login.access_token;
        var headers = new Headers();
        headers.append('Authorization', this.accessToken);
        return this.http.get(credentials.host + '/api/all_metadata', {headers: headers})
        .map(res => res.json())
            .subscribe(
                    data => {this.data = data},
                    error => alert(error),
                    () => console.log('metadata', this.data)
                );
}

send_type(idcard){
//console.log(idcard);
this.meta = new MetaDataDetails();
this.meta.type = idcard;
}


add_metadata(){

        console.log('request', this.meta);
        this.login = JSON.parse(localStorage.getItem('admin'));
        this.accessToken = "Bearer "+this.login.access_token;

        var headers = new Headers();
        headers.append('Authorization', this.accessToken);
        headers.append('Content-Type', 'application/json');
        var body = this.meta;

 
       return this.http.post(credentials.host + '/api/create_metadata', body, {headers: headers})
       .map(res => res.json())
                .subscribe(
                    data => {this.meta = data},
                    error => alert(error),
                    () => {
                            console.log(this.meta);
                            if(this.meta.success == "true") {
                                alert('Metadata created successfully');
                                this.getAllmetadata();
                            } else {
                                alert('Error: please check the value');
                            }
                        }
                          
                );



        
}

meta_data_send(data, type){
console.log(data);
this.meta.old_data = data;
this.meta.type = type;
this.meta.data= data;
}

meta_data_edit(){

        this.meta.ip_address ="";
        this.meta.mac_address ="";
        this.meta.latitude ="";
        this.meta.longitude ="";
        
        console.log('url', this.meta.old_data);
        console.log('edit meta data', this.meta);
        /*this.login = JSON.parse(localStorage.getItem('admin'));
        this.accessToken = "Bearer "+this.login.access_token;

        var headers = new Headers();
        headers.append('Authorization', this.accessToken);
        headers.append('Content-Type', 'application/json');
        var body = this.meta;

 
       return this.http.post(credentials.host + '/api/all_edit_metadata', body, {headers: headers})
       .map(res => res.json())
                .subscribe(
                    data => {this.meta = data},
                    error => alert(error),
                    () => {
                            if (this.meta.success == 'true'){
                                alert('Meta data edit successfully');
                                console.log(this.meta);
                                this.getAllmetadata();
                            }
                            else {
                                alert(this.meta.message);
                                }
                            }
                          
                );*/
}

}
