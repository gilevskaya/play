import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";
import { JsonLexer } from "./grammar/JsonLexer";
import { JsonParser, JsonContext, ValueContext } from "./grammar/JsonParser";
import { JsonListener } from "./grammar/JsonListener";

// Create the lexer and parser
let inputStream = new ANTLRInputStream('{"a": "b", "c": {"d": "e"}}');
let lexer = new JsonLexer(inputStream);
let tokenStream = new CommonTokenStream(lexer);
let parser = new JsonParser(tokenStream);

// Parse the input, where `compilationUnit` is whatever entry point you defined
let tree = parser.json();

class EnterFunctionListener implements JsonListener {
  // Assuming a parser rule with name: `functionDeclaration`
  enterJson(context: JsonContext) {
    console.log("JsonContext", context);
    // ...
  }
  enterValue(context: ValueContext) {
    console.log("ValueContext", context);
  }

  // other enterX functions...
}

// Create the listener
const listener: JsonListener = new EnterFunctionListener();
// Use the entry point for listeners
ParseTreeWalker.DEFAULT.walk(listener, tree);
