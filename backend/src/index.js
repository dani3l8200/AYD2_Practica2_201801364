const app = require('./app')
require('./utils/db/database')


app.listen(
    app.get('port'), () => console.log(`Server on: ${app.get('port')}`)
);
