function Appliance(name, power){
    this.name = this.name;
    this.power = power;
    this.pluggedIn = false;
}

Appliance.prototype.plugIn = function() {
    console.log(this.name + " is plugged!");
    this.pluggedIn = true;
}

Appliance.prototype.unPlug = function() {
    console.log(this.name + " is unplugged!");
    this.pluggedIn = false;
}

function Mouse(name, brand, power, type, dpi) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.type = type;
    this.dpi = dpi;
    this.pluggedIn = false;
}

Mouse.prototype = new Appliance();

function Fan(name, brand, power, type, speed) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.type = type;
    this.speed = speed;
    this.pluggedIn = true;
}

Fan.prototype = new Appliance();

const gamingMouse = new Mouse("DeathAdder", "Razer", 1, "optical", 20000);

const deskFan = new Fan("USB Desk Fan", "Click", 25, "desk fan", 1000);

gamingMouse.plugIn();

deskFan.unPlug();

console.log(gamingMouse);

console.log(deskFan);