const app = require('./app');

app.listen(app.get('post'), () => {
  // eslint-disable-next-line no-console
  console.log(`App live on: ${app.get('post')}`);
});
