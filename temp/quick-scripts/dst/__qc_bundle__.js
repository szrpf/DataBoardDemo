
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
 *          wp：               世界坐标
 *          radian：           节点弧度（单位：π）
 *          matrix:            变换矩阵
 *          自身属性：          x,y,parent,children等
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
                .replace(/_*\n_*/g, '_\n_').split('_');
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
        if (!CC_EDITOR && !window['DATABOARD']) {
            this.destroy();
            return;
        }
        this.boardNode = this.node.getChildByName('DataBoard');
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
                    var matrix = this.node['_worldMatrix'].m;
                    tmp = matrix[12].toFixed(this.customLabelDigit) + ",\t" + matrix[13].toFixed(this.customLabelDigit);
                    break;
                case 'angle':
                    tmp = this.node.angle.toFixed(this.customLabelDigit) + '°';
                    break;
                case 'radian':
                    tmp = (this.node.angle / 180).toFixed(this.customLabelDigit) + 'π';
                    break;
                case 'matrix':
                    matrix = this.node['_worldMatrix'].m;
                    tmp = '';
                    for (var i_1 = 0; i_1 < 4; ++i_1) {
                        for (var j = 0; j < 4; ++j) {
                            var m = matrix[j * 4 + i_1];
                            tmp += (m < 0 ? '\t\t' : '\t\t\t') + m.toFixed(this.customLabelDigit);
                        }
                        i_1 !== 3 && (tmp += '\n');
                    }
                    break;
                case 'children':
                    tmp = '';
                    for (var i_2 = 0, len_1 = this.node.childrenCount; i_2 < len_1; ++i_2) {
                        tmp += "\t\t\t" + i_2 + "\uFF1A" + this.node.children[i_2].name;
                        i_2 !== len_1 - 1 && (tmp += '\n');
                    }
                    break;
                case '~':
                    tmp = ',\t';
                    break;
                case '!':
                    tmp = ':\t';
                    break;
                case '@':
                    tmp = '\t\t';
                    break;
                default:
                    if (this.node[strs[i]] !== undefined) {
                        tmp = this.node[strs[i]];
                    }
                    else if (strs[i].startsWith('#') && this.monitorComp !== null) {
                        tmp = this.parseString(strs[i].substring(1));
                    }
                    else {
                        tmp = strs[i];
                    }
                    if (typeof tmp === 'number') {
                        tmp = tmp.toFixed(this.customLabelDigit);
                    }
                    else if (tmp.name) {
                        tmp = tmp.name;
                    }
                    break;
            }
            str += tmp;
        }
        this.customLabel.string = str;
    };
    DataBoard.prototype.parseString = function (str) {
        var strs = str.split('.');
        var ret = this.monitorComp[strs[0]] || "#" + strs[0];
        for (var i = 1, len = strs.length; i < len; ++i) {
            if (ret[strs[i]] === undefined) {
                return (ret.name ? ret.name : ret) + "." + strs[i];
            }
            ret = ret[strs[i]];
        }
        return ret;
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
        property({ multiline: true, displayName: CC_DEV && '······参数', tooltip: CC_DEV && "—————支持的参数————\nwp：世界坐标\nradian：节点弧度（单位：π）\nmatrix：变换矩阵\n自身属性：x,y,parent,children等\n脚本属性：脚本实例对象的属性\n↓↓参数可以用3种分隔符隔开↓↓\n英文逗号、英文冒号、空格\n————举个栗子————\n脚本：Hero\n参数：wp,scale,angle,#angle,#hp\n显示结果：\n世界坐标,节点scale,节点angle，Hero对象的angle,Hero对象的hp\n————温馨提示————\n初始化的时候，设置全局变量\nwindow['DATABOARD'] = false\n可屏蔽本项目所有DataBoard，不会产生任何额外开销", visible: function () { return this.isCustomLabelActive; } })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhQm9hcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnRkF3QmdGO0FBQ2hGLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDM0IsSUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDLENBQWUsT0FBTztBQUM3QyxJQUFNLFVBQVUsR0FBRyxHQUFHLENBQUMsQ0FBZSxhQUFhO0FBQzdDLElBQUEsS0FBaUQsRUFBRSxDQUFDLFVBQVUsRUFBNUQsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsaUJBQWlCLHVCQUFBLEVBQUUsSUFBSSxVQUFrQixDQUFDO0FBSXJFO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBMlJDO1FBelJXLHlCQUFtQixHQUFZLEtBQUssQ0FBQztRQVFyQyxzQkFBZ0IsR0FBYSxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztRQVF6Ryx3QkFBa0IsR0FBVyxHQUFHLENBQUM7UUFRakMseUJBQW1CLEdBQVksSUFBSSxDQUFDO1FBUXBDLHNCQUFnQixHQUFhLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBUXpHLHdCQUFrQixHQUFXLEdBQUcsQ0FBQztRQVFqQywwQkFBb0IsR0FBWSxJQUFJLENBQUM7UUFRckMseUJBQW1CLEdBQVcsRUFBRSxDQUFDO1FBRWpDLHdCQUFrQixH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RSxDQUFDLFNBQVMsR0EyUmxEO2tCQTNSb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiDliJvlu7o6ICAgIDIwMjLlubQxMeaciDIz5pelXG4gKiDkvZzogIU6ICAgIOawtOeFruiCieeJh+mlrSgyNzE4NTcwOUBxcS5jb20pXG4gKiDmj4/ov7A6ICAgIOaVsOaNrueci+adv1xuICog6IqC54K55oyC5LiK6K+l57uE5Lu277yM5bCx5Y+v5Lul5Zyo5ri45oiP6L+Q6KGM6L+H56iL5Lit77yM55u06KeC55yL5Yiw6IqC54K55Lu75oSP5bGe5oCn77yI5YyF5ous6IqC54K56ISa5pys5Lit55qE5bGe5oCn77yJXG4gKiDlj6/ku6Xlm77lvaLljJblsZXnpLrku6XkuIvlm5vnp43mlbDmja7vvJpcbiAqICAgICAgICAgIOi9ruW7k+ebkuWtkO+8miAgICAgICAgICDpmo/oioLngrnml4vovazvvIzku6PooajoioLngrnnmoTlrp7ml7bnn6nlvaJcbiAqICAgICAgICAgIOeisOaSnuebkuWtkO+8miAgICAgICAgICDkuI3pmo/oioLngrnml4vovazvvIzkuIDoiKzku6PooajnorDmkp7ojIPlm7RcbiAqICAgICAgICAgIOiHquWumuS5ieWPguaVsO+8miAgICAgICAg6IqC54K56Ieq6Lqr5bGe5oCn77yM5Lul5Y+K6IqC54K55Lu75oSP6ISa5pys5Lit55qE5bGe5oCnXG4gKiAgICAgICAgICDplJrngrnvvJogICAgICAgICAgICAg6ZSa54K55L2N572u5Lya5pi+56S65LiA5Liq5bCP57qi54K5XG4gKiDoh6rlrprkuYnlj4LmlbDvvIjphY3nva7mg7Pnm5HmjqfnmoTmlbDmja7vvInvvJpcbiAqICAgICAgICAgIHdw77yaICAgICAgICAgICAgICAg5LiW55WM5Z2Q5qCHXG4gKiAgICAgICAgICByYWRpYW7vvJogICAgICAgICAgIOiKgueCueW8p+W6pu+8iOWNleS9je+8ms+A77yJXG4gKiAgICAgICAgICBtYXRyaXg6ICAgICAgICAgICAg5Y+Y5o2i55+p6Zi1XG4gKiAgICAgICAgICDoh6rouqvlsZ7mgKfvvJogICAgICAgICAgeCx5LHBhcmVudCxjaGlsZHJlbuetiVxuICogICAgICAgICAg6ISa5pys5bGe5oCn77yaICAgICAgICAgIOiEmuacrOWunuS+i+WvueixoeeahOWxnuaAp1xuICog4oaT4oaT5Y+C5pWw5Y+v5Lul55SoM+enjeWIhumalOespumalOW8gOKGk+KGk1xuICogICAgICAgICAg6Iux5paH6YCX5Y+344CB6Iux5paH5YaS5Y+344CB56m65qC8XG4gKiDigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTkuL7kuKrmoJflrZDigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJRcbiAqIOiEmuacrO+8miAgICBIZXJvXG4gKiDlj4LmlbDvvJogICAgd3Asc2NhbGUsYW5nbGUsI2FuZ2xlLCNocFxuICog5pi+56S657uT5p6c77ya5LiW55WM5Z2Q5qCHLOiKgueCuXNjYWxlLOiKgueCuWFuZ2xl77yMSGVyb+WvueixoeeahGFuZ2xlLEhlcm/lr7nosaHnmoRocFxuICog4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU5rip6aao5o+Q56S64oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUXG4gKiDliJ3lp4vljJbnmoTml7blgJnvvIzorr7nva7lhajlsYDlj5jph493aW5kb3dbJ0RBVEFCT0FSRCddID0gZmFsc2Xlj6/lsY/olL3mnKzpobnnm67miYDmnIlEYXRhQm9hcmTvvIzkuI3kvJrkuqfnlJ/ku7vkvZXpop3lpJblvIDplIBcXG5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG53aW5kb3dbJ0RBVEFCT0FSRCddID0gdHJ1ZTtcbmNvbnN0IEFOQ0hPUl9TSVpFID0gMjA7ICAgICAgICAgICAgICAgLy/plJrngrnnmoTlpKflsI9cbmNvbnN0IExJTkVIRUlHSFQgPSAxLjI7ICAgICAgICAgICAgICAgLy/ooYzpq5jmmK/lrZfkvZPlpKflsI/nmoTlpJrlsJHlgI1cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHksIGV4ZWN1dGVJbkVkaXRNb2RlLCBtZW51IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbkBleGVjdXRlSW5FZGl0TW9kZVxuQG1lbnUoJ0NvbXAvRGF0YUJvYXJkJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFCb2FyZCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5XG4gICAgcHJpdmF0ZSBfaXNPdXRsaW5lQm94QWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IENDX0RFViAmJiAn6L2u5buT55uS5a2QJywgdG9vbHRpcDogQ0NfREVWICYmICfpmo/oioLngrnml4vovazvvIzku6Pooajlrp7ml7bova7lu5MnIH0pXG4gICAgcHJpdmF0ZSBnZXQgaXNPdXRsaW5lQm94QWN0aXZlKCkgeyByZXR1cm4gdGhpcy5faXNPdXRsaW5lQm94QWN0aXZlIH07XG4gICAgcHJpdmF0ZSBzZXQgaXNPdXRsaW5lQm94QWN0aXZlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2lzT3V0bGluZUJveEFjdGl2ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLm91dGxpbmVCb3hOb2RlLmFjdGl2ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBAcHJvcGVydHlcbiAgICBwcml2YXRlIF9vdXRsaW5lQm94Q29sb3I6IGNjLkNvbG9yID0gbmV3IGNjLkNvbG9yKE1hdGgucmFuZG9tKCkgKiAyNTUsIE1hdGgucmFuZG9tKCkgKiAyNTUsIE1hdGgucmFuZG9tKCkgKiAyNTUpO1xuICAgIEBwcm9wZXJ0eSh7IGRpc3BsYXlOYW1lOiBDQ19ERVYgJiYgJ8K3wrfCt8K3wrfCt+minOiJsicsIHZpc2libGUoKSB7IHJldHVybiB0aGlzLmlzT3V0bGluZUJveEFjdGl2ZSB9IH0pXG4gICAgcHJpdmF0ZSBnZXQgb3V0bGluZUJveENvbG9yKCkgeyByZXR1cm4gdGhpcy5fb3V0bGluZUJveENvbG9yIH07XG4gICAgcHJpdmF0ZSBzZXQgb3V0bGluZUJveENvbG9yKHZhbHVlOiBjYy5Db2xvcikge1xuICAgICAgICB0aGlzLl9vdXRsaW5lQm94Q29sb3IgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5vdXRsaW5lQm94Tm9kZS5jb2xvciA9IHZhbHVlO1xuICAgIH1cbiAgICBAcHJvcGVydHlcbiAgICBwcml2YXRlIF9vdXRsaW5lQm94T3BhY2l0eTogbnVtYmVyID0gMTAwO1xuICAgIEBwcm9wZXJ0eSh7IG1pbjogMCwgbWF4OiAyNTUsIHN0ZXA6IDEsIHNsaWRlOiB0cnVlLCBkaXNwbGF5TmFtZTogQ0NfREVWICYmICfCt8K3wrfCt8K3wrfpgI/mmI7luqYnLCB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy5pc091dGxpbmVCb3hBY3RpdmUgfSB9KVxuICAgIHByaXZhdGUgZ2V0IG91dGxpbmVCb3hPcGFjaXR5KCkgeyByZXR1cm4gdGhpcy5fb3V0bGluZUJveE9wYWNpdHkgfTtcbiAgICBwcml2YXRlIHNldCBvdXRsaW5lQm94T3BhY2l0eSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX291dGxpbmVCb3hPcGFjaXR5ID0gdmFsdWU7XG4gICAgICAgIHRoaXMub3V0bGluZUJveE5vZGUub3BhY2l0eSA9IHZhbHVlO1xuICAgIH1cbiAgICBAcHJvcGVydHlcbiAgICBwcml2YXRlIF9pc0NvbGxpZGVCb3hBY3RpdmU6IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBwcm9wZXJ0eSh7IGRpc3BsYXlOYW1lOiBDQ19ERVYgJiYgJ+eisOaSnuebkuWtkCcsIHRvb2x0aXA6IENDX0RFViAmJiAn5LiN6ZqP6IqC54K55peL6L2s77yM5Luj6KGo56Kw5pKe6IyD5Zu0JyB9KVxuICAgIHByaXZhdGUgZ2V0IGlzQ29sbGlkZUJveEFjdGl2ZSgpIHsgcmV0dXJuIHRoaXMuX2lzQ29sbGlkZUJveEFjdGl2ZSB9O1xuICAgIHByaXZhdGUgc2V0IGlzQ29sbGlkZUJveEFjdGl2ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9pc0NvbGxpZGVCb3hBY3RpdmUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5jb2xsaWRlQm94Tm9kZS5hY3RpdmUgPSB2YWx1ZTtcbiAgICB9XG4gICAgQHByb3BlcnR5XG4gICAgcHJpdmF0ZSBfY29sbGlkZUJveENvbG9yOiBjYy5Db2xvciA9IG5ldyBjYy5Db2xvcihNYXRoLnJhbmRvbSgpICogMjU1LCBNYXRoLnJhbmRvbSgpICogMjU1LCBNYXRoLnJhbmRvbSgpICogMjU1KTtcbiAgICBAcHJvcGVydHkoeyBkaXNwbGF5TmFtZTogQ0NfREVWICYmICfCt8K3wrfCt8K3wrfpopzoibInLCB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy5pc0NvbGxpZGVCb3hBY3RpdmUgfSB9KVxuICAgIHByaXZhdGUgZ2V0IGNvbGxpZGVCb3hDb2xvcigpIHsgcmV0dXJuIHRoaXMuX2NvbGxpZGVCb3hDb2xvciB9O1xuICAgIHByaXZhdGUgc2V0IGNvbGxpZGVCb3hDb2xvcih2YWx1ZTogY2MuQ29sb3IpIHtcbiAgICAgICAgdGhpcy5fY29sbGlkZUJveENvbG9yID0gdmFsdWU7XG4gICAgICAgIHRoaXMuY29sbGlkZUJveE5vZGUuY29sb3IgPSB2YWx1ZTtcbiAgICB9XG4gICAgQHByb3BlcnR5XG4gICAgcHJpdmF0ZSBfY29sbGlkZUJveE9wYWNpdHk6IG51bWJlciA9IDEwMDtcbiAgICBAcHJvcGVydHkoeyBtaW46IDAsIG1heDogMjU1LCBzdGVwOiAxLCBzbGlkZTogdHJ1ZSwgZGlzcGxheU5hbWU6IENDX0RFViAmJiAnwrfCt8K3wrfCt8K36YCP5piO5bqmJywgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMuaXNDb2xsaWRlQm94QWN0aXZlIH0gfSlcbiAgICBwcml2YXRlIGdldCBjb2xsaWRlQm94T3BhY2l0eSgpIHsgcmV0dXJuIHRoaXMuX2NvbGxpZGVCb3hPcGFjaXR5IH07XG4gICAgcHJpdmF0ZSBzZXQgY29sbGlkZUJveE9wYWNpdHkodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9jb2xsaWRlQm94T3BhY2l0eSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmNvbGxpZGVCb3hOb2RlLm9wYWNpdHkgPSB2YWx1ZTtcbiAgICB9XG4gICAgQHByb3BlcnR5XG4gICAgcHJpdmF0ZSBfaXNDdXN0b21MYWJlbEFjdGl2ZTogYm9vbGVhbiA9IHRydWU7XG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IENDX0RFViAmJiAn6Ieq5a6a5LmJ5Y+C5pWwJywgdG9vbHRpcDogQ0NfREVWICYmICfphY3nva7mmL7npLrnmoTlsZ7mgKflhoXlrrknIH0pXG4gICAgcHJpdmF0ZSBnZXQgaXNDdXN0b21MYWJlbEFjdGl2ZSgpIHsgcmV0dXJuIHRoaXMuX2lzQ3VzdG9tTGFiZWxBY3RpdmUgfTtcbiAgICBwcml2YXRlIHNldCBpc0N1c3RvbUxhYmVsQWN0aXZlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2lzQ3VzdG9tTGFiZWxBY3RpdmUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5jdXN0b21MYWJlbE5vZGUuYWN0aXZlID0gdmFsdWU7XG4gICAgfVxuICAgIEBwcm9wZXJ0eSh7IGRpc3BsYXlOYW1lOiBDQ19ERVYgJiYgJ8K3wrfCt8K3wrfCt+iEmuacrCcsIHRvb2x0aXA6IENDX0RFViAmJiAn55uR5o6n5ZOq5Liq6ISa5pysJywgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMuaXNDdXN0b21MYWJlbEFjdGl2ZTsgfSB9KVxuICAgIHByaXZhdGUgY3VzdG9tQ29tcG9uZW50TmFtZTogc3RyaW5nID0gJyc7XG4gICAgQHByb3BlcnR5XG4gICAgcHJpdmF0ZSBfY3VzdG9tTGFiZWxTdHJpbmc6IHN0cmluZyA9ICd4LHknO1xuICAgIEBwcm9wZXJ0eSh7IG11bHRpbGluZTogdHJ1ZSwgZGlzcGxheU5hbWU6IENDX0RFViAmJiAnwrfCt8K3wrfCt8K35Y+C5pWwJywgdG9vbHRpcDogQ0NfREVWICYmIFwi4oCU4oCU4oCU4oCU4oCU5pSv5oyB55qE5Y+C5pWw4oCU4oCU4oCU4oCUXFxud3DvvJrkuJbnlYzlnZDmoIdcXG5yYWRpYW7vvJroioLngrnlvKfluqbvvIjljZXkvY3vvJrPgO+8iVxcbm1hdHJpeO+8muWPmOaNouefqemYtVxcbuiHqui6q+WxnuaAp++8mngseSxwYXJlbnQsY2hpbGRyZW7nrYlcXG7ohJrmnKzlsZ7mgKfvvJrohJrmnKzlrp7kvovlr7nosaHnmoTlsZ7mgKdcXG7ihpPihpPlj4LmlbDlj6/ku6XnlKgz56eN5YiG6ZqU56ym6ZqU5byA4oaT4oaTXFxu6Iux5paH6YCX5Y+344CB6Iux5paH5YaS5Y+344CB56m65qC8XFxu4oCU4oCU4oCU4oCU5Li+5Liq5qCX5a2Q4oCU4oCU4oCU4oCUXFxu6ISa5pys77yaSGVyb1xcbuWPguaVsO+8mndwLHNjYWxlLGFuZ2xlLCNhbmdsZSwjaHBcXG7mmL7npLrnu5PmnpzvvJpcXG7kuJbnlYzlnZDmoIcs6IqC54K5c2NhbGUs6IqC54K5YW5nbGXvvIxIZXJv5a+56LGh55qEYW5nbGUsSGVyb+WvueixoeeahGhwXFxu4oCU4oCU4oCU4oCU5rip6aao5o+Q56S64oCU4oCU4oCU4oCUXFxu5Yid5aeL5YyW55qE5pe25YCZ77yM6K6+572u5YWo5bGA5Y+Y6YePXFxud2luZG93WydEQVRBQk9BUkQnXSA9IGZhbHNlXFxu5Y+v5bGP6JS95pys6aG555uu5omA5pyJRGF0YUJvYXJk77yM5LiN5Lya5Lqn55Sf5Lu75L2V6aKd5aSW5byA6ZSAXCIsIHZpc2libGUoKSB7IHJldHVybiB0aGlzLmlzQ3VzdG9tTGFiZWxBY3RpdmUgfSB9KVxuICAgIHByaXZhdGUgZ2V0IGN1c3RvbUxhYmVsU3RyaW5nKCkgeyByZXR1cm4gdGhpcy5fY3VzdG9tTGFiZWxTdHJpbmcgfTtcbiAgICBwcml2YXRlIHNldCBjdXN0b21MYWJlbFN0cmluZyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2N1c3RvbUxhYmVsU3RyaW5nID0gdmFsdWU7XG4gICAgICAgIHRoaXMuY3VzdG9tTGFiZWxTdHJpbmdTcGxpdCA9IHZhbHVlXG4gICAgICAgICAgICAucmVwbGFjZSgvLC9nLCAnX35fJykucmVwbGFjZSgvOi9nLCAnXyFfJykucmVwbGFjZSgvIC9nLCAnX0BfJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9fKlxcbl8qL2csICdfXFxuXycpLnNwbGl0KCdfJyk7XG4gICAgfVxuICAgIEBwcm9wZXJ0eVxuICAgIHByaXZhdGUgX2N1c3RvbUxhYmVsT2Zmc2V0OiBjYy5WZWMyID0gY2MudjIoMCwgMTAwKTtcbiAgICBAcHJvcGVydHkoeyBkaXNwbGF5TmFtZTogQ0NfREVWICYmICfCt8K3wrfCt8K3wrflgY/np7snLCB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy5pc0N1c3RvbUxhYmVsQWN0aXZlIH0gfSlcbiAgICBwcml2YXRlIGdldCBjdXN0b21MYWJlbE9mZnNldCgpIHsgcmV0dXJuIHRoaXMuX2N1c3RvbUxhYmVsT2Zmc2V0IH07XG4gICAgcHJpdmF0ZSBzZXQgY3VzdG9tTGFiZWxPZmZzZXQodmFsdWU6IGNjLlZlYzIpIHtcbiAgICAgICAgdGhpcy5fY3VzdG9tTGFiZWxPZmZzZXQgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5jdXN0b21MYWJlbE5vZGUueCA9IHZhbHVlLng7XG4gICAgICAgIHRoaXMuY3VzdG9tTGFiZWxOb2RlLnkgPSB2YWx1ZS55O1xuICAgIH1cbiAgICBAcHJvcGVydHlcbiAgICBwcml2YXRlIF9jdXN0b21MYWJlbENvbG9yOiBjYy5Db2xvciA9IG5ldyBjYy5Db2xvcigyNTUsIDI1NSwgMCk7XG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IENDX0RFViAmJiAnwrfCt8K3wrfCt8K36aKc6ImyJywgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMuaXNDdXN0b21MYWJlbEFjdGl2ZSB9IH0pXG4gICAgcHJpdmF0ZSBnZXQgY3VzdG9tTGFiZWxDb2xvcigpIHsgcmV0dXJuIHRoaXMuX2N1c3RvbUxhYmVsQ29sb3IgfTtcbiAgICBwcml2YXRlIHNldCBjdXN0b21MYWJlbENvbG9yKHZhbHVlOiBjYy5Db2xvcikge1xuICAgICAgICB0aGlzLl9jdXN0b21MYWJlbENvbG9yID0gdmFsdWU7XG4gICAgICAgIHRoaXMuY3VzdG9tTGFiZWxOb2RlLmNvbG9yID0gdmFsdWU7XG4gICAgfVxuICAgIEBwcm9wZXJ0eVxuICAgIHByaXZhdGUgX2N1c3RvbUxhYmVsU2l6ZTogbnVtYmVyID0gNjA7XG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IENDX0RFViAmJiAnwrfCt8K3wrfCt8K35aSn5bCPJywgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMuaXNDdXN0b21MYWJlbEFjdGl2ZSB9IH0pXG4gICAgcHJpdmF0ZSBnZXQgY3VzdG9tTGFiZWxTaXplKCkgeyByZXR1cm4gdGhpcy5fY3VzdG9tTGFiZWxTaXplIH07XG4gICAgcHJpdmF0ZSBzZXQgY3VzdG9tTGFiZWxTaXplKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fY3VzdG9tTGFiZWxTaXplID0gdmFsdWU7XG4gICAgICAgIHRoaXMuY3VzdG9tTGFiZWwuZm9udFNpemUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5jdXN0b21MYWJlbC5saW5lSGVpZ2h0ID0gdmFsdWUgKiBMSU5FSEVJR0hUO1xuICAgICAgICB0aGlzLmN1c3RvbUxhYmVsTm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWxPdXRsaW5lKS53aWR0aCA9IHZhbHVlICogMC4xO1xuICAgIH1cbiAgICBAcHJvcGVydHlcbiAgICBwcml2YXRlIF9jdXN0b21MYWJlbERpZ2l0OiBudW1iZXIgPSAwO1xuICAgIEBwcm9wZXJ0eSh7IG1pbjogMCwgbWF4OiAxMCwgc3RlcDogMSwgc2xpZGU6IHRydWUsIGRpc3BsYXlOYW1lOiBDQ19ERVYgJiYgJ8K3wrfCt8K3wrfCt+Wwj+aVsOS9jeaVsCcsIHZpc2libGUoKSB7IHJldHVybiB0aGlzLmlzQ3VzdG9tTGFiZWxBY3RpdmUgfSB9KVxuICAgIHByaXZhdGUgZ2V0IGN1c3RvbUxhYmVsRGlnaXQoKSB7IHJldHVybiB0aGlzLl9jdXN0b21MYWJlbERpZ2l0IH07XG4gICAgcHJpdmF0ZSBzZXQgY3VzdG9tTGFiZWxEaWdpdCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2N1c3RvbUxhYmVsRGlnaXQgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHJpdmF0ZSBib2FyZE5vZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIHByaXZhdGUgb3V0bGluZUJveE5vZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIHByaXZhdGUgY29sbGlkZUJveE5vZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIHByaXZhdGUgYW5jaG9yUG9pbnROb2RlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwcml2YXRlIGN1c3RvbUxhYmVsTm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBjdXN0b21MYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuICAgIHByaXZhdGUgY3VzdG9tTGFiZWxTdHJpbmdTcGxpdDogc3RyaW5nW10gPSBudWxsO1xuICAgIHByaXZhdGUgbW9uaXRvckNvbXA6IGNjLkNvbXBvbmVudCA9IG51bGw7XG5cbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCkge1xuICAgICAgICBpZiAoIUNDX0VESVRPUiAmJiAhd2luZG93WydEQVRBQk9BUkQnXSkge1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ib2FyZE5vZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ0RhdGFCb2FyZCcpO1xuICAgICAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLmJvYXJkTm9kZSkpIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmROb2RlLnJlbW92ZUZyb21QYXJlbnQoKTtcbiAgICAgICAgICAgIHRoaXMuYm9hcmROb2RlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdGV4dHVyZSA9IG5ldyBjYy5UZXh0dXJlMkQoKTtcbiAgICAgICAgdGV4dHVyZS5pbml0V2l0aERhdGEobmV3IFVpbnQ4QXJyYXkoWzI1NSwgMjU1LCAyNTVdKSwgY2MuVGV4dHVyZTJELlBpeGVsRm9ybWF0LlJHQjg4OCwgMSwgMSk7XG5cbiAgICAgICAgdGhpcy5ib2FyZE5vZGUgPSBuZXcgY2MuTm9kZSgnRGF0YUJvYXJkJyk7XG4gICAgICAgIHRoaXMuYm9hcmROb2RlLnNldFBhcmVudCh0aGlzLm5vZGUpO1xuICAgICAgICB0aGlzLmJvYXJkTm9kZS54ID0gdGhpcy5ib2FyZE5vZGUueSA9IDA7XG4gICAgICAgIHRoaXMuYm9hcmROb2RlLnpJbmRleCA9IGNjLm1hY3JvLk1BWF9aSU5ERVg7XG4gICAgICAgIHRoaXMuYm9hcmROb2RlWydfb2JqRmxhZ3MnXSB8PSBjYy5PYmplY3RbJ0ZsYWdzJ10uSGlkZUluSGllcmFyY2h5O1xuICAgICAgICB0aGlzLmJvYXJkTm9kZVsnX29iakZsYWdzJ10gfD0gY2MuT2JqZWN0WydGbGFncyddLkxvY2tlZEluRWRpdG9yO1xuXG4gICAgICAgIHRoaXMub3V0bGluZUJveE5vZGUgPSBuZXcgY2MuTm9kZSgnT3V0bGluZUJveCcpO1xuICAgICAgICB0aGlzLm91dGxpbmVCb3hOb2RlLnNldFBhcmVudCh0aGlzLmJvYXJkTm9kZSk7XG4gICAgICAgIHRoaXMub3V0bGluZUJveE5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XG4gICAgICAgIHRoaXMub3V0bGluZUJveE5vZGUuYWN0aXZlID0gdGhpcy5pc091dGxpbmVCb3hBY3RpdmU7XG4gICAgICAgIHRoaXMub3V0bGluZUJveE5vZGUuY29sb3IgPSB0aGlzLm91dGxpbmVCb3hDb2xvcjtcbiAgICAgICAgdGhpcy5vdXRsaW5lQm94Tm9kZS5vcGFjaXR5ID0gdGhpcy5vdXRsaW5lQm94T3BhY2l0eTtcblxuICAgICAgICB0aGlzLmNvbGxpZGVCb3hOb2RlID0gbmV3IGNjLk5vZGUoJ0NvbGxpZGVCb3gnKTtcbiAgICAgICAgdGhpcy5jb2xsaWRlQm94Tm9kZS5zZXRQYXJlbnQodGhpcy5ib2FyZE5vZGUpO1xuICAgICAgICB0aGlzLmNvbGxpZGVCb3hOb2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xuICAgICAgICB0aGlzLmNvbGxpZGVCb3hOb2RlLmFjdGl2ZSA9IHRoaXMuaXNDb2xsaWRlQm94QWN0aXZlO1xuICAgICAgICB0aGlzLmNvbGxpZGVCb3hOb2RlLmNvbG9yID0gdGhpcy5jb2xsaWRlQm94Q29sb3I7XG4gICAgICAgIHRoaXMuY29sbGlkZUJveE5vZGUub3BhY2l0eSA9IHRoaXMuY29sbGlkZUJveE9wYWNpdHk7XG5cbiAgICAgICAgdGhpcy5hbmNob3JQb2ludE5vZGUgPSBuZXcgY2MuTm9kZSgnQW5jaG9yUG9pbnQnKTtcbiAgICAgICAgdGhpcy5hbmNob3JQb2ludE5vZGUuc2V0UGFyZW50KHRoaXMuYm9hcmROb2RlKTtcbiAgICAgICAgdGhpcy5hbmNob3JQb2ludE5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XG4gICAgICAgIHRoaXMuYW5jaG9yUG9pbnROb2RlLmNvbG9yID0gY2MuY29sb3IoMjU1LCAwLCAwKTtcbiAgICAgICAgdGhpcy5hbmNob3JQb2ludE5vZGUud2lkdGggPSBBTkNIT1JfU0laRTtcbiAgICAgICAgdGhpcy5hbmNob3JQb2ludE5vZGUuaGVpZ2h0ID0gQU5DSE9SX1NJWkU7XG5cbiAgICAgICAgdGhpcy5jdXN0b21MYWJlbE5vZGUgPSBuZXcgY2MuTm9kZSgnQ3VzdG9tTGFiZWwnKTtcbiAgICAgICAgdGhpcy5jdXN0b21MYWJlbE5vZGUuc2V0UGFyZW50KHRoaXMuYm9hcmROb2RlKTtcbiAgICAgICAgdGhpcy5jdXN0b21MYWJlbCA9IHRoaXMuY3VzdG9tTGFiZWxOb2RlLmFkZENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIHRoaXMuY3VzdG9tTGFiZWxOb2RlLmFkZENvbXBvbmVudChjYy5MYWJlbE91dGxpbmUpLmNvbG9yID0gY2MuY29sb3IoMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuY3VzdG9tTGFiZWxOb2RlLmFjdGl2ZSA9IHRoaXMuaXNDdXN0b21MYWJlbEFjdGl2ZTtcbiAgICAgICAgdGhpcy5jdXN0b21MYWJlbFN0cmluZyA9IHRoaXMuX2N1c3RvbUxhYmVsU3RyaW5nO1xuICAgICAgICB0aGlzLmN1c3RvbUxhYmVsTm9kZS54ID0gdGhpcy5jdXN0b21MYWJlbE9mZnNldC54O1xuICAgICAgICB0aGlzLmN1c3RvbUxhYmVsTm9kZS55ID0gdGhpcy5jdXN0b21MYWJlbE9mZnNldC55O1xuICAgICAgICB0aGlzLmN1c3RvbUxhYmVsTm9kZS5jb2xvciA9IHRoaXMuY3VzdG9tTGFiZWxDb2xvcjtcbiAgICAgICAgdGhpcy5jdXN0b21MYWJlbFNpemUgPSB0aGlzLl9jdXN0b21MYWJlbFNpemU7XG5cbiAgICAgICAgdGhpcy51cGRhdGVBbmdsZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVNjYWxlKCk7XG4gICAgICAgIHRoaXMudXBkYXRlQW5jaG9yKCk7XG4gICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuUk9UQVRJT05fQ0hBTkdFRCwgdGhpcy51cGRhdGVBbmdsZSwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5TQ0FMRV9DSEFOR0VELCB0aGlzLnVwZGF0ZVNjYWxlLCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLkFOQ0hPUl9DSEFOR0VELCB0aGlzLnVwZGF0ZUFuY2hvciwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5TSVpFX0NIQU5HRUQsIHRoaXMudXBkYXRlU2l6ZSwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVBbmdsZSgpIHtcbiAgICAgICAgdGhpcy5jb2xsaWRlQm94Tm9kZS5hbmdsZSA9IC10aGlzLm5vZGUuYW5nbGU7XG4gICAgICAgIHRoaXMuY3VzdG9tTGFiZWxOb2RlLmFuZ2xlID0gLXRoaXMubm9kZS5hbmdsZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVNjYWxlKCkge1xuICAgICAgICB0aGlzLmJvYXJkTm9kZS5zY2FsZVggPSAxIC8gdGhpcy5ub2RlLnNjYWxlWDtcbiAgICAgICAgdGhpcy5ib2FyZE5vZGUuc2NhbGVZID0gMSAvIHRoaXMubm9kZS5zY2FsZVk7XG4gICAgICAgIHRoaXMub3V0bGluZUJveE5vZGUuc2NhbGVYID0gdGhpcy5ub2RlLnNjYWxlWDtcbiAgICAgICAgdGhpcy5vdXRsaW5lQm94Tm9kZS5zY2FsZVkgPSB0aGlzLm5vZGUuc2NhbGVZO1xuICAgICAgICB0aGlzLmNvbGxpZGVCb3hOb2RlLnNjYWxlWCA9IHRoaXMubm9kZS5zY2FsZVg7XG4gICAgICAgIHRoaXMuY29sbGlkZUJveE5vZGUuc2NhbGVZID0gdGhpcy5ub2RlLnNjYWxlWTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUFuY2hvcigpIHtcbiAgICAgICAgdGhpcy5vdXRsaW5lQm94Tm9kZS5hbmNob3JYID0gdGhpcy5ub2RlLmFuY2hvclg7XG4gICAgICAgIHRoaXMub3V0bGluZUJveE5vZGUuYW5jaG9yWSA9IHRoaXMubm9kZS5hbmNob3JZO1xuICAgICAgICB0aGlzLmNvbGxpZGVCb3hOb2RlLmFuY2hvclggPSB0aGlzLm5vZGUuYW5jaG9yWDtcbiAgICAgICAgdGhpcy5jb2xsaWRlQm94Tm9kZS5hbmNob3JZID0gdGhpcy5ub2RlLmFuY2hvclk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVTaXplKCkge1xuICAgICAgICB0aGlzLm91dGxpbmVCb3hOb2RlLndpZHRoID0gdGhpcy5ub2RlLndpZHRoO1xuICAgICAgICB0aGlzLm91dGxpbmVCb3hOb2RlLmhlaWdodCA9IHRoaXMubm9kZS5oZWlnaHQ7XG4gICAgICAgIHRoaXMuY29sbGlkZUJveE5vZGUud2lkdGggPSB0aGlzLm5vZGUud2lkdGg7XG4gICAgICAgIHRoaXMuY29sbGlkZUJveE5vZGUuaGVpZ2h0ID0gdGhpcy5ub2RlLmhlaWdodDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNDdXN0b21MYWJlbEFjdGl2ZSkgcmV0dXJuO1xuICAgICAgICBpZiAoIXRoaXMuY3VzdG9tTGFiZWxTdHJpbmdTcGxpdCkgcmV0dXJuO1xuICAgICAgICBsZXQgc3RyID0gJyc7XG4gICAgICAgIGxldCBzdHJzID0gdGhpcy5jdXN0b21MYWJlbFN0cmluZ1NwbGl0O1xuICAgICAgICBpZiAoIXRoaXMubW9uaXRvckNvbXAgJiYgdGhpcy5jdXN0b21Db21wb25lbnROYW1lKSB7XG4gICAgICAgICAgICB0aGlzLm1vbml0b3JDb21wID0gdGhpcy5ub2RlLmdldENvbXBvbmVudCh0aGlzLmN1c3RvbUNvbXBvbmVudE5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBzdHJzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICBsZXQgdG1wID0gbnVsbDtcbiAgICAgICAgICAgIHN3aXRjaCAoc3Ryc1tpXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3dwJzpcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1hdHJpeCA9IHRoaXMubm9kZVsnX3dvcmxkTWF0cml4J10ubTtcbiAgICAgICAgICAgICAgICAgICAgdG1wID0gYCR7bWF0cml4WzEyXS50b0ZpeGVkKHRoaXMuY3VzdG9tTGFiZWxEaWdpdCl9LFxcdCR7bWF0cml4WzEzXS50b0ZpeGVkKHRoaXMuY3VzdG9tTGFiZWxEaWdpdCl9YDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnYW5nbGUnOlxuICAgICAgICAgICAgICAgICAgICB0bXAgPSB0aGlzLm5vZGUuYW5nbGUudG9GaXhlZCh0aGlzLmN1c3RvbUxhYmVsRGlnaXQpICsgJ8KwJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAncmFkaWFuJzpcbiAgICAgICAgICAgICAgICAgICAgdG1wID0gKHRoaXMubm9kZS5hbmdsZSAvIDE4MCkudG9GaXhlZCh0aGlzLmN1c3RvbUxhYmVsRGlnaXQpICsgJ8+AJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbWF0cml4JzpcbiAgICAgICAgICAgICAgICAgICAgbWF0cml4ID0gdGhpcy5ub2RlWydfd29ybGRNYXRyaXgnXS5tO1xuICAgICAgICAgICAgICAgICAgICB0bXAgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgKytqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG0gPSBtYXRyaXhbaiAqIDQgKyBpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bXAgKz0gKG0gPCAwID8gJ1xcdFxcdCcgOiAnXFx0XFx0XFx0JykgKyBtLnRvRml4ZWQodGhpcy5jdXN0b21MYWJlbERpZ2l0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGkgIT09IDMgJiYgKHRtcCArPSAnXFxuJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnY2hpbGRyZW4nOlxuICAgICAgICAgICAgICAgICAgICB0bXAgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRoaXMubm9kZS5jaGlsZHJlbkNvdW50OyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcCArPSBgXFx0XFx0XFx0JHtpfe+8miR7dGhpcy5ub2RlLmNoaWxkcmVuW2ldLm5hbWV9YDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgIT09IGxlbiAtIDEgJiYgKHRtcCArPSAnXFxuJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnfic6IHRtcCA9ICcsXFx0JzsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnISc6IHRtcCA9ICc6XFx0JzsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnQCc6IHRtcCA9ICdcXHRcXHQnOyBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ub2RlW3N0cnNbaV1dICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcCA9IHRoaXMubm9kZVtzdHJzW2ldXTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdHJzW2ldLnN0YXJ0c1dpdGgoJyMnKSAmJiB0aGlzLm1vbml0b3JDb21wICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0bXAgPSB0aGlzLnBhcnNlU3RyaW5nKHN0cnNbaV0uc3Vic3RyaW5nKDEpKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcCA9IHN0cnNbaV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0bXAgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0bXAgPSB0bXAudG9GaXhlZCh0aGlzLmN1c3RvbUxhYmVsRGlnaXQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRtcC5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0bXAgPSB0bXAubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0ciArPSB0bXA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXN0b21MYWJlbC5zdHJpbmcgPSBzdHI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwYXJzZVN0cmluZyhzdHI6IHN0cmluZykge1xuICAgICAgICBsZXQgc3RycyA9IHN0ci5zcGxpdCgnLicpO1xuICAgICAgICBsZXQgcmV0ID0gdGhpcy5tb25pdG9yQ29tcFtzdHJzWzBdXSB8fCBgIyR7c3Ryc1swXX1gO1xuICAgICAgICBmb3IgKGxldCBpID0gMSwgbGVuID0gc3Rycy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgICAgaWYgKHJldFtzdHJzW2ldXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke3JldC5uYW1lID8gcmV0Lm5hbWUgOiByZXR9LiR7c3Ryc1tpXX1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0ID0gcmV0W3N0cnNbaV1dO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQodGhpcy5ib2FyZE5vZGUpKSB7XG4gICAgICAgICAgICB0aGlzLmJvYXJkTm9kZS5yZW1vdmVGcm9tUGFyZW50KCk7XG4gICAgICAgICAgICB0aGlzLmJvYXJkTm9kZS5kZXN0cm95KCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubm9kZS50YXJnZXRPZmYodGhpcyk7XG4gICAgfVxufSJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxIZXJvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBdUJDO1FBdEJHLFFBQUUsR0FBRyxHQUFHLENBQUM7UUFDVCxRQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ1IsV0FBSyxHQUFHO1lBQ0osSUFBSSxFQUFDLElBQUk7WUFDVCxLQUFLLEVBQUM7Z0JBQ0YsSUFBSSxFQUFDLElBQUk7Z0JBQ1QsTUFBTSxFQUFDLEVBQUU7YUFDWjtZQUNELElBQUksRUFBQztnQkFDRCxJQUFJLEVBQUMsSUFBSTtnQkFDVCxJQUFJLEVBQUM7b0JBQ0QsSUFBSSxFQUFDLElBQUk7b0JBQ1QsS0FBSyxFQUFDLENBQUM7b0JBQ1AsT0FBTyxFQUFDLEdBQUc7aUJBQ2Q7YUFDSjtTQUNKLENBQUE7O0lBTUwsQ0FBQztJQUpHLDJCQUFNLEdBQU4sVUFBUSxFQUFFO1FBQ04sSUFBSSxDQUFDLEVBQUUsSUFBSSxHQUFHLEdBQUMsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxFQUFFLElBQUksR0FBRyxHQUFDLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBdEJnQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBdUI5QjtJQUFELGlCQUFDO0NBdkJELEFBdUJDLENBdkJ1QyxFQUFFLENBQUMsU0FBUyxHQXVCbkQ7a0JBdkJvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWxsb3dvcmxkIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBocCA9IDEwMDtcbiAgICBtcCA9IDYwO1xuICAgIGVxdWlwID0ge1xuICAgICAgICBuYW1lOifoo4XlpIcnLFxuICAgICAgICBzd29yZDp7XG4gICAgICAgICAgICBuYW1lOiflsI/liIAnLFxuICAgICAgICAgICAgYXR0YWNrOjMwXG4gICAgICAgIH0sXG4gICAgICAgIHNob2U6e1xuICAgICAgICAgICAgbmFtZTon6I2J6Z6LJyxcbiAgICAgICAgICAgIGF0dHI6e1xuICAgICAgICAgICAgICAgIG5hbWU6J+WxnuaApycsXG4gICAgICAgICAgICAgICAgc3BlZWQ6NSxcbiAgICAgICAgICAgICAgICBkdXJhYmxlOjEwMFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlIChkdCkge1xuICAgICAgICB0aGlzLmhwICs9IDEuMCpkdDtcbiAgICAgICAgdGhpcy5tcCArPSAwLjUqZHQ7XG4gICAgfVxufSJdfQ==
//------QC-SOURCE-SPLIT------
