/* eslint-disable no-undef */
/* eslint-disable no-process-env */

const async = require('./app/utils/async');
const config = require('./app/config');
const validator = require('./app/utils/validator');

const PORT = process.env.PORT || config.PORT;

async()
  .then(() => require('./app/db').setup(config.MONGO_URI))
  .then((db) => require('./app/dbsetup')(db, validator))
  .then((db) =>
    require('./app/data')
      .setupData(db, validator)
      .then((data) => require('./app/app').init(data, config, db))
  )
  .then((app) =>
    app.listen(PORT, () =>
      console.log(`App running on http://localhost:${PORT}`)
    )
  );
