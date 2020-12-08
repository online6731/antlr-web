// Generated from C:\Users\Mohammad\Downloads\JSON.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class JSONLexer extends Lexer {
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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "LCURLY", "LBRACK", 
		"STRING", "ESC", "UNICODE", "HEX", "NUMBER", "INT", "EXP", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "','", "'}'", "']'", "':'", "'true'", "'false'", "'null'", 
		"'{'", "'['",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "LCURLY", "LBRACK", "STRING", "NUMBER", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(JSONLexer._LITERAL_NAMES, JSONLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return JSONLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(JSONLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "JSON.g4"; }

	// @Override
	public get ruleNames(): string[] { return JSONLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return JSONLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return JSONLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return JSONLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x0E\x84\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03" +
		"\v\x03\v\x03\v\x07\vE\n\v\f\v\x0E\vH\v\v\x03\v\x03\v\x03\f\x03\f\x03\f" +
		"\x05\fO\n\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F" +
		"\x05\x0FZ\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F`\n\x0F\x03\x0F" +
		"\x05\x0Fc\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0Fi\n\x0F\x03\x0F" +
		"\x05\x0Fl\n\x0F\x03\x10\x03\x10\x03\x10\x07\x10q\n\x10\f\x10\x0E\x10t" +
		"\v\x10\x05\x10v\n\x10\x03\x11\x03\x11\x05\x11z\n\x11\x03\x11\x03\x11\x03" +
		"\x12\x06\x12\x7F\n\x12\r\x12\x0E\x12\x80\x03\x12\x03\x12\x02\x02\x02\x13" +
		"\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02" +
		"\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\x02\x19\x02\x02\x1B\x02\x02\x1D" +
		"\x02\r\x1F\x02\x02!\x02\x02#\x02\x0E\x03\x02\b\x04\x02$$^^\n\x02$$11^" +
		"^ddhhppttvv\x05\x022;CHch\x04\x02GGgg\x04\x02--//\x05\x02\v\f\x0F\x0F" +
		"\"\"\x02\x8B\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03" +
		"\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02" +
		"\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02" +
		"\x02\x02\x02\x15\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02#\x03\x02" +
		"\x02\x02\x03%\x03\x02\x02\x02\x05\'\x03\x02\x02\x02\x07)\x03\x02\x02\x02" +
		"\t+\x03\x02\x02\x02\v-\x03\x02\x02\x02\r2\x03\x02\x02\x02\x0F8\x03\x02" +
		"\x02\x02\x11=\x03\x02\x02\x02\x13?\x03\x02\x02\x02\x15A\x03\x02\x02\x02" +
		"\x17K\x03\x02\x02\x02\x19P\x03\x02\x02\x02\x1BV\x03\x02\x02\x02\x1Dk\x03" +
		"\x02\x02\x02\x1Fu\x03\x02\x02\x02!w\x03\x02\x02\x02#~\x03\x02\x02\x02" +
		"%&\x07.\x02\x02&\x04\x03\x02\x02\x02\'(\x07\x7F\x02\x02(\x06\x03\x02\x02" +
		"\x02)*\x07_\x02\x02*\b\x03\x02\x02\x02+,\x07<\x02\x02,\n\x03\x02\x02\x02" +
		"-.\x07v\x02\x02./\x07t\x02\x02/0\x07w\x02\x0201\x07g\x02\x021\f\x03\x02" +
		"\x02\x0223\x07h\x02\x0234\x07c\x02\x0245\x07n\x02\x0256\x07u\x02\x026" +
		"7\x07g\x02\x027\x0E\x03\x02\x02\x0289\x07p\x02\x029:\x07w\x02\x02:;\x07" +
		"n\x02\x02;<\x07n\x02\x02<\x10\x03\x02\x02\x02=>\x07}\x02\x02>\x12\x03" +
		"\x02\x02\x02?@\x07]\x02\x02@\x14\x03\x02\x02\x02AF\x07$\x02\x02BE\x05" +
		"\x17\f\x02CE\n\x02\x02\x02DB\x03\x02\x02\x02DC\x03\x02\x02\x02EH\x03\x02" +
		"\x02\x02FD\x03\x02\x02\x02FG\x03\x02\x02\x02GI\x03\x02\x02\x02HF\x03\x02" +
		"\x02\x02IJ\x07$\x02\x02J\x16\x03\x02\x02\x02KN\x07^\x02\x02LO\t\x03\x02" +
		"\x02MO\x05\x19\r\x02NL\x03\x02\x02\x02NM\x03\x02\x02\x02O\x18\x03\x02" +
		"\x02\x02PQ\x07w\x02\x02QR\x05\x1B\x0E\x02RS\x05\x1B\x0E\x02ST\x05\x1B" +
		"\x0E\x02TU\x05\x1B\x0E\x02U\x1A\x03\x02\x02\x02VW\t\x04\x02\x02W\x1C\x03" +
		"\x02\x02\x02XZ\x07/\x02\x02YX\x03\x02\x02\x02YZ\x03\x02\x02\x02Z[\x03" +
		"\x02\x02\x02[\\\x05\x1F\x10\x02\\]\x070\x02\x02]_\x05\x1F\x10\x02^`\x05" +
		"!\x11\x02_^\x03\x02\x02\x02_`\x03\x02\x02\x02`l\x03\x02\x02\x02ac\x07" +
		"/\x02\x02ba\x03\x02\x02\x02bc\x03\x02\x02\x02cd\x03\x02\x02\x02de\x05" +
		"\x1F\x10\x02ef\x05!\x11\x02fl\x03\x02\x02\x02gi\x07/\x02\x02hg\x03\x02" +
		"\x02\x02hi\x03\x02\x02\x02ij\x03\x02\x02\x02jl\x05\x1F\x10\x02kY\x03\x02" +
		"\x02\x02kb\x03\x02\x02\x02kh\x03\x02\x02\x02l\x1E\x03\x02\x02\x02mv\x07" +
		"2\x02\x02nr\x043;\x02oq\x042;\x02po\x03\x02\x02\x02qt\x03\x02\x02\x02" +
		"rp\x03\x02\x02\x02rs\x03\x02\x02\x02sv\x03\x02\x02\x02tr\x03\x02\x02\x02" +
		"um\x03\x02\x02\x02un\x03\x02\x02\x02v \x03\x02\x02\x02wy\t\x05\x02\x02" +
		"xz\t\x06\x02\x02yx\x03\x02\x02\x02yz\x03\x02\x02\x02z{\x03\x02\x02\x02" +
		"{|\x05\x1F\x10\x02|\"\x03\x02\x02\x02}\x7F\t\x07\x02\x02~}\x03\x02\x02" +
		"\x02\x7F\x80\x03\x02\x02\x02\x80~\x03\x02\x02\x02\x80\x81\x03\x02\x02" +
		"\x02\x81\x82\x03\x02\x02\x02\x82\x83\b\x12\x02\x02\x83$\x03\x02\x02\x02" +
		"\x0F\x02DFNY_bhkruy\x80\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!JSONLexer.__ATN) {
			JSONLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(JSONLexer._serializedATN));
		}

		return JSONLexer.__ATN;
	}

}
