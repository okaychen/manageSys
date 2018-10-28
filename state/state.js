const Light = function () {
    this.status = 'off';
    this.button = null;
}

Light.prototype.init = function () {
    let button = document.createElement( "button" );
    let _self = this;
    button.innerHTML = '开关';
    this.button = document.body.appendChild(button);
    this.button.onclick = function () {
        _self.buttonWasPressed();
    }
}

Light.prototype.buttonWasPressed = function () {
    if (this.status === "off") {
        console.log('开灯');
        this.status = 'on';
    } else if (this.status === "on") {
        console.log('关灯');
        this.status = 'off';
    }
}

let light = new Light();
light.init();