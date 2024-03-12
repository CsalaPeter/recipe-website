package models

import (
	"gorm.io/driver/postgres"

	"gorm.io/gorm"
)

var DB * gorm.DB

func ConnectDatabase(){
	connectionData := "host=localhost port=5432 user=root password=password dbname=recipesDB sslmode=disable"
	database, err := gorm.Open(postgres.Open(connectionData), &gorm.Config{})

	if err != nil {
		panic("Failed to connect to database!")
	}

	DB = database
}