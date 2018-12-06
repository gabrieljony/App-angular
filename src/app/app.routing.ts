import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { combineLatest } from 'rxjs';
//import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
                /*{
            
                    path: '',
                    redirectTo: 'carta/cadastro',
                    pathMatch:'full',
                },*/
                {
                path:'',
                //component: AppComponent,
                children: [
                    {
                        path:'carta',
                        loadChildren: './carta/carta.module#CartaModule'
                    }
                ]
            }

        ], {useHash: true})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { 
    
}