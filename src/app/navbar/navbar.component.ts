import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
declare var $:JQueryStatic;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    ngAfterViewInit() {
        $('.dropdown-menu li a').on('click', function (event) {
            $(this).parent().toggleClass("open");
            event.preventDefault();
        });
    }

}
