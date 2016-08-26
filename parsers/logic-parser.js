/* parser generated by jison 0.4.17 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var logicParser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,13],$V1=[1,12],$V2=[1,8],$V3=[1,16],$V4=[1,17],$V5=[1,18],$V6=[1,6],$V7=[1,7],$V8=[1,19],$V9=[1,20],$Va=[1,21],$Vb=[1,22],$Vc=[1,23],$Vd=[1,24],$Ve=[1,25],$Vf=[1,26],$Vg=[1,27],$Vh=[1,28],$Vi=[1,29],$Vj=[1,30],$Vk=[1,31],$Vl=[1,32],$Vm=[1,33],$Vn=[1,34],$Vo=[2,23],$Vp=[1,36],$Vq=[1,37],$Vr=[1,10,15,16,21,22,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,45],$Vs=[2,46],$Vt=[1,8,9,10,13,15,16,21,22,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,45],$Vu=[10,16],$Vv=[1,10,15,16,21,22,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,45],$Vw=[15,16],$Vx=[1,10,15,16,21,22,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43],$Vy=[2,19],$Vz=[1,10,15,16,21,22,29,30,31,32,33,34,35,36,37,38],$VA=[1,10,15,16,21,22,29,30,31,32,33,34,35,36,37,38,39,40,41];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"document":3,"expressions":4,"assignment":5,"expression":6,"variable":7,"=":8,"[":9,"]":10,"WORD":11,"function":12,"(":13,"params":14,")":15,",":16,"string":17,"SINGLE_QUOTE_STRING":18,"DOUBLE_QUOTE_STRING":19,"arr":20,"...":21,"..":22,"arr_elements":23,"arr_element":24,"arr_key":25,":":26,"numb":27,"NUMBER":28,"||":29,"&&":30,"|":31,"&":32,"!=":33,"==":34,">=":35,">":36,"<=":37,"<":38,".":39,"+":40,"-":41,"*":42,"/":43,"!":44,"?":45,"$accept":0,"$end":1},
terminals_: {2:"error",8:"=",9:"[",10:"]",11:"WORD",13:"(",15:")",16:",",18:"SINGLE_QUOTE_STRING",19:"DOUBLE_QUOTE_STRING",21:"...",22:"..",26:":",28:"NUMBER",29:"||",30:"&&",31:"|",32:"&",33:"!=",34:"==",35:">=",36:">",37:"<=",38:"<",39:".",40:"+",41:"-",42:"*",43:"/",44:"!",45:"?"},
productions_: [0,[3,1],[4,1],[4,1],[5,3],[7,4],[7,1],[12,4],[14,0],[14,1],[14,3],[17,1],[17,1],[20,5],[20,5],[20,3],[23,0],[23,1],[23,3],[24,1],[24,3],[25,1],[25,1],[25,1],[27,1],[6,3],[6,3],[6,3],[6,3],[6,3],[6,3],[6,3],[6,3],[6,3],[6,3],[6,3],[6,3],[6,3],[6,3],[6,3],[6,2],[6,2],[6,2],[6,3],[6,1],[6,1],[6,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
 return $$[$0]; 
break;
case 3:
 this.$ = {type: 'expr', value: $$[$0]}; 
break;
case 4:
 this.$ = {type: 'assign', value: $$[$0-2], expr: $$[$0]}; 
break;
case 5:
 $$[$0-3].keys.push($$[$0-1]); this.$ = $$[$0-3]; 
break;
case 6:
 this.$ = {type: 'var', value: $$[$0], keys: []}; 
break;
case 7:
 this.$ = {type: 'func', value: $$[$0-3], attrs: $$[$0-1]}; 
break;
case 8: case 16:
 this.$ = []; 
break;
case 9: case 17:
 this.$ = [$$[$0]]; 
break;
case 10: case 18:
 $$[$0-2].push($$[$0]); this.$ = $$[$0-2]; 
break;
case 11:
 this.$ = '"' + prepareDoubleQuoteString($$[$0]) + '"'; 
break;
case 12:
 this.$ = '"' + prepareSingleQuoteString($$[$0]) + '"'; 
break;
case 13:
 this.$ = {type: 'array', range: {type: 'open', value: [$$[$0-3], $$[$0-1]]}}; 
break;
case 14:
 this.$ = {type: 'array', range: {type: 'close', value: [$$[$0-3], $$[$0-1]]}}; 
break;
case 15:
 this.$ = {type: 'array', values: $$[$0-1]}; 
break;
case 19:
 this.$ = {key: null, value: $$[$0]}; 
break;
case 20:
 this.$ = {key: $$[$0-2], value: $$[$0]}; 
break;
case 24:
 this.$ = {type: 'num', value: $$[$0]}; 
break;
case 25:
 this.$ = {type: 'or', value: [$$[$0-2], $$[$0]]}; 
break;
case 26:
 this.$ = {type: 'and', value: [$$[$0-2], $$[$0]]}; 
break;
case 27:
 this.$ = {type: 'bitor', value: [$$[$0-2], $$[$0]]}; 
break;
case 28:
 this.$ = {type: 'bitand', value: [$$[$0-2], $$[$0]]}; 
break;
case 29:
 this.$ = {type: 'notequal', value: [$$[$0-2], $$[$0]]}; 
break;
case 30:
 this.$ = {type: 'equal', value: [$$[$0-2], $$[$0]]}; 
break;
case 31:
 this.$ = {type: 'gtequal', value: [$$[$0-2], $$[$0]]}; 
break;
case 32:
 this.$ = {type: 'gt', value: [$$[$0-2], $$[$0]]}; 
break;
case 33:
 this.$ = {type: 'ltequal', value: [$$[$0-2], $$[$0]]}; 
break;
case 34:
 this.$ = {type: 'lt', value: [$$[$0-2], $$[$0]]}; 
break;
case 35:
 this.$ = {type: 'concat', value: [$$[$0-2], $$[$0]]}; 
break;
case 36:
 this.$ = {type: 'plus', value: [$$[$0-2], $$[$0]]}; 
break;
case 37:
 this.$ = {type: 'minus', value: [$$[$0-2], $$[$0]]}; 
break;
case 38:
 this.$ = {type: 'mult', value: [$$[$0-2], $$[$0]]}; 
break;
case 39:
 this.$ = {type: 'divis', value: [$$[$0-2], $$[$0]]}; 
break;
case 40:
 this.$ = {type: 'uminus', value: $$[$0]}; 
break;
case 41:
 this.$ = {type: 'not', value: $$[$0]}; 
break;
case 42:
 this.$ = {type: 'isset', value: $$[$0-1]}; 
break;
case 43:
 this.$ = {type: 'brack', value: $$[$0-1]}; 
break;
}
},
table: [{3:1,4:2,5:3,6:4,7:5,9:$V0,11:$V1,12:10,13:$V2,17:14,18:$V3,19:$V4,20:9,25:11,27:15,28:$V5,41:$V6,44:$V7},{1:[3]},{1:[2,1]},{1:[2,2]},{1:[2,3],29:$V8,30:$V9,31:$Va,32:$Vb,33:$Vc,34:$Vd,35:$Ve,36:$Vf,37:$Vg,38:$Vh,39:$Vi,40:$Vj,41:$Vk,42:$Vl,43:$Vm,45:$Vn},o([1,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,45],$Vo,{8:[1,35],9:$Vp,13:$Vq}),{6:38,7:39,9:$V0,11:$V1,12:10,13:$V2,17:14,18:$V3,19:$V4,20:9,25:11,27:15,28:$V5,41:$V6,44:$V7},{6:40,7:39,9:$V0,11:$V1,12:10,13:$V2,17:14,18:$V3,19:$V4,20:9,25:11,27:15,28:$V5,41:$V6,44:$V7},{6:41,7:39,9:$V0,11:$V1,12:10,13:$V2,17:14,18:$V3,19:$V4,20:9,25:11,27:15,28:$V5,41:$V6,44:$V7},o($Vr,[2,44]),o($Vr,[2,45]),o($Vr,$Vs),o($Vt,[2,6]),o($Vu,[2,16],{20:9,12:10,17:14,27:15,7:39,6:42,23:43,25:44,24:45,9:$V0,11:$V1,13:$V2,18:$V3,19:$V4,28:$V5,41:$V6,44:$V7}),o($Vv,[2,21]),o($Vv,[2,22]),o($Vv,[2,11]),o($Vv,[2,12]),o($Vv,[2,24]),{6:46,7:39,9:$V0,11:$V1,12:10,13:$V2,17:14,18:$V3,19:$V4,20:9,25:11,27:15,28:$V5,41:$V6,44:$V7},{6:47,7:39,9:$V0,11:$V1,12:10,13:$V2,17:14,18:$V3,19:$V4,20:9,25:11,27:15,28:$V5,41:$V6,44:$V7},{6:48,7:39,9:$V0,11:$V1,12:10,13:$V2,17:14,18:$V3,19:$V4,20:9,25:11,27:15,28:$V5,41:$V6,44:$V7},{6:49,7:39,9:$V0,11:$V1,12:10,13:$V2,17:14,18:$V3,19:$V4,20:9,25:11,27:15,28:$V5,41:$V6,44:$V7},{6:50,7:39,9:$V0,11:$V1,12:10,13:$V2,17:14,18:$V3,19:$V4,20:9,25:11,27:15,28:$V5,41:$V6,44:$V7},{6:51,7:39,9:$V0,11:$V1,12:10,13:$V2,17:14,18:$V3,19:$V4,20:9,25:11,27:15,28:$V5,41:$V6,44:$V7},{6:52,7:39,9:$V0,11:$V1,12:10,13:$V2,17:14,18:$V3,19:$V4,20:9,25:11,27:15,28:$V5,41:$V6,44:$V7},{6:53,7:39,9:$V0,11:$V1,12:10,13:$V2,17:14,18:$V3,19:$V4,20:9,25:11,27:15,28:$V5,41:$V6,44:$V7},{6:54,7:39,9:$V0,11:$V1,12:10,13:$V2,17:14,18:$V3,19:$V4,20:9,25:11,27:15,28:$V5,41:$V6,44:$V7},{6:55,7:39,9:$V0,11:$V1,12:10,13:$V2,17:14,18:$V3,19:$V4,20:9,25:11,27:15,28:$V5,41:$V6,44:$V7},{6:56,7:39,9:$V0,11:$V1,12:10,13:$V2,17:14,18:$V3,19:$V4,20:9,25:11,27:15,28:$V5,41:$V6,44:$V7},{6:57,7:39,9:$V0,11:$V1,12:10,13:$V2,17:14,18:$V3,19:$V4,20:9,25:11,27:15,28:$V5,41:$V6,44:$V7},{6:58,7:39,9:$V0,11:$V1,12:10,13:$V2,17:14,18:$V3,19:$V4,20:9,25:11,27:15,28:$V5,41:$V6,44:$V7},{6:59,7:39,9:$V0,11:$V1,12:10,13:$V2,17:14,18:$V3,19:$V4,20:9,25:11,27:15,28:$V5,41:$V6,44:$V7},{6:60,7:39,9:$V0,11:$V1,12:10,13:$V2,17:14,18:$V3,19:$V4,20:9,25:11,27:15,28:$V5,41:$V6,44:$V7},o($Vr,[2,42]),{6:61,7:39,9:$V0,11:$V1,12:10,13:$V2,17:14,18:$V3,19:$V4,20:9,25:11,27:15,28:$V5,41:$V6,44:$V7},{6:62,7:39,9:$V0,11:$V1,12:10,13:$V2,17:14,18:$V3,19:$V4,20:9,25:11,27:15,28:$V5,41:$V6,44:$V7},o($Vw,[2,8],{20:9,12:10,25:11,17:14,27:15,7:39,14:63,6:64,9:$V0,11:$V1,13:$V2,18:$V3,19:$V4,28:$V5,41:$V6,44:$V7}),o($Vx,[2,40],{45:$Vn}),o($Vv,$Vo,{9:$Vp,13:$Vq}),o($Vx,[2,41],{45:$Vn}),{15:[1,65],29:$V8,30:$V9,31:$Va,32:$Vb,33:$Vc,34:$Vd,35:$Ve,36:$Vf,37:$Vg,38:$Vh,39:$Vi,40:$Vj,41:$Vk,42:$Vl,43:$Vm,45:$Vn},o($Vu,$Vy,{21:[1,66],22:[1,67],29:$V8,30:$V9,31:$Va,32:$Vb,33:$Vc,34:$Vd,35:$Ve,36:$Vf,37:$Vg,38:$Vh,39:$Vi,40:$Vj,41:$Vk,42:$Vl,43:$Vm,45:$Vn}),{10:[1,68],16:[1,69]},o([10,16,21,22,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,45],$Vs,{26:[1,70]}),o($Vu,[2,17]),o([1,10,15,16,21,22,29],[2,25],{30:$V9,31:$Va,32:$Vb,33:$Vc,34:$Vd,35:$Ve,36:$Vf,37:$Vg,38:$Vh,39:$Vi,40:$Vj,41:$Vk,42:$Vl,43:$Vm,45:$Vn}),o([1,10,15,16,21,22,29,30],[2,26],{31:$Va,32:$Vb,33:$Vc,34:$Vd,35:$Ve,36:$Vf,37:$Vg,38:$Vh,39:$Vi,40:$Vj,41:$Vk,42:$Vl,43:$Vm,45:$Vn}),o([1,10,15,16,21,22,29,30,31],[2,27],{32:$Vb,33:$Vc,34:$Vd,35:$Ve,36:$Vf,37:$Vg,38:$Vh,39:$Vi,40:$Vj,41:$Vk,42:$Vl,43:$Vm,45:$Vn}),o([1,10,15,16,21,22,29,30,31,32],[2,28],{33:$Vc,34:$Vd,35:$Ve,36:$Vf,37:$Vg,38:$Vh,39:$Vi,40:$Vj,41:$Vk,42:$Vl,43:$Vm,45:$Vn}),o([1,10,15,16,21,22,29,30,31,32,33],[2,29],{34:$Vd,35:$Ve,36:$Vf,37:$Vg,38:$Vh,39:$Vi,40:$Vj,41:$Vk,42:$Vl,43:$Vm,45:$Vn}),o([1,10,15,16,21,22,29,30,31,32,33,34],[2,30],{35:$Ve,36:$Vf,37:$Vg,38:$Vh,39:$Vi,40:$Vj,41:$Vk,42:$Vl,43:$Vm,45:$Vn}),o($Vz,[2,31],{39:$Vi,40:$Vj,41:$Vk,42:$Vl,43:$Vm,45:$Vn}),o($Vz,[2,32],{39:$Vi,40:$Vj,41:$Vk,42:$Vl,43:$Vm,45:$Vn}),o($Vz,[2,33],{39:$Vi,40:$Vj,41:$Vk,42:$Vl,43:$Vm,45:$Vn}),o($Vz,[2,34],{39:$Vi,40:$Vj,41:$Vk,42:$Vl,43:$Vm,45:$Vn}),o([1,10,15,16,21,22,29,30,31,32,33,34,35,36,37,38,39],[2,35],{40:$Vj,41:$Vk,42:$Vl,43:$Vm,45:$Vn}),o($VA,[2,36],{42:$Vl,43:$Vm,45:$Vn}),o($VA,[2,37],{42:$Vl,43:$Vm,45:$Vn}),o($Vx,[2,38],{45:$Vn}),o($Vx,[2,39],{45:$Vn}),{1:[2,4],29:$V8,30:$V9,31:$Va,32:$Vb,33:$Vc,34:$Vd,35:$Ve,36:$Vf,37:$Vg,38:$Vh,39:$Vi,40:$Vj,41:$Vk,42:$Vl,43:$Vm,45:$Vn},{10:[1,71],29:$V8,30:$V9,31:$Va,32:$Vb,33:$Vc,34:$Vd,35:$Ve,36:$Vf,37:$Vg,38:$Vh,39:$Vi,40:$Vj,41:$Vk,42:$Vl,43:$Vm,45:$Vn},{15:[1,72],16:[1,73]},o($Vw,[2,9],{29:$V8,30:$V9,31:$Va,32:$Vb,33:$Vc,34:$Vd,35:$Ve,36:$Vf,37:$Vg,38:$Vh,39:$Vi,40:$Vj,41:$Vk,42:$Vl,43:$Vm,45:$Vn}),o($Vr,[2,43]),{6:74,7:39,9:$V0,11:$V1,12:10,13:$V2,17:14,18:$V3,19:$V4,20:9,25:11,27:15,28:$V5,41:$V6,44:$V7},{6:75,7:39,9:$V0,11:$V1,12:10,13:$V2,17:14,18:$V3,19:$V4,20:9,25:11,27:15,28:$V5,41:$V6,44:$V7},o($Vr,[2,15]),{6:77,7:39,9:$V0,11:$V1,12:10,13:$V2,17:14,18:$V3,19:$V4,20:9,24:76,25:44,27:15,28:$V5,41:$V6,44:$V7},{6:78,7:39,9:$V0,11:$V1,12:10,13:$V2,17:14,18:$V3,19:$V4,20:9,25:11,27:15,28:$V5,41:$V6,44:$V7},o($Vt,[2,5]),o($Vr,[2,7]),{6:79,7:39,9:$V0,11:$V1,12:10,13:$V2,17:14,18:$V3,19:$V4,20:9,25:11,27:15,28:$V5,41:$V6,44:$V7},{10:[1,80],29:$V8,30:$V9,31:$Va,32:$Vb,33:$Vc,34:$Vd,35:$Ve,36:$Vf,37:$Vg,38:$Vh,39:$Vi,40:$Vj,41:$Vk,42:$Vl,43:$Vm,45:$Vn},{10:[1,81],29:$V8,30:$V9,31:$Va,32:$Vb,33:$Vc,34:$Vd,35:$Ve,36:$Vf,37:$Vg,38:$Vh,39:$Vi,40:$Vj,41:$Vk,42:$Vl,43:$Vm,45:$Vn},o($Vu,[2,18]),o($Vu,$Vy,{29:$V8,30:$V9,31:$Va,32:$Vb,33:$Vc,34:$Vd,35:$Ve,36:$Vf,37:$Vg,38:$Vh,39:$Vi,40:$Vj,41:$Vk,42:$Vl,43:$Vm,45:$Vn}),o($Vu,[2,20],{29:$V8,30:$V9,31:$Va,32:$Vb,33:$Vc,34:$Vd,35:$Ve,36:$Vf,37:$Vg,38:$Vh,39:$Vi,40:$Vj,41:$Vk,42:$Vl,43:$Vm,45:$Vn}),o($Vw,[2,10],{29:$V8,30:$V9,31:$Va,32:$Vb,33:$Vc,34:$Vd,35:$Ve,36:$Vf,37:$Vg,38:$Vh,39:$Vi,40:$Vj,41:$Vk,42:$Vl,43:$Vm,45:$Vn}),o($Vr,[2,13]),o($Vr,[2,14])],
defaultActions: {2:[2,1],3:[2,2]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        function _parseError (msg, hash) {
            this.message = msg;
            this.hash = hash;
        }
        _parseError.prototype = Error;

        throw new _parseError(str, hash);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

function prepareDoubleQuoteString(str) {
  return str.substr(1, str.length - 2).replace(/\"/g, '\\"');
}

function prepareSingleQuoteString(str) {
  return str.substr(1, str.length - 2).replace(/\\\'/g, '\'');
}
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:return 28;
break;
case 2:return 11;
break;
case 3:return 26;
break;
case 4:return 42;
break;
case 5:return 43;
break;
case 6:return 41;
break;
case 7:return 40;
break;
case 8:return '^';
break;
case 9:return 13;
break;
case 10:return 15;
break;
case 11:return 9;
break;
case 12:return 10;
break;
case 13:return 34;
break;
case 14:return 33;
break;
case 15:return 37;
break;
case 16:return 35;
break;
case 17:return 8;
break;
case 18:return 38;
break;
case 19:return 36;
break;
case 20:return 30;
break;
case 21:return 29;
break;
case 22:return 32;
break;
case 23:return 31;
break;
case 24:return 44;
break;
case 25:return 45;
break;
case 26:return 16;
break;
case 27:return 21;
break;
case 28:return 22;
break;
case 29:return 39;
break;
case 30:return 19;
break;
case 31:return 18;
break;
}
},
rules: [/^(?:[\s\n\t]+)/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:[a-zA-Z]+([a-zA-Z0-9_]+)?\b)/,/^(?::)/,/^(?:\*)/,/^(?:\/)/,/^(?:-)/,/^(?:\+)/,/^(?:\^)/,/^(?:\()/,/^(?:\))/,/^(?:\[)/,/^(?:\])/,/^(?:==)/,/^(?:!=)/,/^(?:<=)/,/^(?:>=)/,/^(?:=)/,/^(?:<)/,/^(?:>)/,/^(?:&&)/,/^(?:\|\|)/,/^(?:&)/,/^(?:\|)/,/^(?:!)/,/^(?:\?)/,/^(?:,)/,/^(?:\.\.\.)/,/^(?:\.\.)/,/^(?:\.)/,/^(?:"(\\"|[^\"])*?")/,/^(?:'(\\'|[^\'])*?')/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = logicParser;
exports.Parser = logicParser.Parser;
exports.parse = function () { return logicParser.parse.apply(logicParser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}