_default:
  @just --list --unsorted

linux-docker-up:
    #Starting database
    sudo docker compose up database -d --build

linux-docker-down:
    #Stoping database
    sudo docker compose down
