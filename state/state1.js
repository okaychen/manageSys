var Light = function () {
    this.offLightState = new OffLightState(this);
    this.weakLightState = new WeakLightState(this);
    this.strongLightState = new StrongLightState(this);
    this.superStrongLightState = new SuperStrongLightState(this);
    this.button = null;
};

// OffLightState：
var OffLightState = function (light) {
    this.light = light;
};
OffLightState.prototype.buttonWasPressed = function () {
    console.log('弱光'); // offLightState 对应的行为
    this.light.setState(this.light.weakLightState); // 切换状态到 weakLightState
};
// WeakLightState：
var WeakLightState = function (light) {
    this.light = light;
};
WeakLightState.prototype.buttonWasPressed = function () {
    console.log('强光'); // weakLightState 对应的行为
    this.light.setState(this.light.strongLightState); // 切换状态到 strongLightState
};
// StrongLightState：
var StrongLightState = function (light) {
    this.light = light;
};
StrongLightState.prototype.buttonWasPressed = function () {
    console.log('超强光'); // strongLightState 对应的行为
    this.light.setState(this.light.superStrongLightState); // 切换状态到 SuperStrongLightState
};

//新增超强光
var SuperStrongLightState = function (light) {
    this.light = light;
}

SuperStrongLightState.prototype.buttonWasPressed = function () {
    console.log('关灯');
    this.light.setState(this.light.offLightState);
};

Light.prototype.init = function () {
    var button = document.createElement('button'),
        self = this;
    this.button = document.body.appendChild(button);
    this.button.innerHTML = 'Change';
    this.currState = this.offLightState; // 设置当前状态
    this.button.onclick = function () {
        self.currState.buttonWasPressed();
    }
};

Light.prototype.setState = function (newState) {
    this.currState = newState;
};

var light = new Light();
light.init();