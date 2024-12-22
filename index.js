const {getInput, close} = require('./utils/Logger');
const PLScript = require('./pl_script');
async function initialize(){
    const address = await getInput('Enter your address: ', 'string');
    const latitude = await getInput('Enter your latitude: ', 'number');
    const longitude = await getInput('Enter your longitude: ', 'number');
    const pageSize = await getInput('Enter the page size: ', 'number');

    const pl_script = new PLScript(address, latitude, longitude, pageSize);
    await  pl_script.init();
    close();

}
initialize();