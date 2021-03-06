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
var sqlparser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[4,5,7,8,24,34,39,40,41,42,57],$V1=[1,28],$V2=[1,29],$V3=[1,25],$V4=[1,26],$V5=[1,21],$V6=[1,20],$V7=[1,22],$V8=[1,23],$V9=[1,24],$Va=[1,18],$Vb=[1,27],$Vc=[11,26,58,59,69],$Vd=[11,26,28,58,59,62,69],$Ve=[1,39],$Vf=[1,38],$Vg=[1,37],$Vh=[1,40],$Vi=[1,41],$Vj=[1,42],$Vk=[1,43],$Vl=[1,44],$Vm=[1,45],$Vn=[1,46],$Vo=[1,47],$Vp=[1,48],$Vq=[1,49],$Vr=[1,50],$Vs=[4,5,7,8,11,24,26,28,30,34,39,43,44,45,46,47,48,49,50,51,52,53,54,56,58,59,62,66,68,69],$Vt=[2,29],$Vu=[1,51],$Vv=[1,54],$Vw=[4,5,7,8,11,24,26,28,30,33,34,39,42,43,44,45,46,47,48,49,50,51,52,53,54,56,57,58,59,62,66,68,69,73,74],$Vx=[4,5,7,8,11,24,26,28,30,33,34,39,42,43,44,45,46,47,48,49,50,51,52,53,54,56,57,58,59,62,66,67,68,69,73,74],$Vy=[2,59],$Vz=[11,26,59,69],$VA=[1,85],$VB=[11,26,69],$VC=[1,91],$VD=[1,90],$VE=[1,93],$VF=[1,94],$VG=[1,96],$VH=[11,26,30,33,58,59,66,67,68,69],$VI=[4,5,7,8,11,24,26,28,30,39,43,44,46,47,48,49,50,51,52,53,58,59,62,66,68,69],$VJ=[4,5,7,8,11,24,26,28,30,34,39,43,44,45,46,47,48,49,50,51,52,53,58,59,62,66,68,69],$VK=[4,5,7,8,11,24,26,28,30,43,46,47,48,49,50,51,52,53,58,59,62,66,68,69],$VL=[4,5,7,8,11,24,26,28,30,43,52,53,58,59,62,66,68,69],$VM=[11,26],$VN=[11,26,43,58,59,66,68,69],$VO=[1,116],$VP=[28,43],$VQ=[11,26,28,69],$VR=[11,26,28],$VS=[1,133],$VT=[1,134],$VU=[11,26,28,42,57,73,74];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"Literal":3,"LITERAL":4,"BRALITERAL":5,"String":6,"STRING":7,"NSTRING":8,"main":9,"Statement":10,"EOF":11,"Select":12,"SELECT":13,"DistinctClause":14,"ColumnsClause":15,"FromClause":16,"WhereClause":17,"GroupClause":18,"OrderClause":19,"LimitClause":20,"DISTINCT":21,"TopClause":22,"TOP":23,"NUMBER":24,"ParamValue":25,"LIMIT":26,"Expression":27,"COMMA":28,"Column":29,"AS":30,"StringValue":31,"ColumnName":32,"DOT":33,"STAR":34,"Op":35,"NumValue":36,"LogicValue":37,"FunctionValue":38,"MINUS":39,"TRUE":40,"FALSE":41,"LPAR":42,"RPAR":43,"PLUS":44,"SLASH":45,"GT":46,"GE":47,"LT":48,"LE":49,"EQ":50,"NE":51,"AND":52,"OR":53,"IN":54,"ExpressionList":55,"NOT":56,"TEMPLATE_PARAM":57,"WHERE":58,"GROUP_BY":59,"GroupArgs":60,"GroupArg":61,"FROM":62,"Table":63,"Joins":64,"Join":65,"JOIN":66,"ON":67,"INNER_JOIN":68,"ORDER_BY":69,"OrderArgs":70,"OrderArg":71,"OrderType":72,"ASC":73,"DESC":74,"$accept":0,"$end":1},
terminals_: {2:"error",4:"LITERAL",5:"BRALITERAL",7:"STRING",8:"NSTRING",11:"EOF",13:"SELECT",21:"DISTINCT",23:"TOP",24:"NUMBER",26:"LIMIT",28:"COMMA",30:"AS",33:"DOT",34:"STAR",39:"MINUS",40:"TRUE",41:"FALSE",42:"LPAR",43:"RPAR",44:"PLUS",45:"SLASH",46:"GT",47:"GE",48:"LT",49:"LE",50:"EQ",51:"NE",52:"AND",53:"OR",54:"IN",56:"NOT",57:"TEMPLATE_PARAM",58:"WHERE",59:"GROUP_BY",62:"FROM",66:"JOIN",67:"ON",68:"INNER_JOIN",69:"ORDER_BY",73:"ASC",74:"DESC"},
productions_: [0,[3,1],[3,1],[6,1],[6,1],[9,2],[10,0],[10,1],[12,8],[14,0],[14,1],[22,0],[22,2],[22,2],[20,0],[20,2],[20,4],[15,3],[15,1],[29,3],[29,2],[29,3],[29,2],[29,3],[29,2],[29,1],[32,3],[32,1],[32,1],[27,1],[27,1],[27,1],[27,1],[27,1],[27,1],[27,1],[36,1],[36,2],[37,1],[37,1],[31,1],[31,1],[35,3],[35,3],[35,3],[35,3],[35,3],[35,3],[35,3],[35,3],[35,3],[35,3],[35,3],[35,3],[35,3],[35,5],[35,6],[35,3],[35,4],[25,1],[25,3],[38,4],[55,1],[55,3],[17,0],[17,2],[18,0],[18,2],[60,1],[60,3],[61,1],[61,1],[16,2],[16,3],[16,5],[16,0],[63,3],[63,3],[63,1],[63,1],[64,1],[64,2],[65,4],[65,4],[19,0],[19,2],[70,1],[70,3],[71,1],[71,1],[71,2],[72,1],[72,1],[72,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
this.$ = $$[$0];
break;
case 2:
 this.$ = $$[$0].substr(1,$$[$0].length-2); 
break;
case 3:
 this.$ = $$[$0].substr(1,$$[$0].length-2).replace(/(\\\')/g,"'").replace(/(\'\')/g,"'"); 
break;
case 4:
 this.$ = $$[$0].substr(2,$$[$0].length-3).replace(/(\\\')/g,"'").replace(/(\'\')/g,"'"); 
break;
case 5:
 return $$[$0-1] 
break;
case 6: case 64: case 66: case 75:
 this.$ = undefined; 
break;
case 8:

	        this.$ = {distinct: $$[$0-6], columns: $$[$0-5], from: $$[$0-4], where:$$[$0-3], group:$$[$0-2], order:$$[$0-1], limit:$$[$0]};
	    
break;
case 9:
 this.$ = false; 
break;
case 10:
 this.$ = true; 
break;
case 11:
 this.$ = null; 
break;
case 12: case 13: case 25: case 29: case 30: case 31: case 32: case 33: case 34: case 35: case 65: case 67: case 70: case 71:
 this.$ = $$[$0]; 
break;
case 14:
 this.$ = null;
break;
case 15:
 this.$ = [0, $$[$0]]
break;
case 16:
 this.$ = [$$[$0-2], $$[$0]]
break;
case 17:
 $$[$0].colIndex = $$[$0-2].push($$[$0]) - 1; this.$ = $$[$0-2]; 
break;
case 18:
 $$[$0].colIndex = 0; this.$ = [$$[$0]]; 
break;
case 19: case 21: case 23:
 $$[$0-2].as = $$[$0]; this.$ = $$[$0-2];
break;
case 20: case 22: case 24:
 $$[$0-1].as = $$[$0]; this.$ = $$[$0-1];
break;
case 26:
 $$[$0-2].value.push($$[$0]); this.$ = $$[$0-2];
break;
case 27:
 this.$ = new yy.Column({value:[$$[$0]], as:$$[$0]});
break;
case 28:
 this.$ = new yy.Column({value:['*']})
break;
case 36:
  this.$ = new yy.Value({value:parseFloat($$[$0])}); 
break;
case 37:
  this.$ = new yy.Value({value: -parseFloat($$[$0])}); 
break;
case 38:
 this.$ = new yy.Value({value:true}); 
break;
case 39:
 this.$ = new yy.Value({value:false}); 
break;
case 40:
 this.$ = new yy.Value({value: $$[$0].substr(1,$$[$0].length-2).replace(/(\\\')/g,"'").replace(/(\'\')/g,"'")}); 
break;
case 41:
 this.$ = new yy.Value({value: $$[$0].substr(2,$$[$0].length-3).replace(/(\\\')/g,"'").replace(/(\'\')/g,"'")}); 
break;
case 42:
 this.$ = $$[$0-1] 
break;
case 43:
 this.$ = new yy.Op({left:$$[$0-2], op:'+', right:$$[$0]}); 
break;
case 44:
 this.$ = new yy.Op({left:$$[$0-2], op:'-', right:$$[$0]}); 
break;
case 45:
 this.$ = new yy.Op({left:$$[$0-2], op:'*', right:$$[$0]}); 
break;
case 46:
 this.$ = new yy.Op({left:$$[$0-2], op:'/', right:$$[$0]}); 
break;
case 47:
 this.$ = new yy.Op({left:$$[$0-2], op:'>' , right:$$[$0]}); 
break;
case 48:
 this.$ = new yy.Op({left:$$[$0-2], op:'>=' , right:$$[$0]}); 
break;
case 49:
 this.$ = new yy.Op({left:$$[$0-2], op:'<' , right:$$[$0]}); 
break;
case 50:
 this.$ = new yy.Op({left:$$[$0-2], op:'<=' , right:$$[$0]}); 
break;
case 51:
 this.$ = new yy.Op({left:$$[$0-2], op:'=' , right:$$[$0]}); 
break;
case 52:
 this.$ = new yy.Op({left:$$[$0-2], op:'!=' , right:$$[$0]}); 
break;
case 53:
 this.$ = new yy.Op({left:$$[$0-2], op:'AND', right:$$[$0]}); 
break;
case 54:
 this.$ = new yy.Op({left:$$[$0-2], op:'OR' , right:$$[$0]}); 
break;
case 55:
 this.$ = new yy.Op({left:$$[$0-4], op:'IN' , right:$$[$0-1]}); 
break;
case 56:
 this.$ = new yy.Op({left:$$[$0-5], op:'NOT IN' , right:$$[$0-1]}); 
break;
case 57:
 $$[$0] = new yy.ParamValue({value:$$[$0]}); $$[$0].index = (yy.paramList.push($$[$0]) - 1);  this.$ = new yy.Op({left:$$[$0-2], op:'IN' , right:$$[$0]}); 
break;
case 58:
 $$[$0] = new yy.ParamValue({value:$$[$0]}); $$[$0].index = (yy.paramList.push($$[$0]) - 1); this.$ = new yy.Op({left:$$[$0-3], op:'NOT IN' , right:$$[$0]}); 
break;
case 59:
 $$[$0] = new yy.ParamValue({value:$$[$0]}); $$[$0].index = (yy.paramList.push($$[$0]) - 1); this.$ = $$[$0];
break;
case 60:
 $$[$0-1] = new yy.ParamValue({value:$$[$0-1]}); $$[$0-1].index = (yy.paramList.push($$[$0-1]) - 1); this.$ = $$[$0-1]; 
break;
case 61:
 this.$ = new yy.FunctionValue({name: $$[$0-3].value.join('.') , params: $$[$0-1]}) 
break;
case 62: case 68: case 80: case 86:
 this.$ = [$$[$0]] 
break;
case 63:
 $$[$0-2].push($$[$0]); this.$ = $$[$0-2]; 
break;
case 69: case 87:
 $$[$0-2].push($$[$0]); this.$ = $$[$0-2] 
break;
case 72:
 this.$ = { from: $$[$0] }; 
break;
case 73:
 this.$ = { from: $$[$0-1], joins: $$[$0] }; 
break;
case 74:
 this.$ = { from: $$[$0-2], joins: $$[$0-1] }; 
break;
case 76:
 this.$ = $$[$0-2].push($$[$0]); 
break;
case 77:
 $$[$0-2].as = $$[$0]; this.$ = $$[$0-2]
break;
case 78: case 79:
 this.$ = [$$[$0]];
break;
case 81:
 this.$ =  $$[$0-1].concat($$[$0]) 
break;
case 82: case 83:
 this.$ = new yy.Join({source:$$[$0-2], cond:$$[$0], type:'INNER_JOIN'})
break;
case 84:
 this.$ = undefined;
break;
case 85:
 this.$ = $$[$0] 
break;
case 88: case 89:
 this.$ = new yy.OrderValue({column:$$[$0], order:'ASC'}); 
break;
case 90:
 $$[$0-1].order = $$[$0]; this.$ = $$[$0-1]; 
break;
case 91:
 this.$ = 'ASC'
break;
case 92:
 this.$ = 'DESC'
break;
case 93:
 this.$ = $$[$0]
break;
}
},
table: [{9:1,10:2,11:[2,6],12:3,13:[1,4]},{1:[3]},{11:[1,5]},{11:[2,7]},o($V0,[2,9],{14:6,21:[1,7]}),{1:[2,5]},{3:19,4:$V1,5:$V2,7:$V3,8:$V4,15:8,24:$V5,25:16,27:10,29:9,31:15,32:12,34:$V6,35:11,36:13,37:14,38:17,39:$V7,40:$V8,41:$V9,42:$Va,57:$Vb},o($V0,[2,10]),o($Vc,[2,75],{16:30,28:[1,31],62:[1,32]}),o($Vd,[2,18]),o($Vd,[2,25],{3:34,31:36,4:$V1,5:$V2,7:$V3,8:$V4,24:[1,35],30:[1,33],34:$Ve,39:$Vf,44:$Vg,45:$Vh,46:$Vi,47:$Vj,48:$Vk,49:$Vl,50:$Vm,51:$Vn,52:$Vo,53:$Vp,54:$Vq,56:$Vr}),o($Vs,$Vt),o($Vs,[2,30],{33:$Vu,42:[1,52]}),o($Vs,[2,31]),o($Vs,[2,32]),o($Vs,[2,33]),o($Vs,[2,34]),o($Vs,[2,35]),{3:19,4:$V1,5:$V2,7:$V3,8:$V4,24:$V5,25:16,27:55,31:15,32:12,34:$V6,35:53,36:13,37:14,38:17,39:$V7,40:$V8,41:$V9,42:$Va,57:$Vv},o($Vw,[2,27]),o($Vw,[2,28]),o($Vs,[2,36]),{24:[1,56]},o($Vs,[2,38]),o($Vs,[2,39]),o($Vs,[2,40]),o($Vs,[2,41]),o($Vx,$Vy),o($Vx,[2,1]),o($Vx,[2,2]),o($Vz,[2,64],{17:57,58:[1,58]}),{3:19,4:$V1,5:$V2,7:$V3,8:$V4,24:$V5,25:16,27:10,29:59,31:15,32:12,34:$V6,35:11,36:13,37:14,38:17,39:$V7,40:$V8,41:$V9,42:$Va,57:$Vb},{3:62,4:$V1,5:$V2,25:63,42:[1,61],57:$Vb,63:60},{3:64,4:$V1,5:$V2,7:$V3,8:$V4,24:[1,65],31:66},o($Vd,[2,20]),o($Vd,[2,22]),o($Vd,[2,24]),{3:19,4:$V1,5:$V2,7:$V3,8:$V4,24:$V5,25:16,27:67,31:15,32:12,34:$V6,35:11,36:13,37:14,38:17,39:$V7,40:$V8,41:$V9,42:$Va,57:$Vb},{3:19,4:$V1,5:$V2,7:$V3,8:$V4,24:$V5,25:16,27:68,31:15,32:12,34:$V6,35:11,36:13,37:14,38:17,39:$V7,40:$V8,41:$V9,42:$Va,57:$Vb},{3:19,4:$V1,5:$V2,7:$V3,8:$V4,24:$V5,25:16,27:69,31:15,32:12,34:$V6,35:11,36:13,37:14,38:17,39:$V7,40:$V8,41:$V9,42:$Va,57:$Vb},{3:19,4:$V1,5:$V2,7:$V3,8:$V4,24:$V5,25:16,27:70,31:15,32:12,34:$V6,35:11,36:13,37:14,38:17,39:$V7,40:$V8,41:$V9,42:$Va,57:$Vb},{3:19,4:$V1,5:$V2,7:$V3,8:$V4,24:$V5,25:16,27:71,31:15,32:12,34:$V6,35:11,36:13,37:14,38:17,39:$V7,40:$V8,41:$V9,42:$Va,57:$Vb},{3:19,4:$V1,5:$V2,7:$V3,8:$V4,24:$V5,25:16,27:72,31:15,32:12,34:$V6,35:11,36:13,37:14,38:17,39:$V7,40:$V8,41:$V9,42:$Va,57:$Vb},{3:19,4:$V1,5:$V2,7:$V3,8:$V4,24:$V5,25:16,27:73,31:15,32:12,34:$V6,35:11,36:13,37:14,38:17,39:$V7,40:$V8,41:$V9,42:$Va,57:$Vb},{3:19,4:$V1,5:$V2,7:$V3,8:$V4,24:$V5,25:16,27:74,31:15,32:12,34:$V6,35:11,36:13,37:14,38:17,39:$V7,40:$V8,41:$V9,42:$Va,57:$Vb},{3:19,4:$V1,5:$V2,7:$V3,8:$V4,24:$V5,25:16,27:75,31:15,32:12,34:$V6,35:11,36:13,37:14,38:17,39:$V7,40:$V8,41:$V9,42:$Va,57:$Vb},{3:19,4:$V1,5:$V2,7:$V3,8:$V4,24:$V5,25:16,27:76,31:15,32:12,34:$V6,35:11,36:13,37:14,38:17,39:$V7,40:$V8,41:$V9,42:$Va,57:$Vb},{3:19,4:$V1,5:$V2,7:$V3,8:$V4,24:$V5,25:16,27:77,31:15,32:12,34:$V6,35:11,36:13,37:14,38:17,39:$V7,40:$V8,41:$V9,42:$Va,57:$Vb},{3:19,4:$V1,5:$V2,7:$V3,8:$V4,24:$V5,25:16,27:78,31:15,32:12,34:$V6,35:11,36:13,37:14,38:17,39:$V7,40:$V8,41:$V9,42:$Va,57:$Vb},{42:[1,79],57:[1,80]},{54:[1,81]},{3:82,4:$V1,5:$V2},{3:19,4:$V1,5:$V2,7:$V3,8:$V4,24:$V5,25:16,27:83,31:15,32:12,34:$V6,35:11,36:13,37:14,38:17,39:$V7,40:$V8,41:$V9,42:$Va,57:$Vb},o([34,39,44,45,46,47,48,49,50,51,52,53,54,56],$Vt,{43:[1,84]}),o([30,33,34,39,44,45,46,47,48,49,50,51,52,53,54,56,66,68],$Vy,{43:$VA}),{34:$Ve,39:$Vf,44:$Vg,45:$Vh,46:$Vi,47:$Vj,48:$Vk,49:$Vl,50:$Vm,51:$Vn,52:$Vo,53:$Vp,54:$Vq,56:$Vr},o($Vs,[2,37]),o($VB,[2,66],{18:86,59:[1,87]}),{3:19,4:$V1,5:$V2,7:$V3,8:$V4,24:$V5,25:16,27:88,31:15,32:12,34:$V6,35:11,36:13,37:14,38:17,39:$V7,40:$V8,41:$V9,42:$Va,57:$Vb},o($Vd,[2,17]),o($Vc,[2,72],{64:89,65:92,30:$VC,33:$VD,66:$VE,68:$VF}),{3:62,4:$V1,5:$V2,25:63,42:$VG,57:$Vv,63:95},o($VH,[2,78]),o($VH,[2,79]),o($Vd,[2,19]),o($Vd,[2,21]),o($Vd,[2,23]),o($VI,[2,43],{34:$Ve,45:$Vh,54:$Vq,56:$Vr}),o($VI,[2,44],{34:$Ve,45:$Vh,54:$Vq,56:$Vr}),o($VJ,[2,45],{54:$Vq,56:$Vr}),o($VJ,[2,46],{54:$Vq,56:$Vr}),o($VK,[2,47],{34:$Ve,39:$Vf,44:$Vg,45:$Vh,54:$Vq,56:$Vr}),o($VK,[2,48],{34:$Ve,39:$Vf,44:$Vg,45:$Vh,54:$Vq,56:$Vr}),o($VK,[2,49],{34:$Ve,39:$Vf,44:$Vg,45:$Vh,54:$Vq,56:$Vr}),o($VK,[2,50],{34:$Ve,39:$Vf,44:$Vg,45:$Vh,54:$Vq,56:$Vr}),o($VK,[2,51],{34:$Ve,39:$Vf,44:$Vg,45:$Vh,54:$Vq,56:$Vr}),o($VK,[2,52],{34:$Ve,39:$Vf,44:$Vg,45:$Vh,54:$Vq,56:$Vr}),o($VL,[2,53],{34:$Ve,39:$Vf,44:$Vg,45:$Vh,46:$Vi,47:$Vj,48:$Vk,49:$Vl,50:$Vm,51:$Vn,54:$Vq,56:$Vr}),o($VL,[2,54],{34:$Ve,39:$Vf,44:$Vg,45:$Vh,46:$Vi,47:$Vj,48:$Vk,49:$Vl,50:$Vm,51:$Vn,54:$Vq,56:$Vr}),{3:19,4:$V1,5:$V2,7:$V3,8:$V4,24:$V5,25:16,27:98,31:15,32:12,34:$V6,35:11,36:13,37:14,38:17,39:$V7,40:$V8,41:$V9,42:$Va,55:97,57:$Vb},o($Vs,[2,57]),{42:[1,99],57:[1,100]},o($Vw,[2,26]),{34:$Ve,39:$Vf,43:[1,101],44:$Vg,45:$Vh,46:$Vi,47:$Vj,48:$Vk,49:$Vl,50:$Vm,51:$Vn,52:$Vo,53:$Vp,54:$Vq,56:$Vr},o($Vs,[2,42]),o($Vx,[2,60]),o($VM,[2,84],{19:102,69:[1,103]}),{3:19,4:$V1,5:$V2,25:107,32:106,34:$V6,42:$VG,57:$Vb,60:104,61:105},o($Vz,[2,65],{34:$Ve,39:$Vf,44:$Vg,45:$Vh,46:$Vi,47:$Vj,48:$Vk,49:$Vl,50:$Vm,51:$Vn,52:$Vo,53:$Vp,54:$Vq,56:$Vr}),o($Vc,[2,73],{65:108,66:$VE,68:$VF}),{3:109,4:$V1,5:$V2},{3:110,4:$V1,5:$V2},o($VN,[2,80]),{3:62,4:$V1,5:$V2,25:63,42:$VG,57:$Vb,63:111},{3:62,4:$V1,5:$V2,25:63,42:$VG,57:$Vb,63:112},{30:$VC,33:$VD,64:113,65:92,66:$VE,68:$VF},{57:[1,114]},{28:$VO,43:[1,115]},o($VP,[2,62],{34:$Ve,39:$Vf,44:$Vg,45:$Vh,46:$Vi,47:$Vj,48:$Vk,49:$Vl,50:$Vm,51:$Vn,52:$Vo,53:$Vp,54:$Vq,56:$Vr}),{3:19,4:$V1,5:$V2,7:$V3,8:$V4,24:$V5,25:16,27:98,31:15,32:12,34:$V6,35:11,36:13,37:14,38:17,39:$V7,40:$V8,41:$V9,42:$Va,55:117,57:$Vb},o($Vs,[2,58]),o($Vs,[2,61]),{11:[2,14],20:118,26:[1,119]},{3:19,4:$V1,5:$V2,25:123,32:122,34:$V6,42:$VG,57:$Vb,70:120,71:121},o($VB,[2,67],{28:[1,124]}),o($VQ,[2,68]),o($VQ,[2,70],{33:$Vu}),o($VQ,[2,71]),o($VN,[2,81]),o($VH,[2,76]),o($VH,[2,77]),{30:$VC,33:$VD,67:[1,125]},{30:$VC,33:$VD,67:[1,126]},{43:[1,127],65:108,66:$VE,68:$VF},{43:$VA},o($Vs,[2,55]),{3:19,4:$V1,5:$V2,7:$V3,8:$V4,24:$V5,25:16,27:128,31:15,32:12,34:$V6,35:11,36:13,37:14,38:17,39:$V7,40:$V8,41:$V9,42:$Va,57:$Vb},{28:$VO,43:[1,129]},{11:[2,8]},{3:19,4:$V1,5:$V2,7:$V3,8:$V4,24:$V5,25:16,27:130,31:15,32:12,34:$V6,35:11,36:13,37:14,38:17,39:$V7,40:$V8,41:$V9,42:$Va,57:$Vb},o($VM,[2,85],{28:[1,131]}),o($VR,[2,86],{72:132,25:135,42:$VG,57:$Vb,73:$VS,74:$VT}),o($VU,[2,88],{33:$Vu}),o($VU,[2,89]),{3:19,4:$V1,5:$V2,25:107,32:106,34:$V6,42:$VG,57:$Vb,61:136},{3:19,4:$V1,5:$V2,7:$V3,8:$V4,24:$V5,25:16,27:137,31:15,32:12,34:$V6,35:11,36:13,37:14,38:17,39:$V7,40:$V8,41:$V9,42:$Va,57:$Vb},{3:19,4:$V1,5:$V2,7:$V3,8:$V4,24:$V5,25:16,27:138,31:15,32:12,34:$V6,35:11,36:13,37:14,38:17,39:$V7,40:$V8,41:$V9,42:$Va,57:$Vb},o($Vc,[2,74]),o($VP,[2,63],{34:$Ve,39:$Vf,44:$Vg,45:$Vh,46:$Vi,47:$Vj,48:$Vk,49:$Vl,50:$Vm,51:$Vn,52:$Vo,53:$Vp,54:$Vq,56:$Vr}),o($Vs,[2,56]),{11:[2,15],28:[1,139],34:$Ve,39:$Vf,44:$Vg,45:$Vh,46:$Vi,47:$Vj,48:$Vk,49:$Vl,50:$Vm,51:$Vn,52:$Vo,53:$Vp,54:$Vq,56:$Vr},{3:19,4:$V1,5:$V2,25:123,32:122,34:$V6,42:$VG,57:$Vb,71:140},o($VU,[2,90]),o($VU,[2,91]),o($VU,[2,92]),o($VU,[2,93]),o($VQ,[2,69]),o($VN,[2,82],{34:$Ve,39:$Vf,44:$Vg,45:$Vh,46:$Vi,47:$Vj,48:$Vk,49:$Vl,50:$Vm,51:$Vn,52:$Vo,53:$Vp,54:$Vq,56:$Vr}),o($VN,[2,83],{34:$Ve,39:$Vf,44:$Vg,45:$Vh,46:$Vi,47:$Vj,48:$Vk,49:$Vl,50:$Vm,51:$Vn,52:$Vo,53:$Vp,54:$Vq,56:$Vr}),{3:19,4:$V1,5:$V2,7:$V3,8:$V4,24:$V5,25:16,27:141,31:15,32:12,34:$V6,35:11,36:13,37:14,38:17,39:$V7,40:$V8,41:$V9,42:$Va,57:$Vb},o($VR,[2,87],{72:132,25:135,42:$VG,57:$Vb,73:$VS,74:$VT}),{11:[2,16],34:$Ve,39:$Vf,44:$Vg,45:$Vh,46:$Vi,47:$Vj,48:$Vk,49:$Vl,50:$Vm,51:$Vn,52:$Vo,53:$Vp,54:$Vq,56:$Vr}],
defaultActions: {3:[2,7],5:[2,5],118:[2,8]},
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
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip comments */
break;
case 1:/* skip whitespace */
break;
case 2:return 5
break;
case 3:return 5
break;
case 4:return 57
break;
case 5:return 8
break;
case 6:return 8
break;
case 7:return 7
break;
case 8:return 7
break;
case 9:return 13
break;
case 10:return 23
break;
case 11:return 26
break;
case 12:return 62
break;
case 13:return 58
break;
case 14:return 21
break;
case 15:return 59
break;
case 16:return 69
break;
case 17:return 44
break;
case 18:return 39
break;
case 19:return 34
break;
case 20:return 45
break;
case 21:return 47
break;
case 22:return 46
break;
case 23:return 49
break;
case 24:return 51
break;
case 25:return 48
break;
case 26:return 50
break;
case 27:return 51
break;
case 28:return 42
break;
case 29:return 43
break;
case 30:return 'LCUR'
break;
case 31:return 'RCUR'
break;
case 32:return 'LBRA'
break;
case 33:return 'RBRA'
break;
case 34:return 33
break;
case 35:return 28
break;
case 36:return 'DOLLAR'
break;
case 37:return 'EXCLAMATION'
break;
case 38:return 30
break;
case 39:return 'EXISTS'
break;
case 40:return 'IS'
break;
case 41:return 54
break;
case 42:return 67
break;
case 43:return 52
break;
case 44:return 53
break;
case 45:return 56
break;
case 46:return 68
break;
case 47:return 'LEFT_OUTER_JOIN'
break;
case 48:return 'RIGHT_OUTER_JOIN'
break;
case 49:return 66
break;
case 50:return 'LEFT_JOIN'
break;
case 51:return 'RIGHT_JOIN'
break;
case 52:return 'LIKE'
break;
case 53:return 73
break;
case 54:return 74
break;
case 55:return 'NULL'
break;
case 56:return 40
break;
case 57:return 41
break;
case 58:return 'BOOLEAN'
break;
case 59:return 24
break;
case 60:return 4
break;
case 61:return 11
break;
case 62:return 'INVALID'
break;
}
},
rules: [/^(?:[\/][*](.|\n)*?[*][\/])/i,/^(?:\s+)/i,/^(?:\[([^\]])*?\])/i,/^(?:`([^\`])*?`)/i,/^(?:\$\{([\s\S]+?)\})/i,/^(?:N(['](\\.|[^']|\\')*?['])+)/i,/^(?:X(['](\\.|[^']|\\')*?['])+)/i,/^(?:(['](\\.|[^']|\\')*?['])+)/i,/^(?:(["](\\.|[^"]|\\")*?["])+)/i,/^(?:SELECT\b)/i,/^(?:TOP\b)/i,/^(?:LIMIT\b)/i,/^(?:FROM\b)/i,/^(?:WHERE\b)/i,/^(?:DISTINCT\b)/i,/^(?:GROUP\s+BY\b)/i,/^(?:ORDER\s+BY\b)/i,/^(?:\+)/i,/^(?:-)/i,/^(?:\*)/i,/^(?:\/)/i,/^(?:>=)/i,/^(?:>)/i,/^(?:<=)/i,/^(?:<>)/i,/^(?:<)/i,/^(?:=)/i,/^(?:!=)/i,/^(?:\()/i,/^(?:\))/i,/^(?:\{)/i,/^(?:\})/i,/^(?:\[)/i,/^(?:\])/i,/^(?:\.)/i,/^(?:,)/i,/^(?:\$)/i,/^(?:!)/i,/^(?:AS\b)/i,/^(?:EXISTS\b)/i,/^(?:IS\b)/i,/^(?:IN\b)/i,/^(?:ON\b)/i,/^(?:AND\b)/i,/^(?:OR\b)/i,/^(?:NOT\b)/i,/^(?:INNER\s+JOIN\b)/i,/^(?:LEFT\s+OUTER\s+JOIN\b)/i,/^(?:RIGHT\s+OUTER\s+JOIN\b)/i,/^(?:JOIN\b)/i,/^(?:LEFT\s+JOIN\b)/i,/^(?:RIGHT\s+JOIN\b)/i,/^(?:LIKE\b)/i,/^(?:ASC\b)/i,/^(?:DESC\b)/i,/^(?:NULL\b)/i,/^(?:true\b)/i,/^(?:false\b)/i,/^(?:false\b)/i,/^(?:[0-9]+(\.[0-9]+)?)/i,/^(?:[a-zA-Z_][a-zA-Z_0-9]*)/i,/^(?:$)/i,/^(?:.)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62],"inclusive":true}}
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
exports.parser = sqlparser;
exports.Parser = sqlparser.Parser;
exports.parse = function () { return sqlparser.parse.apply(sqlparser, arguments); };
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