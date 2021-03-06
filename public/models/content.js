var Content = function(info){
  this.location = info.location;
  this.activity = info.activity;
  this.goal_date = info.goal_date;
  this.completed = info.completed;
  this.listId = info.listId;
  this.id = info.id
}
Content.fetch = function() {
  var url = "/contents";
  var request = $.getJSON(url)
  .then(function(response){

    var contents = [];
    for(var i = 0; i < response.length; i++){
      contents.push(new Content(response[i]));
    }
    return contents;
   })
  .fail(function(repsonse){
    console.log("js failed to load");
  });
  return request;
};

Content.create = function(contentData) {
  var url = "/contents";
  var request = $.ajax({
    url: url,
    method: "post",
    data: JSON.stringify(contentData),
    contentType : 'application/json'
  }).then(function(contentData) {
    return new Content(contentData);
  });
  return request;
};

  Content.update = function(contentData) {
    console.log(this.Content)
    var url = "/contents/15";
    var request = $.ajax({
      url: url,
      method: "put",
      data: JSON.stringify(contentData),
      contentType : 'application/json'
    })
    return request;
  }

  Content.delete = function(){
    var url = "/contents/" ;
    var request = $.ajax( {url: url, method: "delete"});
    return request;
  }
