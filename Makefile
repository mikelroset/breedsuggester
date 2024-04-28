# Makefile

DOCKER_COMPOSE_FILE = docker-compose.yml
APP_CONTAINER_NAME = "breedsuggester-app-1"
MYSQL_CONTAINER_NAME = "breedsuggester-mysqldb-1"
MYSQL_VOLUME_NAME = "breedsuggester_db"

start:
	docker-compose -f $(DOCKER_COMPOSE_FILE) up -d

stop:
	docker-compose -f $(DOCKER_COMPOSE_FILE) down

restart:
	make stop
	make start

# ex. make reset-db SQL_FILE=/path/to/file.sql
reset-db:
	@make stop
	@if [ $$(docker volume ls -q) ]; then \
		docker volume rm $$(docker volume ls -q); \
	fi
	@if [ $$(docker volume ls -qf dangling=true) ]; then \
		docker volume rm $$(docker volume ls -qf dangling=true); \
	fi
	@make start
	@make import-db SQL_FILE=$(SQL_FILE)

# ex. make import-db SQL_FILE=/path/to/file.sql
import-db:
	docker exec -i $(MYSQL_CONTAINER_NAME) mysql -h localhost -u root -p$(shell docker-compose -f $(DOCKER_COMPOSE_FILE) exec -T mysqldb printenv MYSQL_ROOT_PASSWORD) $(shell docker-compose -f $(DOCKER_COMPOSE_FILE) exec -T mysqldb printenv MYSQL_DATABASE) < $(SQL_FILE)
