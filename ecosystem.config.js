module.exports = {
  apps: [
    {
      name: "wedding-car-strapi",
      cwd: "/doanphuoc_project/wedding-car-strapi",
      script: "npm",
      args: "start",
      env: {
//        NODE_ENV: "development",
//        DB_HOST: "localhost",
//        DB_PORT: "5432",
//        DB_NAME: "strapi_dev",
//        DB_USER: "strapi",
//        DB_PASS: "mysecurepassword",
        // JWT_SECRET: "aSecretKey",
      },
    },
  ],
};
