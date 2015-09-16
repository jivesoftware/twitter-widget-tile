(function() {
    jive.tile.onOpen(function(config, options ) {
        gadgets.window.adjustHeight();
        
        if (config === null) config = {};
        if ( typeof config === "string" ) {
            config = JSON.parse(config);
        }
        
        // config will initially be empty, this defaults to load the @jivedev twitter feed
        // the data-widget-id must be a string since the length exceeds JS' floating point precision
        var json = $.isEmptyObject(config["data"]) ? { "id": "643568438426734592", "height" : 300 } : config["data"];
        console.log(json);
        // populate the input dialog with config data
        $("#twitterID").val( json["id"]);
        $("#tileHeight").val( json["height"]);

        // store the updated values into config on button click
        $("#btn_submit").click( function() {
            config["data"] = { 
                "id" : $("#twitterID").val(),
                "height" : $("#tileHeight").val()
            }
            // send config to service
            jive.tile.close(config, {} );

            gadgets.window.adjustHeight(300);
        });
    });

})();

