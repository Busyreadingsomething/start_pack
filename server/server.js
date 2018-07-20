const server = require('./app');

// --- DEFAULT 1337 --- //
const PORT = 1337;

server.listen(1337, () => console.log(`SERVER is listening to PORT ${PORT}`)); // eslint-disable-line no-console
