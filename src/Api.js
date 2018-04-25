const ArticleAPI = {
    articles: [
        {
            id: 1,
            date: "2018/05/28",
            title: "Test"
        },
        {
            id: 2,
            date: "2018/05/29",
            title: "Test"
        },
        {
            id: 3,
            date: "2018/05/30",
            title: "Test"
        },
    ],
    all: function() {return this.articles},
    get: function(id) {
        const isArticle = p => p.id === id
        return this.articles.find(isArticle)
    }
}

export default ArticleAPI