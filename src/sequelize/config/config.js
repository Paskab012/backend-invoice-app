module.exports = {
  development: {
    url: 'postgres://bggihbfvpwwqev:a2eaa7ed2165873c9435a8b0446bc563cd87566f92cce2c4a164ce17453c7651@ec2-52-4-87-74.compute-1.amazonaws.com:5432/da70m3l5n2beml',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
  test: {
    url: '127.0.0.1',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
