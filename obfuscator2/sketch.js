// deze code is onleesbaar gemaakt met https://obfuscator.io

var _0x4c3416 = (function() {
    var _0x327347 = !![];
    return function(_0x35bf23, _0x317729) {
        var _0x4210c1 = _0x327347
            ? function() {
                  if (_0x317729) {
                      var _0x3e48ea = _0x317729["apply"](_0x35bf23, arguments);
                      _0x317729 = null;
                      return _0x3e48ea;
                  }
              }
            : function() {};
        _0x327347 = ![];
        return _0x4210c1;
    };
})();
var _0x2f1e87 = _0x4c3416(this, function() {
    var _0x466b7f = function() {
            return "\x64\x65\x76";
        },
        _0x28311f = function() {
            return "\x77\x69\x6e\x64\x6f\x77";
        };
    var _0x468dbf = function() {
        var _0x3ae345 = new RegExp(
            "\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d"
        );
        return !_0x3ae345["\x74\x65\x73\x74"](
            _0x466b7f["\x74\x6f\x53\x74\x72\x69\x6e\x67"]()
        );
    };
    var _0x26ad15 = function() {
        var _0x2840bd = new RegExp(
            "\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b"
        );
        return _0x2840bd["\x74\x65\x73\x74"](
            _0x28311f["\x74\x6f\x53\x74\x72\x69\x6e\x67"]()
        );
    };
    var _0x369f9a = function(_0x1c8265) {
        var _0x52e1a1 = ~-0x1 >> (0x1 + (0xff % 0x0));
        if (_0x1c8265["\x69\x6e\x64\x65\x78\x4f\x66"]("\x69" === _0x52e1a1)) {
            _0x11e29(_0x1c8265);
        }
    };
    var _0x11e29 = function(_0x56cb4a) {
        var _0x37bb9b = ~-0x4 >> (0x1 + (0xff % 0x0));
        if (
            _0x56cb4a["\x69\x6e\x64\x65\x78\x4f\x66"]((!![] + "")[0x3]) !==
            _0x37bb9b
        ) {
            _0x369f9a(_0x56cb4a);
        }
    };
    if (!_0x468dbf()) {
        if (!_0x26ad15()) {
            _0x369f9a("\x69\x6e\x64\u0435\x78\x4f\x66");
        } else {
            _0x369f9a("\x69\x6e\x64\x65\x78\x4f\x66");
        }
    } else {
        _0x369f9a("\x69\x6e\x64\u0435\x78\x4f\x66");
    }
});
_0x2f1e87();
var p = 0x64;
function setup() {
    var _0x2cd165 = createCanvas(0x1c2, 0x1c2);
    _0x2cd165["\x70\x61\x72\x65\x6e\x74"](
        "\x70\x72\x6f\x63\x65\x73\x73\x69\x6e\x67"
    );
    frameRate(0x32);
}
function draw() {
    background("\x73\x6e\x6f\x77");
    tekenRechthoek(p);
    tekenVierkant(p);
    tekenLijnen(p);
    p += 0.5;
    if (p > width) {
        noLoop();
    }
}
function tekenRechthoek(_0x3137c8) {
    push();
    strokeWeight(0x1);
    stroke("\x67\x72\x65\x65\x6e");
    line(_0x3137c8, 0x0, width, height - _0x3137c8);
    line(width - _0x3137c8, height, width, height - _0x3137c8);
    line(width - _0x3137c8, height, 0x0, _0x3137c8);
    line(_0x3137c8, 0x0, 0x0, _0x3137c8);
    pop();
}
function tekenVierkant(_0xabd7b6) {
    push();
    strokeWeight(0x1);
    stroke("\x72\x65\x64");
    line(_0xabd7b6, 0x0, width, _0xabd7b6);
    line(width - _0xabd7b6, height, width, _0xabd7b6);
    line(width - _0xabd7b6, height, 0x0, height - _0xabd7b6);
    line(_0xabd7b6, 0x0, 0x0, height - _0xabd7b6);
    pop();
}
function tekenLijnen(_0x41cf76) {
    push();
    strokeWeight(0x1);
    stroke("\x67\x72\x65\x79");
    line(0x0, _0x41cf76, width, _0x41cf76);
    line(0x0, height - _0x41cf76, width, height - _0x41cf76);
    pop();
}
