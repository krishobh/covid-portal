import { NgModule} from "@angular/core";
import { RouterModule } from "@angular/router";
import { HistoryComponent } from "./history.component";

@NgModule({
    declarations:[HistoryComponent],
    imports: [
        RouterModule.forChild([
            {
                path: '',
                pathMatch: 'full',
                component: HistoryComponent
            }
        ])
    ]
})

export class HistoryModule {

}