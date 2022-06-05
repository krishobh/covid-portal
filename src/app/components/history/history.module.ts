import { NgModule} from "@angular/core";
import { RouterModule } from "@angular/router";
import { HistoryComponent } from "./history.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[HistoryComponent],
    imports: [
        CommonModule,
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