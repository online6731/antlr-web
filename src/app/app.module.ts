import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { MonacoEditorModule, MONACO_PATH } from "@materia-ui/ngx-monaco-editor";

import { ParsePipe } from "./parse.pipe";

@NgModule({
  declarations: [AppComponent, ParsePipe],
  imports: [BrowserModule, FormsModule, MonacoEditorModule],
  providers: [
    {
      provide: MONACO_PATH,
      useValue: "https://unpkg.com/monaco-editor@0.18.1/min/vs"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
