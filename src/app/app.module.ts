import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { BannerComponent } from './shared/components/banner/banner.component';
import { WhyChooseComponent } from './shared/components/why-choose/why-choose.component';
import { LatestArticlesComponent } from './shared/components/latest-articles/latest-articles.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CardComponent } from './shared/components/card/card.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { CardImageComponent } from './shared/components/card-image/card-image.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    BannerComponent,
    WhyChooseComponent,
    LatestArticlesComponent,
    FooterComponent,
    CardComponent,
    HeaderComponent,
    HomeComponent,
    CardImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
