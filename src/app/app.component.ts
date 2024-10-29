import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { HeroComponent } from "./hero/hero.component";
import { OurfeaturesComponent } from "./ourfeatures/ourfeatures.component";
import { AboutincepComponent } from "./aboutincep/aboutincep.component";
import { InsuranceServicesComponent } from "./insurance-services/insurance-services.component";
import { WhychooseusComponent } from "./whychooseus/whychooseus.component";
import { ExpertteamComponent } from "./expertteam/expertteam.component";
import { OurreviewComponent } from "./ourreview/ourreview.component";
import { BlogandnewsComponent } from "./blogandnews/blogandnews.component";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [
		RouterOutlet,
		HeaderComponent,
		HeroComponent,
		OurfeaturesComponent,
		AboutincepComponent,
		InsuranceServicesComponent,
		WhychooseusComponent,
		ExpertteamComponent,
		OurreviewComponent,
		BlogandnewsComponent,
	],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.css",
})
export class AppComponent {
	title = "insurance_website";
}
