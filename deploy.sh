npm run build
npm run export
rsync -au out/ root@64.225.14.81:/var/www/loserio.cloud
rsync -au loserio.cloud root@64.225.14.81:/etc/nginx/sites-available/
# ssh "ssh://root@64.225.14.81" ln -s /etc/nginx/sites-available/loserio.cloud /etc/nginx/sites-enabled/loserio.cloud
ssh "ssh://root@$LOSER_DO" sudo systemctl restart nginx

echo "https://loserio.cloud"