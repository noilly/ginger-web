ace.define("ace/mode/gngr_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"], function(acequire, exports, module) {
    "use strict";
    
    var oop = acequire("../lib/oop");
    var TextHighlightRules = acequire("./text_highlight_rules").TextHighlightRules;
    
    var GngrHighlightRules = function() {
    // var keywords = "abort|else|new|return|abs|elsif|not|reverse|abstract|end|null|accept|entry|select|" +
    // "access|exception|of|separate|aliased|exit|or|some|all|others|subtype|and|for|out|synchronized|" +
    // "array|function|overriding|at|tagged|generic|package|task|begin|goto|pragma|terminate|" +
    // "body|private|then|if|procedure|type|case|in|protected|constant|interface|until|" +
    // "|is|raise|use|declare|range|delay|limited|record|when|delta|loop|rem|while|digits|renames|with|do|mod|requeue|xor";
        var keywords = "def|ref|return";
    
        var builtinConstants = (
            "high|low"
        );
    
        // var builtinFunctions = (
        //     "count|min|max|avg|sum|rank|now|coalesce|main"
        // );
        var builtinFunctions = (
            "read|write"
        );

        var storage = "var";
    
        var keywordMapper = this.createKeywordMapper({
            "support.function": builtinFunctions,
            "keyword": keywords,
            "constant.language": builtinConstants,
            "storage.type": storage,
        }, "identifier", true);
    
        this.$rules = {
            "start" : [ {
                token : "comment",
                regex : "--.*$"
            },
            // {
            //     token : "string",           // " string
            //     regex : '".*?"'
            // },
            // {
            //     token : "string",           // ' string
            //     regex : "'.*?'"
            // },
            // {
            //     token : "constant.numeric", // float
            //     regex : "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
            // },
            {
                token : keywordMapper,
                // regex : "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
                regex : "[a-z][a-z]*\\b"
            },
            // {
            //     token : "keyword.operator",
            //     regex : "\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|="
            // },
            {
                token : "keyword.operator",
                regex : "\\+|:="
            },
            {
                token : "punctuation.operator",
                regex : "\\?|\\:|\\,|\\;|\\.|\\@"
            },
            {
                token : "paren.lparen",
                regex : "[\\({]"
            }, {
                token : "paren.rparen",
                regex : "[\\)}]"
            }, {
                token : "text",
                regex : "\\s+"
            } ]
        };
    };
    
    oop.inherits(GngrHighlightRules, TextHighlightRules);
    
    exports.GngrHighlightRules = GngrHighlightRules;
    });
    
    ace.define("ace/mode/gngr",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/gngr_highlight_rules"], function(acequire, exports, module) {
    "use strict";
    
    var oop = acequire("../lib/oop");
    var TextMode = acequire("./text").Mode;
    // var AdaHighlightRules = acequire("./ada_highlight_rules").AdaHighlightRules;
    var GngrHighlightRules = acequire("./gngr_highlight_rules").GngrHighlightRules;
    
    var Mode = function() {
        this.HighlightRules = GngrHighlightRules;
        this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, TextMode);
    
    (function() {
    
        this.lineCommentStart = "--";
    
        this.$id = "ace/mode/gngr";
    }).call(Mode.prototype);
    
    exports.Mode = Mode;
    
    });
    