import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatMenuModule, MatSlideToggleModule, MatTabsModule, MatToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AceEditorModule } from 'ng2-ace-editor';
import { AppComponent } from './app.component';
// import { D3Service } from 'd3-ng2-service';
import { GngrEditorComponent } from './gngr-editor/gngr-editor.component';
import { TreeModule } from 'ng2-tree';

@NgModule({
  declarations: [
    AppComponent,
    GngrEditorComponent
  ],
  imports: [
    AceEditorModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatToolbarModule,
    TreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
