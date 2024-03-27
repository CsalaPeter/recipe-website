package initializers

import (
	"os"

	"gorm.io/driver/postgres"

	"gorm.io/gorm"
)

var DB * gorm.DB

func ConnectDatabase(){
	connectionData := os.Getenv("DB")
	database, err := gorm.Open(postgres.Open(connectionData), &gorm.Config{})

	if err != nil {
		panic("Failed to connect to database!")
	}

	DB = database
}