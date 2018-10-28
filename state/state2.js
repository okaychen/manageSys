const Light = () => {
    this.offLightState = new OffLightState(light);
    this.weakLightState = new WeakLightState(light);
    this.strongLightState = new StrongLightState(light);
    this.superStrongLightState = new SuperStrongLightState(light);
    this.button = null;
}



// toggle weakLightState
const OffLightState = (light) => {
    this.light = light;
}

OffLightState.prototype.buttonWasPressed = function() {
    console.log('弱光');
    this.light.setState(this.light.weakLightState);
}

// toggle strongLightState
const WeakLightState = (light) => {
    this.light = light;
}

WeakLightState.prototype.buttonWasPressed = () => {
    console.log('强光');
    this.light.setState(this.light.strongLightState);
}

// toggle superStrongLightState
const StrongLightState = (light) => {
    this.light = light;
}

StrongLightState.prototype.buttonWasPressed = () => {
    console.log('超强光');
    this.light.setState(this.light.superStrongLightState);
}

// toggle offLightState
const SuperStrongLightState = (light) => {
    this.light = light;
}

SuperStrongLightState.prototype.buttonWasPressed = () => {
    console.log('关闭');
    this.light.setState(this.light.offLightState);
}


Light.prototype.init = () => {
    let button = document.createElement('button');
    let _self = this;
    button.innerHTML = 'Change';
    this.button.setAttribute('css', 'btn_status_toggle');
    this.currState = this.offLightState; //设置当前状态
    this.button.onclick = () => {
        _self.currState.buttonWasPressed();
    }
}

Light.prototype.setState = () => {
    this.currState = newState;
}

let light = new Light();
light.init();