package main

import (
	"github.com/gin-gonic/gin"

	"owl/server/initializers"
	"owl/server/routes"
)

func init(){
	initializers.LoadEnv()
	initializers.ConnectDatabase()
	initializers.SyncDatabase()
}

func main() {
	router := gin.Default()

	routes.Routes(router)

	router.Run()
}