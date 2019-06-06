// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// App
import { AppComponent } from './app.component';

// Ng-Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ValidationsComponent } from './validations/validations.component';
import { ValidationsListComponent } from './validations/validations-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: '/validations',
                pathMatch: 'full'
            },
            {
                path: 'validations',
                component: ValidationsComponent
            },
            {
                path: '**',
                component: PageNotFoundComponent
            }
        ]),
        NgbModule
    ],
    declarations: [
        AppComponent,
        ValidationsComponent,
        ValidationsListComponent,
        PageNotFoundComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
