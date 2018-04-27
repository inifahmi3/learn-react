const ArticleAPI = {
    articles: [
        {
            id: 1,
            date: "2018/05/28",
            title: "Test",
            description: "Enthusiastically build high standards in e-services without alternative manufactured products. Dramatically evisculate next-generation deliverables before e-business growth strategies. Interactively fabricate business content for diverse benefits. Monotonectally leverage other's synergistic services and worldwide alignments. Holisticly conceptualize maintainable infomediaries rather than frictionless solutions."
        },
        {
            id: 2,
            date: "2018/05/29",
            title: "Test",
            description: "Enthusiastically build high standards in e-services without alternative manufactured products. Dramatically evisculate next-generation deliverables before e-business growth strategies. Interactively fabricate business content for diverse benefits. Monotonectally leverage other's synergistic services and worldwide alignments. Holisticly conceptualize maintainable infomediaries rather than frictionless solutions."
        },
        {
            id: 3,
            date: "2018/05/30",
            title: "Test",
            description: "Enthusiastically build high standards in e-services without alternative manufactured products. Dramatically evisculate next-generation deliverables before e-business growth strategies. Interactively fabricate business content for diverse benefits. Monotonectally leverage other's synergistic services and worldwide alignments. Holisticly conceptualize maintainable infomediaries rather than frictionless solutions."
        },
    ],
    all: function() {return this.articles},
    get: function(id) {
        const isArticle = p => p.id === id
        return this.articles.find(isArticle)
    }
}

export default ArticleAPI