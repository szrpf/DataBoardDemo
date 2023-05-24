
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Hero.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9285eM4YhBJhL8+C569X294', 'Hero');
// Script/Hero.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Helloworld = /** @class */ (function (_super) {
    __extends(Helloworld, _super);
    function Helloworld() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hp = 100;
        _this.mp = 60;
        _this.equip = {
            name: '装备',
            sword: {
                name: '小刀',
                attack: 30
            },
            shoe: {
                name: '草鞋',
                attr: {
                    name: '属性',
                    speed: 5,
                    durable: 100
                }
            }
        };
        return _this;
    }
    Helloworld.prototype.update = function (dt) {
        this.hp += 1.0 * dt;
        this.mp += 0.5 * dt;
    };
    Helloworld = __decorate([
        ccclass
    ], Helloworld);
    return Helloworld;
}(cc.Component));
exports.default = Helloworld;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxIZXJvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBdUJDO1FBdEJHLFFBQUUsR0FBRyxHQUFHLENBQUM7UUFDVCxRQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ1IsV0FBSyxHQUFHO1lBQ0osSUFBSSxFQUFDLElBQUk7WUFDVCxLQUFLLEVBQUM7Z0JBQ0YsSUFBSSxFQUFDLElBQUk7Z0JBQ1QsTUFBTSxFQUFDLEVBQUU7YUFDWjtZQUNELElBQUksRUFBQztnQkFDRCxJQUFJLEVBQUMsSUFBSTtnQkFDVCxJQUFJLEVBQUM7b0JBQ0QsSUFBSSxFQUFDLElBQUk7b0JBQ1QsS0FBSyxFQUFDLENBQUM7b0JBQ1AsT0FBTyxFQUFDLEdBQUc7aUJBQ2Q7YUFDSjtTQUNKLENBQUE7O0lBTUwsQ0FBQztJQUpHLDJCQUFNLEdBQU4sVUFBUSxFQUFFO1FBQ04sSUFBSSxDQUFDLEVBQUUsSUFBSSxHQUFHLEdBQUMsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxFQUFFLElBQUksR0FBRyxHQUFDLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBdEJnQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBdUI5QjtJQUFELGlCQUFDO0NBdkJELEFBdUJDLENBdkJ1QyxFQUFFLENBQUMsU0FBUyxHQXVCbkQ7a0JBdkJvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWxsb3dvcmxkIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIGhwID0gMTAwO1xyXG4gICAgbXAgPSA2MDtcclxuICAgIGVxdWlwID0ge1xyXG4gICAgICAgIG5hbWU6J+ijheWkhycsXHJcbiAgICAgICAgc3dvcmQ6e1xyXG4gICAgICAgICAgICBuYW1lOiflsI/liIAnLFxyXG4gICAgICAgICAgICBhdHRhY2s6MzBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNob2U6e1xyXG4gICAgICAgICAgICBuYW1lOifojYnpnosnLFxyXG4gICAgICAgICAgICBhdHRyOntcclxuICAgICAgICAgICAgICAgIG5hbWU6J+WxnuaApycsXHJcbiAgICAgICAgICAgICAgICBzcGVlZDo1LFxyXG4gICAgICAgICAgICAgICAgZHVyYWJsZToxMDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgdGhpcy5ocCArPSAxLjAqZHQ7XHJcbiAgICAgICAgdGhpcy5tcCArPSAwLjUqZHQ7XHJcbiAgICB9XHJcbn0iXX0=