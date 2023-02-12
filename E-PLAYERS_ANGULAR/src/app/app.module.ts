import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedComponent } from './shared/shared.component';
import { CabecalhoComponent } from './shared/cabecalho/cabecalho.component';
import { BannerComponent } from './shared/banner/banner.component';
import { JogosComponent } from './shared/jogos/jogos.component';
import { OfertasComponent } from './shared/ofertas/ofertas.component';
import { LigaComponent } from './shared/liga/liga.component';
import { RodapeComponent } from './shared/rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    CabecalhoComponent,
    BannerComponent,
    JogosComponent,
    OfertasComponent,
    LigaComponent,
    RodapeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
