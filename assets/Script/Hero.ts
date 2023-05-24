const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {
    hp = 100;
    mp = 60;
    equip = {
        name:'装备',
        sword:{
            name:'小刀',
            attack:30
        },
        shoe:{
            name:'草鞋',
            attr:{
                name:'属性',
                speed:5,
                durable:100
            }
        }
    }

    update (dt) {
        this.hp += 1.0*dt;
        this.mp += 0.5*dt;
    }
}