import {Component} from '@angular/core'
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import{SampleComponent} from './sample.component';


@Component({

	selector: 'my-app',
	template: `<div *ngIf="showHeader">
					<h1> Hello this is my first angular2 application</h1>
					<my-home> </my-home>
					<about></about>
					<sample></sample>
				<div>`
})

export class AppComponent{ 
private showHeader: boolean;

	constructor(){
		this.showHeader=true;
}
}