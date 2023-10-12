import { Component, OnInit } from '@angular/core';
import { GithubService } from './github.service';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'gh-portfolio';
	username = '';
	constructor(private gitubService: GithubService) { }
	ngOnInit(): void {
		this.username = this.gitubService.username;
	}
}
