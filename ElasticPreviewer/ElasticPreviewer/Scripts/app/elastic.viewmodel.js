function ElasticViewModel(app, dataModel) {
    var self = this;

    self.result = ko.observable("");


    Sammy(function () {
        this.get('#elastic', function () {
            $.ajax({
                method: 'post',
                url: app.dataModel.elasticUrl,
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    self.result(data.result);
                }
            });
        });
        this.get('/', function () { this.app.runRoute('get', '#elastic') });
    });

    return self;
}

app.addViewModel({
    name: "Elastic",
    bindingMemberName: "elastic",
    factory: ElasticViewModel
});
