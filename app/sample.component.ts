import {Component} from '@angular/core';

@Component({
	selector: 'sample',
	template: `<div class="container" *ngIf="showHeader">
					<h1>hello welcome to sample component</h1>
					<br>
					his name:{{name | uppercase}}<br>
					<img bind-src="imageUrl"/><br>
					Enter name:<input type="text" [(ngModel)]="realName" (keyup.enter)="getValues($event)"/>
					<button class="btn btn-primary" (click)="runMe()">click</button>
					{{realName}}
					<br>
					<ul *ngFor="let item of items">
						<li>{{item}}</li>
					</ul>
					Display Price:{{price | currency:'USD':'true'}}
				</div>`
})

export class SampleComponent{
	private name:string;
	private imageUrl: string;
	private realName: string;
	private showHeader: boolean;
	private items:string[];
	private price:number;

	constructor(){
		this.name="scott desatnick"
		this.imageUrl="http://lorempixel.com/400/200"
		this.realName="raju";
		this.showHeader=true;
		this.items=["TV","Fridge","ac","car"];
		this.price=750;
	}
	runMe(){
		console.log('hey wait !!! did you click me?');
	}
	getValues(event :any){
		console.log(event.target.value)
		
	}
}