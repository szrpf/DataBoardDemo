
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
                .replace(/,|，/g, '_~_').replace(/:|：/g, '_!_').replace(/ |\t/g, '_@_')
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
        // this.boardNode['_objFlags'] |= cc.Object['Flags'].HideInHierarchy;
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
        var radian = -this.node.angle * Math.PI / 180;
        var cos = Math.cos(radian);
        var sin = Math.sin(radian);
        this.customLabelNode.x = this.customLabelOffset.x * cos - this.customLabelOffset.y * sin;
        this.customLabelNode.y = this.customLabelOffset.x * sin + this.customLabelOffset.y * cos;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYXRhQm9hcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnRkF3QmdGO0FBQ2hGLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDM0IsSUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDLENBQWUsT0FBTztBQUM3QyxJQUFNLFVBQVUsR0FBRyxHQUFHLENBQUMsQ0FBZSxhQUFhO0FBQzdDLElBQUEsS0FBaUQsRUFBRSxDQUFDLFVBQVUsRUFBNUQsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsaUJBQWlCLHVCQUFBLEVBQUUsSUFBSSxVQUFrQixDQUFDO0FBSXJFO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBaVNDO1FBL1JXLHlCQUFtQixHQUFZLEtBQUssQ0FBQztRQVFyQyxzQkFBZ0IsR0FBYSxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztRQVF6Ryx3QkFBa0IsR0FBVyxHQUFHLENBQUM7UUFRakMseUJBQW1CLEdBQVksSUFBSSxDQUFDO1FBUXBDLHNCQUFnQixHQUFhLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBUXpHLHdCQUFrQixHQUFXLEdBQUcsQ0FBQztRQVFqQywwQkFBb0IsR0FBWSxJQUFJLENBQUM7UUFRckMseUJBQW1CLEdBQVcsRUFBRSxDQUFDO1FBRWpDLHdCQUFrQixH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QU8sZ0JBQUssT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztvREFDakM7SUFROUQ7UUFEQyxRQUFRO3dEQUM2QjtJQUV0QztRQURDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sSUFBSSxZQUFZLEVBQUUsT0FBTyxnQkFBSyxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDO3FEQUN4RTtJQW5HL0MsU0FBUztRQUg3QixPQUFPO1FBQ1AsaUJBQWlCO1FBQ2pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztPQUNGLFNBQVMsQ0FpUzdCO0lBQUQsZ0JBQUM7Q0FqU0QsQUFpU0MsQ0FqU3NDLEVBQUUsQ0FBQyxTQUFTLEdBaVNsRDtrQkFqU29CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiDliJvlu7o6ICAgIDIwMjLlubQxMeaciDIz5pelXHJcbiAqIOS9nOiAhTogICAg5rC054Wu6IKJ54mH6aWtKDI3MTg1NzA5QHFxLmNvbSlcclxuICog5o+P6L+wOiAgICDmlbDmja7nnIvmnb9cclxuICog6IqC54K55oyC5LiK6K+l57uE5Lu277yM5bCx5Y+v5Lul5Zyo5ri45oiP6L+Q6KGM6L+H56iL5Lit77yM55u06KeC55yL5Yiw6IqC54K55Lu75oSP5bGe5oCn77yI5YyF5ous6IqC54K56ISa5pys5Lit55qE5bGe5oCn77yJXHJcbiAqIOWPr+S7peWbvuW9ouWMluWxleekuuS7peS4i+Wbm+enjeaVsOaNru+8mlxyXG4gKiAgICAgICAgICDova7lu5Pnm5LlrZDvvJogICAgICAgICAg6ZqP6IqC54K55peL6L2s77yM5Luj6KGo6IqC54K555qE5a6e5pe255+p5b2iXHJcbiAqICAgICAgICAgIOeisOaSnuebkuWtkO+8miAgICAgICAgICDkuI3pmo/oioLngrnml4vovazvvIzkuIDoiKzku6PooajnorDmkp7ojIPlm7RcclxuICogICAgICAgICAg6Ieq5a6a5LmJ5Y+C5pWw77yaICAgICAgICDoioLngrnoh6rouqvlsZ7mgKfvvIzku6Xlj4roioLngrnku7vmhI/ohJrmnKzkuK3nmoTlsZ7mgKdcclxuICogICAgICAgICAg6ZSa54K577yaICAgICAgICAgICAgIOmUmueCueS9jee9ruS8muaYvuekuuS4gOS4quWwj+e6oueCuVxyXG4gKiDoh6rlrprkuYnlj4LmlbDvvIjphY3nva7mg7Pnm5HmjqfnmoTmlbDmja7vvInvvJpcclxuICogICAgICAgICAgd3DvvJogICAgICAgICAgICAgICDkuJbnlYzlnZDmoIdcclxuICogICAgICAgICAgcmFkaWFu77yaICAgICAgICAgICDoioLngrnlvKfluqbvvIjljZXkvY3vvJrPgO+8iVxyXG4gKiAgICAgICAgICBtYXRyaXg6ICAgICAgICAgICAg5Y+Y5o2i55+p6Zi1XHJcbiAqICAgICAgICAgIOiHqui6q+WxnuaAp++8miAgICAgICAgICB4LHkscGFyZW50LGNoaWxkcmVu562JXHJcbiAqICAgICAgICAgIOiEmuacrOWxnuaAp++8miAgICAgICAgICDohJrmnKzlrp7kvovlr7nosaHnmoTlsZ7mgKdcclxuICog4oaT4oaT5Y+C5pWw5Y+v5Lul55SoM+enjeWIhumalOespumalOW8gOKGk+KGk1xyXG4gKiAgICAgICAgICDoi7HmlofpgJflj7fjgIHoi7HmloflhpLlj7fjgIHnqbrmoLxcclxuICog4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU5Li+5Liq5qCX5a2Q4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUXHJcbiAqIOiEmuacrO+8miAgICBIZXJvXHJcbiAqIOWPguaVsO+8miAgICB3cCxzY2FsZSxhbmdsZSwjYW5nbGUsI2hwXHJcbiAqIOaYvuekuue7k+aenO+8muS4lueVjOWdkOaghyzoioLngrlzY2FsZSzoioLngrlhbmdsZe+8jEhlcm/lr7nosaHnmoRhbmdsZSxIZXJv5a+56LGh55qEaHBcclxuICog4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU5rip6aao5o+Q56S64oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUXHJcbiAqIOWIneWni+WMlueahOaXtuWAme+8jOiuvue9ruWFqOWxgOWPmOmHj3dpbmRvd1snREFUQUJPQVJEJ10gPSBmYWxzZeWPr+Wxj+iUveacrOmhueebruaJgOaciURhdGFCb2FyZO+8jOS4jeS8muS6p+eUn+S7u+S9lemineWkluW8gOmUgFxcblxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG53aW5kb3dbJ0RBVEFCT0FSRCddID0gdHJ1ZTtcclxuY29uc3QgQU5DSE9SX1NJWkUgPSAyMDsgICAgICAgICAgICAgICAvL+mUmueCueeahOWkp+Wwj1xyXG5jb25zdCBMSU5FSEVJR0hUID0gMS4yOyAgICAgICAgICAgICAgIC8v6KGM6auY5piv5a2X5L2T5aSn5bCP55qE5aSa5bCR5YCNXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHksIGV4ZWN1dGVJbkVkaXRNb2RlLCBtZW51IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzc1xyXG5AZXhlY3V0ZUluRWRpdE1vZGVcclxuQG1lbnUoJ0NvbXAvRGF0YUJvYXJkJylcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YUJvYXJkIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBfaXNPdXRsaW5lQm94QWN0aXZlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAcHJvcGVydHkoeyBkaXNwbGF5TmFtZTogQ0NfREVWICYmICfova7lu5Pnm5LlrZAnLCB0b29sdGlwOiBDQ19ERVYgJiYgJ+maj+iKgueCueaXi+i9rO+8jOS7o+ihqOWunuaXtui9ruW7kycgfSlcclxuICAgIHByaXZhdGUgZ2V0IGlzT3V0bGluZUJveEFjdGl2ZSgpIHsgcmV0dXJuIHRoaXMuX2lzT3V0bGluZUJveEFjdGl2ZSB9O1xyXG4gICAgcHJpdmF0ZSBzZXQgaXNPdXRsaW5lQm94QWN0aXZlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5faXNPdXRsaW5lQm94QWN0aXZlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5vdXRsaW5lQm94Tm9kZS5hY3RpdmUgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBfb3V0bGluZUJveENvbG9yOiBjYy5Db2xvciA9IG5ldyBjYy5Db2xvcihNYXRoLnJhbmRvbSgpICogMjU1LCBNYXRoLnJhbmRvbSgpICogMjU1LCBNYXRoLnJhbmRvbSgpICogMjU1KTtcclxuICAgIEBwcm9wZXJ0eSh7IGRpc3BsYXlOYW1lOiBDQ19ERVYgJiYgJ8K3wrfCt8K3wrfCt+minOiJsicsIHZpc2libGUoKSB7IHJldHVybiB0aGlzLmlzT3V0bGluZUJveEFjdGl2ZSB9IH0pXHJcbiAgICBwcml2YXRlIGdldCBvdXRsaW5lQm94Q29sb3IoKSB7IHJldHVybiB0aGlzLl9vdXRsaW5lQm94Q29sb3IgfTtcclxuICAgIHByaXZhdGUgc2V0IG91dGxpbmVCb3hDb2xvcih2YWx1ZTogY2MuQ29sb3IpIHtcclxuICAgICAgICB0aGlzLl9vdXRsaW5lQm94Q29sb3IgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLm91dGxpbmVCb3hOb2RlLmNvbG9yID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBAcHJvcGVydHlcclxuICAgIHByaXZhdGUgX291dGxpbmVCb3hPcGFjaXR5OiBudW1iZXIgPSAxMDA7XHJcbiAgICBAcHJvcGVydHkoeyBtaW46IDAsIG1heDogMjU1LCBzdGVwOiAxLCBzbGlkZTogdHJ1ZSwgZGlzcGxheU5hbWU6IENDX0RFViAmJiAnwrfCt8K3wrfCt8K36YCP5piO5bqmJywgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMuaXNPdXRsaW5lQm94QWN0aXZlIH0gfSlcclxuICAgIHByaXZhdGUgZ2V0IG91dGxpbmVCb3hPcGFjaXR5KCkgeyByZXR1cm4gdGhpcy5fb3V0bGluZUJveE9wYWNpdHkgfTtcclxuICAgIHByaXZhdGUgc2V0IG91dGxpbmVCb3hPcGFjaXR5KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9vdXRsaW5lQm94T3BhY2l0eSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMub3V0bGluZUJveE5vZGUub3BhY2l0eSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBwcml2YXRlIF9pc0NvbGxpZGVCb3hBY3RpdmU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IENDX0RFViAmJiAn56Kw5pKe55uS5a2QJywgdG9vbHRpcDogQ0NfREVWICYmICfkuI3pmo/oioLngrnml4vovazvvIzku6PooajnorDmkp7ojIPlm7QnIH0pXHJcbiAgICBwcml2YXRlIGdldCBpc0NvbGxpZGVCb3hBY3RpdmUoKSB7IHJldHVybiB0aGlzLl9pc0NvbGxpZGVCb3hBY3RpdmUgfTtcclxuICAgIHByaXZhdGUgc2V0IGlzQ29sbGlkZUJveEFjdGl2ZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX2lzQ29sbGlkZUJveEFjdGl2ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuY29sbGlkZUJveE5vZGUuYWN0aXZlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBAcHJvcGVydHlcclxuICAgIHByaXZhdGUgX2NvbGxpZGVCb3hDb2xvcjogY2MuQ29sb3IgPSBuZXcgY2MuQ29sb3IoTWF0aC5yYW5kb20oKSAqIDI1NSwgTWF0aC5yYW5kb20oKSAqIDI1NSwgTWF0aC5yYW5kb20oKSAqIDI1NSk7XHJcbiAgICBAcHJvcGVydHkoeyBkaXNwbGF5TmFtZTogQ0NfREVWICYmICfCt8K3wrfCt8K3wrfpopzoibInLCB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy5pc0NvbGxpZGVCb3hBY3RpdmUgfSB9KVxyXG4gICAgcHJpdmF0ZSBnZXQgY29sbGlkZUJveENvbG9yKCkgeyByZXR1cm4gdGhpcy5fY29sbGlkZUJveENvbG9yIH07XHJcbiAgICBwcml2YXRlIHNldCBjb2xsaWRlQm94Q29sb3IodmFsdWU6IGNjLkNvbG9yKSB7XHJcbiAgICAgICAgdGhpcy5fY29sbGlkZUJveENvbG9yID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5jb2xsaWRlQm94Tm9kZS5jb2xvciA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBwcml2YXRlIF9jb2xsaWRlQm94T3BhY2l0eTogbnVtYmVyID0gMTAwO1xyXG4gICAgQHByb3BlcnR5KHsgbWluOiAwLCBtYXg6IDI1NSwgc3RlcDogMSwgc2xpZGU6IHRydWUsIGRpc3BsYXlOYW1lOiBDQ19ERVYgJiYgJ8K3wrfCt8K3wrfCt+mAj+aYjuW6picsIHZpc2libGUoKSB7IHJldHVybiB0aGlzLmlzQ29sbGlkZUJveEFjdGl2ZSB9IH0pXHJcbiAgICBwcml2YXRlIGdldCBjb2xsaWRlQm94T3BhY2l0eSgpIHsgcmV0dXJuIHRoaXMuX2NvbGxpZGVCb3hPcGFjaXR5IH07XHJcbiAgICBwcml2YXRlIHNldCBjb2xsaWRlQm94T3BhY2l0eSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fY29sbGlkZUJveE9wYWNpdHkgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmNvbGxpZGVCb3hOb2RlLm9wYWNpdHkgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBfaXNDdXN0b21MYWJlbEFjdGl2ZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBAcHJvcGVydHkoeyBkaXNwbGF5TmFtZTogQ0NfREVWICYmICfoh6rlrprkuYnlj4LmlbAnLCB0b29sdGlwOiBDQ19ERVYgJiYgJ+mFjee9ruaYvuekuueahOWxnuaAp+WGheWuuScgfSlcclxuICAgIHByaXZhdGUgZ2V0IGlzQ3VzdG9tTGFiZWxBY3RpdmUoKSB7IHJldHVybiB0aGlzLl9pc0N1c3RvbUxhYmVsQWN0aXZlIH07XHJcbiAgICBwcml2YXRlIHNldCBpc0N1c3RvbUxhYmVsQWN0aXZlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5faXNDdXN0b21MYWJlbEFjdGl2ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuY3VzdG9tTGFiZWxOb2RlLmFjdGl2ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IENDX0RFViAmJiAnwrfCt8K3wrfCt8K36ISa5pysJywgdG9vbHRpcDogQ0NfREVWICYmICfnm5Hmjqflk6rkuKrohJrmnKwnLCB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy5pc0N1c3RvbUxhYmVsQWN0aXZlOyB9IH0pXHJcbiAgICBwcml2YXRlIGN1c3RvbUNvbXBvbmVudE5hbWU6IHN0cmluZyA9ICcnO1xyXG4gICAgQHByb3BlcnR5XHJcbiAgICBwcml2YXRlIF9jdXN0b21MYWJlbFN0cmluZzogc3RyaW5nID0gJ3gseSc7XHJcbiAgICBAcHJvcGVydHkoeyBtdWx0aWxpbmU6IHRydWUsIGRpc3BsYXlOYW1lOiBDQ19ERVYgJiYgJ8K3wrfCt8K3wrfCt+WPguaVsCcsIHRvb2x0aXA6IENDX0RFViAmJiBcIuKAlOKAlOKAlOKAlOKAlOaUr+aMgeeahOWPguaVsOKAlOKAlOKAlOKAlFxcbndw77ya5LiW55WM5Z2Q5qCHXFxucmFkaWFu77ya6IqC54K55byn5bqm77yI5Y2V5L2N77yaz4DvvIlcXG5tYXRyaXjvvJrlj5jmjaLnn6npmLVcXG7oh6rouqvlsZ7mgKfvvJp4LHkscGFyZW50LGNoaWxkcmVu562JXFxu6ISa5pys5bGe5oCn77ya6ISa5pys5a6e5L6L5a+56LGh55qE5bGe5oCnXFxu4oaT4oaT5Y+C5pWw5Y+v5Lul55SoM+enjeWIhumalOespumalOW8gOKGk+KGk1xcbuiLseaWh+mAl+WPt+OAgeiLseaWh+WGkuWPt+OAgeepuuagvFxcbuKAlOKAlOKAlOKAlOS4vuS4quagl+WtkOKAlOKAlOKAlOKAlFxcbuiEmuacrO+8mkhlcm9cXG7lj4LmlbDvvJp3cCxzY2FsZSxhbmdsZSwjYW5nbGUsI2hwXFxu5pi+56S657uT5p6c77yaXFxu5LiW55WM5Z2Q5qCHLOiKgueCuXNjYWxlLOiKgueCuWFuZ2xl77yMSGVyb+WvueixoeeahGFuZ2xlLEhlcm/lr7nosaHnmoRocFxcbuKAlOKAlOKAlOKAlOa4qemmqOaPkOekuuKAlOKAlOKAlOKAlFxcbuWIneWni+WMlueahOaXtuWAme+8jOiuvue9ruWFqOWxgOWPmOmHj1xcbndpbmRvd1snREFUQUJPQVJEJ10gPSBmYWxzZVxcbuWPr+Wxj+iUveacrOmhueebruaJgOaciURhdGFCb2FyZO+8jOS4jeS8muS6p+eUn+S7u+S9lemineWkluW8gOmUgFwiLCB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy5pc0N1c3RvbUxhYmVsQWN0aXZlIH0gfSlcclxuICAgIHByaXZhdGUgZ2V0IGN1c3RvbUxhYmVsU3RyaW5nKCkgeyByZXR1cm4gdGhpcy5fY3VzdG9tTGFiZWxTdHJpbmcgfTtcclxuICAgIHByaXZhdGUgc2V0IGN1c3RvbUxhYmVsU3RyaW5nKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9jdXN0b21MYWJlbFN0cmluZyA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuY3VzdG9tTGFiZWxTdHJpbmdTcGxpdCA9IHZhbHVlXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC8sfO+8jC9nLCAnX35fJykucmVwbGFjZSgvOnzvvJovZywgJ18hXycpLnJlcGxhY2UoLyB8XFx0L2csICdfQF8nKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgvXypcXG5fKi9nLCAnX1xcbl8nKS5zcGxpdCgnXycpO1xyXG4gICAgfVxyXG4gICAgQHByb3BlcnR5XHJcbiAgICBwcml2YXRlIF9jdXN0b21MYWJlbE9mZnNldDogY2MuVmVjMiA9IGNjLnYyKDAsIDEwMCk7XHJcbiAgICBAcHJvcGVydHkoeyBkaXNwbGF5TmFtZTogQ0NfREVWICYmICfCt8K3wrfCt8K3wrflgY/np7snLCB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy5pc0N1c3RvbUxhYmVsQWN0aXZlIH0gfSlcclxuICAgIHByaXZhdGUgZ2V0IGN1c3RvbUxhYmVsT2Zmc2V0KCkgeyByZXR1cm4gdGhpcy5fY3VzdG9tTGFiZWxPZmZzZXQgfTtcclxuICAgIHByaXZhdGUgc2V0IGN1c3RvbUxhYmVsT2Zmc2V0KHZhbHVlOiBjYy5WZWMyKSB7XHJcbiAgICAgICAgdGhpcy5fY3VzdG9tTGFiZWxPZmZzZXQgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmN1c3RvbUxhYmVsTm9kZS54ID0gdmFsdWUueDtcclxuICAgICAgICB0aGlzLmN1c3RvbUxhYmVsTm9kZS55ID0gdmFsdWUueTtcclxuICAgIH1cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBfY3VzdG9tTGFiZWxDb2xvcjogY2MuQ29sb3IgPSBuZXcgY2MuQ29sb3IoMjU1LCAyNTUsIDApO1xyXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IENDX0RFViAmJiAnwrfCt8K3wrfCt8K36aKc6ImyJywgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMuaXNDdXN0b21MYWJlbEFjdGl2ZSB9IH0pXHJcbiAgICBwcml2YXRlIGdldCBjdXN0b21MYWJlbENvbG9yKCkgeyByZXR1cm4gdGhpcy5fY3VzdG9tTGFiZWxDb2xvciB9O1xyXG4gICAgcHJpdmF0ZSBzZXQgY3VzdG9tTGFiZWxDb2xvcih2YWx1ZTogY2MuQ29sb3IpIHtcclxuICAgICAgICB0aGlzLl9jdXN0b21MYWJlbENvbG9yID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5jdXN0b21MYWJlbE5vZGUuY29sb3IgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBfY3VzdG9tTGFiZWxTaXplOiBudW1iZXIgPSA2MDtcclxuICAgIEBwcm9wZXJ0eSh7IGRpc3BsYXlOYW1lOiBDQ19ERVYgJiYgJ8K3wrfCt8K3wrfCt+Wkp+WwjycsIHZpc2libGUoKSB7IHJldHVybiB0aGlzLmlzQ3VzdG9tTGFiZWxBY3RpdmUgfSB9KVxyXG4gICAgcHJpdmF0ZSBnZXQgY3VzdG9tTGFiZWxTaXplKCkgeyByZXR1cm4gdGhpcy5fY3VzdG9tTGFiZWxTaXplIH07XHJcbiAgICBwcml2YXRlIHNldCBjdXN0b21MYWJlbFNpemUodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2N1c3RvbUxhYmVsU2l6ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuY3VzdG9tTGFiZWwuZm9udFNpemUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmN1c3RvbUxhYmVsLmxpbmVIZWlnaHQgPSB2YWx1ZSAqIExJTkVIRUlHSFQ7XHJcbiAgICAgICAgdGhpcy5jdXN0b21MYWJlbE5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsT3V0bGluZSkud2lkdGggPSB2YWx1ZSAqIDAuMTtcclxuICAgIH1cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgcHJpdmF0ZSBfY3VzdG9tTGFiZWxEaWdpdDogbnVtYmVyID0gMDtcclxuICAgIEBwcm9wZXJ0eSh7IG1pbjogMCwgbWF4OiAxMCwgc3RlcDogMSwgc2xpZGU6IHRydWUsIGRpc3BsYXlOYW1lOiBDQ19ERVYgJiYgJ8K3wrfCt8K3wrfCt+Wwj+aVsOS9jeaVsCcsIHZpc2libGUoKSB7IHJldHVybiB0aGlzLmlzQ3VzdG9tTGFiZWxBY3RpdmUgfSB9KVxyXG4gICAgcHJpdmF0ZSBnZXQgY3VzdG9tTGFiZWxEaWdpdCgpIHsgcmV0dXJuIHRoaXMuX2N1c3RvbUxhYmVsRGlnaXQgfTtcclxuICAgIHByaXZhdGUgc2V0IGN1c3RvbUxhYmVsRGlnaXQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2N1c3RvbUxhYmVsRGlnaXQgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgYm9hcmROb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgb3V0bGluZUJveE5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBjb2xsaWRlQm94Tm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGFuY2hvclBvaW50Tm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGN1c3RvbUxhYmVsTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGN1c3RvbUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIGN1c3RvbUxhYmVsU3RyaW5nU3BsaXQ6IHN0cmluZ1tdID0gbnVsbDtcclxuICAgIHByaXZhdGUgbW9uaXRvckNvbXA6IGNjLkNvbXBvbmVudCA9IG51bGw7XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuYm9hcmROb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdEYXRhQm9hcmQnKTtcclxuICAgICAgICBpZiAoIUNDX0VESVRPUiAmJiAhd2luZG93WydEQVRBQk9BUkQnXSkge1xyXG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLmJvYXJkTm9kZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5ib2FyZE5vZGUucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICB0aGlzLmJvYXJkTm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB0ZXh0dXJlID0gbmV3IGNjLlRleHR1cmUyRCgpO1xyXG4gICAgICAgIHRleHR1cmUuaW5pdFdpdGhEYXRhKG5ldyBVaW50OEFycmF5KFsyNTUsIDI1NSwgMjU1XSksIGNjLlRleHR1cmUyRC5QaXhlbEZvcm1hdC5SR0I4ODgsIDEsIDEpO1xyXG5cclxuICAgICAgICB0aGlzLmJvYXJkTm9kZSA9IG5ldyBjYy5Ob2RlKCdEYXRhQm9hcmQnKTtcclxuICAgICAgICB0aGlzLmJvYXJkTm9kZS5zZXRQYXJlbnQodGhpcy5ub2RlKTtcclxuICAgICAgICB0aGlzLmJvYXJkTm9kZS54ID0gdGhpcy5ib2FyZE5vZGUueSA9IDA7XHJcbiAgICAgICAgdGhpcy5ib2FyZE5vZGUuekluZGV4ID0gY2MubWFjcm8uTUFYX1pJTkRFWDtcclxuICAgICAgICAvLyB0aGlzLmJvYXJkTm9kZVsnX29iakZsYWdzJ10gfD0gY2MuT2JqZWN0WydGbGFncyddLkhpZGVJbkhpZXJhcmNoeTtcclxuICAgICAgICB0aGlzLmJvYXJkTm9kZVsnX29iakZsYWdzJ10gfD0gY2MuT2JqZWN0WydGbGFncyddLkxvY2tlZEluRWRpdG9yO1xyXG5cclxuICAgICAgICB0aGlzLm91dGxpbmVCb3hOb2RlID0gbmV3IGNjLk5vZGUoJ091dGxpbmVCb3gnKTtcclxuICAgICAgICB0aGlzLm91dGxpbmVCb3hOb2RlLnNldFBhcmVudCh0aGlzLmJvYXJkTm9kZSk7XHJcbiAgICAgICAgdGhpcy5vdXRsaW5lQm94Tm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICB0aGlzLm91dGxpbmVCb3hOb2RlLmFjdGl2ZSA9IHRoaXMuaXNPdXRsaW5lQm94QWN0aXZlO1xyXG4gICAgICAgIHRoaXMub3V0bGluZUJveE5vZGUuY29sb3IgPSB0aGlzLm91dGxpbmVCb3hDb2xvcjtcclxuICAgICAgICB0aGlzLm91dGxpbmVCb3hOb2RlLm9wYWNpdHkgPSB0aGlzLm91dGxpbmVCb3hPcGFjaXR5O1xyXG5cclxuICAgICAgICB0aGlzLmNvbGxpZGVCb3hOb2RlID0gbmV3IGNjLk5vZGUoJ0NvbGxpZGVCb3gnKTtcclxuICAgICAgICB0aGlzLmNvbGxpZGVCb3hOb2RlLnNldFBhcmVudCh0aGlzLmJvYXJkTm9kZSk7XHJcbiAgICAgICAgdGhpcy5jb2xsaWRlQm94Tm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICB0aGlzLmNvbGxpZGVCb3hOb2RlLmFjdGl2ZSA9IHRoaXMuaXNDb2xsaWRlQm94QWN0aXZlO1xyXG4gICAgICAgIHRoaXMuY29sbGlkZUJveE5vZGUuY29sb3IgPSB0aGlzLmNvbGxpZGVCb3hDb2xvcjtcclxuICAgICAgICB0aGlzLmNvbGxpZGVCb3hOb2RlLm9wYWNpdHkgPSB0aGlzLmNvbGxpZGVCb3hPcGFjaXR5O1xyXG5cclxuICAgICAgICB0aGlzLmFuY2hvclBvaW50Tm9kZSA9IG5ldyBjYy5Ob2RlKCdBbmNob3JQb2ludCcpO1xyXG4gICAgICAgIHRoaXMuYW5jaG9yUG9pbnROb2RlLnNldFBhcmVudCh0aGlzLmJvYXJkTm9kZSk7XHJcbiAgICAgICAgdGhpcy5hbmNob3JQb2ludE5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgdGhpcy5hbmNob3JQb2ludE5vZGUuY29sb3IgPSBjYy5jb2xvcigyNTUsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuYW5jaG9yUG9pbnROb2RlLndpZHRoID0gQU5DSE9SX1NJWkU7XHJcbiAgICAgICAgdGhpcy5hbmNob3JQb2ludE5vZGUuaGVpZ2h0ID0gQU5DSE9SX1NJWkU7XHJcblxyXG4gICAgICAgIHRoaXMuY3VzdG9tTGFiZWxOb2RlID0gbmV3IGNjLk5vZGUoJ0N1c3RvbUxhYmVsJyk7XHJcbiAgICAgICAgdGhpcy5jdXN0b21MYWJlbE5vZGUuc2V0UGFyZW50KHRoaXMuYm9hcmROb2RlKTtcclxuICAgICAgICB0aGlzLmN1c3RvbUxhYmVsID0gdGhpcy5jdXN0b21MYWJlbE5vZGUuYWRkQ29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICB0aGlzLmN1c3RvbUxhYmVsTm9kZS5hZGRDb21wb25lbnQoY2MuTGFiZWxPdXRsaW5lKS5jb2xvciA9IGNjLmNvbG9yKDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuY3VzdG9tTGFiZWxOb2RlLmFjdGl2ZSA9IHRoaXMuaXNDdXN0b21MYWJlbEFjdGl2ZTtcclxuICAgICAgICB0aGlzLmN1c3RvbUxhYmVsU3RyaW5nID0gdGhpcy5fY3VzdG9tTGFiZWxTdHJpbmc7XHJcbiAgICAgICAgdGhpcy5jdXN0b21MYWJlbE5vZGUueCA9IHRoaXMuY3VzdG9tTGFiZWxPZmZzZXQueDtcclxuICAgICAgICB0aGlzLmN1c3RvbUxhYmVsTm9kZS55ID0gdGhpcy5jdXN0b21MYWJlbE9mZnNldC55O1xyXG4gICAgICAgIHRoaXMuY3VzdG9tTGFiZWxOb2RlLmNvbG9yID0gdGhpcy5jdXN0b21MYWJlbENvbG9yO1xyXG4gICAgICAgIHRoaXMuY3VzdG9tTGFiZWxTaXplID0gdGhpcy5fY3VzdG9tTGFiZWxTaXplO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUFuZ2xlKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTY2FsZSgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQW5jaG9yKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlJPVEFUSU9OX0NIQU5HRUQsIHRoaXMudXBkYXRlQW5nbGUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5TQ0FMRV9DSEFOR0VELCB0aGlzLnVwZGF0ZVNjYWxlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuQU5DSE9SX0NIQU5HRUQsIHRoaXMudXBkYXRlQW5jaG9yLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuU0laRV9DSEFOR0VELCB0aGlzLnVwZGF0ZVNpemUsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlQW5nbGUoKSB7XHJcbiAgICAgICAgdGhpcy5jb2xsaWRlQm94Tm9kZS5hbmdsZSA9IC10aGlzLm5vZGUuYW5nbGU7XHJcbiAgICAgICAgdGhpcy5jdXN0b21MYWJlbE5vZGUuYW5nbGUgPSAtdGhpcy5ub2RlLmFuZ2xlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlU2NhbGUoKSB7XHJcbiAgICAgICAgdGhpcy5ib2FyZE5vZGUuc2NhbGVYID0gMSAvIHRoaXMubm9kZS5zY2FsZVg7XHJcbiAgICAgICAgdGhpcy5ib2FyZE5vZGUuc2NhbGVZID0gMSAvIHRoaXMubm9kZS5zY2FsZVk7XHJcbiAgICAgICAgdGhpcy5vdXRsaW5lQm94Tm9kZS5zY2FsZVggPSB0aGlzLm5vZGUuc2NhbGVYO1xyXG4gICAgICAgIHRoaXMub3V0bGluZUJveE5vZGUuc2NhbGVZID0gdGhpcy5ub2RlLnNjYWxlWTtcclxuICAgICAgICB0aGlzLmNvbGxpZGVCb3hOb2RlLnNjYWxlWCA9IHRoaXMubm9kZS5zY2FsZVg7XHJcbiAgICAgICAgdGhpcy5jb2xsaWRlQm94Tm9kZS5zY2FsZVkgPSB0aGlzLm5vZGUuc2NhbGVZO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlQW5jaG9yKCkge1xyXG4gICAgICAgIHRoaXMub3V0bGluZUJveE5vZGUuYW5jaG9yWCA9IHRoaXMubm9kZS5hbmNob3JYO1xyXG4gICAgICAgIHRoaXMub3V0bGluZUJveE5vZGUuYW5jaG9yWSA9IHRoaXMubm9kZS5hbmNob3JZO1xyXG4gICAgICAgIHRoaXMuY29sbGlkZUJveE5vZGUuYW5jaG9yWCA9IHRoaXMubm9kZS5hbmNob3JYO1xyXG4gICAgICAgIHRoaXMuY29sbGlkZUJveE5vZGUuYW5jaG9yWSA9IHRoaXMubm9kZS5hbmNob3JZO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlU2l6ZSgpIHtcclxuICAgICAgICB0aGlzLm91dGxpbmVCb3hOb2RlLndpZHRoID0gdGhpcy5ub2RlLndpZHRoO1xyXG4gICAgICAgIHRoaXMub3V0bGluZUJveE5vZGUuaGVpZ2h0ID0gdGhpcy5ub2RlLmhlaWdodDtcclxuICAgICAgICB0aGlzLmNvbGxpZGVCb3hOb2RlLndpZHRoID0gdGhpcy5ub2RlLndpZHRoO1xyXG4gICAgICAgIHRoaXMuY29sbGlkZUJveE5vZGUuaGVpZ2h0ID0gdGhpcy5ub2RlLmhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0N1c3RvbUxhYmVsQWN0aXZlKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCF0aGlzLmN1c3RvbUxhYmVsU3RyaW5nU3BsaXQpIHJldHVybjtcclxuICAgICAgICBsZXQgcmFkaWFuID0gLXRoaXMubm9kZS5hbmdsZSAqIE1hdGguUEkgLyAxODA7XHJcbiAgICAgICAgbGV0IGNvcyA9IE1hdGguY29zKHJhZGlhbik7XHJcbiAgICAgICAgbGV0IHNpbiA9IE1hdGguc2luKHJhZGlhbik7XHJcbiAgICAgICAgdGhpcy5jdXN0b21MYWJlbE5vZGUueCA9IHRoaXMuY3VzdG9tTGFiZWxPZmZzZXQueCAqIGNvcyAtIHRoaXMuY3VzdG9tTGFiZWxPZmZzZXQueSAqIHNpbjtcclxuICAgICAgICB0aGlzLmN1c3RvbUxhYmVsTm9kZS55ID0gdGhpcy5jdXN0b21MYWJlbE9mZnNldC54ICogc2luICsgdGhpcy5jdXN0b21MYWJlbE9mZnNldC55ICogY29zO1xyXG4gICAgICAgIGxldCBzdHIgPSAnJztcclxuICAgICAgICBsZXQgc3RycyA9IHRoaXMuY3VzdG9tTGFiZWxTdHJpbmdTcGxpdDtcclxuICAgICAgICBpZiAoIXRoaXMubW9uaXRvckNvbXAgJiYgdGhpcy5jdXN0b21Db21wb25lbnROYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9uaXRvckNvbXAgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KHRoaXMuY3VzdG9tQ29tcG9uZW50TmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBzdHJzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XHJcbiAgICAgICAgICAgIGxldCB0bXAgPSBudWxsO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHN0cnNbaV0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3dwJzpcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbWF0cml4ID0gdGhpcy5ub2RlWydfd29ybGRNYXRyaXgnXS5tO1xyXG4gICAgICAgICAgICAgICAgICAgIHRtcCA9IGAke21hdHJpeFsxMl0udG9GaXhlZCh0aGlzLmN1c3RvbUxhYmVsRGlnaXQpfSxcXHQke21hdHJpeFsxM10udG9GaXhlZCh0aGlzLmN1c3RvbUxhYmVsRGlnaXQpfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdhbmdsZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgdG1wID0gdGhpcy5ub2RlLmFuZ2xlLnRvRml4ZWQodGhpcy5jdXN0b21MYWJlbERpZ2l0KSArICfCsCc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdyYWRpYW4nOlxyXG4gICAgICAgICAgICAgICAgICAgIHRtcCA9ICh0aGlzLm5vZGUuYW5nbGUgLyAxODApLnRvRml4ZWQodGhpcy5jdXN0b21MYWJlbERpZ2l0KSArICfPgCc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdtYXRyaXgnOlxyXG4gICAgICAgICAgICAgICAgICAgIG1hdHJpeCA9IHRoaXMubm9kZVsnX3dvcmxkTWF0cml4J10ubTtcclxuICAgICAgICAgICAgICAgICAgICB0bXAgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7ICsraikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG0gPSBtYXRyaXhbaiAqIDQgKyBpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRtcCArPSAobSA8IDAgPyAnXFx0XFx0JyA6ICdcXHRcXHRcXHQnKSArIG0udG9GaXhlZCh0aGlzLmN1c3RvbUxhYmVsRGlnaXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgIT09IDMgJiYgKHRtcCArPSAnXFxuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnY2hpbGRyZW4nOlxyXG4gICAgICAgICAgICAgICAgICAgIHRtcCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aGlzLm5vZGUuY2hpbGRyZW5Db3VudDsgaSA8IGxlbjsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcCArPSBgXFx0XFx0XFx0JHtpfe+8miR7dGhpcy5ub2RlLmNoaWxkcmVuW2ldLm5hbWV9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaSAhPT0gbGVuIC0gMSAmJiAodG1wICs9ICdcXG4nKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICd+JzogdG1wID0gJyxcXHQnOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJyEnOiB0bXAgPSAnOlxcdCc7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnQCc6IHRtcCA9ICdcXHRcXHQnOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubm9kZVtzdHJzW2ldXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcCA9IHRoaXMubm9kZVtzdHJzW2ldXTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0cnNbaV0uc3RhcnRzV2l0aCgnIycpICYmIHRoaXMubW9uaXRvckNvbXAgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG1wID0gdGhpcy5wYXJzZVN0cmluZyhzdHJzW2ldLnN1YnN0cmluZygxKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG1wID0gc3Ryc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0bXAgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcCA9IHRtcC50b0ZpeGVkKHRoaXMuY3VzdG9tTGFiZWxEaWdpdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0bXAubmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0bXAgPSB0bXAubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3RyICs9IHRtcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdXN0b21MYWJlbC5zdHJpbmcgPSBzdHI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwYXJzZVN0cmluZyhzdHI6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBzdHJzID0gc3RyLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgbGV0IHJldCA9IHRoaXMubW9uaXRvckNvbXBbc3Ryc1swXV07XHJcbiAgICAgICAgcmV0ID09PSB1bmRlZmluZWQgJiYgKHJldCA9IGAjJHtzdHJzWzBdfWApO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAxLCBsZW4gPSBzdHJzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXRbc3Ryc1tpXV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke3JldC5uYW1lID8gcmV0Lm5hbWUgOiByZXR9LiR7c3Ryc1tpXX1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldCA9IHJldFtzdHJzW2ldXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuYm9hcmROb2RlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmJvYXJkTm9kZS5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmROb2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLnRhcmdldE9mZih0aGlzKTtcclxuICAgIH1cclxufSJdfQ==