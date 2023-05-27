"use strict";
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
                .replace(/,|，/g, '_~_').replace(/:|：/g, '_!_').replace(/ /g, '_@_')
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
    DataBoard.prototype.start = function () {
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
        if (this.customLabelOffset.x !== 0 || this.customLabelOffset.y !== 0) {
            var radian = -this.node.angle * Math.PI / 180;
            var cos = Math.cos(radian);
            var sin = Math.sin(radian);
            this.customLabelNode.x = this.customLabelOffset.x * cos - this.customLabelOffset.y * sin;
            this.customLabelNode.y = this.customLabelOffset.x * sin + this.customLabelOffset.y * cos;
        }
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
        var ret = this.monitorComp[strs[0]];
        ret === undefined && (ret = "#" + strs[0]);
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