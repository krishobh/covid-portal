import { NgModule} from "@angular/core";
import { RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[PageNotFoundComponent],
    imports: [
        CommonModule,
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