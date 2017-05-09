import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MdSidenav } from '@angular/material';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.pug',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	@ViewChild('sidenav') sidenav: MdSidenav;

	constructor(private router: Router) {}

	goTo(path: string) {
		this.sidenav.close();
		this.router.navigate([path]);
	}
}