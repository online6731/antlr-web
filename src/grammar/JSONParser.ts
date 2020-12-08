// Generated from C:\Users\Mohammad\Downloads\JSON.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { JSONListener } from "./JSONListener";

export class JSONParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly LCURLY = 8;
	public static readonly LBRACK = 9;
	public static readonly STRING = 10;
	public static readonly NUMBER = 11;
	public static readonly WS = 12;
	public static readonly RULE_json = 0;
	public static readonly RULE_obj = 1;
	public static readonly RULE_array = 2;
	public static readonly RULE_pair = 3;
	public static readonly RULE_value = 4;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"json", "obj", "array", "pair", "value",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "','", "'}'", "']'", "':'", "'true'", "'false'", "'null'", 
		"'{'", "'['",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "LCURLY", "LBRACK", "STRING", "NUMBER", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(JSONParser._LITERAL_NAMES, JSONParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return JSONParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "JSON.g4"; }

	// @Override
	public get ruleNames(): string[] { return JSONParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return JSONParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(JSONParser._ATN, this);
	}
	// @RuleVersion(0)
	public json(): JsonContext {
		let _localctx: JsonContext = new JsonContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, JSONParser.RULE_json);
		try {
			this.state = 12;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JSONParser.LCURLY:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 10;
				this.obj();
				}
				break;
			case JSONParser.LBRACK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 11;
				this.array();
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
	// @RuleVersion(0)
	public obj(): ObjContext {
		let _localctx: ObjContext = new ObjContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, JSONParser.RULE_obj);
		let _la: number;
		try {
			this.state = 27;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				_localctx = new AnObjectContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 14;
				this.match(JSONParser.LCURLY);
				this.state = 15;
				this.pair();
				this.state = 20;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JSONParser.T__0) {
					{
					{
					this.state = 16;
					this.match(JSONParser.T__0);
					this.state = 17;
					this.pair();
					}
					}
					this.state = 22;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 23;
				this.match(JSONParser.T__1);
				}
				break;

			case 2:
				_localctx = new EmptyObjectContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 25;
				this.match(JSONParser.LCURLY);
				this.state = 26;
				this.match(JSONParser.T__1);
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
	public array(): ArrayContext {
		let _localctx: ArrayContext = new ArrayContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, JSONParser.RULE_array);
		let _la: number;
		try {
			this.state = 42;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				_localctx = new ArrayOfValuesContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 29;
				this.match(JSONParser.LBRACK);
				this.state = 30;
				this.value();
				this.state = 35;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JSONParser.T__0) {
					{
					{
					this.state = 31;
					this.match(JSONParser.T__0);
					this.state = 32;
					this.value();
					}
					}
					this.state = 37;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 38;
				this.match(JSONParser.T__2);
				}
				break;

			case 2:
				_localctx = new EmptyArrayContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 40;
				this.match(JSONParser.LBRACK);
				this.state = 41;
				this.match(JSONParser.T__2);
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
		this.enterRule(_localctx, 6, JSONParser.RULE_pair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 44;
			this.match(JSONParser.STRING);
			this.state = 45;
			this.match(JSONParser.T__3);
			this.state = 46;
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
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, JSONParser.RULE_value);
		try {
			this.state = 55;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JSONParser.STRING:
				_localctx = new StringContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 48;
				this.match(JSONParser.STRING);
				}
				break;
			case JSONParser.NUMBER:
				_localctx = new AtomContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 49;
				this.match(JSONParser.NUMBER);
				}
				break;
			case JSONParser.LCURLY:
				_localctx = new ObjectValueContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 50;
				this.obj();
				}
				break;
			case JSONParser.LBRACK:
				_localctx = new ArrayValueContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 51;
				this.array();
				}
				break;
			case JSONParser.T__4:
				_localctx = new AtomContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 52;
				this.match(JSONParser.T__4);
				}
				break;
			case JSONParser.T__5:
				_localctx = new AtomContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 53;
				this.match(JSONParser.T__5);
				}
				break;
			case JSONParser.T__6:
				_localctx = new AtomContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 54;
				this.match(JSONParser.T__6);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x0E<\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x03\x02" +
		"\x03\x02\x05\x02\x0F\n\x02\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03\x15" +
		"\n\x03\f\x03\x0E\x03\x18\v\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03" +
		"\x1E\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04$\n\x04\f\x04\x0E\x04" +
		"\'\v\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04-\n\x04\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x05\x06:\n\x06\x03\x06\x02\x02\x02\x07\x02\x02\x04\x02\x06\x02\b\x02" +
		"\n\x02\x02\x02\x02A\x02\x0E\x03\x02\x02\x02\x04\x1D\x03\x02\x02\x02\x06" +
		",\x03\x02\x02\x02\b.\x03\x02\x02\x02\n9\x03\x02\x02\x02\f\x0F\x05\x04" +
		"\x03\x02\r\x0F\x05\x06\x04\x02\x0E\f\x03\x02\x02\x02\x0E\r\x03\x02\x02" +
		"\x02\x0F\x03\x03\x02\x02\x02\x10\x11\x07\n\x02\x02\x11\x16\x05\b\x05\x02" +
		"\x12\x13\x07\x03\x02\x02\x13\x15\x05\b\x05\x02\x14\x12\x03\x02\x02\x02" +
		"\x15\x18\x03\x02\x02\x02\x16\x14\x03\x02\x02\x02\x16\x17\x03\x02\x02\x02" +
		"\x17\x19\x03\x02\x02\x02\x18\x16\x03\x02\x02\x02\x19\x1A\x07\x04\x02\x02" +
		"\x1A\x1E\x03\x02\x02\x02\x1B\x1C\x07\n\x02\x02\x1C\x1E\x07\x04\x02\x02" +
		"\x1D\x10\x03\x02\x02\x02\x1D\x1B\x03\x02\x02\x02\x1E\x05\x03\x02\x02\x02" +
		"\x1F \x07\v\x02\x02 %\x05\n\x06\x02!\"\x07\x03\x02\x02\"$\x05\n\x06\x02" +
		"#!\x03\x02\x02\x02$\'\x03\x02\x02\x02%#\x03\x02\x02\x02%&\x03\x02\x02" +
		"\x02&(\x03\x02\x02\x02\'%\x03\x02\x02\x02()\x07\x05\x02\x02)-\x03\x02" +
		"\x02\x02*+\x07\v\x02\x02+-\x07\x05\x02\x02,\x1F\x03\x02\x02\x02,*\x03" +
		"\x02\x02\x02-\x07\x03\x02\x02\x02./\x07\f\x02\x02/0\x07\x06\x02\x0201" +
		"\x05\n\x06\x021\t\x03\x02\x02\x022:\x07\f\x02\x023:\x07\r\x02\x024:\x05" +
		"\x04\x03\x025:\x05\x06\x04\x026:\x07\x07\x02\x027:\x07\b\x02\x028:\x07" +
		"\t\x02\x0292\x03\x02\x02\x0293\x03\x02\x02\x0294\x03\x02\x02\x0295\x03" +
		"\x02\x02\x0296\x03\x02\x02\x0297\x03\x02\x02\x0298\x03\x02\x02\x02:\v" +
		"\x03\x02\x02\x02\b\x0E\x16\x1D%,9";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!JSONParser.__ATN) {
			JSONParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(JSONParser._serializedATN));
		}

		return JSONParser.__ATN;
	}

}

