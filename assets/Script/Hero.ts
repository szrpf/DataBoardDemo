const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    hp = 100;
    mp = 60;

    update (dt) {
        this.hp += 1.0*dt;
        this.mp += 0.5*dt;
    }
}