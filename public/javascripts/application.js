var SCM = {
  CONSUMER_KEY: 'jwtest',
  extractLocation: function(){
    return window.location.pathname;
    //return window.location.hash.substring(2);
  },
  
  getResource: function(resource, callback){
    $.getJSON('http://api.soundcloud.com/resolve?consumer_key=' + SCM.CONSUMER_KEY + '&callback=?&format=json&url=' + encodeURIComponent('http://soundcloud.com' + resource), callback);
  }
  
};

$(function(){
  var location = SCM.extractLocation();
  var parsedLocation = location.match(/\/([\w]*)(\/([\w]*))?/);

  if(parsedLocation[3]){
    renderTrackPage(location);
  }else{
    renderUserPage(location);
  }
});

function renderUserPage(l) {
  SCM.getResource(l, function(r){
    $.getJSON(r.uri + "/tracks?consumer_key=" + SCM.CONSUMER_KEY,function(tracks) {
      var o = {};
      o.tracks = tracks;
      $("#tracks-tmpl")
        .tmpl(o)
        .delegate('li','click',function() {
          playTrack($.tmplItem(this).data);
        })
        .appendTo("body");
    });
    
    $( "#user-tmpl" )
      .tmpl(r)
      .appendTo("body");
      
  });  
}

function renderTrackPage(l) {
  SCM.getResource(l, function(r){
        
    $( "#track-tmpl" )
      .tmpl( r )
      .appendTo( "body" );
  });  
}

var aud = new Audio;

function playTrack(t) {
  aud.src = '';
  aud.load();
  aud.src = t.stream_url + "?consumer_key=" + SCM.CONSUMER_KEY;
  aud.load();
  aud.play();
}