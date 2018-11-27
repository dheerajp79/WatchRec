import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import {  ReactiveFormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
import {NgbModule,NgbModal,NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {PopupFooterComponent} from './popupfooter/popupfooter.component';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        NgbModule.forRoot(),
        HttpClientModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        
        HomeComponent,
        PopupFooterComponent
    ],
    providers: [
        NgbModal,NgbActiveModal
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }