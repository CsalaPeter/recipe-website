package main

import (
	"github.com/gin-gonic/gin"

	"owl/server/controller"
	"owl/server/models"
)

func main() {
	models.ConnectDatabase()
	router := gin.Default()

	router.GET("/api/", controller.GetRecipes)
	router.GET("/api/recipe/:id", controller.GetRecipe)
	router.GET("/api/search/:text", controller.GetSearch)

	router.Run("localhost:3000")
}