export class JsonContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return JSONParser.RULE_json; }
	// @Override
	public enterRule(listener: JSONListener): void {
		if (listener.enterJson) {
			listener.enterJson(this);
		}
	}
	// @Override
	public exitRule(listener: JSONListener): void {
		if (listener.exitJson) {
			listener.exitJson(this);
		}
	}
}


export class ObjContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JSONParser.RULE_obj; }
	public copyFrom(ctx: ObjContext): void {
		super.copyFrom(ctx);
	}
}
export class AnObjectContext extends ObjContext {
	public LCURLY(): TerminalNode { return this.getToken(JSONParser.LCURLY, 0); }
	public pair(): PairContext[];
	public pair(i: number): PairContext;
	public pair(i?: number): PairContext | PairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PairContext);
		} else {
			return this.getRuleContext(i, PairContext);
		}
	}
	constructor(ctx: ObjContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JSONListener): void {
		if (listener.enterAnObject) {
			listener.enterAnObject(this);
		}
	}
	// @Override
	public exitRule(listener: JSONListener): void {
		if (listener.exitAnObject) {
			listener.exitAnObject(this);
		}
	}
}
export class EmptyObjectContext extends ObjContext {
	public LCURLY(): TerminalNode { return this.getToken(JSONParser.LCURLY, 0); }
	constructor(ctx: ObjContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JSONListener): void {
		if (listener.enterEmptyObject) {
			listener.enterEmptyObject(this);
		}
	}
	// @Override
	public exitRule(listener: JSONListener): void {
		if (listener.exitEmptyObject) {
			listener.exitEmptyObject(this);
		}
	}
}


