package controller

import (
	"net/http"
	"owl/server/initializers"
	"owl/server/models"

	"github.com/gin-gonic/gin"
)

func GetRecipes(c *gin.Context){
	var recipes []models.Recipe
	initializers.DB.Find(&recipes)
	c.IndentedJSON(http.StatusOK, recipes)
}

func GetRecipe(c *gin.Context){
	var id = c.Param("id")
	var recipe []models.Recipe
	initializers.DB.First(&recipe, id)
	c.IndentedJSON(http.StatusOK, recipe)
}

func GetSearch(c *gin.Context){
	var text = c.Param("text")
	var recipes []models.Recipe
	initializers.DB.Where("recipe_name ILIKE ?", "%" + text + "%").Find(&recipes)
	c.IndentedJSON(http.StatusOK, recipes)
}

func PostRecipe(c *gin.Context){
	
}