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
const ANCHOR_SIZE = 20;               //锚点的大小
const LINEHEIGHT = 1.2;               //行高是字体大小的多少倍
const { ccclass, property, executeInEditMode, menu } = cc._decorator;
@ccclass
@executeInEditMode
@menu('Comp/DataBoard')
export default class DataBoard extends cc.Component {
    @property
    private _isOutlineBoxActive: boolean = false;
    @property({ displayName: CC_DEV && '轮廓盒子', tooltip: CC_DEV && '随节点旋转，代表实时轮廓' })
    private get isOutlineBoxActive() { return this._isOutlineBoxActive };
    private set isOutlineBoxActive(value: boolean) {
        this._isOutlineBoxActive = value;
        this.outlineBoxNode.active = value;
    }
    @property
    private _outlineBoxColor: cc.Color = new cc.Color(Math.random() * 255, Math.random() * 255, Math.random() * 255);
    @property({ displayName: CC_DEV && '······颜色', visible() { return this.isOutlineBoxActive } })
    private get outlineBoxColor() { return this._outlineBoxColor };
    private set outlineBoxColor(value: cc.Color) {
        this._outlineBoxColor = value;
        this.outlineBoxNode.color = value;
    }
    @property
    private _outlineBoxOpacity: number = 100;
    @property({ min: 0, max: 255, step: 1, slide: true, displayName: CC_DEV && '······透明度', visible() { return this.isOutlineBoxActive } })
    private get outlineBoxOpacity() { return this._outlineBoxOpacity };
    private set outlineBoxOpacity(value: number) {
        this._outlineBoxOpacity = value;
        this.outlineBoxNode.opacity = value;
    }
    @property
    private _isCollideBoxActive: boolean = true;
    @property({ displayName: CC_DEV && '碰撞盒子', tooltip: CC_DEV && '不随节点旋转，代表碰撞范围' })
    private get isCollideBoxActive() { return this._isCollideBoxActive };
    private set isCollideBoxActive(value: boolean) {
        this._isCollideBoxActive = value;
        this.collideBoxNode.active = value;
    }
    @property
    private _collideBoxColor: cc.Color = new cc.Color(Math.random() * 255, Math.random() * 255, Math.random() * 255);
    @property({ displayName: CC_DEV && '······颜色', visible() { return this.isCollideBoxActive } })
    private get collideBoxColor() { return this._collideBoxColor };
    private set collideBoxColor(value: cc.Color) {
        this._collideBoxColor = value;
        this.collideBoxNode.color = value;
    }
    @property
    private _collideBoxOpacity: number = 100;
    @property({ min: 0, max: 255, step: 1, slide: true, displayName: CC_DEV && '······透明度', visible() { return this.isCollideBoxActive } })
    private get collideBoxOpacity() { return this._collideBoxOpacity };
    private set collideBoxOpacity(value: number) {
        this._collideBoxOpacity = value;
        this.collideBoxNode.opacity = value;
    }
    @property
    private _isCustomLabelActive: boolean = true;
    @property({ displayName: CC_DEV && '自定义参数', tooltip: CC_DEV && '配置显示的属性内容' })
    private get isCustomLabelActive() { return this._isCustomLabelActive };
    private set isCustomLabelActive(value: boolean) {
        this._isCustomLabelActive = value;
        this.customLabelNode.active = value;
    }
    @property({ displayName: CC_DEV && '······脚本', tooltip: CC_DEV && '监控哪个脚本', visible() { return this.isCustomLabelActive; } })
    private customComponentName: string = '';
    @property
    private _customLabelString: string = 'x,y';
    @property({ multiline: true, displayName: CC_DEV && '······参数', tooltip: CC_DEV && "—————支持的参数————\nwp：世界坐标\nradian：节点弧度（单位：π）\nmatrix：变换矩阵\n自身属性：x,y,parent,children等\n脚本属性：脚本实例对象的属性\n↓↓参数可以用3种分隔符隔开↓↓\n英文逗号、英文冒号、空格\n————举个栗子————\n脚本：Hero\n参数：wp,scale,angle,#angle,#hp\n显示结果：\n世界坐标,节点scale,节点angle，Hero对象的angle,Hero对象的hp\n————温馨提示————\n初始化的时候，设置全局变量\nwindow['DATABOARD'] = false\n可屏蔽本项目所有DataBoard，不会产生任何额外开销", visible() { return this.isCustomLabelActive } })
    private get customLabelString() { return this._customLabelString };
    private set customLabelString(value: string) {
        this._customLabelString = value;
        this.customLabelStringSplit = value
            .replace(/,|，/g, '_~_').replace(/:|：/g, '_!_').replace(/ /g, '_@_')
            .replace(/_*\n_*/g, '_\n_').split('_');
    }
    @property
    private _customLabelOffset: cc.Vec2 = cc.v2(0, 100);
    @property({ displayName: CC_DEV && '······偏移', visible() { return this.isCustomLabelActive } })
    private get customLabelOffset() { return this._customLabelOffset };
    private set customLabelOffset(value: cc.Vec2) {
        this._customLabelOffset = value;
        this.customLabelNode.x = value.x;
        this.customLabelNode.y = value.y;
    }
    @property
    private _customLabelColor: cc.Color = new cc.Color(255, 255, 0);
    @property({ displayName: CC_DEV && '······颜色', visible() { return this.isCustomLabelActive } })
    private get customLabelColor() { return this._customLabelColor };
    private set customLabelColor(value: cc.Color) {
        this._customLabelColor = value;
        this.customLabelNode.color = value;
    }
    @property
    private _customLabelSize: number = 60;
    @property({ displayName: CC_DEV && '······大小', visible() { return this.isCustomLabelActive } })
    private get customLabelSize() { return this._customLabelSize };
    private set customLabelSize(value: number) {
        this._customLabelSize = value;
        this.customLabel.fontSize = value;
        this.customLabel.lineHeight = value * LINEHEIGHT;
        this.customLabelNode.getComponent(cc.LabelOutline).width = value * 0.1;
    }
    @property
    private _customLabelDigit: number = 0;
    @property({ min: 0, max: 10, step: 1, slide: true, displayName: CC_DEV && '······小数位数', visible() { return this.isCustomLabelActive } })
    private get customLabelDigit() { return this._customLabelDigit };
    private set customLabelDigit(value: number) {
        this._customLabelDigit = value;
    }
    private boardNode: cc.Node = null;
    private outlineBoxNode: cc.Node = null;
    private collideBoxNode: cc.Node = null;
    private anchorPointNode: cc.Node = null;
    private customLabelNode: cc.Node = null;
    private customLabel: cc.Label = null;
    private customLabelStringSplit: string[] = null;
    private monitorComp: cc.Component = null;

