import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BobComponent } from './about/bob/bob.component';
import { SusanComponent } from './about/susan/susan.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductsComponent } from './products/products.component';
import { ThingamathingsComponent } from './products/thingamathings/thingamathings.component';
import { UnderwaterbasketweavingComponent } from './products/underwaterbasketweaving/underwaterbasketweaving.component';
import { WhatsitfucksComponent } from './products/whatsitfucks/whatsitfucks.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    BobComponent,
    SusanComponent,
    PagenotfoundComponent,
    ProductsComponent,
    ThingamathingsComponent,
    UnderwaterbasketweavingComponent,
    WhatsitfucksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
