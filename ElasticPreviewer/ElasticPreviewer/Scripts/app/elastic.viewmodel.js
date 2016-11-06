function ElasticViewModel(app, dataModel) {
    var self = this;


    self.server = ko.observable("http://localhost:9200/");
    self.searchQuery = ko.observable('{ "query": { "match_all": {} } }');
    self.result = ko.observable("");

    self.doSearch = function () {
       var elasticSearchData = { server: self.server(), searchQuery: self.searchQuery() };
        $.ajax({
            method: 'post',
            data: JSON.stringify(elasticSearchData),
            url: app.dataModel.elasticUrl,
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                    self.result(data.result);
                }
            });
    };


    //Sammy(function () {
    //    this.get('#elastic', function () {
    //        $.ajax({
    //            method: 'post',
    //            url: app.dataModel.elasticUrl,
    //            contentType: "application/json; charset=utf-8",
    //            success: function (data) {
    //                self.result(data.result);
    //            }
    //        });
    //    });
    //    this.get('/', function () { this.app.runRoute('get', '#elastic') });
    //});

    return self;
}

app.addViewModel({
    name: "Elastic",
    bindingMemberName: "elastic",
    factory: ElasticViewModel
});
