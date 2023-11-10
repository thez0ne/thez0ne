#!/bin/sh

#Set the value of variable
container=$DB_CONTAINER
database=$DB_NAME
username=$DB_USER
password=$DB_PASSWORD

psql postgresql://$username:$password@$container:5432/$database -c "DELETE FROM \"Message\" WHERE \"sentAt\" < NOW() - INTERVAL '30 day'"
# echo "This is a script, run by cron!"
