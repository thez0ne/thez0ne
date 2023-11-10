#!/bin/sh

#Set the value of variable
container=$DB_CONTAINER
database=$DB_NAME
username=$DB_USER
password=$DB_PASSWORD

echo "Cleaning up old messages..."
psql postgresql://$username:$password@$container:5432/$database -c "DELETE FROM \"Message\" WHERE \"sentAt\" < NOW() - INTERVAL '1 day'"
