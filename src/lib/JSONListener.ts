// Generated from C:\Users\Mohammad\Downloads\JSON.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ArrayOfValuesContext } from "./JSONParser";
import { EmptyArrayContext } from "./JSONParser";
import { AnObjectContext } from "./JSONParser";
import { EmptyObjectContext } from "./JSONParser";
import { StringContext } from "./JSONParser";
import { AtomContext } from "./JSONParser";
import { ObjectValueContext } from "./JSONParser";
import { ArrayValueContext } from "./JSONParser";
import { JsonContext } from "./JSONParser";
import { ObjContext } from "./JSONParser";
import { ArrayContext } from "./JSONParser";
import { PairContext } from "./JSONParser";
import { ValueContext } from "./JSONParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `JSONParser`.
 */
export interface JSONListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `ArrayOfValues`
	 * labeled alternative in `JSONParser.array`.
	 * @param ctx the parse tree
	 */
	enterArrayOfValues?: (ctx: ArrayOfValuesContext) => void;
	/**
	 * Exit a parse tree produced by the `ArrayOfValues`
	 * labeled alternative in `JSONParser.array`.
	 * @param ctx the parse tree
	 */
	exitArrayOfValues?: (ctx: ArrayOfValuesContext) => void;

	/**
	 * Enter a parse tree produced by the `EmptyArray`
	 * labeled alternative in `JSONParser.array`.
	 * @param ctx the parse tree
	 */
	enterEmptyArray?: (ctx: EmptyArrayContext) => void;
	/**
	 * Exit a parse tree produced by the `EmptyArray`
	 * labeled alternative in `JSONParser.array`.
	 * @param ctx the parse tree
	 */
	exitEmptyArray?: (ctx: EmptyArrayContext) => void;

	/**
	 * Enter a parse tree produced by the `AnObject`
	 * labeled alternative in `JSONParser.obj`.
	 * @param ctx the parse tree
	 */
	enterAnObject?: (ctx: AnObjectContext) => void;
	/**
	 * Exit a parse tree produced by the `AnObject`
	 * labeled alternative in `JSONParser.obj`.
	 * @param ctx the parse tree
	 */
	exitAnObject?: (ctx: AnObjectContext) => void;

	/**
	 * Enter a parse tree produced by the `EmptyObject`
	 * labeled alternative in `JSONParser.obj`.
	 * @param ctx the parse tree
	 */
	enterEmptyObject?: (ctx: EmptyObjectContext) => void;
	/**
	 * Exit a parse tree produced by the `EmptyObject`
	 * labeled alternative in `JSONParser.obj`.
	 * @param ctx the parse tree
	 */
	exitEmptyObject?: (ctx: EmptyObjectContext) => void;

	/**
	 * Enter a parse tree produced by the `String`
	 * labeled alternative in `JSONParser.value`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by the `String`
	 * labeled alternative in `JSONParser.value`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;

	/**
	 * Enter a parse tree produced by the `Atom`
	 * labeled alternative in `JSONParser.value`.
	 * @param ctx the parse tree
	 */
	enterAtom?: (ctx: AtomContext) => void;
	/**
	 * Exit a parse tree produced by the `Atom`
	 * labeled alternative in `JSONParser.value`.
	 * @param ctx the parse tree
	 */
	exitAtom?: (ctx: AtomContext) => void;

	/**
	 * Enter a parse tree produced by the `ObjectValue`
	 * labeled alternative in `JSONParser.value`.
	 * @param ctx the parse tree
	 */
	enterObjectValue?: (ctx: ObjectValueContext) => void;
	/**
	 * Exit a parse tree produced by the `ObjectValue`
	 * labeled alternative in `JSONParser.value`.
	 * @param ctx the parse tree
	 */
	exitObjectValue?: (ctx: ObjectValueContext) => void;

	/**
	 * Enter a parse tree produced by the `ArrayValue`
	 * labeled alternative in `JSONParser.value`.
	 * @param ctx the parse tree
	 */
	enterArrayValue?: (ctx: ArrayValueContext) => void;
	/**
	 * Exit a parse tree produced by the `ArrayValue`
	 * labeled alternative in `JSONParser.value`.
	 * @param ctx the parse tree
	 */
	exitArrayValue?: (ctx: ArrayValueContext) => void;

	/**
	 * Enter a parse tree produced by `JSONParser.json`.
	 * @param ctx the parse tree
	 */
	enterJson?: (ctx: JsonContext) => void;
	/**
	 * Exit a parse tree produced by `JSONParser.json`.
	 * @param ctx the parse tree
	 */
	exitJson?: (ctx: JsonContext) => void;

	/**
	 * Enter a parse tree produced by `JSONParser.obj`.
	 * @param ctx the parse tree
	 */
	enterObj?: (ctx: ObjContext) => void;
	/**
	 * Exit a parse tree produced by `JSONParser.obj`.
	 * @param ctx the parse tree
	 */
	exitObj?: (ctx: ObjContext) => void;

	/**
	 * Enter a parse tree produced by `JSONParser.array`.
	 * @param ctx the parse tree
	 */
	enterArray?: (ctx: ArrayContext) => void;
	/**
	 * Exit a parse tree produced by `JSONParser.array`.
	 * @param ctx the parse tree
	 */
	exitArray?: (ctx: ArrayContext) => void;

	/**
	 * Enter a parse tree produced by `JSONParser.pair`.
	 * @param ctx the parse tree
	 */
	enterPair?: (ctx: PairContext) => void;
	/**
	 * Exit a parse tree produced by `JSONParser.pair`.
	 * @param ctx the parse tree
	 */
	exitPair?: (ctx: PairContext) => void;

	/**
	 * Enter a parse tree produced by `JSONParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `JSONParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;
}

