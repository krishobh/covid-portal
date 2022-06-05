import { NgModule} from "@angular/core";
import { RouterModule } from "@angular/router";
import { MapComponent } from "./map.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[MapComponent],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: '',
                pathMatch: 'full',
                component: MapComponent
            }
        ])
    ]
})

export class MapModule {

}