package models

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Name string `json:"user_name"`
	Email string `gorm:"unique" json:"email"`
	Password string `json:"password"`
	Role string `json:"role"`
}