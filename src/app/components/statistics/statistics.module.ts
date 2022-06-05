import { CommonModule } from "@angular/common";
import { NgModule} from "@angular/core";
import { RouterModule } from "@angular/router";
import { StatisticsComponent } from "./statistics.component";

@NgModule({
    declarations:[StatisticsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                pathMatch: 'full',
                component: StatisticsComponent
            }
        ])
    ]
})

export class StatisticsModule {

}