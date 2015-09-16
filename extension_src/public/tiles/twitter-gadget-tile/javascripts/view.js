/* global jive */
jive.tile.onOpen(function(config, options) {
    //Adds properties for twitter widget
    console.log(JSON.stringify(config),options);
    $(function(){
        console.log("Ready");
        $("#tweets").attr({'data-widget-id' : config["id"], 'height' : config["height"]});
        
        //Calls the twitter widget.js and creates the elements for feed list
        window.twttr = (function(d, s, id) {
            console.log("window.twitter");
            var js, fjs = d.getElementsByTagName(s)[0],
                t = window.twttr || {};
            if (d.getElementById(id)) return t;
            js = d.createElement(s);
            js.id = id;
            js.src = "https://platform.twitter.com/widgets.js";
            fjs.parentNode.insertBefore(js, fjs);
            
            t._e = [];
            t.ready = function(f) {
                t._e.push(f);
            };
    
            return t;
        }(document, "script", "twitter-wjs"));
    
        twttr.ready(function (twttr) {
            console.log("Twitter ready");
            twttr.events.bind('rendered', function(){
                console.log("Twitter rendered");
                gadgets.window.adjustHeight();
            });
        });
    });
});