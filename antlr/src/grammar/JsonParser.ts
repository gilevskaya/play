// Generated from src/grammar/Json.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { JsonListener } from "./JsonListener";

export class JsonParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly STRING = 10;
	public static readonly NUMBER = 11;
	public static readonly WS = 12;
	public static readonly RULE_json = 0;
	public static readonly RULE_obj = 1;
	public static readonly RULE_pair = 2;
	public static readonly RULE_array = 3;
	public static readonly RULE_value = 4;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"json", "obj", "pair", "array", "value",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'{'", "','", "'}'", "':'", "'['", "']'", "'true'", "'false'", 
		"'null'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "STRING", "NUMBER", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(JsonParser._LITERAL_NAMES, JsonParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return JsonParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Json.g4"; }

	// @Override
	public get ruleNames(): string[] { return JsonParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return JsonParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(JsonParser._ATN, this);
	}
	// @RuleVersion(0)
	public json(): JsonContext {
		let _localctx: JsonContext = new JsonContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, JsonParser.RULE_json);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 10;
			this.value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public obj(): ObjContext {
		let _localctx: ObjContext = new ObjContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, JsonParser.RULE_obj);
		let _la: number;
		try {
			this.state = 25;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 12;
				this.match(JsonParser.T__0);
				this.state = 13;
				this.pair();
				this.state = 18;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JsonParser.T__1) {
					{
					{
					this.state = 14;
					this.match(JsonParser.T__1);
					this.state = 15;
					this.pair();
					}
					}
					this.state = 20;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 21;
				this.match(JsonParser.T__2);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 23;
				this.match(JsonParser.T__0);
				this.state = 24;
				this.match(JsonParser.T__2);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pair(): PairContext {
		let _localctx: PairContext = new PairContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, JsonParser.RULE_pair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 27;
			this.match(JsonParser.STRING);
			this.state = 28;
			this.match(JsonParser.T__3);
			this.state = 29;
			this.value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public array(): ArrayContext {
		let _localctx: ArrayContext = new ArrayContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, JsonParser.RULE_array);
		let _la: number;
		try {
			this.state = 44;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 31;
				this.match(JsonParser.T__4);
				this.state = 32;
				this.value();
				this.state = 37;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JsonParser.T__1) {
					{
					{
					this.state = 33;
					this.match(JsonParser.T__1);
					this.state = 34;
					this.value();
					}
					}
					this.state = 39;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 40;
				this.match(JsonParser.T__5);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 42;
				this.match(JsonParser.T__4);
				this.state = 43;
				this.match(JsonParser.T__5);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, JsonParser.RULE_value);
		try {
			this.state = 53;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JsonParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 46;
				this.match(JsonParser.STRING);
				}
				break;
			case JsonParser.NUMBER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 47;
				this.match(JsonParser.NUMBER);
				}
				break;
			case JsonParser.T__0:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 48;
				this.obj();
				}
				break;
			case JsonParser.T__4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 49;
				this.array();
				}
				break;
			case JsonParser.T__6:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 50;
				this.match(JsonParser.T__6);
				}
				break;
			case JsonParser.T__7:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 51;
				this.match(JsonParser.T__7);
				}
				break;
			case JsonParser.T__8:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 52;
				this.match(JsonParser.T__8);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x0E:\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x03\x02" +
		"\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03\x13\n\x03\f\x03\x0E\x03" +
		"\x16\v\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\x1C\n\x03\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05&\n\x05\f" +
		"\x05\x0E\x05)\v\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05/\n\x05\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x068\n\x06\x03" +
		"\x06\x02\x02\x02\x07\x02\x02\x04\x02\x06\x02\b\x02\n\x02\x02\x02\x02>" +
		"\x02\f\x03\x02\x02\x02\x04\x1B\x03\x02\x02\x02\x06\x1D\x03\x02\x02\x02" +
		"\b.\x03\x02\x02\x02\n7\x03\x02\x02\x02\f\r\x05\n\x06\x02\r\x03\x03\x02" +
		"\x02\x02\x0E\x0F\x07\x03\x02\x02\x0F\x14\x05\x06\x04\x02\x10\x11\x07\x04" +
		"\x02\x02\x11\x13\x05\x06\x04\x02\x12\x10\x03\x02\x02\x02\x13\x16\x03\x02" +
		"\x02\x02\x14\x12\x03\x02\x02\x02\x14\x15\x03\x02\x02\x02\x15\x17\x03\x02" +
		"\x02\x02\x16\x14\x03\x02\x02\x02\x17\x18\x07\x05\x02\x02\x18\x1C\x03\x02" +
		"\x02\x02\x19\x1A\x07\x03\x02\x02\x1A\x1C\x07\x05\x02\x02\x1B\x0E\x03\x02" +
		"\x02\x02\x1B\x19\x03\x02\x02\x02\x1C\x05\x03\x02\x02\x02\x1D\x1E\x07\f" +
		"\x02\x02\x1E\x1F\x07\x06\x02\x02\x1F \x05\n\x06\x02 \x07\x03\x02\x02\x02" +
		"!\"\x07\x07\x02\x02\"\'\x05\n\x06\x02#$\x07\x04\x02\x02$&\x05\n\x06\x02" +
		"%#\x03\x02\x02\x02&)\x03\x02\x02\x02\'%\x03\x02\x02\x02\'(\x03\x02\x02" +
		"\x02(*\x03\x02\x02\x02)\'\x03\x02\x02\x02*+\x07\b\x02\x02+/\x03\x02\x02" +
		"\x02,-\x07\x07\x02\x02-/\x07\b\x02\x02.!\x03\x02\x02\x02.,\x03\x02\x02" +
		"\x02/\t\x03\x02\x02\x0208\x07\f\x02\x0218\x07\r\x02\x0228\x05\x04\x03" +
		"\x0238\x05\b\x05\x0248\x07\t\x02\x0258\x07\n\x02\x0268\x07\v\x02\x027" +
		"0\x03\x02\x02\x0271\x03\x02\x02\x0272\x03\x02\x02\x0273\x03\x02\x02\x02" +
		"74\x03\x02\x02\x0275\x03\x02\x02\x0276\x03\x02\x02\x028\v\x03\x02\x02" +
		"\x02\x07\x14\x1B\'.7";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!JsonParser.__ATN) {
			JsonParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(JsonParser._serializedATN));
		}

		return JsonParser.__ATN;
	}

}

