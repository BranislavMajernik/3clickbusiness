//  config.js
//
//  Simple application configuration. Extend as needed.
module.exports = {
	port: process.env.PORT || 8124,
  db: {
    host: process.env.DATABASE_HOST || '127.0.0.1',
    database: 'orders',
    user: 'shop_order_service',
    password: 'qazwsxedc1029!',
    port: 3306
  }
};
