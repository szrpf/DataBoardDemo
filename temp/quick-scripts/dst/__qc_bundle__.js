
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/DataBoard');
require('./assets/Script/Hero');

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
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxIZXJvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBU0M7UUFQRyxRQUFFLEdBQUcsR0FBRyxDQUFDO1FBQ1QsUUFBRSxHQUFHLEVBQUUsQ0FBQzs7SUFNWixDQUFDO0lBSkcsMkJBQU0sR0FBTixVQUFRLEVBQUU7UUFDTixJQUFJLENBQUMsRUFBRSxJQUFJLEdBQUcsR0FBQyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLEVBQUUsSUFBSSxHQUFHLEdBQUMsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFSZ0IsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQVM5QjtJQUFELGlCQUFDO0NBVEQsQUFTQyxDQVR1QyxFQUFFLENBQUMsU0FBUyxHQVNuRDtrQkFUb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVsbG93b3JsZCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBocCA9IDEwMDtcbiAgICBtcCA9IDYwO1xuXG4gICAgdXBkYXRlIChkdCkge1xuICAgICAgICB0aGlzLmhwICs9IDEuMCpkdDtcbiAgICAgICAgdGhpcy5tcCArPSAwLjUqZHQ7XG4gICAgfVxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/DataBoard.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1c152bUhQpJ6J1jGhQVUYf8', 'DataBoard');
// Script/DataBoard.ts

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
/*******************************************************************************
 * 创建:    2022年11月23日
 * 作者:    水煮肉片饭(27185709@qq.com)
 * 描述:    数据看板
 * 节点挂上该组件，就可以在游戏运行过程中，直观看到节点任意属性（包括节点脚本中的属性）
 * 可以图形化展示以下四种数据：
 *          轮廓盒子：          随节点旋转，代表节点的实时矩形
 *          碰撞盒子：          不随节点旋转，一般代表碰撞范围
 *          自定义参数：        节点自身属性，以及节点任意脚本中的属性
 *          锚点：             锚点位置会显示一个小红点
 * 自定义参数（配置想监控的数据）：
 *          wp：               世界坐标，即相对于屏幕左下角的坐标
 *          radian：           节点弧度，单位π
 *          matrix:            变换矩阵
 *          parent：           父节点
 *          children：         子节点
 *          自身属性：          scale,width,opacity等
 *          脚本属性：          脚本实例对象的属性
 * ↓↓参数可以用3种分隔符隔开↓↓
 *          英文逗号、英文冒号、空格
 * ————————————————————————举个栗子————————————————————————
 * 脚本：    Hero
 * 参数：    wp,scale,angle,#angle,#hp
 * 显示结果：世界坐标,节点scale,节点angle，Hero对象的angle,Hero对象的hp
 * ————————————————————————温馨提示————————————————————————
 * 初始化的时候，设置全局变量window['DATABOARD'] = false可屏蔽本项目所有DataBoard，不会产生任何额外开销\n
*******************************************************************************/
window['DATABOARD'] = true;
var ANCHOR_SIZE = 20; //锚点的大小
var LINEHEIGHT = 1.2; //行高是字体大小的多少倍
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode, menu = _a.menu;
var DataBoard = /** @class */ (function (_super) {
    __extends(DataBoard, _super);
    function DataBoard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isOutlineBoxActive = false;
        _this._outlineBoxColor = new cc.Color(Math.random() * 255, Math.random() * 255, Math.random() * 255);
        _this._outlineBoxOpacity = 100;
        _this._isCollideBoxActive = true;
        _this._collideBoxColor = new cc.Color(Math.random() * 255, Math.random() * 255, Math.random() * 255);
        _this._collideBoxOpacity = 100;
        _this._isCustomLabelActive = true;
        _this.customComponentName = '';
        _this._customLabelString = 'x,y';
        _this._customLabelOffset = cc.v2(0, 100);
        _this._customLabelColor = new cc.Color(255, 255, 0);
        _this._customLabelSize = 60;
        _this._customLabelDigit = 0;
        _this.boardNode = null;
        _this.outlineBoxNode = null;
        _this.collideBoxNode = null;
        _this.anchorPointNode = null;
        _this.customLabelNode = null;
        _this.customLabel = null;
        _this.customLabelStringSplit = null;
        _this.monitorComp = null;
        return _this;
    }
    Object.defineProperty(DataBoard.prototype, "isOutlineBoxActive", {
        get: function () { return this._isOutlineBoxActive; },
        set: function (value) {
            this._isOutlineBoxActive = value;
            this.outlineBoxNode.active = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DataBoard.prototype, "outlineBoxColor", {
        get: function () { return this._outlineBoxColor; },
        set: function (value) {
            this._outlineBoxColor = value;
            this.outlineBoxNode.color = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DataBoard.prototype, "outlineBoxOpacity", {
        get: function () { return this._outlineBoxOpacity; },
        set: function (value) {
            this._outlineBoxOpacity = value;
            this.outlineBoxNode.opacity = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DataBoard.prototype, "isCollideBoxActive", {
        get: function () { return this._isCollideBoxActive; },
        set: function (value) {
            this._isCollideBoxActive = value;
            this.collideBoxNode.active = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DataBoard.prototype, "collideBoxColor", {
        get: function () { return this._collideBoxColor; },
        set: function (value) {
            this._collideBoxColor = value;
            this.collideBoxNode.color = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DataBoard.prototype, "collideBoxOpacity", {
        get: function () { return this._collideBoxOpacity; },
        set: function (value) {
            this._collideBoxOpacity = value;
            this.collideBoxNode.opacity = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DataBoard.prototype, "isCustomLabelActive", {
        get: function () { return this._isCustomLabelActive; },
        set: function (value) {
            this._isCustomLabelActive = value;
            this.customLabelNode.active = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DataBoard.prototype, "customLabelString", {
        get: function () { return this._customLabelString; },
        set: function (value) {
            this._customLabelString = value;
            this.customLabelStringSplit = value
                .replace(/,/g, '_~_').replace(/:/g, '_!_').replace(/ /g, '_@_')
                .replace(/([^_])\n/g, '$1_\n').replace(/([^_])\n/g, '$1_\n').replace(/\n([^_])/g, '\n_$1')
                .split('_');
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DataBoard.prototype, "customLabelOffset", {
        get: function () { return this._customLabelOffset; },
        set: function (value) {
            this._customLabelOffset = value;
            this.customLabelNode.x = value.x;
            this.customLabelNode.y = value.y;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DataBoard.prototype, "customLabelColor", {
        get: function () { return this._customLabelColor; },
        set: function (value) {
            this._customLabelColor = value;
            this.customLabelNode.color = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DataBoard.prototype, "customLabelSize", {
        get: function () { return this._customLabelSize; },
        set: function (value) {
            this._customLabelSize = value;
            this.customLabel.fontSize = value;
            this.customLabel.lineHeight = value * LINEHEIGHT;
            this.customLabelNode.getComponent(cc.LabelOutline).width = value * 0.1;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(DataBoard.prototype, "customLabelDigit", {
        get: function () { return this._customLabelDigit; },
        set: function (value) {
            this._customLabelDigit = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    DataBoard.prototype.onLoad = function () {
        this.boardNode = this.node.getChildByName('DataBoard');
        if (!CC_EDITOR && !window['DATABOARD']) {
            this.destroy();
            return;
        }
        if (cc.isValid(this.boardNode)) {
            this.boardNode.removeFromParent();
            this.boardNode.destroy();
        }
        var texture = new cc.Texture2D();
        texture.initWithData(new Uint8Array([255, 255, 255]), cc.Texture2D.PixelFormat.RGB888, 1, 1);
        this.boardNode = new cc.Node('DataBoard');
        this.boardNode.setParent(this.node);
        this.boardNode.x = this.boardNode.y = 0;
        this.boardNode.zIndex = cc.macro.MAX_ZINDEX;
        this.boardNode['_objFlags'] |= cc.Object['Flags'].HideInHierarchy;
        this.boardNode['_objFlags'] |= cc.Object['Flags'].LockedInEditor;
        this.outlineBoxNode = new cc.Node('OutlineBox');
        this.outlineBoxNode.setParent(this.boardNode);
        this.outlineBoxNode.addComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
        this.outlineBoxNode.active = this.isOutlineBoxActive;
        this.outlineBoxNode.color = this.outlineBoxColor;
        this.outlineBoxNode.opacity = this.outlineBoxOpacity;
        this.collideBoxNode = new cc.Node('CollideBox');
        this.collideBoxNode.setParent(this.boardNode);
        this.collideBoxNode.addComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
        this.collideBoxNode.active = this.isCollideBoxActive;
        this.collideBoxNode.color = this.collideBoxColor;
        this.collideBoxNode.opacity = this.collideBoxOpacity;
        this.anchorPointNode = new cc.Node('AnchorPoint');
        this.anchorPointNode.setParent(this.boardNode);
        this.anchorPointNode.addComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
        this.anchorPointNode.color = cc.color(255, 0, 0);
        this.anchorPointNode.width = ANCHOR_SIZE;
        this.anchorPointNode.height = ANCHOR_SIZE;
        this.customLabelNode = new cc.Node('CustomLabel');
        this.customLabelNode.setParent(this.boardNode);
        this.customLabel = this.customLabelNode.addComponent(cc.Label);
        this.customLabelNode.addComponent(cc.LabelOutline).color = cc.color(0, 0, 0);
        this.customLabelNode.active = this.isCustomLabelActive;
        this.customLabelString = this._customLabelString;
        this.customLabelNode.x = this.customLabelOffset.x;
        this.customLabelNode.y = this.customLabelOffset.y;
        this.customLabelNode.color = this.customLabelColor;
        this.customLabelSize = this._customLabelSize;
        this.updateAngle();
        this.updateScale();
        this.updateAnchor();
        this.updateSize();
        this.node.on(cc.Node.EventType.ROTATION_CHANGED, this.updateAngle, this);
        this.node.on(cc.Node.EventType.SCALE_CHANGED, this.updateScale, this);
        this.node.on(cc.Node.EventType.ANCHOR_CHANGED, this.updateAnchor, this);
        this.node.on(cc.Node.EventType.SIZE_CHANGED, this.updateSize, this);
    };
    DataBoard.prototype.updateAngle = function () {
        this.collideBoxNode.angle = -this.node.angle;
        this.customLabelNode.angle = -this.node.angle;
    };
    DataBoard.prototype.updateScale = function () {
        this.boardNode.scaleX = 1 / this.node.scaleX;
        this.boardNode.scaleY = 1 / this.node.scaleY;
        this.outlineBoxNode.scaleX = this.node.scaleX;
        this.outlineBoxNode.scaleY = this.node.scaleY;
        this.collideBoxNode.scaleX = this.node.scaleX;
        this.collideBoxNode.scaleY = this.node.scaleY;
    };
    DataBoard.prototype.updateAnchor = function () {
        this.outlineBoxNode.anchorX = this.node.anchorX;
        this.outlineBoxNode.anchorY = this.node.anchorY;
        this.collideBoxNode.anchorX = this.node.anchorX;
        this.collideBoxNode.anchorY = this.node.anchorY;
    };
    DataBoard.prototype.updateSize = function () {
        this.outlineBoxNode.width = this.node.width;
        this.outlineBoxNode.height = this.node.height;
        this.collideBoxNode.width = this.node.width;
        this.collideBoxNode.height = this.node.height;
    };
    DataBoard.prototype.update = function () {
        if (!this.isCustomLabelActive)
            return;
        if (!this.customLabelStringSplit)
            return;
        var str = '';
        var strs = this.customLabelStringSplit;
        if (!this.monitorComp && this.customComponentName) {
            this.monitorComp = this.node.getComponent(this.customComponentName);
        }
        for (var i = 0, len = strs.length; i < len; ++i) {
            var tmp = null;
            switch (strs[i]) {
                case 'wp':
                    var pos = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
                    tmp = "(" + pos.x.toFixed(this.customLabelDigit) + ",\t" + pos.y.toFixed(this.customLabelDigit) + ")";
                    break;
                case 'angle':
                    tmp = this.node.angle.toFixed(this.customLabelDigit) + '°';
                    break;
                case 'radian':
                    tmp = (this.node.angle / 180).toFixed(this.customLabelDigit) + 'π';
                    break;
                case 'matrix':
                    var matrix = this.node['_worldMatrix'].m;
                    tmp = '';
                    for (var i_1 = 0; i_1 < 4; ++i_1) {
                        for (var j = 0; j < 4; ++j) {
                            var mm = matrix[j * 4 + i_1];
                            tmp += (mm < 0 ? '\t\t' : '\t\t\t') + mm.toFixed(this.customLabelDigit);
                        }
                        if (i_1 !== 3)
                            tmp += '\n';
                    }
                    break;
                case 'parent':
                    tmp = this.node.parent.name;
                    break;
                case 'children':
                    tmp = '';
                    for (var i_2 = 0, len_1 = this.node.childrenCount; i_2 < len_1; ++i_2) {
                        tmp += "\t\t\t" + i_2 + "\uFF1A" + this.node.children[i_2].name;
                        if (i_2 !== len_1 - 1)
                            tmp += '\n';
                    }
                    break;
                case '~':
                    tmp = ',\t';
                    break;
                case '!':
                    tmp = ':\t';
                    break;
                case '@':
                    tmp = ' \t';
                    break;
                default:
                    if (this.node[strs[i]] !== undefined) {
                        tmp = this.node[strs[i]];
                    }
                    else if (strs[i].startsWith('#') && this.monitorComp !== null) {
                        tmp = this.monitorComp[strs[i].substring(1)];
                    }
                    else {
                        tmp = strs[i];
                    }
                    if (tmp && tmp.name) {
                        tmp = tmp.name;
                    }
                    break;
            }
            if (typeof tmp === 'number') {
                tmp = tmp.toFixed(this.customLabelDigit);
            }
            str += tmp;
        }
        this.customLabel.string = str;
    };
    DataBoard.prototype.onDestroy = function () {
        if (cc.isValid(this.boardNode)) {
            this.boardNode.removeFromParent();
            this.boardNode.destroy();
        }
        ;
        this.node.targetOff(this);
    };
    __decorate([
        property
    ], DataBoard.prototype, "_isOutlineBoxActive", void 0);
    __decorate([
        property({ displayName: CC_DEV && '轮廓盒子', tooltip: CC_DEV && '随节点旋转，代表实时轮廓' })
    ], DataBoard.prototype, "isOutlineBoxActive", null);
    __decorate([
        property
    ], DataBoard.prototype, "_outlineBoxColor", void 0);
    __decorate([
        property({ displayName: CC_DEV && '······颜色', visible: function () { return this.isOutlineBoxActive; } })
    ], DataBoard.prototype, "outlineBoxColor", null);
    __decorate([
        property
    ], DataBoard.prototype, "_outlineBoxOpacity", void 0);
    __decorate([
        property({ min: 0, max: 255, step: 1, slide: true, displayName: CC_DEV && '······透明度', visible: function () { return this.isOutlineBoxActive; } })
    ], DataBoard.prototype, "outlineBoxOpacity", null);
    __decorate([
        property
    ], DataBoard.prototype, "_isCollideBoxActive", void 0);
    __decorate([
        property({ displayName: CC_DEV && '碰撞盒子', tooltip: CC_DEV && '不随节点旋转，代表碰撞范围' })
    ], DataBoard.prototype, "isCollideBoxActive", null);
    __decorate([
        property
    ], DataBoard.prototype, "_collideBoxColor", void 0);
    __decorate([
        property({ displayName: CC_DEV && '······颜色', visible: function () { return this.isCollideBoxActive; } })
    ], DataBoard.prototype, "collideBoxColor", null);
    __decorate([
        property
    ], DataBoard.prototype, "_collideBoxOpacity", void 0);
    __decorate([
        property({ min: 0, max: 255, step: 1, slide: true, displayName: CC_DEV && '······透明度', visible: function () { return this.isCollideBoxActive; } })
    ], DataBoard.prototype, "collideBoxOpacity", null);
    __decorate([
        property
    ], DataBoard.prototype, "_isCustomLabelActive", void 0);
    __decorate([
        property({ displayName: CC_DEV && '自定义参数', tooltip: CC_DEV && '配置显示的属性内容' })
    ], DataBoard.prototype, "isCustomLabelActive", null);
    __decorate([
        property({ displayName: CC_DEV && '······脚本', tooltip: CC_DEV && '监控哪个脚本', visible: function () { return this.isCustomLabelActive; } })
    ], DataBoard.prototype, "customComponentName", void 0);
    __decorate([
        property
    ], DataBoard.prototype, "_customLabelString", void 0);
    __decorate([
        property({ multiline: true, displayName: CC_DEV && '······参数', tooltip: CC_DEV && "—————支持的参数————\nwp：世界坐标\nradian：角度（单位：π）\nmatrix：变换矩阵\nparent：父节点\nchildren：子节点\n自身属性：scale,width,opacity等\n脚本属性：脚本实例对象的属性\n↓↓参数可以用3种分隔符隔开↓↓\n英文逗号、英文冒号、空格\n————举个栗子————\n脚本：Hero\n参数：wp,scale,angle,#angle,#hp\n显示结果：\n世界坐标,节点scale,节点angle，Hero对象的angle,Hero对象的hp\n————温馨提示————\n初始化的时候，设置全局变量\nwindow['DATABOARD'] = false\n可屏蔽本项目所有DataBoard，不会产生任何额外开销", visible: function () { return this.isCustomLabelActive; } })
    ], DataBoard.prototype, "customLabelString", null);
    __decorate([
        property
    ], DataBoard.prototype, "_customLabelOffset", void 0);
    __decorate([
        property({ displayName: CC_DEV && '······偏移', visible: function () { return this.isCustomLabelActive; } })
    ], DataBoard.prototype, "customLabelOffset", null);
    __decorate([
        property
    ], DataBoard.prototype, "_customLabelColor", void 0);
    __decorate([
        property({ displayName: CC_DEV && '······颜色', visible: function () { return this.isCustomLabelActive; } })
    ], DataBoard.prototype, "customLabelColor", null);
    __decorate([
        property
    ], DataBoard.prototype, "_customLabelSize", void 0);
    __decorate([
        property({ displayName: CC_DEV && '······大小', visible: function () { return this.isCustomLabelActive; } })
    ], DataBoard.prototype, "customLabelSize", null);
    __decorate([
        property
    ], DataBoard.prototype, "_customLabelDigit", void 0);
    __decorate([
        property({ min: 0, max: 10, step: 1, slide: true, displayName: CC_DEV && '······小数位数', visible: function () { return this.isCustomLabelActive; } })
    ], DataBoard.prototype, "customLabelDigit", null);
    DataBoard = __decorate([
        ccclass,
        executeInEditMode,
        menu('Comp/DataBoard')
    ], DataBoard);
    return DataBoard;
}(cc.Component));
exports.default = DataBoard;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhQm9hcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dGQTBCZ0Y7QUFDaEYsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQztBQUMzQixJQUFNLFdBQVcsR0FBRyxFQUFFLENBQUMsQ0FBZSxPQUFPO0FBQzdDLElBQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxDQUFlLGFBQWE7QUFDN0MsSUFBQSxLQUFpRCxFQUFFLENBQUMsVUFBVSxFQUE1RCxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxpQkFBaUIsdUJBQUEsRUFBRSxJQUFJLFVBQWtCLENBQUM7QUFJckU7SUFBdUMsNkJBQVk7SUFBbkQ7UUFBQSxxRUFvUkM7UUFsUlcseUJBQW1CLEdBQVksS0FBSyxDQUFDO1FBUXJDLHNCQUFnQixHQUFhLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBUXpHLHdCQUFrQixHQUFXLEdBQUcsQ0FBQztRQVFqQyx5QkFBbUIsR0FBWSxJQUFJLENBQUM7UUFRcEMsc0JBQWdCLEdBQWEsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFRekcsd0JBQWtCLEdBQVcsR0FBRyxDQUFDO1FBUWpDLDBCQUFvQixHQUFZLElBQUksQ0FBQztRQVFyQyx5QkFBbUIsR0FBVyxFQUFFLENBQUM7UUFFakMsd0JBQWtC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QU8sZ0JBQUssT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztxREFDL0I7SUFNaEU7UUFEQyxRQUFRO3VEQUM2QjtJQUV0QztRQURDLFFBQVEsQ0FBQyxFQUFFLFdBQVcsRUFBRSxNQUFNLElBQUksVUFBVSxFQUFFLE9BQU8sZ0JBQUssT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztvREFDakM7SUFROUQ7UUFEQyxRQUFRO3dEQUM2QjtJQUV0QztRQURDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sSUFBSSxZQUFZLEVBQUUsT0FBTyxnQkFBSyxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDO3FEQUN4RTtJQXBHL0MsU0FBUztRQUg3QixPQUFPO1FBQ1AsaUJBQWlCO1FBQ2pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztPQUNGLFNBQVMsQ0FvUjdCO0lBQUQsZ0JBQUM7Q0FwUkQsQUFvUkMsQ0FwUnNDLEVBQUUsQ0FBQyxTQUFTLEdBb1JsRDtrQkFwUm9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiDliJvlu7o6ICAgIDIwMjLlubQxMeaciDIz5pelXHJcbiAqIOS9nOiAhTogICAg5rC054Wu6IKJ54mH6aWtKDI3MTg1NzA5QHFxLmNvbSlcclxuICog5o+P6L+wOiAgICDmlbDmja7nnIvmnb9cclxuICog6IqC54K55oyC5LiK6K+l57uE5Lu277yM5bCx5Y+v5Lul5Zyo5ri45oiP6L+Q6KGM6L+H56iL5Lit77yM55u06KeC55yL5Yiw6IqC54K55Lu75oSP5bGe5oCn77yI5YyF5ous6IqC54K56ISa5pys5Lit55qE5bGe5oCn77yJXHJcbiAqIOWPr+S7peWbvuW9ouWMluWxleekuuS7peS4i+Wbm+enjeaVsOaNru+8mlxyXG4gKiAgICAgICAgICDova7lu5Pnm5LlrZDvvJogICAgICAgICAg6ZqP6IqC54K55peL6L2s77yM5Luj6KGo6IqC54K555qE5a6e5pe255+p5b2iXHJcbiAqICAgICAgICAgIOeisOaSnuebkuWtkO+8miAgICAgICAgICDkuI3pmo/oioLngrnml4vovazvvIzkuIDoiKzku6PooajnorDmkp7ojIPlm7RcclxuICogICAgICAgICAg6Ieq5a6a5LmJ5Y+C5pWw77yaICAgICAgICDoioLngrnoh6rouqvlsZ7mgKfvvIzku6Xlj4roioLngrnku7vmhI/ohJrmnKzkuK3nmoTlsZ7mgKdcclxuICogICAgICAgICAg6ZSa54K577yaICAgICAgICAgICAgIOmUmueCueS9jee9ruS8muaYvuekuuS4gOS4quWwj+e6oueCuVxyXG4gKiDoh6rlrprkuYnlj4LmlbDvvIjphY3nva7mg7Pnm5HmjqfnmoTmlbDmja7vvInvvJpcclxuICogICAgICAgICAgd3DvvJogICAgICAgICAgICAgICDkuJbnlYzlnZDmoIfvvIzljbPnm7jlr7nkuo7lsY/luZXlt6bkuIvop5LnmoTlnZDmoIdcclxuICogICAgICAgICAgcmFkaWFu77yaICAgICAgICAgICDoioLngrnlvKfluqbvvIzljZXkvY3PgFxyXG4gKiAgICAgICAgICBtYXRyaXg6ICAgICAgICAgICAg5Y+Y5o2i55+p6Zi1XHJcbiAqICAgICAgICAgIHBhcmVudO+8miAgICAgICAgICAg54i26IqC54K5XHJcbiAqICAgICAgICAgIGNoaWxkcmVu77yaICAgICAgICAg5a2Q6IqC54K5XHJcbiAqICAgICAgICAgIOiHqui6q+WxnuaAp++8miAgICAgICAgICBzY2FsZSx3aWR0aCxvcGFjaXR5562JXHJcbiAqICAgICAgICAgIOiEmuacrOWxnuaAp++8miAgICAgICAgICDohJrmnKzlrp7kvovlr7nosaHnmoTlsZ7mgKdcclxuICog4oaT4oaT5Y+C5pWw5Y+v5Lul55SoM+enjeWIhumalOespumalOW8gOKGk+KGk1xyXG4gKiAgICAgICAgICDoi7HmlofpgJflj7fjgIHoi7HmloflhpLlj7fjgIHnqbrmoLxcclxuICog4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU5Li+5Liq5qCX5a2Q4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUXHJcbiAqIOiEmuacrO+8miAgICBIZXJvXHJcbiAqIOWPguaVsO+8miAgICB3cCxzY2FsZSxhbmdsZSwjYW5nbGUsI2hwXHJcbiAqIOaYvuekuue7k+aenO+8muS4lueVjOWdkOaghyzoioLngrlzY2FsZSzoioLngrlhbmdsZe+8jEhlcm/lr7nosaHnmoRhbmdsZSxIZXJv5a+56LGh55qEaHBcclxuICog4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU5rip6aao5o+Q56S64oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUXHJcbiAqIOWIneWni+WMlueahOaXtuWAme+8jOiuvue9ruWFqOWxgOWPmOmHj3dpbmRvd1snREFUQUJPQVJEJ10gPSBmYWxzZeWPr+Wxj+iUveacrOmhueebruaJgOaciURhdGFCb2FyZO+8jOS4jeS8muS6p+eUn+S7u+S9lemineWkluW8gOmUgFxcblxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG53aW5kb3dbJ0RBVEFCT0FSRCddID0gdHJ1ZTtcclxuY29uc3QgQU5DSE9SX1NJWkUgPSAyMDsgICAgICAgICAgICAgICAvL+mUmueCueeahOWkp+Wwj1xyXG5jb25zdCBMSU5FSEVJR0hUID0gMS4yOyAgICAgICAgICAgICAgIC8v6KGM6auY5piv5a2X5L2T5aSn5bCP55qE5aSa5bCR5YCNXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHksIGV4ZWN1dGVJbkVkaXRNb2RlLCBtZW51IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzc1xyXG5AZXhlY3V0ZUluRWRpdE1vZGVcclxuQG1lbnUoJ0NvbXAvRGF0YUJvYXJkJylcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YUJvYXJkIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBfaXNPdXRsaW5lQm94QWN0aXZlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAcHJvcGVydHkoeyBkaXNwbGF5TmFtZTogQ0NfREVWICYmICfova7lu5Pnm5LlrZAnLCB0b29sdGlwOiBDQ19ERVYgJiYgJ+maj+iKgueCueaXi+i9rO+8jOS7o+ihqOWunuaXtui9ruW7kycgfSlcclxuICAgIHByaXZhdGUgZ2V0IGlzT3V0bGluZUJveEFjdGl2ZSgpIHsgcmV0dXJuIHRoaXMuX2lzT3V0bGluZUJveEFjdGl2ZSB9O1xyXG4gICAgcHJpdmF0ZSBzZXQgaXNPdXRsaW5lQm94QWN0aXZlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5faXNPdXRsaW5lQm94QWN0aXZlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5vdXRsaW5lQm94Tm9kZS5hY3RpdmUgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBfb3V0bGluZUJveENvbG9yOiBjYy5Db2xvciA9IG5ldyBjYy5Db2xvcihNYXRoLnJhbmRvbSgpICogMjU1LCBNYXRoLnJhbmRvbSgpICogMjU1LCBNYXRoLnJhbmRvbSgpICogMjU1KTtcclxuICAgIEBwcm9wZXJ0eSh7IGRpc3BsYXlOYW1lOiBDQ19ERVYgJiYgJ8K3wrfCt8K3wrfCt+minOiJsicsIHZpc2libGUoKSB7IHJldHVybiB0aGlzLmlzT3V0bGluZUJveEFjdGl2ZSB9IH0pXHJcbiAgICBwcml2YXRlIGdldCBvdXRsaW5lQm94Q29sb3IoKSB7IHJldHVybiB0aGlzLl9vdXRsaW5lQm94Q29sb3IgfTtcclxuICAgIHByaXZhdGUgc2V0IG91dGxpbmVCb3hDb2xvcih2YWx1ZTogY2MuQ29sb3IpIHtcclxuICAgICAgICB0aGlzLl9vdXRsaW5lQm94Q29sb3IgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLm91dGxpbmVCb3hOb2RlLmNvbG9yID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBAcHJvcGVydHlcclxuICAgIHByaXZhdGUgX291dGxpbmVCb3hPcGFjaXR5OiBudW1iZXIgPSAxMDA7XHJcbiAgICBAcHJvcGVydHkoeyBtaW46IDAsIG1heDogMjU1LCBzdGVwOiAxLCBzbGlkZTogdHJ1ZSwgZGlzcGxheU5hbWU6IENDX0RFViAmJiAnwrfCt8K3wrfCt8K36YCP5piO5bqmJywgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMuaXNPdXRsaW5lQm94QWN0aXZlIH0gfSlcclxuICAgIHByaXZhdGUgZ2V0IG91dGxpbmVCb3hPcGFjaXR5KCkgeyByZXR1cm4gdGhpcy5fb3V0bGluZUJveE9wYWNpdHkgfTtcclxuICAgIHByaXZhdGUgc2V0IG91dGxpbmVCb3hPcGFjaXR5KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9vdXRsaW5lQm94T3BhY2l0eSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMub3V0bGluZUJveE5vZGUub3BhY2l0eSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBwcml2YXRlIF9pc0NvbGxpZGVCb3hBY3RpdmU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IENDX0RFViAmJiAn56Kw5pKe55uS5a2QJywgdG9vbHRpcDogQ0NfREVWICYmICfkuI3pmo/oioLngrnml4vovazvvIzku6PooajnorDmkp7ojIPlm7QnIH0pXHJcbiAgICBwcml2YXRlIGdldCBpc0NvbGxpZGVCb3hBY3RpdmUoKSB7IHJldHVybiB0aGlzLl9pc0NvbGxpZGVCb3hBY3RpdmUgfTtcclxuICAgIHByaXZhdGUgc2V0IGlzQ29sbGlkZUJveEFjdGl2ZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX2lzQ29sbGlkZUJveEFjdGl2ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuY29sbGlkZUJveE5vZGUuYWN0aXZlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBAcHJvcGVydHlcclxuICAgIHByaXZhdGUgX2NvbGxpZGVCb3hDb2xvcjogY2MuQ29sb3IgPSBuZXcgY2MuQ29sb3IoTWF0aC5yYW5kb20oKSAqIDI1NSwgTWF0aC5yYW5kb20oKSAqIDI1NSwgTWF0aC5yYW5kb20oKSAqIDI1NSk7XHJcbiAgICBAcHJvcGVydHkoeyBkaXNwbGF5TmFtZTogQ0NfREVWICYmICfCt8K3wrfCt8K3wrfpopzoibInLCB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy5pc0NvbGxpZGVCb3hBY3RpdmUgfSB9KVxyXG4gICAgcHJpdmF0ZSBnZXQgY29sbGlkZUJveENvbG9yKCkgeyByZXR1cm4gdGhpcy5fY29sbGlkZUJveENvbG9yIH07XHJcbiAgICBwcml2YXRlIHNldCBjb2xsaWRlQm94Q29sb3IodmFsdWU6IGNjLkNvbG9yKSB7XHJcbiAgICAgICAgdGhpcy5fY29sbGlkZUJveENvbG9yID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5jb2xsaWRlQm94Tm9kZS5jb2xvciA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBwcml2YXRlIF9jb2xsaWRlQm94T3BhY2l0eTogbnVtYmVyID0gMTAwO1xyXG4gICAgQHByb3BlcnR5KHsgbWluOiAwLCBtYXg6IDI1NSwgc3RlcDogMSwgc2xpZGU6IHRydWUsIGRpc3BsYXlOYW1lOiBDQ19ERVYgJiYgJ8K3wrfCt8K3wrfCt+mAj+aYjuW6picsIHZpc2libGUoKSB7IHJldHVybiB0aGlzLmlzQ29sbGlkZUJveEFjdGl2ZSB9IH0pXHJcbiAgICBwcml2YXRlIGdldCBjb2xsaWRlQm94T3BhY2l0eSgpIHsgcmV0dXJuIHRoaXMuX2NvbGxpZGVCb3hPcGFjaXR5IH07XHJcbiAgICBwcml2YXRlIHNldCBjb2xsaWRlQm94T3BhY2l0eSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fY29sbGlkZUJveE9wYWNpdHkgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmNvbGxpZGVCb3hOb2RlLm9wYWNpdHkgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBfaXNDdXN0b21MYWJlbEFjdGl2ZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBAcHJvcGVydHkoeyBkaXNwbGF5TmFtZTogQ0NfREVWICYmICfoh6rlrprkuYnlj4LmlbAnLCB0b29sdGlwOiBDQ19ERVYgJiYgJ+mFjee9ruaYvuekuueahOWxnuaAp+WGheWuuScgfSlcclxuICAgIHByaXZhdGUgZ2V0IGlzQ3VzdG9tTGFiZWxBY3RpdmUoKSB7IHJldHVybiB0aGlzLl9pc0N1c3RvbUxhYmVsQWN0aXZlIH07XHJcbiAgICBwcml2YXRlIHNldCBpc0N1c3RvbUxhYmVsQWN0aXZlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5faXNDdXN0b21MYWJlbEFjdGl2ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuY3VzdG9tTGFiZWxOb2RlLmFjdGl2ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IENDX0RFViAmJiAnwrfCt8K3wrfCt8K36ISa5pysJywgdG9vbHRpcDogQ0NfREVWICYmICfnm5Hmjqflk6rkuKrohJrmnKwnLCB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy5pc0N1c3RvbUxhYmVsQWN0aXZlOyB9IH0pXHJcbiAgICBwcml2YXRlIGN1c3RvbUNvbXBvbmVudE5hbWU6IHN0cmluZyA9ICcnO1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBwcml2YXRlIF9jdXN0b21MYWJlbFN0cmluZzogc3RyaW5nID0gJ3gseSc7XHJcbiAgICBAcHJvcGVydHkoeyBtdWx0aWxpbmU6IHRydWUsIGRpc3BsYXlOYW1lOiBDQ19ERVYgJiYgJ8K3wrfCt8K3wrfCt+WPguaVsCcsIHRvb2x0aXA6IENDX0RFViAmJiBcIuKAlOKAlOKAlOKAlOKAlOaUr+aMgeeahOWPguaVsOKAlOKAlOKAlOKAlFxcbndw77ya5LiW55WM5Z2Q5qCHXFxucmFkaWFu77ya6KeS5bqm77yI5Y2V5L2N77yaz4DvvIlcXG5tYXRyaXjvvJrlj5jmjaLnn6npmLVcXG5wYXJlbnTvvJrniLboioLngrlcXG5jaGlsZHJlbu+8muWtkOiKgueCuVxcbuiHqui6q+WxnuaAp++8mnNjYWxlLHdpZHRoLG9wYWNpdHnnrYlcXG7ohJrmnKzlsZ7mgKfvvJrohJrmnKzlrp7kvovlr7nosaHnmoTlsZ7mgKdcXG7ihpPihpPlj4LmlbDlj6/ku6XnlKgz56eN5YiG6ZqU56ym6ZqU5byA4oaT4oaTXFxu6Iux5paH6YCX5Y+344CB6Iux5paH5YaS5Y+344CB56m65qC8XFxu4oCU4oCU4oCU4oCU5Li+5Liq5qCX5a2Q4oCU4oCU4oCU4oCUXFxu6ISa5pys77yaSGVyb1xcbuWPguaVsO+8mndwLHNjYWxlLGFuZ2xlLCNhbmdsZSwjaHBcXG7mmL7npLrnu5PmnpzvvJpcXG7kuJbnlYzlnZDmoIcs6IqC54K5c2NhbGUs6IqC54K5YW5nbGXvvIxIZXJv5a+56LGh55qEYW5nbGUsSGVyb+WvueixoeeahGhwXFxu4oCU4oCU4oCU4oCU5rip6aao5o+Q56S64oCU4oCU4oCU4oCUXFxu5Yid5aeL5YyW55qE5pe25YCZ77yM6K6+572u5YWo5bGA5Y+Y6YePXFxud2luZG93WydEQVRBQk9BUkQnXSA9IGZhbHNlXFxu5Y+v5bGP6JS95pys6aG555uu5omA5pyJRGF0YUJvYXJk77yM5LiN5Lya5Lqn55Sf5Lu75L2V6aKd5aSW5byA6ZSAXCIsIHZpc2libGUoKSB7IHJldHVybiB0aGlzLmlzQ3VzdG9tTGFiZWxBY3RpdmUgfSB9KVxyXG4gICAgcHJpdmF0ZSBnZXQgY3VzdG9tTGFiZWxTdHJpbmcoKSB7IHJldHVybiB0aGlzLl9jdXN0b21MYWJlbFN0cmluZyB9O1xyXG4gICAgcHJpdmF0ZSBzZXQgY3VzdG9tTGFiZWxTdHJpbmcodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2N1c3RvbUxhYmVsU3RyaW5nID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5jdXN0b21MYWJlbFN0cmluZ1NwbGl0ID0gdmFsdWVcclxuICAgICAgICAgICAgLnJlcGxhY2UoLywvZywgJ19+XycpLnJlcGxhY2UoLzovZywgJ18hXycpLnJlcGxhY2UoLyAvZywgJ19AXycpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC8oW15fXSlcXG4vZywgJyQxX1xcbicpLnJlcGxhY2UoLyhbXl9dKVxcbi9nLCAnJDFfXFxuJykucmVwbGFjZSgvXFxuKFteX10pL2csICdcXG5fJDEnKVxyXG4gICAgICAgICAgICAuc3BsaXQoJ18nKTtcclxuICAgIH1cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBfY3VzdG9tTGFiZWxPZmZzZXQ6IGNjLlZlYzIgPSBjYy52MigwLCAxMDApO1xyXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IENDX0RFViAmJiAnwrfCt8K3wrfCt8K35YGP56e7JywgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMuaXNDdXN0b21MYWJlbEFjdGl2ZSB9IH0pXHJcbiAgICBwcml2YXRlIGdldCBjdXN0b21MYWJlbE9mZnNldCgpIHsgcmV0dXJuIHRoaXMuX2N1c3RvbUxhYmVsT2Zmc2V0IH07XHJcbiAgICBwcml2YXRlIHNldCBjdXN0b21MYWJlbE9mZnNldCh2YWx1ZTogY2MuVmVjMikge1xyXG4gICAgICAgIHRoaXMuX2N1c3RvbUxhYmVsT2Zmc2V0ID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5jdXN0b21MYWJlbE5vZGUueCA9IHZhbHVlLng7XHJcbiAgICAgICAgdGhpcy5jdXN0b21MYWJlbE5vZGUueSA9IHZhbHVlLnk7XHJcbiAgICB9XHJcbiAgICBAcHJvcGVydHlcclxuICAgIHByaXZhdGUgX2N1c3RvbUxhYmVsQ29sb3I6IGNjLkNvbG9yID0gbmV3IGNjLkNvbG9yKDI1NSwgMjU1LCAwKTtcclxuICAgIEBwcm9wZXJ0eSh7IGRpc3BsYXlOYW1lOiBDQ19ERVYgJiYgJ8K3wrfCt8K3wrfCt+minOiJsicsIHZpc2libGUoKSB7IHJldHVybiB0aGlzLmlzQ3VzdG9tTGFiZWxBY3RpdmUgfSB9KVxyXG4gICAgcHJpdmF0ZSBnZXQgY3VzdG9tTGFiZWxDb2xvcigpIHsgcmV0dXJuIHRoaXMuX2N1c3RvbUxhYmVsQ29sb3IgfTtcclxuICAgIHByaXZhdGUgc2V0IGN1c3RvbUxhYmVsQ29sb3IodmFsdWU6IGNjLkNvbG9yKSB7XHJcbiAgICAgICAgdGhpcy5fY3VzdG9tTGFiZWxDb2xvciA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuY3VzdG9tTGFiZWxOb2RlLmNvbG9yID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBAcHJvcGVydHlcclxuICAgIHByaXZhdGUgX2N1c3RvbUxhYmVsU2l6ZTogbnVtYmVyID0gNjA7XHJcbiAgICBAcHJvcGVydHkoeyBkaXNwbGF5TmFtZTogQ0NfREVWICYmICfCt8K3wrfCt8K3wrflpKflsI8nLCB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy5pc0N1c3RvbUxhYmVsQWN0aXZlIH0gfSlcclxuICAgIHByaXZhdGUgZ2V0IGN1c3RvbUxhYmVsU2l6ZSgpIHsgcmV0dXJuIHRoaXMuX2N1c3RvbUxhYmVsU2l6ZSB9O1xyXG4gICAgcHJpdmF0ZSBzZXQgY3VzdG9tTGFiZWxTaXplKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9jdXN0b21MYWJlbFNpemUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmN1c3RvbUxhYmVsLmZvbnRTaXplID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5jdXN0b21MYWJlbC5saW5lSGVpZ2h0ID0gdmFsdWUgKiBMSU5FSEVJR0hUO1xyXG4gICAgICAgIHRoaXMuY3VzdG9tTGFiZWxOb2RlLmdldENvbXBvbmVudChjYy5MYWJlbE91dGxpbmUpLndpZHRoID0gdmFsdWUgKiAwLjE7XHJcbiAgICB9XHJcbiAgICBAcHJvcGVydHlcclxuICAgIHByaXZhdGUgX2N1c3RvbUxhYmVsRGlnaXQ6IG51bWJlciA9IDA7XHJcbiAgICBAcHJvcGVydHkoeyBtaW46IDAsIG1heDogMTAsIHN0ZXA6IDEsIHNsaWRlOiB0cnVlLCBkaXNwbGF5TmFtZTogQ0NfREVWICYmICfCt8K3wrfCt8K3wrflsI/mlbDkvY3mlbAnLCB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy5pc0N1c3RvbUxhYmVsQWN0aXZlIH0gfSlcclxuICAgIHByaXZhdGUgZ2V0IGN1c3RvbUxhYmVsRGlnaXQoKSB7IHJldHVybiB0aGlzLl9jdXN0b21MYWJlbERpZ2l0IH07XHJcbiAgICBwcml2YXRlIHNldCBjdXN0b21MYWJlbERpZ2l0KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9jdXN0b21MYWJlbERpZ2l0ID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGJvYXJkTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIG91dGxpbmVCb3hOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgY29sbGlkZUJveE5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBhbmNob3JQb2ludE5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjdXN0b21MYWJlbE5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjdXN0b21MYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjdXN0b21MYWJlbFN0cmluZ1NwbGl0OiBzdHJpbmdbXSA9IG51bGw7XHJcbiAgICBwcml2YXRlIG1vbml0b3JDb21wOiBjYy5Db21wb25lbnQgPSBudWxsO1xyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5ib2FyZE5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ0RhdGFCb2FyZCcpO1xyXG4gICAgICAgIGlmICghQ0NfRURJVE9SICYmICF3aW5kb3dbJ0RBVEFCT0FSRCddKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuYm9hcmROb2RlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmJvYXJkTm9kZS5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmROb2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHRleHR1cmUgPSBuZXcgY2MuVGV4dHVyZTJEKCk7XHJcbiAgICAgICAgdGV4dHVyZS5pbml0V2l0aERhdGEobmV3IFVpbnQ4QXJyYXkoWzI1NSwgMjU1LCAyNTVdKSwgY2MuVGV4dHVyZTJELlBpeGVsRm9ybWF0LlJHQjg4OCwgMSwgMSk7XHJcblxyXG4gICAgICAgIHRoaXMuYm9hcmROb2RlID0gbmV3IGNjLk5vZGUoJ0RhdGFCb2FyZCcpO1xyXG4gICAgICAgIHRoaXMuYm9hcmROb2RlLnNldFBhcmVudCh0aGlzLm5vZGUpO1xyXG4gICAgICAgIHRoaXMuYm9hcmROb2RlLnggPSB0aGlzLmJvYXJkTm9kZS55ID0gMDtcclxuICAgICAgICB0aGlzLmJvYXJkTm9kZS56SW5kZXggPSBjYy5tYWNyby5NQVhfWklOREVYO1xyXG4gICAgICAgIHRoaXMuYm9hcmROb2RlWydfb2JqRmxhZ3MnXSB8PSBjYy5PYmplY3RbJ0ZsYWdzJ10uSGlkZUluSGllcmFyY2h5O1xyXG4gICAgICAgIHRoaXMuYm9hcmROb2RlWydfb2JqRmxhZ3MnXSB8PSBjYy5PYmplY3RbJ0ZsYWdzJ10uTG9ja2VkSW5FZGl0b3I7XHJcblxyXG4gICAgICAgIHRoaXMub3V0bGluZUJveE5vZGUgPSBuZXcgY2MuTm9kZSgnT3V0bGluZUJveCcpO1xyXG4gICAgICAgIHRoaXMub3V0bGluZUJveE5vZGUuc2V0UGFyZW50KHRoaXMuYm9hcmROb2RlKTtcclxuICAgICAgICB0aGlzLm91dGxpbmVCb3hOb2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgIHRoaXMub3V0bGluZUJveE5vZGUuYWN0aXZlID0gdGhpcy5pc091dGxpbmVCb3hBY3RpdmU7XHJcbiAgICAgICAgdGhpcy5vdXRsaW5lQm94Tm9kZS5jb2xvciA9IHRoaXMub3V0bGluZUJveENvbG9yO1xyXG4gICAgICAgIHRoaXMub3V0bGluZUJveE5vZGUub3BhY2l0eSA9IHRoaXMub3V0bGluZUJveE9wYWNpdHk7XHJcblxyXG4gICAgICAgIHRoaXMuY29sbGlkZUJveE5vZGUgPSBuZXcgY2MuTm9kZSgnQ29sbGlkZUJveCcpO1xyXG4gICAgICAgIHRoaXMuY29sbGlkZUJveE5vZGUuc2V0UGFyZW50KHRoaXMuYm9hcmROb2RlKTtcclxuICAgICAgICB0aGlzLmNvbGxpZGVCb3hOb2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgIHRoaXMuY29sbGlkZUJveE5vZGUuYWN0aXZlID0gdGhpcy5pc0NvbGxpZGVCb3hBY3RpdmU7XHJcbiAgICAgICAgdGhpcy5jb2xsaWRlQm94Tm9kZS5jb2xvciA9IHRoaXMuY29sbGlkZUJveENvbG9yO1xyXG4gICAgICAgIHRoaXMuY29sbGlkZUJveE5vZGUub3BhY2l0eSA9IHRoaXMuY29sbGlkZUJveE9wYWNpdHk7XHJcblxyXG4gICAgICAgIHRoaXMuYW5jaG9yUG9pbnROb2RlID0gbmV3IGNjLk5vZGUoJ0FuY2hvclBvaW50Jyk7XHJcbiAgICAgICAgdGhpcy5hbmNob3JQb2ludE5vZGUuc2V0UGFyZW50KHRoaXMuYm9hcmROb2RlKTtcclxuICAgICAgICB0aGlzLmFuY2hvclBvaW50Tm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICB0aGlzLmFuY2hvclBvaW50Tm9kZS5jb2xvciA9IGNjLmNvbG9yKDI1NSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5hbmNob3JQb2ludE5vZGUud2lkdGggPSBBTkNIT1JfU0laRTtcclxuICAgICAgICB0aGlzLmFuY2hvclBvaW50Tm9kZS5oZWlnaHQgPSBBTkNIT1JfU0laRTtcclxuXHJcbiAgICAgICAgdGhpcy5jdXN0b21MYWJlbE5vZGUgPSBuZXcgY2MuTm9kZSgnQ3VzdG9tTGFiZWwnKTtcclxuICAgICAgICB0aGlzLmN1c3RvbUxhYmVsTm9kZS5zZXRQYXJlbnQodGhpcy5ib2FyZE5vZGUpO1xyXG4gICAgICAgIHRoaXMuY3VzdG9tTGFiZWwgPSB0aGlzLmN1c3RvbUxhYmVsTm9kZS5hZGRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMuY3VzdG9tTGFiZWxOb2RlLmFkZENvbXBvbmVudChjYy5MYWJlbE91dGxpbmUpLmNvbG9yID0gY2MuY29sb3IoMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5jdXN0b21MYWJlbE5vZGUuYWN0aXZlID0gdGhpcy5pc0N1c3RvbUxhYmVsQWN0aXZlO1xyXG4gICAgICAgIHRoaXMuY3VzdG9tTGFiZWxTdHJpbmcgPSB0aGlzLl9jdXN0b21MYWJlbFN0cmluZztcclxuICAgICAgICB0aGlzLmN1c3RvbUxhYmVsTm9kZS54ID0gdGhpcy5jdXN0b21MYWJlbE9mZnNldC54O1xyXG4gICAgICAgIHRoaXMuY3VzdG9tTGFiZWxOb2RlLnkgPSB0aGlzLmN1c3RvbUxhYmVsT2Zmc2V0Lnk7XHJcbiAgICAgICAgdGhpcy5jdXN0b21MYWJlbE5vZGUuY29sb3IgPSB0aGlzLmN1c3RvbUxhYmVsQ29sb3I7XHJcbiAgICAgICAgdGhpcy5jdXN0b21MYWJlbFNpemUgPSB0aGlzLl9jdXN0b21MYWJlbFNpemU7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlQW5nbGUoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNjYWxlKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVBbmNob3IoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuUk9UQVRJT05fQ0hBTkdFRCwgdGhpcy51cGRhdGVBbmdsZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlNDQUxFX0NIQU5HRUQsIHRoaXMudXBkYXRlU2NhbGUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5BTkNIT1JfQ0hBTkdFRCwgdGhpcy51cGRhdGVBbmNob3IsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5TSVpFX0NIQU5HRUQsIHRoaXMudXBkYXRlU2l6ZSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVBbmdsZSgpIHtcclxuICAgICAgICB0aGlzLmNvbGxpZGVCb3hOb2RlLmFuZ2xlID0gLXRoaXMubm9kZS5hbmdsZTtcclxuICAgICAgICB0aGlzLmN1c3RvbUxhYmVsTm9kZS5hbmdsZSA9IC10aGlzLm5vZGUuYW5nbGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVTY2FsZSgpIHtcclxuICAgICAgICB0aGlzLmJvYXJkTm9kZS5zY2FsZVggPSAxIC8gdGhpcy5ub2RlLnNjYWxlWDtcclxuICAgICAgICB0aGlzLmJvYXJkTm9kZS5zY2FsZVkgPSAxIC8gdGhpcy5ub2RlLnNjYWxlWTtcclxuICAgICAgICB0aGlzLm91dGxpbmVCb3hOb2RlLnNjYWxlWCA9IHRoaXMubm9kZS5zY2FsZVg7XHJcbiAgICAgICAgdGhpcy5vdXRsaW5lQm94Tm9kZS5zY2FsZVkgPSB0aGlzLm5vZGUuc2NhbGVZO1xyXG4gICAgICAgIHRoaXMuY29sbGlkZUJveE5vZGUuc2NhbGVYID0gdGhpcy5ub2RlLnNjYWxlWDtcclxuICAgICAgICB0aGlzLmNvbGxpZGVCb3hOb2RlLnNjYWxlWSA9IHRoaXMubm9kZS5zY2FsZVk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVBbmNob3IoKSB7XHJcbiAgICAgICAgdGhpcy5vdXRsaW5lQm94Tm9kZS5hbmNob3JYID0gdGhpcy5ub2RlLmFuY2hvclg7XHJcbiAgICAgICAgdGhpcy5vdXRsaW5lQm94Tm9kZS5hbmNob3JZID0gdGhpcy5ub2RlLmFuY2hvclk7XHJcbiAgICAgICAgdGhpcy5jb2xsaWRlQm94Tm9kZS5hbmNob3JYID0gdGhpcy5ub2RlLmFuY2hvclg7XHJcbiAgICAgICAgdGhpcy5jb2xsaWRlQm94Tm9kZS5hbmNob3JZID0gdGhpcy5ub2RlLmFuY2hvclk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVTaXplKCkge1xyXG4gICAgICAgIHRoaXMub3V0bGluZUJveE5vZGUud2lkdGggPSB0aGlzLm5vZGUud2lkdGg7XHJcbiAgICAgICAgdGhpcy5vdXRsaW5lQm94Tm9kZS5oZWlnaHQgPSB0aGlzLm5vZGUuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuY29sbGlkZUJveE5vZGUud2lkdGggPSB0aGlzLm5vZGUud2lkdGg7XHJcbiAgICAgICAgdGhpcy5jb2xsaWRlQm94Tm9kZS5oZWlnaHQgPSB0aGlzLm5vZGUuaGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCB1cGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQ3VzdG9tTGFiZWxBY3RpdmUpIHJldHVybjtcclxuICAgICAgICBpZiAoIXRoaXMuY3VzdG9tTGFiZWxTdHJpbmdTcGxpdCkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBzdHIgPSAnJztcclxuICAgICAgICBsZXQgc3RycyA9IHRoaXMuY3VzdG9tTGFiZWxTdHJpbmdTcGxpdDtcclxuICAgICAgICBpZiAoIXRoaXMubW9uaXRvckNvbXAgJiYgdGhpcy5jdXN0b21Db21wb25lbnROYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9uaXRvckNvbXAgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KHRoaXMuY3VzdG9tQ29tcG9uZW50TmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBzdHJzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XHJcbiAgICAgICAgICAgIGxldCB0bXAgPSBudWxsO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHN0cnNbaV0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3dwJzpcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdG1wID0gYCgke3Bvcy54LnRvRml4ZWQodGhpcy5jdXN0b21MYWJlbERpZ2l0KX0sXFx0JHtwb3MueS50b0ZpeGVkKHRoaXMuY3VzdG9tTGFiZWxEaWdpdCl9KWA7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdhbmdsZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgdG1wID0gdGhpcy5ub2RlLmFuZ2xlLnRvRml4ZWQodGhpcy5jdXN0b21MYWJlbERpZ2l0KSArICfCsCc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdyYWRpYW4nOlxyXG4gICAgICAgICAgICAgICAgICAgIHRtcCA9ICh0aGlzLm5vZGUuYW5nbGUgLyAxODApLnRvRml4ZWQodGhpcy5jdXN0b21MYWJlbERpZ2l0KSArICfPgCc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdtYXRyaXgnOlxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtYXRyaXggPSB0aGlzLm5vZGVbJ193b3JsZE1hdHJpeCddLm07XHJcbiAgICAgICAgICAgICAgICAgICAgdG1wID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyArK2kpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA0OyArK2opIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtbSA9IG1hdHJpeFtqICogNCArIGldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG1wICs9IChtbSA8IDAgPyAnXFx0XFx0JyA6ICdcXHRcXHRcXHQnKSArIG1tLnRvRml4ZWQodGhpcy5jdXN0b21MYWJlbERpZ2l0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSAhPT0gMykgdG1wICs9ICdcXG4nO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3BhcmVudCc6XHJcbiAgICAgICAgICAgICAgICAgICAgdG1wID0gdGhpcy5ub2RlLnBhcmVudC5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnY2hpbGRyZW4nOlxyXG4gICAgICAgICAgICAgICAgICAgIHRtcCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aGlzLm5vZGUuY2hpbGRyZW5Db3VudDsgaSA8IGxlbjsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcCArPSBgXFx0XFx0XFx0JHtpfe+8miR7dGhpcy5ub2RlLmNoaWxkcmVuW2ldLm5hbWV9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgIT09IGxlbiAtIDEpIHRtcCArPSAnXFxuJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICd+JzogdG1wID0gJyxcXHQnOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJyEnOiB0bXAgPSAnOlxcdCc7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnQCc6IHRtcCA9ICcgXFx0JzsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vZGVbc3Ryc1tpXV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0bXAgPSB0aGlzLm5vZGVbc3Ryc1tpXV07XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdHJzW2ldLnN0YXJ0c1dpdGgoJyMnKSAmJiB0aGlzLm1vbml0b3JDb21wICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcCA9IHRoaXMubW9uaXRvckNvbXBbc3Ryc1tpXS5zdWJzdHJpbmcoMSldO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcCA9IHN0cnNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0bXAgJiYgdG1wLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG1wID0gdG1wLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG1wID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICAgICAgdG1wID0gdG1wLnRvRml4ZWQodGhpcy5jdXN0b21MYWJlbERpZ2l0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdHIgKz0gdG1wO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1c3RvbUxhYmVsLnN0cmluZyA9IHN0cjtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuYm9hcmROb2RlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmJvYXJkTm9kZS5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmROb2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMubm9kZS50YXJnZXRPZmYodGhpcyk7XHJcbiAgICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------
