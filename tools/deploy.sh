#!/bin/sh

echo "stop application"
ssh $PROD_USER@$PROD_HOST 'docker stop rodandthumb'
ssh $PROD_USER@$PROD_HOST 'docker rm rodandthumb'

echo "pull latest version"
ssh $PROD_USER@$PROD_HOST 'docker pull nokane/rodandthumb:latest'

echo "start new version"
ssh $PROD_USER@$PROD_HOST 'docker run -d --restart=always --name rodandthumb -p 3000:3000 nokane/rodandthumb:latest'

echo "started successfully"

exit 0