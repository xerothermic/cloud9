define(function(require, exports, module) {

var ide = require("core/ide");
var ext = require("core/ext");
var util = require("core/util");
var console = require("ext/console/console");
var editors = require("ext/editors/editors");
//var Range = require("ace/range").Range;
var markup = require("text!ext/gallag/gallag.xml");
        
return ext.register("ext/gallag/gallag", {
    name     : "Gallag Extension",
    dev      : "Megan Kearl, Patrick Lu",
    alone    : true,
    type     : ext.GENERAL,
    markup   : markup,
    commands  : {
        "gallag": {hint: "Gallag stands for Game as Life, Life as Game"},
        "python": {hint: "The python interpreter"}
    },
    hotitems : {},
    
    nodes : [],
    
    gallagFunc : function(){
     console.write("Hello again");   
    },
    
    hook : function(){
        var _self = this;
        this.nodes.push(
            //console.panel.appendChild(gallagbox)
           // tabConsole.add("Hello", "Sup");
        );
        this.hotitems["gallag"] = [this.nodes[0]];
        console.write("hello from gallag extension");
        tabConsole.add("GallagBox", "gallagPage");
        gallagPage.appendChild(
            new apf.button({
              tooltip  : "This button is clickable",
              width    : "250",
              color    : "red",
              caption    : "Button",
              id       : "gBtn",
              onclick  : function(){_self.gallagFunc();}
              //onclick  : alert('Hello out there!')
            })
            );
            
        gallagPage.appendChild(
            new apf.button({
                tooltip  : "This button is clickable",
                  width    : "250",
                  color    : "blue",
                  caption    : "Button",
                  id       : "gBtn",
                  onclick  : function(){_self.gallagFunc();}
                  //onclick  : alert('Hello out there!')
                })
                );
        
        /*
        //comment out this now, as it appears in a weird position!?
        gallagPage.appendChild(
            new apf.vbox({
              htmlNode   : document.body,
              height     : 390,
              width      : 320,
              childNodes : [
                new apf.browser({
                    src      : "http://tinyurl.com/5scm7u8",
                    width    : 390,
                    height   : 295
                }),
                new apf.button({
                  height : 24,
                  edge   : 5,
                  data   : "Button 1"
                }),
                new apf.button({
                  height : 24,
                  edge   : 5,
                  data   : "Button 2"
                })
              ]
            }));
            */
        
        //comments out this, as it uses a lot of resource :P
       /* gallagPage.appendChild(
            new apf.browser({
              src      : "http://tinyurl.com/5scm7u8",
              width    : 390,
              height   : 295
            }));
        gallagPage.appendChild(
            new apf.browser({
              src      : "http://tinyurl.com/5scm7u8",
              width    : 390,
              height   : 295
            }));*/
    },
    
    init : function(){},
    
    enable : function(){
        this.nodes.each(function(item){
            item.enable();
        });
    },
    
    disable : function(){
        this.nodes.each(function(item){
            item.disable();
        });
    },
    
    destroy : function(){
        this.nodes.each(function(item){
            item.destroy(true, true);
        });
        this.nodes = [];
        this.gallagbox.destroy(true, true);
    }
});

    }
);
