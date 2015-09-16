(function() {
    jive.tile.onOpen(function(config, options ) {
        gadgets.window.adjustHeight();
        
        if (config === null) config = {};
        if ( typeof config === "string" ) {
            config = JSON.parse(config);
        }
        
        // config will initially be empty, this defaults to load the @jivedev twitter feed
        var json = $.isEmptyObject(config["data"]) ? { "id": 643568438426734592, "height" : 300 } : config["data"];

        // populate the input dialog with config data
        $("#twitterID").val( json["id"]);
        $("#tileHeight").val( json["height"]);

        // store the updated values into config on button click
        $("#btn_submit").click( function() {
            config["data"] = { 
                "id" : $("#twitterID").val(),
                "height" : $("#tileHeight").val()
            }
console.log(JSON.stringify(config));
            // send config to service
            jive.tile.close(config, {} );

            gadgets.window.adjustHeight(300);
        });
    });

})();

