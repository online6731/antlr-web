import { Pipe, PipeTransform } from "@angular/core";
import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import { JSONLexer } from "../lib/JSONLexer";
import { JSONParser } from "../lib/JSONParser";

@Pipe({ name: "parse" })
export class ParsePipe implements PipeTransform {
  transform(text: string): string {
    let parser = new JSONParser(
      new CommonTokenStream(new JSONLexer(new ANTLRInputStream(text)))
    );
    let parseTree = parser.json();
    return text;
  }
}
