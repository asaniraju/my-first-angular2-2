import { Component } from'@angular/core' ;


@Component({
	moduleId: module.id,
	selector: 'my-home',
	templateUrl: './home.component.html' 
})

export class HomeComponent{

	private Message :string;
	constructor(){
		this.Message="i am home and constructor";
	}

}