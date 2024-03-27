package initializers

import "owl/server/models"

func SyncDatabase(){
	DB.AutoMigrate(&models.User{})
}