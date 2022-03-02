const mongoose = require("mongoose");

const {CLUSTER, CLUSTER_TEST, ENVIROMENT} = process.env;

const clusterEnv = ENVIROMENT === 'test' ? CLUSTER_TEST : CLUSTER;

mongoose
  .connect(
    clusterEnv, 
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
  )
  .then((db) => {
    console.log("Conectado a la base de datos");
  })
  .catch((err) => {
    console.error("Error en conexión a la base de datos, ", err);
  });
