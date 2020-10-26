import { CommonModule }                       
       from '@angular/common';
import { NgModule }                           
       from '@angular/core';
import { FormsModule, ReactiveFormsModule }   
       from '@angular/forms';
import { NgbModule }                          
       from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule }                      
       from 'ngx-mask';
import { CancerdiagnosticRoutingModule }                
       from './cancerdiagnostic-routing.module';
import { CancerdiagnosticComponent }                    
       from './cancerdiagnostic.component';
import { CustomComponentsModule }             
       from '../../../../app_component/customcomponents.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule, 
		ReactiveFormsModule,
		NgbModule,
		NgxMaskModule.forRoot(),
		CancerdiagnosticRoutingModule,
		CustomComponentsModule
	],
	declarations: [CancerdiagnosticComponent]
})
export class CancerdiagnosticModule { }