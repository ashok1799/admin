import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Http, Headers, Response } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { Login } from './Login';
import { credentials } from './credentials';
import { LoginData } from './login_datas'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

public logindata: LoginData;
email: string = "kavi@brigita.co";
password: string = "admin123";
private loginToken: Login;

  constructor(private router: Router, private http: Http) { 
    
    this.loginToken = new Login();
    this.logindata = new LoginData();

    }


    login() {
    
    console.log( this.email);
    console.log( this.password);
    this.logindata.username = "kavi@brigita.co";
    this.logindata.password = "admin123";

    var headers = new Headers();
    //headers.append('Content-Type', 'application/x-www-form-urlencoded');
        //var body = 'username='+this.email+'&password='+this.password+'&client_id=2&client_secret=S5ZwYiMPj2X5qGbzzT7fDDFMyetdUVDefDmq2heQ&grant_type=password';
        var body = this.logindata;
        console.log(body);
       return this.http.post(credentials.host + '/admin_login', body)
       
            .map(res => res.json())
            .subscribe(
                data => localStorage.setItem('admin' , JSON.stringify(data)),
                error => {
                            if (error.status == 401)
                            {
                                alert("Please check the username and password");
                            }
                        },
                () => {

                        if (localStorage.getItem != null){
                            alert("Login Successfully");
                            this.router.navigate(['/Dashboard']);
                            }

                        }
            );
    }

  ngOnInit() {
  }

}
