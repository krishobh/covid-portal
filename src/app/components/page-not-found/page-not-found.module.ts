import { NgModule} from "@angular/core";
import { RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found.component";

@NgModule({
    declarations:[PageNotFoundComponent],
    imports: [
        RouterModule.forChild([
            {
                path: '',
                pathMatch: 'full',
                component: PageNotFoundComponent
            }
        ])
    ]
})

export class PageNotFoundModule {

}