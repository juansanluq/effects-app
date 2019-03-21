import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  txtInput: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  irUsuario( id: string ) {
    if ( !id ) {
      return;
    } else {
      this.router.navigate([ '/usuario', id ]);
    }
  }

}
