import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { JsonViewerComponent } from './json-viewer/json-viewer.component';
import { FormatValuePipe } from './json-viewer/format-value.pipe';
import { JsonDiffRendererComponent } from './json-diff-renderer/json-diff-renderer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, FormsModule,HttpClientModule],
  declarations: [
    AppComponent,
    JsonViewerComponent,
    FormatValuePipe,
    JsonDiffRendererComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
