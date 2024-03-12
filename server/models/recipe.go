package models

type Recipe struct {
	ID uint `json:"id" gorm:"primary_key"`
	RecipeName string `json:"recipe_name"`
	Img string `json:"img"`
	Prep uint `json:"prep"`
	Cook uint `json:"cook"`
	Diff string `json:"diff"`
	Serv uint16 `json:"serv"`
	ShortDesc string `json:"short_desc"`
	Kcal uint `json:"kcal"`
	Fat uint `json:"fat"`
	Carbs uint `json:"carbs"`
	Fiber uint `json:"fiber"`
	Protein uint `json:"protein"`
	Ingredients string `json:"ingredients"`
	Steps string `json:"steps"`
}