class LightSwitch {
    constructor(state) {
        this.state = state;
    }

    setState(state) {
        this.state = state;
    }

    press() {
        this.state.handle(this);
    }
}

module.exports = LightSwitch;