package main

import (
	"html/template"
	"log"
	"net/http"
)

type indexPage struct {
	FeaturedPosts   []featuredPostData
	MostRecentPosts []mostRecentPostData
}

type featuredPostData struct {
	ImgModifier    string
	ButtonModifier string
	ButtonText     string	
	Title          string
	Subtitle       string
	AuthorImg      string
	Author         string
	PublishDate    string
}

type mostRecentPostData struct {
	PostImg     string
	Title       string
	Subtitle    string
	AuthorImg   string
	Author      string
	PublishDate string
}
 

func index(w http.ResponseWriter, r *http.Request) {
	ts, err := template.ParseFiles("pages/index.html") // Главная страница блога
	if err != nil {
		http.Error(w, "Internal Server Error", 500) // В случае ошибки парсинга - возвращаем 500
		log.Println(err.Error())                    // Используем стандартный логгер для вывода ошбики в консоль
		return                                      // Не забываем завершить выполнение ф-ии
	}

	data := indexPage{
		FeaturedPosts:   featuredPosts(),
		MostRecentPosts: mostRecentPosts(),
	}

	err = ts.Execute(w, data) // Заставляем шаблонизатор вывести шаблон в тело ответа
	if err != nil {
		http.Error(w, "Internal Server Error", 500)
		log.Println(err.Error())
		return
	}
}

func featuredPosts() []featuredPostData {
	return []featuredPostData{
		{
			ImgModifier:    "featured-post__img_the-road-ahead",
			ButtonModifier: "featured-post__button_none",
			ButtonText:     "",
			Title:          "The Road Ahead",
			Subtitle:       "The road ahead might be paved - it might not be.",
			AuthorImg:      "../static/img/face1.png",
			Author:         "Mat Vogels",
			PublishDate:    "September 25, 2015",
		},
		{
			ImgModifier:    "featured-post__img_from-top-down",
			ButtonModifier: "featured-post__button",
			ButtonText:     "Adventure",
			Title:          "From Top Down",
			Subtitle:       "Once a year, go someplace you've never been before.",
			AuthorImg:      "../static/img/face2.png",
			Author:         "William Wong",
			PublishDate:    "September 25, 2015",
		},
	}
}

 
func mostRecentPosts() []mostRecentPostData {
	return []mostRecentPostData{
		{
			PostImg:     "../static/img/image3.jpg",
			Title:       "Still Standing Tall",
			Subtitle:    "Life begins at the end of your comfort zone.",
			AuthorImg:   "../static/img/face2.png",
			Author:      "William Wong",
			PublishDate: "9/25/2015",
		},
		{
			PostImg:     "../static/img/image4.png",
			Title:       "Sunny Side Up",
			Subtitle:    "No place is ever as bad as they tell you it's going to be.",
			AuthorImg:   "../static/img/face1.png",
			Author:      "Mat Vogels",
			PublishDate: "9/25/2015",
		},
		{
			PostImg:     "../static/img/image5.png",
			Title:       "Water Falls",
			Subtitle:    "We travel not to escape life, but for life not to escape us.",
			AuthorImg:   "../static/img/face1.png",
			Author:      "Mat Vogels",
			PublishDate: "9/25/2015",
		},
		{
			PostImg:     "../static/img/image6.png",
			Title:       "Through the Mist",
			Subtitle:    "Travel makes you see what a tiny place you occupy in the world.",
			AuthorImg:   "../static/img/face2.png",
			Author:      "William Wong",
			PublishDate: "9/25/2015",
		},
		{
			PostImg:     "../static/img/image7.png",
			Title:       "Awaken Early",
			Subtitle:    "Not all those who wander are lost.",
			AuthorImg:   "../static/img/face1.png",
			Author:      "Mat Vogels",
			PublishDate: "9/25/2015",
		},
		{
			PostImg:     "../static/img/image8.png",
			Title:       "Try it Always",
			Subtitle:    "The world is a book, and those who do not travel read only one page.",
			AuthorImg:   "../static/img/face1.png",
			Author:      "Mat Vogels",
			PublishDate: "9/25/2015",
		},
	}	
}