    protected start() {
        this.boardNode = this.node.getChildByName('DataBoard');
        if (!CC_EDITOR && !window['DATABOARD']) {
            this.destroy();
            return;
        }
        if (cc.isValid(this.boardNode)) {
            this.boardNode.removeFromParent();
            this.boardNode.destroy();
        }
        let texture = new cc.Texture2D();
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
    }

    private updateAngle() {
        this.collideBoxNode.angle = -this.node.angle;
        this.customLabelNode.angle = -this.node.angle;
    }

    private updateScale() {
        this.boardNode.scaleX = 1 / this.node.scaleX;
        this.boardNode.scaleY = 1 / this.node.scaleY;
        this.outlineBoxNode.scaleX = this.node.scaleX;
        this.outlineBoxNode.scaleY = this.node.scaleY;
        this.collideBoxNode.scaleX = this.node.scaleX;
        this.collideBoxNode.scaleY = this.node.scaleY;
    }

    private updateAnchor() {
        this.outlineBoxNode.anchorX = this.node.anchorX;
        this.outlineBoxNode.anchorY = this.node.anchorY;
        this.collideBoxNode.anchorX = this.node.anchorX;
        this.collideBoxNode.anchorY = this.node.anchorY;
    }

    private updateSize() {
        this.outlineBoxNode.width = this.node.width;
        this.outlineBoxNode.height = this.node.height;
        this.collideBoxNode.width = this.node.width;
        this.collideBoxNode.height = this.node.height;
    }

    protected update() {
        if (!this.isCustomLabelActive) return;
        if (!this.customLabelStringSplit) return;
        if (this.customLabelOffset.x !== 0 || this.customLabelOffset.y !== 0) {
            let radian = -this.node.angle * Math.PI / 180;
            let cos = Math.cos(radian);
            let sin = Math.sin(radian);
            this.customLabelNode.x = this.customLabelOffset.x * cos - this.customLabelOffset.y * sin;
            this.customLabelNode.y = this.customLabelOffset.x * sin + this.customLabelOffset.y * cos;
        }
        let str = '';
        let strs = this.customLabelStringSplit;
        if (!this.monitorComp && this.customComponentName) {
            this.monitorComp = this.node.getComponent(this.customComponentName);
        }
        for (let i = 0, len = strs.length; i < len; ++i) {
            let tmp = null;
            switch (strs[i]) {
                case 'wp':
                    let matrix = this.node['_worldMatrix'].m;
                    tmp = `${matrix[12].toFixed(this.customLabelDigit)},\t${matrix[13].toFixed(this.customLabelDigit)}`;
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
                    for (let i = 0; i < 4; ++i) {
                        for (let j = 0; j < 4; ++j) {
                            let m = matrix[j * 4 + i];
                            tmp += (m < 0 ? '\t\t' : '\t\t\t') + m.toFixed(this.customLabelDigit);
                        }
                        i !== 3 && (tmp += '\n');
                    }
                    break;
                case 'children':
                    tmp = '';
                    for (let i = 0, len = this.node.childrenCount; i < len; ++i) {
                        tmp += `\t\t\t${i}：${this.node.children[i].name}`;
                        i !== len - 1 && (tmp += '\n');
                    }
                    break;
                case '~': tmp = ',\t'; break;
                case '!': tmp = ':\t'; break;
                case '@': tmp = '\t\t'; break;
                default:
                    if (this.node[strs[i]] !== undefined) {
                        tmp = this.node[strs[i]];
                    } else if (strs[i].startsWith('#') && this.monitorComp !== null) {
                        tmp = this.parseString(strs[i].substring(1));
                    } else {
                        tmp = strs[i];
                    }
                    if (typeof tmp === 'number') {
                        tmp = tmp.toFixed(this.customLabelDigit);
                    } else if (tmp.name) {
                        tmp = tmp.name;
                    }
                    break;
            }
            str += tmp;
        }
        this.customLabel.string = str;
    }

    private parseString(str: string) {
        let strs = str.split('.');
        let ret = this.monitorComp[strs[0]];
        ret === undefined && (ret = `#${strs[0]}`);
        for (let i = 1, len = strs.length; i < len; ++i) {
            if (ret[strs[i]] === undefined) {
                return `${ret.name ? ret.name : ret}.${strs[i]}`;
            }
            ret = ret[strs[i]];
        }
        return ret;
    }

    protected onDestroy() {
        if (cc.isValid(this.boardNode)) {
            this.boardNode.removeFromParent();
            this.boardNode.destroy();
        }
        this.node.targetOff(this);
    }
}