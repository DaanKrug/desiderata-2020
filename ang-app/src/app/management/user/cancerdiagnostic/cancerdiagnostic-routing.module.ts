import { NgModule } 
       from '@angular/core';
import { Routes, RouterModule } 
       from '@angular/router';
import { CancerdiagnosticComponent } 
       from './cancerdiagnostic.component';

const routes: Routes = [{path: '',component: CancerdiagnosticComponent}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CancerdiagnosticRoutingModule { }