#------------------------------------------------------------------------------
#  SYSTEM CONFIGURATION SECTION
#------------------------------------------------------------------------------
export MY_UID ?=$(shell id -u)
export MY_GID ?=www-data
export PROJECT_ROOT ?= $(shell pwd)
export DOCKER_COMPOSE_ROOT ?= $(shell pwd)/config/docker
export PROJECT_NAME = vuejstest

# Docker compose configurations
COMPOSE_FILE ?= $(DOCKER_COMPOSE_ROOT)/docker-compose-local.yml
COMPOSE_BIN ?= docker-compose -f $(COMPOSE_FILE) -p $(PROJECT_NAME)


#------------------------------------------------------------------------------
#   CONTAINER MANAGMENT
#------------------------------------------------------------------------------

build:
	docker-compose -f $(COMPOSE_FILE) build

up:
	$(COMPOSE_BIN) pull
	$(COMPOSE_BIN) up -d --force-recreate

clean:
	$(COMPOSE_BIN) down -v
