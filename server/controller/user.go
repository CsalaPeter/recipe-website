package controller

import (
	"net/http"
	"os"
	"owl/server/initializers"
	"owl/server/models"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
	"golang.org/x/crypto/bcrypt"
)

var body struct {
	Name string
	Email string
	Password string
}

func Register(c *gin.Context){

	if c.Bind(&body) != nil {
		c.JSON(400, gin.H{
			"error": "Faild to read body!",
		})
		return
	}

	//Hash the password
	hash, err := bcrypt.GenerateFromPassword([]byte(body.Password), 10)

	if err != nil {
		c.JSON(400, gin.H{
			"error": "Faild to hash password!",
		})
		return
	}

	user := models.User{Name: body.Name, Email: body.Email, Password: string(hash)}
	result := initializers.DB.Create(&user)

	if result.Error != nil {
		c.JSON(400, gin.H{
			"error": "Faild to create User!",
		})
		return
	}

	c.JSON(200, gin.H{})
	

}

func Login(c *gin.Context){

	if c.Bind(&body) != nil {
		c.JSON(400, gin.H{
			"error": "Faild to read body!",
		})
		return
	}

	var user models.User
	initializers.DB.First(&user, "email = ?", body.Email)

	if user.ID == 0 {
		c.JSON(400, gin.H{
			"error": "Invalid email or password!",
		})

		return
	}

	err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(body.Password))

	if err != nil {
		c.JSON(400, gin.H{
			"error": "Invalid password!",
		})

		return
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"sub": user.ID,
		"exp": time.Now().Add(time.Hour * 24 * 30).Unix(),
	})

	tokenString, err := token.SignedString([]byte(os.Getenv("KEY")))

	if err != nil {
		c.JSON(400, gin.H{
			"error": "Faild to create token!",
		})

		return
	}

	c.SetSameSite(http.SameSiteLaxMode)
	c.SetCookie("Authorization", tokenString, 3600 * 24 * 30, "", "", false, true)

	c.JSON(200, gin.H{
	})
}