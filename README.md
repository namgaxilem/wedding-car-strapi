https://strapi.io/integrations/azure

**Required packages/software**
- nodejs
- pm2: ecosystem.config.js
- nginx: nginx.conf
- yarn
- git

```
sudo apt update
sudo apt upgrade -y

pm2 init
pm2 start ecosystem.config.js
```

#### How to use pm2 to run strapi 
```
pm2 startup systemd
```

#### How to config nginx
1. Install Certbot

```
sudo apt update
sudo apt install certbot
sudo apt install certbot
sudo apt install python3-certbot-nginx
```

2. Config Nginx
```
sudo apt install nginx
```

3. Next, create a new Nginx configuration file for your Strapi app
```
sudo nano /etc/nginx/sites-available/strapi
```

4. Create nginx.conf file
```
server {
    server_name strapi.minhphatchanel.com;

    location / {
        proxy_pass http://localhost:1337;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/strapi.minhphatchanel.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/strapi.minhphatchanel.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

} server {
    if ($host = strapi.minhphatchanel.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    listen 80;
    server_name strapi.minhphatchanel.com;
    return 404; # managed by Certbot
}
```

5. Enable the Nginx Configuration
```
sudo ln -s /etc/nginx/sites-available/strapi /etc/nginx/sites-enabled/
```

6. Test Nginx Configuration
```
sudo nginx -t
```

7. If everything okay, start nginx:
```
sudo systemctl restart nginx
```

