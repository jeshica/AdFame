var data = {
    logo: 'images/Coca-Cola.png',
    initialPosition: {x: 0, y: 0, z: 0},
    initialVelocity: {x: 0, y: 0, z: 0},
    initialRotation: {x: 0, y: 0, z: 0},
    opacity: 1,
    enter: {
        type: 'slideInOut',
        position: {x: 0, y: 100, z: 0},
        velocity: {x: 0, y: 0, z: 0},
        rotation: {x: Math.PI, y: 0, z: 0},
        period: 1000,
        dampingRatio: 0,
        restitution: 0,
        opacity: 1,
        duration: 1000,
        curve: null,
        link: 'www.google.com'
    },
    exit: {
        type: 'slideInOut',
        position: {x: 0, y: 0, z: 0},
        velocity: {x: 0, y: 0, z: 0},
        rotation: {x: 0, y: 0, z: 0},
        period: 1000,
        dampingRatio: 0,
        restitution: 0,
        opacity: 1,
        duration: 1000,
        curve: null,
        link: 'www.google.com'
    }
}

module.exports = data;