export class ArrayContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JSONParser.RULE_array; }
	public copyFrom(ctx: ArrayContext): void {
		super.copyFrom(ctx);
	}
}
export class ArrayOfValuesContext extends ArrayContext {
	public LBRACK(): TerminalNode { return this.getToken(JSONParser.LBRACK, 0); }
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	constructor(ctx: ArrayContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JSONListener): void {
		if (listener.enterArrayOfValues) {
			listener.enterArrayOfValues(this);
		}
	}
	// @Override
	public exitRule(listener: JSONListener): void {
		if (listener.exitArrayOfValues) {
			listener.exitArrayOfValues(this);
		}
	}
}
export class EmptyArrayContext extends ArrayContext {
	public LBRACK(): TerminalNode { return this.getToken(JSONParser.LBRACK, 0); }
	constructor(ctx: ArrayContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JSONListener): void {
		if (listener.enterEmptyArray) {
			listener.enterEmptyArray(this);
		}
	}
	// @Override
	public exitRule(listener: JSONListener): void {
		if (listener.exitEmptyArray) {
			listener.exitEmptyArray(this);
		}
	}
}


export class PairContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(JSONParser.STRING, 0); }
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JSONParser.RULE_pair; }
	// @Override
	public enterRule(listener: JSONListener): void {
		if (listener.enterPair) {
			listener.enterPair(this);
		}
	}
	// @Override
	public exitRule(listener: JSONListener): void {
		if (listener.exitPair) {
			listener.exitPair(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JSONParser.RULE_value; }
	public copyFrom(ctx: ValueContext): void {
		super.copyFrom(ctx);
	}
}
export class StringContext extends ValueContext {
	public STRING(): TerminalNode { return this.getToken(JSONParser.STRING, 0); }
	constructor(ctx: ValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JSONListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: JSONListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
}
export class AtomContext extends ValueContext {
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(JSONParser.NUMBER, 0); }
	constructor(ctx: ValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JSONListener): void {
		if (listener.enterAtom) {
			listener.enterAtom(this);
		}
	}
	// @Override
	public exitRule(listener: JSONListener): void {
		if (listener.exitAtom) {
			listener.exitAtom(this);
		}
	}
}
export class ObjectValueContext extends ValueContext {
	public obj(): ObjContext {
		return this.getRuleContext(0, ObjContext);
	}
	constructor(ctx: ValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JSONListener): void {
		if (listener.enterObjectValue) {
			listener.enterObjectValue(this);
		}
	}
	// @Override
	public exitRule(listener: JSONListener): void {
		if (listener.exitObjectValue) {
			listener.exitObjectValue(this);
		}
	}
}
export class ArrayValueContext extends ValueContext {
	public array(): ArrayContext {
		return this.getRuleContext(0, ArrayContext);
	}
	constructor(ctx: ValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: JSONListener): void {
		if (listener.enterArrayValue) {
			listener.enterArrayValue(this);
		}
	}
	// @Override
	public exitRule(listener: JSONListener): void {
		if (listener.exitArrayValue) {
			listener.exitArrayValue(this);
		}
	}
}


