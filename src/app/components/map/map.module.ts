import { NgModule} from "@angular/core";
import { RouterModule } from "@angular/router";
import { MapComponent } from "./map.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations:[MapComponent],
    imports: [
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