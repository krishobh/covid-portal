import { NgModule} from "@angular/core";
import { RouterModule } from "@angular/router";
import { StatisticsComponent } from "./statistics.component";

@NgModule({
    declarations:[StatisticsComponent],
    imports: [
        RouterModule.forChild([
            {
                path: '',
                pathMatch: 'full',
                component: StatisticsComponent
            }
        ])
    ]
})

export class statisticsModule {

}