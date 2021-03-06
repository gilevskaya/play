grammar Json;
// https://github.com/antlr/grammars-v4

// parser

json: value;

obj: '{' pair (',' pair)* '}' | '{' '}';

pair: STRING ':' value;

array: '[' value (',' value)* ']' | '[' ']';

value:
	STRING
	| NUMBER
	| obj
	| array
	| 'true'
	| 'false'
	| 'null';

// lexer

STRING: '"' (ESC | SAFECODEPOINT)* '"';

fragment ESC: '\\' (["\\/bfnrt] | UNICODE);
fragment UNICODE: 'u' HEX HEX HEX HEX;
fragment HEX: [0-9a-fA-F];
fragment SAFECODEPOINT: ~ ["\\\u0000-\u001F];

NUMBER: '-'? INT ('.' [0-9]+)? EXP?;

fragment INT: '0' | [1-9] [0-9]*;

// no leading zeros

fragment EXP: [Ee] [+\-]? INT;

// \- since - means "range" inside [...]

WS: [ \t\n\r]+ -> skip;
