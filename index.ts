import { initWebSocketServer } from './src/be_http_server/index';
import { httpServer } from './src/fe_http_server/index';

const BE_HTTP_PORT = 3000;

// const wsServer = initWSServer(BE_HTTP_PORT);
initWebSocketServer(BE_HTTP_PORT);

const FE_HTTP_PORT = 8181;

console.log(`Start static http server on the ${FE_HTTP_PORT} port!`);
httpServer.listen(FE_HTTP_PORT);
