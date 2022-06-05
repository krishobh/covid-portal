import { NgModule} from "@angular/core";
import { RouterModule } from "@angular/router";
import { AboutComponent } from "./about.component";

@NgModule({
    declarations:[AboutComponent],
    imports: [
        RouterModule.forChild([
            {
                path: '',
                pathMatch: 'full',
                component: AboutComponent
            }
        ])
    ]
})

export class AboutModule {

}