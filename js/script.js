var car = {
    make: 'VW',
    type: 'Polo',
    color: 'white',
    isTurnOn: false,
    numberOfWheels: 4,
    seats: [
        "seat 1",
        "seat 2",
        "seat 3",
        "seat 4",
        ],
    turnOn: function () {
        this.isTurnOn = true;
    },
    fly: function () {
        alert("fly");
    },
    switchCar: function (isOn) {
        isOn ? this.isTurnOn = true : this.isTurnOn = false;
    }
}