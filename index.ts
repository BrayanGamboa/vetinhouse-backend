import bootstrap from './lib/infrastructure/config/bootstrap';
import createServer from './lib/infrastructure/webserver/server';

// Start the server
const start = async () => {

  try {
    await bootstrap.init();

    const server = await createServer();
    await server.start();

    console.log('Server running at:', server.info.uri);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

start();