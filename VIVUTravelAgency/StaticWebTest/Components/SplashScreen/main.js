(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgupgZiMBciAAAIAxYCMhEmAPZI4tLqg");
	mask.setTransform(298.6,246.1);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003755").s().p("AmJIcQhohlgmizQgpjBAjkCQAkkEBUgRQAtgKAmAZQAkAXAMA4QgaCygNCfQgRC0AUBcQATBaA3AuQA1AtA4gMQBqgWCEh/QB1huAwhaIAPpPQgDgfAZgXQAYgXAkgHQAygLAiAOQAkANAKAvQgNDjgFDEQgFDDAVBjQANA6AVBEQAVBFAPApQAWBqhqAXQhDAOgageQgbgdgxiSQgxBKh7BcQh8BchzAZQgnAJglAAQh1AAhbhWg");
	this.shape.setTransform(489.7,206.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003755").s().p("AkqDoQjBmOgmixQgWhqBjgVQBhgVBdEAQBdEBCED3QBPiDBejOQCDkhBNkCIC+BSQhGEUjFGfQjSG3hSASIgHABQhPAAi7mAg");
	this.shape_1.setTransform(363.2,235.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003755").s().p("AgIMJQgmgWgJgtQgIglgGhuQgLlLgUnIQgJhUBggUQAsgKAeAXQAgAXAGAfQAMA1AGB0QAOFRAVGzQAFAogcAgQgdAegoAIQgJACgIAAQgaAAgZgPgAhaoSQgrgbgOhEQgOhAAfgqQAegsA1gMQBAgNAsAcQAuAaAOBAQAOBEghArQgfApg+ANQgSAEgSAAQgkAAgbgRg");
	this.shape_2.setTransform(269.8,235.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003755").s().p("AgaOLQi9mbi6meQhZithqi3Qi9lFgMg4QgMg4AbglQAcgnAsgJQAggHAgARQAfATAWAlQDEFKDKGPQB4DqB3ETQArBfApBgQETm6BhmWQBbl4gsmaQgKgyAegoQAeglAygLQAvgKAiAaQAhAbAPBHQBGFJh6HxQhpGtjAF6QjBF5h7AaIgGAAQgxAAhSiqg");
	this.shape_3.setTransform(140,232.4);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0.7,82.6,596.6,327), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1565C0").s().p("EgmOgGQMBNYgFJMhEmAPZIptHag");
	this.shape.setTransform(336.8,151.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#90CAF9").s().p("EgypgbtMBlTAKwMg3eAsrg");
	this.shape_1.setTransform(324.2,177.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2196F3").s().p("EgiMAExMBOHgQ6MhX1AYTg");
	this.shape_2.setTransform(367.2,146.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,648.3,354.8), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1976D2").s().p("A/FAAIhvomMBBpAImMhBpAIng");
	this.shape.setTransform(69.3,76.9,0.297,0.297,158);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#90CAF9").s().p("EgkFAItIBvopIhvomIBv2ZMBGcAe3MhG4AfAg");
	this.shape_1.setTransform(63.6,79.4,0.297,0.297,158);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,146.4,109.5), null);


// stage content:
(lib.main = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(742.9,-44.2,1,1,0,0,0,73.2,54.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:63.6,regY:79.4,scaleX:1.02,scaleY:1.02,x:723.3,y:-13.9},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:713.2,y:-8.3},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:703.2,y:-2.6},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:693.2,y:3},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:683.3,y:8.7},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:673.3,y:14.3},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:663.3,y:19.9},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:653.3,y:25.6},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:643.2,y:31.3},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:633.2,y:36.9},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:623.2,y:42.5},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:613.2,y:48.1},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:603.3,y:53.8},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:593.3,y:59.5},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:583.3,y:65.1},0).wait(1).to({scaleX:1.28,scaleY:1.28,x:573.3,y:70.7},0).wait(1).to({scaleX:1.3,scaleY:1.3,x:563.3,y:76.4},0).wait(1).to({scaleX:1.31,scaleY:1.31,x:553.2,y:82},0).wait(1).to({scaleX:1.33,scaleY:1.33,x:543.2,y:87.7},0).wait(1).to({scaleX:1.35,scaleY:1.35,x:533.3,y:93.3},0).wait(1).to({scaleX:1.37,scaleY:1.37,x:523.3,y:99},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:513.3,y:104.6},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:503.3,y:110.2},0).wait(1).to({scaleX:1.42,scaleY:1.42,x:493.3,y:115.8},0).wait(1).to({scaleX:1.44,scaleY:1.44,x:483.3,y:121.5},0).wait(1).to({scaleX:1.45,scaleY:1.45,x:473.2,y:127.1},0).wait(1).to({scaleX:1.47,scaleY:1.47,x:463.2,y:132.8},0).wait(1).to({scaleX:1.49,scaleY:1.49,x:453.3,y:138.4},0).wait(1).to({scaleX:1.5,scaleY:1.5,x:443.3,y:144},0).wait(1).to({scaleX:1.52,scaleY:1.52,x:433.3,y:149.7},0).wait(1).to({scaleX:1.54,scaleY:1.54,x:423.3,y:155.3},0).wait(1).to({scaleX:1.56,scaleY:1.56,x:413.3,y:161},0).wait(1).to({scaleX:1.57,scaleY:1.57,x:403.3,y:166.6},0).wait(1).to({scaleX:1.59,scaleY:1.59,x:393.3,y:172.3},0).wait(1).to({scaleX:1.61,scaleY:1.61,x:383.2,y:177.9},0).wait(1).to({scaleX:1.63,scaleY:1.63,x:373.3,y:183.5},0).wait(1).to({scaleX:1.64,scaleY:1.64,x:363.3,y:189.2},0).wait(1).to({scaleX:1.66,scaleY:1.66,x:353.3,y:194.9},0).wait(1).to({scaleX:1.68,scaleY:1.68,x:343.3,y:200.5},0).wait(1).to({scaleX:1.7,scaleY:1.7,x:333.3,y:206.1},0).wait(1).to({scaleX:1.71,scaleY:1.71,x:323.3,y:211.8},0).wait(1).to({scaleX:1.73,scaleY:1.73,x:313.3,y:217.4},0).wait(1).to({scaleX:1.71,scaleY:1.71,x:304.2,y:222},0).wait(1).to({scaleX:1.7,scaleY:1.7,x:295.2,y:226.6},0).wait(1).to({scaleX:1.68,scaleY:1.68,x:286.1,y:231.2},0).wait(1).to({scaleX:1.66,scaleY:1.66,x:277,y:235.7},0).wait(1).to({scaleX:1.65,scaleY:1.65,x:268,y:240.3},0).wait(1).to({scaleX:1.63,scaleY:1.63,x:259,y:244.9},0).wait(1).to({scaleX:1.61,scaleY:1.61,x:249.9,y:249.4},0).wait(1).to({scaleX:1.59,scaleY:1.59,x:240.9,y:254},0).wait(1).to({scaleX:1.58,scaleY:1.58,x:231.8,y:258.6},0).wait(1).to({scaleX:1.56,scaleY:1.56,x:222.7,y:263.2},0).wait(1).to({scaleX:1.54,scaleY:1.54,x:213.7,y:267.8},0).wait(1).to({scaleX:1.53,scaleY:1.53,x:204.7,y:272.4},0).wait(1).to({scaleX:1.51,scaleY:1.51,x:195.6,y:276.9},0).wait(1).to({scaleX:1.49,scaleY:1.49,x:186.5,y:281.5},0).wait(1).to({scaleX:1.47,scaleY:1.47,x:177.4,y:286.1},0).wait(1).to({scaleX:1.46,scaleY:1.46,x:168.4,y:290.6},0).wait(1).to({scaleX:1.44,scaleY:1.44,x:159.4,y:295.2},0).wait(1).to({scaleX:1.42,scaleY:1.42,x:150.3,y:299.8},0).wait(1).to({scaleX:1.41,scaleY:1.41,x:141.3,y:304.4},0).wait(1).to({scaleX:1.39,scaleY:1.39,x:132.2,y:309},0).wait(1).to({scaleX:1.37,scaleY:1.37,x:123.1,y:313.6},0).wait(1).to({scaleX:1.36,scaleY:1.36,x:114.1,y:318.1},0).wait(1).to({scaleX:1.34,scaleY:1.34,x:105.1,y:322.7},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:96,y:327.3},0).wait(1).to({scaleX:1.3,scaleY:1.3,x:86.9,y:331.8},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:78,y:336.4},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:68.9,y:341},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:59.8,y:345.6},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:50.8,y:350.2},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:41.7,y:354.8},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:32.7,y:359.3},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:23.6,y:363.9},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:14.6,y:368.5},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:5.5,y:373.1},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:-3.5,y:377.6},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:-12.6,y:382.2},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:-21.6,y:386.8},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:-30.7,y:391.4},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:-39.8,y:396},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:-48.8,y:400.5},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:-57.8,y:405.1},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:-66.9,y:409.7},0).wait(1).to({scaleX:1,scaleY:1,x:-76,y:414.3},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-85,y:418.8},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:-94.1,y:423.4},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:-103.1,y:428},0).to({_off:true},1).wait(54));

	// Layer 1
	this.instance_1 = new lib.ClipGroup();
	this.instance_1.parent = this;
	this.instance_1.setTransform(298.2,407.4,1,1,0,0,0,298.8,246);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(114).to({_off:false},0).wait(1).to({regX:302.7,regY:232.4,x:302.1,y:364.7,alpha:0.036},0).wait(1).to({y:337.8,alpha:0.071},0).wait(1).to({y:312.8,alpha:0.107},0).wait(1).to({y:289.7,alpha:0.143},0).wait(1).to({y:268.5,alpha:0.179},0).wait(1).to({y:249.1,alpha:0.214},0).wait(1).to({y:231.4,alpha:0.25},0).wait(1).to({y:215.2,alpha:0.286},0).wait(1).to({y:200.6,alpha:0.321},0).wait(1).to({y:187.5,alpha:0.357},0).wait(1).to({y:175.7,alpha:0.393},0).wait(1).to({y:165.3,alpha:0.429},0).wait(1).to({y:156,alpha:0.464},0).wait(1).to({y:148,alpha:0.5},0).wait(1).to({y:141,alpha:0.536},0).wait(1).to({y:135,alpha:0.571},0).wait(1).to({y:129.9,alpha:0.607},0).wait(1).to({y:125.7,alpha:0.643},0).wait(1).to({y:122.2,alpha:0.679},0).wait(1).to({y:119.4,alpha:0.714},0).wait(1).to({y:117.2,alpha:0.75},0).wait(1).to({y:115.6,alpha:0.786},0).wait(1).to({y:114.5,alpha:0.821},0).wait(1).to({y:113.7,alpha:0.857},0).wait(1).to({y:113.2,alpha:0.893},0).wait(1).to({y:113,alpha:0.929},0).wait(1).to({y:112.8,alpha:0.964},0).wait(1).to({alpha:1},0).wait(1));

	// Layer 2
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-59.5,464.6,0.391,0.391,0,0,0,323.2,177.3);
	this.instance_2._off = true;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1565C0").s().p("EgmOgGQMBNYgFJMhEmAPZIptHag");
	this.shape.setTransform(346,190.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#90CAF9").s().p("EgypgbtMBlTAKwMg3eAsrg");
	this.shape_1.setTransform(333.4,216.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2196F3").s().p("EgiMAExMBOHgQ6MhX1AYTg");
	this.shape_2.setTransform(376.4,185.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},89).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(89).to({_off:false},0).wait(1).to({regX:324.1,regY:177.4,scaleX:0.42,scaleY:0.42,x:-42.8,y:454.3},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:-26.4,y:443.9},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:-10,y:433.6},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:6.4,y:423.3},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:22.8,y:413},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:39.2,y:402.6},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:55.6,y:392.3},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:72,y:382},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:88.4,y:371.6},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:104.8,y:361.3},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:121.2,y:351},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:137.5,y:340.6},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:154,y:330.3},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:170.3,y:320},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:186.8,y:309.7},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:203.1,y:299.3},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:219.6,y:289},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:235.9,y:278.7},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:252.3,y:268.3},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:268.7,y:258},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:285.1,y:247.7},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:301.5,y:237.4},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:317.9,y:227},0).wait(1).to({scaleX:1,scaleY:1,x:334.3,y:216.7},0).to({_off:true},1).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1001.2,101,146.4,109.5);
// library properties:
lib.properties = {
	id: 'A6A8A69ECF761A43A9D93E1328BCDA9A',
	width: 663,
	height: 400,
	fps: 50,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['A6A8A69ECF761A43A9D93E1328BCDA9A'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;