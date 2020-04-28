npm run build
npm run export
rsync -au out/ root@64.225.14.81:/var/www/loserio.cloud
rsync -au loserio.cloud root@64.225.14.81:/etc/nginx/sites-available/
ssh "ssh://root@$LOSER_DO" sudo systemctl restart nginx

echo "https://loserio.cloud"