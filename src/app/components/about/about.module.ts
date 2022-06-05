import { NgModule} from "@angular/core";
import { RouterModule } from "@angular/router";
import { AboutComponent } from "./about.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[AboutComponent],
    imports: [
        CommonModule,
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