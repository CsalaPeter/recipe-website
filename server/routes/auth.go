package routes

import (
	"owl/server/controller"

	"github.com/gin-gonic/gin"
)

	func AuthRoutes(r *gin.Engine){
		r.GET("/api/", controller.GetRecipes)
		r.GET("/api/recipe/:id", controller.GetRecipe)
		r.GET("/api/search/:text", controller.GetSearch)
		r.POST("/api/register", controller.Register)
		r.POST("/api/login", controller.Login)
	}