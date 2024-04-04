package middleware

import (
	"fmt"
	"net/http"
	"os"
	"owl/server/initializers"
	"owl/server/models"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
)

func RequireAuth(c *gin.Context) {

	tokenString, err := c.Cookie("Authorization")

	if err != nil {
		fmt.Println("Token missing in cookie")
		fmt.Println(err)
		c.AbortWithStatus(http.StatusUnauthorized)
		return
	}

	token, err := verifyToken(tokenString)
	if err != nil {
		c.AbortWithStatus(http.StatusUnauthorized)
		return
	}

	if claims, ok := token.Claims.(jwt.MapClaims); ok{
		if float64(time.Now().Unix()) > claims["exp"].(float64) {
			c.AbortWithStatus(http.StatusUnauthorized)
		}

		var user models.User
		initializers.DB.First(&user, claims["sub"])

		if user.ID == 0 {
			c.AbortWithStatus(http.StatusUnauthorized)
			return
		}

		c.Set("user", user)
		
		c.Next()
	} else {
		c.AbortWithStatus(http.StatusUnauthorized)
	}

}

func verifyToken(tokenString string) (*jwt.Token, error){
	token, err := jwt.Parse(tokenString, func(t *jwt.Token) (interface{}, error) {
		return []byte(os.Getenv("KEY")), nil
	})

		if err != nil {
			return nil, err
		}
	
		if !token.Valid {
			return nil, fmt.Errorf("invalid token")
		}

		return token, nil
}