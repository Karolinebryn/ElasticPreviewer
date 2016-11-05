function ElasticViewModel(app, dataModel) {
    var self = this;

    self.result = ko.observable("");


    Sammy(function () {
        this.get('#home', function () {
            $.ajax({
                method: 'post',
                url: app.dataModel.elasticUrl,
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    self.result( data.result);
                }
            });
        });
        this.get('/', function () { this.app.runRoute('get', '#home') });
    });

    return self;
}

app.addViewModel({
    name: "Elastic",
    bindingMemberName: "home",
    factory: ElasticViewModel
});
