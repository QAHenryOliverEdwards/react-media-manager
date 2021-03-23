export let startup =()=>{
    const config = require('./config.json');
    let photoLocation = config['media']['photo']['location'];
    console.log(photoLocation)
    if (photoLocation.length === 0) {
        console.log('No photos found please enter a location');
    }
}