export class JsonContext extends ParserRuleContext {
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JsonParser.RULE_json; }
	// @Override
	public enterRule(listener: JsonListener): void {
		if (listener.enterJson) {
			listener.enterJson(this);
		}
	}
	// @Override
	public exitRule(listener: JsonListener): void {
		if (listener.exitJson) {
			listener.exitJson(this);
		}
	}
}


export class ObjContext extends ParserRuleContext {
	public pair(): PairContext[];
	public pair(i: number): PairContext;
	public pair(i?: number): PairContext | PairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PairContext);
		} else {
			return this.getRuleContext(i, PairContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JsonParser.RULE_obj; }
	// @Override
	public enterRule(listener: JsonListener): void {
		if (listener.enterObj) {
			listener.enterObj(this);
		}
	}
	// @Override
	public exitRule(listener: JsonListener): void {
		if (listener.exitObj) {
			listener.exitObj(this);
		}
	}
}


export class PairContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(JsonParser.STRING, 0); }
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JsonParser.RULE_pair; }
	// @Override
	public enterRule(listener: JsonListener): void {
		if (listener.enterPair) {
			listener.enterPair(this);
		}
	}
	// @Override
	public exitRule(listener: JsonListener): void {
		if (listener.exitPair) {
			listener.exitPair(this);
		}
	}
}


export class ArrayContext extends ParserRuleContext {
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JsonParser.RULE_array; }
	// @Override
	public enterRule(listener: JsonListener): void {
		if (listener.enterArray) {
			listener.enterArray(this);
		}
	}
	// @Override
	public exitRule(listener: JsonListener): void {
		if (listener.exitArray) {
			listener.exitArray(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(JsonParser.STRING, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(JsonParser.NUMBER, 0); }
	public obj(): ObjContext | undefined {
		return this.tryGetRuleContext(0, ObjContext);
	}
	public array(): ArrayContext | undefined {
		return this.tryGetRuleContext(0, ArrayContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JsonParser.RULE_value; }
	// @Override
	public enterRule(listener: JsonListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: JsonListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
}


