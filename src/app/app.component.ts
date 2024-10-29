import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { HeroComponent } from "./hero/hero.component";
import { OurfeaturesComponent } from "./ourfeatures/ourfeatures.component";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [
		RouterOutlet,
		HeaderComponent,
		HeroComponent,
		OurfeaturesComponent,
	],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.css",
})
export class AppComponent {
	title = "insurance_website";
}
