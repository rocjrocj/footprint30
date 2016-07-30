(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 960,
	height: 535,
	fps: 30,
	color: "#8EE4FF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/tread1.png", id:"tread1"},
		{src:"images/tread2.png", id:"tread2"},
		{src:"sounds/m_behind_bak.mp3", id:"m_behind_bak"},
		{src:"sounds/m_behind_forward.mp3", id:"m_behind_forward"},
		{src:"sounds/m_behind_rollover.mp3", id:"m_behind_rollover"},
		{src:"sounds/m_cardup.mp3", id:"m_cardup"},
		{src:"sounds/m_intro.mp3", id:"m_intro"},
		{src:"sounds/m_transition.mp3", id:"m_transition"},
		{src:"sounds/m_menu_rollover.mp3", id:"m_menu_rollover"},
		{src:"sounds/background_loop.mp3", id:"background_loop"}
	]
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.tread1 = function() {
	this.initialize(img.tread1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,592);


(lib.tread2 = function() {
	this.initialize(img.tread2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,67,596);


(lib.Tween24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC785C").s().p("AgjgsIBAAAIAHBWIg0ADg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.7,-4.5,7.4,9.1);


(lib.Tween23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC785C").s().p("AgjgsIBAAAIAHBWIg0ADg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.7,-4.5,7.4,9.1);


(lib.Tween22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC785C").s().p("AgbgtIAygGIAHBjIg7AEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.1,-5.2,6.2,10.5);


(lib.Tween21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC785C").s().p("AgbgtIAygGIAHBjIg7AEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.1,-5.2,6.2,10.5);


(lib.Tween20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC785C").s().p("AgqgiIAygNIAjBTIg/AMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,-4.8,8.7,9.6);


(lib.Tween19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC785C").s().p("AgqgiIAygNIAjBTIg/AMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,-4.8,8.7,9.6);


(lib.Tween18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC785C").s().p("Ag0gcIAkgZIBFBPIgzAcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.3,-5.4,10.6,10.8);


(lib.Tween17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC785C").s().p("Ag0gcIAkgZIBFBPIgzAcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.3,-5.4,10.6,10.8);


(lib.Tween16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC785C").s().p("AgtgaIAogYIAzBQIgfAVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.7,-5.1,9.4,10.4);


(lib.Tween15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC785C").s().p("AgtgaIAogYIAzBQIgfAVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.7,-5.1,9.4,10.4);


(lib.Tween14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC785C").s().p("Ag1gVIAugeIA9BFIg6Aig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.4,-5.2,11,10.5);


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC785C").s().p("Ag1gVIAugeIA9BFIg6Aig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.4,-5.2,11,10.5);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC785C").s().p("AgbAeIAXhNIAgAKIgNBVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.8,-4.8,5.8,9.6);


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC785C").s().p("AgbAeIAXhNIAgAKIgNBVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.8,-4.8,5.8,9.6);


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC785C").s().p("AgrANIA+g9IAZAfIg0BCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.4,-4.9,9,9.9);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC785C").s().p("AgrANIA+g9IAZAfIg0BCg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.4,-4.9,9,9.9);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC785C").s().p("Ag1gVIAugeIA9BFIg6Aig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.4,-5.2,11,10.5);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC785C").s().p("Ag1gVIAugeIA9BFIg6Aig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.4,-5.2,11,10.5);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC785C").s().p("Ag0gcIAkgZIBFBPIgzAcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.3,-5.4,10.6,10.8);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC785C").s().p("Ag0gcIAkgZIBFBPIgzAcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.3,-5.4,10.6,10.8);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC785C").s().p("AgjgsIBAAAIAHBWIg0ADg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.7,-4.5,7.4,9.1);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC785C").s().p("AgjgsIBAAAIAHBWIg0ADg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.7,-4.5,7.4,9.1);


(lib.Symbol70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhpGcQAFgOBDiRQBykVhmm4QA/AVAYArQBvIHjDFag");
	mask.setTransform(0.3,0);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF87").s().p("Ag8FyIA8koIgYlbIgOiAIApApQB7IVh5DYQggANgSAAQgcAAANggg");
	this.shape.setTransform(-0.1,-15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFDE3F").s().p("AhpGcQAFgOBDiRQBykVhmm4QA/AVAYArQBvIHjDFag");
	this.shape_1.setTransform(0.3,0);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.3,-46.5,21.3,93.1);


(lib.Symbol50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgQgWIgKglIALAOQAPARAMAcQARAjgCAZQgKgoghgqg");
	mask.setTransform(0.1,0.3);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQgWIgKglIALAOQAPASANAbQAQAjgCAZQgKgoghgqg");
	this.shape.setTransform(-0.2,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B89745").s().p("AgQgWIgKglIALAOQAPARAMAcQARAjgCAZQgKgoghgqg");
	this.shape_1.setTransform(0.1,0.3);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.6,-5.7,5.6,12.2);


(lib.Symbol49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgLAAQAAgCALgBQALAAABADQAAAEgMAAQgLAAAAgEg");

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgYABQgNgJAhAAQAhAAgBAEIgBAEIgiAIIgBABQgGAAgKgIg");
	this.shape.setTransform(-1.4,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E6E6E6").s().p("AgLAAQAAgCALgBQALAAABADQAAAEgMAAQgLAAAAgEg");

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-0.5,2.5,1);


(lib.Symbol47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgQAAQgBgDARgBQAQgBABAFQAAAFgRAAIgDAAQgNAAAAgFg");

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AgQAAQgBgEARAAQAQgBABAFQAAAEgRABQgQAAAAgFg");
	this.shape.setTransform(0,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQAAQgBgDARgBQAQgBABAFQAAAFgRAAIgDAAQgNAAAAgFg");

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,-0.5,3.6,1.1);


(lib.Symbol46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag3AJQgYgEAAgFQAAgEAYgFQAXgEAgAAQAhAAAXAEQAYAFAAAEQAAAFgYAEQgXAFghAAQggAAgXgFg");

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgYABQgNgJAhAAQAhAAgBAEIgBAEIgiAIIgBABQgGAAgKgIg");
	this.shape.setTransform(-1.6,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(0.2,1,1).p("AANgEQAVgBAEAFQAEADgRADIg+gDIAPgIQAjACAAgBg");
	this.shape_1.setTransform(0.8,1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AglADIAPgIQAjACAAgBQAVgBAEAFQAEADgRADg");
	this.shape_2.setTransform(0.8,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E6E6E6").s().p("AgzAMQgWgFAAgHQAAgFAWgGQAWgFAdAAQAeAAAWAFQAWAGAAAFQAAAHgWAFQgWAFgeAAQgdAAgWgFg");
	this.shape_3.setTransform(0,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AgUAAIANgJIAPgCIANAPIgVAIg");
	this.shape_4.setTransform(-7.1,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("Ag3AJQgYgEAAgFQAAgEAYgFQAXgEAgAAQAhAAAXAEQAYAFAAAEQAAAFgYAEQgXAFghAAQggAAgXgFg");

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-1.4,16.1,2.9);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ACKCJIgpgEQgXgCglADQgrADgOAAQgnAAgcgFIgfgHQgUgFgMgBQgUgDgjAGQgmAGgRgBQgOgBgEgGIgBgIIAAgHIgJgSQgLgeApgjQANgMARgCQALgCAYACIARAEIAGACIADgDIACgEIAQgOIADgLQADgKAJgKIAPgSQAJgNAEgCQANgGAeAIQAQADAFADQANAFgCALIANAAQAIAAAFADIAFgOQAAgIAEgFQAGgIAOgJQAZgQAQASQAIgJANgJIAVgPIAIgHQAFgGAFgBQAUgJAaAQQAVANABAJIA6A1QAmAjACAzQADA7gwASIhDAWQgNADgRAAIgLAAg");

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#005300").s().p("AgECJIAAkRIAJAAIAAERg");
	this.shape.setTransform(28.7,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D7300").s().p("ACKCJIgpgEQgXgCglADQgrADgOAAQgnAAgcgFIgfgHQgUgFgMgBQgUgDgjAGQgmAGgRgBQgOgBgEgGIgBgIIAAgHIgJgSQgLgeApgjQANgMARgCQALgCAYACIARAEIAGACIADgDIACgEIAQgOIADgLQADgKAJgKIAPgSQAJgNAEgCQANgGAeAIQAQADAFADQANAFgCALIANAAQAIAAAFADIAFgOQAAgIAEgFQAGgIAOgJQAZgQAQASQAIgJANgJIAVgPIAIgHQAFgGAFgBQAUgJAaAQQAVANABAJIA6A1QAmAjACAzQADA7gwASIhDAWQgNADgRAAIgLAAg");

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.2,-13.8,58.4,27.6);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhYA4QgJgBgCgHQgCgHAIgFQgLgJAMgLQgCgIAWgOQAWgQADAIQABgHALAEIAPAIQAEgEgBgGIgBgLQABgRAVgGQAIgCANAAQATAAgCAIIAFgHQAIgDAIAOQADAEABAJQABAIADAEIACAAIAAADQAGgHAGAJIAHANIAFADIAEAFIgBAQIgDAaIgSACQgdAGgXgEIgXgEQgLgBgiAFQgUACgPAAIgMAAg");
	mask.setTransform(0,-0.1);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#308300").s().p("AgCA4IAAhvIAFAAIAABvg");
	this.shape.setTransform(-9.8,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#075D00").s().p("AhYA4QgJgBgCgHQgCgHAIgFQgLgJAMgLQgCgIAWgOQAWgQADAIQABgHALAEIAPAIQAEgEgBgGIgBgLQABgRAVgGQAIgCANAAQATAAgCAIIAFgHQAIgDAIAOQADAEABAJQABAIADAEIACAAIAAADQAGgHAGAJIAHANIAFADIAEAFIgBAQIgDAaIgSACQgdAGgXgEIgXgEQgLgBgiAFQgUACgPAAIgMAAg");
	this.shape_1.setTransform(0,-0.1);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.1,-5.7,20.3,11.4);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AghAzIgBgDIgKgBQgJgCgGgFQgGgHAEgIQgHgEgCgGQgCgHAIgEQgCgEAEgIQACgHAFABIALABIAAgEIAEgIIAFgDIADgHQACgDAJAAQgBgHAGABIAMADIAAgGQgBgDAEgCQALgKAEAOQAGgGAFAHIAGANQABgDAEgBIAHABQADABABAFIAAAHQAHAAABAIQAAABAAABQAAAAAAABQABAAAAABQAAAAAAAAIADgBQADAAACAEIACAHIAFAGQAAAHgIADIABAHQAAAFgEABQAAAFgDAAIgGABQgEACgCAGIgDAGQgDAEgJACIgMADIgMgBIgHgEIgFABIgFADQgFACgEAAQgHAAgGgGg");
	mask.setTransform(0,-0.1);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#187400").s().p("AgCA4IAAhvIAFAAIAABvg");
	this.shape.setTransform(6.8,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#308300").s().p("AghAzIgBgDIgKgBQgJgCgGgFQgGgHAEgIQgHgEgCgGQgCgHAIgEQgCgEAEgIQACgHAFABIALABIAAgEIAEgIIAFgDIADgHQACgDAJAAQgBgHAGABIAMADIAAgGQgBgDAEgCQALgKAEAOQAGgGAFAHIAGANQABgDAEgBIAHABQADABABAFIAAAHQAHAAABAIQAAABAAABQAAAAAAABQABAAAAABQAAAAAAAAIADgBQADAAACAEIACAHIAFAGQAAAHgIADIABAHQAAAFgEABQAAAFgDAAIgGABQgEACgCAGIgDAGQgDAEgJACIgMADIgMgBIgHgEIgFABIgFADQgFACgEAAQgHAAgGgGg");
	this.shape_1.setTransform(0,-0.1);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.2,-5.8,14.4,11.5);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgfA/QgXAGgHgIIgCgFIgBgEIgIgGIAAgFIgEgEIgJgNQgEgHADgJIAFgKQAHgNAHAGQAKgTABgEQACgSAKgFIAMAAIAFgEQAPgDACAKQAGgJALAAQgBgMAQACQANACAJAGIAGAHIAKAGQAFAEABAFQADAKgIAFIADAGQAGABAFAKIADAJIAFADQAGAIgBAJQgBAKgIAGIgGAEIgEAEIgCAIQAAAFgDADQgHAJgOgBIgXgDIgZAGIgJABQgLAAgGgJg");
	mask.setTransform(0,-0.1);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#187400").s().p("AgCBIIAAiPIAFAAIAACPg");
	this.shape.setTransform(8.6,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004E00").s().p("AgfA/QgXAGgHgIIgCgFIgBgEIgIgGIAAgFIgEgEIgJgNQgEgHADgJIAFgKQAHgNAHAGQAKgTABgEQACgSAKgFIAMAAIAFgEQAPgDACAKQAGgJALAAQgBgMAQACQANACAJAGIAGAHIAKAGQAFAEABAFQADAKgIAFIADAGQAGABAFAKIADAJIAFADQAGAIgBAJQgBAKgIAGIgGAEIgEAEIgCAIQAAAFgDADQgHAJgOgBIgXgDIgZAGIgJABQgLAAgGgJg");
	this.shape_1.setTransform(0,-0.1);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.8,-7.3,17.8,14.6);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAAA+Qg/gKgXAAQgpACgYAIIgLAEIgFAAQgGgTAOgMQAEgEAGgCIALgDIATgKQAQgCASAPQAHgNAQgFQAIgDAVgDQAQgCgDgKQgEgVAAgDQAFgUAMgFQAHgDAKAIQAKAGAFAJIADAHIgCAHIgEAIQgCAEACAFQAEALAMADIAIgUQAFgLALgHQAZgRgDAQIAIgPIAEgJQACgGAEgDQAOgJAPAPIAUAbIATAgQACAZgfATQgYAOgeAFQgNADgRAAQgZAAgggGg");

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#005B00","#004600"],[0,1],-16.9,0,16.9,0).s().p("AioBEIAAiHIFRAAIAACHg");
	this.shape.setTransform(0.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004600").s().p("AgCBEIAAiHIAFAAIAACHg");
	this.shape_1.setTransform(16.7,0);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.8,-6.8,33.9,13.6);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiJCNQgFgCgaADQgUADgKgMIgEgHIgHgDQgFgEABgIQgEgDgCgFIgCgLIgHgNQgEgMAJgUIAKgTIAAgPQACgSAOgSQAPgSAUgDQAGgBANACQANACAFgBIAHgEQAcgKAMAIQADACADALQABgKAMgHQAKgGALABQADgJAPgDQAQgCACAKQAAgDACgDIAFgGIAEgLQACgIAGgEIANgGQgEgKgIABIgHACIgJABQACgbArgHQAagEAIAAQAWAAAIAMQAPgKALADQAaAHADAUIgBALIAOAJQAIgEALAFQAKAEAHATIALAhQAGASgBARQgCAggeAVIgGAEIgDAHQgGAeghACIgbgBQgRAAgIAEQgJAFgLAMIgSAUQgLALgRgBQgJAAgVgGQghgLgaAHIgOAGQgRAHgSAAQgQAAgQgGg");

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#308300").s().p("AgCCSIAAkjIAFAAIAAEjg");
	this.shape.setTransform(-22.7,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B7E00").s().p("AiJCNQgFgCgaADQgUADgKgMIgEgHIgHgDQgFgEABgIQgEgDgCgFIgCgLIgHgNQgEgMAJgUIAKgTIAAgPQACgSAOgSQAPgSAUgDQAGgBANACQANACAFgBIAHgEQAcgKAMAIQADACADALQABgKAMgHQAKgGALABQADgJAPgDQAQgCACAKQAAgDACgDIAFgGIAEgLQACgIAGgEIANgGQgEgKgIABIgHACIgJABQACgbArgHQAagEAIAAQAWAAAIAMQAPgKALADQAaAHADAUIgBALIAOAJQAIgEALAFQAKAEAHATIALAhQAGASgBARQgCAggeAVIgGAEIgDAHQgGAeghACIgbgBQgRAAgIAEQgJAFgLAMIgSAUQgLALgRgBQgJAAgVgGQghgLgaAHIgOAGQgRAHgSAAQgQAAgQgGg");

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.1,-14.7,46.2,29.5);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AglBrQgQgBgxgHQgJgCgLADQgnAJgFgTQgDgLAHgKQAHgKALgEIgFgKQgCgGABgGQABgNAKgIQgEgJAMgIQALgJAKgCIAVACIAFgDQADgCADAAQAAgKAEgDQADgDAFAAIAHABQAKgCAEgOIAAgaQgBgNANgHQAKgGAMABQAMABAFAJQABgJAOgFQAMgEAKABQALABAKAKQAKAJACALQAEgGAHAFIAJAIQAFACACgDIAEgEQAMgFAKALQAKAKgBAMIAaAgQALAVgTAYQgMAPgUAAIgNgCQgJgBgDACQgFADgCALQgEAPgBADQgIAQgeALQgQAGgbAAg");

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#005300").s().p("AgCBtIAAjZIAFAAIAADZg");
	this.shape.setTransform(16.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B7E00").s().p("AglBrQgQgBgxgHQgJgCgLADQgnAJgFgTQgDgLAHgKQAHgKALgEIgFgKQgCgGABgGQABgNAKgIQgEgJAMgIQALgJAKgCIAVACIAFgDQADgCADAAQAAgKAEgDQADgDAFAAIAHABQAKgCAEgOIAAgaQgBgNANgHQAKgGAMABQAMABAFAJQABgJAOgFQAMgEAKABQALABAKAKQAKAJACALQAEgGAHAFIAJAIQAFACACgDIAEgEQAMgFAKALQAKAKgBAMIAaAgQALAVgTAYQgMAPgUAAIgNgCQgJgBgDACQgFADgCALQgEAPgBADQgIAQgeALQgQAGgbAAg");

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.8,-10.9,33.7,22);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiJCNQgFgCgaADQgUADgKgMIgEgHIgHgDQgFgEABgIQgEgDgCgFIgCgLIgHgNQgEgMAJgUIAKgTIAAgPQACgSAOgSQAPgSAUgDQAGgBANACQANACAFgBIAHgEQAcgKAMAIQADACADALQABgKAMgHQAKgGALABQADgJAPgDQAQgCACAKQAAgDACgDIAFgGIAEgLQACgIAGgEIANgGQgEgKgIABIgHACIgJABQACgbArgHQAagEAIAAQAWAAAIAMQAPgKALADQAbAHACAUIgBALIAOAJQAIgEALAFQAKAEAHATIALAhQAGASgBARQgCAggeAVIgGAEIgDAHQgGAeghACIgbgBQgRAAgIAEQgJAFgLAMIgSAUQgLALgRgBQgJAAgVgGQghgLgaAHIgOAGQgRAHgSAAQgQAAgQgGg");

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#005300").s().p("AgCCSIAAkjIAFAAIAAEjg");
	this.shape.setTransform(22.8,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#005300").s().p("AiJCNQgFgCgaADQgUADgKgMIgEgHIgHgDQgFgEABgIQgEgDgCgFIgCgLIgHgNQgEgMAJgUIAKgTIAAgPQACgSAOgSQAPgSAUgDQAGgBANACQANACAFgBIAHgEQAcgKAMAIQADACADALQABgKAMgHQAKgGALABQADgJAPgDQAQgCACAKQAAgDACgDIAFgGIAEgLQACgIAGgEIANgGQgEgKgIABIgHACIgJABQACgbArgHQAagEAIAAQAWAAAIAMQAPgKALADQAbAHACAUIgBALIAOAJQAIgEALAFQAKAEAHATIALAhQAGASgBARQgCAggeAVIgGAEIgDAHQgGAeghACIgbgBQgRAAgIAEQgJAFgLAMIgSAUQgLALgRgBQgJAAgVgGQghgLgaAHIgOAGQgRAHgSAAQgQAAgQgGg");

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.1,-14.7,46.2,29.5);


(lib.sq = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4C4C4C").s().p("AhCBDIAAiFICFAAIAACFg");
	this.shape.setTransform(6.8,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.5,13.5);


(lib.empty = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.but_invisible = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#479CB8").s().p("AkNEOIAAobIIbAAIAAIbg");
	this.shape.setTransform(27,27);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.but_close1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();
		*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.txtClose = new cjs.Text("", "16px 'franklin-gothic-urw'", "#CCCCCC");
	this.txtClose.name = "txtClose";
	this.txtClose.textAlign = "center";
	this.txtClose.lineHeight = 17;
	this.txtClose.lineWidth = 188;
	this.txtClose.setTransform(95.9,2);

	this.timeline.addTween(cjs.Tween.get(this.txtClose).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,191.7,23.4);


(lib.thenextone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{on:0});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(71,156,184,0.498)").s().p("AgthcIBbBcIhbBdg");
	this.shape.setTransform(46.7,21.4);

	this.txtMenuNext = new cjs.Text("", "14px 'franklin-gothic-urw'", "#479CB8");
	this.txtMenuNext.name = "txtMenuNext";
	this.txtMenuNext.textAlign = "right";
	this.txtMenuNext.lineHeight = 12;
	this.txtMenuNext.lineWidth = 33;
	this.txtMenuNext.setTransform(35.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txtMenuNext},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2,51.4,53);


(lib.thelastone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"on":0});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(71,156,184,0.498)").s().p("AguAAIBchcIAAC5g");
	this.shape.setTransform(4.7,21.4);

	this.txtMenuLast = new cjs.Text("", "14px 'franklin-gothic-urw'", "#479CB8");
	this.txtMenuLast.name = "txtMenuLast";
	this.txtMenuLast.lineHeight = 12;
	this.txtMenuLast.lineWidth = 33;
	this.txtMenuLast.setTransform(13.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txtMenuLast},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2,48.1,53);


(lib.menubutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.txtMenu = new cjs.Text("", "14px 'franklin-gothic-urw'", "#81BDD5");
	this.txtMenu.name = "txtMenu";
	this.txtMenu.textAlign = "center";
	this.txtMenu.lineHeight = 13;
	this.txtMenu.lineWidth = 58;
	this.txtMenu.setTransform(30.9,5.7);
	this.txtMenu.text = "MENU";

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("AkCCKQgWAAgOgOQgPgPAAgVIAAjhIJqAAIAADhQAAAVgOAPQgPAOgVAAg");
	this.shape.setTransform(31.1,13.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.txtMenu}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62.1,27.8);


(lib.menu_white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlCEcIAAo4IKFAAIAAI4g");
	this.shape.setTransform(32.4,28.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64.8,57);


(lib.youravg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EBC55E").s().p("AguAAIBchcIAAC5g");
	this.shape.setTransform(4.7,31.3);

	this.txtYourAvgOther = new cjs.Text("", "12px 'franklin-gothic-urw'", "#4C4C4C");
	this.txtYourAvgOther.name = "txtYourAvgOther";
	this.txtYourAvgOther.lineHeight = 10;
	this.txtYourAvgOther.lineWidth = 105;
	this.txtYourAvgOther.setTransform(21.4,32.1);

	this.txtYourAvg = new cjs.Text("", "26px 'franklin-gothic-urw'", "#4C4C4C");
	this.txtYourAvg.name = "txtYourAvg";
	this.txtYourAvg.lineHeight = 27;
	this.txtYourAvg.lineWidth = 108;
	this.txtYourAvg.setTransform(21.4,2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EBC55E").s().p("ApeE4IAApvIS9AAIAAJvg");
	this.shape_1.setTransform(13.3,31.3,1,1,0,0,0,-60.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.txtYourAvg},{t:this.txtYourAvgOther},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,134.8,69);


(lib.worldavg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.txtWorldAvgOther = new cjs.Text("", "12px 'franklin-gothic-urw'", "#479CB8");
	this.txtWorldAvgOther.name = "txtWorldAvgOther";
	this.txtWorldAvgOther.lineHeight = 10;
	this.txtWorldAvgOther.lineWidth = 111;
	this.txtWorldAvgOther.setTransform(20.4,33.2);

	this.txtWorldAvg = new cjs.Text("", "26px 'franklin-gothic-urw'", "#479CB8");
	this.txtWorldAvg.name = "txtWorldAvg";
	this.txtWorldAvg.lineHeight = 27;
	this.txtWorldAvg.lineWidth = 121;
	this.txtWorldAvg.setTransform(20.4,4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(71,156,184,0.498)").s().p("AguAAIBchcIAAC5g");
	this.shape.setTransform(4.7,30.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.txtWorldAvg},{t:this.txtWorldAvgOther}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,2,142.9,71);


(lib.usavg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.txtUSAvgOther = new cjs.Text("", "12px 'franklin-gothic-urw'", "#479CB8");
	this.txtUSAvgOther.name = "txtUSAvgOther";
	this.txtUSAvgOther.lineHeight = 10;
	this.txtUSAvgOther.lineWidth = 111;
	this.txtUSAvgOther.setTransform(20.4,33.2);

	this.txtUSAvg = new cjs.Text("", "26px 'franklin-gothic-urw'", "#479CB8");
	this.txtUSAvg.name = "txtUSAvg";
	this.txtUSAvg.lineHeight = 27;
	this.txtUSAvg.lineWidth = 119;
	this.txtUSAvg.setTransform(20.4,4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(71,156,184,0.498)").s().p("AguAAIBchdIAAC6g");
	this.shape.setTransform(4.7,30.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.txtUSAvg},{t:this.txtUSAvgOther}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,2,140.9,71);


(lib.japanavg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.txtJapanAvgOther = new cjs.Text("", "12px 'franklin-gothic-urw'", "#479CB8");
	this.txtJapanAvgOther.name = "txtJapanAvgOther";
	this.txtJapanAvgOther.lineHeight = 10;
	this.txtJapanAvgOther.lineWidth = 115;
	this.txtJapanAvgOther.setTransform(20.4,33.2);

	this.txtJapanAvg = new cjs.Text("", "26px 'franklin-gothic-urw'", "#479CB8");
	this.txtJapanAvg.name = "txtJapanAvg";
	this.txtJapanAvg.lineHeight = 27;
	this.txtJapanAvg.lineWidth = 121;
	this.txtJapanAvg.setTransform(20.4,4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(71,156,184,0.498)").s().p("AguAAIBchcIAAC5g");
	this.shape.setTransform(4.7,30.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.txtJapanAvg},{t:this.txtJapanAvgOther}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,2,142.9,70);


(lib.inputbak = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmtD6IAAnzINbAAIAAHzg");
	this.shape.setTransform(43,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,86,50);


(lib.but_enter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();
		*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.txtEnter = new cjs.Text("", "28px 'franklin-gothic-urw'", "#4C4C4C");
	this.txtEnter.name = "txtEnter";
	this.txtEnter.lineHeight = 30;
	this.txtEnter.lineWidth = 120;
	this.txtEnter.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.txtEnter).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,124,38);


(lib.water2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D7F5FF").s().p("EhLxApYMAAAhRnQNHCUIWgvQHogrIeAuQC8AQELAhIGzA3QD0AdC6ALQDoANDQgIQHogVHkiaQHTiUIOgCQDZAAD7AYQC4AREPAmIG9A/QD7AiC9AMQHrAgGGhdQFGhNIOB6MAAeBQDg");
	this.shape.setTransform(0,-264.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D7F5FF").s().p("EhLtApTIgEgxMAAAhQzQNFCTIXgsQGZghGxASQBcAEBeAGQC+ANEIAdIGkAxIAQACQDxAcC9AMIAoACQDNAMDEgFIBJgDQD5gMDwgsQDMglDOg9IA7gRQG9h5HpgJQArgBAsABQCzgBDKAPQC6AOEMAiIG+A4QD5AfC/ALQHnAfGLhUQFKhFIJB3IACANMAAeBP2Ig4AEg");
	this.shape_1.setTransform(0,-264.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D7F5FF").s().p("EhLqApPIgHguMAAAhQzQNDCRIYgoQGggeGpALQBcACBdAFQDAAIEGAbQDRAVDSAYIAQACQDvAaDAAOIAoACQDJAMDJgCIBJgCQD9gHDqgpQDQggDLg4IA9gQQG/hwHmgRIBWgCQC0gEDJALQC8AJEKAeQDeAYDgAaQD3AcDCALQHjAdGQhLQFPg9IDB1IAEAMMAAeBP2Ig0AIg");
	this.shape_2.setTransform(0,-263.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D7F5FF").s().p("EhLnApLIgKgqMAAAhQzQNBCPIaglQGmgbGfAEQBdAABdADQDBAFEEAXQDRATDTAXIARACQDrAZDEAOIAnADQDFAMDOACIBJgBQECgEDlgkQDQgcDLg0IA9gOQHChnHkgZIBVgDQCzgIDJAHQC/AFEHAaQDeAUDgAXQD1AZDFALQHfAbGVhBQFUg2H+BzIAFALMAAeBP3IgwALg");
	this.shape_3.setTransform(0,-263.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D7F5FF").s().p("EhLjApJIgOgnMAAAhQzQM+COIdgiQGrgZGYgCQBcgCBdABQDDABECAVQDRAQDUAWIAQABQDoAYDHAQIAoADQDAAMDTAFIBJAAQEGABDhggQDRgYDLgvIA8gNQHGheHfghIBWgFQC0gMDHAEQDBABEFAVQDeARDhAUQDzAXDHAJQHbAaGag4QFZguH4BwIAHAMMAAeBP3IgsAOg");
	this.shape_4.setTransform(0,-263.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D7F5FF").s().p("EhLgApIIgRgjMAAAhQ0QM8CMIegeQGygWGQgJQBbgEBdgBQDGgDD/ASQDRANDTAVIARACQDmAXDJAQIApADQC7ANDXAIIBKABQEJAFDdgcQDSgTDKgrIA9gMQHKhVHbgoIBWgHQCzgPDIAAQDCgEEDARQDdANDjASQDxAUDJAJQHXAYGegvQFfgmHyBuIAJALMAAeBP3IgpASg");
	this.shape_5.setTransform(0,-263.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D7F5FF").s().p("EhLdApIIgUggMAAAhQ0QM5CLIhgbIM/gkQBbgFBdgCQDIgID8APQDRALDUAUIARABIGwAoIAoADQC2ANDdALIBKACQEOAJDXgXQDUgPDJgmIA9gLQHNhMHZgwIBUgJQC1gTDFgEQDGgHEAAMQDeAKDiAPQDvARDMAIQHTAXGjgmQFkgeHsBrIALALMAAeBP3IglAWg");
	this.shape_6.setTransform(0,-263.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D7F5FF").s().p("EhLZApKIgYgdMAAAhQ0QM4CJIhgYQG+gRF/gXQBbgHBdgEQDKgLD6AMQDRAIDVATIAQABIGwAoIAoADQCyAODiAOIBKADQESANDSgTQDWgLDIghIA9gKQHRhDHVg3IBUgLQC0gXDGgIQDHgLD+AIQDdAGDjAMQDuAODOAIQHPAVGogcQFpgXHmBpIANAKMAAeBP4IgiAag");
	this.shape_7.setTransform(0,-263.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D7F5FF").s().p("EhLWApLIgbgaMAAAhQ0QM1CIIkgUQHDgPF4gdQBbgKBcgFQDLgPD5AIQDQAGDVASIARABQDdATDTAVIApADIGVAgIBJAEQEWAQDOgOQDXgHDHgcIA9gIQHUg7HSg/IBVgMQCzgbDFgLQDJgQD8AEQDeACDjAKQDrALDRAHQHLATGugSQFtgPHgBmIAPAKMAAeBP4IgeAdg");
	this.shape_8.setTransform(0,-263.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D7F5FF").s().p("EhLTApPIgegXMAAAhQ0QMzCFIlgQQHKgMFvgkQBagLBdgIQDNgSD2AFQDQADDWARIARABQDaASDWAVIAqAEIGVAjIBJAFQEaAVDJgKQDYgCDHgZIA9gGQHXgyHPhHIBUgNQC0gfDEgPQDLgUD7AAQDcgCDlAHIG8APQHIASGygKQFxgHHbBkIARAJMAAeBP5IgbAhg");
	this.shape_9.setTransform(0,-263.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D7F5FF").s().p("EhLPApTIgigTMAAAhQ0QMxCDIngNQHQgJFmgrQBbgNBdgJQDOgWD0ACQDQABDXAPIAQABQDYARDZAWIApAEIGVAnIBJAGQEfAZDEgGQDaACDGgUIA9gFQHbgpHLhOIBUgPQC0gjDDgTQDOgYD3gEQDdgGDlAEIG+AMQHCAQG4AAQF2AAHWBiIASAJMAAeBP4IgXAlg");
	this.shape_10.setTransform(0,-264.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D7F5FF").s().p("EhLMApZIglgQMAAAhQ0QMuCCIpgKQHWgHFfgyQBagOBcgLQDRgaDxgBQDRgCDWAOIARACQDVAPDcAYIApAEQCfAPD3AbIBJAHQEjAdDAgBQDaAGDGgPIA9gEQHeggHIhWIBUgRQC0gmDDgYQDQgbD0gJQDdgKDlACQDlADDaAGQG/AOG8AJQF7AIHPBgIAVAIMAAeBP5IgTAog");
	this.shape_11.setTransform(0,-265);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D7F5FF").s().p("EhLIApgIgpgNMAAAhQ1QMsCBIrgHQHcgEFXg4QBagRBbgMQDTgeDvgEQDQgFDXAOIARABQDSAODfAZIAqAEQCaAQD9AeIBIAIQEnAhC7ADQDcAKDFgKIA+gDQHhgXHEheIBUgSQC0gqDCgbQDSggDzgNQDbgNDngCQDiABDcAFQG7AMHCASQF/ARHKBdIAXAIMAAeBP5IgPAsg");
	this.shape_12.setTransform(0,-265.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D7F5FF").s().p("EhLFApnIgsgKMAAAhQ1QMqB/ItgDQHhgBFPhAQBagSBcgOQDUgiDtgHQDPgHDZAMIARABQDNANDkAaIApAEQCVARECAhIBKAJQEqAlC2AHQDeAPDEgGIA+gBQHkgPHBhlIBUgUQC0guDBgfQDUgkDwgRQDcgRDogEQDggCDeAEQG3ALHGAbQGFAZHFBaIAYAIMAAeBP5IgLAwg");
	this.shape_13.setTransform(0,-266.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D7F5FF").s().p("EhLCApuIgvgGMAAAhQ1QMoB9IvABQHnABFGhHQBagUBbgPQDXgmDqgLQDQgJDYALIARABQDMAMDmAbIAqAFQCQAQEHAlIBKAJQEvApCxAMQDfAUDDgCIA9AAQHogFG+huIBTgVQC1gyDBgjQDVgoDugVQDcgVDogGQDegGDiAEQGyAKHLAkQGKAgG/BYIAaAHMAAeBP6IgIAzg");
	this.shape_14.setTransform(0,-267.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D7F5FF").s().p("EhK/Ap2IgygDMAAAhQ1QMmB8IwADQHtAEE+hNQBagWBbgRQDYgqDpgNQDQgMDYAKIARABQDJAKDpAcIArAFQCLAREMAoIBJALQE0AtCsAQQDgAXDCADIA+ACQHsADG6h1QAqgLApgMQC0g1DBgnQDXgsDtgaQDbgYDpgKQDbgIDlAEQGuAHHQAuQGPAoG5BWIAcAGMAAeBP6IgEA3g");
	this.shape_15.setTransform(0,-267.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D7F5FF").s().p("EhLxAp+MAAAhQ1QXrDnKUizQHuiGIwAXQDdAKEQAjQCYAUFJA0QE3AxCoAUQEHAhDbAFQIdAOHbiXUAVrgG3Ag2AGbMAAeBQ1g");
	this.shape_16.setTransform(0,-268.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D7F5FF").s().p("EhLuAp2IgDgmMAAAhQMQMgBrJBARQGmAJEpg6IBSgTQFAhQFbgVQC+gLDFAHQCNAFCgAOQBdAIBjAMQBoAKCtAZIDLAbQEyArCtASQDEAXCuAJIBwAFQDDAFC9gOQDxgUDtg0QBPgSBMgWQCkgvCngkQDugyD9geQHug7IqAIQL5AFNTCyIAEBAMAAeBPzIgYABg");
	this.shape_17.setTransform(0,-267.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D7F5FF").s().p("EhLrApwIgGgkMAAAhQLQMXBcJMAaQGgAMEvg0IBUgRQFAhLFcgUQC+gLDEAFQCOAECeAMQBfAHBhAKQBrAJCpAVQBcAJBuAOQEvAlCxARQDEAUCuAJIBxAFQDBAGC+gMQDrgRD0guQBPgQBNgUQClgpClghQDwgtD8gdQHxg2IlgCQMHgPNBC6IAGA+MAAeBPyIgXADg");
	this.shape_18.setTransform(0,-267.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D7F5FF").s().p("EhLpApsIgIgiMAAAhQKQMNBLJXAkQGZARE3gwIBVgQQFAhEFcgUQC/gLDDAFQCPACCdALQBfAFBhAJQBvAGCjASQBdAHBuALQEqAgC2AOQDCATCwAJIBxAFQDAAGC/gJQDmgPD7gnQBPgOBMgSQCoglCigeQDzgnD4gaQH1gyIggMQMVgkMuDDIAKA8MAAeBPyIgVAEg");
	this.shape_19.setTransform(0,-266.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D7F5FF").s().p("EhLnApoIgKgfMAAAhQKQMDA8JjAuQGSAUE/gqIBVgPQFBg+FdgUQC+gKDDADQCQABCcAJQBfAEBgAHQBzAECeAPQBdAFBuAIQElAbC7AMQDBARCyAIIBwAFQDAAHDAgGQDggMEAghQBQgMBMgQQCrggCfgbQD0giD4gYQH3gtIcgWQMjg5MaDLIAOA6MAAeBPyIgTAFg");
	this.shape_20.setTransform(0,-266.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D7F5FF").s().p("EhLlApmIgMgdMAAAhQKQL6AtJuA3QGLAYFGglQAtgGAqgHQFAg5FdgSQDAgLDCACQCQABCbAGQBgADBfAGQB2ACCbALQBcACBtAHQEhAUDAALQDBAOCyAJIBwAFQC/AHDBgDQDbgKEHgaQBQgKBMgOIFJgzQD3gdD0gWQH8goIXghQMwhMMJDSIAQA5MAAeBPxIgSAHg");
	this.shape_21.setTransform(0,-266.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D7F5FF").s().p("EhLiApkIgPgaMAAAhQJQLxAdJ4BBQGEAcFOghIBYgLQFAgzFegSQDAgKDBAAQCRAACbAEQBgACBeAEQB5AACWAIQBdAABsAEQEdAPDGAIQC/ANCzAJIBxAFQC9AHDDgBQDVgHENgTQBQgJBMgMIFKgqQD4gYDzgTQH/glIRgqQM/hhL1DbIAUA3MAAeBPwIgRAIg");
	this.shape_22.setTransform(0,-266.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D7F5FF").s().p("EhLgApiIgRgYMAAAhQIQLmANKFBLQF9AgFWgcIBZgJQFAgtFegSQDBgKDAgBQCRgCCbADQBgAABdADQB9gDCRAGQBdgDBsACIHjAQIFyATIBxAFQC9AIDEACQDPgFETgNQBRgGBLgKQCygSCYgQIHrglQICgfIMg1QNNh1LiDjIAYA1MAAeBPvIgPAKg");
	this.shape_23.setTransform(0,-265.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D7F5FF").s().p("EhLdAphIgUgVMAAAhQIQLdgDKQBVQF2AjFegWIBagIQE/gnFfgSQDBgJDAgDQCSgCCZAAQBgAABdABQCAgFCNACQBegFBqAAQEUADDPAFIF0ARIBwAGQC9AIDEAEQDKgCEagHQBQgEBMgIQC0gMCWgOQD7gODvgPQIFgbIIg/QNaiJLRDrIAaAzMAAeBPvIgOALg");
	this.shape_24.setTransform(0,-265.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D7F5FF").s().p("EhLbApgIgWgTMAAAhQHQLUgTKbBeQFuAoFmgRIBagHQFBghFfgRQDCgJC+gEQCTgECYgBIC9gDQCEgGCHgBQBfgIBqgCQEQgCDTACQC9AHC3AIIBxAGQC6AJDGAGIHlABQBRgDBKgGQC4gHCTgLQD+gIDsgNQIJgXIChJQNpidK9DzIAeAxMAAeBPvIgMAMg");
	this.shape_25.setTransform(0,-265.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D7F5FF").s().p("EhLYApgIgZgRMAAAhQHQLKgiKnBoQFnArFtgLQAvgCAtgEQFAgbFggRQDCgJC/gFIEpgIIC9gFQCIgJCDgEQBegKBpgFQELgIDaABQC8AEC3AJIByAGIGAASIHlAJQBRAABLgEQC6gCCQgIQD/gDDsgLQIMgSH9hTQN2iyKrD7IAhAvMAAeBPvIgLAOg");
	this.shape_26.setTransform(0,-265.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D7F5FF").s().p("EhLWApfIgbgOMAAAhQGQLAgyKyBxQFhAwF1gHIBdgEQFAgVFggQQDCgJC+gHIEqgLIC7gIQCMgLB/gHQBegMBpgHQEGgODfgBQC7ACC4AJIByAFIGBAWQC4AFEtANQBSACBKgCQC8ACCOgEQECACDogJQIQgNH5hdQODjGKZEDIAkAtMAAeBPuIgJAPg");
	this.shape_27.setTransform(0,-265.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D7F5FF").s().p("EhLUApfIgdgMMAAAhQGQK3hBK8B7QFbAzF9gBIBdgDIKhgfIGAgRIEqgOIC7gLIEIgXQBggPBngJQECgTDjgEQC7ABC6AIIBxAGQC4AKDJAOQC0AIEyAUQBSADBKABQC/AHCLgBQEEAHDngGQISgKH0hnQOSjaKFELIAoArMAAeBPuIgIARg");
	this.shape_28.setTransform(0,-265.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D7F5FF").s().p("EhLRApfIgggKMAAAhQFQKthRLICFQFTA3GEADQAwABAwgBQE/gKFhgPIGAgSQCWgICUgJIC7gOQCTgPB0gOQBggRBmgLQD/gZDogGQC5gBC7AJIBxAGQC3AKDKARQCuAKE5AaQBTAGBKACQDBAMCIADQEGAMDlgEQIWgFHuhyQOgjuJzETQAWAUAVAWMAAeBPsIgHATg");
	this.shape_29.setTransform(0,-265.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D7F5FF").s().p("EhLOApeIgjgHMAAAhQFQKjhgLUCOQFMA7GMAJIBgABQE/gEFjgPQDDgIC8gLQCWgJCUgLIC5gQQCXgSBwgRQBggTBmgNQD5gfDugIQC4gDC8AIIByAGQC2ALDLATQCoANFAAhICcAMQDDARCHAGQEHARDjgCQIZgBHqh7QOukCJfEaQAYATAXAVMAAeBPsIgFAUg");
	this.shape_30.setTransform(0,-265.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D7F5FF").s().p("EhLNApeIgkgFMAAAhQEQKZhwLgCYQFFA/GUAOIBgACQFAACFigOQDFgIC7gMQCWgKCTgNIC6gTQCZgUBsgUQBggWBmgQQD1gkDygKQC3gFC9AIIByAHQC1ALDNAWQCiAPFGAoICcAQQDHAVCDAJQEJAWDhABQIdAEHkiGQO7kXJOEjQAZASAZAUMAAeBPsIgDAVg");
	this.shape_31.setTransform(0,-265.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D7F5FF").s().p("EhLKApeIgngCMAAAhQEQKQiALrCiQE9BDGcATQAwACAyABQE/AIFkgOQDEgHC6gOQCYgLCRgPQBlgLBVgLQCdgVBngYQBhgYBkgSQDxgqD3gLQC2gIC/AJIBxAGQC0AMDOAYQCdASFMAuICdAUQDIAaCBAMQELAcDgACQIgAJHfiQQPJkrI7ErQAbARAaATMAAeBPsIgCAWg");
	this.shape_32.setTransform(0,-265.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D7F5FF").s().p("EhLxApeMAAAhQDQKGiQL2CsQE3BHGjAYQFsAVGagQQFngOFBglQEngjCUgoQHviGI0AZQDgAJETAkQCYAUFSA1QE7AyCsAVQENAgDcAFQIkANHbiaQQKlPItFlMAAeBQDg");
	this.shape_33.setTransform(0,-265.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D7F5FF").s().p("EhKWApbIhagGMAAAhQDQKNh+LiCcIAKACIABAAQE6BBGgAXIABAAQCLAICTADQDYAFDqgGIAmAAIABAAQDMgGDAgOQCQgKCKgOQBOgIBEgJQC7gYBxgdQA9gPA+gOQG7hfHrAMIABAAIAwACQDMAGDzAcIADAAQCcARFLAxIACAAIBFAKQEAAmCcATIAHABIAiAEQDyAbDSAHIABAAIADAAQDjAHDYgUQDhgVDRg0QBFgQBDgVIAKgDQGBh1FAggQHbgtFXCuQAgAUAfAWIAEADMAAdBOoIgEBWg");
	this.shape_34.setTransform(0,-265.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D7F5FF").s().p("EhKcApXIhQgLIgEgBMAAAhQCQKYhtLWCPIAKACIABAAQE7A7GfAXIABAAQCLAHCTAEQDWAGDsgEIAnAAIABAAQDLgEDAgLQCSgICIgNQBPgHBDgIQC6gWBzgbQA9gPA/gNQG7haHqADIABAAIAwAAQDMACDyAYIAEAAQCgANFFAuIADAAIBFAJQD8AkCgASIAHABIAiAEQDwAcDVAIIABAAIAEABQDiAIDYgRQDjgSDPgvQBFgQBEgTIAJgCQGEhuE/giQHRgwFjCrQAfAVAcAXIAEAEMAAdBOoIgLBQg");
	this.shape_35.setTransform(0,-264.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D7F5FF").s().p("EhKiApUIhOgSMAAAhQCQKlhcLICDIAKABIABAAQE+A1GcAXIABAAQCMAHCSAFQDUAGDugBIAmAAIACAAQDKgCDCgJQCRgGCJgMQBOgGBEgHQC4gUB1gZQA+gOA+gMQG9hWHogHIABAAIAwAAQDNgDDwAUIAEAAQClAKFAAqIADAAIBEAJQD5AhClATIAHABIAiAEQDsAaDZALIABAAIAEAAQDiAKDXgOQDlgODOgsQBGgOBDgRIALgDQGDhlFAgmQHIgxFvCoQAcAWAbAYIADAEMAAdBOoIgQBLg");
	this.shape_36.setTransform(0,-264.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D7F5FF").s().p("EhKoApRIhIgYMAAAhQDQKwhKK8B2IAKABIABAAQFAAvGaAWIABAAQCMAICSAFQDSAGDxACIAmAAIABAAQDKAADBgGQCTgFCIgJQBOgGBEgGQC2gSB4gXIAAAAQA+gNA/gMQG+hRHlgQIABAAIAwgCQDNgHDwAQIADAAQCrAGE7AnIADAAIBEAIQD2AfCpATIAHABIAiADQDoAaDdANIABAAIADAAQDiAMDYgLQDmgLDOgnQBGgNBDgQIAKgDQGEhdFBgoQG/g0F5ClQAbAXAZAZIADAFMAAdBOoIgWBGg");
	this.shape_37.setTransform(0,-264.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D7F5FF").s().p("EhKtApNIhAgcIgDgCMAAAhQCQK7g5KvBpIAKABIABAAQFDApGYAWIABAAQCMAHCSAFQDQAIDzAEIAmABIABAAQDKABDCgDQCSgDCIgIQBOgFBEgFQC1gQB6gWIB9gWQG/hNHkgaIABAAIAwgCQDOgMDuAMIADgBQCwADE1AkIADAAIBFAHQDyAdCuASIAHABIAhAEQDlAZDgAPIABAAIAEAAQDiANDYgHQDogIDMgjQBGgLBEgPIAKgCQGFhWFBgrQG1g1GGChQAYAYAXAbIADAFMAAdBOoIgcBAg");
	this.shape_38.setTransform(0,-263.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D7F5FF").s().p("EhKzApKIg6giIgDgCMAAAhQCQLHgpKiBdIAKABIABAAQFGAjGVAVIABAAIEeANQDPAJD0AGIAmABIABAAQDKAEDCgBQCTgCCHgGQBOgEBFgFQCzgNB8gUIABAAIB8gVQHBhIHigjIABAAIAvgEQDPgRDtAIIAEAAQC0gBEwAhIADAAIBFAGIGhAtIAHABIAhAEQDhAZDkAQIABAAIAFABQDgAODZgEQDpgEDLggQBHgKBEgNIAKgCQGGhOFBguQGsg3GRCeQAWAZAVAcIADAGMAAdBOoIghA7g");
	this.shape_39.setTransform(0,-263.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D7F5FF").s().p("EhK4ApHIg1gnIgDgDMAAAhQCQLSgXKWBQIAKAAIABAAQFIAdGTAVIABAAIEeAOQDNAJD2AJIAmABIABAAQDKAGDCABQCUAACGgFQBPgCBEgEQCygMB/gSIB9gTQHChEHggtIABAAIAvgEQDPgVDsAEIAEgBQC5gEErAdIADAAIBFAGIGiArIAHABIAhADQDdAYDoATIABAAIAFAAQDgAQDZgBQDrgBDJgbQBHgJBFgMIAJgCQGHhFFCgxQGjg5GcCaQAUAbATAdIADAHMAAdBOnIgnA2g");
	this.shape_40.setTransform(0,-263.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D7F5FF").s().p("EhK+ApDIgwgsIgCgDMAAAhQDQLegGKJBEIAKAAIABAAQFKAXGRAVIABAAIEeAOIHEAVIAlACIABAAQDKAHDDAEQCUACCGgEQBOgBBFgDQCwgKCBgQIAAAAIB9gSQHEg/Heg2IABAAIAvgGQDQgZDqgBIAEAAQC+gIEmAaIADAAIBFAFQDnAWC8ATIAHABIAhADQDZAXDsAVIABAAIAFAAQDgASDZACQDtADDIgYQBHgHBFgLIAJgBILLhyQGZg7GnCXQATAdARAeIACAHMAAdBOnIgtAwg");
	this.shape_41.setTransform(0,-262.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D7F5FF").s().p("EhLEApAIgqgyIgCgDMAAAhQDQLqAMJ8A2IAKABIABAAILbAkIABAAIEdAPIHFAYIAlACIABAAQDJAKDEAGQCUADCGgBQBOgBBFgCQCugICEgOIABAAIB9gQQHFg6HbhAIABAAIAwgHQDQgeDpgEIAEgBQDDgLEhAWIADAAIBEAFQDkATDAATIAHABIAiADQDVAXDwAWIABAAIAFABQDfATDZAFQDvAGDHgUQBHgFBGgKIAJgBQGIg1FEg3QGQg9GzCTIAfA9IACAIMAAdBOoIgyAqg");
	this.shape_42.setTransform(0,-262.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D7F5FF").s().p("EhLJAo9Igng7MAAAhQCQL1AcJvAqIALAAIABAAQFPALGMATIABAAIEdAQQDIALD9AQIAmACIABAAQDIAMDEAIQCVAFCFAAQBOABBFgCQCtgFCGgNIABAAIB9gPQHGg1HahJIABAAIAwgIQDQgjDogIIAEgBQDIgOEcASIADAAIBEAEQDgARDFATIAHABIAiAEIHFAuIABAAIAFABQDfAUDZAIQDxAKDFgQQBIgEBGgIIAJgBQGJguFEg6QGGg/G/CRIAbA/IACAIMAAdBOoIgyAiIgGADg");
	this.shape_43.setTransform(0,-262.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#D7F5FF").s().p("EhLPAo7Iggg+IgBgEMAAAhQCQMBAuJiAdIALAAIABAAQFRAFGKATIABAAQCMAHCRAJQDHALD+ATIAmADIABAAQDIANDEALQCWAHCEABQBPACBFgBQCrgDCJgMIAAAAIB+gMQHHgxHYhTIABAAIAvgJQDRgnDngMIAEgBQDNgSEXAPIADAAIBEADQDdAPDJATIAHABIAiADIHFAwIABAAIAFABQDeAWDaALQDyANDEgMQBIgDBGgGIAKgBQGKgmFEg8QF9hBHKCNIAYBCIABAIMAAdBOoIg3AdIgHADg");
	this.shape_44.setTransform(0,-261.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#D7F5FF").s().p("EhLVAo/IgchIMAAAhQCQMNA/JWARIAKgBIABAAQFUAAGIASIABAAQCMAGCRAKQDFANEAAVIAmADIABAAQDIAPDEANQCWAJCEADQBPACBEAAQCrgBCKgKIABAAIB+gLQHJgrHWhdIABAAIAvgKQDSgsDmgQIADgBQDRgVESAMIADAAIBFACQDZAMDOATIAHABIAhAEQDLAUD7AdIABAAIAFAAQDeAYDaAPQD0AQDCgIQBJgBBGgGIAKAAQGKgeFFhAQF0hDHVCKIAUBFIABAJMAAeBOnIhFAbg");
	this.shape_45.setTransform(0,-262.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#D7F5FF").s().p("EhLaApDIgWhJIgBgFMAAAhQCQMZBQJIAEIALAAIABAAQFWgHGGASIABAAQCMAGCRAKQDDAOEDAXIAlAEIABAAIGMAgQCXALCEAFQBOADBFAAQCoACCOgJIAAAAIB+gJQHKgnHUhmIABAAIAwgLQDRgxDmgUIADgBQDWgYENAIIADAAIBFACQDVAJDTAUIAHABIAhADQDGAUEAAeIABAAIAFABQDdAZDbASQD1AUDBgEQBJAABHgEIAJgBQGLgWFGhCQFqhFHiCHIAPBHIABAJMAAeBOoIhKAVg");
	this.shape_46.setTransform(0,-262.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#D7F5FF").s().p("EhLgApIIgQhPIgBgFMAAAhQBQMlBgI7gIIALgBIABAAQFZgNGDASIABAAQCNAGCQALQDBAOEFAaIAlADIABAAQDHAUDGARQCXANCCAGQBPAEBGACQCmADCQgGIABAAIB9gIQHNgjHRhvIABAAIAwgMQDSg1DkgZIAEgBQDbgcEHAFIADAAIBFABQDRAIDYATIAHABIAhADQDDAUEDAgIABAAIAFABQDdAaDaAVQD4AXC/AAQBKACBHgDIAJAAQGNgOFFhFQFihHHrCDIANBJIAAAKMAAeBOoIhIAPIgIABg");
	this.shape_47.setTransform(0,-263.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#D7F5FF").s().p("EhLxAnzMAAAhQBQMwByIvgWIAKgBIABAAQFcgSGBARIABAAQCNAGCQALQDAAPEGAcIAmAEIAAAAIGNAqQCXAOCDAIQBPAFBFACQClAFCSgEIABAAIB+gGQHNgeHPh6IACAAIAvgMQDTg6DigcIAFgBQDfggECABIAEAAIBEABQDPAFDbATIAHABIAhADQDAATEHAiIABAAIAFABQDdAcDaAYQD5AbC/AEQBKADBGgBIAJAAQGOgGFHhIQFXhJH4CAIAIBLIAAALMAAeBOnIhNAKMiWLAABg");
	this.shape_48.setTransform(0,-263.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#D7F5FF").s().p("EhLrApSIgGhZMAAAhQIQM7CDIjgiIALgBQFegYF/AQQCNAGCRAMQC+AQEIAeIAnAFIGMAtQCYAQCCAKQBPAGBFADQCjAHCVgDQBBgBA/gDQHOgZHPiDIAvgOQDUg+DgghQDngkD/gCIBIAAQDLADDgATIAoAEQC8ASELAkIABAAQDeAeDeAcQD7AeC9AIQBKAEBHABQGUADFLhMQFOhLIDB9IAEBOMAAeBOyIhRAFg");
	this.shape_49.setTransform(0,-264.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-485,-529.6,970,529.7);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#82DC5E").s().p("AgoBAQgEhtBVgdQhPAqAVBrg");
	this.shape.setTransform(5.2,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#82DC5E").s().p("Ag4guQBbAJAWBAIgQAUQgJhChYgbg");
	this.shape_1.setTransform(-3.6,3.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.3,-7.8,18.7,15.7);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#82DC5E").s().p("AgoBAQgEhtBVgdQhPAqAVBrg");
	this.shape.setTransform(5.2,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#82DC5E").s().p("Ag4guQBbAJAWBAIgQAUQgJhChYgbg");
	this.shape_1.setTransform(-3.6,3.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.3,-7.8,18.7,15.7);


(lib.soda_shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.2)").s().p("A4SDeQqBhdAAiBQAAiBKBhcQKJhdOJAAQOGAAKIBdQKGBcAACBQAACBqGBdQqEBcuKABQuMgBqGhcg");
	this.shape.setTransform(144.5,-4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.2,-36,439.3,63);


(lib.slices_tomatoe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F55E54").s().p("Aj6AuQBOgwAUgFQAIgCAfgTQAdgRAMgBIBqACQAUgBBnAcQBnAZgKADQgGABhRgMQhTgKgRADQgVAEgZAMQgVANACADQABACBMAEQBLAFgJABQgMACiYgCIh8AGQhGAEgXAAIgKgBg");
	this.shape.setTransform(39.7,11.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F55E54").s().p("AAKAoIhjgRQgYgEg2gTQg5gSASgBQAZgBEtggQiUAcALAEIA9AOQA4AJALAAQAKgBAqgNQAngNgCACQAAABAIATQAHAQgHAGQgKAIggALQgiANgUABIgBAAQgUAAhRgNg");
	this.shape_1.setTransform(46.8,22.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F55E54").s().p("AjcA5QgMgCglgqQgkgoAFgBQAVgCAyATQAzASALAAQATAAA3gHIBJgKIAugMQAagIACgDQACgDgggEIiPgKQg3gEAPAAIDTgDICIAIQBxAHABAEQABAFgPAGQgOAGgQAEQigAggFACQgNAFiPATQiAARgZAAIgEgBg");
	this.shape_2.setTransform(109.6,21.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F55E54").s().p("AAaAvQCJgLAAgEQgBgDhTgLIi9gTQhJgJgMABQgVABgUAXQjHg5ATgDQAbgHC0AGQDRAHCBAWQEpAxgIAOQgCAEhwAAQhiAAi0gDg");
	this.shape_3.setTransform(96.2,8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF877E").s().p("Ao0BrQhpgXg1geQg3geAKgfQATg+DjgsQDhgqEuAAQEwAADeAqQDfAsAOA+QAIAfg5AeQg4AehrAXQjlAxlMAAQlPAAjhgxg");
	this.shape_4.setTransform(77,15.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF685E").s().p("Ao1BNQhpgXg1geQg3gcAKghIAAhTQAQAzC7AfQDRAiFfAAQFeAADUgiQDIghAMg2IAABYQAHAhg5AcQg3AehrAXQjlAxlNAAQlPAAjhgxg");
	this.shape_5.setTransform(77.1,28.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,154.2,41.5);


(lib.slices_slice1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B87A45").s().p("AgNALQgvgRAQgJQAQgKArANQAUAGAJAHQAIAIgGAFQgFAHgNAAQgQAAgZgKg");
	this.shape.setTransform(51.6,64.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B87A45").s().p("AgcALQgJgLAggNQAdgNAGASQADAHgGAFQgGAJgOADQgJADgIAAQgNAAgFgIg");
	this.shape_1.setTransform(83.3,65.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B87A45").s().p("AgcALQgJgLAggNQANgHALADQAJACACAHQADAHgGAFQgGAJgOADQgJADgIAAQgNAAgFgIg");
	this.shape_2.setTransform(262.7,80.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B87A45").s().p("AguAIQgOgKAygKQAwgKALARQAEAFgJAGQgKAGgVADIgXABQgaAAgKgIg");
	this.shape_3.setTransform(266.7,89.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D7C094").s().p("AgwAAQgDgGAKgEQALgGAVABQAtACAMANQAMAOgzACIgJAAQgpAAgHgQg");
	this.shape_4.setTransform(54.3,12.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D7C094").s().p("AgHAJQgcgEAHgIQAGgKAdAGQAeAHgJAFQgFAFgOAAIgQgBg");
	this.shape_5.setTransform(260.4,21.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D7C094").s().p("AARAPQhTgEgUgMQgVgPBdABQBbAAANAQQAFAHgTAEQgOAEgYAAIgVgBg");
	this.shape_6.setTransform(158.6,21.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D7C094").s().p("AAGAKQgbgCgHgIQgHgHAfgCQAdgBAFAKQAEAKgXAAIgFAAg");
	this.shape_7.setTransform(96.9,29.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D7C094").s().p("AAIARQgsgJgKgOQgKgPAzAFQAwAFAFARQACAIgKADQgFACgJAAQgIAAgKgCg");
	this.shape_8.setTransform(245.3,32.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E4CCA0").s().p("ASXEKQhsgPk6gwQk4gwiOgUQjjgehDADQiSAHougNQpdgPg3gWQhRgiD8i0QAdh5BUgKQA6gIF8APQFPAOF2AWQB5AHD+ALQEPALBqAGQGaAXAVAmQAiA+geCGQCTDCggAgQgDADgTAAQgsAAiFgSg");
	this.shape_9.setTransform(149.1,29.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C2854F").s().p("AQeHfQhFgJixgiIlThCQm/hWhmAEQg9ADizAAQjXABjJgDQpAgKhagnQiLg8BvlCQALgvBghHIBFgyQAhgZAHgOQAhg9AKgOQAhguAqgLQAqgLGuANQGyANFtAXQB2AIDyAKQEFAKBlAGQGJAXARA0QAdB8gRBNQCvCrgPBCQgQBCgvD+QhnA/iVAAQg0AAg6gIg");
	this.shape_10.setTransform(148.1,48.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,296.2,97.5);


(lib.slices_shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.098)").s().p("A8gBQIAKijQPahRJ4gNQGRgIJTAPQH3AMBSAJQAzAGAkASQAKAGAjAZQAGAFB3AgQBvAfAJASQCNCoizASQgYAChSAAUgIQAAAgtigBkg");
	this.shape.setTransform(182.5,18.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,365,36.2);


(lib.slices_olive = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2D3C1").s().p("Ag4CKIBFk3IAtAWIhQFDQgHACgGAAQgXAAACgkg");
	this.shape.setTransform(41.4,54.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6B57").s().p("AhgBZQgoglAAg0QAAgzAoglQApglA3AAQA5AAAoAlQAoAlAAAzQAAA0goAlQgoAlg5AAQg3AAgpglg");
	this.shape_1.setTransform(23.4,95.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#82DC5E").s().p("AjSDIQhXhTgBh1QABh0BXhTQBYhTB6AAQB7AABYBTQBYBTgBB0QABB1hYBTQhYBTh7AAQh6AAhYhTg");
	this.shape_2.setTransform(29.9,89.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F21133").s().p("AhPCoIAZhRIgFgcIhBgpIAagsIA7AaIAIgeIhlhgIAqgrIBaBRIAGgNQgggbACgNIgKgRIgXgBIAJgoIATAPIAFgNIAqAOIAkgYIAlAeIgVAhIAKAEIAUgXIASAPIgDAWIASAAIgGA1IhLgKQAJAjgQALQgQAMgLgFIg5Dug");
	this.shape_3.setTransform(50.8,20.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F2D3C1").s().p("AiDHIIDbujIAsAXIjmOWQgJAKgHAAQgKAAgHgUg");
	this.shape_4.setTransform(34,84.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64.1,132.5);


(lib.slices_lettuce = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C2E170").s().p("AHRFWIgUg9QgKgfgKgEIgHgBQgEgBgDgDIgdgnQgPgUhHgQQgUgFgagOQgagQgSgFQghgJgqADQg5ADgXgCIhOgNQgogHgjAIQghAHgmAaQgwAfgLAFQgHADgxAgQglAZgtAJQgfAHgXgEQgQgDgVgMQgbgPgLgEQgagKgggCQgigCgYAHQgPAEgUAMQgVALgMADQgVAGgcgEQgwgGg1gRQg8gTgWgEQgRgDgZgIIgrgNQg6gQhFAAQhAAAgpAVIgVALQgJADgKgGQgJgFgYgWQgUgRgggOQgSgHgXACQgKABgbAHQgUAGgJgCQgNgCgFgQQgIgYAYgVIAYgTQAQgNAJgMQATgaATgFIAqgKQAjgMAjhzQAegiAZgSQAPgKAoAEIA3AGQARAAACgQQABgJgFgmQgEgcAQgPQALgMAbgIQAZgIARASIASAWQAPASAPANQAXAVANATQAHALAWAMQAZAPAzgUIBFgfQBigmARgDQAOgDAVgRQAVgRATgDIAjgIQAOgEALAAIBAAEQA5AFAdAAQA5AABBgJQAVgDARgMQATgOASgGQAYgGAwAdIAhAWQARAKAGAAQArAAAggKQALgEAegSQAVgNAXAAQAeAABNAHQBMAGAWAFQAeAFAwAcQAjAdAeAXQATAOAhAAIA/gDQAaAAAIgKIAGgKQAEgGAGgDQAsgXBJgZQAtAAAogMQAOgEANAJQAIAFAQAQQAiAiAcAAQAhAAAlANIA8AWQAgAJAoACQAsADAdgIQAogMAAARQAeBAAjAAQAZAAAsAWQAsAVgBAJQgBADALAlQAKAkgEAWQgEAWgJALIglAhQgUASgsgEQg8gGgUADQg6ALgNg4QgSAdgDATQgCALAKAKQAJAKgBAIIgEAbQgGAQgTAJQgRAIgXgCQgWgBgGADQgHAFgdgRQgkgVgLgDQgOgDgPgKQgPgLgMgDQgSgEgWAFQgUADgrAOQgfAKAEAgIAFAdQADASgDAMQgIAigDAKQgGARgOARQgMAPgIgBIgMgBQgKgCgLAAQgnABgTgCQglgDgigQQgegNgOALIgNAMQgKAIgMACQgWAFgQAPQgRAPgNADIgHABQgOAAgHgSg");
	this.shape.setTransform(148.6,36);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,297.2,72.1);


(lib.slices_ham = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF7D8A").s().p("AtvBbQisgihfgvQhigtAAg0IAAhPQABA0BhAuQBfAvCsAgQFtBMICAAQIDAAFthMQCsggBfgvQBhguABg0IAABPQAAA0hiAtQhfAvisAiQltBMoDAAQoCAAlthMg");
	this.shape.setTransform(124.5,42.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF979E").s().p("AtvCzQisgihegvQhigvgBgzQABgzBigvQBeguCsgjQFshLIDAAQIEAAFsBLQCsAjBfAuQBiAvAAAzQAAAzhiAvQhfAvisAiQltBMoDAAQoCAAlthMg");
	this.shape_1.setTransform(124.5,25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,249.1,59);


(lib.slices_cheese = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFA14F").s().p("A0tgOQQfgMDSgHQDQgISYAEIACA1QyYgEjQAIQjSAHwfAMg");
	this.shape.setTransform(132.7,37.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFBD7B").s().p("AzpijMAkegASID3FWMgpXAAUg");
	this.shape_1.setTransform(132.6,18.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,265.3,41.8);


(lib.slicees_olive_shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.039)").s().p("AEcBuQjOl7DOF7IgNgEQgLAKgPAJQhxgJlRg0Qg9g1AJgzIADgMIiCgoQgVgOAhAAIB/AlQAdgtBRgSQBTgTBiASQB0AUBKA4QBKA4gKA6QgDARgKAOIBrAgIgBAQIgBAHg");
	this.shape.setTransform(55.7,14.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C2AB80").s().p("AhBggIANgSQBFADAxBiQg+hbhFAIg");
	this.shape_1.setTransform(24.6,7.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C2AB80").s().p("AAFAZQgLgEgOgNQgMgLgEgLQgEgLALgBQAbgCAXAQQAbAPgSASQgFAGgJAAQgFAAgGgCg");
	this.shape_2.setTransform(17.8,3.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C2AB80").s().p("AhTAVQBag+A/AgIAOAeQhFgwhiAwg");
	this.shape_3.setTransform(8.4,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,95.2,28.8);


(lib.shower_bubbles = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E8F8FF").s().p("AgkAmQgQgPAAgXQAAgVAQgQQAPgQAVgBQAVABAQAQQAQAQAAAVQAAAXgQAPQgQARgVgBQgVABgPgRg");
	this.shape.setTransform(75.1,293.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DEF8FF").s().p("AgdAfQgNgNAAgSQAAgRANgNQANgOAQAAQARAAANAOQANANAAARQAAASgNANQgNANgRAAQgQAAgNgNg");
	this.shape_1.setTransform(30.5,287.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DEF8FF").s().p("AguAxQgUgVAAgcQAAgbAUgVQAUgVAaAAQAcAAAUAVQATAVAAAbQAAAcgTAVQgUAVgcAAQgaAAgUgVg");
	this.shape_2.setTransform(98.8,261);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DEF8FF").s().p("AgWAZQgLgLAAgOQAAgNALgKQAJgLANAAQANAAALALQAKAKAAANQAAAOgKALQgLAJgNABQgNgBgJgJg");
	this.shape_3.setTransform(66.4,3.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DEF8FF").s().p("AhUBYQgjglgBgzQABgyAjglQAkglAwAAQAyAAAjAlQAkAlAAAyQAAAzgkAlQgjAkgyAAQgxAAgjgkg");
	this.shape_4.setTransform(12.1,42.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E8F8FF").s().p("AgrAtQgSgTgBgaQABgZASgUQATgSAYgBQAaABASASQASAUAAAZQAAAagSATQgSAUgaAAQgYAAgTgUg");
	this.shape_5.setTransform(44.1,70.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E8F8FF").s().p("Ag5A7QgYgYAAgjQAAgiAYgZQAZgZAgAAQAiAAAYAZQAYAZAAAiQAAAjgYAYQgYAZgiAAQggAAgZgZg");
	this.shape_6.setTransform(24.7,110.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,105.6,299);


(lib.potato_sourcream_splat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AleP8QgnhFg2hIQgwhBgLgYQgVgsAAg6QABg9AYh1QAGgggHgmQgDgQgQg2QgNgsgDgdQgEgrAMgpQARg6AFhDQADgngBhSQgBhWADgyQAFhTAShSQAbh7Aig6QAbgwAygeIAxgcQAjgTAagQQBPg0BQhXQCOicA+gGIATAAQALABAIgDQAUgGAggnQBjh4AhBXQBNCPA3BuQAbA2AKAiQAPA0gGAxQgPB8ijCJQh2BjgrBUQgfA9ACBLIADA8QACAlgDAaQgIBLg5BKQgJANgmApQgkAogUAbQg/BZAJBLQAQB9gdB8QgaBvg2BQQg0BNg3ANQgLADgJAAQgtAAgfg3g");
	this.shape.setTransform(53.6,107.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,107.3,215.1);


(lib.potato_sourcream_drip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGGjQhFhfBFkyIAAmrIAugVIAAHHQAJGWgqAAQgHAAgGgMg");
	this.shape.setTransform(4.2,43.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8.5,86.3);


(lib.potato_chives_splat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* 
		// potato chives & bacon bits
		var mcPotatoChives:MovieClip = this.createEmptyMovieClip("mcPotatoChives", this.getNextHighestDepth());
		var auPotatoChives:Sound = new Sound(mcPotatoChives);
		auPotatoChives.attachSound("potato_chives");
		auPotatoChives.setVolume(50);
		
		if (_parent._parent.curMusicState == "on") {
			auPotatoChives.start();
		}*/
	}
	this.frame_39 = function() {
		/* stop();
		*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(39).call(this.frame_39).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8DCA6E").s().p("AgehCIAegZIAeCjIgmAVg");
	this.shape.setTransform(-74.9,-248.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8DCA6E").s().p("AgehDIAdgZIAfCkIgmAVg");
	this.shape_1.setTransform(56.4,42.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},14).wait(26));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8DCA6E").s().p("AgugjIAhgdIA8BZIgvAog");
	this.shape_2.setTransform(-95.1,-237.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8DCA6E").s().p("AgugkIAhgdIA8BZIgwAqg");
	this.shape_3.setTransform(39.5,44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},5).wait(35));

	// Layer 4
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8DCA6E").s().p("AgkgNIBEgRIAFAsIhFAQg");
	this.shape_4.setTransform(-68.1,-320.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8DCA6E").s().p("AgkgNIBEgQIAFArIhFARg");
	this.shape_5.setTransform(64.5,27.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},26).wait(14));

	// Layer 5
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8DCA6E").s().p("Ag4AIIBIg0IApApIhZAwg");
	this.shape_6.setTransform(-107.4,-275.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8DCA6E").s().p("Ag4AIIBIg0IApAqIhZAvg");
	this.shape_7.setTransform(55,22.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[{t:this.shape_7}]},19).wait(21));

	// Layer 6
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8DCA6E").s().p("AhRADICTgzIAQAzIiOAug");
	this.shape_8.setTransform(-138.8,-254.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8DCA6E").s().p("AhRAEICTg0IAQA0IiOAtg");
	this.shape_9.setTransform(24,37.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_9}]},15).wait(25));

	// Layer 7
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8DCA6E").s().p("AgXBYIAUi8IAbANIgEC8g");
	this.shape_10.setTransform(-120.6,-200.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(19).to({x:7,y:73.1},0).wait(21));

	// Layer 8
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8DCA6E").s().p("AgZBKIAUiXIAgAEIgRCXg");
	this.shape_11.setTransform(-176.5,-226.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8DCA6E").s().p("AgaBKIAViXIAgAEIgRCXg");
	this.shape_12.setTransform(2.7,68.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},9).wait(31));

	// Layer 9
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8DCA6E").s().p("AhyA3IB+h6IAlAmIAdg2IAlApIhzBqIgkgVIgxApg");
	this.shape_13.setTransform(-42.6,-251.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(11).to({x:74.4,y:37.1},0).wait(29));

	// Layer 10
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8DCA6E").s().p("Ag6gmIAhghIBUB6Ig1AVg");
	this.shape_14.setTransform(-91,-238.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(30).to({x:49,y:41.7},0).wait(10));

	// Layer 11
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8DCA6E").s().p("AhcArICchuIAdAqIicBdg");
	this.shape_15.setTransform(-148.4,-310.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8DCA6E").s().p("AhbArICahuIAdAqIibBdg");
	this.shape_16.setTransform(38.3,33.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15}]}).to({state:[{t:this.shape_16}]},19).wait(21));

	// Layer 12
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8DCA6E").s().p("AhLgoIAugdIBpB6IgtARg");
	this.shape_17.setTransform(-165.5,-188.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(33).to({x:14.5,y:91.9},0).wait(7));

	// Layer 13
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8DCA6E").s().p("AgNBfIgVi9IAoAAIAdC9g");
	this.shape_18.setTransform(-142.6,-150.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8DCA6E").s().p("AgNBfIgUi9IAmAAIAdC9g");
	this.shape_19.setTransform(14.9,141.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18}]}).to({state:[{t:this.shape_19}]},19).wait(21));

	// Layer 14
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#8DCA6E").s().p("AgXBMIAMibIAjAAIgMCfg");
	this.shape_20.setTransform(-102.8,-295.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(12).to({x:60.2,y:9.3},0).wait(28));

	// Layer 15
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#8DCA6E").s().p("Ag/g0IAygNIBNByIguARg");
	this.shape_21.setTransform(-86.9,-202);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#8DCA6E").s().p("Ag+g0IAxgNIBMByIgtARg");
	this.shape_22.setTransform(53.1,65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21}]}).to({state:[{t:this.shape_22}]},19).wait(21));

	// Layer 16
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#8DCA6E").s().p("AguBEIAwiXIAtAIIghCfg");
	this.shape_23.setTransform(-30.7,-288.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(4).to({x:68.3,y:8.5},0).wait(36));

	// Layer 17
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#8DCA6E").s().p("Ag4AKIAIgbIBpAAIgEAjg");
	this.shape_24.setTransform(-101.6,-181.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(25).to({x:38.4,y:67.3},0).wait(15));

	// Layer 18
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8DCA6E").s().p("AhNhFIAlgVIB2CgIgyAUg");
	this.shape_25.setTransform(-154,-209.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#8DCA6E").s().p("AhNhFIAmgVIB1CgIgyAUg");
	this.shape_26.setTransform(19,70.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25}]}).to({state:[{t:this.shape_26}]},9).wait(31));

	// Layer 19
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#8DCA6E").s().p("Ag9gTIAuglIBNBMIgqAmg");
	this.shape_27.setTransform(-180,-259.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#8DCA6E").s().p("Ag9gTIAugmIBMBNIgpAlg");
	this.shape_28.setTransform(12,53.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27}]}).to({state:[{t:this.shape_28}]},19).wait(21));

	// Layer 20
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#8DCA6E").s().p("AhTgDICjghIAEAnIiWAig");
	this.shape_29.setTransform(-113.7,-231.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#8DCA6E").s().p("AhTgDICjghIAEAnIiXAig");
	this.shape_30.setTransform(26.3,48.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29}]}).to({state:[{t:this.shape_30}]},29).wait(11));

	// Layer 21
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#8DCA6E").s().p("AgoAWIAshEIAlAUIg0BJg");
	this.shape_31.setTransform(-43.9,-231.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_31).wait(7).to({x:73.1,y:48.7},0).wait(33));

	// Layer 22
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#8DCA6E").s().p("AgXBKIAIiTIAnAAIAACTg");
	this.shape_32.setTransform(-28.5,-197.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_32).wait(19).to({x:62.8,y:60.1},0).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186.2,-323.6,160.2,182.7);


(lib.potato_butterdrip2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EEE863").s().p("AgeKOQgygkAUhPQAHgcARgnIAcg8QBFlwhhq3IBngLIgWQyQAAD7g1AAQgKAAgMgJg");
	this.shape.setTransform(6.7,66.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.5,132.6);


(lib.potato_butterdrip1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EEE863").s().p("AAfP3QhhgLAWk+Igh5BIBchjQhnRuBsJXQBqEohYAAIgHAAg");
	this.shape.setTransform(7.8,101.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15.7,203.2);


(lib.potato_breakingground = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8C6133").s().p("AgBAkQgNgJgHgQQgIgOACgOQABgQAMgHQARgMASAvQAGAQACAQQABAQgHABIgEAAQgLAAgJgIg");
	this.shape.setTransform(162.3,44.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8C6133").s().p("AgIA6QgLgSgIgeQgIgbAAgYQgBgaAKgGQAHgFARAUQANATAMAcQAOAdgBAXQAAAbgVAGIgEABQgKAAgJgRg");
	this.shape_1.setTransform(180,58.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8C6133").s().p("AAEAnQgOgDgNgNQgMgMgDgMQgDgPAIgLQAJgLAVgBQATgBAMANQALAMABAQQAAASgJALQgIAKgMAAIgHgBg");
	this.shape_2.setTransform(166.9,127.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8C6133").s().p("AgLA4QgNgSgGgiQgFgcADgZQACgZAKAAQALAAALAWQANAUAKAdQAJAcAAAVQABAYgNADIgIACQgOAAgLgTg");
	this.shape_3.setTransform(228.8,140.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8C6133").s().p("AgOBKQgVgGAAgbQgBgXAOgdQAMgcANgTQARgUAHAFQAKAGgBAaQAAAYgIAbQgIAegLASQgJARgKAAIgEgBg");
	this.shape_4.setTransform(92.9,35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8C6133").s().p("AgeAeQgJgLAAgSQAAgQALgLQAMgOATABQAWABAJAMQAIAKgDAPQgDANgMALQgNANgPADIgHABQgLAAgIgKg");
	this.shape_5.setTransform(89.9,60.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8C6133").s().p("AgWAsQgHgBABgQQABgQAHgQQASgvARAMQAMAHABAQQACAOgIAOQgIAPgMAKQgJAIgLAAIgEAAg");
	this.shape_6.setTransform(57.2,150.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8C6133").s().p("AgPBKQgUgGAAgbQgBgXANgdQAMgcAOgTQAQgUAIAFQAJAGAAAaQAAAYgIAbQgIAegMASQgIARgLAAIgEgBg");
	this.shape_7.setTransform(39.4,165);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8C6133").s().p("AgeAeQgJgLAAgSQABgQAKgMQANgNATABQAVABAJALQAIALgDAPQgDAMgMAMQgNANgOADIgHABQgMAAgIgKg");
	this.shape_8.setTransform(52.6,234.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8C6133").s().p("AgeAeQgJgLAAgSQABgQAKgMQANgNATABQAVABAJAMQAIAKgDAPQgDANgMALQgNANgOADIgHABQgMAAgIgKg");
	this.shape_9.setTransform(142.4,391.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8C6133").s().p("AgoBDQADggALgnQALgrAOgaQANgfANAGQAQAHAAAgQAAAegMAkQgMAmgRAbQgSAcgQAAQgJAAADghg");
	this.shape_10.setTransform(236.7,353);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8C6133").s().p("AgzA+QgKgFAIgZQAIgXASgZQATgcARgNQAWgPANAOQAQARgEAaQgEAVgSAWQgSAWgWAKQgNAGgNAAQgKAAgJgEg");
	this.shape_11.setTransform(158.1,493.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8C6133").s().p("AAMA6QgUgFgVgUQgVgUgIgWQgJgaAKgTQAFgKAZAKQAXAJAXAUQAbAWALARQANAXgOAMQgNALgRAAQgHAAgHgCg");
	this.shape_12.setTransform(85,476.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8C6133").s().p("AgXBMQgLgZgCgoQgCgnAKgeQAMgjAVgEQANgCAJAbQAJAZABAmQABAkgHAdQgIAhgSAHQgEACgBAAQgNAAgKgWg");
	this.shape_13.setTransform(30,323.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8C6133").s().p("AgcA2QgIgCACgTQABgTAIgUQAJgZALgMQAMgPALAIQAQAJABAUQACARgKARQgJAUgPALQgLAKgOAAIgGAAg");
	this.shape_14.setTransform(217,414.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8C6133").s().p("AgzA+QgKgFAIgZQAIgXASgZQATgcARgNQAWgPANAOQAQARgEAaQgEAVgSAWQgSAWgWAKQgNAGgNAAQgKAAgJgEg");
	this.shape_15.setTransform(184.9,467.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8C6133").s().p("AgrArQgOgQABgZQABgYAPgRQARgUAdACQAeACANARQAMAOgFAWQgEATgRARQgSASgWAFIgKABQgRAAgLgPg");
	this.shape_16.setTransform(202.5,359.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8C6133").s().p("AgeArQgbgGgOgRQgPgQAVgQQASgRAjgJQAhgKAaAFQAeAFABAYQABAVgSARQgQAPgaAFQgMACgLAAQgNAAgNgDg");
	this.shape_17.setTransform(119.2,455);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#94683A").s().p("Am5lbQAWg3BgAXQA6APCiBIQCxBPBfAfQCiAzB0gNIimISQsVo7BDiig");
	this.shape_18.setTransform(122.4,441.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#94683A").s().p("AhoHdQiDgihhhAQhhg/AEgyQABgXAbgQQAWgMAygOIBogdQBGgUA4gYQFliZCRncQA3KyhjCzQhBBmiKAYQgqAIguAAQhRAAhfgZg");
	this.shape_19.setTransform(169.1,288.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#94683A").s().p("Aj0GEQgVgvArhIQARgcAjgvIBGhbQBkiCA9h0QBdipAzi/IAuKfQjeFQiJAAQhSAAg2h0g");
	this.shape_20.setTransform(178.3,160.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#94683A").s().p("EgFVAoFQhsgQiIg0QiKg1iBhNQCzgzCrgTQCPgQBAgjQA3gdASg5QAHgVAFgkIAKhDQAQhcAmhKQAohMAzhOIBNh1QAphBAbhCQAhhSAZhyQAXhtAJihQAEheACjEQABi6AGhTQAIiGAYhHQA7irAWh9QAaiXgDjLQgChdgWhNQgHgcglhfQgbhIgKg8QgNhXALh1IASjEQAEhKgEg1QgEgzgRhWIgvjjQgujbkKkWQijiojNiZIAqgLQCYgeClA+QCvBDCiCjQCxCzCLETQCaEvBhGRQAmCbAICiQAGB6gKCaIgSD1QgICFALBaIAeDCQAXCQALCaQANCqgLCsQgHCCgPBBQgJAshEClQg9CUgDA1QgDBIgWBcQgWBdgfBIQgkBRg+CCQhECMgYAqQgRAdhMBNQhcBdhkBPQkBDNiwAAQgUAAgUgDg");
	this.shape_21.setTransform(168.2,256.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#A3774A").s().p("EABIAoFQhsgQiKg2QiMg2iChPQiMhUhhhdQhshognhkQgRgrgcg1Ig0hgQhEh8gdhfQgchfgKibIgIhvQgGg6gKgmIgzirQghhvgShNQg1jnASjFQAMiEgIhsQgFhIgShaQgThkgEgnQgIhOANhVQARhyA0isIAkh2QASg5AFgYQAMg/BhjlQBljvA/hqQBXiUDolSQBintGFhOQCVgeClA+QCxBDCiCjQCxCzCMETQCaEvBhGRQAlCbAICiQAGB6gKCaIgSD1QgHCFAKBaIAfDCQAWCQAMCaQAMCqgKCsQgICCgOBBQgKAshEClQg9CUgCA1QgEBIgVBcQgWBdggBIQgjBRg/CCQhDCMgZAqQgRAdhMBNQhbBdhkBPQkEDNivAAQgVAAgTgDg");
	this.shape_22.setTransform(126.8,256.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,253.6,513.7);


(lib.newspaper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B3B3B3").s().p("AhjAnIgBgTQA3ASA7gfIABAZQgdAOgjAAQgYAAgagHgAhlACIgBgUQApAQAxgUQBrgtAIAsIABATQgKgnhgApQgjAMgbAAQgVAAgQgIg");
	this.shape.setTransform(2.5,-10.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgggVQAXgSAOAIQAHADgFALQgFAKANACQANACAEAKIABATQgggMgbAVg");
	this.shape_1.setTransform(9.6,-5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AhyClQgKgOBMAAQgtAQgPAAQgFAAgBgCgAAYCCQBTggAIAMQAMAVhUAAIgTgBgAALiaQAfgMARAAQAcACACAWIAAACIABAHIAAADQADAuADASIgBgBQgfgRgrAegAAXh+IAGA6QAdgVAfAMIgBgTQgDgMgNgCQgNgCAFgKQAEgLgGgDQgFgCgFAAQgNAAgQAMg");
	this.shape_2.setTransform(3.9,5.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E6E6E6").s().p("Ah+DKIAGgLIgKgBIgklTIANAIIgBgbIAPAKIgBguIAPAJIgBgSQA1AkB4goQA6gNAWAgQgDA1AAApIgBgTQgIgshtAtQgvAUgpgQIABAWQAmATA7gaQBjgpAJAoIAAAUQgDgWgbgCQgSAAgeAMIAJBiQArgcAgARIACANQgWgLg1AVIANCHQBGgiATAaIABABIAAgBIAFAUQAFAPgHAIIgIAGQgXANg7AAQhVgDgmAEQgfADgWAJIgMAGIgLgUgAA7C8QBoADgOgXQgCgDgHAAQgUAAg9AXgAhDCVQA6AbBAgYQgFgfgDgnQghAUhCgSQgFAAgNgFgAhIBCQBHAZAugVIgBgMQgsAThIgVgAhIAxQBIAUArgUIAAgLQgrAVhIgUgAhJAgQBIAUArgWIgBgJQgrAWhIgVgAhKAPQBIAUAqgWIgBgKQgqAVhIgVgAhLgCQBHASArgSIgBgMQgrAThHgSgAhMgUQBHATArgVIgBgLQgrAVhHgUgAhNgoQBHAVApgWIAAgKQgnAJgMAAQgXABgngIgAhPg8QBAARAygYIgBgYQg7Afg3gSIABASgAhSiEQAlATBKgiQAcgLAdAAQAgAAAGARIABgeQgKgvhnApQg/AagigUgAB8hSIAAAFIAAACIAAgHg");
	this.shape_3.setTransform(0.4,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AiCDBQAWgJAfgDQAmgEBVACQA7ABAXgNIgJAGQgZANg4ADQgqABgsANQg1AQgHABIgGABQgXAAAHgcgAhqDHQAFAHA9gUQhMAAAKANgAheB+IgDhHQANAFAFABQBEARAfgTQADAmAFAfQgdAMgeAAQggAAgfgOgAAegHQA1gYAWANIAAABIABAIIAAADIAHApIAOA+IAGAUQgUgahGAjIgNiFgAhjAqIAAgJQBIAVAsgTIABAMQgTAJgbAAQggAAgngOgAhjAZIAAgKQBIAVArgWIAAAMQgUAJgdAAQgeAAgkgKgAhkAJIgBgJQBIAUArgUIABAGQgWAMgfAAQgcAAgigJgAhlgHIgBgLQBIATAqgTIABAKQgVAJgeAAQgcAAgjgIgAhmgaIgBgLQBHAVArgWIABAMQgVAKgdAAQgdAAgjgKgAhngsIgBgLQBHAUArgVIABALQgVAKgfAAQgcAAgigJgAhog/IgBgKQAnAIAXAAQAMgBAngIIAAAJQgUALgeAAQgcAAgigJgAhtibIgDgoQAiAVBBgbQBlgoAKAvIgBAeQgGgRggAAQgdAAgcALQgvAVggAAQgSAAgOgGg");
	this.shape_4.setTransform(3.1,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.3,-22.5,33.5,46.7);


(lib.mustardgoop1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E8D428").s().p("AgtBUQgZgKgliMIDXgSQgqBlgUgFQgKgDgFgeQgFgfgNgCQgMgBgQBIQgQBEgMAAIgCgBg");
	this.shape.setTransform(10.9,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.8,17.1);


(lib.mustardgoop2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E8D428").s().p("ABCBmQgZgDgkhYQgSgugHgNQgOgdgMgDQgNgCgPAMQgJAIgTAVQgmApgTgEQgRgFgfgcQgbgagMABQgNABgVA9QgVA6gHgGQgRgMgSiOIKuAAQhPBagdACQgOABgRggQgSgigPgBQgJAAgNAcQgFALgUAzQggBZgZAAIgBgBg");
	this.shape.setTransform(34.4,10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68.8,20.6);


(lib.milk_front = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		/* gotoAndPlay(2);
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqQUdQkQgZAAglMgDMgoTQAEAYBXAmQBmArCSAcQCvAhC6gCQDegDDSg1QGEhhGtACIDpAEQBQAAADgSMgDLAoRQAAAlkQAbQkRAamBAAQmEAAkMgZg");
	this.shape.setTransform(113.4,135.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AqQUdQkQgZAAglMgDMgoTQADAYBYAlQBmApCRAbQC4AfDBACQDdgBDTgzQF8hdGlAAIDqACQBQgCADgSMgDLAoRQAAAlkQAbQkRAamBAAQmEAAkMgZg");
	this.shape_1.setTransform(113.4,135.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AqQUdQkQgZAAglMgDMgoTQADAYBYAjQBmAoCQAaQDBAeDIAFQDdABDSgxQF2haGdgBIDqgBQBQgDADgSMgDLAoRQAAAlkQAbQkRAamBAAQmEAAkMgZg");
	this.shape_2.setTransform(113.4,135.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AqQUdQkQgZAAgmMgDMgoSQAEAXBWAjQBnAmCPAYQDKAeDPAIQDdADDTgvQFuhXGUgBQB3gBBzgDQBRgEADgTMgDLAoRQAAAmkQAaQkRAamBAAQmEAAkMgZg");
	this.shape_3.setTransform(113.4,135.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AqQUdQkQgZAAgmMgDMgoSQAEAXBWAhQBoAlCNAXQDTAcDWAMQDcAFDUgtQFnhTGLgDQB5gCBygFQBRgFADgTMgDLAoRQAAAmkQAaQkRAamBAAQmEAAkMgZg");
	this.shape_4.setTransform(113.4,135.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AqQUdQkQgZAAgmMgDMgoSQADAXBXAfQBoAkCMAWQDcAbDcAPQDdAHDTgrQFhhQGCgEQB5gDBzgGQBRgHADgTMgDLAoRQAAAmkQAaQkRAamBAAQmEAAkMgZg");
	this.shape_5.setTransform(113.4,135.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AqQUdQkQgZAAgmMgDMgoSQAEAXBVAeQBpAiCMAVQDkAaDkASQDcAJDTgpQFahNF5gFQB7gEBxgHQBSgJADgTMgDLAoRQAAAmkQAaQkQAamCAAQmDAAkNgZg");
	this.shape_6.setTransform(113.4,135.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AqQUdQkQgZAAgmMgDMgoSQAEAWBVAdQBpAhCLAUQDtAYDqAWQDcALDUgnQFThJFwgHQB8gFBxgJQBSgJADgUMgDLAoRQAAAmkQAaQkQAamCAAQmDAAkNgZg");
	this.shape_7.setTransform(113.4,135.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AqQUcQkRgZAAgmMgDLgoSQAEAXBVAbQBqAfCJAUQD2AXDxAZQDbANDVgmQFMhFFogIQB9gGBvgKQBTgMADgTMgDLAoRQAAAmkQAaQkQAamCAAQmDAAkNgag");
	this.shape_8.setTransform(113.4,135.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AqQUcQkRgZAAgmMgDLgoSQAEAWBVAbQBqAdCJASQD+AXD5AdQDbAODUgkQFGhCFegJQB+gHBvgMQBTgMADgUMgDLAoRQAAAmkQAaQkQAamCAAQmDAAkNgag");
	this.shape_9.setTransform(113.4,135.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AqQUcQkRgZAAgmMgDLgoSQAEAXBVAZQBqAbCIASQEHAUD/AhQDbAQDVgiQE/g+FVgLQB/gIBvgOQBTgNADgUMgDLAoRQAAAmkQAaQkPAamDAAQmDAAkNgag");
	this.shape_10.setTransform(113.4,135.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AqQUcQkRgZAAgmMgDLgoSQAEAWBVAYQBqAaCHAQQEQAUEGAjQDaATDWggQE3g7FOgMQB/gJBvgPQBTgOADgVMgDLAoRQAAAmkQAaQkPAamDAAQmDAAkNgag");
	this.shape_11.setTransform(113.4,135.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AqQUcQkRgZAAgmMgDLgoSQAEAWBUAWQBrAZCGAPQEZATEOAmQDZAVDWgeQExg4FEgMQCAgLBugQQBUgRADgUMgDLAoRQAAAmkQAaQkPAamDAAQmDAAkNgag");
	this.shape_12.setTransform(113.4,135.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AqQUcQkRgaAAglMgDLgoSQAEAWBUAVQBsAWCFAPQEhAREUAqQDaAXDWgcQEqg1E7gNQCCgLBtgTQBUgRADgVMgDLAoSQAAAlkQAaQkPAamDAAQmCAAkOgag");
	this.shape_13.setTransform(113.4,135.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AqQUcQkRgaAAglMgDLgoSQAEAWBUATQBsAWCDANQErAQEbAuQDZAYDXgaQEigxEzgQQCDgLBtgUQBUgTADgVMgDLAoSQAAAlkQAaQkPAamDAAQmCAAkOgag");
	this.shape_14.setTransform(113.4,135.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AqRUcQkQgaAAglMgDLgoSQADAVBUATQBtAUCDALQEzAQEiAxQDXAaDZgYQEbguErgQQCDgNBsgWQBUgTAEgWMgDLAoSQAAAlkRAaQkOAamDAAQmCAAkPgag");
	this.shape_15.setTransform(113.4,135.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AqRUcQkQgaAAglMgDLgoSQADAVBUARQBtATCCALQE7ANEqA1QDWAcDagXQEUgqEhgRQCFgPBsgWQBUgVAEgWMgDLAoSQAAAlkRAaQkOAamDAAQmCAAkPgag");
	this.shape_16.setTransform(113.4,135.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AqRUcQkQgaAAgmMgDLgoRQADAUBUARQBuAQCAALQFEAMExA4QDWAeDZgVQEOgmEZgTQCGgPBrgZQBUgWAEgWMgDLAoSQAAAmkRAZQkNAamEAAQmCAAkPgag");
	this.shape_17.setTransform(113.4,135.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AqRUcQkQgaAAgmMgDLgoRQADAVBTAOQBvAPB/AJQFOAME3A7QDWAgDagTQEGgjEQgUQCHgQBqgaQBVgYAEgWMgDLAoSQAAAmkRAZQkNAamEAAQmCAAkPgag");
	this.shape_18.setTransform(113.4,135.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AqRUcQkQgaAAgmMgDLgoRQADAUBTANQBvAOB/AIQFVALE/A+QDVAiDbgQQD/ghEHgUQCIgSBqgbQBVgZAEgXMgDLAoSQAAAmkRAZQkNAamEAAQmCAAkPgag");
	this.shape_19.setTransform(113.4,135.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AqRUcQkQgaAAgmMgDLgoRQADAUBTAMQBvAMB+AHQFeAJFGBCQDUAkDbgOQD5gdD+gXQCJgSBqgdQBVgbAEgWMgDLAoSQAAAmkRAZQkNAamEAAQmBAAkQgag");
	this.shape_20.setTransform(113.4,135.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AqRUcQkQgaAAgmMgDLgoRQADATBTAMQBvAKB9AGQFoAIFMBFQDVAmDbgNQDxgZD2gXQCJgUBqgfQBVgbAEgXMgDLAoSQAAAmkRAZQkNAamEAAQmBAAkQgag");
	this.shape_21.setTransform(113.4,135.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AqRUcQkQgaAAgmMgDLgoRQADAUBSAJQBxAJB8AFQFwAHFTBJQDUAnDcgLQDqgWDtgYQCLgUBpghQBVgdAEgWMgDMAoSQAAAmkQAZQkNAZmEAAQmBAAkQgag");
	this.shape_22.setTransform(113.4,135.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AqRUcQkQgaAAgmMgDLgoRQADATBSAJQBxAHB7AEQF5AFFaBNQDTApDcgJQDkgSDkgaQCMgVBpgiQBVgeAEgXMgDMAoSQAAAmkQAZQkNAZmEAAQmBAAkQgag");
	this.shape_23.setTransform(113.4,135.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AqRUcQkQgaAAgmMgDLgoRQADATBRAHQBzAGB5ADQGCAEFhBQQDTArDdgHQDcgPDcgbQCMgWBogkQBXgfADgXMgDMAoSQAAAmkQAZQkMAZmFAAQmAAAkRgag");
	this.shape_24.setTransform(113.4,135.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AqRUcQkQgaAAgmMgDLgoRQADATBRAFQByAFB5ACQGLADFnBTQDUAtDcgFQDWgMDTgcQCNgXBoglQBWghAEgXMgDMAoSQAAAmkQAZQkMAZmFAAQmAAAkRgag");
	this.shape_25.setTransform(113.4,135.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AqRUcQkQgaAAgmMgDLgoRQADATBRAEQBzADB3ABQGUABFvBXQDSAvDdgDQDPgIDKgeQCPgYBngmQBWgjAEgXMgDMAoSQAAAmkQAZQkMAZmFAAQmAAAkRgag");
	this.shape_26.setTransform(113.4,135.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AqRUcQkQgbAAglMgDLgoRQADASBQADIDqABQGdABF2BaQDSAxDdgBQDIgFDBgeQCQgaBmgoQBYgjADgYMgDMAoTQAAAlkQAZQkMAZmFAAQmAAAkRgag");
	this.shape_27.setTransform(113.4,135.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AqRUcQkQgbAAglMgDLgoRQADASBQACIDqgCQGkAAF9BdQDTAzDdABQDBgCC4gfQCRgbBmgpQBYglADgYMgDMAoTQAAAlkQAZQkMAZmFAAQmAAAkRgag");
	this.shape_28.setTransform(113.4,135.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AqRUcQkQgbAAglMgDLgoRQADASBQAAIDpgEQGtgCGDBhQDTA1DeADQC6ACCvghQCSgcBmgrQBXgmAEgYMgDMAoTQAAAlkQAZQkMAZmFAAQmAAAkRgag");
	this.shape_29.setTransform(113.4,135.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AqRUcQkQgbAAglMgDLgoRQADASBQACIDqgCQGlgBF9BeQDSAzDeABQDBgBC3ggQCRgbBmgpQBYglADgYMgDMAoTQAAAlkQAZQkMAZmFAAQmAAAkRgag");
	this.shape_30.setTransform(113.4,135.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AqRUcQkQgbAAglMgDLgoRQADASBQADIDqABQGdABF3BaQDSAxDdgBQDIgFDAgeQCQgaBmgoQBYgjADgYMgDMAoTQAAAlkQAZQkMAZmFAAQmAAAkRgag");
	this.shape_31.setTransform(113.4,135.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AqRUcQkQgaAAgmMgDLgoRQADATBRAEQBzACB3ABQGUACFwBXQDSAvDdgDQDPgIDJgdQCPgZBngmQBWgjAEgXMgDMAoSQAAAmkQAZQkMAZmFAAQmAAAkRgag");
	this.shape_32.setTransform(113.4,135.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AqRUcQkQgaAAgmMgDLgoRQADATBRAFQByAEB5ACQGLADFqBUQDSAtDdgFQDVgLDSgcQCNgYBoglQBWghAEgXMgDMAoSQAAAmkQAZQkMAZmFAAQmAAAkRgag");
	this.shape_33.setTransform(113.4,135.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AqRUcQkQgaAAgmMgDLgoRQADATBRAHQBzAFB5ADQGDAEFiBRQDUArDbgHQDcgODbgbQCMgXBogjQBXggADgXMgDMAoSQAAAmkQAZQkMAZmFAAQmAAAkRgag");
	this.shape_34.setTransform(113.4,135.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AqRUcQkQgaAAgmMgDLgoRQADATBRAIQByAHB7AEQF6AFFcBNQDTAqDdgIQDigSDigaQCMgWBogiQBXgeADgXMgDMAoSQAAAmkQAZQkNAZmEAAQmBAAkQgag");
	this.shape_35.setTransform(113.4,135.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AqRUcQkQgaAAgmMgDLgoRQADAUBSAJQBxAIB8AFQFyAGFVBKQDUAoDbgKQDpgVDrgZQCLgVBpggQBVgeAEgWMgDMAoSQAAAmkQAZQkNAZmEAAQmBAAkQgag");
	this.shape_36.setTransform(113.4,135.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AqRUcQkQgaAAgmMgDLgoRQADAUBTAKQBwAKB8AGQFqAHFOBHQDUAmDbgNIHkgvQCJgUBqgfQBVgcAEgXMgDLAoSQAAAmkRAZQkNAamEAAQmBAAkQgag");
	this.shape_37.setTransform(113.4,135.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AqRUcQkQgaAAgmMgDLgoRQADAUBTALQBvAMB+AHQFhAIFIBDQDUAlDbgOQD2gcD8gXQCJgSBqgeQBVgaAEgXMgDLAoSQAAAmkRAZQkNAamEAAQmBAAkQgag");
	this.shape_38.setTransform(113.4,135.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AqRUcQkQgaAAgmMgDLgoRQADAUBTANQBwANB9AIQFaAKFABAQDVAiDagQQD+gfEEgVQCIgSBqgcQBVgaAEgWMgDLAoSQAAAmkRAZQkNAamEAAQmCAAkPgag");
	this.shape_39.setTransform(113.4,135.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AqRUcQkQgaAAgmMgDLgoRQADAVBTANQBvAPB/AJQFRAKE5A+QDWAgDagSQEEgiENgVQCHgQBqgaQBVgZAEgWMgDLAoSQAAAmkRAZQkNAamEAAQmCAAkPgag");
	this.shape_40.setTransform(113.4,135.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AqRUcQkQgaAAgmMgDLgoRQADAVBUAPQBuAQCAAKQFIAMEzA5QDWAfDagUQELglEUgUQCHgPBrgZQBUgXAEgWMgDLAoSQAAAmkRAZQkNAamEAAQmCAAkPgag");
	this.shape_41.setTransform(113.4,135.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AqRUcQkQgaAAglMgDLgoSQADAVBUARQBtARCCALQE/ANEsA2QDXAdDZgWQERgpEegRQCFgPBsgYQBUgVAEgWMgDLAoSQAAAlkRAaQkNAamEAAQmCAAkPgag");
	this.shape_42.setTransform(113.4,135.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AqRUcQkQgaAAglMgDLgoSQADAVBUASQBuATCBAMQE3AOEmAzQDXAbDZgXQEYgtEmgRQCEgNBsgWQBUgUAEgWMgDLAoSQAAAlkRAaQkOAamDAAQmCAAkPgag");
	this.shape_43.setTransform(113.4,135.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AqQUcQkRgaAAglMgDLgoSQAEAWBUASQBtAVCCANQEvAQEfAvQDXAZDYgZQEfgvEvgQQCDgNBtgVQBUgSADgWMgDLAoSQAAAlkQAaQkPAamDAAQmCAAkOgag");
	this.shape_44.setTransform(113.4,135.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AqQUcQkRgaAAglMgDLgoSQAEAWBUAUQBsAWCEANQEmAREYAtQDZAXDXgbQEmgzE3gOQCBgMBugTQBUgSADgVMgDLAoSQAAAlkQAaQkPAamDAAQmCAAkOgag");
	this.shape_45.setTransform(113.4,135.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AqQUcQkRgaAAglMgDLgoSQAEAWBUAVQBsAYCFAPQEeARERApQDZAWDXgdQEsg2E/gNQCCgLBtgRQBUgRADgVMgDLAoSQAAAlkQAaQkPAamDAAQmDAAkNgag");
	this.shape_46.setTransform(113.4,135.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AqQUcQkRgZAAgmMgDLgoSQAEAWBUAXQBrAZCHAPQEUAUELAlQDaAUDWgfQEzg5FIgMQCAgKBugQQBUgPADgVMgDLAoRQAAAmkQAaQkPAamDAAQmDAAkNgag");
	this.shape_47.setTransform(113.4,135.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AqQUcQkRgZAAgmMgDLgoSQAEAWBVAZQBqAaCHAQQENAVEEAiQDaASDWggQE5g+FRgKQB/gJBvgPQBTgNADgVMgDLAoRQAAAmkQAaQkPAamDAAQmDAAkNgag");
	this.shape_48.setTransform(113.4,135.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AqQUcQkRgZAAgmMgDLgoSQAEAWBVAaQBqAcCIASQEEAVD+AfQDaAQDVgiQFAhAFZgKQB+gIBwgNQBTgNADgUMgDLAoRQAAAmkQAaQkPAamDAAQmDAAkNgag");
	this.shape_49.setTransform(113.4,135.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AqQUcQkRgZAAgmMgDLgoSQAEAXBVAaQBqAeCJASQD8AXD2AcQDbAODUglQFIhDFhgIQB+gHBvgMQBTgLADgUMgDLAoRQAAAmkQAaQkQAamCAAQmDAAkNgag");
	this.shape_50.setTransform(113.4,135.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AqQUcQkRgZAAgmMgDLgoSQAEAXBVAcQBqAfCJAUIHkAvQDbANDUgmQFOhHFqgHQB8gGBwgKQBTgKADgUMgDLAoRQAAAmkQAaQkQAamCAAQmDAAkNgag");
	this.shape_51.setTransform(113.4,135.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AqQUdQkQgZAAgmMgDMgoSQAEAWBVAeQBpAgCLAVQDrAZDpAVQDbAKDUgoQFVhKFygGQB8gFBxgIQBSgJADgUMgDLAoRQAAAmkQAaQkQAamCAAQmDAAkNgZg");
	this.shape_52.setTransform(113.4,135.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AqQUdQkQgZAAgmMgDMgoSQADAXBXAeQBoAiCMAWQDiAaDiASQDdAIDTgqQFchNF6gFQB7gEBygHQBRgIADgTMgDLAoRQAAAmkQAaQkQAamCAAQmDAAkNgZg");
	this.shape_53.setTransform(113.4,135.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AqQUdQkQgZAAgmMgDMgoSQADAXBXAgQBoAjCMAXQDbAbDcAOQDbAHDUgrQFihRGDgEQB5gDBzgFQBRgHADgTMgDLAoRQAAAmkQAaQkRAamBAAQmEAAkMgZg");
	this.shape_54.setTransform(113.4,135.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AqQUdQkQgZAAgmMgDMgoSQAEAXBWAhQBoAlCNAYQDSAcDVALQDdAFDSgtQFqhUGLgDQB5gCBygEQBRgFADgTMgDLAoRQAAAmkQAaQkRAamBAAQmEAAkMgZg");
	this.shape_55.setTransform(113.4,135.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AqQUdQkQgZAAgmMgDMgoSQAEAXBWAjQBnAmCPAZQDJAdDPAIQDdADDSgvQFwhXGUgCQB3gBBzgCQBRgEADgTMgDLAoRQAAAmkQAaQkRAamBAAQmEAAkMgZg");
	this.shape_56.setTransform(113.4,135.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AqQUdQkQgZAAglMgDMgoTQADAYBYAjQBmAoCQAaQDAAeDIAFQDdABDSgxQF3haGdgBIDqgBQBQgDADgSMgDLAoRQAAAlkQAbQkRAamBAAQmEAAkMgZg");
	this.shape_57.setTransform(113.4,135.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AqQUdQkQgZAAglMgDMgoTQADAYBYAlQBmApCRAbQC3AgDBABQDegBDSgzQF9heGlABIDqACQBQgCADgSMgDLAoRQAAAlkQAbQkRAamBAAQmEAAkMgZg");
	this.shape_58.setTransform(113.4,135.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// Layer 1
	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#D7F6FF").s().p("AsgAfQiRg1hig8QhZg2AAgZQNpBcDNgUQBqgKCKgWQCJgVBIgHQDFgTBlgGQDAgLBBAQQBkAZBPgRQAAAZhZA2QhiA8iRA1QmGCUmbAAQmaAAmGiUg");
	this.shape_59.setTransform(113.4,18);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#D7F6FF").s().p("AsgAeQiRg1hig8QhZg2AAgZQNNBZDKgUQBpgLCMgUQCHgUBMgGQDBgSBmgFQC+gKBDAQQBnAYBrgUQAAAZhZA2QhiA8iRA1QmGCVmbAAQmaAAmGiUg");
	this.shape_60.setTransform(113.4,18.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#D7F6FF").s().p("AsgAdQiRg1hig8QhZg2AAgZQMyBXDGgVQBpgLCMgTQCGgTBRgFQC8gRBngFQC9gIBEAPQBrAZCGgXQAAAZhZA2QhiA8iRA1QmGCVmbAAQmaAAmGiUg");
	this.shape_61.setTransform(113.4,18.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#D7F6FF").s().p("AsgAbQiRg1hig8QhZg2AAgZQMXBUDCgUQBogLCNgSQCGgSBUgFQC5gQBogDQC6gIBGAQQBvAYChgZQAAAZhZA2QhiA8iRA1QmGCUmbAAQmaAAmGiUg");
	this.shape_62.setTransform(113.4,18.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#D7F6FF").s().p("AsgAaQiRg1hig8QhZg2AAgZQL7BSC/gVID2gcQCEgRBZgEQC0gPBpgCQC5gHBHAPQByAZC9gcQAAAZhZA2QhiA8iRA1QmGCUmbAAQmaAAmGiUg");
	this.shape_63.setTransform(113.4,18.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#D7F6FF").s().p("AsgAZQiRg1hig8QhZg2AAgZQLgBPC7gVID2gbQCDgQBdgDQCwgOBrgCQC2gFBJAPQB2AYDYgeQAAAZhZA2QhiA8iRA1QmGCUmbAAQmaAAmGiUg");
	this.shape_64.setTransform(113.4,18.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#D7F6FF").s().p("AsgAYQiRg1hig8QhZg2AAgZQLEBNC4gVQBjgMCTgPQCCgPBhgCQCsgNBsgBQC1gEBKAPQB5AYD0ghQAAAZhZA2QhiA8iRA1QmGCUmbAAQmaAAmGiUg");
	this.shape_65.setTransform(113.4,18.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#D7F6FF").s().p("AsgAXQiRg1hig8QhZg2AAgZQKpBKC0gWQBigLCXgOQB+gPBmAAQCngNBtABQCzgEBMAPQB9AYEPgkQAAAZhZA2QhiA8iRA1QmGCVmbAAQmaAAmGiUg");
	this.shape_66.setTransform(113.4,18.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#D7F6FF").s().p("AsgAXQiRg1hig8QhZg2AAgZQKOBHCwgVQBggMCZgNQB9gNBqAAQCjgMBvABQCxgCBNAPQCBAXEqgmQAAAZhZA2QhiA8iRA1QmGCVmbAAQmaAAmGiUg");
	this.shape_67.setTransform(113.4,18.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#D7F6FF").s().p("AsgAXQiRg1hig8QhZg2AAgZQJyBECtgVQBfgMCbgMQB7gMBvABQCegLBwACQCvgBBPAPQCEAXFGgpQAAAZhZA2QhiA8iRA1QmGCVmbAAQmaAAmGiUg");
	this.shape_68.setTransform(113.4,18.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#D7F6FF").s().p("AsgAXQiRg1hig8QhZg2AAgZQJXBCCpgWQBdgMCdgLQB6gLBzACQCagKBxADQCuAABQAOQCIAYFhgsQAAAZhZA2QhiA8iRA1QmGCVmbAAQmaAAmGiUg");
	this.shape_69.setTransform(113.4,18.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#D7F6FF").s().p("AsgAXQiRg1hig8QhZg2AAgZQI8A/ClgWQBcgMCegJQB7gLB2ADQCVgJBzAEQCrABBSAOQCMAXF8guQAAAZhZA2QhiA8iRA1QmGCVmbAAQmaAAmGiUg");
	this.shape_70.setTransform(113.4,18.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#D7F6FF").s().p("AsgAXQiRg1hig8QhZg2AAgZQIgA9CigWQBagNChgIQB5gKB6AEQCRgIB0AFQCqACBTAOQCPAXGYgxQAAAZhZA2QhiA8iRA1QmGCVmbAAQmaAAmGiUg");
	this.shape_71.setTransform(113.4,18.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#D7F6FF").s().p("AsgAXQiRg1hig8QhZg2AAgZQIFA6CegWQBZgNCigHQB5gJB+AFQCNgIB0AHQCoADBVAOQCTAWGzgzQAAAZhZA2QhiA8iRA1QmGCVmbAAQmaAAmGiUg");
	this.shape_72.setTransform(113.4,18.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#D7F6FF").s().p("AsgAXQiRg1hig8QhZg2AAgZQHpA4CbgXQBXgNCkgGQB4gICCAGQCJgHB2AHQCmAFBWANQCWAXHPg2QAAAZhZA2QhiA8iRA1QmGCVmbAAQmaAAmGiUg");
	this.shape_73.setTransform(113.4,18.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#D7F6FF").s().p("AsgAWQiRg1hig8QhZg2AAgZQHPA2CWgXQBWgNCmgFQB2gHCJAHQCCgGB4AIQCkAGBXANQCbAXHpg4QAAAZhZA2QhiA8iRA1QmGCUmbAAQmaAAmGiVg");
	this.shape_74.setTransform(113.3,18.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#D7F6FF").s().p("AsgAWQiRg1hig8QhZg2AAgZQGzAzCTgWQBVgOCogDQB0gHCNAIQB+gFB5AJQCiAHBZANQCeAWIFg6QAAAZhZA2QhiA8iRA1QmGCUmbAAQmaAAmGiVg");
	this.shape_75.setTransform(113.3,18.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#D7F6FF").s().p("AsgAWQiRg1hig8QhZg2AAgZQGYAxCPgXQBTgOCqgCQB0gFCRAIQB6gEB5AKQChAIBaANQCiAWIgg9QAAAZhZA2QhiA8iRA1QmGCUmbAAQmaAAmGiVg");
	this.shape_76.setTransform(113.3,18.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#D7F6FF").s().p("AsgAWQiRg1hig8QhZg2AAgZQF8AuCMgXQBSgOCrgBQBzgECVAJQB2gDB7ALQCeAJBcAMQClAWI8g/QAAAZhZA2QhiA8iRA1QmGCUmbAAQmaAAmGiVg");
	this.shape_77.setTransform(113.3,18.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#D7F6FF").s().p("AsgAWQiRg1hig8QhZg2AAgZQFhAsCIgYQBQgOCuAAQBxgDCaAKQBzgCB6ALQCdALBdAMQCpAWJXhCQAAAZhZA2QhiA8iRA1QmGCUmbAAQmaAAmGiVg");
	this.shape_78.setTransform(113.3,18.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#D7F6FF").s().p("AsgAWQiRg1hig8QhZg2AAgZQFGApCEgXQBPgPCvABQBwgCCeALQBvgBB7AMQCbAMBfAMQCtAVJyhEQAAAZhZA2QhiA8iRA1QmGCUmbAAQmaAAmGiVg");
	this.shape_79.setTransform(113.3,18.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#D7F6FF").s().p("AsgAWQiRg1hig8QhZg2AAgZQEqAmCBgXQBNgPCxACQBvgBCjAMQBqAAB9ANQCZANBgAMQCwAVKOhHQAAAZhZA2QhiA8iRA1QmGCUmbAAQmaAAmGiVg");
	this.shape_80.setTransform(113.3,18.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#D7F6FF").s().p("AsgAWQiRg1hig8QhZg2AAgZQEPAkB9gYQBMgPCzAEQBtgBCnANQBmAAB+APQCXAOBiALQC0AWKphKQAAAZhZA2QhiA8iRA1QmGCUmbAAQmaAAmGiVg");
	this.shape_81.setTransform(113.3,18.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#D7F6FF").s().p("AsgAYQiRg1hig8QhZg2AAgZQD0AhB5gYQBKgPC1AEQBsABCsANQBhACCCAPQCTAPBjAMQC4AVLEhNQAAAZhZA2QhiA8iRA1QmGCUmbAAQmaAAmGiUg");
	this.shape_82.setTransform(113.3,18.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#D7F6FF").s().p("AsgAZQiRg1hig8QhZg2AAgZQDYAeB2gYQBJgPC2AFQBrACCwAOQBdADCDAQID2AbQC7AVLghPQAAAZhZA2QhiA8iRA1QmGCUmbAAQmaAAmGiUg");
	this.shape_83.setTransform(113.3,18.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#D7F6FF").s().p("AsgAaQiRg1hig8QhZg2AAgZQC9AcBygZQBHgPC5AHQBpACC0APQBZAECEARID2AcQC/AVL7hSQAAAZhZA2QhiA8iRA1QmGCUmbAAQmaAAmGiUg");
	this.shape_84.setTransform(113.3,18.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#D7F6FF").s().p("AsgAbQiRg1hig8QhZg2AAgZQChAZBvgYQBGgQC6AIQBoADC5AQQBUAFCGASQCNASBoALQDCAUMXhUQAAAZhZA2QhiA8iRA1QmGCUmbAAQmaAAmGiUg");
	this.shape_85.setTransform(113.3,18.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#D7F6FF").s().p("AsgAcQiRg1hig8QhZg2AAgZQCGAXBrgZQBEgPC9AIQBnAFC8ARQBRAFCGATQCMATBpALQDGAVMyhXQAAAZhZA2QhiA8iRA1QmGCUmbAAQmaAAmGiVg");
	this.shape_86.setTransform(113.3,18.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#D7F6FF").s().p("AsgAdQiRg1hig8QhZg2AAgZQBrAUBngYQBDgQC+AKQBmAFDBASQBMAGCHAUQCMAUBpALQDKAUNNhZQAAAZhZA2QhiA8iRA1QmGCUmbAAQmaAAmGiVg");
	this.shape_87.setTransform(113.3,18.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#D7F6FF").s().p("AsgAfQiRg1hig8QhZg2AAgZQBPARBkgZQBBgQDAALQBlAGDFATQBIAHCJAVQCKAWBqAKQDNAUNphcQAAAZhZA2QhiA8iRA1QmGCUmbAAQmaAAmGiUg");
	this.shape_88.setTransform(113.3,18);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#D7F6FF").s().p("AsgAdQiRg1hig8QhZg2AAgZQBqAUBngZQBDgPC+AKQBmAFDBASQBMAGCHAUQCMAUBpALQDKAUNOhZQAAAZhZA2QhiA8iRA1QmGCUmbAAQmaAAmGiVg");
	this.shape_89.setTransform(113.3,18.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#D7F6FF").s().p("AsgAcQiRg1hig8QhZg2AAgZQCEAXBrgZQBEgQC8AJQBnAEC+ASQBPAFCHATQCMAUBpAKQDGAVM0hXQAAAZhZA2QhiA8iRA1QmGCUmbAAQmaAAmGiVg");
	this.shape_90.setTransform(113.3,18.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#D7F6FF").s().p("AsgAbQiRg1hig8QhZg2AAgZQCfAZBugYQBGgQC6AIQBoADC5ARQBUAECGASQCNATBoALQDDAUMZhUQAAAZhZA2QhiA8iRA1QmGCUmbAAQmaAAmGiVg");
	this.shape_91.setTransform(113.3,18.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#D7F6FF").s().p("AsgAaQiRg1hig8QhZg2AAgZQC5AbBygYQBHgPC5AGQBpADC1APQBYAECEARID2AdQC/AUL/hSQAAAZhZA2QhiA8iRA1QmGCUmbAAQmaAAmGiUg");
	this.shape_92.setTransform(113.3,18.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#D7F6FF").s().p("AsgAZQiRg1hig8QhZg2AAgZQDUAeB1gYQBIgPC3AFQBrACCwAOQBdADCDAQID2AcQC8AVLkhQQAAAZhZA2QhiA8iRA1QmGCUmbAAQmaAAmGiUg");
	this.shape_93.setTransform(113.3,18.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#D7F6FF").s().p("AsgAYQiRg1hig8QhZg2AAgZQDuAgB5gYQBKgPC1AFQBsAACsAOQBhACCBAQQCTAPBkALQC4AVLKhNQAAAZhZA2QhiA8iRA1QmGCUmbAAQmaAAmGiUg");
	this.shape_94.setTransform(113.3,18.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#D7F6FF").s().p("AsgAXQiRg1hig8QhZg2AAgZQEJAjB8gYQBLgPC0AEQBtgBCoANQBlABB+APQCXAOBiAMQC1AVKvhLQAAAZhZA2QhiA8iRA1QmGCUmbAAQmaAAmGiUg");
	this.shape_95.setTransform(113.3,18.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#D7F6FF").s().p("AsgAWQiRg1hig8QhZg2AAgZQEjAmCAgYQBNgOCxACQBugBCkAMQBpAAB+AOQCYAMBhAMQCxAWKVhIQAAAZhZA2QhiA8iRA1QmGCUmbAAQmaAAmGiVg");
	this.shape_96.setTransform(113.3,18.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#D7F6FF").s().p("AsgAWQiRg1hig8QhZg2AAgZQE9AoCEgXQBOgPCwACQBvgCCgALQBtgBB8ANQCbAMBfAMQCtAVJ7hFQAAAZhZA2QhiA8iRA1QmGCUmbAAQmaAAmGiVg");
	this.shape_97.setTransform(113.3,18.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#D7F6FF").s().p("AsgAWQiRg1hig8QhZg2AAgZQFYArCHgYQBPgOCuAAQBxgDCcALQBxgCB7AMQCcALBeAMQCqAWJghDQAAAZhZA2QhiA8iRA1QmGCUmbAAQmaAAmGiVg");
	this.shape_98.setTransform(113.3,18.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#D7F6FF").s().p("AsgAWQiRg1hig8QhZg2AAgZQFyAtCLgXQBRgOCsgBQBygECXAKQB0gDB8ALQCdAKBdAMQCmAWJGhAQAAAZhZA2QhiA8iRA1QmGCUmbAAQmaAAmGiVg");
	this.shape_99.setTransform(113.3,18.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#D7F6FF").s().p("AsgAWQiRg1hig8QhZg2AAgZQGNAwCOgXQBSgOCrgCQBzgFCTAJQB4gEB6ALQCgAIBbANQCjAWIrg+QAAAZhZA2QhiA8iRA1QmGCUmbAAQmaAAmGiVg");
	this.shape_100.setTransform(113.3,18.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#D7F6FF").s().p("AsgAWQiRg1hig8QhZg2AAgZQGnAyCSgXQBUgNCogDQB1gGCOAIQB9gFB5AKQChAHBaANQCfAWIRg7QAAAZhZA2QhiA8iRA1QmGCUmbAAQmaAAmGiVg");
	this.shape_101.setTransform(113.3,18.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#D7F6FF").s().p("AsgAWQiRg1hig8QhZg2AAgZQHCA1CVgXQBVgNCngFQB1gGCLAHQCAgFB4AIQCkAGBYANQCcAXH2g5QAAAZhZA2QhiA8iRA1QmGCUmbAAQmaAAmGiVg");
	this.shape_102.setTransform(113.3,18.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#D7F6FF").s().p("AsgAWQiRg0hig9QhZg2AAgZQHcA3CYgXQBXgMClgGQB3gICFAHQCGgHB3AIQClAGBWAMQCZAXHcg3QAAAZhZA2QhiA9iRA0QmGCUmbAAQmaAAmGiUg");
	this.shape_103.setTransform(113.4,18.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#D7F6FF").s().p("AsgAXQiRg1hig8QhZg2AAgZQH2A5CcgXQBYgNCkgGQB4gICAAFQCLgHB1AGQCnAFBVANQCVAXHCg1QAAAZhZA2QhiA8iRA1QmGCVmbAAQmaAAmGiUg");
	this.shape_104.setTransform(113.4,18.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#D7F6FF").s().p("AsgAXQiRg1hig8QhZg2AAgZQIRA7CfgWQBagNChgHQB5gKB9AFQCOgIB1AGQCoADBUANQCSAXGngyQAAAZhZA2QhiA8iRA1QmGCVmbAAQmaAAmGiUg");
	this.shape_105.setTransform(113.4,18.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#D7F6FF").s().p("AsgAXQiRg1hig8QhZg2AAgZQIrA+CjgWQBbgNCggIQB6gLB4AEQCTgJBzAFQCrACBSAOQCOAXGNgwQAAAZhZA2QhiA8iRA1QmGCVmbAAQmaAAmGiUg");
	this.shape_106.setTransform(113.4,18.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#D7F6FF").s().p("AsgAXQiRg1hig8QhZg2AAgZQJGBACmgWQBdgMCdgKQB8gLB0ADQCXgKByAEQCsABBRAOQCLAXFygtQAAAZhZA2QhiA8iRA1QmGCVmbAAQmaAAmGiUg");
	this.shape_107.setTransform(113.4,18.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#D7F6FF").s().p("AsgAXQiRg1hig8QhZg2AAgZQJgBDCqgWQBegMCcgLQB7gMBxACQCcgLBxADQCuAABPAOQCHAYFYgrQAAAZhZA2QhiA8iRA1QmGCVmbAAQmaAAmGiUg");
	this.shape_108.setTransform(113.4,18.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#D7F6FF").s().p("AsgAXQiRg1hig8QhZg2AAgZQJ7BFCtgVQBfgMCbgMQB8gNBtABQCggLBvACQCwgCBOAPQCEAXE9goQAAAZhZA2QhiA8iRA1QmGCVmbAAQmaAAmGiUg");
	this.shape_109.setTransform(113.4,18.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#D7F6FF").s().p("AsgAXQiRg1hig8QhZg2AAgZQKVBICxgWQBhgMCYgMQB+gOBpAAQCkgMBuABQCxgCBNAOQCAAYEjgmQAAAZhZA2QhiA8iRA1QmGCVmbAAQmaAAmGiUg");
	this.shape_110.setTransform(113.4,18.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#D7F6FF").s().p("AsgAXQiRg1hig8QhZg2AAgZQKvBLC1gVQBigMCXgOQB+gPBlgBQCogNBtABQC0gEBLAPQB8AYEJgjQAAAZhZA2QhiA8iRA1QmGCUmbAAQmaAAmGiUg");
	this.shape_111.setTransform(113.4,18.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#D7F6FF").s().p("AsgAYQiRg1hig8QhZg2AAgZQLKBNC4gVQBkgLCTgPQCBgQBhgCQCsgOBsAAQC1gFBKAPQB5AYDuggQAAAZhZA2QhiA8iRA1QmGCUmbAAQmaAAmGiUg");
	this.shape_112.setTransform(113.4,18.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#D7F6FF").s().p("AsgAZQiRg1hig8QhZg2AAgZQLkBQC8gVID2gcQCDgQBdgDQCwgOBrgCQC3gFBIAPQB1AYDUgeQAAAZhZA2QhiA8iRA1QmGCUmbAAQmaAAmGiUg");
	this.shape_113.setTransform(113.4,18.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#D7F6FF").s().p("AsgAaQiRg1hig8QhZg2AAgZQL/BSC/gUID2gdQCEgRBYgEQC1gPBpgDQC5gGBHAPQByAYC5gbQAAAZhZA2QhiA8iRA1QmGCUmbAAQmaAAmGiUg");
	this.shape_114.setTransform(113.4,18.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#D7F6FF").s().p("AsgAcQiRg1hig8QhZg2AAgZQMZBUDDgUQBogLCNgTQCGgSBUgEQC5gRBogDQC6gIBGAQQBuAYCfgZQAAAZhZA2QhiA8iRA1QmGCVmbAAQmaAAmGiUg");
	this.shape_115.setTransform(113.4,18.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#D7F6FF").s().p("AsgAdQiRg1hig8QhZg2AAgZQM0BXDGgVQBpgKCMgUQCHgTBPgFQC+gSBngEQC8gJBEAQQBrAZCEgXQAAAZhZA2QhiA8iRA1QmGCVmbAAQmaAAmGiUg");
	this.shape_116.setTransform(113.4,18.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#D7F6FF").s().p("AsgAeQiRg1hig8QhZg2AAgZQNOBZDKgUQBpgLCMgUQCHgUBMgGQDBgSBmgFQC+gKBDAPQBnAZBqgUQAAAZhZA2QhiA8iRA1QmGCVmbAAQmaAAmGiUg");
	this.shape_117.setTransform(113.4,18.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_59}]}).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_59}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,226.8,268.7);


(lib.milk_back = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D7F6FF").s().p("AsgBOQiRg3hig6QhZg2AAgZQAAguFMggQFMghHUAAQHWAAFLAgQFMAhAAAtQAAAZhZA2QhiA6iRA3QmGCVmbAAQmaAAmGiUg");
	this.shape.setTransform(113.4,22.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,226.8,45.3);


(lib.groundchunk2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#61BA3D").s().p("AgmAEIAugTIAfANIgOAMIgXAGg");
	this.shape.setTransform(4,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7D5123").s().p("AgTgJIAjgPIAFAZIgRALIgKAJIgOADg");
	this.shape_1.setTransform(6.1,3.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#94683A").s().p("AAFARIgGgHIgKgDIgIgHIgBgUIApALIgEAeg");
	this.shape_2.setTransform(2.3,4.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#94683A").s().p("AAAAFQgGgBgBgEQgBgDAIgBQAIAAAAAEQAAAFgIAAIAAAAg");
	this.shape_3.setTransform(11.1,8.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#94683A").s().p("AAAAHQgKAAgBgHQgBgGAMAAQANgCAAAIQgBAIgLAAIgBgBg");
	this.shape_4.setTransform(13.8,7.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15.1,9.4);


(lib.ground_dirt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#94683A").s().p("AibAHIAIgyIAtAMIAkACQARAFANAHQAMAHAKADQAYAHArABQAdAEAVANQAOAJAbAEIANANg");
	this.shape.setTransform(15.7,4.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31.4,8.9);


(lib.ground_chunk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#61BA3D").s().p("Ag+ALIBMgiIANABIARAMIASAKIgtADIgQAPIgUAGg");
	this.shape.setTransform(6.3,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7D5123").s().p("AgogCIAigcIAwAJIAAALIgSAKIgXAGIgcAVIgPAEg");
	this.shape_1.setTransform(8.3,4.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#94683A").s().p("AAFARIgGgHIgKgDIgIgHIgBgUIApALIgEAeg");
	this.shape_2.setTransform(2.3,5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12.6,7.9);


(lib.ground = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#82DC5E").s().p("AxREBIjhk7QB9gUBOgQQAtgJBqgbQBTgVAQAAIDGgUID3gqQAlgGCegRQC4gUA1AAQBTAAB1AIQB2AHAmAIICBAXQB8AWAvAEQAKABCGAcQCBAbAZAAQAKAABpAVQBlAUAMgCQAUgFCBAkIi1E7g");
	this.shape.setTransform(133.1,25.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,266.3,51.5);


(lib.fly = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4C4C4C").s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgIAAgGgGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.1,-2.1,4.4,4.4);


(lib.egg_shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.2)").s().p("A3sBUQjWgRhTgWQhOgWAugXQBegvH1gkQIagnLIAAQLJAAIaAnQH1AkBeAvQAuAXhOAWQhSAWjWARQnoAnwGAAQwEAAnogng");
	this.shape.setTransform(186.4,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,372.7,24.7);


(lib.egg_hen_flap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_3 = function() {
		/* gotoAndPlay(1);
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#51402E").s().p("AhKFgQhVgPAFhzQACgeA0o8QAjBPgEB7QAsiuAWgFQAUgEhDDPQBNiMAXAEQAWADhTB9QBOgxAbAFQAbAFhyBOQBpggABAgQACAfhzAGQCiAEgHAZQgGAYiLgMQCVAWgFATQgFASiFADQBuAOgCAZQgBAahigYQBgAfgMAZQgMAZhrg1QB4A/gGAVQgGAWhUgzQBOA5gGATQgFAThXgqQBCAlgIASQgIATg9ghQBZBAgJAPQgJAQhNgQQAZAugiAQQgKAFgIAAQgUAAgEgdg");
	this.shape.setTransform(41.9,8.2);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#51402E").s().p("AA2g7QA9gJi3CBQBAhwA6gIg");
	this.shape_1.setTransform(86.8,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#51402E").s().p("AAChNQAbgCgiCdQgTiZAagCg");
	this.shape_2.setTransform(77.5,-26.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#51402E").s().p("Ai6ElQgPgHgRgaQgSgcgJggQgXhUA5ggQArgkGElfQAUgWgNA3QgMA3h9BSQCYhGAFASQAFARh/BLQB9gjACAPQADAPjNBTQCggjAAAUQAAAUiPAZQB4AXgCARQgDASiYgFQCsAWgCASQgDARiEgKQB6AegHANQgIAMhXgPQA8A8gNANQgMAMg/g8QAyBLgPANQgPAMg3g8QAKBOgUAHQgSAIgZgUQgmARgnAAQgnAAgngRg");
	this.shape_3.setTransform(47.4,13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#51402E").s().p("AiqC5QgoAPgRACQgRADgagVQgfgXgKgiQgbhfA+g/IJUi5QALBCj7BAQDmgqAAAWQAAAXjkAgQDDAFgMAhQgNAejPgrQDDA4gIAPQgHAPi3gtQBVAggMAUQgNAUhmg+QA0A+gMAPQgNAPgthGQAmBngPAPQgNAPghhnQAFBngeAMQgeANADh7QgKCBgSAFIgEABQgRAAgcggg");
	this.shape_4.setTransform(55.1,24.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).to({_off:true},1).wait(3));

	// leggs
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#765C3B").s().p("AgkAlIALgSIASgkIAsggIgKAYIg9BKg");
	this.shape_5.setTransform(29.5,57);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#765C3B").s().p("AguAoIAlhYIBigvIhmB6IgPAeIgMgGIgwAtg");
	this.shape_6.setTransform(37.8,59.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(4));

	// hen
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#645544").s().p("AgDADQgDgDAEgDQACgDAEACQAEADgGAEQgBABAAAAQgBABAAAAQAAAAAAAAQAAABAAAAQgBAAAAgBQAAAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape_7.setTransform(7.5,8.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B2584B").s().p("AgiAvQgGgLAAgLQAAgHAKgOIgSgWIAIghQBOgaAJA5QAJA3gmgMIACgTIgNARQAFAlgWACIgDAAQgOAAgHgNgAAOgSIAUgIQAEgLgEgCIgTgFg");
	this.shape_8.setTransform(8.6,12);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B2584B").s().p("AgXANQgIgZACgCIAGAGQAFAFACgBQABgBgFgMQgFgMABgBQACgBAJAJQAJAKABgCQAAgBgGgPQgGgNACAAQABAAAGAIQAFAJABgBQAAgCgCgKIgCgKIAEALQAEALABgCQABgCgDgIIgCgIQABgBANAXQACgOALgCQAKAAgDAgIgKAFIgYARIgEAfIggAFg");
	this.shape_9.setTransform(4.3,5.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#645544").s().p("AAdEVIhEgHIg4gEQgMgBhdgfIgOgPQgIACgOgCQgMgDgzgnQg1gqgXgdQghgpAQi6IgQg6Ig/AUIAQgqIA4g1IARgIQAYgOARAAQASAAAlAaIARAIIgBAPICBBbQAfADAPgDQAOgDA4AFQAigRBGAMQA1gHBBAcQAYgGAuAdQAhAAAnA3IA/AVIgOAMIAYAJIAsAeQAVAdgGAQQgGAPgOgCQAEAYgNALQgHAHgJgDIgLgEQgHACgJAPIgdAJIglgDQgBANgUAAQgVAAgOgXIhaBpQgyAigJAAg");
	this.shape_10.setTransform(46.5,30.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,0.7,94.6,68.3);


(lib.egg_hen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#645544").s().p("AgDADQgDgDAEgDQACgDAEACQAEADgGAEQgBABAAAAQgBABAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape.setTransform(8.2,7.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#51402E").s().p("AiLBwQhWgUgCiWQAYguAbgSQAbgTCzABIBhAuQBkBRABANQAAANgbAGQAXAZgFALQgFANgOAQQgSAWgRAFQgcAHicAAIAKAXQgsgJhWgUg");
	this.shape_1.setTransform(46.2,32.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#765C3B").s().p("Ag1ADIAWgDIAmgMIA2AMIgYAHIhhAGg");
	this.shape_2.setTransform(26.7,54.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B2584B").s().p("AgiAuQgGgKAAgLQAAgIAKgOIgSgVIAIghQBOgaAJA5QAJA3gmgNIACgSIgNAQQAFAlgWADIgDAAQgOAAgHgOgAAOgSIAUgJQAEgLgEgBIgTgFg");
	this.shape_3.setTransform(9.3,11.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B2584B").s().p("AgXANQgIgaACgBIAGAFQAFAGACgBQABgCgFgMQgFgLABgBQACgBAJAKQAJAIABgBQAAgCgGgOQgGgNABAAQABgBAGAJQAGAJABgCQAAgBgCgKIgCgKIAEAKQAFALAAgCQABgBgDgIIgCgJQABAAANAXQACgPALgBQAKgBgDAgIgKAGIgYARIgEAeIggAGg");
	this.shape_4.setTransform(5,5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#645544").s().p("AAdEVIhEgHIg4gEQgMgChdgeIgOgQQgIADgOgDQgMgCgzgnQg1gqgXgdQghgpAQi6IgQg6Ig/AVIAQgrIA4g2IARgHQAYgOARAAQASAAAlAaIARAIIgBAPICBBcQAfACAPgCQAOgDA4AEQAigRBGALQA1gGBBAcQAYgGAuAdQAhAAAnA2IA/AWIgOANIAYAIIAsAeQAUAcgFAQQgGAQgOgBQAEAXgNALQgHAHgJgDIgLgEQgHABgJAQIgdAJIglgDQgBANgUAAQgVAAgOgXIhaBpQgzAigIAAg");
	this.shape_5.setTransform(47.3,29.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#765C3B").s().p("AhAAQIhCgEIBFgHIBaghIBmAoIifAIIghAJg");
	this.shape_6.setTransform(35.9,55.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,94.5,58.9);


(lib.egg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DEDEC7").s().p("Auje4QkwifjKkrQF2EHIWAAQK2AAGhm5QC8jHB4kXQBykIAulAQAtkxgTlQQgTlGhNlFQhNlDh/kgQiCkmipjkQDiCqC9EYQC2ENCBFWQB/FSA8FvQA9F1gQFiQgQF0hjE6QhpFOi9DxQjLECkhCJQk3CSmLAAQmvAAlIisg");
	this.shape.setTransform(178.7,238.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9F9EE").s().p("AjYFCQhAgsASh9QASh9BaiDQBaiGBrg/QBtg/BBAqQBAAsgSB9QgSB9haCDQhaCGhrA/QhBAmgxAAQgiAAgagRg");
	this.shape_1.setTransform(93,80.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0F0D9").s().p("EgMfAgWQk6i0jIlNQi5k2hHmgQhEmIAom3QAnmpCFmVQCHmYDQk9QDalMELi2QEejCE3gBQE3ABEeDCQEMC2DZFMQDRE9CGGYQCGGVAnGpQAnG3hDGIQhIGgi5E2QjHFNk7C0QlVDDnKgBQnJABlWjDg");
	this.shape_2.setTransform(161.3,226.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,322.6,453);


(lib.duck = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("Ag8AUQAAgrAlgWQAPgJALABQAOABADAKQAGATgCAPQANgHAPAMQAKAFgCAJQgBAIgJAGQgIAGgKAAQgKAAgFgHIgDgJIgFAFQgVAYgSAHQgHADgFAAQgSAAAAgig");
	this.shape.setTransform(58.6,-37.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.498)").s().p("AgKANQgHgKAIgLQAJgNAJAIQAMAJgOAMQgHAJgEAAQgEAAgCgEg");
	this.shape_1.setTransform(100.9,30);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.498)").s().p("AgPANQgKgNALgMQAMgMAQANQAIAGgBAGQgBAHgIAGQgHAFgHAAQgJAAgEgGg");
	this.shape_2.setTransform(97.4,6.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.498)").s().p("AgNBYQgDgEADgLQAMgtgBgYQgCgigcghIgNgRQgDgGAIgDQAXgHATARQAbAUAMA1QALAygIAXQgJAXggACIgDAAQgLAAgCgEg");
	this.shape_3.setTransform(103.4,18.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.298)").s().p("ABiBPQgEgEgBgQIgCggQgCgSgHgHQghgdiEghQgwgMgEgDQgGgFA0ABQAwAAAvAOQAxANAiAWQAlAXAIAYQAKAcgbAaQgKAJgGAAIgDgBg");
	this.shape_4.setTransform(62,17.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.498)").s().p("AgGASQgmgVACgVQABgVAuAhQATAMALAMQAMAOgFAEQgEADgGAAQgOAAgYgPg");
	this.shape_5.setTransform(86.1,-43.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.498)").s().p("AgtA2QgJgYAogyQAlg0ASAIQANAGgMAXQgTAkgCAKQgGAcgYATQgMAIgJAAQgKAAgFgMg");
	this.shape_6.setTransform(16.4,-12.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.298)").s().p("AgOALQgIgLAKgKQAKgLANAMQAQAJgRAMQgHAEgFABQgIAAgEgGg");
	this.shape_7.setTransform(69.4,27.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.498)").s().p("AgmABIgCgBQAPgBAXgGIAegIQAVgFgOAgQgUAFgPAAQgbAAgLgQg");
	this.shape_8.setTransform(108.4,-32.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.298)").s().p("AgQANQgKgNAMgNQAMgMAQANQAIAHgBAGQgBAHgIAGQgIAFgGAAQgJAAgFgGg");
	this.shape_9.setTransform(101.3,-29.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E3D463").s().p("AhXCbQhLgTAJhAQgUACgVgJQgVgKgMgRQgfgqAtg2QhzghAmgzQAJgMBXgFQBcgFBkAJQB2ALBMAbQBcAhAOA1QAPA3hIA2Qg/AvhkAYQg6ANgtAAQghAAgdgHg");
	this.shape_10.setTransform(48.2,22.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F97233").s().p("AhiAzQABgXAcgbQAYgVgFgjQgCgSgHgOQAQACAEAGQANAVAqgHIBCgPQAUgEgNAfQgKAagLAOIAWgBQAKACgCAMQgLAghHAcQgYALhAARQgagOAAgXg");
	this.shape_11.setTransform(103,-25.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F0E170").s().p("AgrgUIBXAUIhXAVg");
	this.shape_12.setTransform(78.2,-32.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E6B800").s().p("AggAgQgNgNAAgTQAAgSANgOQAOgNASAAQATAAAOANQAOAOgBASQABATgOANQgOAOgTAAQgSAAgOgOg");
	this.shape_13.setTransform(82.4,-32.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F0E170").s().p("AnJFcQhlh7AejBQAMhLAfhGQAchBAjgmQAiglAYAIQAaAJADA/QBMBmAPACQBwAMAxAPIAcAIQAPAEAXABQBFAEg5g/QhjhygHhlQgDguAng1QApg6A+gaQBLgeBTAaQBhAgBeBsQAQABAEAGQANAVAsgHIBCgPQAUgEgNAgQgKAZgLAOIAWAAQAKACgCALQgLAihHAcQgaALhAARQhhBiBfAoQBGAdAtBVQAxBcgUBaQgXBrhzA+QiJBKj3AAQk6AAh/ibg");
	this.shape_14.setTransform(59.2,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.6,-49.6,107.4,100.8);


(lib.dirt_splatter_right = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#94683A").s().p("AgIAIQgNgGAGgGQAGgIAQAFQARAEgKAHQgGAGgIAAQgCAAgGgCg");
	this.shape.setTransform(34.8,15.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#94683A").s().p("AgMANQgugRAJgKQAPgSAxAUQAUAIAKAHQALAKgIAGQgGAFgLAAQgQAAgbgLg");
	this.shape_1.setTransform(30.2,2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#94683A").s().p("AgKALQgSgIAHgJQAIgLAWAHQAYAGgOAKQgIAIgKAAQgFAAgGgDg");
	this.shape_2.setTransform(29.7,13.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#94683A").s().p("AgGAOQgLgKAEgLQAFgOANAIQAQAIgJAOQgEAGgFACIgDAAQgDAAgDgDg");
	this.shape_3.setTransform(15,8.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#94683A").s().p("AgNANQgVgJAJgLQAIgNAcAHQAOAEADAHQADAEgIAGQgGAGgKACIgHAAQgGAAgHgDg");
	this.shape_4.setTransform(25,16.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#94683A").s().p("AgKAWQgQgPAHgTQAHgVAVAMQALAGACALQACAIgGAJQgFAJgIADIgFABQgFAAgFgEg");
	this.shape_5.setTransform(9.3,4.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#94683A").s().p("AgQAUQgXgMgOgLQgPgOAFgHQAKgOAZACQAWADAYANQAaAMANANQAOAQgKAJQgIAHgNAAQgWAAgigRg");
	this.shape_6.setTransform(16.2,6.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#94683A").s().p("AAEAeQgOgDgOgJQgMgJgDgJQgDgMAJgHQAJgJAVgBQAUgBAMALQALAIAAAMQABANgKAJQgHAHgNAAIgHAAg");
	this.shape_7.setTransform(4.1,3.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36.6,18.2);


(lib.dirt_splatter_left = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#94683A").s().p("AgNAEQgKgHASgEQAQgFAFAIQAFAGgNAGQgFACgDAAQgGAAgHgGg");
	this.shape.setTransform(1.8,21.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#94683A").s().p("AgvATQgIgGALgKQALgHAUgIQAwgUAPARQAEAFgMAJQgLAGgSAHQgaAMgRAAQgKAAgHgFg");
	this.shape_1.setTransform(16.1,15.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#94683A").s().p("AgSAGQgGgFACgDQACgFAMgDQAWgHAIALQAHAJgSAIQgHADgEAAQgKAAgIgIg");
	this.shape_2.setTransform(5.8,15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#94683A").s().p("AgLAIQgJgOAQgIQANgIAFAOQAEAMgLAKQgEAEgDAAQgFAAgGgKg");
	this.shape_3.setTransform(24.8,13.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#94683A").s().p("AgXAIQgHgGADgEQACgHAPgEQAbgIAJAOQAJALgVAJQgIAEgGAAQgMAAgLgJg");
	this.shape_4.setTransform(8.8,23.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#94683A").s().p("AgEAZQgIgDgFgJQgGgJACgIQACgLALgGQAVgMAHAVQAHATgQAPQgFAEgGAAIgEgBg");
	this.shape_5.setTransform(33.4,3.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#94683A").s().p("AhJAlQgMgLARgTQAQgQAegPQAegQAbgDQAfgDALARQAGAJgSARQgRANgcAOQgcAPgZAEIgQABQgQAAgIgHg");
	this.shape_6.setTransform(31,9.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#94683A").s().p("AgeAeQgJgLAAgSQAAgQALgMQAMgNATABQAVABAKAMQAIAKgDAPQgEANgLALQgNANgPADIgGABQgMAAgIgKg");
	this.shape_7.setTransform(39.4,4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.4,25.6);


(lib.dirt_plant_right = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#82DC5E").s().p("Ag+AQQAhg8BcAHQhbALgVBBg");
	this.shape.setTransform(8,11.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#82DC5E").s().p("AgzA1QAPhsBYgNQhVAbACBug");
	this.shape_1.setTransform(5.3,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.4,15.1);


(lib.dirt_plant_left = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#82DC5E").s().p("AgoBAQgEhtBVgdQhPAqAVBrg");
	this.shape.setTransform(14.6,7.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#82DC5E").s().p("Ag4gvQBbAKAWBAIgQAVQgJhDhYgcg");
	this.shape_1.setTransform(5.8,10.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.7,15.7);


(lib.diaperpile = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhThGIBTgnIBUC0IhUAng");
	this.shape.setTransform(-26.2,-17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0D1EB").s().p("Ag9ghIAkgWQAUgNAWAFQAXAGANAUQANAVgFAVQgGAYgUANIgjAXg");
	this.shape_1.setTransform(-17.2,-24);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#F0D1EB").ss(0.3,1,1).p("AAABBIg9hiIAkgWQAUgNAWAFQAXAGANAUQANAVgFAVQgGAYgUANg");
	this.shape_2.setTransform(-17.2,-24);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#B3B3B3").ss(0.4,1,1).p("AA5heQhnA+g5BAQgYAbAOAWQANAVAjgJQBTgWBlhE");
	this.shape_3.setTransform(-28.9,-18);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#B3B3B3").ss(0.4,1,1).p("AgZgZQAMgIANADQANAEAHAMQAIAMgDAMQgDAOgNAI");
	this.shape_4.setTransform(-36.9,-11.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Al0CoIAEgKIAQgmQAdhGAig2QB1i8CXABQDLACC/F9g");
	this.shape_5.setTransform(-10.4,-19.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag1hfIBagIIARDHIhaAIg");
	this.shape_6.setTransform(78,-25.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#63A1CC").s().p("Ag3gzIAqgIQAVgFAVANQAUANAFAYQAFAVgNAVQgNAUgYAFIgnAJg");
	this.shape_7.setTransform(89.7,-29.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#759EC7").ss(0.3,1,1).p("Ag3gzIAqgIQAVgFAVANQAUANAFAYQAFAVgNAVQgNAUgYAFIgnAJg");
	this.shape_8.setTransform(89.7,-29.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#B3B3B3").ss(0.4,1,1).p("ABjhDQh2AWhMArQggAPAFAZQAGAZAkADQBVAIB2gd");
	this.shape_9.setTransform(74.5,-27.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#B3B3B3").ss(0.4,1,1).p("AgTggQAOgDAKAIQAMAIADAOQADAMgIAMQgIAMgMAD");
	this.shape_10.setTransform(66.6,-24.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FBFBDC").s().p("AATCUQgagMgIgRQgJgSgegSQgTgLgUgCIgcAAQgNAAgHgJQgIgKgFgcQgIgpAjgeQASgQADgEQAIgMgGgPQgPggAagbQB6BTB/DTQg7APgmAAQgZAAgPgHg");
	this.shape_11.setTransform(104.7,-28.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AmoDIQC/moDNgBQCVgBCpDpQAxBEAyBZIAkA+g");
	this.shape_12.setTransform(84.1,-26.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(140,125,79,0.098)").s().p("AiiCtQg8ivAeg3QARggA6AwIApAiQATAMAFgFQAFgHgFgGIgOgJQgVgOAKgYQAKgXAPgFQASgEAHgKQAGgJgEgJQgCgFgIgMQgRgXAMgRQAXghDcAoIgMBTQhEEEgHAPQgDAFggAAQhAAAizgUg");
	this.shape_13.setTransform(39.7,-9.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F8F8DE").s().p("AhThGIBTgnIBUC0IhUAng");
	this.shape_14.setTransform(22.2,-20.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#63A1CC").s().p("Ag9ggIAkgXQAUgNAWAGQAYAFAMAVQANAUgFAWQgGAYgUANIgjAWg");
	this.shape_15.setTransform(31.2,-27.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#759EC7").ss(0.3,1,1).p("AAjArIgjAWIg9hhIAkgXQAUgNAWAGQAYAFAMAVQANAUgFAWQgGAYgUANg");
	this.shape_16.setTransform(31.2,-27.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#B3B3B3").ss(0.4,1,1).p("AA5heQhnA9g5BBQgYAbAOAWQANAVAjgJQBTgWBlhE");
	this.shape_17.setTransform(19.5,-21.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#4C4C4C").ss(0.4,1,1).p("AgZgZQAMgIANADQANAEAHAMQAIAMgDAMQgDAOgNAI");
	this.shape_18.setTransform(11.5,-15.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F8F8DE").s().p("AmbDwIAPg3QAdhiAjhQQB1kHCXABQDKABEWHRIs/AtIAEgQg");
	this.shape_19.setTransform(44.3,-27.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E3EBD1").s().p("AhjAqQBFhxBChNQAtAYAAAlQAAAXgfAEIgVADQgKAEgBAIQgBAJAYAQIAzAeQBKAvgFAlQgEAfglAFIgSACQgEACAKAHIkMAIg");
	this.shape_20.setTransform(-110.5,-18.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F0F8DE").s().p("Ag1BgIARjHIBaAIIgRDHg");
	this.shape_21.setTransform(-78.1,-25.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#63A1CC").s().p("AgIA1QgYgFgNgUQgNgVAFgVQAFgYAUgNQAUgOAWAGIApAIIgYBxg");
	this.shape_22.setTransform(-89.8,-29.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#759EC7").ss(0.3,1,1).p("AA3gzIgpgIQgWgGgUAOQgUANgFAYQgFAVANAVQANAUAYAFIAnAJg");
	this.shape_23.setTransform(-89.8,-29.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#B3B3B3").ss(0.4,1,1).p("AhihDQB2AWBMArQAgAPgFAZQgGAZgkADQhVAIh2gd");
	this.shape_24.setTransform(-74.6,-27.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#B3B3B3").ss(0.4,1,1).p("AAUggQgOgDgKAIQgMAIgDAOQgDAMAIAMQAIAMAMAD");
	this.shape_25.setTransform(-66.7,-24.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F0F8DE").s().p("AmECkQAyhZAxhEQCpjpCVABQDNABC/GoItRAaIAkg+g");
	this.shape_26.setTransform(-84.1,-26.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F8F8F8").s().p("AhThHIBTgmIBUC0IhUAng");
	this.shape_27.setTransform(-50.2,-33);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#63A1CC").s().p("Ag9ggIAkgXQAUgNAWAGQAYAFAMAVQANAUgFAWQgGAYgUANIgjAWg");
	this.shape_28.setTransform(-41.1,-39.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#759EC7").ss(0.3,1,1).p("Ag9ggIAkgXQAUgNAWAGQAYAFAMAVQANAUgFAWQgGAYgUANIgjAWg");
	this.shape_29.setTransform(-41.1,-39.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#B3B3B3").ss(0.4,1,1).p("AA5heQhnA9g5BBQgYAbAOAWQANAVAjgJQBTgWBlhE");
	this.shape_30.setTransform(-52.9,-33.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#B3B3B3").ss(0.4,1,1).p("AgZgZQAMgIANADQANAEAHAMQAIAMgDAMQgDAOgNAI");
	this.shape_31.setTransform(-60.9,-27.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F8F8F8").s().p("AmfDSIAEgOIAQgvQAchVAjhEQB1jmCXABQDKABEWHSg");
	this.shape_32.setTransform(-40.1,-30.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AhtAEICxhZIAqBSIixBZg");
	this.shape_33.setTransform(17.9,-40.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#63A1CC").s().p("AgDA+QgYgFgOgUIgXgjIBfhAIAYAkQANAUgEAVQgFAYgUAOQgPAKgRAAIgKgBg");
	this.shape_34.setTransform(24.9,-32.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#759EC7").ss(0.3,1,1).p("AAfg+IAYAkQANAUgEAVQgFAYgUAOQgUANgWgEQgYgFgOgUIgXgjg");
	this.shape_35.setTransform(24.9,-32.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#B3B3B3").ss(0.4,1,1).p("ABiA1QhBhlhCg3QgdgXgVAPQgVAOAKAiQAaBSBFBj");
	this.shape_36.setTransform(18.4,-43.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#B3B3B3").ss(0.4,1,1).p("AAZgaQAIAMgDAOQgCANgMAIQgMAIgMgDQgOgDgIgM");
	this.shape_37.setTransform(12,-51.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126.7,-56.3,253.4,66.1);


(lib.diaper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#63A1CC").s().p("Ag3gzIAqgIQAVgFAVANQAUANAFAYQAFAVgNAVQgNAUgYAFIgnAJg");
	this.shape.setTransform(5.7,-14.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#759EC7").ss(0.3,1,1).p("Ag3gzIAqgIQAVgFAVANQAUANAFAYQAFAVgNAVQgNAUgYAFIgnAJg");
	this.shape_1.setTransform(5.7,-14.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#B3B3B3").ss(0.4,1,1).p("AANgBQgLABgOAC");
	this.shape_2.setTransform(-0.9,-19.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#B3B3B3").ss(0.4,1,1).p("AAxg0QgwARgfASQggARAGAXQAFAZAkADQAeAEArgE");
	this.shape_3.setTransform(-16.1,-11.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#B3B3B3").ss(0.4,1,1).p("AgSAEQAWgEAPgD");
	this.shape_4.setTransform(0.9,-8.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#B3B3B3").ss(0.4,1,1).p("AgTggQAOgDAKAIQAMAIADAOQADAMgIAMQgIAMgMAD");
	this.shape_5.setTransform(-17.5,-9.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AlzD6QgigjgMgyQgHggAAgyQAAggAhhDQAjhKA1hFQA9hQBCgvQBMg4BIAAQBTgBBZA7QBLAyBGBXQA7BJAoBNQAlBJAAAhQAABbg9A0QhsBbkhAAQj5AAhZhdg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-34.3,85.2,68.8);


(lib.cokestream = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5E4217").s().p("EAAIAnrQAFgHgNmIMgAwgs9IgCptQAQnKAqrSIAeAAIAKKnQAFHGgFJQMgAoAkdQgDGPAhJsg");
	this.shape.setTransform(1.9,254.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8C7045").s().p("EgAJAnrQAEgHgOmIMgAxgs9IgBptQAPnKAtrSIBOAAQgtLSgPHKIABJtMAAxAs9QAOGIgEAHg");
	this.shape_1.setTransform(-4.1,254.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8C7045").s().p("EgATAhnQgEkdgGkKIgdygIgEkzQgClcAAnsIADpvQAOncAirEIBOAAQgiLBgOHbIAAAEIgDJMIAAAbIAAAIIACMtIAAAbIAAAUIABA9IADDiIABAnIAcR5IACBkIAHGaIABApIABAlIAFFfIhOAAQAEhFgKk/g");
	this.shape_2.setTransform(-3.8,254.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5E4217").s().p("EAACAnrIAAAAIgDlfIgCglIAAgpIgHmaIgChkIgdx5IgBgnIgDjiIAAg9IgBgUIAAgbIgCstIAAgIIABgbIADpMQAOncAgrEIAeAAQAHFZAGFOQAHHugGImQgEDzgGDoIgLFVIgKFWIAACpIAHI0IAEGXIgBAnQABB3ACCEIADEpQACCRgBCYIAACsIgeAAg");
	this.shape_3.setTransform(2.6,254.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5E4217").s().p("EAABAnrIAAAAIAAgBIgBlaIAAgeIgBgnQgCkNgHjwIgnySIAAgCIAAgHIgDkyIAKtWIAIpwIABgcIAhxsIABgdIAeAAQAKFfAGFJQAJIWgGH8QgED2gIDiIgRFXIgOFXIACCpIAZI1IAOGZIAAAnIAED6QACCWgCCTQgDCXgICSIgKCrIgeAAg");
	this.shape_4.setTransform(2.7,254.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8C7045").s().p("EgAOAhyQgDkjgHkBIgnybIgDkyIAKtWIAIpwQANnvAYq2IBNAAIgBAdIgiRsIgBAcIgIJwIgKNWIADEyIAAAHIAAACIAnSSQAHDwACENIABAnIABAeIACFaQgoABgmAAQACiCgFj3g");
	this.shape_5.setTransform(-3.9,254.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5E4217").s().p("EgAHAnrQAEoFgOmIIgxyXIgBkyUAAPgHGAAtgi5IAcAAQAvU4glNWIgXFYIgPFYIAECpIAoI3IAYGbIAHEhQABCbgGCNQgHCcgPCNIgUCqg");
	this.shape_6.setTransform(3.7,254.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8C7045").s().p("EgAJAnrQAEoFgOmIIgxyXIgBkyUAAPgHGAAtgi5IBOAAUgAtAi5gAPAHGIABEyIAxSXQAOGIgEIFg");
	this.shape_7.setTransform(-4.1,254.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5E4217").s().p("EgALAnrIgDgGIgHtmIgBgaIgVrZIAAgZIgBgFIgQmSIAAgFIgFkwIgBiDIACmZIAAgvIABgYIADjZIAAgbIABgaIAAgJIAChGIAg1JQAGiwAEi7IAEgdIAcAAQAXL+gCI5QgBDJgDC+QgGDygJDeIgTFYIAAAVIgGDBIgCCAIAHCqIADBQIAjHLIACAcIAVFgIACA5IAEDOIABBTQgBBdgCBZQgBA6gEA6QgHCTgQCWIgTCrIgcAAg");
	this.shape_8.setTransform(4,254.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8C7045").s().p("AgSZUIgUqwIgUnvIgFkzIADoDIAEkwQAUr5AaxAIBFAAIgGGIIggVJIgCBGIAAAJIgBAaIAAAbIgDDZIAAAYIgBAvIgCGZIABCDIAFEwIAAAFIARGSIAAAFIABAZIAVLZIAAAaIAHNmIAAAEQgpACghAAQACn1gKmig");
	this.shape_9.setTransform(-4,254.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5E4217").s().p("EgAKAnrIgGgCIAAgDIAAhLIgFsXIgBgYIgMrxIgQmOIgBgQIgBgcIgBgbIgJk2QgFjZgEkiIACkvIAAgSIABgsIAr33IAIjtIAHgOIAcAAQAUMUgEIgQgDDHgEDAQgGDvgJDkIgOFXIgBAVIgEDBIADCBIAHCoIAFBQIAkHLIACAcIAUFfIACA5QADBpABBkIgBBVIgEC2IgGBzQgJCNgPCeIgTCsIgcAAg");
	this.shape_10.setTransform(3.9,254.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8C7045").s().p("AgOZLIgLq1IgUnxIgJk2QgFjZgDkhIABkvQAZtGAcvqIBEAAIgFD7IgrX3IgBAsIgBASIgBEvQAEEiAEDZIAKE2IABAbIABAcIAAAQIARGOIAMLxIAAAYIAFMXIAABLQgmAFghAAQAAnlgGm7g");
	this.shape_11.setTransform(-4.2,254.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5E4217").s().p("EgARAnrIgG5jIg10eIgBkuIA88mIAmAAQAQMrgGIGIgIGIIgcNBIgBDAIAVF6IAmHKIAVF6QAFCJgBB9IgHEJQgMDngmFng");
	this.shape_12.setTransform(3.7,254.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8C7045").s().p("EgAEAnrIgF5jIg10eIgBkuIA78mIBEAAIg8cmIACEuIA1UeIAFZjg");
	this.shape_13.setTransform(-4.7,254.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5E4217").s().p("EgANAnrIgEgBIAAgCIgF5fIAAgCIgSqEIAAgLIgBgEIgZp5IAAgNIgFkuIADlrIAFkmIABgJIAowhIAFhtIAEgCIAgAAQAJGDABEnIgBGHIgEEBIgJGIIgNF4IgCHHIAAAeIACCjIAUE2IADBDIAfHDIABAHIAKEEIAEB2QACCEgBCDIgJEKQgMDzggFaIggAAg");
	this.shape_14.setTransform(3.8,254.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8C7045").s().p("AgMOKIgTqSIgaqKIgFkvIADloIAGkvQASodAcp1IBEAAIgEBvIgoQhIAAAJIgGEmIgDFrIAFEuIABANIAZJ5IAAAEIABALIASKEIAAACIAFZfQglAEghgBIgF5hg");
	this.shape_15.setTransform(-4.3,254.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8C7045").s().p("AgNOMIgKqRIgaqKIgIktIgGloIADkvQAQnzAkqkIBFAAQghKqgRH3IgCEuIAEFOIAJEwIAEBMIAXI4IABAZIAJKGIAAAFIAFZdIAAACQgnABghAAIgF5fg");
	this.shape_16.setTransform(-4.2,254.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#5E4217").s().p("EgAMAnrIgCgDIgF5dIAAgFIgJqGIgBgZIgYo4IgCg9IgIktIgGlqIACkvQARnxAkqiIACgDIAgAAQAJGQABEZIgEGHIgGEDIgLGHIgLF4IAIHHIABAdIAHCjIAUE2IADBDIAZHDIAAAHIAGEDIACB4QAAB/gDCIQgECAgFCKQgMEBgaFMIggAAg");
	this.shape_17.setTransform(3.8,254.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#5E4217").s().p("EgAKAnrMgAGgjtIg10eIgCkuQAQnKAtrSIAfAAQALGeAAEJIgGGIIggQDIAXHkIAeHYIAXIGIACEJQgDHkgwL0g");
	this.shape_18.setTransform(3.6,254.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8C7045").s().p("EgAHAnrMgAFgjtIg10eIgBkuQAPnKAsrSIBLAAQgtLSgQHKIACEuIA1UeMAAGAjtg");
	this.shape_19.setTransform(-4.4,254.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#5E4217").s().p("EAADAnrIgCgBIgBlfIgBhAIgN9IIghvqIgBgbIgIkUIAAgMIgBkqIAAgCIA2xBIAEhZIACgCIAeAAQAJGCACEhIAAAHIgEGIIgOKCIgLGCIAOHjIASHZIALIFIAAEJIgDDXQgIGigOJcIgeAAg");
	this.shape_20.setTransform(2.4,254.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#8C7045").s().p("EgALAhrIgO9xIggvWIgJlGIgBkpQAPnOAtrRIBKAAIgFBbIg2RBIAAACIABEqIABAMIAHEUIABAbIAhPqIANdIIABBAIADFfQgnABgkAAQABh/gFkBg");
	this.shape_21.setTransform(-4.3,254.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#5E4217").s().p("EAAKAnrIAAgEIgBgrIgGksIgBgrIAAgSIgV88IAAgiIgBgYIgXuuIAAgOIAAgFIgCh4IgDi/IAAgIIgBkqIAAgCIAAgCIABgiIAvvKIAKipIABgEIAeAAQAHFqADE7IAAAIIAAGJQgDEygGFRIgJGBIADHkIAFHYIACIDIgCEKIgEDWQgGGYAKJkIgeAAg");
	this.shape_22.setTransform(1.7,254.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#8C7045").s().p("EgAPAhjIgX9uIgYvUIgFlFIgBkoQAQnOAsrQIBKAAIgJCtIgvPKIgCAiIAAACIAAACIABEqIAAAIIADC/IACB4IAAAFIABAOIAXOuIABAYIAAAiIAWc8IAAASIACArIAGEsIgBAvIhMAAQADhDgKlFg");
	this.shape_23.setTransform(-4.2,254.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.2,0.1,18.3,508);


(lib.cokepastinside = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgJEtQgbgBglgIQgvgLgSgNQgTgPgEgHQgDgFgCgRIgJm1QACgcAJgNIARgZQALgPgBgGQAOABB7ABQB8gBAOgBQAAAGALAPIARAZQAIANACAcIgJG1QgBARgDAFQgEAHgTAPQgTANguALQglAIgbABg");

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D98568").ss(1.3,1,1).p("AhIAAQAAg6AWgpQAVgqAdAAQAeAAAVAqQAVApAAA6QAAA7gVApQgVAqgeAAQgdAAgVgqQgWgpAAg7g");
	this.shape.setTransform(-17.8,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC785C").s().p("AgyBkQgVgpAAg7QAAg6AVgpQAVgqAdAAQAeAAAVAqQAVApABA6QgBA7gVApQgVAqgeAAQgdAAgVgqg");
	this.shape_1.setTransform(-17.8,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#D98568").ss(0.8,1,1).p("AhgAAQAAhGAdgzQAdgzAmAAQAoAAAcAzQAdAzAABGQAABIgdAyQgcAzgoAAQgmAAgdgzQgdgyAAhIg");
	this.shape_2.setTransform(-17.6,-0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC785C").s().p("AhDB6QgcgygBhIQABhGAcgzQAdgzAmAAQAoAAAcAzQAdAzAABGQAABIgdAyQgcAzgoAAQgmAAgdgzg");
	this.shape_3.setTransform(-17.6,-0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D98568").s().p("Ah6AsQgqgIgKgNIAAhNQAKAMAqAJQAzAKBNAAQBAAAAzgKQAtgKAJgLIAABNQgJAMgtAJQgzALhAAAQhNAAgzgLg");
	this.shape_4.setTransform(0.1,-1.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#D98568").ss(0.8,1,1).p("Ah6A6QAzALBNAAQBAAAAzgLQAsgKAKgLIAAhpQgJAMgtAJQgzALhAAAQhNAAgzgLQgqgJgKgMIAABpQAKAMAqAJg");
	this.shape_5.setTransform(0.1,-1.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC785C").s().p("AgJEtQgbgBglgIQgvgLgSgNQgTgPgEgHQgDgFgCgRIgJm1QACgcAJgNIARgZQALgPgBgGQAOABB7ABQB8gBAOgBQAAAGALAPIARAZQAIANACAcIgJG1QgBARgDAFQgEAHgTAPQgTANguALQglAIgbABg");

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.6,-30.2,35.2,60.4);


(lib.cokedrip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8C7045").s().p("AAAgcQAVgHgWBAQgSgyATgHg");
	this.shape.setTransform(0.2,-2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,-5.9,2.2,6);


(lib.cokebubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.702)").s().p("AgzAEQAAgaAUgTQATgUAZAAQAVAAASANQgMgFgNAAIgRACQAIAGAAAJQgBAMgKAEIAAAEQAAAOgMAAQgMAAAAgOQAAgFADgEIgDgJQgVAUAAAbQAAAdAUAUQgggTgBgng");
	this.shape.setTransform(-1.5,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.498)").s().p("Ag3A4QgYgXAAghQAAgfAYgYQAXgYAgAAQAgAAAYAYQAYAYAAAfQAAAhgYAXQgYAYggAAQggAAgXgYg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.498)").s().p("AANBaIALggIAMBkgAgoAwIAlAFIhXApgAAcATIBQAJIg8ALgAgyALIg5hDIBhBMgAALidIACCOIgRAPg");
	this.shape_2.setTransform(-0.6,-2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2}]},17).to({state:[]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-8,16,16);


(lib.carmiles_tread2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tread2();
	this.instance.setTransform(88,20);

	this.instance_1 = new lib.tread2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,155,616);


(lib.carmiles_tread1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tread1();
	this.instance.setTransform(92,10);

	this.instance_1 = new lib.tread1();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,209,602);


(lib.carmiles_shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.098)").s().p("AFXYjIk4gbQgEAdglgDIksgaQgmgEAAgdIk4gcQhhgIAJhAIADgnQgWhEgCkGQgRgKgDg0QgDg/ARjMQAPi5AHggQAFgYAaAEIBJtHIg0gCIgCAgIhlgIQg0gFAPgWQATglAsgqQAYgYA3APIA5AIIA0pKQAGhJAdheQAXhJAKgSQCzlHHCA4QHPAYB3FhQAIATAJBMQAMBigGBJIg0JKIA7ACQA4gFAUAcQAkAwAMApQALAYg0gFIhkgIIADghIg1gEIhJNEQAbAAAAAaQABAggRC5QgTDMgNA8QgMAzgTAIQgxEDggA9IgDAnQgCA5hMAAIgWgBg");
	this.shape.setTransform(83.5,155.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1.8,169.1,314.6);


(lib.carmiles_car2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgMB0QmFgiiTA+QgCgqgFgRQgsiiACgXIACgqQCCiBHeAqQHfAqBqCcIgDAiQgDAXhICZQgFARgKAsQiDhamCgig");
	this.shape.setTransform(85.6,116.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#808080").s().p("ApYA1IAIg7QBli+H+AsQH/AtBIDFIgGBHg");
	this.shape_1.setTransform(86.1,96.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F3F3F3").s().p("AB0hyIgFA+QiVA3hNBwQBKiZCdhMg");
	this.shape_2.setTransform(42.3,16.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#C2BD4F").ss(1.1,1,1).p("AA/l/QhhH5gcEG");
	this.shape_3.setTransform(33,56.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CAC557").s().p("AA3BCIhigJIADggIg5gFIAKhVIA9ACQA2gFAUAcQAkAuAMApQAJATgiAAIgQAAg");
	this.shape_4.setTransform(156.5,127.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CAC557").s().p("Ag8A3Qg0gEAPgVQATglAsgpQAZgYA0APIA6AIIgEBSIg3gBIgDAgg");
	this.shape_5.setTransform(12.2,114.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AgZiAIBGAGQgFA3ABAhQABAygbAyQgZAygiANg");
	this.shape_6.setTransform(15.6,204.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("Ag5FcIA/q9IAqCTQAMApgCAkIguHjg");
	this.shape_7.setTransform(19.7,146.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#C2BD4F").ss(1.1,1,1).p("ABnnOQACAvgEA/QgIB/gpHZQgJBigsAmQguAmg3Ap");
	this.shape_8.setTransform(20.8,177.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#C2BD4F").ss(1.1,1,1).p("AhEgFICJAK");
	this.shape_9.setTransform(20.4,186.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D4CF61").s().p("AiRVtQgZhSACkbICw/6QAHhJAdheQAWhKALgSQAYgtAmgrIAfgbIiQM2IgJBuIAuC7IAFBDIgzLWQgTBVgXALIhFMJg");
	this.shape_10.setTransform(24.1,153.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F3F3F3").s().p("AhfhFIACg+QCEBfAyCRIAHAXQg3h4iIhRg");
	this.shape_11.setTransform(144.3,25.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#C2BD4F").ss(1.1,1,1).p("AACmEQAJICgPEH");
	this.shape_12.setTransform(146.8,66.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("AgfA7QgSg2AMgwQAGghAEg3IBFAHIgaEAQgcgTgTg2g");
	this.shape_13.setTransform(138.5,215.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("Ag/FYIAnnjQACgeAVgrIBBiKIg6K9g");
	this.shape_14.setTransform(143,157.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#C2BD4F").ss(1.1,1,1).p("AAQnZQgKApgGBDQgOB+gpHbQgJBhAnAuQAkAtAvAy");
	this.shape_15.setTransform(133.7,187.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#C2BD4F").ss(1.1,1,1).p("ABFAFIiJgJ");
	this.shape_16.setTransform(136.3,196.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#C0BA4C").ss(1.1,1,1).p("AghGBIBDsB");
	this.shape_17.setTransform(127.2,263.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D4CF61").s().p("AidVtIBEr3IgkhmIBRr4IBljYIAOuxQAoA5AWBCQAIAUAKBMQALBhgFBKIixf5QgwEXgnBLIgBABg");
	this.shape_18.setTransform(139.7,163.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#C0BA4C").ss(1.1,1,1).p("ApXgzISuBn");
	this.shape_19.setTransform(69.2,297.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#666666").s().p("AoeAAQAShqCQAMIMIBFQCPAMAFBtg");
	this.shape_20.setTransform(69.4,292.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#C0BA4C").ss(1.1,1,1).p("AiEADQANgkB3AKQB3ALAOAm");
	this.shape_21.setTransform(70.1,284.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#C0BA4C").ss(1,1,1).p("AABA+QBOAHBEAGQAtAEgBgoQgBgegVgfQgVgfgtgEIi7gRQgugEgZAcQgbAcgGAcQgIAnAtAEg");
	this.shape_22.setTransform(68.3,304.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#DCD768").s().p("ACTBLIiSgNIiYgNQgtgEAIgnQAGgcAbgcQAZgcAuAEIC7ARQAtAEAVAfQAVAfABAeQABAkglAAIgIAAg");
	this.shape_23.setTransform(68.3,304.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#CCC759").ss(1.1,1,1).p("AgslmIAcJ8IA9BR");
	this.shape_24.setTransform(141.9,55.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D4CF61").s().p("AALkZQAdgFABAeQABAhgRC4QgTDKgMA9QgLA2gXAFIAzo0g");
	this.shape_25.setTransform(140.7,242.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#CCC759").ss(1.1,1,1).p("ABxllIiKJuIhXBd");
	this.shape_26.setTransform(39,47.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#C2BD4F").ss(1.1,1,1).p("AggGBIBCsB");
	this.shape_27.setTransform(18.1,253.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D4CF61").s().p("AghDcQgDg/ARjJQAPi6AFgfQAFgdAdAJIgsI1QgVgIgDg4g");
	this.shape_28.setTransform(8.6,230.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CCCCCC").s().p("AAWh1QnEgzi5ELQCklfHcA6QHQAXB3FfIAHAYQiFkmnMgbg");
	this.shape_29.setTransform(92.3,18);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#DCD768").s().p("AFzYjIvrhYQhhgIAJhBIADgnQgahQACkcICz/5QAHhJAcheQAXhKAKgSQCzlHHCA5QHPAYB3FhQAIATAJBNQAMBhgGBJIizf5QgvEYgnBLIgEAnQgCA5hNAAIgVgBg");
	this.shape_30.setTransform(81.4,154.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,-2.4,164.4,315.3);


(lib.carmiles_car = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgMB0QmFgiiTA/QgCgqgFgSQgsiiACgWIACgqQCCiBHeAqQHfAqBqCcIgDAhQgDAXhICZQgFARgKAsQiDhZmCgjg");
	this.shape.setTransform(84,117);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#808080").s().p("ApZA1IAJg7QBli+H+AsQH/AtBIDFIgHBHg");
	this.shape_1.setTransform(84.5,97.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F3F3F3").s().p("ABzhyIgEA+QiVA3hNBwQBKiYCchNg");
	this.shape_2.setTransform(40.7,17.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#5E87B0").ss(1.1,1,1).p("AA/l/QhhH5gcEG");
	this.shape_3.setTransform(31.4,57.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6891BA").s().p("AA3BCIhigIIADghIg5gFIAKhVIA9ACQA2gFAUAcQAkAvAMAoQAJATgiAAIgQAAg");
	this.shape_4.setTransform(154.9,128.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6891BA").s().p("Ag8A3Qg0gEAPgWQATgkAsgqQAZgYA0APIA6AJIgEBSIg3gBIgDAgg");
	this.shape_5.setTransform(10.6,115.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AgZiAIBGAGQgFA4ABAfQABAzgbAyQgZAxgiAPg");
	this.shape_6.setTransform(14,205);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("Ag5FcIA/q9IAqCTQAMApgCAjIguHkg");
	this.shape_7.setTransform(18.1,147.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#5E87B0").ss(1.1,1,1).p("ABnnOQACAvgEA/QgIB/gpHaQgJBhgsAmQguAng3Ao");
	this.shape_8.setTransform(19.2,178.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#5E87B0").ss(1.1,1,1).p("AhEgEICJAJ");
	this.shape_9.setTransform(18.8,187.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6B94BD").s().p("AiRVtQgZhSACkbICw/5QAHhKAdheQAWhKALgRQAYgvAmgqIAfgbIiQM2IgJBuIAuC7IAFBEIgzLVQgTBWgXAKIhFMJg");
	this.shape_10.setTransform(22.5,154);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F3F3F3").s().p("AhfhFIACg+QCEBfAyCQIAHAYQg3h4iIhRg");
	this.shape_11.setTransform(142.7,26);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#5E87B0").ss(1.1,1,1).p("AACmEQAJICgPEH");
	this.shape_12.setTransform(145.2,67.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("AgfA7QgSg2AMgxQAGggAEg3IBFAGIgaEBQgcgTgTg2g");
	this.shape_13.setTransform(136.9,216);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("Ag/FYIAnnkQACgeAVgqIBBiKIg6K9g");
	this.shape_14.setTransform(141.4,158.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#5E87B0").ss(1.1,1,1).p("AAQnZQgKApgGBEQgOB+gpHaQgJBhAnAuQAkAtAvAy");
	this.shape_15.setTransform(132.1,188.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#5E87B0").ss(1.1,1,1).p("ABFAFIiJgJ");
	this.shape_16.setTransform(134.7,197.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#5E87B0").ss(1.1,1,1).p("AghGBIBDsB");
	this.shape_17.setTransform(125.6,264);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6B94BD").s().p("AidVtIBEr3IgkhmIBRr4IBljYIAOuxQAoA4AWBDQAJAUAIBMQAMBhgFBJIiyf5QguEYgoBLIgBACg");
	this.shape_18.setTransform(138.1,164);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#5E87B0").ss(1.1,1,1).p("ApWgzISuBn");
	this.shape_19.setTransform(67.6,298.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#666666").s().p("AoeAAQAShqCQAMIF/AiIGJAiQCOANAGBtg");
	this.shape_20.setTransform(67.8,293.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#5E87B0").ss(1.1,1,1).p("AiEADQANgkB3AKQB3ALAOAm");
	this.shape_21.setTransform(68.5,285.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#5E87B0").ss(1,1,1).p("ACpgWQgVgfgtgEIi7gRQgugEgZAcQgbAcgGAcQgIAnAtAEICYANQBOAHBEAGQAtAEgBgoQgBgegVgfg");
	this.shape_22.setTransform(66.7,305.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#759EC7").s().p("ACTBLIiSgNIiYgNQgtgEAIgnQAGgcAbgcQAZgcAuAEIC7ARQAtAEAVAfQAVAfABAeQABAkgkAAIgJAAg");
	this.shape_23.setTransform(66.7,305.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#6B94BD").ss(1.1,1,1).p("AgslmIAcJ8IA9BR");
	this.shape_24.setTransform(140.3,56.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#6891BA").s().p("AALkZQAdgFABAeQABAhgRC4QgTDKgMA9QgLA2gXAFIAzo0g");
	this.shape_25.setTransform(139.1,243);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#6B94BD").ss(1.1,1,1).p("ABxllIiKJuIhXBd");
	this.shape_26.setTransform(37.4,48.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#5E87B0").ss(1.1,1,1).p("AghGBIBCsB");
	this.shape_27.setTransform(16.5,254.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#759EC7").s().p("AghDcQgDg/ARjJQAPi6AFgfQAFgdAdAJIgsI1QgVgIgDg4g");
	this.shape_28.setTransform(7,231.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CCCCCC").s().p("AAWh2QnFgyi4EKQCkleHdA6QHPAXB3FfIAHAXQiGklnLgcg");
	this.shape_29.setTransform(90.7,18.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#759EC7").s().p("AFzYjIvrhYQhhgIAJhBIADgnQgahRACkbICz/5QAHhJAchfQAXhJAKgSQCzlHHCA5QHPAYB3FgQAIAUAJBMQAMBigGBJIizf5QgvEXgnBLIgEAnQgCA6hMAAIgWgBg");
	this.shape_30.setTransform(79.8,155.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(51,51,51,0.098)").s().p("AFXYjIk4gbQgEAdglgDIksgaQgmgEAAgdIk4gcQhhgIAJhAIADgnQgWhEgCkGQgRgKgDg0QgDg/ARjMQAPi5AHggQAFgYAaAEIBJtHIg0gCIgCAgIhlgIQg0gFAPgWQATglAsgqQAYgYA3APIA5AIIA0pKQAGhJAdheQAXhJAKgSQCzlHHCA4QHPAYB3FhQAIATAJBMQAMBigGBJIg0JKIA7ACQA4gFAUAcQAkAwAMApQALAYg0gFIhkgIIADghIg1gEIhJNEQAbAAAAAaQABAggRC5QgTDMgNA8QgMAzgTAIQgxEDggA9IgDAnQgCA5hMAAIgWgBg");
	this.shape_31.setTransform(92.5,170.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#B3B3B3").s().p("ACKAoQgVgBhBgKQgXgDg2gOQg/gNgagFQgvgJgVAFQgbAGAHAYQACAIgBAHIh4gLQAdgdAhgRQAvgYAvAKIBSAUQA5AOAoADQB9APA/g0IB4ALQgiAgg4ATQgoAOgtAAIgJAAg");
	this.shape_32.setTransform(67.3,290.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E6E6E6").s().p("Al7AiQAThmCMAMIJYA1IgjApIhzANIkGgzIgrALIgjAwg");
	this.shape_33.setTransform(53.2,287.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B3B3B3").s().p("AAqCkQkRgYixAgQgahPAggmQAyg7C+A8QFABpiZjGQgmg2ADgdQAEgwB9gFQC6ATCIAsQgXAgjMgQQhBgGgFASQgDAOAhAkIAfAgQAUASALAOQAhAogFAZQgKA2hdAXg");
	this.shape_34.setTransform(79.1,112);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E6E6E6").s().p("AlRCDQgsigACgWIABgqQCBh/HXAqQBVAHBKANIi4AnIAuCDIg2CVQl4ggiQA8QgCgpgEgRg");
	this.shape_35.setTransform(63.8,112.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#666666").s().p("AoXAAQAUhpCMAMIF5AiIGEAiQCNAMAEBsg");
	this.shape_36.setTransform(68.8,290.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#666666").s().p("AgeA6QgSg0ALgxQAGggAFg2IBEAGIgaD9QgcgSgSg2g");
	this.shape_37.setTransform(136.9,214.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#666666").s().p("Ag+FUIAmndQAGhDARgFIBAiIIg5Kyg");
	this.shape_38.setTransform(141.3,157.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#8DCA6E").ss(1.9,1,1).p("AAPnSQgKAygFA5QgOB8gpHTQgIBgAmAtQAkAtAvAx");
	this.shape_39.setTransform(132.1,187.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#8DCA6E").ss(1.9,1,1).p("ABEAGIiHgK");
	this.shape_40.setTransform(134.7,196);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E6E6E6").s().p("AgYh/IBEAHQgEA2AAAgQACAygbAxQgZAxghAOg");
	this.shape_41.setTransform(15.7,203.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E6E6E6").s().p("Ag5FWIA+qyIAqCSQAPAHgGBEIgtHcg");
	this.shape_42.setTransform(19.8,146.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#70BD33").ss(1.9,1,1).p("ABlnIQACAwgDA9QgIB9gpHTQgJBggrAlQgtAmg3Ap");
	this.shape_43.setTransform(20.9,177.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#70BD33").ss(1.9,1,1).p("AhDgEICHAK");
	this.shape_44.setTransform(20.5,186);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F3F3F3").s().p("AByhwIgFA9QiSA2hLBuQBGiVCchMg");
	this.shape_45.setTransform(42.1,18.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F3F3F3").s().p("AhehEIADg9QCBBdAxCPIAIAXQg2h3iHhPg");
	this.shape_46.setTransform(142.5,27.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#666666").s().p("AgMByQl/ghiRA9QgCgpgEgRQgsigACgWIACgqQCBh/HWAqQHYApBoCaIgDAhQgCAWhHCYQgFAQgKArQiBhYl9gig");
	this.shape_47.setTransform(84.7,116.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#808080").s().p("ApPA0IAHg6QBki7H3AsQH3AsBHDBIgGBHg");
	this.shape_48.setTransform(85.2,97.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#8DCA6E").ss(1.9,1,1).p("AACl+QAJH7gPEC");
	this.shape_49.setTransform(145,68);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#70BD33").ss(1.9,1,1).p("AA+l6QhfHygdED");
	this.shape_50.setTransform(32.9,58.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#8DCA6E").ss(1.9,1,1).p("ApNgyIScBl");
	this.shape_51.setTransform(68.5,295.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#8DCA6E").ss(1.9,1,1).p("AiCADQANgkB1ALQB1AKAOAm");
	this.shape_52.setTransform(69.5,283);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#8DCA6E").ss(1,1,1).p("ACmgWQgTgegtgFIi5gQQgtgEgZAbQgaAdgGAbQgIAmAsAEIEmAaQAsAEgBgnQgBgegVgfg");
	this.shape_53.setTransform(67.6,302.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#8DCA6E").s().p("ACRBKIkmgaQgsgEAIgmQAGgbAagdQAZgbAtAEIC5AQQAtAFATAeQAVAfABAeQAAAjgkAAIgHAAg");
	this.shape_54.setTransform(67.6,302.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#8DCA6E").ss(1.9,1,1).p("AgslhIAdJ0IA8BP");
	this.shape_55.setTransform(140.2,57.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#8DCA6E").ss(1.9,1,1).p("AggF7IBCr1");
	this.shape_56.setTransform(125.4,262);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#70BD33").s().p("AAKkVQAegEAAAdQABAfgQC3QgTDGgLA9QgHAbgEAIQgJAUgPADIAyosg");
	this.shape_57.setTransform(139,241);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#70BD33").s().p("AA3BBIhhgJIADggIg5gFIALhUIA8ACQA1gFAUAcQAjAuAMAnQAJAVgkAAIgNgBg");
	this.shape_58.setTransform(156.9,128.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#70BD33").ss(1.9,1,1).p("ABvlgIiIJlIhVBc");
	this.shape_59.setTransform(38.8,49.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#70BD33").ss(1.9,1,1).p("AggF7IBBr1");
	this.shape_60.setTransform(18.2,252.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#8DCA6E").s().p("AgdD+QgDgLgBgaQgDg+ARjHQAPi2AEgfQAGgdAcAJIgrItQgPgGgFgUg");
	this.shape_61.setTransform(8.8,229.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#8DCA6E").s().p("Ag7A3QgzgFAPgVQATgjAqgpQAZgYAzAPIA5AIIgEBRIg2gCIgDAgIhhgIg");
	this.shape_62.setTransform(10,115.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#CCCCCC").s().p("AAVh0Qm+gxi0EGQChlZHVA4QHIAXB2FaIAHAXQiDkhnGgbg");
	this.shape_63.setTransform(91.4,20.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["#8DCA6E","#70BD33","#70BD33","#70BD33"],[0,0.702,0.902,1],-65.9,-6,66.2,3.2).s().p("AFuYMIvdhXQhggIAJhAIADgmQgZhPACkYICw/bQAHhIAchdQAWhIALgSQCwlCG7A4QHIAXB2FcQAHASAJBMQAMBggGBIIiwfcQgvETgmBKIgEAmQgCA5hLAAIgVgBg");
	this.shape_64.setTransform(80.5,155);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1.6,177.1,329.3);


(lib.banana_shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.2)").s().p("A1iAxQhWguEDgWQFAgeNeAAQIgAAGbAOQF/AMBHARQBMAQlGAMQl2ANsRAAQi7AAouAJQlxAGifAAIhSgBg");
	this.shape.setTransform(140.1,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,280.2,10);


(lib.banana_peel_right = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6EDA9").s().p("AhLjoQhRmMl+AdQK6kdCnDTQIPKcsQLlIiVAbQBUpYhQmLg");
	this.shape.setTransform(54.3,76.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E3D463").s().p("ABmI0QC9t6lVjPQh7hKhrAhIAAhkQCDgmCZBSQG0Dmj7Q/g");
	this.shape_1.setTransform(28.1,84);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,108.3,152.8);


(lib.banana_peel_left = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6EDA9").s().p("AhELgQsRrlIPqbQCnjUK6EeQl9gehSGNQhPGKBTJYg");
	this.shape.setTransform(53.9,76.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E3D463").s().p("AgCp2QCYhRCDAkIAABlQhqghh8BKQlVDPC+N6IhYB7Qj7w/G1jmg");
	this.shape_1.setTransform(80.1,84);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,108.3,152.8);


(lib.banana = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3D463").s().p("EADYAlDQhGg8hPhXQjAjWinkfQjQlkh7mPQiTnfgPn4UgA8ggeAS4gA8IGCkjIgUA1IA8B3QmZCAiZD3QgFBahPDbIhODUQg0COggBmQhoEzgyEAQhAFOAOEnQAWG+DkKxQBGDUBaDoIBSDSQA2CogCGsQgpgThAg3g");
	this.shape.setTransform(115.6,252.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0E170").s().p("EACjAl7QgdgDg8guQhAgwhNhRQjFjLiwkhQjdlpiEmdQignxgPoPUgA8ggeAS4gA8IHllvICrAAIBmA8IgaBEIA8B3QmZCBiZD2QgFBbhPDbIhODUQg0CNgiBnQhoEzgyEAQg+FNAOEoQAWG+DkKxQBGDUBaDnIBSDTQA8C6gJGzIjmBmg");
	this.shape_1.setTransform(97.3,254.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,194.5,509.4);


(lib._potato_butter_splat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EEE863").s().p("AgeHtQhhgIhDhTQgxg9gnhuQgkhkgUh2QgThwADhaQADhfAagkQA8gxBXgoQBTgoBXgWQBXgXBEABQBJABAiAdQAzArAfEbQAMBpAFBnQAEBigEAkQgGA6g8BHQg8BIhTAsQhRAshJAAIgUgBg");
	this.shape.setTransform(35.6,49.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71.2,98.9);


(lib.tree1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004E00").s().p("AgrAkQAAgEAEgGQADgDAEAAIAHgBIAHgEIAHAAIAHAAQgEgGgFABIgMADQAFgQALgGQAIgFAEAAQADABAKAFQgDgLgBAAIgDAAIgDAAQgCgEgCAAQgFgDgIAHIgNANIAEgSQAEgJAIgBIAFAAQABAAABAAQABAAAAAAQAAgBAAAAQAAAAAAgBIAEgHIAGgBQAHAAACADIABAEIAEAEIADAGIAAAHQADARgBAEQAJABABACQADACgGAKQAJABgBARIAAAEIghABIgOgDQgLgDgGABIgOAEIgEABQgFAAAAgGg");
	this.shape.setTransform(-0.1,-5.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2E7500").s().p("Ag5AwIAEgLQACgKAIgEIAEAAIAFgBIABgHIABgJIACgIIABgMIADgEIADgDIACgJIAGgHQADgEAHACQAFgOALABQAJAAAGAKIAEAIQABAEAEAFQAIALgFARQAJACABACQACAFgCAOIAHACIABAQIACABIgCAIIhjABQgOAAAAgGg");
	this.shape_1.setTransform(-0.3,-5.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.1,-11,11.7,10.8);


(lib.leaf2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#075D00").s().p("AgBAIQgIAAADgIQAEgIAEABQAHABgCAGQgBAIgGAAIgBAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,-0.8,1.7,1.8);


(lib.leaf1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#075D00").s().p("AgLAFQgDgGAEgFQAFgFAGgBQAJAAACAIQADAFgHAHQgGAFgCAAQgHAAgEgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,-1.3,2.8,2.7);


(lib.dirt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7A6B3D").s().p("AgGAAQgCgGAHgBQAEgBAEAIQADAIgIAAIgBAAQgGAAgBgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,-0.8,1.7,1.8);


(lib.dirt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7A6B3D").s().p("AgHAIQgHgHADgFQACgIAJAAQAGABAFAFQAEAFgDAGQgEAIgHAAQgCAAgGgFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,-1.3,2.8,2.7);


(lib.mountains = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A4D8E9").s().p("EhK+AFaIAAnwQAWADAgAHIA3AMQAbAFAZgEQANgCAwgMQBUgWA+AFIBFAGQAkABAigIIB+ghQBJgQA5gDQA+gDBgAVQCEAeAYADIBhALQA+AGAjAGQAjAGBQgOQBOgNAkAGQAnAIBOAnQBLAlAsAGQAvAGB1gFQBngEA4ANIB4gvQA4gVBEgFQAigCBfAAQCcAAB0gWQCNgcBuhBQAwgcArADQAWABBJAXQAgAJA7gQQBIgUAVAAQAbgBAugQQAwgRAYgBQA6gEBKAYICAArQBbAaB/guQBVgfCIAJQAwADBDAJIBtAPQECAiCTgnQCQgUBAgDQB5gFBPAcQB/AuBbgaICAgrQBKgYA6AEQAYABAwARQAuAQAbABQAkAAA5gTIBbggQBJgWAWgCQArgDAwAcQCZBbBiApQCUA9B8AAQBfAAAiACQBEAFA4AVIB4AvQA4gNBnAEQB1AFAvgGQAxgGBNgRQBlgWAYgEQAmgHBFgHQBMgHAfgFQAjgGA+gGIBhgLQAYgDCEgeQBggVA+ADQA6ADBIAQIB+AhQAiAIAkgBIBFgGQA+gFBUAWQAwAMANACQAZAEAbgFQAYgFBdgdQBIgWAwgBQA3gBBmARQBsATAyAAIAAHwg");
	this.shape.setTransform(480,-34.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-69.4,960,69.4);


(lib.ground_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ground
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6D9F4C").s().p("EhK+ABYIAAgOIASAOQAKAIAGgEQAOgKAWAEQAhAGAKgBQAMgBAYAHQAdAIAJABIibATQgBgGgfgfgEhKUABnQgDAAgFAEQgIAGACACIAGAEIAEAFIB+gQIAAgBQgBgDgFAAQgFAAgCgCQgFgDgHABQgGAAgHgCIgEgCQgCgCgGABIgFADIgDgBIgGAAQgBAAAAAAQgBAAAAABQAAAAAAABQAAAAABABQAIAIgGACIgEgGIgDgCIgCgEIgFgCIgGAAIgGgCIgJABIgGACIADADIABADIACADQABAAAAABQAAAAABAAQAAABAAAAQAAAAAAABIgDAFQgCAAgCgEQgDgHgDgBIgGAAgEBJmABuIgDgFQgBAAAAgBQAAgBgBAAQAAgBAAAAQgBAAAAgBIgGgBIgCgCIgCgDIgKABQgHACgDADIgFAEIABgHIgJABQgFABgCgEIgBgEIgBgDIgEgBQgFgBgGACIgIAIQgEAEAAgGQAAgHgBgBQgCgCgIACQgHABgDgEIgCgIQgDgGgJAHQgGADgFgCIgJgCIAAgCIgGgCIgIADIgHAEQgFABgHgDIgMgFQgDgBgJADIgOACQgLADgEAJIhzgOIAaAAIAGgBIAcgBIAMgCIAJAAIAEAAQAEgDgFgDIgDgBIgCgDIgDgEQgDgCgDABIgEAEIgDAEQgDACgEgCQgDgDgBgDIgBgDIgDAAQgGACABAKQgDgBgBgFIAAgFQgEACACAIQAAAGgHgCQgCgCADgEIgJABIgEAAQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAAAAAQgDAAgCADIgBADIgBgBIADgHIABgBQgBgCgJABIgIADQgFABgEgBIgFgDIgIgBIgKACQgGACgBAEIAsAFIgDAAIjEgYQAIgBAegIQAYgHAMABIAqAAQAVAAAPAKIAQALIAbAGQAKgFAFADIAHACIADAAIAEgCIAIABQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAgBIABgGIADgGIADgCIAEgEQADgCADAGIABAFIAEADIABACIAAACIAKgGQAHgCAEAFIAFACIADABQAegOAUAEQAHACAHAFQAJAHAFADQAFACALABQAFgIAGAAIADAAIADACIAFgBIAFAEIABAEQAEAFALgCQABgFAJACQAKAEABAJIAKADIAFAAIAEACQACgDAFAAIAHADQANADADAHQASgHAJAAQAEAAAEACQAEADADAAQALgBAQgMQAPgLANgCQAWgCARAJIAAAOQgFgHgKABIgQADQgOABgOARQgBgHAKgJQAHgGABgBQABgEgEgBIgIACIgHAGIgMAFQgFADgEALIgCAHQgBABAAAAQAAABgBAAQAAAAAAAAQgBABAAAAIgDgCgEBBtAAuQgCABgFAAQgFAAgBADIAAABIB+AQIAEgFIAGgEQACgCgIgGQgGgEgCAAIgGgBIgHAAQgDABgDAHQgCAEgCAAIgDgFIACgDIACgDIABgDIADgCIgGgDIgJgBIgGACIgGAAIgFACIgCAEIgDACQgEACAAAEQgEgBAGgJQABgBAAAAQAAgBAAAAQAAgBAAAAQgBAAgBAAIgGAAIgDABIgFgDQgGgBgCACIgEACQgGACgHAAIgCAAQgGAAgEADgEhG1ABTIAJgDQAEgCAAgDIABgGIACgDIACgCQABgCAAgHQAAgFAEgJQADgJAAgFQgBgQAIABQACAAAHANIAHARQACANAEACQgBgYADgGQAHgKAGAHIABAEIABAEIAHAJIAEALQADAHAFgCQACgIAEgCIADAAIACABIALgFQAFAAAHAFQAGAFAGgCQAWgIANABQANABAIADQhdARhsAXgEA+pAAfQAUgJAPgBQAPgBAHAFIARAKQAJADANACIAYACIANAEgEA7BAANIAUgHQAMgCAYAFQAGABAFgFQAGgFAFAAIAMACIACgBIADAAQAEABADAIQAFABACgHIAEgKIAFgJIABgJQAFgIAIAKQAEAFABAJIABANQADgCABgLQABgFAEgNQAGgOABAAQAHgCACAPQAAAFAFAJQAFAIAAAFQABAGABACIADABIACADIACAGQABADADACIAKABIAIAFQh1gMhXgEgAP4gRQoSgYnmgNQpxgBtBAmIiuAKQAvghAzAFIBTAJQAsADAlgHQBZgRA/AAQAQAAAkgFQAigFATABQBAACAjAKQAZAHAXgBQAVgBAhgHIA2gJQA3gHApADIAcAGQARADALgDQAGgCAHgGIANgIQADgCAHAAQAHAAADgCQAFgCAFgGQAEgFAJgBQAMgCASAKIAcAPIALgeQAIgRAPAAQADgWAaAPIAgAXQAXAQAngJIAggHQATgEAPADQAGABAZAIQATAHAOgBQAHgBANgGQANgFAHgBQAKgBASADQAVAEAHAAQAQAAAWgGIAngKQAdgFAiAIIA4AQQAXADATgNIAggXQAagPADAWQAPAAAIARIALAeIAcgPQASgKAMACQAJABAEAFQAFAGAFACQADACAHAAQAHAAADACIANAIQAHAGAGACQALADARgDIAcgGQApgDA3AHIA2AJQAhAHAVABQAXABAZgHQAjgKBAgCQATgBAiAFQAkAFAQAAQA/AABZARQAlAHAtgDIBSgJQAzgFAvAhg");
	this.shape_1.setTransform(480,-42.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#58823E").s().p("EBK/AA5Ik7goQADgJAMgDIAOgCQAIgDADABIAMAFQAIADAFgBIAHgEIAHgDIAGACIABACIAIACQAGACAFgDQAKgGADAFIACAIQADAEAHgBQAHgCACACQACABgBAHQAAAGAFgEIAIgIQAGgCAFABIAEABIABADIABAEQACAEAFgBIAJgBIgBAHIAFgEQADgDAHgCIAKgBIACADIACACIAFABQABABAAAAQABAAAAABQABAAAAABQAAABAAAAIAEAFQADADACgEIADgHQADgLAGgDIAMgFIAHgGIAIgCQAEABgBAEQgBABgIAGQgJAJABAHQAOgRANgBIARgDQAKgBAFAHIABAAIAAA1gEhK/AARQAfAfACAGIghAEgEAhbAAeIAAAAIgLgCIhlgPIgngFIgKgCIgVgDQifgWhvgOIi/gVQAJgCATAAQASAAAJgBQAogGANACIAYAHQAPAEAKAAIArAEQAHAAAVgHQAUgGAQAEIASAHQALAGAGABIAnABQANABAGgBQAFgBAEgDIAOgNQAIgIAJgDQAJgCAKACQALADADAIQAUgHAYANQAJAFAGAHQACACgBAFIATAGQANADABAHQADABAIgCIANgIQADgBASAAQAdADAKAQIAFAHIAHACIAPgCQAKAAALAFIAOALQAUgDAVAEQAFABAGAEQAEAEAJAAQAIAAANgFQANgFAIAAQAagBAdAMQAQAGAjAUQhugGiBgRgEgrSAAbQAegMAaABQAHAAAOAFQANAFAHAAQAJAAAFgEQAFgEAGgBQAVgEAUADIANgLQAMgFAJAAIAPACIAIgCIAEgHQALgQAdgDQASAAADABIANAIQAHACAEgBQABgHAMgDIATgGQAAgFABgCQAGgHAJgFQAZgNATAHQADgIAMgDQAKgCAJACQAIADAJAIIANANQAEADAFABQAHABAMgBIAogBQAGgBAMgGIARgHQAQgEATAGQAVAHAIAAIAqgEQALAAAOgEIAZgHQANgCAoAGQAIABATAAQASAAAKACIi/AVQhwAOieAWIi3AbIAAAAQiAARhuAGQAjgUAPgGgEhKcAAwIgGgEQgCgCAIgGQAFgEADAAIAGgBIAGAAQADABAEAHQACAEABAAIAEgFQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBgBAAIgCgDIgBgDIgDgDIAGgCIAJgBIAGACIAGAAIAFACIABAEIAEACIAEAGQAGgCgJgIQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAIAHAAIACABIAGgDQAGgBACACIADACQAIACAFAAQAIgBAFADQABACAGAAQAFAAABADIAAABIh+AQgEAqLAAjQAZgJAQgBIAvABIAggFIAFgDIAHgBIALACQAIACADgBQAFgCAAgNQAAgKAHABQgBgNAGgDQAFgDADACIAIAJIAFADQACABACgCIAFgCQAHAAAFAFIAKAIQAGAGAEgCIALgFIAYgDQAGgBAHgEIAOgGQAHgCAJACIANAGQAJACASgCIBZgHIATAAQAMABAGgBIAGgBIAEgBQAGgDAMgKQALgKAJgDQAKgEAPACQAUACAFAAIARgFIBKgCIA8AFQhyALj9AiQjrAih+ALgEg2tAAAQj8gihzgLIA8gFIBKACIARAFQAGAAATgCQAQgCAKAEQAIADALAKQANAKAFADIAFABIAFABQAGABAMgBIATAAIBZAHQASACAJgCIAPgGQAHgCAHACIAPAGQAHAEAGABIAYADIAKAFQAEACAHgGIAJgIQAGgFAHAAIAEACQACACADgBIAEgDIADgDIAGgGQADgCAEADQAGADAAANQAGgBAAAKQAAANAGACQADABAHgCIAMgCIAGABIAGADIAfAFIAwgBQAQABAYAJIADAKQh/gLjrgigEBERAADIgCAAIgDgBIAEAAIgsgDQABgEAGgCIAKgCIAIABIAFADQAEABAFgBIAIgDQAJgBAAACIAAABIgDAGIABAAIABgBQACgDACAAQAAAAABAAQAAgBAAAAQABAAAAAAQABAAABAAIADAAIAJgBQgCAEABACQAIAAAAgEQgCgIAEgCIgBAFQACAFADABQgCgKAHgCIADAAIABADQAAADAEADQAEACADgCIADgEIAEgEQACgBADACIAEAEIACADIADABQAFADgEACIgEAAIgJAAIgMABIgdABIgFABgEBBfgASIAAgBQACgDAFAAQAFAAACgBQAFgEAHABQAHAAAGgCIAEgCQABgCAHABIAFADIADgBIAGAAQABAAAAAAQABAAAAABQAAAAAAABQAAAAgBABQgHAJAEABQABgEAEgCIADgCIABgEIAGgCIAFAAIAGgCIAKABIAGADIgEACIgBADIgBADIgCADIADAFQABAAADgEQADgHADgBIAGAAIAHABQACAAAGAEQAIAGgDACIgFAEIgFAFg");
	this.shape_2.setTransform(480,-35.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// trees
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#82DC5E").s().p("EhK+AEiIAAmLQBcgMB8gXIDOgoQDtgvBtAGQB+AGCiAVQA5AHDjAgQFmAzDLgCQB7gCCOgRQAsgGDugjQGyhBHKgUQNBgmJxAAQHmANISAZQHKAUGyBBQDuAjAsAGQCOARB7ACQDLACFmgzQDjggA5gHQCigVB+gGQC1gJF5AsQBuAMDbAcIFEApIAAGLg");
	this.shape_3.setTransform(480,-19.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#82DC5E").s().p("EgleADwIAAnfQHmANITAYQHKAWGxBAQDuAjAsAFQCOASB5ABQDLACFmgyQDjggA6gHQChgVB+gGQC1gJF5ArQBuANDbAcIFEApIAAEng");
	this.shape_4.setTransform(720,-24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-69.4,960,79.4);


(lib.cloud2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D2F5FF").s().p("Egx4AP7QASgpAnghQAogiAsgJQgPhNBHgnQAygcBUgFQgYgzBBg2QA2gsA7gOQAEhBBOgoQAigRAkgFQAlgFAcAJQAVAGATANIAcAUQAfAWAngKQgEgfALgWQAIgRAVgQIAmgdQAXgTANgUQgPgYAggsQAcgnAbgMQAdgMAoAIIBCAPQgvhmgDg7QgCggAWgqQAVgmAjgiQAkgjAlgQQAqgRAgAMQALgSAfggQAkgnAigaQBihJAZBHQgCgfAageQAYgcAngTQAngSAjgBQAmgBATAVQggg2ARg/QAHgcAEguQABgQANgaQANgbASgUQAwg0AgArQgMgrAWgaQATgYAmgEQAkgEAhARQAkASAMAhQAqgIA8AUQADgJACgUIAEgfQAHgkAYgMQgThDAKg2QAMhCA1gcQBWguBRgHQBsgIAcBQIAOAQQAsgHAnAJQApAIAWAXQAGAGAKAUQAKATAGAFQAFAFANgDQAOgDAEAEQAaAUALARQAPAWgBAbQAngEAZAdQAOASATAuQAkABABAzQAZAEA3gNQA0gLAcAFQAWAFAcAlQAbAjATgCQAYgCACg5IAAguQAAgZACgIQAQg2AhgfQAmgjA0AHQAAg8AtgkQArgiA8AEQASABAZAMQAbANALACQAOACAjgHQAfgGAXAHQA0AQAmAqQAnArAKA0QABAIAAAjQAAAZAJAOQANAUAXATIAmAdQAVAQAIARQALAWgEAfQAnAKAfgWIAdgUQATgNAUgGQAcgJAlAFQAkAFAiARQBOAoAEBBQA8AOA1AsQBBA2gYAzQBUAFAyAcQBHAngPBNQAsAJAoAiQAoAhARApQAHgVAGgnIAMhCQAQhSAgghQAZgaAWgDIA/gDQAQg6AkgsQAkgsAygVQBuguB5BSQAMggAZgJQAUgHAkAHQBMAPArBSQALAXAUAyQASAwAMAVQAFAIANAKQANALAFAHQAPAUAQASIAXAYQAUAZAMAwQAXBegLBAQgKA9gzBSQAyAGA9AmQBEAqAOAtQAYgwATgVQAfggAnAFQAqAFA2AvQA1AvANApQAsAEA1AyQAzAvAMAuQALAogZAvIgWAoQgMAYgEAUQgEAVAAAvIAABQQgEBkgwAfg");
	this.shape.setTransform(319.4,-101.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-203.8,638.8,203.9);


(lib.cloud1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BBEFFF").s().p("EhK/ApAMAAAg7gQCrAABzB6QA1g6BIAbQAbALAWAVQAUAUAGAUQAVhLAzgsQAugqA+gHQA7gIA7AbQA9AcArA6QBagfBIAsQBEApAUBYQAggqBSgIQAigDAaAFQAbAGAFAOQgChEALgvQANg9AmgrQAEgFAggXQAggXADgGQAIgOgEgsQgFg1ABgHQAPiAAYg6QAohiBagbQCFgpAoBIQgaiXCJhWQB6hMC/AEQBZACBSAVQBUAWA+AnQCQBYgRCMQB0AcAzA0QAzAzARBqQA/hTCFgGQA6gDA6AOQA5AOAsAaQAOAIAWAXIAlArQAwA2AdgFIARhZQALg4gFggQgCgMgUg6QgNgoAEgjQAGg0Azg7QAyg6BCgjQBHglA7AJQBCAKAeBFQAjgvA4gFQAygFA8AbQA2AZAtAsQAtArAQAqQAMgrAjgeQAngjArAGQgBgyAUguIAohYQAJgUAJggIAQg0QAUg8AkgmQA+g+BzgQQBqgPB2AcQB5AcBWA8QBeBBAZBRQAdAFAug2IAkgrQAUgXAOgIQAtgaA5gOQA6gOA5ADQCFAGA/BTQARhqAzgzQA0g0B0gcQgRiMCPhYQA/gnBUgWQBRgVBagCQC+gEB6BMQCJBWgaCXQAphICFApQBZAbAoBiQAYA6AQCAQAAAHgEA1QgFAsAJAOQADAGAfAXQAhAXADAFQAlAqALBEQAHArgCBNQAZhRBehBQBWg8B5gcQB4gcBqAPQBzAQA9A+QAkAmAVA8IAPA0QAJAgAJAUIApBYQAUAugBAyQArgGAmAjQAkAeAMArQAQgqAsgrQAugsA2gZQA7gbAzAFQA4AFAiAvQAfhFBCgKQA6gJBIAlQBCAjAyA6QAyA7AHA0QADAjgNAoQgTA6gCAMQgGAgALA3IASBXQA+hAA1BCQAohbBPg7QBkhKCLAAMAAAA7gg");
	this.shape.setTransform(480,-262.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-524.9,960,524.9);


(lib.bird2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{fly:0,land:8,takeoff:22});

	// timeline functions:
	this.frame_7 = function() {
		/* gotoAndPlay("fly");*/
		this.gotoAndPlay("fly");
	}
	this.frame_19 = function() {
		/* stop();*/
		this.stop();
	}
	this.frame_22 = function() {
		/* 
		*/
	}
	this.frame_25 = function() {
		/* gotoAndPlay("fly");*/
		this.gotoAndPlay("fly");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(12).call(this.frame_19).wait(3).call(this.frame_22).wait(3).call(this.frame_25).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#548294").s().p("AhuCgQAJgJAAgJQAAgJALgFQAEgSANgIQAEgPAHgGQgGgIgBgHQgIAEgFgIQgQgBgHgHQgMgEgLABQgLABgHgEQgHgDASgGQAQgEARAAQAVAAAHgBQAzgIAGAEIAAgCQAOg0AGAEQgCgVACAAQgBgOACgBQgCgKADgEQgEgMAFgEQgEgPAHABQgHgRALgBQgLgeASAQQgLglAfAiQgCgHACgDQgWggAXASQAPALAQAgIASArQAUgFgHAhIgNA3QgGAiAHAJQAHAIAIAAIATgDQAaAAgHAZQAIAHgEAFQgDgGgEACQgJAAgDAFQgEAFgaAFQgLADgIAJQgXAPgsgDQgNgBgCAHQAAALgGADQgFAUgLgFQgIgFAGgCQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAAAQAGABgFgGQAFABADgFQgCgIgFAGQgEgEAGgEIAEgDQgMAIAGgPIgLgFQgjAUgTAFQgSAPgEAAQgDAAADgHg");
	this.shape.setTransform(16.9,16.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#548294").s().p("AgBCHQgGgCADgEIAAACQAEAAgFgGIAEgBIABgCQgBgDgGACQgEgDAEgEIAAgBIACgCQgIAGAAgIIAAgEIgIgDIgDgBQgdAOgMgCIgFABIgEADIgGAHIgKAKQgGADADgGIAAgCIACgGQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBIABgDIgBgCIAAgCIACgEIAEgCIACgDIAAAAIADgHIAAgDIAAgCQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAABAAQABgEAEgDIABgBQABgFADgCIABgCIABgHIgDgEIgFgGQgHAEgDgEIgDgDIgEAAQgIAAgGgBIgEgCIgLgBQgHABgFgBIgBAAQgGACgEgDIgGgBQgEgDAHgDIAFgDIAEgCIAIgCQAFgDAIAAIADgBIACAAIAYgEIADgBQAqgMAMABIAAgCQATgpAIgBIABgDQgBgPAEgBQABgIADgDIABgBQAAgEACgCQABgEACgCQgBgGABgEQABgDADgCQgCgNAIABQgBgEABgCQABgGAHABIgBgJQACgFAIAIIgCgEIgCgHQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAGACAMALIACACQgBgEADgCQgMgWAVAQQASANAPAaIAMAWQAFAIgDAFQAAgBABAAQABAAAAAAQABAAAAAAQABAAAAAAQALAHgCATIAAACQAAAEgCAEQgDAKgIAGIgBADIABAOQABALgDAGIgEAMIABADIABABIAEAGQADADACgBIAHgDIAFABQAQADgGAHQABAEgCAGIAAAAQAJAHgEAFQgCgEgFAAQgIAAgEACQgCACgJABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAABIgIAFQgFAFgIADIgEABIgQADQgGAJgPgCIgUgEIgEgBQgGACgBACIgCAFIAAABIgDAFIgFADIgGAHQgDAFgCAAIgBgBg");
	this.shape_1.setTransform(17.7,19.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#548294").s().p("AALBoQgBABAAgBQABgBgEgGIACAAIgGgBQgDgDABgFIAAAAQAAAAAAgBQgFAFgCgIIgCgCIgIgDIgDAAQggANgGgLIgGABIgCAEIgEAIIgJALQgBABgBAAQgBABAAAAQgBAAAAgBQAAAAAAgBIAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAgBAAgCQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAgBIABgCIgCgCIgBgCIACgDQAAAAABAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQABgBAAAAIAAgBQADgDABgDQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAAAIgBgCQAAAAAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQgBgDAEgDIABgDQACgEAEgBIAAgDQAAgBgBAAQAAgBAAgBQgBAAAAAAQAAAAAAAAIgBABIgEgEIgGgCQgHAFgDgEIgCgDQgBAAAAAAQgBAAgBAAQAAABgBAAQAAAAgBAAQgIACgGgBIgEABQgFABgHAAQgHACgFgCIAAAAQgGADgEgEIgEgCQgDgDAGgBQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAABgBIADgCIAIgEQAEgDAIgBIACgBIACgCIAXgGIACgBQAigQARgBIABgCQAXgfANgHIABgDQACgMADgCQADgGAFgCIABgBIAEgEIAEgFQAAgFADgEQABgDADgCQABgKAIAAQABgDADgBQADgDAGABQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAAAAAQACgBAEADIgCgDIAAAAQAGAEALAJIACACQAAgBABAAQAAAAABgBQABAAAAAAQABAAABAAQgDgMATAOQAVANAQAWIAOATQAEAGgIABQALAJAAANIABACQADAEgEADQgFAFgLAAQgBABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQADAHABAGQAFALgHAEQgEAGgEgBQgBAAAAAAQAAAAAAAAQAAABABAAQAAAAABABIABACIADAGIABgDIAEADQALAHgMgCQABAFgCAEIABABQAJAIgDAEQgCgDgGAAIgLgBIgKgCQgDgBABADIgDAHQgBAIgJgBIgEABIgPgDQAAAOgPgEIgRgIIgFgCQgDADgBADIgBAFIAAABQgBAEgDgBIgFABIgHABQgCAGgDAAQgFAAAAgFg");
	this.shape_2.setTransform(18.9,22.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#548294").s().p("AASBYIgCgCIgDgGQgCAEgGgEQgDgEgBgEIgBgBIAAABQgFADgEgHIgDAAQgEAAgEgDIgDAAQgkAMgBgTIgGABIABAFQgBAFgCADIgHAMQgEAEgBgBIgCAAQgEAEgBgGQABAAABAAQABAAAAgBQABAAAAAAQAAgBAAAAIAAgDQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBAAAAAAIgCgCIABgDQAAAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAIAAgBQAEgDABgDQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBAAgBAAIgCgBIgBAAQgCgDAEgDIABgDQACgEAEgBIAAgCQgDgEgEAFIgBABIgEgEIgHADQgIAFgCgEQAAgBAAAAQgBgBAAAAQAAAAAAAAQgBgBAAAAIgFACQgHADgHABIgFADQgEADgIgBQgIAFgEgEQgGAFgDgHIgCgBQgCgEAFAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIADgCIAHgFQADgFAJgBIABgCIACgCQAIgGAOgDIACgCQAagUAWgFIABAAIArghIABgCQAEgKAGgCQAFgFAGgBIABgBIAHgBIADgFIAGgJIAEgEQAFgIAIAAQADgCAEAAQAFAAAFACQAEABABAFQAFACAEAGQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBABIAJAHIADACIAHACQAHgBAQALQAYAPAQAQIAQAQQAFAEgRgCIgFgDQAOAKADAKIACACQAFADgFACQgGAEgQgFQAAAAAAAAQgBAAAAABQAAAAAAABQAAABABAAIAIAMQAHAMgKAAQgFADgIgFQAAAAAAAAQAAAAAAAAQAAABAAAAQAAABABAAIACADIACAGQAAAEgFgEIgGgFIAEAFQAHALgTgKQABAEgCAEIACABQAJAJgCACIgIgBIgLgFIgJgFQgDgCACAEIABAJQAEALgLgEIgDgBIgPgIQAHAUgPgIIgPgLIgEgDQgCAEABAEQABACgBADIgBABQgCADgDgCIgFgCQgGgCgBgCQgBAGgCABIgCABQgCAAgDgEg");
	this.shape_3.setTransform(21.1,23.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#548294").s().p("ABXBRQgLgKgFgHQANAagPgLIgRgTQAAAGACAEQADAEgDADQgCADgFgEQgMgKAAgFQACAagVggQABATgQgXQgEAIgIgKQgHADgGgEQgqANAEgdIgHAAQAGAJgDAHQgGALABACQgHAIgCgBQgHAGgCgHQABAAABAAQABAAAAAAQABAAAAgBQAAAAAAgBQACgDgEAAIgCgBIABgDQAAABABAAQAAAAAAAAQABAAAAAAQAAgBAAAAQAAgBAAgBQAAgBAAAAQAAgBAAAAQABAAAAAAQAFgDABgDQgCgCgEACQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQgBAAgBAAQAAAAAAABQAAAAAAAAQAAABAAAAQgFgCAEgEQABgIAHAAIAAgCQgEgCgHAHQgCAEgFgHQgQAQgBgGQgBgFgGAFQgHAFgIABQgEAKgNgBQgIAHgDgGQgGAHgEgKQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAABAAQgIgDAHgEQAFgDAAgDQACgGAKgBIAAgDQADgJATgGQAUgaAbgIQAigJATgUQALgMASgCIAKABIAMgMQANgPASAFQARAEACAPQANAKgHAJQgEgHgEABIgEACIASALQBRAvAWARQAIAHgkgOQAVASAEADQAGAEgGABQgGABgUgMQgBAAgBAAQAAABAAAAQAAAAAAABQAAAAABABQAbAYgRgDQgHAAgLgKQgBAAAAAAQgBAAAAAAQAAAAABABQAAAAABABQAEAHgBAEQgCAFgTgNQAJAZgdgWQABAFgBACQASATgRgHQgIgFgKgMQgBAAgBgBQAAAAAAABQAAAAAAABQABABABABQANAUgGAAIgGgCg");
	this.shape_4.setTransform(23.2,25.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#548294").s().p("AAUBVIAAAAIgEgGIgCgEIAAgCIgBgBQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQgCACgDgGIgCgDIgDgCQgCADgCgDIgCgCIgFgEIgBAAIgDABQgFABgEgCQgeALgGgLIgCgHIgEABIgCABIABAHQgBADgCADIgEAIIgCACIAAAAIAAAAQgBABAAABQgBAAgBABQAAAAAAAAQgBgBAAAAIgBgBQAAABgBAAQAAABgBAAQAAAAgBAAQgBgBAAAAIgBgDIACAAIABgCIAAgBQAAgBAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAIgBgBQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAgBIADgCIABgDIgBgBIgDAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAIAAAAIAAAAIgBAAIABAAQgCgDADgDIAAgBQABgFAEgBIACgBIAAgCQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBAAIgDAAIgDABQAAABAAAAQgBAAAAAAQgBgBgBAAQAAgBgBgBIgBgBQgFAEgDABIgDAAIgDABQgEACgBgDQgCgDgFADIgBABIgGABIgHACIgDADQgFADgIAAIgBAAQgHAEgDgEIgBAAQgDACgDgBIgCgDQgCgEAEgBIAAAAQgEgCAEgDIABAAIAEgDIADgCQABgDADgBQACgCAFAAIABgCIADgEIAGgEIANgDIAIgHIAEgEQASgLASgFIATgFIACAAIACgCQANgLAKgLQAKgNANgCIABAAIABAAIAFgDQADgFADgDIAEgFIADgDIADgDIAFgEIAHgDIAFgBIADAAQADgBADABQAEAAAEAFIADABQAEACAAAFIgBAAQgCgFgCAAIgBgBIgCABIAIAGIACAAIADAAIAAABIADAAQAJAFAMAJIAEACIAFABQAGgCAPALQAXAPAMANQAEAEgHgCQgEABgHgBIAHAIQAFAGACACIAFADIAAAAQAFADgDABQgCAEgOgDIAAAAQgBABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAIACADQAIAMgDAFQAAABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIgBABQgDACgGgCIgDgBQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQADAGgBADIgBACQgDADgHgCIgBAAIAAgBIgCAAIABACIADAHQAAABAAAAQAAAAgBAAQAAAAgBAAQgBgBgBgBIgDgCIgCgCQADADgCADIABACQADAEABADIABAEQACADgFgBIgDAAIgGgEIgBgBIgJgFQgDgCABAEIAAADIABAEQAAAEgBACQAAAFgHgCIgFgCIgDgBIgKgGIAAADQAFAQgOgGIgCgCIgQgMIgBABIAAADIgBACIgBAFIAAABIgEACIAAAAIgCAAIgCgBIgFgCIgFgDQgBAFgCABQAAABgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgDgCg");
	this.shape_5.setTransform(21,24.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#548294").s().p("AANBoIAAAAIAAgBIAAABQABgCgEgEIACgCIAAgCIAAgBIgFACQgDgBAAgFIAAAAIABgCIgEgBQgCADgBgFIgBgCIgFgEIgCAAIgDAAIgHABQgbALgJgHIgEgCIgDACIgCABIgCAFIgEAHIgFAFQgBABAAAAQgBABAAAAQAAAAAAAAQAAgBAAAAIAAgBIAAgBQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBIAAAAIgBgCIgBgBIABgCIAAgBIABgCIAAgDIAAgBIAAgBIACgCQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAAAAAIAAgBIACgEIACgCIABgDIgBgBIgBgBIgBgBIABgBIAAgBQAAgCADgDIAAAAIAAgBQACgFADgCIACgBIAAgDIgBgDIgDgBIgDgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBgBAAAAIgBAAQgGADgDgCIgDgBIgDABQgDABgCgBQgDgCgEABIgCAAIgFAAIgHABIgEABQgGACgGgBIgBAAQgGADgEgDIAAAAQgEABgCgBIgCgCQgCgEAFgBIAAAAQAAAAAAgBQAAAAAAgBQAAgBABAAQABgBAAAAIACgBIADgBIAEgCIAEgDIAGgCIABgBIAFgCIAFgDIANgCIAJgEIAEgDQAUgKAQgCIASgEIABABIACgCIASgZQAJgPAIgBIABAAIAAgBIAEgFQACgHADgCIADgFIACgEIACgDIAEgEQACgDADgCQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAIACgCQABgCADgBQACgGAFADIACgCQACgCADABIgCgGIAAAAQAAgBAAABQADABAEAEIAAgCIABgCIAAgBIABgBQAIACAMALIADADQABgCADgBQgDgLASANQATANAOASQABAAAAABQAAABAAAAQAAABAAAAQAAAAgBABQAAADgCADIAGAIQAFAHgBAEIAEABQAFADgBACQACAFgIAGIAAABIAAAEIAAADQACAJgFAFIgCAEIgBACQgBAEgDACIgCACQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQACAFgCADIgBABQgCAHgFAAIABABIAAABIABACIABACQACAEABAAQABAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAgBIABAAIACgBQAFADgBAEIgBACIACAHIAAADQAEAEgDABIgCACQgCgDgEgBIgBAAQgGgCgEAAQgBAAAAAAQAAAAgBAAQAAABAAAAQAAABgBAAIgDACQAAAAgBAAQAAABAAAAQAAAAAAAAQgBABAAAAQgBAEgDACQgCAFgFgBIgGABIgDAAIgKgCIgDACQAAAMgNgDIgDgBQgKgGgHgDIgBABIgDABIgBABIgDAEIAAABIgDADIAAABIgBAAIgCACIgGAAIgFACIAAABQgDAFgCgBIgCAAQAAAAgBAAQgBAAAAAAQAAgBAAAAQgBgBAAAAg");
	this.shape_6.setTransform(18.7,22.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#548294").s().p("AgBCHQgGgCADgEIAAACQAEAAgFgGIAEgBIABgCQgBgDgGACQgEgDAEgEIAAgBIACgCQgIAGAAgIIAAgEIgIgDIgDgBQgdAOgMgCIgFABIgEADIgGAHIgKAKQgGADADgGIAAgCIACgGQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBIABgDIgBgCIAAgCIACgEIAEgCIACgDIAAAAIADgHIAAgDIAAgCQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAABAAQABgEAEgDIABgBQABgFADgCIABgCIABgHIgDgEIgFgGQgHAEgDgEIgDgDIgEAAQgIAAgGgBIgEgCIgLgBQgHABgFgBIgBAAQgGACgEgDIgGgBQgEgDAHgDIAFgDIAEgCIAIgCQAFgDAIAAIAFgCIAXgDIAEgBQAngMAOAAIABABIABgCQASgpAJgBIAAgCQAAgRAEAAQABgHACgDIACgCIABgGQABgDACgDQgBgFABgDQABgFADgCQgCgNAIABQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAgHAHABIgBgIQABgGAJAJIgCgEIgCgHIgBgDQAGAAAOAOIACADQAAgFACgCQgMgWAVAQQASANAQAaIALAWQAFAIgDAFIAEgBQAMAGgDAUIAAACQABAEgCADQgEAKgHAGQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAIAAAOQABALgDAGIgEAMIABADIABABIAEAFQADAEACgBIAGgDIAGABQAQADgGAGQABAEgCAEIAAADQAJAIgEAEQgDgEgDAAIgBAAQgIAAgEACQgCACgJABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAABQgDADgFACQgFAFgIADIgEABIgQADQgGAJgPgCIgUgEIgEgBQgGACgBACIgCAFIAAABIgDAFIgFADIgGAHQgDAFgCAAIgBgBg");
	this.shape_7.setTransform(17.7,19.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#385763").s().p("AAFCBIABgCIgBgBQABAAAAAAQAAgBAAAAQAAgBgBAAQAAgBgBgBIgCgDIAAgBIAAgCIAAgBIABgCIgCgDIgBgCQgDgEABgEIABgBIAAAAIAAgDQgDAAgCgBQgDgBgCgEIgBgDIgGgCIgDgCIgEgBQgSABgNgBIAAgBIAAgDIAAAAIABAAIgBgEIAAAAIABgBIAAAAIgBgDIAAgBIAAgCIgBgCIAAgBIgBgCIAAgCIgBAAIAAgBIAAgCIgBgEIABgBIAAgCIAAgBIgBgEIAAgBIABgCIgBgCIgDgFIAAgCIgCgCIgBgBIgEgDIgEgEIgCAAIABAAIAAgBIgDAAIgCAAIgDgCIgEgCIgEgBIgKgDIAAgBIgEgBIAAAAIgFgDIgHgCIgHgDIgBgBQgEAAgDgCIgBAAQgGAAgFgCIgHgDIAAgBQAAgBAFgBIAFgCIABgCIABgCIAGgBIAHAAIAGAAIAFAAIAXABIADAAIACAAQAfgDASADIAEAAIABABIACgBQAVgYAOAFIAAgBQADgKAGACIAFgEIACAAIAAgBIACgBIAAgCIAAgBIAAgCIACgCIAAgCQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIgBgEIAAgDQABgBAAAAQAAAAABgBQAAAAABAAQAAgBABAAIAAAAIgCgEIABgDIAAgDQABAAAAAAQAAAAABAAQAAAAABAAQAAAAAAAAIABAAIAAgDIAAgCIgBgCIADgDIACgCIgCgFIAAgCIABgBQgBgFAGAEIgBgBIAAgCIgDgHIgBgDIABgBIAEABIAEAAIADABIACABQAAgEAAgDIgBgEIgBgDIABgCQgCgGAHACIABABIABAAIAAABIAKAGIACABIAHAGIAQATIADADIAMASQAEAHAAAEIAEABQAFADADAEQAFAHAAALIABACQACAEgBADQAAAKgEAHIAAAFIABANIAAAIIgDAJIgEANIABACIAAABIABACIABADIACAEIAEACIAFACIADAAIACAAQAGACADAEQADAEgBADIAAAAIAAACIABAFIABADIABABIABADIABACQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBABIAAABIgBAAIgCABIgBABIAAAAIgCAAIgBgBQgFgDgEABIgBAAIgDABIgEACIgDAAQgDAAgCABIgHACIgCACQgEAFgEADIgHAEIgFABQgFACgIABIgHAAQgFADgIAAIgEgBIgCADIgCABIgBABIgDABIgCAAIgCACIgHADIAAgBIgDAAIgBAAIgBgBIgBABIgBAAIgBABIgBACIgDACIAAAAIgBABIABABIgBABIAAABIgBAAIAAgBIAAAAIgEAEIAAAAIgCABIgBAAIgDABIgBgBIAAABIgBAAIgBAAIgBgEgAhGBjQgCgDABgIQgBgDABgDIgBgCIABgBIgBgBIABAAIABABIACABIACAAIACABQACAAAFABIABAAIABABIgBABIAAABIAAABIABACIAAAAIACADIgDACIgFACQgDACgDABIgBABIgCACIAAgCg");
	this.shape_8.setTransform(17.1,19.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1C2B31").s().p("AAWCGIACgBIgBABIgBAAgAAWCGIgBAAIAAgBIABABgAASCGIAAgBQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAIAAgCIABABIAAgEIACgBIgBgDIAAgBIgEgEIgDgDIgBgCIgCgDIAAgCIAAgCIgBgGIgCgEQgCgEABgGIAAgBIgBgEIgFgEIgGgFIgDgCIgGgDIgCgBIABgBIgCgBIAAgBIgCgCIAAgBQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIABAAIgBgDIgBAAIAAAAIgEgFIABAAIAAAAIgDgEIABgBIgCgDIAAgBIgBgBIABAAIgBgBIgBgCIgCgCIAAgBIgCgCIgBgBIgBgBIgDgDQgDgCAAgCQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAIgCgCIgCgBIgEgDIAAgCIAAAAIgBgCIgDgCIgFgFIAAAAIAAgBIAAgBIgEgCIgBgBIgEAAIgGgFIgCgBIAAgBIACAAIgDgBIgCgBIgEgCIgEgCIgEgBQgGgDgGgEIABAAIABAAIgEgCIAAgBIgHgDIgIgFIgIgGIABAAIgBgBIADAAIgHgCIgBgBQgGgDgGgFIgHgDIgBgBIAAgBIAHAAIAGgBIgCgCIgCgCIAGAAIAHABIAHABIAGABIAWAGIAEABIABAAQAcAEAWAHIADABIACACIACAAQAZgGASAKIACAAQAGgCAHAEIAHACIACABIABAAIACAAIAAgDIAAgBIgBgCQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAAAAAIABgCQAAgBAAgBQAAgBAAAAQAAgBAAAAQAAAAAAgBIgBgDIAAgEQABAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIABAAIgDgEIAAgDIAAgCIADABIABgBIgCgCIAAgCIgBgDIACgDIgBgBIgCgGQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBIABAAQgCgHACABIAAgBIABgBIgEgHIgBgEIAAAAIAFgCQgDgCABgEQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAIABgBIABAAQgCgEAAgEIgCgFIACgDIABgBQgCgHABgCIABABIAAgBIAAAAIAKAEIgBgCIAJAGIAUASIACADIAQASQAEAFACAFIAFADIAHAGQAHAIADAJIABACIADAHQADAKAAAIIABAFQACAIAAAHIAAAFIgDAKIgFANIAAACIAAACIAAABIAAACIAAAHIAAAGIAGACIAEABIADAAQAGACAEAGQAEAEgBAEIAAABIAAACIADAGIAEAEIAAACIADADIABADQgGgDgDAAIAAACIABACIAAAEIAAABIgBAAIgBAAIgCgCQgFgFgDgBIgCAAIgEABIgEACIgCAAIgGACQgFABgFAAIgCACQgEAHgEADQgDADgFACIgGADIgPACIgJAAQgHABgJgCIgFgCIABAEIAAAEIgBACIgBADIgCABIgBAFQgDAEgEACIAAAAIgDAAIgBAAIgBgCQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAIAAgCIAAABIgDACIgBABIAAAAIABgDIAAAAQgDAAgCADIAAAAIAAABIgCAAgAgzBBQgGgDgFgHQAOAFAVAEIADABIACABIgCAAQgFABgFAAQgEABgFgBIgBAAIgCABQgDAAgCgDgAgWBCIAAAAgAhCA2IgIgEIgCgBIgDgCIgBgCIAAAAIABgBIAFABIAAAAIADABIAHAHIACACIgEgBg");
	this.shape_9.setTransform(16.7,19.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAaCPQAAAAgBAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIAEgCIABgCIABgBIgEADQgEACgCgCIACgCIADAAIADgDIADgEQgEgCgCAEIAAAAIgBAAIAAAAIgCgCQgDABgCgDIABgDIABABIACABIABgGIADAAIgBgEIgHgIIgGgFQgEgCAAgFIAAgKIgDgSQgBgEgHgIQgEgFgPgGQgigNgTgLIgJgGIgDgCIgCgCIgBgEIACgBIABAAIALAAQADAAAQAIQAVANAQAFQATAGALgCIgEgDIgDgDQABAAAAAAQAAAAAAgBQgBAAAAAAQAAgBgBAAIABAAIgDgDIAAgBIgFgFIABAAIAAgBIAAAAIgGgEIABgBIABAAIgEgEIAAgBIgCgCIABAAIgBAAIgGgFIAAAAIAAgBIgCgBIgDAAIAAgBIAAAAIgGgDQgFgCgBgDIABAAIgOgHIAAgBIAAAAIgQgJIABgBIAAgBIgFgDIgGgDIgLgGIAAAAIAAgBIADgBIgDgCIgCgCQgLgCgOgMIAAgBIAAAAIACAAQAAgBgEgCIgQgLIgJgIIACAAQAAAAgBgBQAAAAAAAAQAAAAAAgBQAAAAAAAAIAFgBIgdgUIAAgBIAAAAIAOACIgKgGQAEAAALAEQAKADAdANIAzAXQAzAXApAgIADABIAAgCIgBgDQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQgBgFACAAQgCgGAAgDQAAAAAAAAQABAAAAAAQABAAABAAQAAAAABABIgEgFIAAgBIgCgCIAEABIgCgDIgDgEIACgCQgFgFgCgEQAAAAAAAAQABgBAAAAQAAAAAAAAQABAAAAAAQgFgKAAgCIACgBQgGgHAAgFIAFgEQgFgCgCgJQgBgHADgCQgEgEgCgLIAEAAIACgCIgHgPIAAgBIAAAAIALADIgEgGQAEABAGAEIAaAVIAoAmQAnAqgEAcIgLAZQgFANgCAJQACACAFABIAJABQAGACAFAIQAEAGABADIAAAEIAEAHIAHAGQAEAGAAADQgLgIgEgBIADAGQADAFgBAEIgCgCIgBgCQgJgKgDAAIgEABIgEACQgKAFgKgDQgHAMgEADQgKALgYACQgLABgSgHIgGgEQAAADAEAFQADAEgBAEQgBAEABACIgCABIABAHQgEAIgDACIgBgBIgCABIgBAAgAAaB+IADAAIABgDIgCABIgCAAgAASBmIAHAHIACAEIACgCIADABIgGgLg");
	this.shape_10.setTransform(16.3,19.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAuBmIABgBIgCAAIgCAAIgCAAIgEgCIgBgBIAEgDIACgBIADgCIACAAIAIADIADACIABgBIABABQABgBgBABIgCACIgBgBIAAAAIAAACQAAAAAAgBQAAAAgBAAQAAAAAAABQgBAAAAAAIgBABIgDAAIAAAAIgCgBIAAAAIAAABIgBABIgBABIgBgBgAAoBZIgCgCIgFgDIgFgDIAAgCIgCgBIAAgCIABgCQADgCABgCIgFgGIgDAAIgTgDIgCgCIgCAAIAAABIAAgCIACgDQgDgGgGgDIgFgCIgCgDIABAAIAAgDIAAgCQAAgBABAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIADgBIABgEIAAgEIAAAAIAAgBIABgBIABAAIAAgGIACgCIAAgDIAAgBIAAAAIAAgDIABAAIAAgBQAAgEgCgCIgBAAIgBAAIAAgBIgCgBIgDgBIAAAAIAAgBIgCAAIAAgBIgBAAIgCAAIgBgCIAAgBIgGAAIgBgCIgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAIgDgBIgCAAIgBgCIgBgBIgCgBIgBgBIABAAIgCgBIAAgBIgHgCIABAAIgGgBIABgCIABgBIgDgBIgCAAIgBgBIAAgBIgDgBIAAgBIgBAAIgGgCIAAgBIgBgBIAAAAIgBgBIAAAAIABgBIgBAAIgDgBIgDAAIAAgCIgMgBIAAgCIgMgEIABAAIABAAIABgBIgGgCIgHgCIAAgCIgEgCIgDAAIgDgBIgIgFIAAAAIACAAIAAgBIAAgBIAAgBIgKgEIgBgCIgBAAIAAgCIgQgGIAAgBIAAAAIAJAAIgDgDIAHABIABABIABAAQAGABARAGIAOAEIAVAGQAgALAdAPIACABIACAAIAAgBIAAgBQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAABIgBgDIABgBIgBAAIADAAIgBgBIAAgDIACgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIACAAQgBgGABgBIAAAAQAAgDAAgDIACgCQgCgBAAgEQAAgBAAgBQABgBAAAAQAAgBAAAAQABAAAAgBQgBgCABgFIACgBIACAAIgBgIIABAAIAAgBIAIACIgBgDIAGACQAEABAOAJIAZAUIADADQARAPAHALIACAHIgCAPIAAAFIgBAIQACAAAFgDIAHgFIAFgCQADgCAGABIABAAIAHADIADADIAFAGIAEAEIABABIAHADQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAIgBAAIgDAAIgHgBIgCAHIAAABIgBAIIAAACIAAABIAAAAIAAgBQACgFAFAAIABAAIABABIABAAIAEACIACACIABAEIgDALIgDAJQgDAGgJAFQgDgCgCAAIgBABIgIADIgDABIgCgBQgGAAgCgCIgCAAIgHACIgIgBIgCgBQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIgDAAIgBADIgDABIAAABIADAAIgDACIgDADIgBADIgCACIgDAIQgEAHgFADIAAAAIgGADIgDAAIAAAAIgBAAIgCAAIgBAAIgBABIgFgDgAhJA1IAEgFIAAgCIACgDQgBgEACgBIACgDIABgBIABgBIAFAAIADAAIADAAQAFgBAHABQAKgBAKACQABABAAAAQABAAAAABQAAAAABABQAAAAAAABIACADQgMAFgOABIgLABIgQACIgHADgAgOApIAAAAg");
	this.shape_11.setTransform(16,23);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAAAEIAJAEIgCABIgCAAgAgIgFIADgDIABADIAAAEg");
	this.shape_12.setTransform(19.9,31.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAUBVQgBAAAAAAQAAAAgBABQAAAAAAAAQgBABAAAAIABgDIAOgCQgCgEgDgCIgbACQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAABQgBAAAAAAIABgCIANgCQgDgKgIgEIgEgCQgCgCAAgGQAAgFgCgCQgPAAgXAMQgaAOgbAKIgOAFIgTADQgFAAgBgCIAHgIQAHgEAZgIQAggMAagVQAKgHAHgKQAFgIgCgFIgGgDIgEgBIABgBIgDAAIgDAAIAAgCIABgBIgGABIgEgBQAAgCAFAAIgDgBIgEAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAAAIgCgBIgDgBIACAAIgIgBIABgBIgGAAQAAgBAGgBIgDAAIgDAAQAAgBAAAAQAAAAAAgBQABAAAAAAQABAAAAAAIgDAAQAAgBAAAAQAAAAABAAQAAAAAAgBQABAAAAAAIgHAAIABgBIgHAAIAFgCIgJABQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAABAAIgOABQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAIgPgBIAEgBIgRgBIAFgCIgFgBIgGABIgKgEIABgBIADAAIgTgFQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIgCAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAAAIgQgDIAJgCIgBAAQADgDAOgBIArgDQA3gCAiABIAQACQAIABAHAFQAAAAAAABQABABAAAAQAAAAABABQAAAAABAAQADgDAIgTIAEgGQAFgHAKgDQASgEAFANIALADQAIABACAEQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAABIgEAAQgLADgDAGIgEALIABAGIAngBQAZAAAMAEIAEAEIABAaQAAAIgKAGIgGgDIAAABIgNAHIAAgCQgIAAAAgFQAAABgBAAQAAAAAAABQAAAAAAAAQAAABAAAAIgJAEQgFACgFgBQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIgIADIgIAAIADgFQgCgBgDACIgGACQgKAWgVAKIgGADIgMADIgFAFIgHAFIALALIAGAAQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAABQADgBABAEIgCgBQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIgDAAQgBAAABABQAAAAAAABQABAAAAABQABAAABABIAHgCQABgBAAAAQABAAAAAAQABAAAAAAQABgBAAABIAAADIAHAAQAEgBABADIgCgBQAAAAAAABQABAAAAAAQAAABgBAAQAAAAAAAAIAFAAQAAAAABAAQABABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQgBAAAAgBIAAABIgbgBIgTACIAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBgAASBHIACAAIACgBIgJgEgAADA3IAEAEIAAgEIgBgDg");
	this.shape_13.setTransform(18.6,25.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhUBPIAEgGIABgBIACgCIABAAIACgBIAHgEIAJgCIAIgCIADgBQAIgFAHgGIABgDIAEgCIAIgGIAGgIIADgHIAAgBQADgGgCgEIgDgEIgEgBIABgBIgDAAIgCAAIAAgCIgGABIgDgBQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAABAAIgDgBIgCAAIAAgCIgBAAIAAAAIgCAAIgCAAIABAAIgGgBIgFAAIADgBIgDAAIgCgBIgBAAIgDAAIAAgBIgFAAIAAgBIgFAAIACgBIgHABIABgCIgLABIAAgBIgMAAIADAAIgGgBIgEAAIgFgBIACgBIgEAAIgFABIgIgCQAAgBAAAAIABAAIgPgDQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAIgCAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAIgCAAIgLgCIAEgCIADgCIAAAAQAEgDANgBIAMgBIAcgDIAGgBIADgBIAEAAIABAAIASgCIADAAIAEgBIALgCIAIgBIARgCIAEgBIAFgBIAFgBIAHgBIAFABQABAAAAABQAAAAAAAAQABAAAAAAQABABAAAAQAEgEAIgOIAFgGIAHgGIAGgDIABAAIAJgCQAHgDACAEIAAAAIAFgBIAEAAIADAAIAFABIAAAAIgBAAQgBAAAAAAQgBAAAAABQgBAAAAAAQAAABAAAAQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIAAADIAAAEIAAABIACAEIADAAQAJgCAJABIAFABIACACQAIACAIAGIAGAEIAEAEIAAAEIACATIAAABQAAAEgCAEQgBAEgEAEQgBAAgBAAQgBgBAAAAQgBAAAAAAQgBAAAAABIgBAAIgJAIIgBgBQgGABgBgCQgBAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAIgIAFQgFACgFAAQgBABABgBIgEACIgEABIgFAAIgCABIAAgDIgBAAIgEABIgGACIgBABIgDADIgGAGIgCAIIgEADIgDACIgFADIgDABIgDABIgCAEIgBABIgBABIgCABIAAAAIABACIAEAHIAFgBQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAABIADAAIABACIgBgBIAAABIgBABIAAAAIABACIABAAIADgBQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAIgBADIAEgBQAAAAABAAQAAAAAAAAQAAAAABABQAAAAAAABIgCgBQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBABIADAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABAAAAQAAAAAAgBQAAAAAAAAIgBABIgOAAIgEABIAAABIgEAAIACgBIACAAIgCgDIgDAAIgCABIgFAAIgHABIgCAAIgBgBIgDABIABgCIAGgBIACAAQgBgEgDgCIgCgCIgCgBIgBgEIAAgBIgBgCIgBgCIgBAAQgLgBgQAHIgBABQgDAFgFADIgEADIgIACIgPAEIgMACIgCgBIgNACQgEAAgBgBgAAbBOIgBAAIABgBIAIgBIgGACIgCABIAAAAIAAgBg");
	this.shape_14.setTransform(18.3,25.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgGBQIgJgBIgBgBIgKAAIgEgBIAAgEIAAAAIAAgBIAAgBIABAAIAEgDIAIAAIAGgBIADAAQAEgFACgHQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIABgBQACgDACgBQABgEgBgEIgBgEIAAgCIAAgHIgBgDIAAgCIgBgBIgCAAIgBAAIgBgBIgFAAIgCAAQAAAAgBAAQAAgBAAAAQAAAAAAAAQABAAAAAAIgDAAIgBAAIgBgBIgBAAIgBAAIgBAAIgCgBIgFAAIABgBIgFABQAAgBABAAIgCABIgCAAIgFAAIgCAAIgBAAIgEAAIAAgBIgFAAIAAAAIgFABIAAgBIgIABIgBAAIgJAAIAAgBIgGABIgCgBIgEAAIgBAAIgDgBIgEABIgGgBIgBAAIgMgBIAAAAIgCAAIAAgBIgEAAIgGgBIADgDIADgCIAAgBQAFgCALgCIAMgCIAagCIAGgBIgBgBIACAAIABAAIARgFIAAAAIAEgCIAJgCIAAAAIAGgCIAQgGIAFgBIADgDIAEgDIAGgEIAFgBIACgBQAFgEAJgKIAFgFQADgDADgBIAGgDIABgBQAGgCACgCIAFgHIABgBIAEgCIACgBIACgCIAFgBIABgBIABgBIADABIADACIACACIADACIAAABIADACIADgBQAIgCAIABIgBAEIgBACQgBAHAEAIIAEAGIADAFIABADQADALAAAHIAAABIgBAHIgEAJQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAAAAAIgBABIgHAIIgBABIgGADIgCACIgHAEIgJAFIgBAAIgDACIgEABIgFACIgCAAIgCgBIgBAAIgDABIgGACIgDAAIgEABIgFAFIACAIIAEgBIgBACIgGADIgCABIACAAIADABIAAAAIgBACQAAAAAAABQAAAAAAAAQgBAAAAAAQAAgBAAAAIAAABIABABIgCAEIAEAAIACABIACAAIABABIABAAIAAABIgBAAIAAABIAAABIAAAAIAAgBIgBACIAAAAIgCAAIgCAAIAAABIAAAAIgBAAIgLABIgBADIAAAAIAAACIgBgBIAAABIgBACIgBAAIAAABIAAABIAAAAIgBgBIADgEIABgBIgBgCIgBAAIgBAAQgKgBgNACIABABQABAEgCACIgBAEIgGABIgJgBgAAlBMIgBgBIAAAAIgBABIgBgBIACAAIAAAAIAFAAIgDABIgBAAgAAhBMIABgBIAAAAIgBABgAAhBMIAAAAgAAiBLgAAqBKIABABIgCAAIABgBgAAuBJIAAgBIAAABg");
	this.shape_15.setTransform(18,25.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AApBWIgOgJIgQgEIAAgCIgBAAIgCABIACgCIALABIACABQABgEgDgHQgBAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIgDACQAAgDAEgBQgBgDgEgDIgGgEIAAgLQgMAAgcAEQgbADgPAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAQgcAFgJAAIgDgCIACgDIADgDQAIgEAUgEQAVgEAIgDIgEgBIACAAIgCgBIAQgFIgDgBIAEgDIAJgCIgCgBIAGgCIASgKIAFgFIAGgLQAFgFAQgMQAGgFAGgCIAGgDQAHgDAAgEIABgPIAEgFIACgFQAFgIAOgBQAIgBAEACIAEACIAHgCQAIgDAHACIgHAGQgOALAAAOQAAAFAFALQAFALAAAFIAAAIQgEAeghATIgJAEIgHABQgJADgEgBIgEAAIgFACIAGAJIALgFIABABIgIAFIAQgDIABACQAAAAAAAAQgBABAAgBQAAAAAAAAQgBAAAAgBQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAABAAIgIACIAIAAQADgBABADQAAAAAAABQAAAAAAAAQAAAAgBgBQAAAAgBgBQABABAAAAQAAAAgBAAQAAAAAAABQAAAAgBAAQgXgBgGACIAEAMQADABAUAAIABACQAAABAAAAQAAAAAAAAQgBAAAAgBQAAAAgBgBQABABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIgNAAIAHADQAGABABACQAAABAAAAQgBAAAAAAQAAAAAAgBQAAAAgBgBIgBACIgRgEIAKAGIABAEQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAgAATAwIAFAJIAFgBQgBgFgGgFg");
	this.shape_16.setTransform(18.2,25.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhEAaIBEguIBFgMIhOBBg");
	this.shape_17.setTransform(17.4,23.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhRAXIBBglIBigSIhQBBg");
	this.shape_18.setTransform(15.7,23.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Ag2BQIgFAAQgEgBgCgBQABgFADgEIABAAQAGAEAKgLIAEgFQAJACACgLQADgBACgHIAEgEIAAgCIAEgJQABgFgDgEIgFgEIgFgCIABgBIgCgCIgCgBIAAgBIgBgBIAAgBIgBAAIgDADIgCAAIACAAIAAABIgCAAIgCABIAAgBIgCABIgBAAIgBgBIAAABQgEABgDgBIgFAAIACgCIAAAAIgBgBIgBAAIABgCIgDgBIABgBIgBgBIgCAAIABAAIgBAAIgCgBIACgCIgDAAIgDAAIgCAAIAAAAIgFgCIgDgBIABgCIgCAAIgBgBIgFAAIgBABQgEABgEgDIgHABIACAAIgFABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIgBgBQgDgBgEAAIgDAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABIgEgBQgGABgIgBIAAAAIAAAAIgCAAQgBAAABAAIgFgCQgGACgFgEQABgCAGgBIgCAAQAAgCAGgCIAIgCIAAAAQAGgDAIAAQAKgFAPgCIAEAAQAhgMAdgCIAPgBIAPgBQAHgBAGADQAAAAABAAQAAAAAAABQAAAAABAAQAAAAABAAQAEgDAFgKIADgFIAFgGQAFgGAJgCIAHgBQAHgBAFADIAFACIAIAAIACAAQAFAAADABIAAAAIgCAAQgEABABAFIAAAAIAAAJIADAFIANAEQALACAGACIACABQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAABIACAAQAKACAGADIAEAEIABACIAGATQADAIgEAGIgCgBIAAABIgFAFIAAgBIgCAAIABABIgEAEIgDADIgDADIgEABIACgBIAAABIgEACIgBACQgDALgUABIgEAGIgCADIgFAFIgDAFIAAAAQgCADgCACIABAAIADAGIABABIgBABIgBAAQAAABAAAAQAAAAABABQAAAAABABQAAAAABABIAHAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABIABADIADABQAAgBABAAQAAAAAAABQABAAAAAAQAAAAABABIAAAAIgDgBIAAABIABAAQABgBgBABIgBAAIAAAAIgBAAQgBgBAAAAQgBAAAAAAQAAAAgBABQAAAAAAAAQgBADgEABQgFABgHgCIgMgBIgEACIAAAAIgDACIAAgCQADAAADgDIgGgFIAAAAQgBABgGACQgCADgGABIgBAAIgEABIAAgCIAAAAIAGgEQgDgIgHgDIgBgBQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAABAAAAIAAAAIAAgDQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQgEACgIAAQgLgCgLADIAAABQgEAMgLABQgNgCgKACIgBABIgGAFIgDACIgDACIgEABIgEgBgABaA8IABgBIABABIgCAAg");
	this.shape_19.setTransform(18.8,24.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AABBOIgCgCQgEgBgBgCQgBgFAAgDIABgBQAEAOgDgQIgBgGQAFAKgHgRQgBADgDgIQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIgBgCQgEAAgEgCIgGgGIgFgDIgDgDIAAgCIgBgCIgCgCIAAgCIgBAAIgBgBIgBAAIAAAFIgBACIABACIgBAAIgBACIgCABIAAABIgCABIAAADIgBAAIgBAAIgBACQgDACgDgBIAAAAQgDACgCAAQgBAAAAgBQAAAAAAAAQAAAAAAgBQAAgBAAAAIACAAIAAgBIgBAAIABgDIgBAAIgEgBQAAAAABgBQAAAAAAAAQAAgBAAAAQABAAAAAAIABAAIgBgBIgBgBIABgBIAAgBIABgCIACgCIgBAAIgEAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAgBgBAAIgBABIAAAAIAAAAQgFgBACgDIgCgCIACgCQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAABAAIgBgCQgDgBgEABIAAACIgCABQgDADgEgFIgGADIgCACIgEACQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgBgBQgCgBgEACIgEABIAAAAIgCACIgFAAQgFAEgHABIgEAAIAAAAIgCABIgCAAQgDAAgCgCQgGAEgEgGQAAgEAFABIgCgBQgCgDAFgCIAHgEIABAAQACgEAJgCQAGgFAQgEIAEgBQAbgTAbgFIAQgDIAPgEIAMgDIADAAQAEgEAFgHIADgFIAEgEQAFgFAJgCIAGgBIANACIAFgDIAHgDIABgBIAJgBIAAgBIABgBQACAAAFADIABAAIAFAGIADAFQAFADAEAEQALAFABAFIABABIAMAGIADADIAAABIAOAPQAEAHACAFIACABIABABIACAGIABAAQAAABABAAQAAAAAAAAQABAAAAAAQABAAAAAAIADACIACAEIACAFIABAAIABADIACADIAEABIABADIgCAAIAAABQACAJgcgGIABAGIACAEIABAFIACAFIgBAAQACADgCACIgCAAQAAABAAAAQAAAAgBAAQAAAAgBABQgBAAAAAAIgCgCIgCgBQgBAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAABQgBAAAAAAQAAAAAAAAIABABIAAABIABACIAEADIAFADIAEABIABAEQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAIAAABIgEgCIgCAAIAAgBQgBAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAIgCgCIAAABIgBAAQAAgBgBAAQAAAAAAAAQAAAAAAABQAAAAAAABQABAEgCADQgDACgIgDQgFgBgGgDIgBADIgBACQAAABAAAAQgBABAAAAQAAABAAAAQgBAAAAABIgCgBIgCgFIgHgFQABADgEADQADAEgCADIgBABQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgCgCIAAAAIgBgGQgEgGgGgEIgBgBQAAAAgBAAQAAAAAAAAQAAAAAAAAQABABAAABIAAABIACACIABABQABAGgKgDQgLgFgIgCIAAAAQAEATgNgFQgOgIgGgBIgBABIgBAHIgBADIgCACIgEABIgEgBg");
	this.shape_20.setTransform(20.5,24.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("ABYBRQgNgKgEgGQANAZgPgKIgRgTQAAAFACAEQACAEgCADQgDADgEgEQgMgKAAgFQACAagVgfQABASgRgWQgDAHgIgKQgHADgHgEQgpANAEgcIgHAAQAGAIgEAHQgFALABACQgHAIgCgBQgHAGgCgHQABAAABAAQAAAAABAAQABAAAAgBQAAAAAAAAQAAgBABgBQAAgBAAAAQgBgBAAAAQgBAAgBAAIgCgBIAAgDQABABAAAAQABAAAAAAQAAAAABAAQAAgBAAAAQAAgBAAgBQAAgBAAAAQAAgBAAAAQABAAAAAAQAFgDAAgDQgCgCgDACQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAAAABQgBAAABAAQAAABAAAAQgFgCAEgEQAAgIAIABIAAgDQgEgCgIAHQgBAEgFgHQgQARgCgHQgBgFgFAFQgIAFgHACQgEAJgNAAQgIAGgEgGQgGAHgDgJQgBgFAEABQgJgDAHgEQAGgDABgCQAAgHAKgBQACgMAVgFQATgbAcgIQAjgJASgUQALgMASgBIAJABIANgNQANgPASAFQARAFACAOQANAKgHAJQgEgHgEABIgEACIASAMQBQAuAXASQAHAGgigOIAYAVQAGAEgGABQgHABgUgLQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAABABQAbAYgSgDQgGAAgMgJQAAgBAAAAQgBAAAAAAQAAAAABABQAAAAAAABQAFAHgBAEQgCAFgTgNQAJAZgegWQACAFgCADQATASgRgHQgJgFgKgLQAAgBgBgBQAAAAAAABQAAAAAAABQABABAAABQANAUgFAAIgFgCg");
	this.shape_21.setTransform(23.2,23.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16},{t:this.shape_17}]},2).to({state:[{t:this.shape_16},{t:this.shape_18}]},1).to({state:[{t:this.shape_16}]},1).to({state:[]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},2).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,0,29.9,33.5);


(lib.bakarrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#479CB8").s().p("AguAAIBchcIAAC5g");
	this.shape.setTransform(4.7,9.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9.4,18.8);


(lib.Symbol48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgNAAQAAgEANAAQAOgBAAAFQAAAEgOABIgCAAQgKAAgBgFg");

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3F3F3").s().p("AgHAAQABgCAGAAQAIAAAAACQAAAEgIAAQgGAAgBgEg");
	this.shape.setTransform(0.6,0.2);

	this.instance = new lib.Symbol49("synched",0);
	this.instance.setTransform(0,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNAAQAAgEANAAQAOgBAAAFQAAAEgOABIgCAAQgKAAgBgFg");

	this.shape.mask = this.instance.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-0.6,2.8,1.2);


(lib.messages = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// message
	this.txtMessages = new cjs.Text("", "33px 'franklin-gothic-urw'", "#FFFFFF");
	this.txtMessages.name = "txtMessages";
	this.txtMessages.textAlign = "center";
	this.txtMessages.lineHeight = 33;
	this.txtMessages.lineWidth = 454;
	this.txtMessages.setTransform(226,51.3,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.txtMessages).wait(1));

	// close
	this.butMessagesClose = new lib.but_close1();
	this.butMessagesClose.setTransform(129.7,154.2);

	this.timeline.addTween(cjs.Tween.get(this.butMessagesClose).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4C4C4C").s().p("EgjOAP3IAA/tMBGcAAAIAAftg");
	this.shape.setTransform(225.5,0,1,1,0,0,0,0,-101.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,451,203.1);


(lib.mountain_sym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mountains("synched",0);
	this.instance.setTransform(960,69.4);

	this.instance_1 = new lib.mountains("synched",0);
	this.instance_1.setTransform(0,69.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1919.9,69.4);


(lib.but_menuhighlight = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.menu_white("synched",0);
	this.instance.setTransform(32.4,28.5,1,1,0,0,0,32.4,28.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.801},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64.8,57);


(lib.question = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// question txt
	this.txtQuestion = new cjs.Text("", "65px 'franklin-gothic-urw'", "#4C4C4C");
	this.txtQuestion.name = "txtQuestion";
	this.txtQuestion.lineHeight = 50;
	this.txtQuestion.lineWidth = 797;
	this.txtQuestion.setTransform(2,-13);

	this.timeline.addTween(cjs.Tween.get(this.txtQuestion).wait(1));

	// enter but
	this.butEnter = new lib.but_enter();
	this.butEnter.setTransform(99,133.6);

	this.timeline.addTween(cjs.Tween.get(this.butEnter).wait(1));

	// txt input
	this.txtInput = new cjs.Text("", "32px 'franklin-gothic-urw'", "#990000");
	this.txtInput.name = "txtInput";
	this.txtInput.lineHeight = 33;
	this.txtInput.lineWidth = 69;
	this.txtInput.setTransform(15.3,132.8);

	this.timeline.addTween(cjs.Tween.get(this.txtInput).wait(1));

	// input bak
	this.mcInputBak = new lib.inputbak();
	this.mcInputBak.setTransform(48.7,149.6,1,1,0,0,0,43,25);

	this.timeline.addTween(cjs.Tween.get(this.mcInputBak).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-15,801.2,396.3);


(lib.data = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mcYourAvg = new lib.youravg();
	this.mcYourAvg.setTransform(67.4,210.9,1,1,0,0,0,67.4,33.4);

	this.mcJapanAvg = new lib.japanavg();
	this.mcJapanAvg.setTransform(70.4,123.4,1,1,0,0,0,70.4,33);

	this.mcWorldAvg = new lib.worldavg();
	this.mcWorldAvg.setTransform(71.4,285.4,1,1,0,0,0,71.4,33);

	this.mcUSAvg = new lib.usavg();
	this.mcUSAvg.setTransform(70.4,43.4,1,1,0,0,0,70.4,33);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("EgASApyMAAAhTkIAlAAMAAABTkg");
	this.shape.setTransform(11.4,267.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.mcUSAvg},{t:this.mcWorldAvg},{t:this.mcJapanAvg},{t:this.mcYourAvg}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,142.9,535);


(lib.land_sym = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ground_1("synched",0);
	this.instance.setTransform(960,55.1);

	this.instance_1 = new lib.ground_1("synched",0);
	this.instance_1.setTransform(0,55.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1920,65.1);


(lib.soda_can = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6E6E6").s().p("AhODMQhSgWgZghQgPgIgPgPIiJikQhKiBEDgeQCogSBcAlQAtAOBKA/QA/A7BGBMQBKB+iUAoQgLAEgIAAgABPAmQiaAHAIA4QAAA+CVgHQCUgHAAg4QgHg4hzAAIgdABgAhDiNQjiAHAIBDQAABCDdgHQDZgIAAhCQgHg8isAAIgpABg");
	this.shape.setTransform(121.3,21.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("ADDBJQkiAAjegWQiUh7GTAAQGnAAgDAwIgPBHIh2Aag");
	this.shape_1.setTransform(109.3,34.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AmrAeIBnhAQHIASgDgOQA3gLBDAHQCBALAwAfQj/AektAAg");
	this.shape_2.setTransform(141.8,38.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AtGAUQDth4JZAAQJaAADtB4QkWBRoxAAQowAAkWhRg");
	this.shape_3.setTransform(128.9,31.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B3B3B3").s().p("ArBB7QkkgzAAhJQAAhJEkgwQEkg0GdAAQGdAAEkA0QElAwAABJQAABJklAzQkkA0mdAAQmdAAkkg0g");
	this.shape_4.setTransform(128.9,24.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E6E6E6").s().p("ArmCXQk2g/AAhYQAAhbE2g+QEzg/GzAAQG3AAE0A/QEyA+AABbQAABYkyA/Qk3BCm0AAQmvAAk3hCg");
	this.shape_5.setTransform(128.9,25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("ArfB9Qj7g0g7hGQg0hTA7hCQA0g/P+AaQO2gaA0A/QA/BNg8BIQgzBDkOA3QkvBDl9AAQnQAAkzhDg");
	this.shape_6.setTransform(128.9,36.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.098)").s().p("AmVgXIAahYQFXCRGkBKIAWAEQnbgslQhbg");
	this.shape_7.setTransform(42.8,88.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.098)").s().p("AFq2YIgHhwQmKBdp1gXIAXAAQJeggF3hzQhylcmkAIIAAhDIEIhRIFJgHQgEAsBOByICBCyQA/BgAIDPMgA/AyvQgHB6gXAlQgdA4iRBqIgoAag");
	this.shape_8.setTransform(193.6,249.8);

	this.instance = new lib.cokepastinside("synched",0);
	this.instance.setTransform(130.4,260.9,7.393,7.393);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C26E51").s().p("At0gGQh6hNgdh6MAgXAAAQgaB6h9BNQluDUoCABQoLgBlujUg");
	this.shape_9.setTransform(132.8,472.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.instance},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.3,1.5,260.2,491.5);


(lib.soda_bubbles = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_179 = function() {
		/* stop();
		*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(179).call(this.frame_179).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApJLwQjygqAAg+QAAgkAPjEQAUj/AajZQBQqmBlgRQD0grFVAAQFWAADzArQBmARBQKmQAZDYAVEAQAODEAAAkQAAA+jyAqQjyArlXAAQlWAAjzgrg");
	mask.setTransform(89.5,-69.6);

	// bubble
	this.instance = new lib.cokebubble();
	this.instance.setTransform(134.5,34);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({x:129.8,y:-107.6},20).to({_off:true},1).wait(74).to({_off:false,x:134.5,y:34},0).to({x:129.8,y:-67.6},20).to({_off:true},1).wait(35));

	// bubble2
	this.instance_1 = new lib.cokebubble();
	this.instance_1.setTransform(110.1,18,0.5,0.5);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({_off:false},0).to({y:-75.2},19).to({_off:true},1).wait(65).to({_off:false,y:18},0).to({y:-105.2},20).to({_off:true},1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.slices = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{stop:0,play:1});

	// timeline functions:
	this.frame_0 = function() {
		/* 
		// bread squish
		var mcBreadSquish:MovieClip = this.createEmptyMovieClip("mcBreadSquish", this.getNextHighestDepth());
		var auBreadSquish:Sound = new Sound(mcBreadSquish);
		auBreadSquish.attachSound("bread_squish");
		auBreadSquish.setVolume(30);
		
		// bread arrow
		var mcBreadArrow:MovieClip = this.createEmptyMovieClip("mcBreadArrow", this.getNextHighestDepth());
		var auBreadArrow:Sound = new Sound(mcBreadArrow);
		auBreadArrow.attachSound("bread_arrow");
		auBreadArrow.setVolume(30);
		
		
		
		stop();
		*/
		this.stop();
	}
	this.frame_1 = function() {
		/* play();
		*/
		this.play();
	}
	this.frame_39 = function() {
		/* 
		if (_parent.curMusicState == "on") {
			auBreadSquish.start();
		}*/
	}
	this.frame_77 = function() {
		/* 
		if (_parent.curMusicState == "on") {
			auBreadSquish.start();
		}*/
	}
	this.frame_109 = function() {
		/* 
		if (_parent.curMusicState == "on") {
			auBreadSquish.start();
		}*/
	}
	this.frame_145 = function() {
		/* 
		if (_parent.curMusicState == "on") {
			auBreadSquish.start();
		}*/
	}
	this.frame_164 = function() {
		/* 
		if (_parent.curMusicState == "on") {
			auBreadArrow.start();
		}*/
	}
	this.frame_195 = function() {
		/* stop();
		*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(38).call(this.frame_39).wait(38).call(this.frame_77).wait(32).call(this.frame_109).wait(36).call(this.frame_145).wait(19).call(this.frame_164).wait(31).call(this.frame_195).wait(1));

	// slices_olive
	this.instance = new lib.slices_olive();
	this.instance.setTransform(322.2,-190.3,1,1,0,0,0,32,66.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(169).to({_off:false},0).to({guide:{path:[322.2,-190.1,298.8,-89.9,275.4,10.2]}},6,cjs.Ease.get(-1)).wait(21));

	// slicees_olive_shadow
	this.instance_1 = new lib.slicees_olive_shadow();
	this.instance_1.setTransform(247.6,72.5,0.485,0.682);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(169).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},6,cjs.Ease.get(-1)).wait(21));

	// slices_slice5
	this.instance_2 = new lib.slices_slice1();
	this.instance_2.setTransform(196,-439,1,1,0,0,180,148.1,48.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(129).to({_off:false},0).to({y:106},20,cjs.Ease.get(-1)).to({scaleY:0.95,y:122.4},5).to({scaleY:1,y:106},5).wait(37));

	// slices_tomatoe
	this.instance_3 = new lib.slices_tomatoe();
	this.instance_3.setTransform(210,-417.1,1,1,-3,0,0,77,20.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(124).to({_off:false},0).to({y:127.9},25,cjs.Ease.get(-1)).to({scaleY:0.95,rotation:0,skewX:-3.2,skewY:-2.9,y:143.3},5).to({scaleY:1,rotation:-3,skewX:0,skewY:0,y:127.9},5).wait(37));

	// slices_tomatoe
	this.instance_4 = new lib.slices_tomatoe();
	this.instance_4.setTransform(250.2,-408.1,1,1,0,6,-174,77,20.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(124).to({_off:false},0).to({y:136.9},25,cjs.Ease.get(-1)).to({scaleX:1,scaleY:0.95,skewX:6.3,skewY:-174.3,y:151.8},5).to({scaleX:1,scaleY:1,skewX:6,skewY:-174,y:136.9},5).wait(37));

	// slices_ham
	this.instance_5 = new lib.slices_ham();
	this.instance_5.setTransform(200.6,-413,1,1,0,0,180,124.5,29.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(119).to({_off:false},0).to({y:132},30,cjs.Ease.get(-1)).to({regY:29.4,scaleY:0.95,y:147.1},5).to({regY:29.5,scaleY:1,y:132},5).wait(37));

	// slices_lettuce
	this.instance_6 = new lib.slices_lettuce();
	this.instance_6.setTransform(190.3,-403.3,1,1,0,0,0,148.6,36.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(114).to({_off:false},0).to({y:141.7},35,cjs.Ease.get(-1)).to({scaleY:0.95,y:156.4},5).to({scaleY:1,y:141.7},5).wait(37));

	// slices_cheese
	this.instance_7 = new lib.slices_cheese();
	this.instance_7.setTransform(199.9,-397.1,1,1,0,0,0,132.7,20.9);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(109).to({_off:false},0).to({y:147.9},40,cjs.Ease.get(-1)).to({scaleY:0.95,y:162.3},5).to({scaleY:1,y:147.9},5).wait(37));

	// Layer 51
	this.instance_8 = new lib.mustardgoop1();
	this.instance_8.setTransform(219.8,165,1,0.1,0,0,180,10.8,0);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(149).to({_off:false},0).to({scaleY:0.4,y:176},5).to({scaleY:0.7,y:165.4},5).to({scaleY:1,y:165},5).wait(32));

	// slices_slice4
	this.instance_9 = new lib.slices_slice1();
	this.instance_9.setTransform(196,-379,1,1,0,0,0,148.1,48.7);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(94).to({_off:false},0).to({y:166},20,cjs.Ease.get(-1)).to({scaleY:0.9,y:191.8},5).to({scaleY:1,y:166},5).wait(25).to({scaleY:0.95,y:179.4},5).to({scaleY:1,y:166},5).wait(37));

	// slices_tomatoe
	this.instance_10 = new lib.slices_tomatoe();
	this.instance_10.setTransform(150.2,-351,1,1,0,0,180,77,20.8);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(89).to({_off:false},0).to({y:194},25,cjs.Ease.get(-1)).to({regY:20.7,scaleY:0.9,y:217},5).to({regY:20.8,scaleY:1,y:194},5).wait(25).to({scaleY:0.95,y:206},5).to({scaleY:1,y:194},5).wait(37));

	// slices_lettuce
	this.instance_11 = new lib.slices_lettuce();
	this.instance_11.setTransform(190.2,-357.4,1,1,180,0,0,148.6,36.1);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(84).to({_off:false},0).to({y:187.6},30,cjs.Ease.get(-1)).to({scaleY:0.9,y:211.3},5).to({scaleY:1,y:187.6},5).wait(25).to({scaleY:0.95,y:200},5).to({scaleY:1,y:187.6},5).wait(37));

	// slices_ham
	this.instance_12 = new lib.slices_ham();
	this.instance_12.setTransform(180.6,-343,1,1,0,0,180,124.5,29.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(79).to({_off:false},0).to({y:202},35,cjs.Ease.get(-1)).to({scaleY:0.9,y:224.2},5).to({scaleY:1,y:202},5).wait(25).to({regY:29.4,scaleY:0.95,y:213.6},5).to({regY:29.5,scaleY:1,y:202},5).wait(37));

	// slices_cheese
	this.instance_13 = new lib.slices_cheese();
	this.instance_13.setTransform(170.5,-325.1,1,1,0,0,180,132.7,20.9);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(74).to({_off:false},0).to({y:219.9},40,cjs.Ease.get(-1)).to({scaleY:0.9,y:240.4},5).to({scaleY:1,y:219.9},5).wait(25).to({scaleY:0.95,y:230.7},5).to({scaleY:1,y:219.9},5).wait(37));

	// Layer 49
	this.instance_14 = new lib.mustardgoop2();
	this.instance_14.setTransform(109.8,236.9,1,0.1,0,0,0,34.4,0);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(114).to({_off:false},0).to({scaleY:0.4,y:254.9},5).to({scaleY:0.7,y:236.4},5).to({scaleY:1,y:235.9},5).wait(20).to({y:245.9},5).to({y:235.9},5).wait(37));

	// slices_slice3
	this.instance_15 = new lib.slices_slice1();
	this.instance_15.setTransform(195.9,-299.1,1,1,0,6,-174,148.1,48.6);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(59).to({_off:false},0).to({y:240.9},20,cjs.Ease.get(-1)).to({scaleX:1,scaleY:0.9,skewX:6.7,skewY:-174.6,y:259.3},5).to({scaleX:1,scaleY:1,skewX:6,skewY:-174,y:240.9},5).wait(25).to({scaleX:1,scaleY:0.9,skewX:6.7,skewY:-174.6,y:259.3},5).to({scaleX:1,scaleY:1,skewX:6,skewY:-174,y:240.9},5).wait(25).to({scaleX:1,scaleY:0.95,skewX:6.3,skewY:-174.3,y:250.6},5).to({scaleX:1,scaleY:1,skewX:6,skewY:-174,y:240.9},5).wait(37));

	// slices_tomatoe
	this.instance_16 = new lib.slices_tomatoe();
	this.instance_16.setTransform(250.2,-269.1,1,1,0,6,-174,77,20.8);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(54).to({_off:false},0).to({y:270.9},25,cjs.Ease.get(-1)).to({regY:20.9,scaleX:1,scaleY:0.9,skewX:6.7,skewY:-174.6,x:250.1,y:286.3},5).to({regY:20.8,scaleX:1,scaleY:1,skewX:6,skewY:-174,x:250.2,y:270.9},5).wait(25).to({regY:20.9,scaleX:1,scaleY:0.9,skewX:6.7,skewY:-174.6,x:250.1,y:286.3},5).to({regY:20.8,scaleX:1,scaleY:1,skewX:6,skewY:-174,x:250.2,y:270.9},5).wait(25).to({scaleX:1,scaleY:0.95,skewX:6.3,skewY:-174.3,y:279.1},5).to({scaleX:1,scaleY:1,skewX:6,skewY:-174,y:270.9},5).wait(37));

	// slices_tomatoe
	this.instance_17 = new lib.slices_tomatoe();
	this.instance_17.setTransform(130.2,-269,1,1,0,0,180,77,20.8);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(54).to({_off:false},0).to({y:271},25,cjs.Ease.get(-1)).to({regY:20.7,scaleY:0.9,y:286.3},5).to({regY:20.8,scaleY:1,y:271},5).wait(25).to({regY:20.7,scaleY:0.9,y:286.3},5).to({regY:20.8,scaleY:1,y:271},5).wait(25).to({scaleY:0.95,y:279.2},5).to({scaleY:1,y:271},5).wait(37));

	// slices_lettuce
	this.instance_18 = new lib.slices_lettuce();
	this.instance_18.setTransform(190.2,-258.3,1,1,0,0,180,148.6,36.1);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(49).to({_off:false},0).to({y:281.7},30,cjs.Ease.get(-1)).to({scaleY:0.9,y:296},5).to({scaleY:1,y:281.7},5).wait(25).to({scaleY:0.9,y:296},5).to({scaleY:1,y:281.7},5).wait(25).to({scaleY:0.95,y:289.4},5).to({scaleY:1,y:281.7},5).wait(37));

	// slices_cheese
	this.instance_19 = new lib.slices_cheese();
	this.instance_19.setTransform(180.5,-255.1,1,1,0,0,180,132.7,20.9);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(44).to({_off:false},0).to({y:284.9},35,cjs.Ease.get(-1)).to({scaleY:0.9,y:298.9},5).to({scaleY:1,y:284.9},5).wait(25).to({scaleY:0.9,y:298.9},5).to({scaleY:1,y:284.9},5).wait(25).to({scaleY:0.95,y:292.4},5).to({scaleY:1,y:284.9},5).wait(37));

	// slices_ham
	this.instance_20 = new lib.slices_ham();
	this.instance_20.setTransform(210.6,-250,1,1,0,0,180,124.5,29.5);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(39).to({_off:false},0).to({y:290},40,cjs.Ease.get(-1)).to({scaleY:0.9,y:303.4},5).to({scaleY:1,y:290},5).wait(25).to({scaleY:0.9,y:303.4},5).to({scaleY:1,y:290},5).wait(25).to({regY:29.4,scaleY:0.95,y:297.2},5).to({regY:29.5,scaleY:1,y:290},5).wait(37));

	// slices_slice2
	this.instance_21 = new lib.slices_slice1();
	this.instance_21.setTransform(184.8,-222.9,1,1,0,0,-3,148.1,48.7);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(24).to({_off:false},0).to({scaleY:0.95,skewY:-2.8,y:322},20,cjs.Ease.get(-1)).to({scaleY:1,skewY:-3,y:317.1},5,cjs.Ease.get(0.5)).wait(30).to({scaleY:0.9,skewY:-2.7,y:327.9},5).to({scaleY:1,skewY:-3,y:317.1},5).wait(25).to({scaleY:0.9,skewY:-2.7,y:327.9},5).to({scaleY:1,skewY:-3,y:317.1},5).wait(25).to({scaleY:0.95,skewY:-2.8,y:323},5).to({scaleY:1,skewY:-3,y:317.1},5).wait(37));

	// slices_tomatoe
	this.instance_22 = new lib.slices_tomatoe();
	this.instance_22.setTransform(130.3,-195.1,1,1,-6,0,0,77,20.8);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(19).to({_off:false},0).to({scaleX:1,scaleY:0.95,rotation:0,skewX:-6.3,skewY:-5.7,y:348.5},25,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-6,skewX:0,skewY:0,y:344.9},5,cjs.Ease.get(0.5)).wait(30).to({regY:20.9,scaleX:1,scaleY:0.9,rotation:0,skewX:-6.7,skewY:-5.4,y:352.9},5).to({regY:20.8,scaleX:1,scaleY:1,rotation:-6,skewX:0,skewY:0,y:344.9},5).wait(25).to({regY:20.9,scaleX:1,scaleY:0.9,rotation:0,skewX:-6.7,skewY:-5.4,y:352.9},5).to({regY:20.8,scaleX:1,scaleY:1,rotation:-6,skewX:0,skewY:0,y:344.9},5).wait(25).to({scaleX:1,scaleY:0.95,rotation:0,skewX:-6.3,skewY:-5.7,y:349.4},5).to({scaleX:1,scaleY:1,rotation:-6,skewX:0,skewY:0,y:344.9},5).wait(37));

	// slices_tomatoe
	this.instance_23 = new lib.slices_tomatoe();
	this.instance_23.setTransform(250.3,-195,1,1,0,0,0,77,20.8);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(19).to({_off:false},0).to({scaleY:0.95,y:348.5},25,cjs.Ease.get(-1)).to({scaleY:1,y:345},5,cjs.Ease.get(0.5)).wait(30).to({regY:20.7,scaleY:0.9,y:352.9},5).to({regY:20.8,scaleY:1,y:345},5).wait(25).to({regY:20.7,scaleY:0.9,y:352.9},5).to({regY:20.8,scaleY:1,y:345},5).wait(25).to({scaleY:0.95,y:349.5},5).to({scaleY:1,y:345},5).wait(37));

	// slices_lettuce
	this.instance_24 = new lib.slices_lettuce();
	this.instance_24.setTransform(190.3,-184.3,1,1,0,0,0,148.6,36.1);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(14).to({_off:false},0).to({scaleY:0.95,y:358.7},30,cjs.Ease.get(-1)).to({scaleY:1,y:355.7},5,cjs.Ease.get(0.5)).wait(30).to({scaleY:0.9,y:362.6},5).to({scaleY:1,y:355.7},5).wait(25).to({scaleY:0.9,y:362.6},5).to({scaleY:1,y:355.7},5).wait(25).to({scaleY:0.95,y:359.7},5).to({scaleY:1,y:355.7},5).wait(37));

	// slices_ham
	this.instance_25 = new lib.slices_ham();
	this.instance_25.setTransform(199.9,-186,1,1,0,0,0,124.5,29.5);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(9).to({_off:false},0).to({regY:29.4,scaleY:0.95,y:357},35,cjs.Ease.get(-1)).to({regY:29.5,scaleY:1,y:354},5,cjs.Ease.get(0.5)).wait(30).to({scaleY:0.9,y:361},5).to({scaleY:1,y:354},5).wait(25).to({scaleY:0.9,y:361},5).to({scaleY:1,y:354},5).wait(25).to({regY:29.4,scaleY:0.95,y:358},5).to({regY:29.5,scaleY:1,y:354},5).wait(37));

	// slices_cheese
	this.instance_26 = new lib.slices_cheese();
	this.instance_26.setTransform(199.9,-170.1,1,1,0,0,0,132.7,20.9);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(4).to({_off:false},0).to({scaleY:0.95,y:372.2},40,cjs.Ease.get(-1)).to({scaleY:1,y:369.9},5,cjs.Ease.get(0.5)).wait(30).to({scaleY:0.9,y:375.4},5).to({scaleY:1,y:369.9},5).wait(25).to({scaleY:0.9,y:375.4},5).to({scaleY:1,y:369.9},5).wait(25).to({scaleY:0.95,y:373.2},5).to({scaleY:1,y:369.9},5).wait(37));

	// 2
	this.instance_27 = new lib.mustardgoop2();
	this.instance_27.setTransform(202.2,388.1,1,0.1,0,0,0,34.4,0);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(44).to({_off:false},0).to({scaleY:1},15).wait(20).to({y:391.1},5).to({y:388.1},5).wait(25).to({y:391.1},5).to({y:388.1},5).wait(25).to({y:391.1},5).to({y:388.1},5).wait(37));

	// 1
	this.instance_28 = new lib.mustardgoop1();
	this.instance_28.setTransform(103.7,389,1,0.1,0,0,0,10.8,0);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(44).to({_off:false},0).to({scaleY:1},15).wait(20).to({y:392},5).to({y:389},5).wait(25).to({y:392},5).to({y:389},5).wait(25).to({y:392},5).to({y:389},5).wait(37));

	// slices_slice1
	this.instance_29 = new lib.slices_slice1();
	this.instance_29.setTransform(195.9,-152.1,1,1,0,6,-174,148.1,48.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).to({y:387.9},44,cjs.Ease.get(-1)).wait(35).to({scaleX:1,scaleY:0.9,skewX:6.7,skewY:-174.6,y:391.6},5).to({scaleX:1,scaleY:1,skewX:6,skewY:-174,y:387.9},5).wait(25).to({scaleX:1,scaleY:0.9,skewX:6.7,skewY:-174.6,y:391.6},5).to({scaleX:1,scaleY:1,skewX:6,skewY:-174,y:387.9},5).wait(25).to({scaleX:1,scaleY:0.95,skewX:6.3,skewY:-174.3,y:390.3},5).to({scaleX:1,scaleY:1,skewX:6,skewY:-174,y:387.9},5).wait(37));

	// slices_shadow
	this.instance_30 = new lib.slices_shadow();
	this.instance_30.setTransform(51.5,410,0.4,0.4,0,0,0,0,18);
	this.instance_30.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).to({regY:18.1,scaleX:0.9,scaleY:1,alpha:1},44,cjs.Ease.get(-1)).wait(20).to({scaleX:0.95},15).wait(20).to({scaleX:1},15).wait(20).to({scaleX:1.05},15).wait(47));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(43.6,-215.9,304.7,633.2);


(lib.showers_duck_bob = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_89 = function() {
		/* gotoAndPlay(2);
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(89).call(this.frame_89).wait(1));

	// Layer 1
	this.instance = new lib.duck();
	this.instance.setTransform(54,54.6,1,1,0,0,0,59.5,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:44.6},9,cjs.Ease.get(0.5)).to({y:65.6},15,cjs.Ease.get(-0.5)).to({y:39.6},10,cjs.Ease.get(0.5)).to({y:59.6},10,cjs.Ease.get(-0.5)).to({y:69.6},10,cjs.Ease.get(0.5)).to({y:49.6},15,cjs.Ease.get(-0.5)).to({y:54.6},10,cjs.Ease.get(0.5)).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,5,107.4,100.8);


(lib.shower_bubbles_move = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_174 = function() {
		/* gotoAndPlay(1);
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(174).call(this.frame_174).wait(11));

	// Layer 4
	this.instance = new lib.shower_bubbles();
	this.instance.setTransform(257.6,552.5,1,1,0,0,0,52.8,149.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(99).to({_off:false},0).to({y:-187.5},55).to({_off:true},1).wait(30));

	// Layer 3
	this.instance_1 = new lib.shower_bubbles();
	this.instance_1.setTransform(635.6,552.4,1,1,0,180,0,52.8,149.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(89).to({_off:false},0).to({x:625.6,y:-189.5},55).to({_off:true},1).wait(40));

	// Layer 2
	this.instance_2 = new lib.shower_bubbles();
	this.instance_2.setTransform(-94.4,552.4,1,1,0,180,0,52.8,149.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({_off:false},0).to({y:-189.5},55).to({_off:true},1).wait(70));

	// Layer 1
	this.instance_3 = new lib.shower_bubbles();
	this.instance_3.setTransform(257.6,552.5,1,1,0,0,0,52.8,149.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:-187.5},54).to({_off:true},1).wait(130));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(204.8,403,105.6,299);


(lib.potato_baconbits_splat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* 
		// potato chives & bacon bits
		var mcPotatoBB:MovieClip = this.createEmptyMovieClip("mcPotatoBB", this.getNextHighestDepth());
		var auPotatoBB:Sound = new Sound(mcPotatoBB);
		auPotatoBB.attachSound("potato_chives");
		auPotatoBB.setVolume(50);
		
		if (_parent._parent.curMusicState == "on") {
			auPotatoBB.start();
		}*/
	}
	this.frame_39 = function() {
		/* stop();
		*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(39).call(this.frame_39).wait(1));

	// Layer 2
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(-203.3,-206.9);

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.setTransform(-13.3,93.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},24).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,rotation:1080,x:-13.3,y:93.1},24,cjs.Ease.get(-0.5)).wait(16));

	// Layer 3
	this.instance_2 = new lib.Tween3("synched",0);
	this.instance_2.setTransform(-89.2,-219.8);

	this.instance_3 = new lib.Tween4("synched",0);
	this.instance_3.setTransform(60.8,-19.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},9).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,x:60.8,y:-19.8},9,cjs.Ease.get(-0.5)).wait(31));

	// Layer 4
	this.instance_4 = new lib.Tween5("synched",0);
	this.instance_4.setTransform(-109.4,-204.6);

	this.instance_5 = new lib.Tween6("synched",0);
	this.instance_5.setTransform(20.6,125.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},29).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true,rotation:-360,x:20.6,y:125.4},29,cjs.Ease.get(-0.5)).wait(11));

	// Layer 5
	this.instance_6 = new lib.Tween7("synched",0);
	this.instance_6.setTransform(-155.2,-215.1);

	this.instance_7 = new lib.Tween10("synched",0);
	this.instance_7.setTransform(44.8,4.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},19).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true,x:44.8,y:4.9},19,cjs.Ease.get(-0.5)).wait(21));

	// Layer 6
	this.instance_8 = new lib.Tween11("synched",0);
	this.instance_8.setTransform(-157.1,-273.4);

	this.instance_9 = new lib.Tween12("synched",0);
	this.instance_9.setTransform(2.9,27.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},14).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true,rotation:-720,x:2.9,y:27.6},14,cjs.Ease.get(-0.5)).wait(26));

	// Layer 7
	this.instance_10 = new lib.Tween13("synched",0);
	this.instance_10.setTransform(-89.4,-254.6);

	this.instance_11 = new lib.Tween14("synched",0);
	this.instance_11.setTransform(30.6,35.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10}]}).to({state:[{t:this.instance_11}]},19).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true,x:30.6,y:35.4},19,cjs.Ease.get(-0.5)).wait(21));

	// Layer 8
	this.instance_12 = new lib.Tween15("synched",0);
	this.instance_12.setTransform(-191.6,-245.5);

	this.instance_13 = new lib.Tween16("synched",0);
	this.instance_13.setTransform(18.4,14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12}]}).to({state:[{t:this.instance_13}]},24).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true,rotation:720,x:18.4,y:14.5},24,cjs.Ease.get(-0.5)).wait(16));

	// Layer 9
	this.instance_14 = new lib.Tween17("synched",0);
	this.instance_14.setTransform(-39.2,-219.8);

	this.instance_15 = new lib.Tween18("synched",0);
	this.instance_15.setTransform(10.8,50.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14}]}).to({state:[{t:this.instance_15}]},19).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({_off:true,x:10.8,y:50.2},19,cjs.Ease.get(-0.5)).wait(21));

	// Layer 10
	this.instance_16 = new lib.Tween19("synched",0);
	this.instance_16.setTransform(-106.7,-232.6);

	this.instance_17 = new lib.Tween20("synched",0);
	this.instance_17.setTransform(13.3,77.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16}]}).to({state:[{t:this.instance_17}]},4).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({_off:true,rotation:-720,x:13.3,y:77.4},4,cjs.Ease.get(-0.5)).wait(36));

	// Layer 11
	this.instance_18 = new lib.Tween21("synched",0);
	this.instance_18.setTransform(-135.8,-226.8);

	this.instance_19 = new lib.Tween22("synched",0);
	this.instance_19.setTransform(34.2,63.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18}]}).to({state:[{t:this.instance_19}]},14).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({_off:true,x:34.2,y:63.2},14,cjs.Ease.get(-0.5)).wait(26));

	// Layer 12
	this.instance_20 = new lib.Tween23("synched",0);
	this.instance_20.setTransform(-153.3,-316.9);

	this.instance_21 = new lib.Tween24("synched",0);
	this.instance_21.setTransform(46.7,43.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20}]}).to({state:[{t:this.instance_21}]},29).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({_off:true,rotation:1080,x:46.7,y:43.1},29,cjs.Ease.get(-0.5)).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-207,-321.4,173.2,122);


(lib.newspaper_grow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* 
		// paper grow ani
		var mcPaperGrow:MovieClip = this.createEmptyMovieClip("mcPaperGrow", this.getNextHighestDepth());
		var auPaperGrow:Sound = new Sound(mcPaperGrow);
		auPaperGrow.attachSound("paper_grow");
		auPaperGrow.setVolume(30);
		*/
		this.stop();
	}
	this.frame_6 = function() {
		/* 
		if (_parent._parent.curMusicState == "on") {
			auPaperGrow.start();
		}*/
	}
	this.frame_19 = function() {
		/* stop();
		*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(13).call(this.frame_19).wait(1));

	// Layer 1
	this.instance = new lib.newspaper();
	this.instance.setTransform(0,0,0.122,0.087);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1},19,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.3,-22.5,33.5,46.7);


(lib.milks = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"stop":0,"play":1});

	// timeline functions:
	this.frame_0 = function() {
		/* 
		// milk sucking
		var mcMilkSucking:MovieClip = this.createEmptyMovieClip("mcMilkSucking", this.getNextHighestDepth());
		var auMilkSucking:Sound = new Sound(mcMilkSucking);
		auMilkSucking.attachSound("milk_sucking");
		auMilkSucking.setVolume(30);
		
		// milk cow
		var mcMilkCow:MovieClip = this.createEmptyMovieClip("mcMilkCow", this.getNextHighestDepth());
		var auMilkCow:Sound = new Sound(mcMilkCow);
		auMilkCow.attachSound("milk_cow");
		auMilkCow.setVolume(100);
		
		stop();
		*/
		this.stop();
	}
	this.frame_1 = function() {
		/* play();
		*/
		this.play();
	}
	this.frame_129 = function() {
		/* 
		if (_parent.curMusicState == "on") {
			auMilkSucking.start();
		}*/
	}
	this.frame_174 = function() {
		/* 
		if (_parent.curMusicState == "on") {
			auMilkCow.start();
		}
		
		stop();
		*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(128).call(this.frame_129).wait(45).call(this.frame_174).wait(1));

	// front
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("AnNX6MgDbgw1QBLAOCaAPQCXAPCLAJMgBXAvIQAAASBKAVQBIAUB+ATQEiAoFvADIhnABQwPAAAAhCg");
	this.shape.setTransform(233.4,227.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.498)").s().p("ArMZeQkpgbAAgoMgDdgyTQAGAxFkAhQFqAjH+AAQH/AAFqgjQFkghAGgxMgDcAyQQgBAokpAcQkpAcmkAAQmmAAkmgag");
	this.shape_1.setTransform(274.5,229.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(175));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ACUcSQkOgaAAglMgDLgoPIgBgFQAAguFKggQFMggHWAAQHWAAFLAfQFMAhAAAtIAAABIAAABMgDKAoQQAAAlkRAbQkRAamBABQmGAAkMgZg");
	mask.setTransform(194,183.5);

	// milk front
	this.instance = new lib.milk_front();
	this.instance.setTransform(274.6,232.6,1,1,0,0,0,113.4,134.3);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({y:272.6},15,cjs.Ease.get(1)).wait(15).to({y:332.6},25,cjs.Ease.get(1)).wait(15).to({y:412.6},35,cjs.Ease.get(1)).wait(15).to({y:512.6},45,cjs.Ease.get(1)).wait(1));

	// cow
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8F8DE").s().p("AgRgfIAjgBQgFBCgMgBQgIAAgKhAg");
	this.shape_2.setTransform(325.8,320.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#23221E").s().p("ADgDCQAUiliRgOQg5gGgwAlQgiAYgZAmIhDANQhLAMg8AAIgNAAQAXgLAMgQIAQgWQAHgIAUgNQAngZA0gdQAEgrAYgUQANgLAdgoQAVgeAggQQBJgiAmgHQBIgPAoAoQAPAPAIAPIASAtQASArgwCdQAMA3gHAUQgFAOgLAAQgFAAgGgDg");
	this.shape_3.setTransform(317.5,298.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#23221E").s().p("AigCcQg7gkgEh2IgTg+IAliNIHAApIAABbIg7A3IhtC8IiLAcQglgJg7glg");
	this.shape_4.setTransform(288.5,257.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8F8DE").s().p("AgRgfIAkgBQgGBCgMgBQgJAAgJhAg");
	this.shape_5.setTransform(333.7,320.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#23221E").s().p("ABBB/QhfglABheQgQAJgagHQgLgEghgCQgegBgOgHQgSgIgLgVQgIgRAAgOQAAgMAlg2IB0AJIAVBCQA9gLBQAKQA2AHARA6QANAqgLAyQgJApgWAKQgKADgNAAQgcAAgtgQg");
	this.shape_6.setTransform(290.5,252.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag3AXQALgXASgWQAtAKARAIQALAEAJANIgCAKg");
	this.shape_7.setTransform(356.8,355.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag3AXQALgXASgWQAuAKAQAIQALAEAJANIgBAKg");
	this.shape_8.setTransform(336.1,355.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag3AXQALgXASgWQAtAKARAIQALAEAJANIgCAKg");
	this.shape_9.setTransform(246.6,355.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#23221E").s().p("AgGCtIABkXQgEgbgNgLIASgrQAZAiABAdQACATgFDyQgHAzgKAAQgDAAgFgPg");
	this.shape_10.setTransform(364.6,267.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#23221E").s().p("Ag7BxQg4gmgmhGQgUgkAKgoIAKgfQAFgRgBgOICFgMIC3AKQADAfgMBSIgNBaQgBAagXAXQgdAcgvABIgDAAQgzAAgyghg");
	this.shape_11.setTransform(338.7,254.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#23221E").s().p("AhBEaQgJgLAHghQAHgjgGgJQgHgJgKAAQgLAAgIgKIAGgGQASktgDgiQgCgihKg6IBMgcQArgbAuAWQALAFAZAgQAaAiAFACQAvAkAkA5IgtBHIg0BCQgQAUglCUIgvBiIAAAXQgOgHgMgMg");
	this.shape_12.setTransform(241.5,306);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ag3AXQALgXATgWQAtAKAQAIQALAEAJANIgCAKg");
	this.shape_13.setTransform(227.4,355.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#23221E").s().p("Ag5DvIgeg1IgCg4IAficIghAaIhYBkIgtg5IAQixIBKhqIAbAeIA8AGIAmAfIBHgDIAEgBIAFAAQAugEAMAwIA3AEQAdBLAFAZQAEAZADBiIgfAiQgHAIgVBHIg1AFIg/Adg");
	this.shape_14.setTransform(218.5,258.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#23221E").s().p("Ag7AfIADhCIAIgLIBRACIAHAUIAMACIADAsIAFAUIhLAFg");
	this.shape_15.setTransform(188.2,271.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#23221E").s().p("AgFAUIgEgRIAChXIAIgDIAJAgIgDByIgQAdg");
	this.shape_16.setTransform(187.4,251.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#23221E").s().p("Ag+AFQgMg2AAgHQAAgSAXgLQAXgMAnAaQAnAZAMAbQAPAfgCAgQgDAoglAFIgOABQhAAAgThVg");
	this.shape_17.setTransform(290.4,267);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#23221E").s().p("AAXBWQgTgFgUgRQgUgQgOgSQgOgTACgLQAEgeAPg5IAwAAQBRCDgfAjQgIAJgMAAQgFAAgHgCg");
	this.shape_18.setTransform(284.6,292.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#23221E").s().p("AgEAeIgoADQgwgqAIggQAIggAtgtQARADAqAjQAvAlABAPQADAVgHBAQAZArgVARQgCACgEAAQgWAAg0hZg");
	this.shape_19.setTransform(260.3,291.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#23221E").s().p("AAiBrQgUgBg6hKQgQg+AQglQAQgjAMgFQASABAaAXQAaAYgBAQQACCXgUAAIgBgBg");
	this.shape_20.setTransform(249.4,265.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F8F8DE").s().p("AixGTQAhhKAsgGIAci4QgXggAAgUQAAgVASgNQASktgCghQgCgjhLg5IBNgdQByApApAbQAvAlAlA4IguBHIg0BEQgQAVgkCSIgwBhIABCoQAOAngQAKQgJAFgGgJQgHgKgEABQgQADgDAig");
	this.shape_21.setTransform(239.6,317.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#23221E").s().p("AgwgIQBggwAABSg");
	this.shape_22.setTransform(212.6,238);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#23221E").s().p("AgSAyQhEhCAQgeQAQgdBJAQIA3AwIAAAdIgTAwg");
	this.shape_23.setTransform(180.5,240.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F8F8DE").s().p("AIvKAQAghKAtgGIAshvIgfjYQgFANhmAAQh7AAg5hfQhmAZhkAAQhkAAi4hLIhOAVIADDBQgMASgEAyQgFAyAtBKIgBA8QAOAngRAKQgJAFgGgJQgGgKgFABQgQADgCAiIhvAAQAghKAtgGIAHgzIgRiKIhUh/Qg1gNgrgiQgrgjh7kRIhciRIhgBIIhOAFIgsgQIAEhEIAmg0IAFhTIgFgRIAEhwIBchwIA/ANIA3A7IBhAkIBJgCICIg5IMwBEICpgQIDKAMIA/A/QAgAlACAiQADAigMIYQgQB7gWAJQgXAJAniWIACofQgFgggQgJIgSByIhNE5IAACZQAVAWAAAOQAAAOgXAfIg7FBQAOAngRAKQgIAFgGgJQgHgKgFABQgPADgDAig");
	this.shape_24.setTransform(274.5,293.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#23221E").s().p("ABFELQgEgBgKAFQgKAFgFgFQgKgHgKgfIACgzIhWh2Igwh3IAbjoIAFgGIA0AbIgCB7ICPCfIgZAiIgBD0QgIgXgKgEg");
	this.shape_25.setTransform(358.3,308.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F8F8DE").s().p("AgqGrQAghKAqgGIAIg0IAJi0IhWh0Ihmj+ICLirIgDDYICPChIgZAjIgCFwQAPAngRAKQgJAFgGgJQgHgKgEABQgQADgCAig");
	this.shape_26.setTransform(355.6,315.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(175));

	// straw
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.498)").s().p("EgLQAhlMAV2hDXIArAOMgV3BDXg");
	this.shape_27.setTransform(358.1,144.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F08591").s().p("AgUgdIA8AUIhQAng");
	this.shape_28.setTransform(428.1,-69.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F08591").s().p("AhCgSICuhaIgpB/IiuBag");
	this.shape_29.setTransform(426.5,-51.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F08591").s().p("AhCgSICvhZIgqB9IivBag");
	this.shape_30.setTransform(418.1,-25.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F08591").s().p("AhXAbIABgFICuhYIgpB+IgNAHg");
	this.shape_31.setTransform(294.8,356.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F08591").s().p("AhCgSICvhaIgqB/IivBag");
	this.shape_32.setTransform(301.1,334.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F08591").s().p("AhBgSICthaIgpB/IivBag");
	this.shape_33.setTransform(309.5,309.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F08591").s().p("AhCgRICuhaIgpB+IivBZg");
	this.shape_34.setTransform(317.8,283.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F08591").s().p("AhCgSICuhaIgpB/IiuBag");
	this.shape_35.setTransform(326.2,257.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F08591").s().p("AhCgSICvhaIgqB+IiuBag");
	this.shape_36.setTransform(334.5,232.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F08591").s().p("AhCgSICvhaIgqB/IivBag");
	this.shape_37.setTransform(342.9,206.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F08591").s().p("AhCgSICvhZIgqB+IivBag");
	this.shape_38.setTransform(351.2,180.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F08591").s().p("AhCgSICvhaIgqB/IivBag");
	this.shape_39.setTransform(359.5,155);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F08591").s().p("AhBgSICthaIgpB/IivBag");
	this.shape_40.setTransform(367.9,129.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F08591").s().p("AhBgRICthaIgpB+IiuBag");
	this.shape_41.setTransform(376.2,103.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F08591").s().p("AhCgSICvhaIgqB/IiuBag");
	this.shape_42.setTransform(384.6,78);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F08591").s().p("AhCgSICvhaIgqB+IivBag");
	this.shape_43.setTransform(392.9,52.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F08591").s().p("AhCgSICuhaIgpB/IivBag");
	this.shape_44.setTransform(401.3,26.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F08591").s().p("AhCgSICuhaIgpB/IivBag");
	this.shape_45.setTransform(409.6,1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EEE8E3").s().p("EgL+AhXMAV3hDXICGAqMgV4BDYg");
	this.shape_46.setTransform(362.6,145.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]}).wait(175));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("ACUcSQkOgaAAglMgDLgoPIgBgFQAAguFKggQFMggHWAAQHWAAFLAfQFMAhAAAtIAAABIAAABMgDKAoQQAAAlkRAbQkRAamBABQmGAAkMgZg");
	mask_1.setTransform(194,183.5);

	// milk back
	this.instance_1 = new lib.milk_back();
	this.instance_1.setTransform(274.6,111.6,1,1,0,0,0,113.4,22.6);

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({y:151.6},15,cjs.Ease.get(1)).wait(15).to({y:211.6},25,cjs.Ease.get(1)).wait(15).to({y:291.6},35,cjs.Ease.get(1)).wait(15).to({y:391.6},45,cjs.Ease.get(1)).wait(1));

	// glass back
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AhBAPQAXgdArAAQAtAAAUAdg");
	this.shape_47.setTransform(258.1,361.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("Ah5AcQAgg3BTAAQBQAAAwA3g");
	this.shape_48.setTransform(281.4,360.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(255,255,255,0.8)").s().p("ArMCcQkqgdAAgoIgSkPQAFAoEuAcQEwAdGlAAQGlAAExgdQEtgcAGgnIgTEOQAAAokqAdQkpAdmjAAQmjAAkpgdg");
	this.shape_49.setTransform(274.6,377.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(255,255,255,0.498)").s().p("ArZBDQkvgcABgnQgBgmEvgbQEugcGrAAQGrAAEvAcQEvAbgBAmQABAnkvAcQkuAbmsAAQmrAAkugbg");
	this.shape_50.setTransform(274.6,358.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(255,255,255,0.498)").s().p("AtNApQlkgdgfgrIgCgkQAHAxFoAgQFpAiH6AAQH7AAFpgiQFpggAGgxIgCAkQgfArljAdQlZAbn2AAQn0AAlZgbg");
	this.shape_51.setTransform(274.5,69.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(255,255,255,0.498)").s().p("ArMBEQkpgcgBgoQABgmEpgdQEpgdGjABQGjgBEqAdQEpAdABAmQgBAokpAcQkpAcmkAAQmiAAkqgcg");
	this.shape_52.setTransform(274.5,385.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(255,255,255,0.2)").s().p("AMzgKQlogjnLAAQnJAAlpAjQlbAfg7AtQgKgHAAgIQAAgxFqghQFpgiH/AAQIAAAFpAiQFqAhAAAxQAAAIgKAHQg7gtlbgfg");
	this.shape_53.setTransform(274.5,57.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(255,255,255,0.2)").s().p("AtoBTQlqgjAAgwQAAgwFqgiQFpgiH/gBQIAABFpAiQFqAiAAAwQAAAwlqAjQlqAin/AAQn+AAlqgig");
	this.shape_54.setTransform(274.5,62.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(0,0,0,0.098)").s().p("A9zhNQAogwAjgGQANgDATACMA5mAAaQAuAAgTAjQgUAjhJAwQhKAxhUAjQhVAjguAAQleACk7AAUguKAAAAC1gDSg");
	this.shape_55.setTransform(364.4,391);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47}]}).wait(175));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150.9,-72.3,405.4,476.7);


(lib.flies = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* 
		// diaper flies
		var mcDiaperFlies:MovieClip = this.createEmptyMovieClip("mcDiaperFlies", this.getNextHighestDepth());
		var auDiaperFlies:Sound = new Sound(mcDiaperFlies);
		auDiaperFlies.attachSound("diaper_flies");
		auDiaperFlies.setVolume(70);
		
		
		if (_parent._parent.curMusicState == "on") {
			auDiaperFlies.start();
		}*/
	}
	this.frame_1 = function() {
		/* play();
		*/
		this.play();
	}
	this.frame_130 = function() {
		this.gotoAndPlay(2);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(129).call(this.frame_130).wait(1));

	// fly1
	this.instance = new lib.fly("synched",0);
	this.instance.setTransform(-15.8,-5.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({guide:{path:[-15.7,-5.5,-15.7,-5.5,-15.7,-5.5,-21.3,-9.4,-25,-17,-28.6,-24.3,-29.8,-33.3,-31,-42.1,-29.6,-50.6,-28.1,-59.7,-24,-66.2,-19.4,-73.3,-12.7,-76.3,-11.6,-76.8,-10.4,-77.1]}},8).to({guide:{path:[-10.3,-77.1,5.7,-82.3,29.5,-66.8,37.1,-61.9,34.2,-55.1,32.5,-51.1,27.7,-47.2,25.6,-45.6,22.9,-43.9,14.7,-39.1,6.6,-37.4,-2.1,-35.5,-4.3,-39,-4.6,-39.5,-4.9,-40.1]}},7).to({guide:{path:[-4.9,-40.1,-6,-43.3,-3.4,-48.1,-0.3,-53.9,5.4,-57,11.9,-60.4,17.7,-57.8,23.5,-55.3,27.7,-47.2,28.7,-45.4,29.5,-43.3,37,-25.3,28.8,-14.8]}},10).to({_off:true},40).wait(65));

	// fly2
	this.instance_1 = new lib.fly("synched",0);
	this.instance_1.setTransform(-14.1,-8.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({_off:false},0).to({guide:{path:[-13.9,-8.5,-14.1,-8.8,-14.3,-9.1,-15.6,-11.3,-17.8,-14,-19.7,-16.2,-21.7,-18.4,-26.3,-23.6,-27.2,-27.7,-28.4,-33.4,-23.8,-40.9,-19.5,-47.6,-18.2,-56.6,-17.8,-59.3,-17.4,-63.8,-17.1,-67.1,-16.8,-70.3,-15.8,-77.1,-12.4,-80.1,-8,-83.8,2,-84.2,8.1,-84.4,13.5,-82.9]}},8).to({guide:{path:[13.7,-82.9,17.5,-81.8,20.7,-79.9,28.1,-75.7,32.5,-68.2,36.5,-61.3,37,-53.6,37.4,-45.9,34,-40.4,31.5,-36.3,25.1,-29.3,17.9,-21.2,15.7,-18.2,11.2,-12.1,11,-7.3,11,-5.5,11.5,-3.7]}},10).to({_off:true},18).wait(65));

	// fly3
	this.instance_2 = new lib.fly("synched",0);
	this.instance_2.setTransform(-22.4,-3.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({guide:{path:[-22.3,-3.6,-21.6,-2.4,-20.8,-1.2,-15.5,6.1,-5.2,6.7,16.2,7.8,26,-4,35.3,-15.1,32.6,-36.1,30.3,-54.2,14,-58.6,7.7,-60.2,-1.7,-60.2,-4.6,-60.2,-17.4,-59.7]}},10).to({guide:{path:[-17.6,-59.7,-18.2,-59.7,-18.9,-59.6,-34.4,-58.9,-41.5,-53.3,-47.6,-48.6,-47.2,-40.6,-46.4,-25.8,-36.8,-20.1,-31.5,-17,-24.7,-17.1,-21.6,-17.2,-17.9,-18,-13.3,-19,-9.3,-21,-5.4,-23,-3.4,-25.4,-1.4,-27.6,-1.8,-29.5]}},10).to({guide:{path:[-1.9,-29.3,-1.9,-29.5,-1.9,-29.6,-2.6,-31.9,-6.4,-33.1,-13.9,-35.6,-19.3,-30,-24.1,-25.2,-24.8,-17.1,-24.8,-16.8,-24.8,-16.5,-25.3,-9.8,-22.8,-4.5]}},5).to({_off:true},1).wait(14).to({_off:false,x:-22.4,y:-3.5},0).to({guide:{path:[-22.3,-3.6,-21.6,-2.4,-20.8,-1.2,-15.5,6.1,-5.2,6.7,16.2,7.8,26,-4,35.3,-15.1,32.6,-36.1,30.3,-54.2,14,-58.6,7.7,-60.2,-1.7,-60.2,-4.6,-60.2,-17.4,-59.7]}},9).to({guide:{path:[-17.6,-59.7,-18.2,-59.7,-18.9,-59.6,-34.4,-58.9,-41.5,-53.3,-47.6,-48.6,-47.2,-40.6,-46.4,-25.8,-36.8,-20.1,-31.5,-17,-24.7,-17.1,-21.6,-17.2,-17.9,-18,-13.3,-19,-9.3,-21,-5.4,-23,-3.4,-25.4,-1.4,-27.6,-1.8,-29.5]}},8).to({guide:{path:[-1.9,-29.3,-1.9,-29.5,-1.9,-29.6,-2.6,-31.9,-6.4,-33.1,-13.9,-35.6,-19.3,-30,-24.1,-25.2,-24.8,-17.1,-24.8,-16.8,-24.8,-16.5,-25.3,-9.8,-22.8,-4.5]}},7).to({_off:true},1).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.eggs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"stop":0,"play":1});

	// timeline functions:
	this.frame_0 = function() {
		/* 
		//egg_grow.stop();
		//egg_flapping.stop();
		//egg_bgock.stop();
		
		// egg grow ani
		var mcEggGrow:MovieClip = this.createEmptyMovieClip("mcEggGrow", this.getNextHighestDepth());
		var auEggGrow:Sound = new Sound(mcEggGrow);
		auEggGrow.attachSound("egg_grow");
		auEggGrow.setVolume(50);
		
		// egg flapping ani
		var mcEggFlapping:MovieClip = this.createEmptyMovieClip("mcEggFlapping", this.getNextHighestDepth());
		var auEggFlapping:Sound = new Sound(mcEggFlapping);
		auEggFlapping.attachSound("egg_flapping");
		auEggFlapping.setVolume(100);
		
		// egg bgock ani
		var mcEggBgock:MovieClip = this.createEmptyMovieClip("mcEggBgock", this.getNextHighestDepth());
		var auEggBgock:Sound = new Sound(mcEggBgock);
		auEggBgock.attachSound("egg_bgock");
		auEggBgock.setVolume(50);
		
		stop();
		*/
		//var myInstance23 = createjs.Sound.play("egg");
	 	//myInstance23.volume = 0.2;
		//playSound("egg", false);
		this.stop();
	}
	this.frame_1 = function() {
		/* 
		if (_parent.curMusicState == "on") {
			auEggGrow.start();
		}
		
		play();
		*/
		//playSound("egg", false);
		this.play();
	}
	this.frame_39 = function() {
		/* 
		if (_parent.curMusicState == "on") {
			auEggFlapping.start();
			auEggBgock.start();
		}
		
		play();
		*/
		this.play();
	}
	this.frame_214 = function() {
		/* //stop();
		gotoAndPlay(40);
		
		
		*/
		this.gotoAndPlay(40);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(38).call(this.frame_39).wait(175).call(this.frame_214).wait(1));

	// hen
	this.instance = new lib.egg_hen();
	this.instance.setTransform(2.3,-30.8,1,1,0,0,0,47.2,29.4);

	this.instance_1 = new lib.egg_hen_flap();
	this.instance_1.setTransform(2.3,-440.5,1,1,0,0,0,47.2,29.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-435.8},37,cjs.Ease.get(-1)).to({_off:true,y:-440.5},1).wait(30).to({_off:false,y:-435.8},0).wait(146));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(38).to({_off:false},1).to({y:-474.8},15,cjs.Ease.get(1)).wait(5).to({y:-440.1},9).to({_off:true},1).wait(146));

	// egg
	this.instance_2 = new lib.egg();
	this.instance_2.setTransform(0,2.1,0.05,0.05,0,0,0,161.1,453.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({regX:161.3,regY:453,scaleX:1,scaleY:0.9,x:-12.7,y:-2.1},37,cjs.Ease.get(-1)).wait(177));

	// shadow
	this.instance_3 = new lib.egg_shadow();
	this.instance_3.setTransform(7.5,1.8,0.05,0.05,0,0,0,186.1,13);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({regX:186.3,regY:12.3,scaleX:1,scaleY:1,x:136.4,y:-8.2},37,cjs.Ease.get(-1)).wait(177));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.9,-60.2,94.5,58.9);


(lib.diapercan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"stop":0,"play":1});

	// timeline functions:
	this.frame_0 = function() {
		/* 
		// diaper thud
		var mcDiaperThud:MovieClip = this.createEmptyMovieClip("mcDiaperThud", this.getNextHighestDepth());
		var auDiaperThud:Sound = new Sound(mcDiaperThud);
		auDiaperThud.attachSound("diaper_thud");
		auDiaperThud.setVolume(30);
		
		stop();
		*/
		this.stop();
	}
	this.frame_1 = function() {
		/* play();
		*/
		this.play();
	}
	this.frame_8 = function() {
		/* 
		if (_parent.curMusicState == "on") {
			auDiaperThud.start();
		}*/
	}
	this.frame_88 = function() {
		/* 
		if (_parent.curMusicState == "on") {
			auDiaperThud.start();
		}*/
	}
	this.frame_184 = function() {
		/* 
		if (_parent.curMusicState == "on") {
			auDiaperThud.start();
		}*/
	}
	this.frame_255 = function() {
		this.gotoAndPlay(2);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(7).call(this.frame_8).wait(80).call(this.frame_88).wait(96).call(this.frame_184).wait(71).call(this.frame_255).wait(1));

	// can
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(140,125,79,0.298)").s().p("AAlAKQgYhWgNgBQgJgBgRAJQgTAJgTAAQgUAAgXgIQgWgJgHAAQgFAAgCADIgBAHQgCALgdABQgwACgRgsIHhAAQgNAjgcAAQgQAAgMgDIgZgFQgMgBgaBTQgbBWgKAAQgKAAgZhYg");
	this.shape.setTransform(69.5,-296);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(140,125,79,0.298)").s().p("AAyALQgegQgTgBQgQgBgbAHQgdAKgdAAQgfgBgigIQgigHgLAAQgIAAgCADIgCAGQgEAKgsABQhLADgZgrILlAAQgUAhgrAAQgYAAgUgDIgmgEQgTAAgvANQgxAOgPAAQgQAAgegQg");
	this.shape_1.setTransform(-14.3,-338.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AgOAQQgHgHAAgJQAAgIAHgHQAGgGAIAAQAJAAAGAGQAHAHAAAIQAAAJgHAHQgGAGgJAAQgIAAgGgGg");
	this.shape_2.setTransform(9,-265);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AgOAQQgHgHAAgJQAAgIAHgHQAGgGAIAAQAJAAAGAGQAHAHAAAIQAAAJgHAHQgGAGgJAAQgIAAgGgGg");
	this.shape_3.setTransform(-11,-265);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8C8C8C").s().p("AjOCIQgRAAgMgMQgLgLAAgRIAAi/QAAgQALgMQAMgMARAAIEJAAQASAVAPgBQAOAAAQgUIBVAAQAQAAANAMQALAMAAAQIAAC/QAAARgLALQgNAMgQAAg");
	this.shape_4.setTransform(-0.9,-265.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8C8C8C").s().p("AlhDXQhYAABji/QAig/AvhIQApg9AOgPQAPgNA/gIQA5gHBIABQBKAAA4AHQA8AIAMAMQEcGSiJAAgAigiOQj1EuCHAAIIZAAQB8AAjrkuQgMgTiPgBIgKAAQiEAAgTAUg");
	this.shape_5.setTransform(-0.6,-245.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(140,125,79,0.2)").s().p("AgnkuIBPAAQgTJdgRAAQgQAAgbpdg");
	this.shape_6.setTransform(-18,-222.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(140,125,79,0.298)").s().p("AgihhIBFAAQgFDDgeAAQggAAgCjDg");
	this.shape_7.setTransform(-54.8,-331.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(140,125,79,0.247)").s().p("AgTBcIguAAQgKgMgQhEQgOg8gHAAQgGABghAQQgeAQgWgCQgsgDgmgVIgDgyIJBABQgXAmgRAAQgJAAgQgEQgSgEgMAAQgMgBgZAaQgaAbgIAAQgIAAgYgQQgYgQgLABQgGABgIAWIgQAtQgWA/gUAAIgDAAg");
	this.shape_8.setTransform(-105.5,-356.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B3B3B3").s().p("A1PgDQAGgVAcAAUAAXAAEApngAEI0oAJQ02AJgOgDQgUAAgKAKQgJALAFANQgYgJAGgTg");
	this.shape_9.setTransform(-2.1,-367.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("A0+AaQgTAAgKgIQgJgIAAgKQAAgJAJgIQAKgIAQAAUAAXAAEApngAEQARAAALAJQALAHABAJQABALgLAHQgNAIgXAAg");
	this.shape_10.setTransform(-0.1,-367.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B3B3B3").s().p("A1PgDQAGgVAcAAUAAXAAEApngAEI0oAJQ02AJgOgDQgUAAgKAKQgJALAFANQgYgJAGgTg");
	this.shape_11.setTransform(-2.1,-344.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("A0+AaQgTAAgKgIQgJgIAAgKQAAgJAJgIQAKgIAQAAUAAXAAEApngAEQARAAALAJQALAHABAJQABALgLAHQgNAIgXAAg");
	this.shape_12.setTransform(-0.1,-344.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.067)").s().p("ADvc5MABkgwlIEzAAIicj0I4rg7IYdAAIgBgCQBUgihVgSIBkAAIhJh2I42g7IYuAAQBDgYhJgeQArAJIwgJIgUFzIgKBEIAEAqIgnLFIgXD4IACCeMgBxAg1g");
	this.shape_13.setTransform(23.6,-185);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.098)").s().p("AAOcyIhf77IAIizIggkPIgTlfIAHgvIgNg6Ig2veICEAAIBnDbIheA0ICfEsIhjAAMACoAwog");
	this.shape_14.setTransform(-116.1,-184.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8C8C8C").s().p("AhgVNMACPgqZIAzAAMgCRAqZg");
	this.shape_15.setTransform(102.4,-174.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8C8C8C").s().p("AhIVNMABfgqZIAyAAMgBfAqZg");
	this.shape_16.setTransform(67.9,-174.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8C8C8C").s().p("AgwVNMAAwgqZIAxAAMgAxAqZg");
	this.shape_17.setTransform(33.3,-174.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8C8C8C").s().p("AgXVNMAAAgqZIAvAAMAAAAqZg");
	this.shape_18.setTransform(-1.2,-174.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8C8C8C").s().p("AAvVNMgCPgqZIAxAAMACRAqZg");
	this.shape_19.setTransform(-104.6,-174.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#8C8C8C").s().p("AAXVNMgBfgqZIAyAAMABfAqZg");
	this.shape_20.setTransform(-70.1,-174.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#8C8C8C").s().p("AAAVNMgAwgqZIAwAAMAAxAqZg");
	this.shape_21.setTransform(-35.5,-174.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#8C8C8C").s().p("AgXVNMAAAgqZIAvAAMAAAAqZg");
	this.shape_22.setTransform(-0.9,-174.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#8C8C8C").s().p("A0VAbIgCg1MAovAAAIgCA1g");
	this.shape_23.setTransform(-1,-308.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#8C8C8C").s().p("AyFAbIgDg1MAkRAAAIgDA1g");
	this.shape_24.setTransform(-1,-41.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("AxwcyIhg7yIAGjEIggklIgRlCIAHgtIgNhBIg2vYMApvAAAIgUFhIgJBIIADAwIgnLMIgZDrIAFCVMgByAg+g");
	this.shape_25.setTransform(-1,-184.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(256));

	// diaper pile
	this.instance = new lib.diaperpile("synched",0);
	this.instance.setTransform(-0.7,-358.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({y:-360.5},0).wait(2).to({y:-358.5},0).wait(78).to({y:-359.5},0).wait(2).to({y:-358.5},0).wait(94).to({y:-360.5},0).wait(2).to({y:-358.5},0).wait(65));

	// flies
	this.flies = new lib.flies();
	this.flies.setTransform(-75.7,-396.4,0.8,0.8);
	this.flies._off = true;

	this.timeline.addTween(cjs.Tween.get(this.flies).wait(1).to({_off:false},0).wait(129).to({skewY:180,x:72.5,y:-369.8},0).wait(126));

	// diaper
	this.instance_1 = new lib.diaper("synched",0);
	this.instance_1.setTransform(-65.6,-686.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:360,y:-389.5},13).to({y:-393.5},2).to({y:-364.5},3).wait(62).to({x:58.4,y:-678.5},0).to({rotation:0,y:-389.5},13).to({y:-393.5},2).to({y:-362.5},3).wait(81).to({x:-1.6,y:-678.5},0).to({rotation:-360,y:-389.5},10).to({y:-393.5},2).to({y:-364.5},3).wait(62));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138.2,-720.9,276.3,720.8);


(lib.cokedrips = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// drip
	this.instance = new lib.cokedrip("synched",0);
	this.instance.setTransform(-0.5,6.8,1.299,1.299,0,-7.5,172.5);
	this.instance.alpha = 0.801;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(37).to({_off:false},0).to({scaleX:1,scaleY:1,skewX:-82.5,skewY:97.5,guide:{path:[-0.5,6.7,-1.3,1.5,-3.9,-4,-6.8,-10.2,-11.4,-15.2,-21.3,-26.7,-35.2,-28.8]},alpha:0},20).to({_off:true},1).wait(13).to({_off:false,scaleX:1.44,scaleY:1.44,skewX:-7.5,skewY:172.5,x:-0.5,y:6.8,alpha:0.801},0).to({scaleX:1,scaleY:1,skewX:-82.5,skewY:97.5,guide:{path:[-0.5,6.7,-1.3,1.5,-3.9,-4,-6.8,-10.2,-11.4,-15.2,-21.3,-26.7,-35.2,-28.8]},alpha:0},19).to({_off:true},1).wait(141));

	// drip
	this.instance_1 = new lib.cokedrip("synched",0);
	this.instance_1.setTransform(-1,6.9,1,1,7.5);
	this.instance_1.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(17).to({_off:false,scaleX:1.2,scaleY:1.2},0).to({scaleX:1,scaleY:1,rotation:82.5,guide:{path:[-0.9,6.8,-0.1,1.6,2.5,-4,5.4,-10.2,10,-15.2,20.2,-27,34.6,-28.9], orient:'fixed'},alpha:0},19).to({_off:true},1).wait(11).to({_off:false,scaleX:1.44,scaleY:1.44,rotation:7.5,x:-1,y:6.9,alpha:0.801},0).to({scaleX:1,scaleY:1,rotation:82.5,guide:{path:[-0.9,6.8,-0.1,1.6,2.5,-4,5.4,-10.2,10,-15.2,20.2,-27,34.6,-28.9], orient:'fixed'},alpha:0},17).to({_off:true},1).wait(165));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,1.1,2.3,5.9);


(lib.carmiles = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"stop":0,"play":1});

	// timeline functions:
	this.frame_0 = function() {
		//
		//var intervalId:Number
		//clearInterval(intervalId);
		//	
		///*car_enter.stop();
		//car_exit.stop();
		////car_idle.stop();
		//car_horn.stop();*/
		//
		//auCarEnter.stop();
		//auCarIdle.stop();
		//
		//// car enter
		//var mcCarEnter:MovieClip = this.createEmptyMovieClip("mcCarEnter", this.getNextHighestDepth());
		//var auCarEnter:Sound = new Sound(mcCarEnter);
		//auCarEnter.attachSound("car_enter");
		//auCarEnter.setVolume(50);
		//
		//// car idle
		//var mcCarIdle:MovieClip = this.createEmptyMovieClip("mcCarIdle", this.getNextHighestDepth());
		//var auCarIdle:Sound = new Sound(mcCarIdle);
		//auCarIdle.attachSound("car_idle");
		//auCarIdle.setVolume(50);
		//
		//// car exit
		//var mcCarExit:MovieClip = this.createEmptyMovieClip("mcCarExit", this.getNextHighestDepth());
		//var auCarExit:Sound = new Sound(mcCarExit);
		//auCarExit.attachSound("car_exit");
		//auCarExit.setVolume(30);
		//
		//// car horn
		//var mcCarHorn:MovieClip = this.createEmptyMovieClip("mcCarHorn", this.getNextHighestDepth());
		//var auCarHorn:Sound = new Sound(mcCarHorn);
		//auCarHorn.attachSound("car_horn");
		//auCarHorn.setVolume(50);
		//
		//stop();
		//
		this.stop();
	}
	this.frame_1 = function() {
		/* 
		//this.car_enter.stop();
		
		if (_parent.curMusicState == "on") {
			auCarEnter.start();
		}
		
		play();
		*/
	}
	this.frame_89 = function() {
		/* 
		if (_parent.curMusicState == "on") {
			auCarIdle.start(0, 999);
		}
		*/
	}
	this.frame_99 = function() {
		/* 
		function playCars():Void {
			clearInterval(intervalId);
			//trace("interval cleared");
			//auCarIdle.stop();
			nextFrame();
		}
		//var intervalId:Number = setInterval(this, "playCars", 3000);
		intervalId = setInterval(this, "playCars", 3000);
		//trace("interval set");
		
		
		function playCarEnter():Void {
			clearInterval(intervalId2);
			//trace("interval cleared");
			//auCarIdle.stop();
			//nextFrame();
		
			if (_parent.curMusicState == "on") {
				auCarEnter.start();
			}
		}
		
		var intervalId2:Number = setInterval(this, "playCarEnter", 1500);
		
		stop();*/
	}
	this.frame_100 = function() {
		/* 
		//auCarIdle.stop();
		
		
		
		play();
		*/
	}
	this.frame_142 = function() {
		/* 
		auCarIdle.setVolume(70);*/
	}
	this.frame_147 = function() {
		/* 
		function playCars():Void {
			clearInterval(intervalId);
			//trace("interval cleared");
			//auCarIdle.stop();
			nextFrame();
		}
		intervalId = setInterval(this, "playCars", 5000);
		//trace("interval set");
		
		stop();
		*/
	}
	this.frame_148 = function() {
		/* 
		//auCarIdle.stop();
		
		if (_parent.curMusicState == "on") {
			auCarExit.start();
			auCarHorn.start();
		}
		
		play();
		*/
	}
	this.frame_201 = function() {
		/* 
		auCarIdle.stop();*/
	}
	this.frame_232 = function() {
		/* stop();
		*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(88).call(this.frame_89).wait(10).call(this.frame_99).wait(1).call(this.frame_100).wait(42).call(this.frame_142).wait(5).call(this.frame_147).wait(1).call(this.frame_148).wait(53).call(this.frame_201).wait(31).call(this.frame_232).wait(1));

	// Layer 1
	this.instance = new lib.carmiles_car();
	this.instance.setTransform(-61.4,448.1,0.999,0.999,5,0,0,83.3,155.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:155.2,guide:{path:[-61.2,447.9,-27.5,241.3,23.2,-63.5,24.4,-71.2,25.7,-78.8], orient:'auto'}},99,cjs.Ease.get(1)).wait(55).to({scaleX:1,scaleY:1,guide:{path:[25.9,-79,64.1,-309.2,97.9,-510.1], orient:'auto'}},47,cjs.Ease.get(-1)).to({_off:true},1).wait(31));

	// Layer 2
	this.instance_1 = new lib.carmiles_shadow();
	this.instance_1.setTransform(-54.6,468.3,1,1,5,0,0,83.4,154.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:83.2,regY:155.1,guide:{path:[-54.5,468.2,-20,256.5,33.2,-63.4,34,-68,34.7,-72.5], orient:'auto'}},99,cjs.Ease.get(1)).wait(55).to({regX:83.3,regY:155,guide:{path:[34.9,-72.7,73.4,-304.6,107.4,-507]}},47,cjs.Ease.get(-1)).to({_off:true},1).wait(31));

	// Layer 13
	this.instance_2 = new lib.carmiles_car2();
	this.instance_2.setTransform(10.2,450.2,0.999,0.999,0,0,0,83.3,155.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(99).to({_off:false},0).to({regY:155.2,rotation:0.1,guide:{path:[10.4,450.1,17.4,359.3,26.2,249.8], orient:'auto'}},48,cjs.Ease.get(1)).wait(18).to({scaleX:1,scaleY:1,guide:{path:[26.4,249.8,37.8,108.1,51.8,-64.9,71.3,-301.7,88.7,-508.3], orient:'auto'}},67,cjs.Ease.get(-1)).wait(1));

	// Layer 15
	this.instance_3 = new lib.carmiles_shadow();
	this.instance_3.setTransform(18.7,472.2,1,1,0.1,0,0,83.4,155);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(99).to({_off:false},0).to({regX:83.2,regY:155.1,rotation:0,guide:{path:[18.5,472.1,25.8,379.3,34.9,265.9], orient:'auto'}},48,cjs.Ease.get(1)).wait(18).to({regX:83.3,regY:155,rotation:0.1,guide:{path:[35.1,266,47,118.1,61.9,-64.8,81.2,-300.8,98.5,-506.7]}},67,cjs.Ease.get(-1)).wait(1));

	// maask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_165 = new cjs.Graphics().p("AvlS1IAFg4IfGCmIgFA4g");
	var mask_graphics_166 = new cjs.Graphics().p("AvlS1IAFg5IfGCmIgFA5g");
	var mask_graphics_167 = new cjs.Graphics().p("AvlS1IAFg+IfGCmIgFA+g");
	var mask_graphics_168 = new cjs.Graphics().p("AvmS1IAGhFIfHCmIgGBFg");
	var mask_graphics_169 = new cjs.Graphics().p("AvmS1IAHhPIfGCmIgHBPg");
	var mask_graphics_170 = new cjs.Graphics().p("AvnS1IAIhbIfHCmIgIBbg");
	var mask_graphics_171 = new cjs.Graphics().p("AvnS1IAJhrIfGCmIgJBrg");
	var mask_graphics_172 = new cjs.Graphics().p("AvoS1IAKh9IfHCmIgKB9g");
	var mask_graphics_173 = new cjs.Graphics().p("AvpS1IAMiTIfHCmIgMCTg");
	var mask_graphics_174 = new cjs.Graphics().p("AvqS1IAOirIfHCmIgOCrg");
	var mask_graphics_175 = new cjs.Graphics().p("AvrS1IAQjGIfHCmIgQDGg");
	var mask_graphics_176 = new cjs.Graphics().p("AvsS1IATjjIfGCmIgTDjg");
	var mask_graphics_177 = new cjs.Graphics().p("AvuS1IAWkEIfHCmIgWEEg");
	var mask_graphics_178 = new cjs.Graphics().p("AvvS1IAZknIfGCmIgZEng");
	var mask_graphics_179 = new cjs.Graphics().p("AvxS1IAclOIfHCmIgcFOg");
	var mask_graphics_180 = new cjs.Graphics().p("AvyS1IAfl3IfGCmIgfF3g");
	var mask_graphics_181 = new cjs.Graphics().p("Av0S1IAjmjIfGCnIgjGig");
	var mask_graphics_182 = new cjs.Graphics().p("Av2S1IAnnRIfGCmIgnHRg");
	var mask_graphics_183 = new cjs.Graphics().p("Av4S0IAroCIfGCmIgrICg");
	var mask_graphics_184 = new cjs.Graphics().p("Av6S0IAvo2IfGCmIgvI2g");
	var mask_graphics_185 = new cjs.Graphics().p("Av9S0IA0ptIfHCmIg0Jtg");
	var mask_graphics_186 = new cjs.Graphics().p("Av/S0IA5qnIfGCmIg5Kng");
	var mask_graphics_187 = new cjs.Graphics().p("AwCS0IA+rkIfHCmIg+Lkg");
	var mask_graphics_188 = new cjs.Graphics().p("AwES0IBDskIfGCmIhDMkg");
	var mask_graphics_189 = new cjs.Graphics().p("AwHS0IBJtnIfGCmIhJNng");
	var mask_graphics_190 = new cjs.Graphics().p("AwKS0IBPusIfGCmIhPOsg");
	var mask_graphics_191 = new cjs.Graphics().p("AwNS0IBVv0IfGCmIhVP0g");
	var mask_graphics_192 = new cjs.Graphics().p("AwQS0IBbw/IfGCmIhbQ/g");
	var mask_graphics_193 = new cjs.Graphics().p("AwTS0IBhyNIfGCmIhhSNg");
	var mask_graphics_194 = new cjs.Graphics().p("AwXS0IBozcIfHCkIhoTeg");
	var mask_graphics_195 = new cjs.Graphics().p("AwaSzIBv0uIfGCkIhvUxg");
	var mask_graphics_196 = new cjs.Graphics().p("AweSzIB22FIfHCmIh2WFg");
	var mask_graphics_197 = new cjs.Graphics().p("AwiSzIB+3eIfHCmIh+Xeg");
	var mask_graphics_198 = new cjs.Graphics().p("AwlSzICF46IfGCmIiFY6g");
	var mask_graphics_199 = new cjs.Graphics().p("AwpSzICN6ZIfGCmIiNaZg");
	var mask_graphics_200 = new cjs.Graphics().p("AwtSzICV76IfGCmIiVb6g");
	var mask_graphics_201 = new cjs.Graphics().p("AwySzICe9fIfHCmIiedfg");
	var mask_graphics_202 = new cjs.Graphics().p("Aw2SzICm/GIfHCmIimfGg");
	var mask_graphics_203 = new cjs.Graphics().p("Aw6SzMACvggxIfGCmMgCvAgxg");
	var mask_graphics_204 = new cjs.Graphics().p("Aw/SyMAC4gidIfHCmMgC4Aidg");
	var mask_graphics_205 = new cjs.Graphics().p("AxESyMADCgkMIfHCmMgDCAkMg");
	var mask_graphics_206 = new cjs.Graphics().p("AxISyMADLgl/IfGCmMgDLAl/g");
	var mask_graphics_207 = new cjs.Graphics().p("AxNSyMADVgn1IfGCmMgDVAn1g");
	var mask_graphics_208 = new cjs.Graphics().p("AxSTkMADfgptIfGCmMgDfAptg");
	var mask_graphics_209 = new cjs.Graphics().p("AxXUhMADpgrnIfGCmMgDpArng");
	var mask_graphics_210 = new cjs.Graphics().p("AxdVgMAD0gtlIfHCmMgD0Atlg");
	var mask_graphics_211 = new cjs.Graphics().p("AxiWhMAD/gvnIfGCmMgD/Avng");
	var mask_graphics_212 = new cjs.Graphics().p("AxnXiMAEJgxqIfGCnMgEJAxqg");
	var mask_graphics_213 = new cjs.Graphics().p("AxtYmMAEVgzxIfGCmMgEVAzxg");
	var mask_graphics_214 = new cjs.Graphics().p("AxzZqMAEgg15IfHCmMgEgA15g");
	var mask_graphics_215 = new cjs.Graphics().p("Ax5awMAEsg4FIfHCmMgEsA4Fg");
	var mask_graphics_216 = new cjs.Graphics().p("Ax/b4MAE4g6VIfHCmMgE4A6Vg");
	var mask_graphics_217 = new cjs.Graphics().p("AyFdAMAFEg8mIfHCnMgFEA8mg");
	var mask_graphics_218 = new cjs.Graphics().p("AyLeLMAFQg+7IfHCmMgFQA+7g");
	var mask_graphics_219 = new cjs.Graphics().p("AyRfWMAFdhBRIfGCmMgFdBBRg");
	var mask_graphics_220 = new cjs.Graphics().p("EgSYAgjMAFqhDrIfHCmMgFqBDrg");
	var mask_graphics_221 = new cjs.Graphics().p("EgSeAhyMAF3hGJIfGCmMgF3BGJg");
	var mask_graphics_222 = new cjs.Graphics().p("EgSlAjCMAGEhIpIfHCmMgGEBIpg");
	var mask_graphics_223 = new cjs.Graphics().p("EgSrAkTMAGRhLLIfGCmMgGRBLLg");
	var mask_graphics_224 = new cjs.Graphics().p("EgSyAlmMAGfhNxIfGCmMgGfBNxg");
	var mask_graphics_225 = new cjs.Graphics().p("EgS5Am6MAGthQZIfGCmMgGtBQZg");
	var mask_graphics_226 = new cjs.Graphics().p("EgTAAoQMAG7hTFIfGCmMgG7BTFg");
	var mask_graphics_227 = new cjs.Graphics().p("EgTIApnMAHKhVzIfHCmMgHKBVzg");
	var mask_graphics_228 = new cjs.Graphics().p("EgTPAq/MAHZhYjIfGCmMgHZBYjg");
	var mask_graphics_229 = new cjs.Graphics().p("EgTWAsZMAHnhbXIfGCmMgHnBbXg");
	var mask_graphics_230 = new cjs.Graphics().p("EgTeAt0MAH3heNIfGCmMgH3BeNg");
	var mask_graphics_231 = new cjs.Graphics().p("EgTmAvRMAIGhhHIfHCmMgIGBhHg");
	var mask_graphics_232 = new cjs.Graphics().p("EgTuAwvMAIWhkDIfHCmMgIWBkDg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(165).to({graphics:mask_graphics_165,x:24.7,y:137.2}).wait(1).to({graphics:mask_graphics_166,x:24.7,y:137.2}).wait(1).to({graphics:mask_graphics_167,x:24.7,y:137.2}).wait(1).to({graphics:mask_graphics_168,x:24.7,y:137.2}).wait(1).to({graphics:mask_graphics_169,x:24.8,y:137.2}).wait(1).to({graphics:mask_graphics_170,x:24.8,y:137.2}).wait(1).to({graphics:mask_graphics_171,x:24.9,y:137.1}).wait(1).to({graphics:mask_graphics_172,x:25,y:137.1}).wait(1).to({graphics:mask_graphics_173,x:25.1,y:137.1}).wait(1).to({graphics:mask_graphics_174,x:25.2,y:137.1}).wait(1).to({graphics:mask_graphics_175,x:25.3,y:137.1}).wait(1).to({graphics:mask_graphics_176,x:25.4,y:137.1}).wait(1).to({graphics:mask_graphics_177,x:25.5,y:137.1}).wait(1).to({graphics:mask_graphics_178,x:25.7,y:137.1}).wait(1).to({graphics:mask_graphics_179,x:25.8,y:137.1}).wait(1).to({graphics:mask_graphics_180,x:26,y:137.1}).wait(1).to({graphics:mask_graphics_181,x:26.2,y:137.1}).wait(1).to({graphics:mask_graphics_182,x:26.4,y:137.1}).wait(1).to({graphics:mask_graphics_183,x:26.6,y:137.1}).wait(1).to({graphics:mask_graphics_184,x:26.8,y:137.1}).wait(1).to({graphics:mask_graphics_185,x:27.1,y:137.1}).wait(1).to({graphics:mask_graphics_186,x:27.3,y:137.1}).wait(1).to({graphics:mask_graphics_187,x:27.5,y:137.1}).wait(1).to({graphics:mask_graphics_188,x:27.8,y:137.1}).wait(1).to({graphics:mask_graphics_189,x:28.1,y:137.1}).wait(1).to({graphics:mask_graphics_190,x:28.4,y:137}).wait(1).to({graphics:mask_graphics_191,x:28.7,y:137}).wait(1).to({graphics:mask_graphics_192,x:29,y:137}).wait(1).to({graphics:mask_graphics_193,x:29.3,y:137}).wait(1).to({graphics:mask_graphics_194,x:29.7,y:137}).wait(1).to({graphics:mask_graphics_195,x:30,y:137}).wait(1).to({graphics:mask_graphics_196,x:30.4,y:137}).wait(1).to({graphics:mask_graphics_197,x:30.7,y:137}).wait(1).to({graphics:mask_graphics_198,x:31.1,y:137}).wait(1).to({graphics:mask_graphics_199,x:31.5,y:137}).wait(1).to({graphics:mask_graphics_200,x:31.9,y:136.9}).wait(1).to({graphics:mask_graphics_201,x:32.3,y:136.9}).wait(1).to({graphics:mask_graphics_202,x:32.8,y:136.9}).wait(1).to({graphics:mask_graphics_203,x:33.2,y:136.9}).wait(1).to({graphics:mask_graphics_204,x:33.7,y:136.9}).wait(1).to({graphics:mask_graphics_205,x:34.1,y:136.9}).wait(1).to({graphics:mask_graphics_206,x:34.6,y:136.9}).wait(1).to({graphics:mask_graphics_207,x:35.1,y:136.9}).wait(1).to({graphics:mask_graphics_208,x:35.6,y:131.8}).wait(1).to({graphics:mask_graphics_209,x:36.1,y:125.7}).wait(1).to({graphics:mask_graphics_210,x:36.6,y:119.3}).wait(1).to({graphics:mask_graphics_211,x:37.2,y:112.9}).wait(1).to({graphics:mask_graphics_212,x:37.7,y:106.3}).wait(1).to({graphics:mask_graphics_213,x:38.3,y:99.5}).wait(1).to({graphics:mask_graphics_214,x:38.8,y:92.6}).wait(1).to({graphics:mask_graphics_215,x:39.4,y:85.6}).wait(1).to({graphics:mask_graphics_216,x:40,y:78.4}).wait(1).to({graphics:mask_graphics_217,x:40.6,y:71.1}).wait(1).to({graphics:mask_graphics_218,x:41.2,y:63.6}).wait(1).to({graphics:mask_graphics_219,x:41.9,y:56}).wait(1).to({graphics:mask_graphics_220,x:42.5,y:48.3}).wait(1).to({graphics:mask_graphics_221,x:43.2,y:40.4}).wait(1).to({graphics:mask_graphics_222,x:43.8,y:32.4}).wait(1).to({graphics:mask_graphics_223,x:44.5,y:24.2}).wait(1).to({graphics:mask_graphics_224,x:45.2,y:15.9}).wait(1).to({graphics:mask_graphics_225,x:45.9,y:7.4}).wait(1).to({graphics:mask_graphics_226,x:46.6,y:-1.2}).wait(1).to({graphics:mask_graphics_227,x:47.3,y:-9.9}).wait(1).to({graphics:mask_graphics_228,x:48.1,y:-18.8}).wait(1).to({graphics:mask_graphics_229,x:48.8,y:-27.8}).wait(1).to({graphics:mask_graphics_230,x:49.6,y:-37}).wait(1).to({graphics:mask_graphics_231,x:50.3,y:-46.3}).wait(1).to({graphics:mask_graphics_232,x:50.9,y:-51.9}).wait(1));

	// treads1
	this.instance_4 = new lib.carmiles_tread2();
	this.instance_4.setTransform(0.9,-28.6,1,1,0,0,0,33.5,298);
	this.instance_4.alpha = 0.602;
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(165).to({_off:false},0).wait(68));

	// maask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AvcTQIAHgnIeyFKIgHAng");
	var mask_1_graphics_1 = new cjs.Graphics().p("AvgTNIAOhRIezFKIgOBRg");
	var mask_1_graphics_2 = new cjs.Graphics().p("AvjTKIAUh6IezFKIgUB6g");
	var mask_1_graphics_3 = new cjs.Graphics().p("AvmTHIAbijIeyFKIgbCjg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AvqTEIAijLIezFKIgiDMg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AvtTCIApj0IeyFKIgpD0g");
	var mask_1_graphics_6 = new cjs.Graphics().p("AvwS/IAvkbIeyFKIgvEbg");
	var mask_1_graphics_7 = new cjs.Graphics().p("Av0S8IA2lCIezFKIg2FCg");
	var mask_1_graphics_8 = new cjs.Graphics().p("Av3S5IA8loIezFKIg8Fog");
	var mask_1_graphics_9 = new cjs.Graphics().p("Av6S2IBDmOIeyFKIhDGPg");
	var mask_1_graphics_10 = new cjs.Graphics().p("Av9S0IBJm1IeyFKIhJG1g");
	var mask_1_graphics_11 = new cjs.Graphics().p("AwASxIBPnaIeyFKIhPHag");
	var mask_1_graphics_12 = new cjs.Graphics().p("AwESuIBWn+IezFKIhWH+g");
	var mask_1_graphics_13 = new cjs.Graphics().p("AwHSsIBcokIezFLIhcIjg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AwKSpIBipHIezFKIhiJHg");
	var mask_1_graphics_15 = new cjs.Graphics().p("AwNSnIBoprIezFKIhoJrg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AwQSkIBuqOIezFKIhuKOg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AwSSiIBzqyIeyFLIhzKxg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AwVSfIB5rTIeyFKIh5LTg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AwYSdIB/r2IeyFKIh/L2g");
	var mask_1_graphics_20 = new cjs.Graphics().p("AwbSaICEsXIezFKIiEMXg");
	var mask_1_graphics_21 = new cjs.Graphics().p("AweSYICKs4IezFKIiKM4g");
	var mask_1_graphics_22 = new cjs.Graphics().p("AwgSVICPtYIeyFKIiPNZg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AwjSTICVt5IeyFKIiVN5g");
	var mask_1_graphics_24 = new cjs.Graphics().p("AwmSRICauZIezFKIiaOZg");
	var mask_1_graphics_25 = new cjs.Graphics().p("AwoSPICfu5IeyFKIifO5g");
	var mask_1_graphics_26 = new cjs.Graphics().p("AwrSMICkvXIezFKIilPXg");
	var mask_1_graphics_27 = new cjs.Graphics().p("AwuSKICqv2IezFKIiqP2g");
	var mask_1_graphics_28 = new cjs.Graphics().p("AwwSIICvwUIeyFKIivQUg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AwzSGIC0wyIezFKIi0Qyg");
	var mask_1_graphics_30 = new cjs.Graphics().p("Aw1SEIC5xQIeyFKIi5RQg");
	var mask_1_graphics_31 = new cjs.Graphics().p("Aw4SCIC+xtIezFKIi+Rtg");
	var mask_1_graphics_32 = new cjs.Graphics().p("Aw6SAIDCyHIezFIIjCSJg");
	var mask_1_graphics_33 = new cjs.Graphics().p("Aw8R+IDHyjIeyFIIjHSlg");
	var mask_1_graphics_34 = new cjs.Graphics().p("Aw/R8IDMy/IezFIIjMTBg");
	var mask_1_graphics_35 = new cjs.Graphics().p("AxBR6IDQzaIezFIIjQTcg");
	var mask_1_graphics_36 = new cjs.Graphics().p("AxDR4IDVz1IeyFIIjVT3g");
	var mask_1_graphics_37 = new cjs.Graphics().p("AxFR2IDZ0PIeyFIIjZURg");
	var mask_1_graphics_38 = new cjs.Graphics().p("AxHR0IDd0pIeyFIIjdUrg");
	var mask_1_graphics_39 = new cjs.Graphics().p("AxKRyIDi1CIezFIIjiVEg");
	var mask_1_graphics_40 = new cjs.Graphics().p("AxMRwIDm1bIezFIIjmVdg");
	var mask_1_graphics_41 = new cjs.Graphics().p("AxORvIDq11IezFIIjqV3g");
	var mask_1_graphics_42 = new cjs.Graphics().p("AxQRtIDu2NIezFIIjuWPg");
	var mask_1_graphics_43 = new cjs.Graphics().p("AxSRrIDy2kIezFIIjyWmg");
	var mask_1_graphics_44 = new cjs.Graphics().p("AxURpID227IezFKIj2W8g");
	var mask_1_graphics_45 = new cjs.Graphics().p("AxWRoID63TIezFKIj6XTg");
	var mask_1_graphics_46 = new cjs.Graphics().p("AxYRmID+3pIezFKIj+Xpg");
	var mask_1_graphics_47 = new cjs.Graphics().p("AxZRlIEB4AIeyFKIkBYAg");
	var mask_1_graphics_48 = new cjs.Graphics().p("AxbRjIEF4VIeyFKIkFYVg");
	var mask_1_graphics_49 = new cjs.Graphics().p("AxdRhIEI4qIezFKIkIYrg");
	var mask_1_graphics_50 = new cjs.Graphics().p("AxfRgIEM5AIezFKIkMZAg");
	var mask_1_graphics_51 = new cjs.Graphics().p("AxgReIEP5UIezFLIkQZUg");
	var mask_1_graphics_52 = new cjs.Graphics().p("AxiRdIET5oIeyFKIkTZog");
	var mask_1_graphics_53 = new cjs.Graphics().p("AxkRcIEW58IezFKIkWZ8g");
	var mask_1_graphics_54 = new cjs.Graphics().p("AxlRaIEZ6PIeyFKIkZaPg");
	var mask_1_graphics_55 = new cjs.Graphics().p("AxnRZIEc6iIezFKIkcaig");
	var mask_1_graphics_56 = new cjs.Graphics().p("AxpRYIEg61IezFLIkga0g");
	var mask_1_graphics_57 = new cjs.Graphics().p("AxqRWIEi7GIezFKIkibGg");
	var mask_1_graphics_58 = new cjs.Graphics().p("AxsRVIEm7YIezFLIkmbXg");
	var mask_1_graphics_59 = new cjs.Graphics().p("AxtRUIEo7pIezFKIkobpg");
	var mask_1_graphics_60 = new cjs.Graphics().p("AxuRTIEr76IeyFKIkrb6g");
	var mask_1_graphics_61 = new cjs.Graphics().p("AxwRRIEu8JIezFKIkucKg");
	var mask_1_graphics_62 = new cjs.Graphics().p("AxxRQIEw8ZIezFKIkwcZg");
	var mask_1_graphics_63 = new cjs.Graphics().p("AxyRPIEz8pIeyFKIkzcpg");
	var mask_1_graphics_64 = new cjs.Graphics().p("Ax0ROIE284IezFKIk2c4g");
	var mask_1_graphics_65 = new cjs.Graphics().p("Ax1RNIE49GIezFKIk4dGg");
	var mask_1_graphics_66 = new cjs.Graphics().p("Ax2RMIE69VIezFLIk6dUg");
	var mask_1_graphics_67 = new cjs.Graphics().p("Ax3RLIE99iIeyFKIk9dig");
	var mask_1_graphics_68 = new cjs.Graphics().p("Ax4RKIE/9vIeyFKIk/dvg");
	var mask_1_graphics_69 = new cjs.Graphics().p("Ax5RJIFB98IeyFKIlBd8g");
	var mask_1_graphics_70 = new cjs.Graphics().p("Ax6RIIFD+JIeyFLIlDeIg");
	var mask_1_graphics_71 = new cjs.Graphics().p("Ax7RHIFF+VIeyFLIlFeVg");
	var mask_1_graphics_72 = new cjs.Graphics().p("Ax8RHIFH+hIeyFKIlHehg");
	var mask_1_graphics_73 = new cjs.Graphics().p("Ax9RGIFJ+sIeyFKIlJesg");
	var mask_1_graphics_74 = new cjs.Graphics().p("Ax+RFIFL+3IeyFLIlLe2g");
	var mask_1_graphics_75 = new cjs.Graphics().p("Ax/REIFM/BIezFLIlMfAg");
	var mask_1_graphics_76 = new cjs.Graphics().p("AyAREIFO/LIezFKIlOfLg");
	var mask_1_graphics_77 = new cjs.Graphics().p("AyBRDIFQ/UIezFKIlQfUg");
	var mask_1_graphics_78 = new cjs.Graphics().p("AyBRCIFR/dIeyFKIlRfdg");
	var mask_1_graphics_79 = new cjs.Graphics().p("AyCRCIFT/mIeyFKIlTfmg");
	var mask_1_graphics_80 = new cjs.Graphics().p("AyDRBIFU/uIezFKIlUfug");
	var mask_1_graphics_81 = new cjs.Graphics().p("AyDRAIFV/2IeyFLIlVf2g");
	var mask_1_graphics_82 = new cjs.Graphics().p("AyERAIFX/+IeyFLIlXf9g");
	var mask_1_graphics_83 = new cjs.Graphics().p("AyFQ/MAFYggEIezFKMgFYAgFg");
	var mask_1_graphics_84 = new cjs.Graphics().p("AyFQ/MAFZggLIeyFKMgFZAgLg");
	var mask_1_graphics_85 = new cjs.Graphics().p("AyGQ+MAFaggRIezFLMgFaAgRg");
	var mask_1_graphics_86 = new cjs.Graphics().p("AyGQ+MAFbggXIeyFKMgFbAgXg");
	var mask_1_graphics_87 = new cjs.Graphics().p("AyHQ+MAFcggcIezFKMgFcAgcg");
	var mask_1_graphics_88 = new cjs.Graphics().p("AyHQ9MAFcgghIezFLMgFcAggg");
	var mask_1_graphics_89 = new cjs.Graphics().p("AyHQ9MAFdgglIeyFKMgFdAglg");
	var mask_1_graphics_90 = new cjs.Graphics().p("AyIQ9MAFeggqIezFLMgFeAgpg");
	var mask_1_graphics_91 = new cjs.Graphics().p("AyIQ8MAFeggsIezFKMgFeAgtg");
	var mask_1_graphics_92 = new cjs.Graphics().p("AyIQ8MAFfggwIeyFKMgFfAgwg");
	var mask_1_graphics_93 = new cjs.Graphics().p("AyJQ8MAFgggzIezFKMgFgAgzg");
	var mask_1_graphics_94 = new cjs.Graphics().p("AyJQ8MAFggg1IezFKMgFgAg1g");
	var mask_1_graphics_95 = new cjs.Graphics().p("AyJQ8MAFggg3IezFKMgFgAg3g");
	var mask_1_graphics_96 = new cjs.Graphics().p("AyJQ8MAFggg5IezFKMgFgAg5g");
	var mask_1_graphics_97 = new cjs.Graphics().p("AyJQ8MAFhgg6IeyFKMgFhAg6g");
	var mask_1_graphics_98 = new cjs.Graphics().p("AyJQ7MAFhgg6IeyFKMgFhAg7g");
	var mask_1_graphics_99 = new cjs.Graphics().p("AyJQ+MAFhgg6IeyFKMgFhAg6g");
	var mask_1_graphics_154 = new cjs.Graphics().p("AyeQ+MAGLgk3IeyFLMgGLAk3g");
	var mask_1_graphics_155 = new cjs.Graphics().p("AyfQ+MAGMgk4IezFKMgGMAk5g");
	var mask_1_graphics_156 = new cjs.Graphics().p("AyfQ/MAGMgk/IezFKMgGMAk/g");
	var mask_1_graphics_157 = new cjs.Graphics().p("AygQ/MAGOglIIezFKMgGOAlIg");
	var mask_1_graphics_158 = new cjs.Graphics().p("AyhQ/MAGQglUIezFKMgGQAlUg");
	var mask_1_graphics_159 = new cjs.Graphics().p("AyiQ/MAGTgllIeyFLMgGTAlkg");
	var mask_1_graphics_160 = new cjs.Graphics().p("AykQ/MAGWgl4IezFKMgGWAl4g");
	var mask_1_graphics_161 = new cjs.Graphics().p("AymQ/MAGagmQIezFKMgGaAmQg");
	var mask_1_graphics_162 = new cjs.Graphics().p("AyoQ/MAGegmrIezFKMgGeAmrg");
	var mask_1_graphics_163 = new cjs.Graphics().p("AyrRAMAGkgnJIezFKMgGkAnJg");
	var mask_1_graphics_164 = new cjs.Graphics().p("AytRRMAGpgnrIeyFKMgGpAnrg");
	var mask_1_graphics_165 = new cjs.Graphics().p("AyxRkMAGwgoRIezFKMgGwAoRg");
	var mask_1_graphics_166 = new cjs.Graphics().p("Ay0R5MAG3go7IeyFKMgG3Ao7g");
	var mask_1_graphics_167 = new cjs.Graphics().p("Ay4SPMAG+gpnIezFKMgG+Apng");
	var mask_1_graphics_168 = new cjs.Graphics().p("Ay8SoMAHGgqZIezFKMgHGAqZg");
	var mask_1_graphics_169 = new cjs.Graphics().p("AzATCMAHPgrNIeyFKMgHPArNg");
	var mask_1_graphics_170 = new cjs.Graphics().p("AzFTeMAHYgsFIezFKMgHYAsFg");
	var mask_1_graphics_171 = new cjs.Graphics().p("AzKT7MAHigs/IezFKMgHiAs/g");
	var mask_1_graphics_172 = new cjs.Graphics().p("AzPUbMAHtgt/IeyFKMgHtAt/g");
	var mask_1_graphics_173 = new cjs.Graphics().p("AzVU8MAH4gvBIezFKMgH4AvBg");
	var mask_1_graphics_174 = new cjs.Graphics().p("AzbVfMAIEgwHIezFKMgIEAwHg");
	var mask_1_graphics_175 = new cjs.Graphics().p("AzhWEMAIQgxRIezFKMgIQAxRg");
	var mask_1_graphics_176 = new cjs.Graphics().p("AznWrMAIdgyfIeyFKMgIdAyfg");
	var mask_1_graphics_177 = new cjs.Graphics().p("AzuXTMAIrgzwIeyFLMgIrAzwg");
	var mask_1_graphics_178 = new cjs.Graphics().p("Az1X+MAI5g1FIeyFKMgI5A1Fg");
	var mask_1_graphics_179 = new cjs.Graphics().p("Az9YqMAJIg2dIezFKMgJIA2dg");
	var mask_1_graphics_180 = new cjs.Graphics().p("A0EZYMAJXg35IeyFKMgJXA35g");
	var mask_1_graphics_181 = new cjs.Graphics().p("A0MaIMAJng5ZIeyFKMgJnA5Zg");
	var mask_1_graphics_182 = new cjs.Graphics().p("A0Va5MAJ4g67IezFKMgJ4A67g");
	var mask_1_graphics_183 = new cjs.Graphics().p("A0dbtMAKJg8jIeyFLMgKJA8ig");
	var mask_1_graphics_184 = new cjs.Graphics().p("A0mciMAKag+NIezFKMgKaA+Ng");
	var mask_1_graphics_185 = new cjs.Graphics().p("A0vdZMAKtg/7IeyFKMgKtA/7g");
	var mask_1_graphics_186 = new cjs.Graphics().p("A05eRMALAhBrIezFKMgLABBrg");
	var mask_1_graphics_187 = new cjs.Graphics().p("A1DfMMALUhDhIezFKMgLUBDhg");
	var mask_1_graphics_188 = new cjs.Graphics().p("EgVNAgIMALohFZIezFKMgLoBFZg");
	var mask_1_graphics_189 = new cjs.Graphics().p("EgVXAhGMAL8hHWIezFLMgL8BHWg");
	var mask_1_graphics_190 = new cjs.Graphics().p("EgViAiGMAMShJVIezFKMgMSBJVg");
	var mask_1_graphics_191 = new cjs.Graphics().p("EgVtAjIMAMohLZIezFKMgMoBLZg");
	var mask_1_graphics_192 = new cjs.Graphics().p("EgV4AkMMAM+hNhIezFKMgM+BNhg");
	var mask_1_graphics_193 = new cjs.Graphics().p("EgWEAlRMANWhPrIezFKMgNWBPrg");
	var mask_1_graphics_194 = new cjs.Graphics().p("EgWQAmYMANuhR5IezFKMgNuBR5g");
	var mask_1_graphics_195 = new cjs.Graphics().p("EgWcAnhMAOGhULIezFKMgOGBULg");
	var mask_1_graphics_196 = new cjs.Graphics().p("EgWoAosMAOfhWhIeyFKMgOfBWhg");
	var mask_1_graphics_197 = new cjs.Graphics().p("EgW1Ap4MAO5hY6IeyFLMgO5BY6g");
	var mask_1_graphics_198 = new cjs.Graphics().p("EgXCArHMAPThbXIeyFKMgPTBbXg");
	var mask_1_graphics_199 = new cjs.Graphics().p("EgXQAsXMAPuhd3IezFKMgPuBd3g");
	var mask_1_graphics_200 = new cjs.Graphics().p("EgXdAtpMAQJhgbIeyFKMgQJBgbg");
	var mask_1_graphics_201 = new cjs.Graphics().p("EgXrAu9MAQlhjDIeyFKMgQlBjDg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:-35.2,y:156.3}).wait(1).to({graphics:mask_1_graphics_1,x:-34.9,y:156}).wait(1).to({graphics:mask_1_graphics_2,x:-34.5,y:155.7}).wait(1).to({graphics:mask_1_graphics_3,x:-34.2,y:155.4}).wait(1).to({graphics:mask_1_graphics_4,x:-33.8,y:155.1}).wait(1).to({graphics:mask_1_graphics_5,x:-33.5,y:154.8}).wait(1).to({graphics:mask_1_graphics_6,x:-33.2,y:154.5}).wait(1).to({graphics:mask_1_graphics_7,x:-32.8,y:154.3}).wait(1).to({graphics:mask_1_graphics_8,x:-32.5,y:154}).wait(1).to({graphics:mask_1_graphics_9,x:-32.2,y:153.7}).wait(1).to({graphics:mask_1_graphics_10,x:-31.9,y:153.4}).wait(1).to({graphics:mask_1_graphics_11,x:-31.6,y:153.2}).wait(1).to({graphics:mask_1_graphics_12,x:-31.3,y:152.9}).wait(1).to({graphics:mask_1_graphics_13,x:-31,y:152.6}).wait(1).to({graphics:mask_1_graphics_14,x:-30.7,y:152.4}).wait(1).to({graphics:mask_1_graphics_15,x:-30.4,y:152.1}).wait(1).to({graphics:mask_1_graphics_16,x:-30.1,y:151.9}).wait(1).to({graphics:mask_1_graphics_17,x:-29.8,y:151.6}).wait(1).to({graphics:mask_1_graphics_18,x:-29.5,y:151.4}).wait(1).to({graphics:mask_1_graphics_19,x:-29.2,y:151.1}).wait(1).to({graphics:mask_1_graphics_20,x:-28.9,y:150.9}).wait(1).to({graphics:mask_1_graphics_21,x:-28.6,y:150.6}).wait(1).to({graphics:mask_1_graphics_22,x:-28.4,y:150.4}).wait(1).to({graphics:mask_1_graphics_23,x:-28.1,y:150.2}).wait(1).to({graphics:mask_1_graphics_24,x:-27.8,y:149.9}).wait(1).to({graphics:mask_1_graphics_25,x:-27.6,y:149.7}).wait(1).to({graphics:mask_1_graphics_26,x:-27.3,y:149.5}).wait(1).to({graphics:mask_1_graphics_27,x:-27,y:149.3}).wait(1).to({graphics:mask_1_graphics_28,x:-26.8,y:149.1}).wait(1).to({graphics:mask_1_graphics_29,x:-26.5,y:148.8}).wait(1).to({graphics:mask_1_graphics_30,x:-26.3,y:148.6}).wait(1).to({graphics:mask_1_graphics_31,x:-26.1,y:148.4}).wait(1).to({graphics:mask_1_graphics_32,x:-25.8,y:148.2}).wait(1).to({graphics:mask_1_graphics_33,x:-25.6,y:148}).wait(1).to({graphics:mask_1_graphics_34,x:-25.3,y:147.8}).wait(1).to({graphics:mask_1_graphics_35,x:-25.1,y:147.6}).wait(1).to({graphics:mask_1_graphics_36,x:-24.9,y:147.4}).wait(1).to({graphics:mask_1_graphics_37,x:-24.7,y:147.2}).wait(1).to({graphics:mask_1_graphics_38,x:-24.5,y:147.1}).wait(1).to({graphics:mask_1_graphics_39,x:-24.2,y:146.9}).wait(1).to({graphics:mask_1_graphics_40,x:-24,y:146.7}).wait(1).to({graphics:mask_1_graphics_41,x:-23.8,y:146.5}).wait(1).to({graphics:mask_1_graphics_42,x:-23.6,y:146.3}).wait(1).to({graphics:mask_1_graphics_43,x:-23.4,y:146.2}).wait(1).to({graphics:mask_1_graphics_44,x:-23.2,y:146}).wait(1).to({graphics:mask_1_graphics_45,x:-23,y:145.8}).wait(1).to({graphics:mask_1_graphics_46,x:-22.8,y:145.7}).wait(1).to({graphics:mask_1_graphics_47,x:-22.7,y:145.5}).wait(1).to({graphics:mask_1_graphics_48,x:-22.5,y:145.4}).wait(1).to({graphics:mask_1_graphics_49,x:-22.3,y:145.2}).wait(1).to({graphics:mask_1_graphics_50,x:-22.1,y:145.1}).wait(1).to({graphics:mask_1_graphics_51,x:-21.9,y:144.9}).wait(1).to({graphics:mask_1_graphics_52,x:-21.8,y:144.8}).wait(1).to({graphics:mask_1_graphics_53,x:-21.6,y:144.6}).wait(1).to({graphics:mask_1_graphics_54,x:-21.5,y:144.5}).wait(1).to({graphics:mask_1_graphics_55,x:-21.3,y:144.4}).wait(1).to({graphics:mask_1_graphics_56,x:-21.1,y:144.2}).wait(1).to({graphics:mask_1_graphics_57,x:-21,y:144.1}).wait(1).to({graphics:mask_1_graphics_58,x:-20.8,y:144}).wait(1).to({graphics:mask_1_graphics_59,x:-20.7,y:143.8}).wait(1).to({graphics:mask_1_graphics_60,x:-20.6,y:143.7}).wait(1).to({graphics:mask_1_graphics_61,x:-20.4,y:143.6}).wait(1).to({graphics:mask_1_graphics_62,x:-20.3,y:143.5}).wait(1).to({graphics:mask_1_graphics_63,x:-20.2,y:143.4}).wait(1).to({graphics:mask_1_graphics_64,x:-20,y:143.3}).wait(1).to({graphics:mask_1_graphics_65,x:-19.9,y:143.2}).wait(1).to({graphics:mask_1_graphics_66,x:-19.8,y:143.1}).wait(1).to({graphics:mask_1_graphics_67,x:-19.7,y:143}).wait(1).to({graphics:mask_1_graphics_68,x:-19.6,y:142.9}).wait(1).to({graphics:mask_1_graphics_69,x:-19.5,y:142.8}).wait(1).to({graphics:mask_1_graphics_70,x:-19.4,y:142.7}).wait(1).to({graphics:mask_1_graphics_71,x:-19.3,y:142.6}).wait(1).to({graphics:mask_1_graphics_72,x:-19.2,y:142.5}).wait(1).to({graphics:mask_1_graphics_73,x:-19.1,y:142.4}).wait(1).to({graphics:mask_1_graphics_74,x:-19,y:142.4}).wait(1).to({graphics:mask_1_graphics_75,x:-18.9,y:142.3}).wait(1).to({graphics:mask_1_graphics_76,x:-18.8,y:142.2}).wait(1).to({graphics:mask_1_graphics_77,x:-18.7,y:142.1}).wait(1).to({graphics:mask_1_graphics_78,x:-18.7,y:142.1}).wait(1).to({graphics:mask_1_graphics_79,x:-18.6,y:142}).wait(1).to({graphics:mask_1_graphics_80,x:-18.5,y:142}).wait(1).to({graphics:mask_1_graphics_81,x:-18.4,y:141.9}).wait(1).to({graphics:mask_1_graphics_82,x:-18.4,y:141.9}).wait(1).to({graphics:mask_1_graphics_83,x:-18.3,y:141.8}).wait(1).to({graphics:mask_1_graphics_84,x:-18.3,y:141.8}).wait(1).to({graphics:mask_1_graphics_85,x:-18.2,y:141.7}).wait(1).to({graphics:mask_1_graphics_86,x:-18.2,y:141.7}).wait(1).to({graphics:mask_1_graphics_87,x:-18.1,y:141.6}).wait(1).to({graphics:mask_1_graphics_88,x:-18.1,y:141.6}).wait(1).to({graphics:mask_1_graphics_89,x:-18.1,y:141.6}).wait(1).to({graphics:mask_1_graphics_90,x:-18,y:141.5}).wait(1).to({graphics:mask_1_graphics_91,x:-18,y:141.5}).wait(1).to({graphics:mask_1_graphics_92,x:-18,y:141.5}).wait(1).to({graphics:mask_1_graphics_93,x:-17.9,y:141.5}).wait(1).to({graphics:mask_1_graphics_94,x:-17.9,y:141.5}).wait(1).to({graphics:mask_1_graphics_95,x:-17.9,y:141.4}).wait(1).to({graphics:mask_1_graphics_96,x:-17.9,y:141.4}).wait(1).to({graphics:mask_1_graphics_97,x:-17.9,y:141.4}).wait(1).to({graphics:mask_1_graphics_98,x:-17.9,y:141.4}).wait(1).to({graphics:mask_1_graphics_99,x:-18,y:141.7}).wait(55).to({graphics:mask_1_graphics_154,x:-15.9,y:141.7}).wait(1).to({graphics:mask_1_graphics_155,x:-15.9,y:141.7}).wait(1).to({graphics:mask_1_graphics_156,x:-15.9,y:141.7}).wait(1).to({graphics:mask_1_graphics_157,x:-15.8,y:141.7}).wait(1).to({graphics:mask_1_graphics_158,x:-15.7,y:141.7}).wait(1).to({graphics:mask_1_graphics_159,x:-15.6,y:141.7}).wait(1).to({graphics:mask_1_graphics_160,x:-15.4,y:141.7}).wait(1).to({graphics:mask_1_graphics_161,x:-15.2,y:141.7}).wait(1).to({graphics:mask_1_graphics_162,x:-15,y:141.7}).wait(1).to({graphics:mask_1_graphics_163,x:-14.7,y:141.6}).wait(1).to({graphics:mask_1_graphics_164,x:-14.4,y:139.9}).wait(1).to({graphics:mask_1_graphics_165,x:-14.1,y:138}).wait(1).to({graphics:mask_1_graphics_166,x:-13.8,y:136}).wait(1).to({graphics:mask_1_graphics_167,x:-13.4,y:133.8}).wait(1).to({graphics:mask_1_graphics_168,x:-13,y:131.3}).wait(1).to({graphics:mask_1_graphics_169,x:-12.6,y:128.7}).wait(1).to({graphics:mask_1_graphics_170,x:-12.1,y:126}).wait(1).to({graphics:mask_1_graphics_171,x:-11.6,y:123}).wait(1).to({graphics:mask_1_graphics_172,x:-11.1,y:119.9}).wait(1).to({graphics:mask_1_graphics_173,x:-10.5,y:116.6}).wait(1).to({graphics:mask_1_graphics_174,x:-10,y:113.1}).wait(1).to({graphics:mask_1_graphics_175,x:-9.4,y:109.4}).wait(1).to({graphics:mask_1_graphics_176,x:-8.7,y:105.6}).wait(1).to({graphics:mask_1_graphics_177,x:-8,y:101.6}).wait(1).to({graphics:mask_1_graphics_178,x:-7.3,y:97.4}).wait(1).to({graphics:mask_1_graphics_179,x:-6.6,y:93}).wait(1).to({graphics:mask_1_graphics_180,x:-5.9,y:88.4}).wait(1).to({graphics:mask_1_graphics_181,x:-5.1,y:83.7}).wait(1).to({graphics:mask_1_graphics_182,x:-4.2,y:78.8}).wait(1).to({graphics:mask_1_graphics_183,x:-3.4,y:73.7}).wait(1).to({graphics:mask_1_graphics_184,x:-2.5,y:68.4}).wait(1).to({graphics:mask_1_graphics_185,x:-1.6,y:63}).wait(1).to({graphics:mask_1_graphics_186,x:-0.7,y:57.3}).wait(1).to({graphics:mask_1_graphics_187,x:0.3,y:51.5}).wait(1).to({graphics:mask_1_graphics_188,x:1.3,y:45.5}).wait(1).to({graphics:mask_1_graphics_189,x:2.3,y:39.4}).wait(1).to({graphics:mask_1_graphics_190,x:3.4,y:33}).wait(1).to({graphics:mask_1_graphics_191,x:4.5,y:26.5}).wait(1).to({graphics:mask_1_graphics_192,x:5.6,y:19.8}).wait(1).to({graphics:mask_1_graphics_193,x:6.7,y:12.9}).wait(1).to({graphics:mask_1_graphics_194,x:7.9,y:5.8}).wait(1).to({graphics:mask_1_graphics_195,x:9.1,y:-1.4}).wait(1).to({graphics:mask_1_graphics_196,x:10.4,y:-8.8}).wait(1).to({graphics:mask_1_graphics_197,x:11.6,y:-16.4}).wait(1).to({graphics:mask_1_graphics_198,x:12.9,y:-24.2}).wait(1).to({graphics:mask_1_graphics_199,x:14.3,y:-32.2}).wait(1).to({graphics:mask_1_graphics_200,x:15.6,y:-40.3}).wait(1).to({graphics:mask_1_graphics_201,x:17.1,y:-48.7}).wait(32));

	// treads1
	this.instance_5 = new lib.carmiles_tread1();
	this.instance_5.setTransform(-32.5,-27.5,1,1,0,0,0,58.5,296);
	this.instance_5.alpha = 0.602;

	this.instance_5.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(233));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152.5,275.6,216.3,357.3);


(lib.leavesflying1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{off:0,"on":1});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(16));

	// Layer 2
	this.instance = new lib.leaf1("synched",0);
	this.instance.setTransform(37.7,18.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({guide:{path:[37.7,18.7,5.3,13.2,-7.6,67.1]}},13).to({_off:true},1).wait(1));

	// Layer 3
	this.instance_1 = new lib.leaf2("synched",0);
	this.instance_1.setTransform(38.9,18.8,1.29,1.29,20);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({guide:{path:[38.9,18.9,27,17,17.9,29.6,8.7,42.1,2.3,69.1]}},12).wait(1));

	// Layer 1
	this.instance_2 = new lib.leaf2("synched",0);
	this.instance_2.setTransform(41.6,19.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({guide:{path:[41.5,19.5,31.6,15.5,23.4,27.7,15.1,40,8.5,68.4]}},13).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.factgraphics = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{mcEggs:0,mcNewspapers:1,mcMilks:2,mcCarMiles:3,mcBananas:4,mcSodas:5,mcShowers:6,mcPotatoes:7,mcDiapers:8,mcSlices:9});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
		this.stop();
	}
	this.frame_1 = function() {
		/* stop();*/
		this.stop();
	}
	this.frame_2 = function() {
		/* stop();*/
		this.stop();
	}
	this.frame_3 = function() {
		/* stop();*/
		this.stop();
	}
	this.frame_4 = function() {
		/* stop();*/
		this.stop();
	}
	this.frame_5 = function() {
		/* stop();*/
		this.stop();
	}
	this.frame_6 = function() {
		/* stop();*/
		this.stop();
	}
	this.frame_7 = function() {
		/* stop();*/
		this.stop();
	}
	this.frame_8 = function() {
		/* stop();*/
		this.stop();
	}
	this.frame_9 = function() {
		/* stop();*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsVSeMAAAgk7IYrAAMAAAAk7g");
	mask.setTransform(50.4,67.2);

	// illustrations
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4C012").s().p("Aj5FXQhvhEgeh+QgOg8AAhKQAAhVAUhKQA1jDCmgoQC3gtCLA2QCGA0BDCEQAiBEAKBXQAJBbgXBTQgbBehBA9QhJBFhzAVQhHAMg8AAQiFAAhdg5g");
	this.shape.setTransform(65.6,73.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3F3DC").s().p("ACPNHQhogMhOglQhmgvh7AQQgnAFg/APQhIARgYAFQhtAThIgmQhdgzhNijQh9kHgsicQgwinAdhqQAOg2A8hlQA7hjBMhlQBShsBIhFQBShOAzgJQBOgNA6ASIAqAMQAZAFAcgFQAdgFAPgTQAFgHAPggQAMgZAQgLQAXgRAsgCQArgCA0AaQAZAOBGAwQBEAvAtAWQBFAjBGAJQCmAXBlA5QBvA/ArBuQATAxArBHIBSB9QAxBNAZA0QAiBEAIA6QATCVgzCRQg/CyiaBvQimB4jtAcQg5AGg2AAQg0AAgygGg");
	this.shape_1.setTransform(85,72.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A6A6A6").s().p("AhaA7QgpgTgCggQgCgdAmgZQAmgYA3gEQA2gEApAUQApATACAfQACAegmAYQgmAZg3ADIgQABQgtAAgigQg");
	this.shape_2.setTransform(0.5,6.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E6E6E6").s().p("Ag2k5IBmgJIAHJ9IhEAIg");
	this.shape_3.setTransform(2.4,67.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AgdBMQh5gSg5haIgJgvQBbBzBnAAQA9gBAzgWQAtgRBKg2QADANAFAeQhZBfhzAAQgUAAgWgEg");
	this.shape_4.setTransform(3.2,35.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AgiBIQh6gSgthXIgEgpQBKBqBngBQA7AAA1gbQAkgPBSg9QAEANAAAtQhfBZhrAAQgSAAgUgDg");
	this.shape_5.setTransform(4.4,46.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AglBLQh5gRgkhVIgGgyQBCBwBoAAQA8gBAxgWQAogQBMg4QADANADAfQhbBehuAAQgRAAgUgDg");
	this.shape_6.setTransform(5.3,56.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCCCCC").s().p("AgoBHQh7gNgYhYIgEgqQA2BnBnAAQA8AAAxgYQAkgPBOg5QAEANgBAkQhXBZhwAAQgQAAgRgCg");
	this.shape_7.setTransform(6.2,68.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCCCCC").s().p("AgnBGQh5gWgZhQIgFgpQA2BnBngBQA9AAAvgVQAmgPBLg3QAEANgDAiQhSBZhoAAQgUAAgWgEg");
	this.shape_8.setTransform(6.6,79);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCCCCC").s().p("AgnBHQh5gKgZhbIgEgqQA2BnBnAAQBBgBAqgRQAsgPBCg1QAFAOAAAcQg7BWiDAAQgTAAgUgCg");
	this.shape_9.setTransform(7.4,89.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AhODSQgGjpgIh+QB3AMA5hJQABDWAIBzQhXBchGAAIgOgBg");
	this.shape_10.setTransform(18,117.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CCCCCC").s().p("Ai8gIQgDhUACggQCxDgDEjgQAFApACBcQhhB0hcAAQhhAAhdiFg");
	this.shape_11.setTransform(9.2,150.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CCCCCC").s().p("AidBqQhHgjgEg4QgEg1BCgsQBCgsBhgHQBegGBHAiQBHAjAEA4QAEA2hCAsQhCAshgAGIgcABQhOAAg8gdg");
	this.shape_12.setTransform(0.7,6.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E6E6E6").s().p("Ah9LVQAEw6h8lDQgKgjgCgJQgGgnAMgfQAkhfC+gbQEqgqg+ECQAhU3AOBmQAMBKg1A0QgyAxhTAJIgeACQijAAgQjGg");
	this.shape_13.setTransform(2.9,85.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CCCCCC").s().p("AgHLiQkX5IBxgKQBtgLB7BTQA+ApBWBTQh6NvBkKMIg/hKQABAHgCBmQgGhQh6hAg");
	this.shape_14.setTransform(22.6,83);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A6A6A6").s().p("AhUBDQgrgPgFgfQgFgdAkgcQAjgcA4gJQA1gJAqAQQArAPAFAfQAFAdgjAcQgkAdg4AIQgRADgSAAQghAAgbgKg");
	this.shape_15.setTransform(62.2,165.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E6E6E6").s().p("Ahlk3IBGgIICFJwIhmAPg");
	this.shape_16.setTransform(52.2,105.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CCCCCC").s().p("AjOA7QAjhkBzgtQCEg1CBBZQACAegBAOQhUglgwgJQg3gKg8AOQhkAWhACFg");
	this.shape_17.setTransform(59.7,138.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CCCCCC").s().p("AjJA7QAZhfBygtQB5gwCGBQQAKAsgBALQhdgmgogKQg6gOg5ANQhlAXgxB4g");
	this.shape_18.setTransform(58.4,127.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CCCCCC").s().p("AjBA0QAPhbBzgsQB8gwCBBVQAFAfgBAOQhWgmgrgJQg1gKg8ANQhkAXgnB8g");
	this.shape_19.setTransform(56.7,117);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CCCCCC").s().p("Ai7A2QADhcB1goQB/gtB4BQQAJAjgBALQhZgkgngJQg1gMg7AOQhkAWgeBxg");
	this.shape_20.setTransform(55.3,105.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CCCCCC").s().p("Ai5A4QAGhUBxgwQB5g0B6BVQAKAhgBAMQhVgkgpgIQgygKg8AOQhlAWgeBxg");
	this.shape_21.setTransform(53.3,94.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CCCCCC").s().p("Ai3A3QAChfB1glQCbgyBYBTQAFAcAAAOQhNglgvgHQgtgHg/AOQhlAXgeBwg");
	this.shape_22.setTransform(51.4,84.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("Ag7CrQgUh9gvjlQBKgbByBOQARByAvDRQhHg7hyAng");
	this.shape_23.setTransform(55,52.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CCCCCC").s().p("AjCAgQB2klD4C/QATBcAEApQjxivh8ECQgIgfgQhTg");
	this.shape_24.setTransform(40,24.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CCCCCC").s().p("AiTB4QhKgdgJg3QgJg1A+gyQA+gyBggPQBdgPBLAcQBKAdAIA3QAJA1g+AyQg9AyhgAPQggAFgeAAQg6AAgwgSg");
	this.shape_25.setTransform(62.5,165.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E6E6E6").s().p("Ah5NKQgTgcgCgnQgBgJACglQAxlXj1whQgejWDBgYQBTgKA7AlQA9AnAGBLQAIBnELUgQB1DukuAZQgfADgbAAQiNAAgvhHg");
	this.shape_26.setTransform(52.4,86.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CCCCCC").s().p("AkHrUQBshagNhQQAZBkABAHIAthWQAvKTE6NAQhCBkgzA2QhoBthrAOIgCAAQhwAAhV5Tg");
	this.shape_27.setTransform(76,86.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#A6A6A6").s().p("AgKBKQg4gIgjgcQgkgcAFgdQAFgfArgQQAqgQA1AJQA4AJAkAcQAjAcgFAdQgFAfgrAQQgaAJggAAQgTAAgSgDg");
	this.shape_28.setTransform(103.2,-4.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E6E6E6").s().p("AhlE4IBlp3IBmAPIiFJwg");
	this.shape_29.setTransform(93.2,55.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CCCCCC").s().p("Ag4BXQhzgtgjhkIABgwQBACFBkAWQA8AOA3gKQAwgJBUglQABAOgCAeQhRA4hSAAQgwAAgygUg");
	this.shape_30.setTransform(100.6,21.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CCCCCC").s().p("Ag+BSQhygtgZhfIAFgpQAxB4BlAXQA5ANA6gOQAogKBdgmQABALgKAsQhUAyhPAAQguAAgugSg");
	this.shape_31.setTransform(99.3,32.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CCCCCC").s().p("Ag/BUQhzgsgPhbIAGgyQAnB8BkAXQA8ANA1gLQArgIBWgmQABAOgFAfQhTA3hQAAQgsAAgugSg");
	this.shape_32.setTransform(97.6,43.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#CCCCCC").s().p("AhDBPQh1gogDhcIAFgpQAeBxBkAWQA7AOA1gMQAngJBZgkQABALgJAjQhNAzhRAAQgrAAgugQg");
	this.shape_33.setTransform(96.2,54.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#CCCCCC").s().p("AhCBNQhxgwgGhUIAEgpQAeBxBlAWQA8AOAygKQApgIBVgkQABAMgKAhQhMA1hMAAQgsAAgvgUg");
	this.shape_34.setTransform(94.2,65.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#CCCCCC").s().p("AhABOQh1glgChfIAEgpQAeBwBlAXQA/AOAtgHQAvgHBNglQAAAOgFAcQg3AzhSAAQgvAAg7gSg");
	this.shape_35.setTransform(92.4,76.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#999999").s().p("Ah+C4QAvjlAUh9QByAnBHg7QguDRgSByQhUA6g/AAQgWAAgTgHg");
	this.shape_36.setTransform(96,107.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#CCCCCC").s().p("AjCgfQAQhTAIgfQB8ECDxivQgEApgTBcQhjBLhLAAQh5AAhHixg");
	this.shape_37.setTransform(81,135.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#CCCCCC").s().p("AgTCFQhggPg+gyQg+gyAJg1QAJg4BKgcQBKgdBeAQQBgAPA9AyQA+AygJA1QgIA4hKAcQgxASg5AAQgfAAgfgFg");
	this.shape_38.setTransform(103.5,-5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E6E6E6").s().p("AiuOOQjBgYAejWQD1whgxlXQgCglABgJQACgnATgcQA4hUC+AQQEuAZh1DuQkLUggIBnQgGBLg9AnQguAeg+AAQgRAAgRgDg");
	this.shape_39.setTransform(93.3,73.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#CCCCCC").s().p("AkHLVQBW5iBxAPQBrAOBoBtQAzA2BCBkQk6NAgvKTIgthWQgBAHgZBkQANhQhshag");
	this.shape_40.setTransform(116.9,74.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#C2C2A8").s().p("AjsFEIAAskIHZB9IAANEg");
	this.shape_41.setTransform(20.8,123.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#C8C8B9").s().p("Ag4iBIAkgIIAABqIABAAIAjhzIAkgIIgnB0IAsCnIglAIIgbh+IAAAAIgNAjIAABlIgkAIg");
	this.shape_42.setTransform(99.4,90.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#C8C8B9").s().p("AgsiJIAjgIIAADxIA2gNIAAArIhZAUg");
	this.shape_43.setTransform(87.9,93.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#C8C8B9").s().p("AgQiJIAigIIAAEbIgiAIg");
	this.shape_44.setTransform(78.5,95.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#C8C8B9").s().p("AhHh9IAvgLIAYCfIAAAAIAZiqIAvgKIAAEbIgfAGIAAjcIgBAAIggDkIgPAEIghjVIAAAAIAADdIgfAGg");
	this.shape_45.setTransform(66.4,97.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F7F7F2").s().p("AklgfIAAhaIJKCZIAABag");
	this.shape_46.setTransform(20.9,67);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#C8C8B9").s().p("AklAWIJLiEIAABaIpLCEg");
	this.shape_47.setTransform(79.7,68.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#C8C8B9").s().p("AklAVIJLjXIAACuIpLDXg");
	this.shape_48.setTransform(79.7,186.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#C8C8B9").s().p("AklBLIJLjXIAABCIpLDWg");
	this.shape_49.setTransform(79.7,201.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F7F7F2").s().p("AkkhSIAAhBIJJDmIAABBg");
	this.shape_50.setTransform(20.8,200.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F7F7F2").s().p("AkkgbIAAivIJJDmIAACvg");
	this.shape_51.setTransform(20.8,185.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#DCE3D1").s().p("AklgfIJLhcIAACcIpLBbg");
	this.shape_52.setTransform(51.5,-3.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#CCD4C2").s().p("AitCeIEvlBIApBGIADAIIlDD5g");
	this.shape_53.setTransform(8.9,25.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#B5B59C").s().p("AklBTIEvlAIEcHbg");
	this.shape_54.setTransform(20.8,32.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#D7D7BD").s().p("AklMSIAB8LIJKCbIAAdYg");
	this.shape_55.setTransform(20.8,142.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#A3A38A").s().p("AkltoIJLiHIgBcGIpJDZg");
	this.shape_56.setTransform(79.6,143.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#A3A38A").s().p("Amyi/IJMhbIEZGvIpKCGg");
	this.shape_57.setTransform(65.5,28);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#333333").s().p("AopK4QBQANBNAAQC3AACohEQCghDB8h4QB9h5BEidQBHihAAiwQAAieg5iUQg3iOhnh0QB+B1BFCbQBHCfAACwQAACrhECdQhDCYh4B1Qh6B1idBAQigBCiyAAQh3AAh0geg");
	this.shape_58.setTransform(101.8,88.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#666666").s().p("AnhHGQhJigABiwQgBiqBFidQBDiXB5h2QB5h1Cdg/QCghDCyAAQB6AABxAfQhMgOhRAAQi3AAioBFQifBCh9B5Qh9B4hFCcQhGCiAACvQAACfA6CUQA2COBnB0Qh9h1hFibg");
	this.shape_59.setTransform(39.1,63.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#4C4C4C").s().p("Ah0B3QgTgfBhh1QBgh2AkAKQAKADAQAPQiZBeg8CkQgSgMgFgIg");
	this.shape_60.setTransform(31,45.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#4C4C4C").s().p("AAeCkQgkgGgjiUQgjiRAfgVQAIgGAVgBQgDAaAAAcQAACQBPB7QgTAGgKAAIgBAAg");
	this.shape_61.setTransform(20.8,86.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#4C4C4C").s().p("AgWApQiNhAADgkQABgKALgSQCCB5CzAQQgHAYgJAHQgHAHgQAAQgrAAhlgvg");
	this.shape_62.setTransform(48.9,119.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#4C4C4C").s().p("AiPBWQgIgGgJgZQCygWB9h9QARAYABALQADAliMBAQhmAxgqAAQgQAAgHgHg");
	this.shape_63.setTransform(92.2,119.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#4C4C4C").s().p("Ag/CcQBLh3AAiLQAAgbgEgjQAdACALAGQAfAVghCSQgjCUgiAGIgDAAQgNAAgYgJg");
	this.shape_64.setTransform(119.6,85.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#4C4C4C").s().p("Ah6hzQATgUAKgEQAlgKBgB1QBjB0gTAgQgGAKgaAOQg7ijiXhcg");
	this.shape_65.setTransform(109.1,45.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#4C4C4C").s().p("AgDAFQhWAAhRAaQgDgWAEgJQAOghCbAAQCcAAAOAhQAEAJgEAZQhVgdhYAAg");
	this.shape_66.setTransform(70.2,25.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#333333").s().p("AgJAIQgKgIAMgKQAKgIAHALQAKAIgLAJQgFAEgEAAQgFAAgEgGg");
	this.shape_67.setTransform(87.2,41.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#333333").s().p("AgBANQgPgEAEgLQADgNAMADQANAEgDALQgCAKgKAAIgCAAg");
	this.shape_68.setTransform(109,67.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#333333").s().p("AgLAGQgGgLANgGQAKgGAGANQAGAKgMAGQgEACgCAAQgHAAgEgIg");
	this.shape_69.setTransform(101,100.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#333333").s().p("AgFAMQgMgFAGgLQAGgNAKAHQANAFgGALQgEAIgHAAQgBAAgFgCg");
	this.shape_70.setTransform(69.5,115.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#333333").s().p("AgMADQgDgMAOgDQAMgDACANQAEAMgOADIgDAAQgJAAgDgKg");
	this.shape_71.setTransform(38.1,100.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#333333").s().p("AgHAKQgLgIAJgJQAIgKAJAIQALAIgIAJQgFAGgGAAQgCAAgFgEg");
	this.shape_72.setTransform(30.5,67.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#333333").s().p("AgNAEQgDgEAEgFQADgGAGgCQAMgFAFAPQAFAMgPAEIgFACQgIAAgEgLg");
	this.shape_73.setTransform(87,71.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#666666").s().p("AgMAZQgLgGgDgLQgEgJAFgKQAGgLALgEQAKgDALAFQALAGADALQAEAJgGALQgFAKgMAEIgIABQgFAAgHgDg");
	this.shape_74.setTransform(87,71.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#808080").s().p("AgWAsQgTgJgHgUQgGgRAJgTQAKgSAVgHQASgGATAJQAUAKAGATQAHASgLASQgJATgUAGQgIADgIAAQgLAAgLgGg");
	this.shape_75.setTransform(87,71.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#333333").s().p("AgLAJQgJgKAMgJQALgKAJANQAJAKgMAJQgGADgDAAQgGAAgFgGg");
	this.shape_76.setTransform(80.2,90.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#666666").s().p("AgDAbQgMgCgHgJQgIgJADgKQABgMAKgHQAKgHAKACQAMACAHAKQAIAJgDAKQgBALgKAIQgIAFgIAAIgEgBg");
	this.shape_77.setTransform(80.2,90.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#808080").s().p("AgGAxQgVgDgNgRQgNgQAEgTQADgUARgMQASgNASADQAWAEAMARQANAQgEATQgDAUgRAMQgOAKgQAAIgGgBg");
	this.shape_78.setTransform(80.2,90.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#333333").s().p("AgIALQgMgIAJgKQAJgMAKAJQANAIgJAKQgFAHgHAAQgCAAgGgEg");
	this.shape_79.setTransform(59.1,90.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#666666").s().p("AgQAWQgKgGgCgMQgCgKAHgJQAIgKAMgCQAKgCAKAIQAKAHABALQADAKgIAJQgHAKgMABIgEABQgIAAgIgGg");
	this.shape_80.setTransform(59.1,90.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#808080").s().p("AgdAoQgRgMgEgVQgDgSANgRQAMgRAVgDQAUgDARAMQARANADAUQAEASgNARQgMARgWADIgHABQgQAAgNgKg");
	this.shape_81.setTransform(59.1,90.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#333333").s().p("AgDANQgOgEAEgMQAFgOAMAEQAPAFgFAMQgEALgJAAIgEgCg");
	this.shape_82.setTransform(52.6,71);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#666666").s().p("AgIAaQgLgDgGgLQgFgKADgJQAEgLALgGQALgFAJADQAMAEAGALQAFAKgEAJQgEALgKAGQgHADgGAAQgDAAgFgCg");
	this.shape_83.setTransform(52.6,71);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#808080").s().p("AgOAvQgUgGgKgTQgLgTAHgRQAHgUATgJQAUgKASAHQAUAGAJATQAKASgGASQgHAUgTAJQgLAGgLAAQgGAAgJgDg");
	this.shape_84.setTransform(52.6,71);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#333333").s().p("AgOAAQAAgOAOABQAPgBAAAOQAAAPgPgBQgOABAAgPg");
	this.shape_85.setTransform(70.2,58.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#666666").s().p("AgTAUQgJgJAAgLQAAgKAJgJQAIgIALAAQAMAAAIAIQAJAJAAAKQAAALgJAJQgIAIgMAAQgLAAgIgIg");
	this.shape_86.setTransform(70.2,58.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#808080").s().p("AgjAjQgPgOAAgVQAAgTAPgPQAPgOAUAAQAVAAAPAOQAPAPAAATQAAAVgPAOQgPAPgVAAQgUAAgPgPg");
	this.shape_87.setTransform(70.2,58.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#333333").s().p("AgOAAQAAgOAOABQAPgBAAAOQAAAPgPgBQgOABAAgPg");
	this.shape_88.setTransform(70.2,58.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#666666").s().p("AgTAUQgJgJAAgLQAAgKAJgJQAIgIALAAQAMAAAIAIQAJAJAAAKQAAALgJAJQgIAIgMAAQgLAAgIgIg");
	this.shape_89.setTransform(70.2,58.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#808080").s().p("AgjAjQgPgOAAgVQAAgTAPgPQAPgOAUAAQAVAAAPAOQAPAPAAATQAAAVgPAOQgPAPgVAAQgUAAgPgPg");
	this.shape_90.setTransform(70.2,58.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#333333").s().p("AhECdIhghxQgTgcA2hXQAWgjAXgbQAZgcANgEQAkgLBhB2QBiB0gSAfQgHAMghARQghARgoANQg5ATggAAQgXAAgKgKg");
	this.shape_91.setTransform(104.4,47.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#333333").s().p("AAJCZQgggPgkgWQhZg4AEghIAhiNQAKgfBogPQApgFAlABQAmAAALAIQAfAVghCSQgjCUgkAGIgEAAQgPAAgdgMg");
	this.shape_92.setTransform(111.4,85.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#333333").s().p("AiFCVQgLgKgJgiQgKgjgEgpQgLhkAegRICIhBQAegMBNBHQAfAdAWAcQAWAdABAMQADAkiMBDQhmAwgqAAQgQAAgHgGg");
	this.shape_93.setTransform(91.2,112.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#333333").s().p("AgfBsQiNhCACgkQABgMAWgdQAWgdAfgcQBMhIAeAMICIA/QAeARgKBkQgEApgIAiQgKAjgKAKQgIAHgQAAQgrAAhkgvg");
	this.shape_94.setTransform(49.9,113);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#333333").s().p("Ag2ClQglgGgkiTQgiiSAfgVQALgHAlgCQAlgBAqAFQBoANAKAgIAiCNQAFAhhZA4QgjAXggAOQgeANgOAAIgEAAg");
	this.shape_95.setTransform(29.3,86.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#333333").s().p("Ag0CVQgpgOgggQQghgRgHgLQgTggBhh1QBgh2AkALQANAEAZAbQAYAbAWAjQA3BWgUAcIheByQgKALgZAAQggAAg3gSg");
	this.shape_96.setTransform(35.9,48.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#333333").s().p("AhKB/QgigDglhgQgPglgHgjQgHgkAFgMQAOghCbgBQCcABAOAhQAFAMgHAkQgHAjgPAlQglBggiADg");
	this.shape_97.setTransform(70.2,34.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#333333").s().p("AgNAAQAAgMANAAQANAAAAAMQAAANgNAAQgNAAAAgNg");
	this.shape_98.setTransform(52.6,40.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#333333").s().p("AhFBDQgdgcAAgnQAAgnAdgcQAdgcAoAAQApAAAdAcQAdAcAAAnQAAAngdAcQgdAdgpAAQgoAAgdgdg");
	this.shape_99.setTransform(70.3,75.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#B3B3B3").s().p("AjhIFQhngrhRhNQhQhOgshlQguhoAAhyQAAhxAuhpQAshkBQhOQBQhOBogqQBtgsB0AAQB1AABtAsQBoAqBQBOQBQBOAsBkQAuBpAABxQAAByguBoQgsBlhQBOQhQBNhoArQhtAsh1AAQh0AAhtgsg");
	this.shape_100.setTransform(70.2,75.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#808080").s().p("AjvImQhvgthVhUQhWhSguhrQgxhvAAh5QAAh5AxhuQAuhsBWhSQBVhTBvgtQBzgvB8AAQB9AABzAvQBvAtBVBTQBWBSAuBsQAxBuAAB5QAAB5gxBvQguBrhWBSQhVBUhvAtQhzAvh9AAQh8AAhzgvg");
	this.shape_101.setTransform(70.2,75.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#404040").s().p("AlgMqQijhDh+h5Qh9h6hFieQhIikAAiyQAAiyBIijQBFieB9h6QB+h5CjhDQCphEC3AAQC4AACpBEQCjBDB+B5QB9B6BFCeQBICjAACyQAACyhICkQhFCeh9B6Qh+B5ijBDQipBEi4AAQi3AAiphEg");
	this.shape_102.setTransform(70.2,75.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#F0E170").s().p("AoQNMQgMgZA1grQAwgoBYgrQBZgrBdgeQBlggBJgGQBBgEBkg0QBpg3AQgsQAIgUgBhIQgBgqgFh6QgNkNAIiDQAFhOAPh8QAQh/ABgTQAEg/C5jbIATAJQhwRAgTBRQhtGssoBxQgIgHgEgJg");
	this.shape_103.setTransform(51.8,53.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#98A905").s().p("Ag4A1Qg9gXhVAKQgZhlBXggQAWAaAwAOQB4AmBMgOIBLAPIAIAOIgtAWIASAKIgoAWIgYAkIgxgMIgXARQgrgTg7gXg");
	this.shape_104.setTransform(200,96.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#E3D463").s().p("AlXAhQCxiYC/geQDBgfB+C2IgiAaQhIiRjKAOQjIAPhjDyg");
	this.shape_105.setTransform(152.1,87.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#E3D463").s().p("AvJNDQgMgZA1grQAwgoBYgrQBZgrBdgeQBlggBLgGQBBgEBkg0QBpg3AQgsQAIgUgBhIQgBgqgFh6QgNkNAIiDQAFhOAPh8QAQh/ABgTQAEg/C3jbIAxAWQBBDggDAyQgCAXATFlQATFjgCAkQgDAgAeBWQAjBkA0BTQBCBqBNAuQBeA5BmgkQDnhSBIC2QjcAvlpgpQlogpgQm5QhREVhFBgQgYAhgkAQQgdANgsAFIhSAGQgzADgiAJQgWAGhoAhQhnAihAAQQhjAZg7AAQhFAAgPgig");
	this.shape_106.setTransform(95.9,54.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#F6EDA9").s().p("AkRArIAVhLQFtjXChDwIg2CNQlpiGiEArg");
	this.shape_107.setTransform(157.6,86.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#F0E170").s().p("AAsAZQgvgShXgPQhUgRgUgIQgkgOAVgVQBegWBbgBQCMgDBfAwQAbCBhPAJQgmgohNgbg");
	this.shape_108.setTransform(64.1,91.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#E3D463").s().p("AAgAxQgugQhhgTQhRgOgRgLQgbgQArgdQCAhVD0AeQBeDZh1AOQgogrhUgcg");
	this.shape_109.setTransform(64.4,88.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#F0E170").s().p("AkVG8QgGgNAbgXQAagVAugXQBrg0BPgGQAigCA1gcQA3gcAJgXQAGgQgGh3QgHiMAFhGQADgpAHhBIAJhNQADghBhhzIAJAEQg6I8gKArQg6DhmoA7g");
	this.shape_110.setTransform(-6.8,58.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#98A905").s().p("AgdAcQgggNgtAGQgNg0AugRQALANAZAIQA/ATAogGIAnAHIAEAHIgXALIAJAGIgVAMIgMATIgagIIgMAKIg1gWg");
	this.shape_111.setTransform(71.2,81.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#E3D463").s().p("Ai0ARQBdhPBkgQQBmgQBCBfIgSAOQgmhMhqAIQhoAHg1B/g");
	this.shape_112.setTransform(46,76.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#E3D463").s().p("An9G3QgGgNAbgWQAagVAugXQBrg0BRgGQAigDA1gbQA3gdAJgXQAGgPgGh4QgHiMAFhFQADgpAHhBIAJhOQADggBfh0IAZAMQAjB2gCAaQgBAMAKC8QAKC5gBAUQgBARAPAtQASA1AcArQBPB+BjgjQB6grAmBgQh0AYi+gVQi+gWgIjnQgpCRglAyQgWAfgwAFIgrADQgbACgSAEIhCAVQg2ASgiAIQgzANgfAAQglAAgIgSg");
	this.shape_113.setTransform(16.4,59.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#F6EDA9").s().p("AiPAWIALgmQC/hxBVB+IgcBJQi+hGhFAWg");
	this.shape_114.setTransform(48.9,76.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#F0E170").s().p("AgugDQgtgJgKgEQgTgHALgMQCGgfBWArQAPBDgqAFQgggihigSg");
	this.shape_115.setTransform(-0.3,78.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#E3D463").s().p("AAQAaQgXgJgzgKQgqgHgJgFQgPgIAXgQQBDgsCAAPQAxByg9AHQgVgWgtgPg");
	this.shape_116.setTransform(-0.1,77.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#999999").s().p("AgEAPIAAgdQAAgGAEAAQAFAAAAAGIAAAdQAAAGgFAAQgEAAAAgGg");
	this.shape_117.setTransform(106.9,148.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#999999").s().p("AgEAPIAAgdQAAgGAEAAQAFAAAAAGIAAAdQAAAGgFAAQgEAAAAgGg");
	this.shape_118.setTransform(91.7,148.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#999999").s().p("AgiAjQgPgPAAgUQAAgUAPgOQAOgPAUAAQAUAAAPAPQAPAOAAAUQAAAUgPAPQgPAPgUAAQgUAAgOgPg");
	this.shape_119.setTransform(99.5,150.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#E6E6E6").s().p("AgCAXQgGAAAAgGIAAghQAAgGAGAAIAFAAQAGAAAAAGIAAAhQAAAGgGAAg");
	this.shape_120.setTransform(107.4,148.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#E6E6E6").s().p("AgCAXQgGAAAAgGIAAghQAAgGAGAAIAFAAQAGAAAAAGIAAAhQAAAGgGAAg");
	this.shape_121.setTransform(92.1,148.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#E6E6E6").s().p("AgqArQgSgSAAgZQAAgYASgSQASgSAYAAQAZAAASASQASASAAAYQAAAZgSASQgSASgZAAQgYAAgSgSg");
	this.shape_122.setTransform(100,150.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#E6E6E6").s().p("AgQARQgHgIAAgJQAAgJAHgHQAHgHAJAAQAJAAAIAHQAHAHAAAJQAAAJgHAIQgIAHgJAAQgJAAgHgHg");
	this.shape_123.setTransform(99.7,163.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#999999").s().p("AguAqIgBg8QAAgKAHgHQAHgGAJAAIAxAAQAJAAAHAGQAHAIAAAJIAAA8g");
	this.shape_124.setTransform(99.7,161.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#CCCCCC").s().p("AgPCYQg3gZgHgQQgEgJACgpIABgvIgOhGQgLhBARgKQAkgUAyAAQA0AAAjAUQARAKgLBBIgOBGIABAvQACApgEAJQgHAQg3AZg");
	this.shape_125.setTransform(99.2,157.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#E6E6E6").ss(0.7,1,1).p("ACVivQggBPArA5QAaAhAAAmQAAA8g3AqQg2AqhNAAQhMAAg2gqQg3gqAAg8QAAgmAaghQArg5gghP");
	this.shape_126.setTransform(99.2,173.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#4C4C4C").s().p("AhxBYQgwgkAAg0QAAgyAwglQAwglBBAAQBDAAAvAlQAwAlgBAyQABA0gwAkQgvAlhDAAQhBAAgwglg");
	this.shape_127.setTransform(99.2,176.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#BFBFBF").s().p("AjgDhQhehdAAiEQAAiDBehdQBdheCDAAQCEAABdBeQBeBdAACDQAACEheBdQhdBeiEAAQiDAAhdheg");
	this.shape_128.setTransform(99.2,164.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#999999").s().p("AiIFFQhAgagxgxQgxgxgahAQgchCAAhHQAAhHAchBQAahAAxgxQBohnCRAAQCSAABoBnQBnBoAACRQAACShnBoQhoBniSAAQhGAAhCgcg");
	this.shape_129.setTransform(99.2,164.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#CCCCCC").s().p("AiMFQQhCgcgygzQgzgygchCQgchDAAhKQAAhIAchEQAchCAzgyQAygzBCgcQBEgcBIAAQBKAABEAcQBBAcAyAzQAzAyAcBCQAcBEAABIQAABKgcBDQgcBCgzAyQgyAzhBAcQhEAchKAAQhIAAhEgcg");
	this.shape_130.setTransform(99.2,164.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#999999").s().p("AgEAPIAAgdQAAgGAEAAQAFAAAAAGIAAAdQAAAGgFAAQgEAAAAgGg");
	this.shape_131.setTransform(106.9,75.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#999999").s().p("AgEAPIAAgdQAAgGAEAAQAFAAAAAGIAAAdQAAAGgFAAQgEAAAAgGg");
	this.shape_132.setTransform(91.7,75.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#999999").s().p("AgiAjQgPgPAAgUQAAgUAPgOQAOgPAUAAQAUAAAPAPQAPAOAAAUQAAAUgPAPQgPAPgUAAQgUAAgOgPg");
	this.shape_133.setTransform(99.5,77.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#E6E6E6").s().p("AgCAXQgGAAAAgGIAAghQAAgGAGAAIAFAAQAGAAAAAGIAAAhQAAAGgGAAg");
	this.shape_134.setTransform(107.4,75.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#E6E6E6").s().p("AgCAXQgGAAAAgGIAAghQAAgGAGAAIAFAAQAGAAAAAGIAAAhQAAAGgGAAg");
	this.shape_135.setTransform(92.1,75.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#E6E6E6").s().p("AgqArQgSgSAAgZQAAgYASgSQASgSAYAAQAZAAASASQASASAAAYQAAAZgSASQgSASgZAAQgYAAgSgSg");
	this.shape_136.setTransform(100,77.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#E6E6E6").s().p("AgQARQgHgIAAgJQAAgJAHgHQAHgHAJAAQAJAAAIAHQAHAHAAAJQAAAJgHAIQgIAHgJAAQgJAAgHgHg");
	this.shape_137.setTransform(99.7,90.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#999999").s().p("AguArIgBg9QAAgKAHgHQAHgGAJgBIAxAAQAJABAHAGQAHAIAAAJIAAA9g");
	this.shape_138.setTransform(99.7,88.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#CCCCCC").s().p("AgPCYQg3gZgHgQQgEgJACgpIABgvIgOhGQgLhBARgKQAkgUAyAAQA0AAAjAUQARAKgLBBIgOBGIABAvQACApgEAJQgHAQg3AZg");
	this.shape_139.setTransform(99.2,84.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#E6E6E6").ss(0.7,1,1).p("ACVivQggBPArA5QAaAhAAAmQAAA8g3AqQg2AqhNAAQhMAAg2gqQg3gqAAg8QAAgmAaghQArg5gghP");
	this.shape_140.setTransform(99.2,100.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#4C4C4C").s().p("AhxBYQgwglAAgzQAAgzAwgkQAwglBBAAQBDAAAvAlQAwAkgBAzQABAzgwAlQgvAlhDAAQhBAAgwglg");
	this.shape_141.setTransform(99.2,103.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#BFBFBF").s().p("AjgDhQhehdAAiEQAAiDBehdQBdheCDAAQCEAABdBeQBeBdAACDQAACEheBdQhdBeiEAAQiDAAhdheg");
	this.shape_142.setTransform(99.2,91.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#999999").s().p("AiIFFQhAgagxgxQgxgxgahAQgchCAAhHQAAhHAchBQAahAAxgxQBohnCRAAQCSAABoBnQBnBoAACRQAACShnBoQhoBniSAAQhGAAhCgcg");
	this.shape_143.setTransform(99.2,91.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#CCCCCC").s().p("AiMFQQhCgdgygxQgzgzgchBQgchEAAhKQAAhJAchEQAchBAzgyQAygyBCgcQBEgdBIAAQBKAABEAdQBBAcAyAyQAzAyAcBBQAcBEAABJQAABKgcBEQgcBBgzAzQgyAxhBAdQhEAchKAAQhIAAhEgcg");
	this.shape_144.setTransform(99.2,91.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#999999").s().p("AgEAPIAAgeQAAgFAEAAQAFAAAAAFIAAAeQAAAGgFAAQgEAAAAgGg");
	this.shape_145.setTransform(106.9,2.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#999999").s().p("AgEAPIAAgeQAAgFAEAAQAFAAAAAFIAAAeQAAAGgFAAQgEAAAAgGg");
	this.shape_146.setTransform(91.7,2.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#999999").s().p("AgiAjQgPgPAAgUQAAgTAPgPQAOgPAUAAQAUAAAPAPQAPAPAAATQAAAUgPAPQgPAPgUAAQgUAAgOgPg");
	this.shape_147.setTransform(99.5,4.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#E6E6E6").s().p("AgCAXQgGAAAAgGIAAghQAAgGAGAAIAFAAQAGAAAAAGIAAAhQAAAGgGAAg");
	this.shape_148.setTransform(107.4,2.7);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#E6E6E6").s().p("AgCAXQgGAAAAgGIAAghQAAgGAGAAIAFAAQAGAAAAAGIAAAhQAAAGgGAAg");
	this.shape_149.setTransform(92.1,2.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#E6E6E6").s().p("AgqArQgSgSAAgZQAAgYASgSQASgSAYAAQAZAAASASQASASAAAYQAAAZgSASQgSASgZAAQgYAAgSgSg");
	this.shape_150.setTransform(100,4.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#E6E6E6").s().p("AgQARQgHgIAAgJQAAgJAHgHQAHgHAJAAQAJAAAIAHQAHAHAAAJQAAAJgHAIQgIAHgJAAQgJAAgHgHg");
	this.shape_151.setTransform(99.7,17.3);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#999999").s().p("AguArIgBg9QAAgKAHgHQAHgGAJgBIAxAAQAJABAHAGQAHAIAAAJIAAA9g");
	this.shape_152.setTransform(99.7,15.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#CCCCCC").s().p("AgPCYQg3gZgHgQQgEgJACgpIABgvIgOhGQgLhBARgKQAkgUAyAAQA0AAAjAUQARAKgLBBIgOBGIABAvQACApgEAJQgHAQg3AZg");
	this.shape_153.setTransform(99.2,11.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#E6E6E6").ss(0.7,1,1).p("ACVivQggBPArA5QAaAhAAAmQAAA8g3AqQg2AqhNAAQhMAAg2gqQg3gqAAg8QAAgmAaghQArg5gghP");
	this.shape_154.setTransform(99.2,27.6);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#4C4C4C").s().p("AhxBYQgwglAAgzQAAgyAwglQAwglBBAAQBDAAAvAlQAwAlgBAyQABAzgwAlQgvAlhDAAQhBAAgwglg");
	this.shape_155.setTransform(99.2,30.8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#BFBFBF").s().p("AjgDhQhehdAAiEQAAiDBehdQBdheCDAAQCEAABdBeQBeBdAACDQAACEheBdQhdBeiEAAQiDAAhdheg");
	this.shape_156.setTransform(99.2,18.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#999999").s().p("AiIFFQhAgagxgxQgxgxgahAQgchCAAhHQAAhHAchBQAahAAxgxQBohnCRAAQCSAABoBnQBnBoAACRQAACShnBoQhoBniSAAQhGAAhCgcg");
	this.shape_157.setTransform(99.2,18.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#CCCCCC").s().p("AiMFPQhCgcgygxQgzgzgchBQgchEAAhKQAAhIAchFQAchBAzgzQAygxBCgcQBEgdBIAAQBKAABEAdQBBAcAyAxQAzAzAcBBQAcBFAABIQAABKgcBEQgcBBgzAzQgyAxhBAcQhEAdhKAAQhIAAhEgdg");
	this.shape_158.setTransform(99.2,18.6);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#999999").s().p("AgEAPIAAgdQAAgGAEAAQAFAAAAAGIAAAdQAAAGgFAAQgEAAAAgGg");
	this.shape_159.setTransform(33.9,148.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#999999").s().p("AgEAPIAAgdQAAgGAEAAQAFAAAAAGIAAAdQAAAGgFAAQgEAAAAgGg");
	this.shape_160.setTransform(18.7,148.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#999999").s().p("AgiAjQgPgPAAgUQAAgUAPgOQAOgPAUAAQAUAAAPAPQAPAOAAAUQAAAUgPAPQgPAPgUAAQgUAAgOgPg");
	this.shape_161.setTransform(26.5,150.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#E6E6E6").s().p("AgCAXQgGAAAAgGIAAghQAAgGAGAAIAFAAQAGAAAAAGIAAAhQAAAGgGAAg");
	this.shape_162.setTransform(34.4,148.7);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#E6E6E6").s().p("AgCAXQgGAAAAgGIAAghQAAgGAGAAIAFAAQAGAAAAAGIAAAhQAAAGgGAAg");
	this.shape_163.setTransform(19.1,148.7);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#E6E6E6").s().p("AgqArQgSgSAAgZQAAgYASgSQASgSAYAAQAZAAASASQASASAAAYQAAAZgSASQgSASgZAAQgYAAgSgSg");
	this.shape_164.setTransform(27,150.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#E6E6E6").s().p("AgQARQgHgIAAgJQAAgJAHgHQAHgHAJAAQAJAAAIAHQAHAHAAAJQAAAJgHAIQgIAHgJAAQgJAAgHgHg");
	this.shape_165.setTransform(26.7,163.3);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#999999").s().p("AguAqIgBg8QAAgKAHgHQAHgGAJAAIAxAAQAKAAAGAGQAHAIAAAJIAAA8g");
	this.shape_166.setTransform(26.7,161.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#CCCCCC").s().p("AgPCYQg3gZgHgQQgEgJACgpIABgvIgOhGQgLhBARgKQAkgUAyAAQA0AAAjAUQARAKgLBBIgOBGIABAvQACApgEAJQgHAQg3AZg");
	this.shape_167.setTransform(26.2,157.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#E6E6E6").ss(0.7,1,1).p("ACVivQggBPArA5QAaAhAAAmQAAA8g3AqQg2AqhNAAQhMAAg2gqQg3gqAAg8QAAgmAaghQArg5gghP");
	this.shape_168.setTransform(26.2,173.6);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#4C4C4C").s().p("AhxBYQgwgkAAg0QAAgyAwglQAvglBCAAQBDAAAvAlQAwAlgBAyQABA0gwAkQgvAlhDAAQhCAAgvglg");
	this.shape_169.setTransform(26.2,176.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#BFBFBF").s().p("AjgDhQhehdAAiEQAAiDBehdQBdheCDAAQCEAABdBeQBeBdAACDQAACEheBdQhdBeiEAAQiDAAhdheg");
	this.shape_170.setTransform(26.2,164.6);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#999999").s().p("AiIFFQhAgagxgxQgxgxgahAQgchCAAhHQAAhHAchBQAahAAxgxQAxgxBAgbQBCgbBGAAQCSAABoBnQAxAxAaBAQAcBBAABHQAABHgcBCQgaBAgxAxQhoBniSAAQhGAAhCgcg");
	this.shape_171.setTransform(26.2,164.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#CCCCCC").s().p("AiMFQQhCgcgygzQgzgygchCQgchDAAhKQAAhIAchEQAchCAzgyQAygzBCgcQBEgcBIAAQBKAABEAcQBBAcAyAzQBrBrAACVQAABKgcBDQgcBCgzAyQgyAzhBAcQhEAchKAAQhIAAhEgcg");
	this.shape_172.setTransform(26.2,164.6);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#999999").s().p("AgEAPIAAgdQAAgGAEAAQAFAAAAAGIAAAdQAAAGgFAAQgEAAAAgGg");
	this.shape_173.setTransform(33.9,75.9);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#999999").s().p("AgEAPIAAgdQAAgGAEAAQAFAAAAAGIAAAdQAAAGgFAAQgEAAAAgGg");
	this.shape_174.setTransform(18.7,75.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#999999").s().p("AgiAjQgPgPAAgUQAAgUAPgOQAOgPAUAAQAUAAAPAPQAPAOAAAUQAAAUgPAPQgPAPgUAAQgUAAgOgPg");
	this.shape_175.setTransform(26.5,77.1);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#E6E6E6").s().p("AgCAXQgGAAAAgGIAAghQAAgGAGAAIAFAAQAGAAAAAGIAAAhQAAAGgGAAg");
	this.shape_176.setTransform(34.4,75.7);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#E6E6E6").s().p("AgCAXQgGAAAAgGIAAghQAAgGAGAAIAFAAQAGAAAAAGIAAAhQAAAGgGAAg");
	this.shape_177.setTransform(19.1,75.7);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#E6E6E6").s().p("AgqArQgSgSAAgZQAAgYASgSQASgSAYAAQAZAAASASQASASAAAYQAAAZgSASQgSASgZAAQgYAAgSgSg");
	this.shape_178.setTransform(27,77.1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#E6E6E6").s().p("AgQARQgHgIAAgJQAAgJAHgHQAHgHAJAAQAJAAAIAHQAHAHAAAJQAAAJgHAIQgIAHgJAAQgJAAgHgHg");
	this.shape_179.setTransform(26.7,90.3);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#999999").s().p("AguArIgBg9QAAgKAHgHQAHgGAJgBIAxAAQAKABAGAGQAHAIAAAJIAAA9g");
	this.shape_180.setTransform(26.7,88.9);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#CCCCCC").s().p("AgPCYQg3gZgHgQQgEgJACgpIABgvIgOhGQgLhBARgKQAkgUAyAAQA0AAAjAUQARAKgLBBIgOBGIABAvQACApgEAJQgHAQg3AZg");
	this.shape_181.setTransform(26.2,84.5);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#E6E6E6").ss(0.7,1,1).p("ACVivQggBPArA5QAaAhAAAmQAAA8g3AqQg2AqhNAAQhMAAg2gqQg3gqAAg8QAAgmAaghQArg5gghP");
	this.shape_182.setTransform(26.2,100.6);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#4C4C4C").s().p("AhxBYQgwglAAgzQAAgzAwgkQAvglBCAAQBDAAAvAlQAwAkgBAzQABAzgwAlQgvAlhDAAQhCAAgvglg");
	this.shape_183.setTransform(26.2,103.8);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#BFBFBF").s().p("AjgDhQhehdAAiEQAAiDBehdQBdheCDAAQCEAABdBeQBeBdAACDQAACEheBdQhdBeiEAAQiDAAhdheg");
	this.shape_184.setTransform(26.2,91.6);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#999999").s().p("AiIFFQhAgagxgxQgxgxgahAQgchCAAhHQAAhHAchBQAahAAxgxQAxgxBAgbQBCgbBGAAQCSAABoBnQAxAxAaBAQAcBBAABHQAABHgcBCQgaBAgxAxQhoBniSAAQhGAAhCgcg");
	this.shape_185.setTransform(26.2,91.6);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#CCCCCC").s().p("AiMFQQhCgdgygxQgzgzgchBQgchEAAhKQAAhJAchEQAchBAzgyQAygyBCgcQBEgdBIAAQBKAABEAdQBBAcAyAyQBrBqAACWQAABKgcBEQgcBBgzAzQgyAxhBAdQhEAchKAAQhIAAhEgcg");
	this.shape_186.setTransform(26.2,91.6);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#999999").s().p("AgEAPIAAgeQAAgFAEAAQAFAAAAAFIAAAeQAAAGgFAAQgEAAAAgGg");
	this.shape_187.setTransform(33.9,2.9);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#999999").s().p("AgEAPIAAgeQAAgFAEAAQAFAAAAAFIAAAeQAAAGgFAAQgEAAAAgGg");
	this.shape_188.setTransform(18.7,2.9);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#999999").s().p("AgiAjQgPgPAAgUQAAgTAPgPQAOgPAUAAQAUAAAPAPQAPAPAAATQAAAUgPAPQgPAPgUAAQgUAAgOgPg");
	this.shape_189.setTransform(26.5,4.1);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#E6E6E6").s().p("AgCAXQgGAAAAgGIAAghQAAgGAGAAIAFAAQAGAAAAAGIAAAhQAAAGgGAAg");
	this.shape_190.setTransform(34.4,2.7);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#E6E6E6").s().p("AgCAXQgGAAAAgGIAAghQAAgGAGAAIAFAAQAGAAAAAGIAAAhQAAAGgGAAg");
	this.shape_191.setTransform(19.1,2.7);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#E6E6E6").s().p("AgqArQgSgSAAgZQAAgYASgSQASgSAYAAQAZAAASASQASASAAAYQAAAZgSASQgSASgZAAQgYAAgSgSg");
	this.shape_192.setTransform(27,4.1);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#E6E6E6").s().p("AgQARQgHgIAAgJQAAgJAHgHQAHgHAJAAQAJAAAIAHQAHAHAAAJQAAAJgHAIQgIAHgJAAQgJAAgHgHg");
	this.shape_193.setTransform(26.7,17.3);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#999999").s().p("AguArIgBg9QAAgKAHgHQAHgGAJgBIAxAAQAKABAGAGQAHAIAAAJIAAA9g");
	this.shape_194.setTransform(26.7,15.9);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#CCCCCC").s().p("AgPCYQg3gZgHgQQgEgJACgpIABgvIgOhGQgLhBARgKQAkgUAyAAQA0AAAjAUQARAKgLBBIgOBGIABAvQACApgEAJQgHAQg3AZg");
	this.shape_195.setTransform(26.2,11.5);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#E6E6E6").ss(0.7,1,1).p("ACVivQggBPArA5QAaAhAAAmQAAA8g3AqQg2AqhNAAQhMAAg2gqQg3gqAAg8QAAgmAaghQArg5gghP");
	this.shape_196.setTransform(26.2,27.6);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#4C4C4C").s().p("AhxBYQgwglAAgzQAAgyAwglQAvglBCAAQBDAAAvAlQAwAlgBAyQABAzgwAlQgvAlhDAAQhCAAgvglg");
	this.shape_197.setTransform(26.2,30.8);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#BFBFBF").s().p("AjgDhQhehdAAiEQAAiDBehdQBdheCDAAQCEAABdBeQBeBdAACDQAACEheBdQhdBeiEAAQiDAAhdheg");
	this.shape_198.setTransform(26.2,18.6);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#999999").s().p("AiIFFQhAgagxgxQgxgxgahAQgchCAAhHQAAhHAchBQAahAAxgxQAxgxBAgbQBCgbBGAAQCSAABoBnQAxAxAaBAQAcBBAABHQAABHgcBCQgaBAgxAxQhoBniSAAQhGAAhCgcg");
	this.shape_199.setTransform(26.2,18.6);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#CCCCCC").s().p("AiMFPQhCgcgygxQgzgzgchBQgchEAAhKQAAhIAchFQAchBAzgzQAygxBCgcQBEgdBIAAQBKAABEAdQBBAcAyAxQBrBrAACWQAABKgcBEQgcBBgzAzQgyAxhBAcQhEAdhKAAQhIAAhEgdg");
	this.shape_200.setTransform(26.2,18.6);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("rgba(255,255,255,0.498)").s().p("AgNAPQgHgHAAgIQAAgHAHgHQAGgFAHAAQAIAAAGAFQAHAHAAAHQAAAIgHAHQgGAFgIAAQgHAAgGgFg");
	this.shape_201.setTransform(10.8,129.3);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("rgba(255,255,255,0.498)").s().p("AgMANQgGgFAAgIQAAgGAGgGQAFgGAHAAQAHAAAGAGQAGAGAAAGQAAAIgGAFQgGAGgHAAQgHAAgFgGg");
	this.shape_202.setTransform(53.5,108.8);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("rgba(255,255,255,0.2)").s().p("Aj8PbIh+/bQBqASDCAMIgzecQAAAXCdAWQCcAXDDADIgeABQpZAAAAgng");
	this.shape_203.setTransform(25.2,101.6);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("rgba(255,255,255,0.298)").s().p("AmdQVQisgPAAgYMgCBggSQAEAdDOATQDRAUEnAAQEpAADQgUQDOgTAEgdMgCAAgRQAAAXisAQQisAQjzAAQj0AAipgPg");
	this.shape_204.setTransform(50.4,102);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("rgba(255,255,255,0.498)").s().p("AgTAUQgJgIAAgMQAAgLAJgIQAIgJALAAQAMAAAIAJQAJAIAAALQAAAMgJAIQgIAJgMAAQgLAAgIgJg");
	this.shape_205.setTransform(41.2,150.4);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("rgba(255,255,255,0.498)").s().p("Am5AMQhUgVg4gYQgzgXAAgNQGnApC0AFQEdAHF5g1QAAANgzAXQg3AYhVAVQjYA7jiAAQjhAAjYg7g");
	this.shape_206.setTransform(50.1,80.7);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("rgba(255,255,255,0.498)").s().p("AmHI7QipgPAAgWIhDxeQGAApD0AAQD1AAF+gpIhCRdQAAAVipAQQioAPjhAAQjiAAilgOg");
	this.shape_207.setTransform(50.3,132.8);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#82DC5E").s().p("ABwGYIhiiDIAlhtIgIgkIgtgOIgog+IgrgHIhqgoIgLgxIgohNIgdgSIAPAzIgHAoIgshbIgdgZIgHhfIAZhXIg+gVIgIgIQCOh7C9AAQChAACEBfIhFAyIAdAoIgWAdIgsgLIgkA6IAAAdIghAzIAeBJIgogWIgdgdIhOASIg+AzIAZA/IAdgJIAlAIIgLAbIAkASIAQAhIAlAgIA2gOICgA2IAOAvIBFAwIApAJQgtBUhKA/QhKA/hbAfg");
	this.shape_208.setTransform(56.9,83.6);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#759EC7").s().p("AjEHUQhcgmhGhHQhHhGgmhcQgoheAAhnQAAhmAohfQAmhbBHhGQBGhHBcgmQBegoBmAAQBnAABfAoQBbAmBGBHQBHBGAmBbQAoBfAABmQAABngoBeQgmBchHBGQhGBHhbAmQhfAohnAAQhmAAhegog");
	this.shape_209.setTransform(51.1,85);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("rgba(255,255,255,0.498)").s().p("AgdAzQi0gFmngpQAAgWC/gRQC7gSD+AAQD+AAC8ASQC/ARAAAWQlIAwkEAAIhKgCg");
	this.shape_210.setTransform(50.1,73);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("rgba(255,255,255,0.498)").s().p("AgdAzQi0gFmngpQAAgWC/gRQC7gSD+AAQD+AAC8ASQC/ARAAAWQlIAwkEAAIhKgCg");
	this.shape_211.setTransform(50.1,73);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("rgba(255,255,255,0.8)").s().p("AmfBaQirgQgBgYIgGicQABAXCvARQCuARDzAAQDzAACvgRQCugRACgXIgHCcQAAAYisAQQisARjzAAQjzAAisgRg");
	this.shape_212.setTransform(50.5,198.2);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("rgba(255,255,255,0.498)").s().p("AmiAnQiugQAAgXQAAgWCugQQCugRD0AAQD1AACvARQCtAQAAAWQAAAXitAQQivARj1AAQj0AAiugRg");
	this.shape_213.setTransform(50.4,187.6);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("rgba(255,255,255,0.498)").s().p("AnpAYQjOgRgRgYIgCgVQAEAcDRASQDQATElAAQElAADSgTQDQgSAEgcIgCAVQgRAYjOARQjIAPkiAAQkhAAjIgPg");
	this.shape_214.setTransform(50.4,-0.1);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("rgba(255,255,255,0.498)").s().p("AmeAnQisgQAAgXQAAgWCsgQQCtgRDxAAQDyAACtARQCsAQAAAWQAAAXisAQQisARjzAAQjyAAisgRg");
	this.shape_215.setTransform(50.4,202.5);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("rgba(255,255,255,0.2)").s().p("AHbgFQjRgVkKABQkJgBjQAVQjJAQgiAbQgGgEAAgFQAAgcDSgSQDRgUEnAAQEoAADRAUQDSASAAAcQAAAFgFAEQgjgbjIgQg");
	this.shape_216.setTransform(50.4,-7.1);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("rgba(255,255,255,0.2)").s().p("An4AwQjSgUAAgcQAAgbDSgUQDRgUEnAAQEoAADRAUQDSAUAAAbQAAAcjSAUQjQAUkpAAQknAAjRgUg");
	this.shape_217.setTransform(50.4,-4.2);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#E36666").s().p("AojOwQgLghAEgiQEIgyC5jpQCajFBflBQBNj/Agk+QAYjsgEjcQBRgoA1gmICVA1InYfag");
	this.shape_218.setTransform(76.4,159.1);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FF9B9B").s().p("AiYO8QBRpYApoSQAgnCA7l6IBAAPQAIAjATAzQj8J0BTT8g");
	this.shape_219.setTransform(6.4,126.3);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FF8282").s().p("AsCQTMAERgi5ICMAhQBRFkEWBXQEWBXFWj1ICVA0InYfbg");
	this.shape_220.setTransform(54.9,143.3);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFF87").s().p("AhNDQICAmcIAbgGIiFGlg");
	this.shape_221.setTransform(15.7,37.9);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFDE3F").s().p("AhsDWICFmkIBUgTIiOHDg");
	this.shape_222.setTransform(21,37.6);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFF87").s().p("AhEDXQATgYAihgQAghfAcjdIAFAFIATAHIgEAnQAAB9g5CMQgcBKghA1g");
	this.shape_223.setTransform(46.8,34.8);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#F3C52E").s().p("AhXDNQAhg1AehKQA3iLAAh+IAEgnIA1ASQAAAJgEAiQAADNh3C7g");
	this.shape_224.setTransform(50.2,36.4);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFF87").s().p("AhEDXQATgYAihgQAfhfAdjdIAFAFIATAHIgFAnQAAB+g4CLQgcBKghA1g");
	this.shape_225.setTransform(38.4,50.4);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#F3C52E").s().p("AhXDNQAhg0AehLQA2iLAAh+IAFgnIA1ARQAAAKgFAiQAADNh2C7g");
	this.shape_226.setTransform(41.8,52.1);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFF87").s().p("AhNB2QAEhIByjIQAPAAAXADQg9A2heD8QgDgOACgXg");
	this.shape_227.setTransform(51.1,53.9);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#F3C52E").s().p("AhjCFQBgj7A7g2QAVADAXAIQhEArhnEjQgWgDgGglg");
	this.shape_228.setTransform(53.4,56);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFFF87").s().p("AhNDPICAmcIAagFIiFGlg");
	this.shape_229.setTransform(47,52.9);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFDE3F").s().p("AhsDXICFmlIBUgTIiOHDg");
	this.shape_230.setTransform(52.2,52.5);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFFF87").s().p("AggCTIAgkaIAhgMIgiEng");
	this.shape_231.setTransform(55.9,63.5);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFDE3F").s().p("AguCeIAkkoIA5gWIgnFBg");
	this.shape_232.setTransform(60.4,62.6);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFFF87").s().p("Ah5FbQDvoUgYjeIAcgBQgcCzghCjQg+E4g5BnQgXApgUATQgOgagGgkg");
	this.shape_233.setTransform(67.3,57.7);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFDE3F").s().p("AiPGLQAVgTAWgoQA5hnA/k5QAhiiAbizQAmgBAaAHQhXJOheCtQgpBKgfAAQgTAAgPgbg");
	this.shape_234.setTransform(71.4,59);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFFF87").s().p("ABBl0IArgHIiyL2IglABg");
	this.shape_235.setTransform(81.7,46);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFDE3F").s().p("AA6l1IA+gKIgCAYIitLmIhAABg");
	this.shape_236.setTransform(86.6,45.4);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFFF87").s().p("AhXDDIB7mTIA0AFIiBGcg");
	this.shape_237.setTransform(90.9,62.1);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFDE3F").s().p("AhcDHICBmcIA4AFIiHGmg");
	this.shape_238.setTransform(96,63.1);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFF36E").s().p("AiwEUIFAo2IAhgDIk4JLg");
	this.shape_239.setTransform(84.4,54.7);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#DCA817").s().p("Ai/EdIE5pMIBGgGIlIJrg");
	this.shape_240.setTransform(89.9,55.6);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFFF87").s().p("AirDKIE8miIAbALIkvGmg");
	this.shape_241.setTransform(92.5,50.4);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FFDE3F").s().p("Ai0DFIEumlIA8AXIkfGqg");
	this.shape_242.setTransform(97.5,52.3);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFFF87").s().p("AiuDJIE8mgIAgADIkzGsg");
	this.shape_243.setTransform(107.9,56.4);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFDE3F").s().p("AjaC7IE8mgIB4ANIlAG/g");
	this.shape_244.setTransform(112.3,57.8);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFDE3F").s().p("AjkC7IGsmNIAdAYImwGNg");
	this.shape_245.setTransform(120.6,55.3);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#DCA817").s().p("Aj+ClIGtmOIBQBCImzGRg");
	this.shape_246.setTransform(123.2,57.5);

	this.instance = new lib.Symbol70("synched",0);
	this.instance.setTransform(53.9,28.6,1,1,0,0,0,0.3,0);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFFF87").s().p("AihDXIEnmzIAcALIk1Gug");
	this.shape_247.setTransform(113.7,40.7);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFDE3F").s().p("AiOCOIAOAFIE1muIA7AXIlnIZIh4AHg");
	this.shape_248.setTransform(111.8,48.1);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFF36E").s().p("AiyEcIFNpJIAYALIk7JQg");
	this.shape_249.setTransform(106.6,39.2);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#DCA817").s().p("Ai2EcIE7pQIAzAZIk3JQg");
	this.shape_250.setTransform(111.3,41);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFFF87").s().p("AjPFNIF1qjIAqAGIl7Kng");
	this.shape_251.setTransform(96,36);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFDE3F").s().p("AjdFMIF8qnIA/AHIgJAXIlzKZg");
	this.shape_252.setTransform(100.9,37);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FFFF87").s().p("AiBFpQABiTAliZQAxjKBsi/QAVgUAqgKIgvBNIiTFDIgiEsQACAZgSAAQgGAAgIgCg");
	this.shape_253.setTransform(96.1,30.1);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFDE3F").s().p("AiaEgQAgALgCghIAikqICTlGIAvhNQAbgHAYgBQjyGHAYErQATCeAAAQIhiAXQgMg6AAhig");
	this.shape_254.setTransform(98.6,37.4);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FFF36E").s().p("AhgE+ICip2IAfgMIiVKJg");
	this.shape_255.setTransform(77.8,32.9);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#DCA817").s().p("AhoFKICVqIIA8gVIiVKng");
	this.shape_256.setTransform(83,32.4);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFF36E").s().p("AhVE4ICOpyIAcgDIiRJ7g");
	this.shape_257.setTransform(61.7,18.6);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#DCA817").s().p("AhqE5ICSp7IBDgFIiaKPg");
	this.shape_258.setTransform(66.2,19.1);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFFF87").s().p("AA8l+IAqgJIiaMMIgxADg");
	this.shape_259.setTransform(66.2,34.2);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FFDE3F").s().p("AiJGgIALg1IAxgDICasMIA9gMIgBAYIirNJg");
	this.shape_260.setTransform(68.7,37);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FFFF87").s().p("Ah5FbQDvoUgYjdIAcgCQgYCigkC0Qg/E5g5BnQgXAqgUARQgOgagGgkg");
	this.shape_261.setTransform(38.1,35);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FFDE3F").s().p("AiPGMQAUgRAXgqQA5hnA/k5QAki0AYiiQAmAAAaAHQhXJOheCtQglBCgeAGIgGABQgSAAgPgag");
	this.shape_262.setTransform(42.3,36.3);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FFFF87").s().p("AgnloQATAIAUAOQAiCyAHCdQALDxg8BxQgTAHgPADQBukYhrm5g");
	this.shape_263.setTransform(35.8,23.4);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FFDE3F").s().p("AhpGVQAFgOBDiRIACgEQAPgCARgIQA/hxgLjxQgHidgjiyQApAZAOAaQBvIFjDFbg");
	this.shape_264.setTransform(34.6,35.3);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FFFF87").s().p("AARFzQANpIhrjCIAagMQAsCtAgClQA/E4gMB2QgFAwgLAXQgYgSgTgfg");
	this.shape_265.setTransform(30.2,38.5);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FFDE3F").s().p("AAPGnQALgYAFgvQANh1g+k5QghilgtitQAjgPAagFQCWJBgVDFQgIBMgZARQgHAGgIAAQgOAAgRgOg");
	this.shape_266.setTransform(34.6,38.2);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FFF36E").s().p("AhEk1IAagNIBvKBIgZAEg");
	this.shape_267.setTransform(24.3,38.6);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#DCA817").s().p("AhVkxIA8geIBuKWIg7AJg");
	this.shape_268.setTransform(28.6,36.9);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FFFF87").s().p("AgPjRIAVgNIAKG5IgTAEg");
	this.shape_269.setTransform(8,30.2);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FFDE3F").s().p("AgpjGIBIgtIALHZIhJAOg");
	this.shape_270.setTransform(12.9,27.8);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#DEB521").s().p("AkiDiIBbgTIGuAAQAQAAALgMQAMgLAAgQIAAlFIAVhEIAAGcQAAAQgMAMQgLALgQAAg");
	this.shape_271.setTransform(67.7,186.2);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#DEB521").s().p("AlgBtII0jxQBQgmA5AsQAZATAOAeIAGAQQgNgigggSQg4gghRAnIo0DwQglgEgEAUQADgWAmgTg");
	this.shape_272.setTransform(52.7,74.7);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#DEB521").s().p("AgtAUQAFgsBWgrIAACHQhfgCAEgug");
	this.shape_273.setTransform(106.6,195.4);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#DEB521").s().p("AgtAVQAFgtBWgqIAACFQhfgBAEgtg");
	this.shape_274.setTransform(106.6,175.9);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#DEB521").s().p("AgtAUQAFgsBWgrIAACHQhfgCAEgug");
	this.shape_275.setTransform(106.6,117.5);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#DEB521").s().p("AgtAVQAFgsBWgsIAACHQhfgCAEgtg");
	this.shape_276.setTransform(106.6,136.9);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#DEB521").s().p("AgtAUQAFgsBWgrIAACHQhfgCAEgug");
	this.shape_277.setTransform(106.6,156.4);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#DEB521").s().p("AgtAUQAFgsBWgrIAACHQhfgCAEgug");
	this.shape_278.setTransform(106.6,98);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#DEB521").s().p("AgtAVQAFgtBWgqIAACGQhfgCAEgtg");
	this.shape_279.setTransform(106.6,78.5);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#808080").s().p("AgVAiIAAg+IArgGIAABEg");
	this.shape_280.setTransform(75.6,0.6);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FDE89E").s().p("AgOAyIAAhzIAdgFIAACNg");
	this.shape_281.setTransform(74.7,11.9);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FDE89E").s().p("AiYANIgLgZIDaAAIBtAZg");
	this.shape_282.setTransform(22.2,213.7);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FDE89E").s().p("AigAaQArgxAdgCQAQgBBjARQBnAQAIAAQAWAAABATg");
	this.shape_283.setTransform(22.9,206);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FDE89E").s().p("AigmVQArhIErhBQgFAGgxAYIhpA0QiTBMgGAdQgJAxgNNRQg0ttAshHg");
	this.shape_284.setTransform(23.7,109.1);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#191919").s().p("AiYAeIAAg1QBdgGA7AAQA7AABeAGIAAA1g");
	this.shape_285.setTransform(80.4,1.4);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FBD13C").s().p("AkBAJIAAgQIIDAAIAAAQg");
	this.shape_286.setTransform(52.8,127);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FBD13C").s().p("AgYAAQAAggAYAAQALAAAHAJQAIAJgBAOQABAPgIAJQgHAJgLAAQgYAAAAghgAgFAAQAAAUAFAAQAHAAgBgUQABgTgHAAQgFAAAAATg");
	this.shape_287.setTransform(75.6,132.9);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FBD13C").s().p("AAAAhIAAgPIgZAAIAAgOIAYgkIASAAIAAAkIAJAAIAAAOIgJAAIAAAPgAgLAEIALAAIAAgRg");
	this.shape_288.setTransform(69.9,132.9);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FBD13C").s().p("AgLAHIAAgNIAXAAIAAANg");
	this.shape_289.setTransform(65.3,133.8);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FBD13C").s().p("AAIAgIgIgjIgHAjIgRAAIgSg/IAUAAIAIAkIAJgkIAOAAIAJAkIAJgkIAQAAIgSA/g");
	this.shape_290.setTransform(59.8,132.9);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FBD13C").s().p("AgRAYQgIgJABgPQgBgOAIgJQAHgJAKAAQALAAAHAJQAIAJgBAOQABAPgIAJQgHAJgLAAQgKAAgHgJgAgFAAQgBAUAGAAQAGAAAAgUQAAgTgGAAQgGAAABATg");
	this.shape_291.setTransform(52.7,132.9);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FBD13C").s().p("AgYAhIAAgPIARAAIAAgdIgPAFIAAgOQAOgEAGgIIALAAIAAAyIAQAAIAAAPg");
	this.shape_292.setTransform(47.3,132.9);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FBD13C").s().p("AhSB3IAAjtIBJAAIAAC2IBcAAIAAA3g");
	this.shape_293.setTransform(71,111);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FBD13C").s().p("AgkB3IAAjtIBJAAIAADtg");
	this.shape_294.setTransform(54.9,111);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FBD13C").s().p("AhLBfQglgjAAg8QAAg7AmgkQAegcAsAAQAtAAAfAcQAlAkAAA7QAAA9glAiQgeAdguAAQgrAAgggdgAgiAAQAABDAiAAQAjAAAAhDQAAhDgjAAQgiAAAABDg");
	this.shape_295.setTransform(36.8,110.9);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#333333").s().p("AlTKmQgRAAgLgLQgMgMAAgQIAAwgQAAgWAogRIIajOQBMggA2AkQAzAiAAA+IAASxQAAAQgMAMQgLALgRAAg");
	this.shape_296.setTransform(53.2,135.1);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#FBD13C").s().p("AGLRGItAAAQiTAAAaicQgKy8AKiTQAGhKAPgrQAUg4AsgfIJAldIAAh3IExAAIAACLQAOAiAdA6IA0BjQA9B6AABBIAAYrQAABbieAAIgLAAg");
	this.shape_297.setTransform(54.8,114);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#333333").s().p("AiYBeIAAi0QBdgHA7AAQA7AABeAHIAAC0g");
	this.shape_298.setTransform(80.4,-5);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#D5BB80").s().p("AgOADQgDgEARgEQARgEgCAJQgBAGgOACIgCAAQgKAAgCgFg");
	this.shape_299.setTransform(59.1,31.5);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#D5BB80").s().p("AgGADQgDgIAJgDQAGgEACAKQABAHgHAEIgCABQgEAAgCgHg");
	this.shape_300.setTransform(23.8,30.8);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#424785").s().p("AAGAmIAAgDIACAAQAGAAAAgGIAAgcIgbAAIAAAcQAAAGAGAAIACAAIAAADIgaAAIAAgDIABAAQAHAAAAgGIAAg4QAAgHgHAAIgBAAIAAgDIAaAAIAAADIgCAAQgGAAAAAHIAAAYIAbAAIAAgYQAAgHgGAAIgCAAIAAgDIAaAAIAAADIgBAAQgGAAgBAHIAAA4QABAGAGAAIABAAIAAADg");
	this.shape_301.setTransform(75.1,67.9);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#424785").s().p("AgZAAQAAgRAKgMQAIgKAMAAIALACIAJAEIABASIgDABQgEgUgOAAQgTAAAAAhQAAAOAGAKQAGAMAJAAQANAAADgTIADABIgCASQgKAFgJAAQgeAAAAgog");
	this.shape_302.setTransform(68.9,67.9);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#424785").s().p("AAVAnIgog+IAAAsQAAANAIAAIABAAIAAADIgVAAIAAgDIABAAQAHAAAAgOIAAgtQAAgKgHAAIgBAAIAAgDIAJAAIAHAAIAjA2IAAgoQAAgLgHAAIgCAAIAAgDIAVAAIAAADIgBAAQgHAAAAAOIAAA8g");
	this.shape_303.setTransform(62.6,68);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#424785").s().p("AgWALIAAgmQAAgIgGAAIgBAAIAAgDIAZAAIAAADIgBAAQgGAAAAAIIAAAlQAAAYANAAQAQAAAAgZIAAgkQAAgIgGAAIgCAAIAAgDIAUAAIAAADIgCAAQgFAAAAAIIAAAiQAAAggWAAQgXAAAAgcg");
	this.shape_304.setTransform(56.1,68);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#424785").s().p("AgWAmIAAgDIACAAQAGAAAAgHIAAg3QAAgHgGAAIgCAAIAAgDIAYAAIAAADIgCAAQgEAAAAAGIAAA4QAAAFAEABIAKAAQAFgBADgFIACgIIADAAIgDASg");
	this.shape_305.setTransform(50.5,67.9);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#424785").s().p("AgSAdQgKgLABgSQgBgSALgLQAJgKALAAIAVAEIABATIgCABQgEgTgPAAQgVAAAAAhQAAAkAVAAQADAAAGgCIAAgSQgBgGgFAAIgBAAIAAgDIAWAAIAAADIgBAAQgEAAAAAGIAAAQIACACIAAACQgLAFgMAAQgLAAgJgLg");
	this.shape_306.setTransform(42.9,67.9);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#424785").s().p("AgLAmIAAgDIABAAQAGAAAAgGIAAg4QAAgHgGAAIgBAAIAAgDIAXAAIAAADIgBAAQgGAAAAAHIAAA4QAAAGAGAAIABAAIAAADg");
	this.shape_307.setTransform(38.3,67.9);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#424785").s().p("AgWAmIAAgDIABAAQAGAAAAgGIAAg4QAAgHgGAAIgBAAIAAgDIAYAAQASAAAAARQAAAPgPADIAAABQAIgBAFADQAFAGAAAJQAAAJgFAHQgFAGgJAAgAgFAZQAAAJAGAAQALAAABgRQgBgRgMAAIgFAAgAgFgDIAEAAQALAAAAgOQAAgQgKAAIgFAAg");
	this.shape_308.setTransform(34.2,67.9);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#7175A4").s().p("AkLBMIAAiXIIXAAIAACXg");
	this.shape_309.setTransform(54.8,67.8);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#424785").s().p("AhEBMIAAiXICKAAIgyBLIAyBMg");
	this.shape_310.setTransform(84.4,71.6);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#424785").s().p("AhFBMIAzhMIgzhLICLAAIAACXg");
	this.shape_311.setTransform(26.4,71.6);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#424785").s().p("AhBBqQgbgoAAhBQAAg8AbgrQAagrAnAAQAnAAAaAlQAcAnAAA/QAABDgbArQgbAqgnAAQgoAAgZgogAgthZQgNAeAAAxQABA3APAoQARArAaAAQA5AAABiAQAAgvgPglQgRgrgbAAQgeAAgPAmg");
	this.shape_312.setTransform(81,97);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#424785").s().p("AgjCMIAAgMIAFAAQALAAAFgHQAFgHAAgTIAAhWIgyhsQgMgbgMAAIgDAAIAAgNIBMAAIAAANIgDAAQgNAAAAAJIAFANIAjBVIAfhIQAIgUAAgGQAAgJgOAAIgFAAIAAgNIAdACIAYgCIAAANQgMAAgIASIguBqIAABeQAAAXAFAHQAEAGALAAIAFAAIAAAMg");
	this.shape_313.setTransform(64.4,96.9);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#424785").s().p("AAPCRIAAgMIADAAQAPAAAAgMIgPhLIg2AAIgIAqIgGAfQAAAOATAAIADAAIAAAMIg6AAIAAgMIACAAQAQAAAGgaIAoi3IAJgxQAMgHAJgLIACgBIABACIA6EDQAEAQAMAAIACAAIAAAMgAANAXIgVhwIAAAAIgYBwIAtAAg");
	this.shape_314.setTransform(50.7,96.4);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#424785").s().p("AgLCPIg8jcIgBAAIgICuQAAARAFAGQAEAEAMAAIADAAIAAANIhAAAIAAgNIAEAAQAOAAAEgLQADgHACgZIAKi1QAAgegVABIgEAAIAAgNIAfACIAWgCIA5DQIA7jQIAZACIAbgCIAAANIgCAAQgXgBgBATIAMDVQAAAPAFADQAEAEAMAAIAAANIhNAAIAAgNQAMgBAEgCQAGgDAAgMIgIi8IAAAAIg9Dhg");
	this.shape_315.setTransform(32,97.3);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#F5F3E8").s().p("AgPAKQgfgJAEgJQADgKAxAHQAxAGgWAMQgMAIgQAAQgKAAgOgFg");
	this.shape_316.setTransform(15.5,15.5);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#F8E831").s().p("AlJE+QgYAAgRgRQgRgRAAgXIAAoIQAAgYARgRQARgRAYAAIKTAAQAYAAARARQARARAAAYIAAIIQAAAXgRARQgRARgYAAg");
	this.shape_317.setTransform(54.4,89.4);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f().s("#7175A4").ss(1.7,1,1).p("AGCF/IsDAAQgbAAgUgUQgUgUAAgbIAAp3QAAgbAUgUQAUgUAbAAIMDAAQAcAAATAUQAUAUAAAbIAAJ3QAAAcgUATQgTAUgcAAg");
	this.shape_318.setTransform(54.5,89.4);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#424785").s().p("AmAF+QgcAAgUgTQgUgUAAgbIAAp3QAAgcAUgTQAUgUAcAAIMCAAQAcAAATAUQAUATAAAcIAAJ3QAAAbgUAUQgTATgcAAg");
	this.shape_319.setTransform(54.5,89.4);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#CFCCB0").s().p("AnSAHIAAgNIOlAAIAAANg");
	this.shape_320.setTransform(54.3,18.4);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#F5F3E8").s().p("AijL1QhtiDgRhgIAAwIQAAhaBWj2IA2AAQhVD2AABaIAAQIQAQBgBtCDQB7BNEUAEIgbABQklAAiFhSg");
	this.shape_321.setTransform(33.2,101.6);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#D5BB80").s().p("AgJAFQgFgNAMgEQALgFACANQACAKgKAHQgDACAAAAQgGAAgDgKg");
	this.shape_322.setTransform(68,40.7);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#D5BB80").s().p("AgJAEQgFgMANgEQAKgFACANQACAKgKAHQgDABAAAAQgGAAgDgKg");
	this.shape_323.setTransform(40.8,42.6);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#D5BB80").s().p("AgDAIQgXgIAJgIQAIgIAPAJQAQAHgCAJQAAAEgGAAQgGAAgLgFg");
	this.shape_324.setTransform(79.4,29.9);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#2A3076").s().p("AgGBXIAAitIANAAIAACtg");
	this.shape_325.setTransform(102.7,2.5);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#2A3076").s().p("AgGBXIAAitIANAAIAACtg");
	this.shape_326.setTransform(98.3,2.5);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#2A3076").s().p("AgGBXIAAitIANAAIAACtg");
	this.shape_327.setTransform(94,2.5);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#2A3076").s().p("AgGBXIAAitIANAAIAACtg");
	this.shape_328.setTransform(89.6,2.5);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#2A3076").s().p("AgGBXIAAitIANAAIAACtg");
	this.shape_329.setTransform(85.3,2.5);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#2A3076").s().p("AgGBXIAAitIANAAIAACtg");
	this.shape_330.setTransform(80.9,2.5);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#2A3076").s().p("AgGBXIAAitIANAAIAACtg");
	this.shape_331.setTransform(76.6,2.5);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#2A3076").s().p("AgGBXIAAitIANAAIAACtg");
	this.shape_332.setTransform(72.2,2.5);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#2A3076").s().p("AgGBXIAAitIANAAIAACtg");
	this.shape_333.setTransform(67.9,2.5);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#2A3076").s().p("AgFBXIAAitIALAAIAACtg");
	this.shape_334.setTransform(63.5,2.5);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#2A3076").s().p("AgGBXIAAitIAMAAIAACtg");
	this.shape_335.setTransform(59.2,2.5);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#2A3076").s().p("AgGBXIAAitIANAAIAACtg");
	this.shape_336.setTransform(54.8,2.5);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#2A3076").s().p("AgFBXIAAitIALAAIAACtg");
	this.shape_337.setTransform(50.5,2.5);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#2A3076").s().p("AgGBXIAAitIAMAAIAACtg");
	this.shape_338.setTransform(46.1,2.5);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#2A3076").s().p("AgGBXIAAitIANAAIAACtg");
	this.shape_339.setTransform(41.7,2.5);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#2A3076").s().p("AgGBXIAAitIANAAIAACtg");
	this.shape_340.setTransform(37.4,2.5);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#2A3076").s().p("AgGBXIAAitIANAAIAACtg");
	this.shape_341.setTransform(33,2.5);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#2A3076").s().p("AgGBXIAAitIANAAIAACtg");
	this.shape_342.setTransform(28.7,2.5);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#2A3076").s().p("AgGBXIAAitIANAAIAACtg");
	this.shape_343.setTransform(24.3,2.5);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#2A3076").s().p("AgGBXIAAitIANAAIAACtg");
	this.shape_344.setTransform(20,2.5);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#2A3076").s().p("AgGBXIAAitIANAAIAACtg");
	this.shape_345.setTransform(15.6,2.5);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#2A3076").s().p("AgGBXIAAitIANAAIAACtg");
	this.shape_346.setTransform(11.3,2.5);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#2A3076").s().p("AgGBXIAAitIANAAIAACtg");
	this.shape_347.setTransform(6.9,2.5);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#898CB3").s().p("An3ATIAbglIO5AAIAbAlg");
	this.shape_348.setTransform(54.3,-8.1);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#424785").s().p("An3BqIAAitIAbgmIO5AAIAbAmIAACtg");
	this.shape_349.setTransform(54.3,0.6);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#CFCCB0").s().p("AnYAHIAAgNIOxAAIAAANg");
	this.shape_350.setTransform(54.3,13);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#E4E0C5").s().p("AmqMaQhtiEgQhgIAAwHQAAhaBVj2QgsgEAAgRQAAgRAmgCIAAghIOxAAIAAAhQAmACAAARQAAARgsAEQBVD2ABBaIAAQHQgRBghsCEQiGBRkmAAQkkAAiGhRg");
	this.shape_351.setTransform(54.3,97.9);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = this.shape_20.mask = this.shape_21.mask = this.shape_22.mask = this.shape_23.mask = this.shape_24.mask = this.shape_25.mask = this.shape_26.mask = this.shape_27.mask = this.shape_28.mask = this.shape_29.mask = this.shape_30.mask = this.shape_31.mask = this.shape_32.mask = this.shape_33.mask = this.shape_34.mask = this.shape_35.mask = this.shape_36.mask = this.shape_37.mask = this.shape_38.mask = this.shape_39.mask = this.shape_40.mask = this.shape_41.mask = this.shape_42.mask = this.shape_43.mask = this.shape_44.mask = this.shape_45.mask = this.shape_46.mask = this.shape_47.mask = this.shape_48.mask = this.shape_49.mask = this.shape_50.mask = this.shape_51.mask = this.shape_52.mask = this.shape_53.mask = this.shape_54.mask = this.shape_55.mask = this.shape_56.mask = this.shape_57.mask = this.shape_58.mask = this.shape_59.mask = this.shape_60.mask = this.shape_61.mask = this.shape_62.mask = this.shape_63.mask = this.shape_64.mask = this.shape_65.mask = this.shape_66.mask = this.shape_67.mask = this.shape_68.mask = this.shape_69.mask = this.shape_70.mask = this.shape_71.mask = this.shape_72.mask = this.shape_73.mask = this.shape_74.mask = this.shape_75.mask = this.shape_76.mask = this.shape_77.mask = this.shape_78.mask = this.shape_79.mask = this.shape_80.mask = this.shape_81.mask = this.shape_82.mask = this.shape_83.mask = this.shape_84.mask = this.shape_85.mask = this.shape_86.mask = this.shape_87.mask = this.shape_88.mask = this.shape_89.mask = this.shape_90.mask = this.shape_91.mask = this.shape_92.mask = this.shape_93.mask = this.shape_94.mask = this.shape_95.mask = this.shape_96.mask = this.shape_97.mask = this.shape_98.mask = this.shape_99.mask = this.shape_100.mask = this.shape_101.mask = this.shape_102.mask = this.shape_103.mask = this.shape_104.mask = this.shape_105.mask = this.shape_106.mask = this.shape_107.mask = this.shape_108.mask = this.shape_109.mask = this.shape_110.mask = this.shape_111.mask = this.shape_112.mask = this.shape_113.mask = this.shape_114.mask = this.shape_115.mask = this.shape_116.mask = this.shape_117.mask = this.shape_118.mask = this.shape_119.mask = this.shape_120.mask = this.shape_121.mask = this.shape_122.mask = this.shape_123.mask = this.shape_124.mask = this.shape_125.mask = this.shape_126.mask = this.shape_127.mask = this.shape_128.mask = this.shape_129.mask = this.shape_130.mask = this.shape_131.mask = this.shape_132.mask = this.shape_133.mask = this.shape_134.mask = this.shape_135.mask = this.shape_136.mask = this.shape_137.mask = this.shape_138.mask = this.shape_139.mask = this.shape_140.mask = this.shape_141.mask = this.shape_142.mask = this.shape_143.mask = this.shape_144.mask = this.shape_145.mask = this.shape_146.mask = this.shape_147.mask = this.shape_148.mask = this.shape_149.mask = this.shape_150.mask = this.shape_151.mask = this.shape_152.mask = this.shape_153.mask = this.shape_154.mask = this.shape_155.mask = this.shape_156.mask = this.shape_157.mask = this.shape_158.mask = this.shape_159.mask = this.shape_160.mask = this.shape_161.mask = this.shape_162.mask = this.shape_163.mask = this.shape_164.mask = this.shape_165.mask = this.shape_166.mask = this.shape_167.mask = this.shape_168.mask = this.shape_169.mask = this.shape_170.mask = this.shape_171.mask = this.shape_172.mask = this.shape_173.mask = this.shape_174.mask = this.shape_175.mask = this.shape_176.mask = this.shape_177.mask = this.shape_178.mask = this.shape_179.mask = this.shape_180.mask = this.shape_181.mask = this.shape_182.mask = this.shape_183.mask = this.shape_184.mask = this.shape_185.mask = this.shape_186.mask = this.shape_187.mask = this.shape_188.mask = this.shape_189.mask = this.shape_190.mask = this.shape_191.mask = this.shape_192.mask = this.shape_193.mask = this.shape_194.mask = this.shape_195.mask = this.shape_196.mask = this.shape_197.mask = this.shape_198.mask = this.shape_199.mask = this.shape_200.mask = this.shape_201.mask = this.shape_202.mask = this.shape_203.mask = this.shape_204.mask = this.shape_205.mask = this.shape_206.mask = this.shape_207.mask = this.shape_208.mask = this.shape_209.mask = this.shape_210.mask = this.shape_211.mask = this.shape_212.mask = this.shape_213.mask = this.shape_214.mask = this.shape_215.mask = this.shape_216.mask = this.shape_217.mask = this.shape_218.mask = this.shape_219.mask = this.shape_220.mask = this.shape_221.mask = this.shape_222.mask = this.shape_223.mask = this.shape_224.mask = this.shape_225.mask = this.shape_226.mask = this.shape_227.mask = this.shape_228.mask = this.shape_229.mask = this.shape_230.mask = this.shape_231.mask = this.shape_232.mask = this.shape_233.mask = this.shape_234.mask = this.shape_235.mask = this.shape_236.mask = this.shape_237.mask = this.shape_238.mask = this.shape_239.mask = this.shape_240.mask = this.shape_241.mask = this.shape_242.mask = this.shape_243.mask = this.shape_244.mask = this.shape_245.mask = this.shape_246.mask = this.instance.mask = this.shape_247.mask = this.shape_248.mask = this.shape_249.mask = this.shape_250.mask = this.shape_251.mask = this.shape_252.mask = this.shape_253.mask = this.shape_254.mask = this.shape_255.mask = this.shape_256.mask = this.shape_257.mask = this.shape_258.mask = this.shape_259.mask = this.shape_260.mask = this.shape_261.mask = this.shape_262.mask = this.shape_263.mask = this.shape_264.mask = this.shape_265.mask = this.shape_266.mask = this.shape_267.mask = this.shape_268.mask = this.shape_269.mask = this.shape_270.mask = this.shape_271.mask = this.shape_272.mask = this.shape_273.mask = this.shape_274.mask = this.shape_275.mask = this.shape_276.mask = this.shape_277.mask = this.shape_278.mask = this.shape_279.mask = this.shape_280.mask = this.shape_281.mask = this.shape_282.mask = this.shape_283.mask = this.shape_284.mask = this.shape_285.mask = this.shape_286.mask = this.shape_287.mask = this.shape_288.mask = this.shape_289.mask = this.shape_290.mask = this.shape_291.mask = this.shape_292.mask = this.shape_293.mask = this.shape_294.mask = this.shape_295.mask = this.shape_296.mask = this.shape_297.mask = this.shape_298.mask = this.shape_299.mask = this.shape_300.mask = this.shape_301.mask = this.shape_302.mask = this.shape_303.mask = this.shape_304.mask = this.shape_305.mask = this.shape_306.mask = this.shape_307.mask = this.shape_308.mask = this.shape_309.mask = this.shape_310.mask = this.shape_311.mask = this.shape_312.mask = this.shape_313.mask = this.shape_314.mask = this.shape_315.mask = this.shape_316.mask = this.shape_317.mask = this.shape_318.mask = this.shape_319.mask = this.shape_320.mask = this.shape_321.mask = this.shape_322.mask = this.shape_323.mask = this.shape_324.mask = this.shape_325.mask = this.shape_326.mask = this.shape_327.mask = this.shape_328.mask = this.shape_329.mask = this.shape_330.mask = this.shape_331.mask = this.shape_332.mask = this.shape_333.mask = this.shape_334.mask = this.shape_335.mask = this.shape_336.mask = this.shape_337.mask = this.shape_338.mask = this.shape_339.mask = this.shape_340.mask = this.shape_341.mask = this.shape_342.mask = this.shape_343.mask = this.shape_344.mask = this.shape_345.mask = this.shape_346.mask = this.shape_347.mask = this.shape_348.mask = this.shape_349.mask = this.shape_350.mask = this.shape_351.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]},1).to({state:[{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103}]},1).to({state:[{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117}]},1).to({state:[{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201}]},1).to({state:[{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.instance},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218}]},1).to({state:[{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271}]},1).to({state:[{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.3,-11.6,145.7,169.2);


(lib.dirtfalling2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"off":0,"on":1});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20));

	// Layer 1
	this.instance = new lib.tree1("synched",0);
	this.instance.setTransform(7.1,6.5,1.2,1.2,0,0,0,-0.3,-5.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({rotation:-720},11).wait(1).to({regX:0,regY:0,scaleY:1.82,x:7.4,y:13.2,alpha:0.988},0).to({scaleY:4.27,y:309.2,alpha:0.398},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.dirtfalling1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"off":0,"on":1});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(63));

	// Layer 9
	this.instance = new lib.dirt2("synched",0);
	this.instance.setTransform(0,14.3,1.44,1.44);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({rotation:-1440,guide:{path:[0,14.4,-50.2,-24.7,-61.8,93.8,-63.9,114.8,-64.7,140.9,-66.6,198.2,-62,292.3]}},61).wait(1));

	// Layer 8
	this.instance_1 = new lib.dirt2("synched",0);
	this.instance_1.setTransform(0,14.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({guide:{path:[0,14.4,-45.5,-18,-61.6,52.1,-77.6,122.3,-64.2,295]}},54).to({_off:true},1).wait(7));

	// Layer 7
	this.instance_2 = new lib.dirt1("synched",0);
	this.instance_2.setTransform(0,14.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({rotation:-2520,guide:{path:[1.2,12.4,-45.2,-15.3,-59.7,54.5,-74.2,124.4,-56.7,291.7]}},53).wait(1));

	// tree
	this.instance_3 = new lib.tree1("synched",0);
	this.instance_3.setTransform(-19.6,2.1,1,1,180);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({rotation:-360,guide:{path:[-19.6,2.2,-48,-4.7,-57.4,69.6,-66.9,143.8,-57.4,299.3]}},61).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.but_behindscenes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// button
	this.instance = new lib.but_invisible();
	this.instance.setTransform(-68.2,-52.1,2.685,1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.but_invisible(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// text
	this.txtBehind = new cjs.Text("", "17px 'franklin-gothic-urw'", "#FFFFFF");
	this.txtBehind.name = "txtBehind";
	this.txtBehind.textAlign = "center";
	this.txtBehind.lineHeight = 11;
	this.txtBehind.lineWidth = 123;
	this.txtBehind.setTransform(3,-37.9);

	this.timeline.addTween(cjs.Tween.get(this.txtBehind).wait(1));

	// small bushes
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004E00").s().p("AgkACIAOgJQARgJAFAAQALAAAGAEIACADIACAFIAGAEQAFgCAEACQAEADgBAGIgGABIgXgDQgVgFgYAPQgFgJAEgGg");
	this.shape.setTransform(-25.4,-3.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004E00").s().p("AhIAsIAEgFQAFgEAHAAIAMgBIALgFIAZgBQgHgHgKABIgSAEQAGgUAUgHQAMgHAIABQAGABAQAGQgEgMgDgCIgJAAIgDgCIgFgCQgJgDgOAIIgVAOQAFgRACgDQAFgLAOgBIAJAAQAFAAADgCIAAgEIAEgFQACgBAJAAQANABACACQABAEABABIAHAEQADADABAEIAAAJQAGAVAAAEQAOACACACQAEADgJAMQALAAACAPg");
	this.shape_1.setTransform(-47.6,-5.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2E7500").s().p("AA7A2QACgHADgCIAHgBIAHAAIABgOQAEgBABgCIADgIQAEgLAUgHIAKgCQANgHAFABQAHAAAGAEIAIAHIAGACIAEAEIACAEQAOAQgBAHIgCAHIgDAHIAAADgAi5A2QAFgLALgEIAJAAQAGAAABgCIAAgEIAAgEIACgLIAEgLIACgNQABgDADgCIAEgDIAEgMIAJgJQAGgEAMACQAJgRAWABQAPABAIAKIAHAKQADAGAHAGQAOALgJAWQAOACADADQADADAAAUQADABAHAAIAAAMg");
	this.shape_2.setTransform(-38.6,-6.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004E00").s().p("AguAmQAAgEAEgGQADgEAEAAIAIAAIAHgFIAPAAQgEgHgGABIgMADQAEgQANgIQAIgFAEABQADAAALAGQgCgLgDgBIgCAAIgDAAIgFgFQgGgDgIAIIgNAPIAEgUQADgJAJgCIAKgCIAAgEIACgEIAHAAQAIAAACACIABAFIAFAEIACAGIAAAIQAEAQAAAGQAJABABABQADADgGALQAJAAgBATIAAAEIgiABIgQgDQgLgCgHABIgOAFIgDABQgGAAgBgHg");
	this.shape_3.setTransform(60,-6.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2E7500").s().p("Ag+A9IABgHIAFgTQADgKAIgEIAEAAQAEAAACgCIABgRIACgIIABgNIADgEIADgDIACgKIAGgIQAEgEAHACQAFgPAMABQAKAAAFAKIAEAIQACAFAFAFQAJALgGAVQAIAAACACQADADAAASIAFABIADASIACAAIgBATg");
	this.shape_4.setTransform(59.7,-7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bushes
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004E00").s().p("AqRDxQAJgXAOAAIAfgCIAogFQABgrAIgMQAEgGgEgIIgHgLQgBgDgNgFQgPgFgHgJQgMgQAXgFQATgcAIAAQADAAgFgSQgFgVAFgKQAEgGABgUQABgRALgHQASgNAOgFQgggyAWgWQAXgXAagkQAQgEAOAMQAOALAIACQARADAFAJIAMAWIApgOQAJgHAKgGQAKgHATANQgJgcALgBQAMgBAVARQAKgGAGAAQAGAAAKAIQACgnAQgPQAQgPAVAUQANgOAJABQAIACAOASQAKgIAJAHQAJAIAMARIAigoQABgRAIgDQAHgCAKARQALgOAIACQAHABAEAaQAGgeAMAAQANAAAGA/QAigYANAEQAOADANASQANgZAKAAQAKAAAMARQAVgpAgASQAhARALAPQANgHALADQAFACAFAGQAEAGAHADQAFACANARQAMAPALABQAUABAPgBIAogNQASgGAPALQACggAOgCQAOgBAPAJQAAgiAOAGQAaANAFAVQABAHAOAPQANAPACALIAEAZQAlgJAJAOQAJANgjAjQAQAHAFALQAFALgTAOQAXANAGAPIAKATQADAKgMAMQgOAQgEAJQgEAKADANQADAIAPAUQAPATAAAGQAAAGAKAWQAJAVgCAGQgCAIoZAAQktAAnagDg");
	this.shape_5.setTransform(0.1,-24.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2E7500").s().p("Aq8EAQgBgJADgFQAEgKALgCIAVgDQACgBABgIQACgJACgBQAGgCAHADIALAFIAPACQAJAAAFACQgHgIAHgOQgFgEACgJQACgIAGgEQgCgHgGgFQgDgDgDAAIgJgCQgKgCgDgMIAAgFIgFgFQgGgPAMgNIAFgJQAKgRATgDQgEgFgBgKQgFgbAGgKIAIgKQAGgGABgEIgBgGQACgPAPgOQAGgIACACIACgDQgOgTAFggQAGgdASgSIAkgkQABgHAMgIQARgLAMAGIAGAEIAFAGIANAKQAIAGAFAGQALgNAOAMQAKAHADAEIAHATQACgCAOAAQgBgIAHgEIAPgEIANgRQAFgIADgCQAHgEATAGQAOACAEAFQANgGAJAEIABgCQgDgKAEgKQADgLAIgGIAIgEIAIgCIAEgDQAVgLAQACQAFABAJAFQALAAALAHIAIAGIAGgEIAGgEQAKgCAJALQAIAKAAALIAOgYQgBgLAJgKQAIgLAKADIANAHIAOgBQAFABACACQgBgIAJgGQAHgFAIgCQAOgCAVALIADADIARAHQAIAGADAMQAEAMgEAJQAJgFANAFQAGgEAJgCQAKgCAGACIAEgJIADgDIABgHQAGgOARABIAJgBQAMgBAMAGQANAIACAMQAEgKALgEQAKgFAJADIAQAKIAEACQAVAKAIAQIACADIADABIAKAKIAaAXQAKgNAQALQAJAHADAEIAEAKIADAKQACgBAOgCQgBgKATgFQADgLACgDQADgEAKgHQAOgMALANIAagWIAFgGIAGgEQAMgGARALQAMAIABAHIAkAkQAUAVAEAeIAXAJQAEgCANAHQAOAJACAOIgHAuQAOAEgCAQQgBAMgCADIgKAPQACABAGAMQAFgEAGAEIAJAKQAMAPABAIQAAADgEAIIgFAOQgCAIgEAFIgFAFIgDANIgCACIgBADIADACIAGAIQAOAXgDAQIgBAIIADABQACABACAJQABAIACABIAVADQALACAFAKQACAFgBAJg");
	this.shape_6.setTransform(2,-26.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.2,-52.1,145,55.4);


(lib.trees1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004E00").s().p("AgkArQgFgHgBgJQAAgDAEgGQADgEAEAAIAHAAIAGgEIAOAAQgEgHgGABIgKADQAEgOALgHQAHgFAEAAQADABAJAFQgBgJgDgCIgCAAIgDAAIgFgEQgEgDgIAIIgMAMIAEgSQADgIAIgBIAFAAIAEgCIAAgEIACgDIAGgBQAHAAACADIABAEIAEADIADAGIAAAHIADAWQAIABABABQADABgFAKQAJABgCAQIAAAUIgfAAQgeAAgHABIgBABQgEAAgFgGg");
	this.shape.setTransform(538.8,-9.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2E7500").s().p("Ag4A7IAAgPIAGgRQABgJAIgEIAEAAIAFgBIAAgHIABgHIACgJIABgMIACgEIAEgDIACgJIAEgHQAEgEAHACQAFgOALABQAIABAFAIIAEAIQACAFAEAEQAHAKgEATQAIACABACQADADgBAOIAFABIADAQIACAAIgCAbIhjABQgNAAAAgCg");
	this.shape_1.setTransform(538.5,-9.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004E00").s().p("AAKA2IgYgDQgQgDgKABQgIABgLgFQgOgFAAgJQAAgFAGgGQAEgEAGAAIAMAAIAKgFIALgBIALABQgGgHgJABIgRADQAGgQASgIQAMgGAIABQADAAAPAGQgEgLgCgBIgEgBIgEAAIgGgEQgKgDgMAIIgTAPQADgQACgEQAFgKANgBIAPgCIADgEIADgEQAAgBAIAAQAKAAAEADIABAEIAGAEQAEACABAEIAAAJIAEAYQAOACACABQAEABgJALQAOAAgCATIANAZg");
	this.shape_2.setTransform(550.9,-10.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2E7500").s().p("AhdBCIABgQIAIgTQAEgLALgEIAHAAQAGAAABgCIAAgHIACgIIAEgLIABgNIAEgFIAEgCIAEgLIAHgIQAFgEAMACQAIgQASABQANABAIAKIAHAJQADAFAGAFQAMAKgHAWQANACACADQADACgBARIAJABIADASQABAAAEAKQADAKABAAIAAALQg4ABhtgBIgMABQgIAAgCgDg");
	this.shape_3.setTransform(550.1,-10.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#075D00").s().p("ABrAWIgYgDQgKgBghAAIgzABQgbgBgNACQghAFgVgFQgPgCAAgIQgBgEAGgIIAKgFQADgCAJADIAHgGIAFgCIgBgDIgCgCQgBgFAJABQANADACAMQAKAAAEACQAEACACAEIABAEQACAHASgBQACgIAHgCQAFAAAPAIQACgFgMgLQADgDAOADQALADAFAGQAIgBAHAEIAEAEQACABAJgCIATgBIAYAFQAVAGgFAGIgEABIgKgCg");
	this.shape_4.setTransform(564,-6.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#308300").s().p("AhbAfQgMAAgCgBQgEgBAAgIIAAgLQgBgZACgFIACgGIAPgEIAGAEIAIAAIAHACIAJAHIABADIABAFQABACAFABQAFABACADQAKgLARgDQATgEAIAMQACADAHADIAIACIAFACIAJgCQAHAAAhAGIALAAQAHAAADACIAHAGQAEAGgBADQgCADgLAAIg6gBIgxACQgnAEgLAAg");
	this.shape_5.setTransform(566.5,-6.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004E00").s().p("AgJAHIgXADIgGgBQgBgGAEgDQAEgCAFACIAGgEIACgFIACgDQAGgEAKAAQAGAAARAJIAOAJQAEAGgFAJQgYgPgVAFg");
	this.shape_6.setTransform(133.3,-9.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004E00").s().p("AA7AyIgXgFQgLgCgRADIgaADIg3gBIAAgFQgBgUAOgBQgJgMAEgDQACgCAPgBQAAgEAFgVIAAgJQABgFAEgCIAGgEQACgBAAgFQADgCANgBQAJAAACABIADAFIABAEQADADAFAAIAIgBQAOACAGAKQACAEAEATIgVgQQgNgJgKADIgEACIgEADIgIAAQgEABgEANQARgHAGAAQAHgBANAGQATAIAHATIgTgEQgJgBgHAIIAYAAIALAFIANABQAHAAAEAEQAHAHAAAFQgBAHgJAAIgGgBg");
	this.shape_7.setTransform(155.6,-10.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2E7500").s().p("ACmBLQiaAAgygCQgwgBgUgFQgkgKgIAAIgSgCQgJgCgFgIQgCgDAAgFIgBgIIgDgHIgCgHQAAgHAEgGIAJgIIADgEIADgEIAGgCIAJgJQAGgEAHAAQAEgBAOAHIAJAEQAVAHAEALIACAGQABACAFABIAAAOIAIAAIAHABQADACACAIQADAIACACQAEADAKgCIAPgEIAYAAIADgUQAFAAADgBQAAgTADgCQACgDAOgCQgJgYAOgLQAHgGADgGIAHgKQAJgKAPgBQAVgBAJARQANgCAGAEIAIAJIAEAMIAFADQADACABADIABAPIAEALIACAJIAAAEIAAAEQACACAGAAIAIAAQANAFADALIAKAVIABAKQABAGgCACQgCAEgJAAg");
	this.shape_8.setTransform(147.1,-10.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004E00").s().p("AiXA8QgOgFgEgHQgEgHAAgPQgCgbAHgHIAWgdQAGgIAKgGQAOgGACALQAMAAAKAIQALAJAAALQAXAGAAAUQAKgIgFgJIgMgKIgCgJIgFgFIgGgDQgIgMALgIQAFgEAOgBQARgDADAMIAAAIIAKARQADAIgBALIAKADQAGACADADIADAGIABAHIACACIAEACIADAIIADAPQAEgKgFgRQgCgIgCgCIgIgEQAHgCALAJQAIAIALgJIAEgFIAAgFQABgHAIgHQAKgKAMAGQAcANAHAKQABgUgKgIIgHgCQgEgBgCgDIgHgNQgBgIATgIQAVgGARAMQARAMgCAVQgGgCgMgIQgKgIgKABQAAAFANAIQAPAJACAGIAAAKQABACAFABIAHABIAHANIAKAHQAEAEABAGQABAHgDAJIgGAPIjpAEIgOAAQgyAAgUgGg");
	this.shape_9.setTransform(201.9,-10.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2E7500").s().p("AifBGQgngQADgcQABgKAJgMQAMgNACgGIAOgTQgBgKAHgIQAGgIAJgDQAVgHANAUIAMgFIAMgDQAugPAMASQACADAAAIIAAALQAAAEAFAJQAEAIAAAFQAHgFALAGIASAJQAEgSADgEQAGgIAJgDQALgEAIAEQgIgJAFgMQAEgJALgIQASgNARADIAIAGIATAKQAMAGAEAJQAHASgGASQAPAJACAPQAPAAAEATQAEATgLAIQgWASgqAAIhFgFQgXgBgkADIg9AGIgTAAQgzAAgYgKg");
	this.shape_10.setTransform(201.7,-11.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#005B00").s().p("AhfBHQghgFgagQQgigUADgcIAUgjIAWgeQARgQAPAKQAEADACAGIAEALIAGAHIAEAJQgEgUAbAVQASALAJAfQAOgFAEgLQACgGgCgEIgFgIIgCgIIADgIQAGgKAKgHQALgIAJAEQAMAEAGAXQABADgFAXQgDAMARACQAXACAJAEQARAGAIAOQAVgQARACQAGABAFADIAJAGIAMAEQAIACAEAEQAPAPgHAUIgFgBIgNgFQgagIgsgCQgaAAhGALQgjAGgcAAQgSAAgOgDg");
	this.shape_11.setTransform(247.6,-9.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2E7500").s().p("AAJBiIg/gFQgTgBgjAEQgkADgSAAQgSgBgNgNIgUgdQgEgEgOgIQgMgHgCgFQgFgKALgPIASgTIAFgJQADgEAGAAIAJgKQgBgKAHgEQAMgGABgBQADgEABgIIADgMQACgHAKgGQAJgFAHgBQASgCAEAIIAFAYQAXgBAJAQIADALQACAGAGABIASgWQANgNALAFQAJgOAUAKQASAJADAOQACAIgDASQgDARACAHIARgCQALAAgBAJIAUgOQAMgJALgBIALABIAJAEIAHACIAIgDQAHgDAbgBIATgCQALgBAJAFQASAJALAHQAHAGACAHIAFAOIAIAUQAEAKgDALQgEAOgGADQgKAFgUgEIgegGQgUgDgfAHQgpAKgKABIgaABIgngCg");
	this.shape_12.setTransform(250.6,-10.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004E00").s().p("AAOANQgLgFgMAGQgMAFgLAAIgGgBQgBgLAEgHQAEgFAFAFIAGgJIACgJQAAgEADgDQAHgIAJABQAIAAAOASQAMAOACAEQAFALgGASQgNgQgJgEg");
	this.shape_13.setTransform(190.6,-16.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2E7500").s().p("AA8A0QgugBgVgGQgigKgJAAIgSgBQgJgCgFgIQgCgEAAgEIgBgIIgDgIIgCgFQgBgGAFgGIAPgTIAGgCIAJgIQAFgFAHAAQAHAAAMAGIAJAEQASAHAFALIACAIQABACAEABIABAMIAHAAIAIABQACACADAIQACAIADACQAEADAKgCIAPgDIAUAAIADAhg");
	this.shape_14.setTransform(194.5,-16.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#004E00").s().p("AAlAsIgOgFQgHgBgLACIgQADIgigBIAAgEQgBgTAJAAQgGgLADgDQABgBAJgBQAAgGAEgQIAAgIIACgGIAFgEIABgFQACgCAIAAIAHAAIABAEIAAAEIALACQAJACADAJIAEAUIgNgPQgIgIgGADIgFAFIgDAAIgCAAQgDABgCALQALgGADAAQAEgBAIAFQANAIAEAQIgMgDQgGgBgEAHIAPAAIAHAFIAIAAQAEAAADAEQAEAGAAAEQgBAHgGAAIgDgBg");
	this.shape_15.setTransform(166.2,-11.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2E7500").s().p("AA4BDIh0gBIgCgeIACAAIACgSIAGgBQAAgRACgCQACgDAJgBQgGgVAJgLQAEgFACgFIAFgIQAFgKAJAAQANgBAFAPQAHgCAEAEIAGAIIACAKIADADIADAEIABANIACAKIABAPQABACAEAAIAFAAQAIAEADAKIAFATIABAJIAAAHQgCADgEAAIgBAAg");
	this.shape_16.setTransform(166.5,-10.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#005B00").s().p("AhCCCQhBgUgageQgLgMAAgYQAAgfgDgIIgIgQQgFgKgBgHIAAgJIgCgIIARg4QgBgJAKgJQAJgIAMgFQAOgEAJADQAKAEABAMQALgEAPAdIASgIIAMgIQAHgEAHAAQAXAAAVAWQAVAWACAYQAJgKgBgQQAAgOgJgMQgEgGgKgEQgKgFgEgEQAKgKAVgCQAIAAAHAEIANAGIAPAEQAHADAGAHQAFAGADASQABAIAMARQALAOgCAOQgBAFgEAEQgGAFgBADIAAATQAUAFgBANQANAAAJAKQAHAJgBAOQgLgMgSgFQgRgFgPAAQgWABgCAPQAFABAJgDQALgFAEAAQAKgBAHAFIAMAPIAHAHIAGAHQANgIAQAFQAQAGACANQACAJgDAIIgCAGIgIAAIh2AIQgtAFgYABIgPABQgYAAgQgFg");
	this.shape_17.setTransform(294,-15.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#005300").s().p("AAVCRIgMgEIgegEQgQgDgMgMIgQgTQgJgKgLgFQgEgCgQgCQgNgBgEgFQgCgCgBgJIgDgMQgMgcACgVQABgMAHgNIAOgZQAEgIAAgTQAAgRAGgIQALgQALgFQAFgCAHACQAIACADgCQADgBADgGQADgFAEgBQAFgBALAIIAPAKQAAgJAKgMQAIgLAJgBQAHAAAJAJQALAKAFACIAVACQANABAGAGQAMANgMAHQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAgBgBIgEgDQgbgIgLABIALAFQAGACAEAEQAFAHABALIABATIAOgBQAIgBAGADQAOAFAPANQAPAPAEAMQAEAOgUAHQgaAJgIgIQgDgDgDgHQgBgGgMgCQgqgJgBARQAQAAATALQAVAMAGANIAHAWQAIAAAHAKQAGAIABAIQABAQgRARQgRARgPAAIgmANIgCAAQgEAAgFgCg");
	this.shape_18.setTransform(312.4,-19.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1D7300").s().p("Ah0CnQhKgLgsgaQgYgNgFgeQgIgnAJgQQACgEALgKQAJgJACgGIABgEIgBgGQACgVAYgVQAMgKACABIAkg6QgBgQAOgQQAOgQAQAEQAEABAHAEIAKAGIAWgCQAIACADACQgBgLAOgJQAMgIAMgCQAagDAgARIAGADIANAEQAJADAFADQANAJAFARQAFASgGAOQAQgJAVAKQAUAIAKARIAIAMQAIAIADALQADANgEAJIgIAIIAAAFQgFARgRAEIgNACQgGAAgFAFQgKAJgBAIQAIAHADALQAEANgJAHQAFAGABAJQAAALgFAFQAIgDAPAAQARgBAGgBIATgIQALgEAJADIASALIAfAAQARABAHAOQAEAIgBAOQgFgBgNAFQgVAGhOAMQg3AJg+AAQhGAAhQgMg");
	this.shape_19.setTransform(314.8,-18.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#005300").s().p("AAPB0IgegKQgVgGgNgBIhpgBQgUAAgLgGQgqgWgJgUQgFgNABgYIACglQABgOAEgHQAEgHALgLIAXgaQAMgOASgGQAMgEAVgBIANgDIAMgBQAOAFAMAfQACAGAFAgIAfgGQADgBABgFQACgEAIABQAHAAAEAGIAGAMQAMAAANAOQACgSAPgJQANgJATABQAWAAAQAPQAGAFADAJQAFALACADIAKAFQAFACABAGQABADgDADQgEADABADQABAFAGADQAIADACADQABACgBAEQAAAEABACIAHADIAGACQADAFgBAKIAAAQQAKgDAEgQQAEgPgFgJIgGgHQgFgEAAgCQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBABAAIAEAAQAHgIAHAAIAQABIAUADQAJADAFALIABAKIAHAKQADAJgDAHIgGAMIgJAVIgIAdQgWADheAAQhEAAgSgDg");
	this.shape_20.setTransform(344.6,-12.9);

	this.instance = new lib.Symbol29("synched",0);
	this.instance.setTransform(343.6,-15.6,1,1,0,0,180);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#005300").s().p("AATB5IgKgDIgbgDQgPgDgLgKIgOgQQgIgIgKgEQgEgCgOgCQgMgBgEgEIgFgTQgLgZABgQQABgKAHgLIANgUQADgHAAgQQAAgOAFgHQAMgOAIgDQAEgCAHACQAHABADgBQADgBADgFQACgFADAAQAFgBAKAGQAMAIACABQAAgIAJgJQAHgKAIAAQAGAAAJAHQAKAJAEABIASACQANABAFAEQALALgLAGQgDACgCgBQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAQgbgHgHABIASAJQAFAGABAJIABAQIAMgBQAHAAAGACQANAEANALQAOAMADAKQAEAMgSAGQgXAHgIgGQgCgDgDgGQgBgEgLgDQgmgHgBAOQAPAAARAJQATAKAGALIAFATQAHAAAHAIQAFAHABAGQABANgPAPQgPAOgOAAIgiAKIgCAAIgIgBg");
	this.shape_21.setTransform(216.3,-17.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#055F00").s().p("AhpCLQhEgJgngVQgUgLgGgZQgHghAIgNQACgEAKgIQAJgIABgFIAAgIQACgQAVgTQAMgIABABIAhgxQgBgNAMgNQANgNAOADIATAJIAUgBQAHABADACQAAgJAMgIQALgGALgCQAWgDAeAOIAFADIAMADIAMAFQAMAIAFAOQAEAPgFAMQAOgIATAIQASAHAJAOIAIAKQAGAHADAJQAEALgEAHIgHAHIgBAEQgFAOgOAEIgMABQgGAAgEAEQgJAGgBAJQAHAFADAKQADAKgHAGQAEAFAAAIQABAJgFAEQAHgCAOgBIAVgBIARgHQAKgEAIADIAQAJIAcABQAQAAAGAMQAEAIgBAKIgQADQgVAGhFAKQgyAHg3AAQg/AAhJgKg");
	this.shape_22.setTransform(218.4,-16.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#94C128").s().p("AgSBYQg4AAAAgDIgMgFQgHgCgEgEQgHgHADgMIABgNIgGgFQgFgDgCgCQgCgEAAgHIAAgMQgBgJAIgCQAKgDADADQABgFAJAAQAJAAADADQgDgEABgFQABgGAMgGQgCgIAKgBQAHgBAGADQgEgLABgGQAAgDAHgMQgEgDABgFQABgEAEgEIAPgFQAJgFAKAFQAHAFACALQARgCABAFQAKAAADAMQAGABADAEQACAFgDAGQgEAEAAAEIAIgBQAGABAAAEQAFgHAOAHQAPAIAFAOIARAHQAIADgKANIgPASQgDAGAAAEIADAJQACARghAHIgYAFQgEADgoAAIgPAAg");
	this.shape_23.setTransform(75.7,-11.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#075D00").s().p("ABrAWIgYgDQgKgBghAAIgzABQgbgBgNACQghAFgVgFQgPgCAAgIQgBgEAGgIIAKgFQADgCAJADIAHgGIAFgCIgBgDIgCgCQgBgFAJABQANADACAMQAKAAAEACQAEACACAEIABAEQACAHASgBQACgIAHgCQAFAAAPAIQACgFgMgLQADgDAOADQALADAFAGQAIgBAHAEIAEAEQACABAJgCIATgBIAYAFQAVAGgFAGIgEABIgKgCg");
	this.shape_24.setTransform(414.7,-5.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#075D00").s().p("ABFAgQhFgEhQAAIijAAQgGgMAIgNQAIgLAOgFQAQgGAgADQAHAAAEAFQAFAHADACQAFACAJAAIAPgBQgHABACAHQACAIAIgBQAFAAACgHIAEgIQAKgNAUABQAGAAALAFQAHACAGAAQAAAEAUAGQAEgEAMgDQAMgDAEgDIADgDQACgCADAAQAIgBAGAGQADAEgCADIgGAEQgGALAKADIAGgKQADgGAIAAIADACIADABQAGACAGgEIAJgGQANgHANAAIAVAGQACgHALgEIARgGQADgBADgGQACgEAGgBQANgCATAGIAJAGIAKAAIAGACQAJAEACAHIAMAFIAEAUQACANAAAJIggABQgxAAhhgEg");
	this.shape_25.setTransform(386.7,-5.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#308300").s().p("AkHAkQgEgCABgKIADgLQAKgSAkgHQAagEAGABQAOABALAIIAHAFIAJADQALADARgGQAVgKAHAAQAHgBAJACIANAEIAMAAIANAHQAJADAMgFQANgGAFAAQAIAAAKAFQANAFAEABQAFABAHgCIAjgRQAGgBAVAFQgBgMATgIQALgGAOACIAYAGQADgGALACQAIACAGAEIAGAHQAEAFAEAAQAIgQAKAAQATgCAHANIAAA3g");
	this.shape_26.setTransform(387.4,-6.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#308300").s().p("AhbAfQgMAAgCgBQgEgCAAgGIAAgMQgBgZACgFIACgGIAPgEIAGAEIAIAAIAHACIAJAGIABAEIABAFQABACAFABQAFABACADQAKgLARgDQATgEAIALQACAEAHADIAIACIAFACIAJgCQAHAAAhAGIALAAQAHgBADACIAHAHQAEAGgBADQgCADgLAAIg6gBIgxACQgnAEgLAAg");
	this.shape_27.setTransform(417.3,-5.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#197500").s().p("AgFAKIgDgMQAAgMAGgDQAGgCAAACIAFgCIgFAEIgCAEIgCADIgBAGIgBAIIACAFIAEAIIgCABQgFAAgCgKg");
	this.shape_28.setTransform(62.4,-6.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#197500").s().p("AAFANIgFgLIAAgEIAAgGQgEgIgJgEQAGgDAGADQABABACAEIAEAGQADACgBAFQAAACABADQAFAIgBACQgCAIgIACQACgGAAgEg");
	this.shape_29.setTransform(85.3,-6.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#197500").s().p("AAIAKIgEgHIAAgEIgEgGIgGgFQgFgFAAgBIgBgCQARACAFAPQADAEgBAIQAAAJgGAEg");
	this.shape_30.setTransform(75.2,-6.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#004E00").s().p("AjzAlIgJgOQgFgIAIgHIAHgEIAEgGQAKgMAMABIAFADIAFAEQAKAFAOgHQALgFAGADIAOAIQAMACAFgBIADgDIAEgFQAGgEALADIARAFIAHAAIAHgEIAKgDQACgBADgHQADgGADgCQAHgEATAAQANAAAEADQAFADAAANIAQgCQAIAAAEACQABADACABQAJAGAQgHQAFgCALAAQALgBAFgBIANgGQAIgCAGADIAKAFQAFAEAGgCIAKgIQADgCAIADQAHACAEgBQADgCAHgHQAFgGAGAAIAOADIAQgGQAJAAAIAFIAGAGIAEAHIAGACQAFAEgBAIQgCAIACADIAIAJQACAFgDAHQgCAGgDADg");
	this.shape_31.setTransform(71.9,-7.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#197500").s().p("AkFArQgMgWASgVQAFgGALgFQAQgJAJADIALAHQAHADAGgBQAXgFAMAGQAHAEAFgCIAHgEIAIgEQALgCAOAEIAOAEQACgGAHgDIAMgFIADgEQAJgKAMgCQAPgDAOAEQAPAFACAOIAMABIAOAEIAHADIAQgGIAHgBQACAAADADIARgGIAUABQASABAEADQAFgHALgBIAJgBIAEgEQAIgFAMgDQAPgDAFAHQAGgNAQACQAIACAEAEIAFAFIANAHQAIAEAEAFQAJAOgFAIQAFAEACANQACANgFAGg");
	this.shape_32.setTransform(72,-7.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#075D00").s().p("AjyAsQgLgLAGgRIAKgYIAMgHQACgIAJgFIAGgCIAKAAIAJgHQATgJAOADQAGACACAFQACAHADACIASAHQAKAEACAJIAWgHQAMgBANAJIAKAHQAFAGAGgCIADgCQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAGAAAFAHIACAGIADAGQAKgDgGgOIgGgGQgCgDAEgEQAFgIAJABIAEADIAEAEQABADAPAEQAMADAEAGQATgHAAgGQAIAAAFgDQALgGAGAAQAUAAALAQIAEAKQACAIAFAAQAIABABgKQACgJgHgBIAPABQAKAAAEgCQADgCAFgJQAEgGAHgBQAfgEASAIQANAHAIANQAIAQgFAPQghACgxgBIhSgBQhLAAhKAFQhmAFgwAAIgbgBg");
	this.shape_33.setTransform(121.9,-6.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#308300").s().p("AkKAsIAAhDQAIgQASABQAKABAJAUQADgBAEgGIAGgJQAWgOAGAMIAYgHQAOgCALAGQATALAAAOQATgGAHACIAJAFIAIAGIAHAEIAMAFQAGAEAFgCQAFgBAMgHQAKgGAIAAQAFAAAOAIQAMAGAIgEIANgIIAGgBIAGAAIAOgEQAIgDAHAAQAHABAVAMQASAIALgEIAIgDIAHgHQAMgKAOgBQAGgBAaAFQAkAJAJAWIADAOQABALgDADg");
	this.shape_34.setTransform(121.5,-7.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0C6900").s().p("AmbAYQg1AAgigKIAIgLQgBgLAVgBQACgBAKADQAJADADgCQACAAADgIQADgHADgCIAEgBIAFAAQAQgDAHAGQAEgGAKACIARACIAbgCQAOABAGAMIAGAMQAFAHAEgEQAFgDgIgKQgJgNAAgCIALAIQAGADAGgCIAMgHIAPACIATgBQAMABAFAHQAJAJAEAPQAEgFgCgFIgFgLQAFABAKAHQAIAEAGgBQAEAAALgCQAKgEAHAAIAgAGIAoAAQAxgBAfgIQAegIAIAAIAfgCQAYgFAWAFIA4ARQAPACAWgJQAbgNAKgBQAmgDAfAGIAlADQAWACAOAGQAiANAagEQAcgIAMAEIAaALQgBAHgRABIgWAAQgnAAgsAFQguAHhnAAg");
	this.shape_35.setTransform(197.9,-4.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#308300").s().p("AlXAWQgGgJgGABQgVAEgXAAIgoAAQgUgBgVAEQgVADgHAAQgEAAgDgHQgDgHgEAAQgHgXA3ACQAHAAAGgEIAOgJQAGgDAIABIANABQAFgBANgEQAKgEAIABIAFACIAGACIAagEQAlACABASIAAgDQAXgSAnANIAiARQAFACAUgFQALgCAdAEQAIABATgBQATgCAJACIAGACIAHACQAIAAANgDIAVgEQALAAATgFQARgFAKgBQANgBAvAAQAXAAAtALQAQADAGAAQAIgBARgFQAQgEAJgBIAtgHIAXAEIAbgCQAZgCAdAIIANAHQAJAFAFABQAGABAMgFQAjgMAeALIAdAIQAOAGADARQgjACg4gBIhcgCQhiAAg+ADQhzAGgWAAIhbgGIhWgBQgWgBhuAAIhBALQgFgBgIgLg");
	this.shape_36.setTransform(198.8,-5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#004E00").s().p("AAeAmQhagBgdgEQgZgEgngCIhAgCQgBgJAGgJQAGgIAJgCQAAgSAhAAQAAgNAcgCQAOAAALAFIAKAHIATABIAGACIAHACQAPABAFADIARAPQABgJgFgFIgNgKQAFgFAVgEIAMAAIAKgEQAHgBAPAFIAIAEIAFAGIAHAFIAGAGIACAIQABAEACAAQAJAIgBgLIgDgRQAWgDAHAAQAMAAAGADIAEAEQADAEAEAAIgEAJQgCADABADQAHACAHgHIAMgOQAFgDAJACIAOACIAQgDIAMgFQAIgDAGAAQAQACgFAMIgFAGIgGAGQgHAGAIAJIgIAJQgKAAgOADIgXAGQgjAFhCAAIgVAAg");
	this.shape_37.setTransform(24.6,-5.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#197500").s().p("AgxAtQgigFg3AAQhDgBgVgBQgTgCgDgEQgEgHAFgGIAJgIIAHgIQALgPAPgHIAogSQAXgKAUADQAFABATALQAOAJAJgEIAAgEIAMABQAIABAEgBIADgDIAEgFQAHgHAFgBIAMABIAKgDQAKgCALAGIAlAZIADgBQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAgBQAUgGAHAAQAYABAGANQAEAAAGgDIAJgFIAOAAIADgCQABgBAAAAQAAAAABgBQAAAAABAAQAAAAAAAAIAOAAQAFAAAOgEQALgDAIACQAPACAUAMIAAANQAAAEAIAJQAGAKgCAJQgCAFgCABIgIACIg9AFQhbAJhAAAQgpAAgegEg");
	this.shape_38.setTransform(25.1,-6.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#055F00").s().p("AAvA7QglgFgNABIgaAEQgXAEghgGIgUgCIgDgdIgBgRIADgGIAGgDIAIgPQAGgKAHAIIAAgDIADgBQACgEABgJQABgJADgEQALgPAIADIAFAHQgCgIAUgBQAPAAAJACQAXAHACATIgCAMQgBAGAFAEIAQgIQAMgFABAJQAEgJAYARQAYAPgDAJQANANgMAKQAKAFgDAHQgCAIgKABIgQABQgPAAgUgDg");
	this.shape_39.setTransform(100.4,-13.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#2E8000").s().p("AANA8IgFgDIgGgCIgIAFQgGACgHgBIgNgEQgKgCgDgEIgEgHQgBgHgFgCIgHAAQgDAAAAgFQgFgCAAgFIABgIQgIgDAAgIQAAgCAFgFIADgHQABgFAEAAQABAAAAABQABAAAAAAQABAAAAAAQAAAAAAAAIABgCIAAgDQACgIAIAAQAAgNAEgCIAHAAQAFABABADIAHgOQAFgIAGAHQACgHAGgBQAGgBADAEQAEADAAADIAAAGIAMgDQAHgBgBAIQAKAAACADIACAEIABADIAGAEIAEAIIABAFIALgCQAGAAACAHQAEAKgBAEQAIAFgDAHQgCAHgHAEQAFAJgHAHQgHAGgKACIgFAAIgFABIgCAEQgGAGgIAAQgEAAgGgCg");
	this.shape_40.setTransform(125,-12.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#005300").s().p("AAEA8QgNgBgfgKIgcgGQgRgDgFgLQgDgHAEgLIAIgQQAEgMAJgOQABAAAAAAQABAAAAAAQABAAAAAAQABABAAABIAMgSQAJgNAQgBQALgBAGADQAEACAGAIIABAHQAFADAEgCIAIgFQAbgMAEASQACgEAKAEQAJAFADAFIAHAOQAWAigTAEQABAHgFACQgHAEgBACQgCADAAAFQAAAFgDADQgIAJgWAAg");
	this.shape_41.setTransform(172.2,-10.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#055F00").s().p("AAHBOIgcgHIgZADQgPABgIgJQgDgEgBgFIgCgIQgBgDgKgHQgJgGgBgLQgBgKAGgJIAGgDIADgKQAGgKAHgCIADgGQgIgGADgLQABgGAFgEIALgHIAHgIQAKgGAOgCQARgCAAANQALABAHAJQADgMAQAEIAGAEIAMABQAMAEACAUQAAAGAEAHIAIAMQAHgFAIANIAGAMQADAKgFAIIgKAOIgEADIAAADIAAAEIgIAGIgCAFIgCAFQgIAIgZgGQgHAKgMAAIgJgBg");
	this.shape_42.setTransform(182,-12.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#2E7500").s().p("AAFA3IgqgFIgPAAQgIgCABgIIAAgKQAAgaAQABQABgFAEgJIAIgOIAEgNQADgIAFgEQAGgGAMgBQALgCgDAMQASACAGANQAEAIgBAVIALADQAGADACAHIAAAKIAEAIQAGATgQAFQgIACgNAAIgWgBg");
	this.shape_43.setTransform(229.3,-10.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#94C128").s().p("AhIBcIgjgEQgNAAgBgBIgCgIIABgIIgBgVQgCgfABgLIAGgQQABgDgCgJQgCgMAGgDQgGgNAKgHQAEgDAOABIABgCIADABIADgBQACgBABgEQABgDADAAIAAgGQABgIAUAAQACgEAJgBQAIgBAEADQAFADABAFIABAJQADgBACADIADAHIAFAGIACgCIADgBIABgDIABgDIAHgFIAAgEQABgDAEgDIAHgEIAMgLQAFgDADADIACAEIAEACQACAAACAFQAAAAABABQAAAAABABQAAAAABABQAAAAABAAIAFADIABAFIADADIAAAFQgBAAAAABQAAABAAAAQAAABABAAQAAABAAAAIAJgFQABgHAHAAIALADIAAgBQAGgBAGAMIAHAJQAGgFAFADQARAJgEAhIgIAPIgDAMIgBALQgGAcgdAEIgrAGIhAATIgUAFIgGABIgRgCg");
	this.shape_44.setTransform(93.5,-16.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1B7100").s().p("Ag1BxQgggMgKgSIgFgTQgDgNgFgDQgDgCgKABIgOACQgWAAgNgPQgVgbAMgXIAcgjQgBgOALgLQALgLANAFIAFAEQACADAGgCIAKgJQAHgGAEAHQACgMALgKQALgKANgCQALgBANAFQAQAFAAAKQAFgKAOgBQANAAALAGQAOAHAAAPIAAAcQADAPAMADIAIgBQAFgBADADQAEAEAAALQADAAAEACIAGADIAWgBQAMACAMAJQANAJgFALQALAHACAPQABAHgDAGIgFAMQAMAEAIALQAIALgDAMQgGAVgrgKQgLgDgLACQg5AIgPAAIgvADIgDAAQgbAAgRgHg");
	this.shape_45.setTransform(247.1,-19.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#096200").s().p("ABPCaIgQgHQgbgHgmAMQgVAGgMABQgSAAgNgMIgTgVQgMgOgKgFQgJgFgTAAIgeACQgTgCgKgIQgKgIgDgSIgDgIIgHgDQgggYgDgjQgBgSAGgVIATgzQAEgHAJgEQAMgEAIAEIAPgLIAAgLQADgWAcgIQAMgDARALQAJgNAYAAQAKAAAbAEQAvAHACAeIgJgBIgIgCQgJgBgFALIAPAGQAHAFACAIIAEANIAEAGQAEAEAAADQACgLARACQARADADAKQAMgBAMAHQANAIABALQAFgNACgBQAMgIAgAKIADACIAEABQAGACAOgCQAPgCAGABQAWADAQAUQAQATABAVIAAAQIAMAUQAJAXgEANIgHAOIgDAMQgCAFgEADQAAALgEADIgEACIgEABIgFAIQgLANgWgDQgbgDgHACQgSAGgSAAQgTAAgSgHg");
	this.shape_46.setTransform(268.7,-17.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#1D7300").s().p("ACoCfQgTAAgcgEIhNgLQgTgCgMABIghAFQgZAEgOABQguACgVgZIgHgOQgFgIgFgDIgOAAQgkACgFgBQgSgDgOgMQgOgNgGgRQgCgHgBgSQAAgQgEgIIgIgMQgDgGAEgKQAEgNASgQIAlgZIAFgTQAEgMAGgHQAZgcAEAQIATgOIAIgGQAOgOAWgDQAegFAKASQACACABAKQACAJAEACIAXgNQAPgHAGANIAggQQAtgLAcANQAPAHACAVIAAARIADAEIAGABQASAHAGATQAGARgFAUIgDAKQgDAHABAFIAFAIQADAGAAAGQAUgBAYAOQAbAPABATIAJAAIAJABQAWAGABAbQAAAJgJARIgHAPQgRAYg9AAIgFAAg");
	this.shape_47.setTransform(293.1,-16);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#94C128").s().p("AgHBfIgVgKIgMgCIgMABQgigCgBgRIABgJQAAgDgEgGIgSgQQgMgKAIgFIAPgMQACgMANgLQANgJAGAGQgBgEAGgCIAIgBQAAgDgFgEQgFgFACgFQACgFAGgCQAAgMALgCQAAgGARAAQAAgLAIgHQAJgGAHADIAQADQAEACACAFQADAFgEADQAJAKABADQABAGgCAMQAGgEAHAAQAJgBABAHQAMAEACAGQACAGgCADQADgDAIgCQAJgBACAFQADgFAJADQAJABABAKIACAMQACAEgCAFIgLAMQgBACAEAKQAEAMgFAIQgDAFgGADIgLAHQAAAEgHAHQgHAFgLADIgHAAIgHACIgDAEQgHAGgSABIgLAAQgJAAgGgBg");
	this.shape_48.setTransform(112.2,-15.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#005B00").s().p("AgeCCQhBgUgbgeQgJgKgnAAQgkABgEgNIgNhNQAAgDAfgSQAfgRgCgDIAcgpQgBgJAKgJQAJgIANgFQANgEAJADQAKAEABAMQAMgEAOAdIATgIIALgIQAHgEAHAAQAWAAAWAWQAVAWACAYQAKgKgBgQQgBgOgIgMQgFgGgJgEQgLgFgDgEQAKgKAUgCQAIAAAIAEIANAGIAOAEQAHADAGAHQAGAGACASQABAIANARQAKAOgCAOQgBAFgEAEQgFAFgBADQgCAEACAPQATAFAAANQAMAAAJAKQAIAJgBAOQgMgMgSgFQgQgFgPAAQgWABgDAPQAFABAJgDIAPgFQAKgBAIAFIAMAPIAHAHIAGAHQANgIAPAFQAQAGADANQACAJgDAIIgDAGIh9AIQguAFgZABIgQABQgVAAgQgFg");
	this.shape_49.setTransform(35.5,-15.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#2E8000").s().p("Ah9CFIgIgOQgEgIgGgDIgOAAQgjACgGgBQgSgDgOgMQgOgNgFgRQgCgHgBgSQgBgQgEgIIgIgOQgDgEAEgKQAFgNASgQIAkgZIAFgTQAEgMAGgHQAagZADANQADgDAQgLIAIgGQAPgOAVgDQAfgFAKASQABACACAKQABAJAFACIAWgNQAPgHAGANIAggQQAtgLAcANQAQAHABAVIAAARIADAEIAHABQASAHAGATQAFARgFAUIgDAKQgDAHACAFIAEAIQADAGAAAGQAUgBAZAOQAbAPAAATIAJAAIAJABQAWAGABAbQABAJgJARQgCAChyAKIijAQQgYAEgOABIgIAAQgpAAgSgXg");
	this.shape_50.setTransform(38.2,-16.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#075D00").s().p("Ah4AXQgFgGAVgGIAYgFIATABQAJACACgBIAEgEQAHgEAIABQAFgGALgDQAOgDADADQgMALACAFQAPgIAFAAQAHACACAIQASABACgHIABgEQACgEAEgCQAEgCAKAAQACgMANgDQAJgBgBAFIgCACIgBADIAFACIAHAGQAJgDADACIAKAFQAGAIgBAEQAAAIgPACQgVAFghgFQgNgCgbABIgzgBQghAAgKABIgYADIgKACIgEgBg");
	this.shape_51.setTransform(-12.1,-5.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#075D00").s().p("Aj2AjQAAgJACgNIAEgUIAMgFQACgHAJgEIAGgCIAKAAIAJgGQATgGANACQAGABACAEQADAGADABIARAGQALAEACAHIAVgGQANAAANAHIAJAGQAGAEAGgCIADgBIADgCQAIAAADAGIAGAKQAKgDgGgLIgGgEQgCgDADgEQAGgGAIABQADAAACACIADADQAEADAMADQAMADAEAEQAUgGAAgEQAGAAAHgCQALgFAGAAQAUgBAKANIAEAIQACAHAFAAQAIABACgIQACgHgHgBIAPABQAJAAAFgCQADgCAFgHQAEgFAHAAQAggDAQAGQAOAFAIALQAIANgGAMIijAAQhRAAhEAEQhhAEgxAAIgggBg");
	this.shape_52.setTransform(15.9,-5.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#308300").s().p("AkKAkIAAg3QAHgNATACQAKAAAIAQQAEAAAEgFIAGgHQAGgEAIgCQALgCADAGIAYgGQAOgCALAGQATAIgBAMQAVgFAGABIAjARQAHACAFgBQAEgBANgFQAKgFAIAAQAEAAAOAGQAMAFAJgDIANgHIAMAAIANgEQAJgCAHABQAHAAAVAKQARAGALgDIAJgDIAHgFQALgIAOgBQAGgBAaAEQAkAHAKASIADALQABAKgEACg");
	this.shape_53.setTransform(15.2,-6.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#308300").s().p("AA9AfQgLAAgngEIgxgCIg6ABQgLAAgCgDQgBgDAEgGIAHgHQADgBAHAAIALAAQAhgGAHAAIAJADIAFgDIAIgCQAHgDACgEQAHgLAUAEQARAEAKAKQACgCAFgBQAFgCABgCIABgEIABgFIAJgGIAHgCIAIAAIAGgEIAPAEIACAGQACAFgBAZIAAAMQAAAGgEACQgCABgMAAg");
	this.shape_54.setTransform(-14.6,-5.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#075D00").s().p("Ah4AXQgFgGAVgGIAYgFIATABQAJACACgBIAEgEQAHgEAIABQAFgGALgDQAOgDADADQgMALACAFQAPgIAFAAQAHACACAIQASABACgHIABgEQACgEAEgCQAEgCAKAAQACgMANgDQAJgBgBAFIgCACIgBADIAFACIAHAGQAJgDADACIAKAFQAGAIgBAEQAAAIgPACQgVAFghgFQgNgCgbABIgzgBQghAAgKABIgYADIgKACIgEgBg");
	this.shape_55.setTransform(996.9,-5.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#075D00").s().p("Aj2AjQAAgJACgNIAEgUIAMgFQACgHAJgEIAGgCIAKAAIAJgGQATgGANACQAGABACAEQADAGADABIARAGQALAEACAHIAVgGQANAAANAHIAJAGQAGAEAGgCIADgBIADgCQAIAAADAGIAGAKQAKgDgGgLIgGgEQgCgDADgEQAGgGAIABQADAAACACIADADQAEADAMADQAMADAEAEQAUgGAAgEQAGAAAHgCQALgFAGAAQAUgBAKANIAEAIQACAHAFAAQAIABACgIQACgHgHgBIAPABQAJAAAFgCQADgCAFgHQAEgFAHAAQAggDAQAGQAOAFAIALQAIANgGAMIijAAQhRAAhEAEQhhAEgxAAIgggBg");
	this.shape_56.setTransform(1024.9,-5.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#308300").s().p("AkKAkIAAg3QAHgNATACQAKAAAIAQQAEAAAEgFIAGgHQAGgEAIgCQALgCADAGIAYgGQAOgCALAGQATAIgBAMQAVgFAGABIAjARQAHACAFgBQAEgBANgFQAKgFAIAAQAEAAAOAGQAMAFAJgDIANgHIAMAAIANgEQAJgCAHABQAHAAAVAKQARAGALgDIAJgDIAHgFQALgIAOgBQAGgBAaAEQAkAHAKASIADALQABAKgEACg");
	this.shape_57.setTransform(1024.2,-7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#308300").s().p("AA9AfQgLAAgngDIgxgDIg6ABQgLAAgCgEQgBgCAEgGIAHgGQADgCAHAAIALAAQAhgGAHABIAJABIAFgCIAIgCQAHgDACgDQAHgMAUAEQARAEAKAKQACgCAFgCQAFgBABgCIABgFIABgDIAJgHIAHgBIAIgBIAGgEIAPAFIACAFQACAFgBAZIAAALQAAAIgEABQgCABgMAAg");
	this.shape_58.setTransform(994.4,-6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#075D00").s().p("AhtAVQgFgFAUgGIAWgFIAQACIAKAAIAFgDQAGgEAHACQAFgGAKgDQALgDAEADQgKALABAEQANgIAFAAQAHACABAHQARABACgGIABgEIAFgFQADgCAJAAQADgMAMgBQAIgCgCAFIgCACIAAACIAEADIAHAFQAJgCACABIAJAEIAFAMQgBAGgNADQgUAFgegGQgMgCgYABIhVABIgWACIgKACIgDgBg");
	this.shape_59.setTransform(1397.4,-5.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#197500").s().p("AAAASIACgHIACgGIgCgMIgCgDIgBgDIgIgEIAIACQABgBAEABQAHAEgBAKIgDAKQAAAJgHAAIAAAAg");
	this.shape_60.setTransform(1328.8,-6.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#197500").s().p("AgLAMQgBgEAFgGQABgCAAgCQgBgEADgDIADgFIADgEQAEgDAGADQgHAEgEAGIgBAGIAAADIgDAKQgBAEACAFQgHgBgCgHg");
	this.shape_61.setTransform(1308.1,-6.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#197500").s().p("AgIgDQAFgOAPgCIgBACIgFAGIgIAJIAAAFIgEAGIACALQgLgIAHgPg");
	this.shape_62.setTransform(1317.3,-6.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#004E00").s().p("AjhAiQgDgDgCgGQgCgHACgDIAHgIQABgEgBgHQgBgHAEgEIAGgCIAEgGIAFgFQAHgFAIAAIAPAFIAMgCQAGAAAFAFQAGAHADABQADABAHgCQAHgCADABIAJAIQAFABAFgCIAJgGQAGgCAHACIAMAFQAEABALABQAKAAAEACQAPAGAIgFQABgBABgDQAEgCAHAAIAPACQAAgLAFgEQADgCAMAAQARAAAGADQADACADAGQACAGADABIAJADQAJAEADAAIAQgFQAKgDAFAEIAHAHQAFABAKgCIANgIQAFgCAKAEQAOAGAIgEIAFgEIAFgCQAKgBAJALIAEAGIAHADQAGAGgEAIIgIANg");
	this.shape_63.setTransform(1320.4,-6.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#197500").s().p("AjvAnQgEgFACgMQABgMAFgEQgFgGAJgNQADgFAHgDIAMgHIAFgFQAEgDAHgCQAPgCAFAMQAFgGANADQAMACAGAFIAEADIAIABQALADAEAFQAEgDAQgBIASAAIAPAEIAFgCIAGAAIAPAGIAHgDQAEgCAIgBIALgBQABgNAPgFQAMgDAOACQAKACAJAKIACADIAMAFQAGACACAGIAMgDQAMgEALACIAHADIAHAEQAEACAHgEQAKgFAWAEQAGABAFgDIAKgGQAJgDAOAIQALAGAEAEQARATgMAUg");
	this.shape_64.setTransform(1320.3,-7.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#075D00").s().p("AjgAgQAAgIACgMIADgSIAMgFQABgGAIgEIAGgBIAJAAIAIgGQAQgGAOADQAFABACADQACAFADACIAQAFQAKADABAHIAUgFQALgBAMAHIAJAFQAFADAFgBIAGgDQAGAAAEAFIACAFIADAEQAJgCgFgKIgGgEQgCgCAEgDQAFgGAIABQABAAAAAAQABAAABAAQAAAAABABQAAAAAAAAIADAEQADACALADQALACAEAEQARgFAAgEIAMgCQAJgEAHgBQASAAAKAMIADAHQACAGAFAAQAHABABgIQACgGgGgBIANABQAJAAAEgCIAIgHQADgFAGgBQAegCAPAFQAMAFAHAJQAHANgEALIiVAAQhFAAhDADQhZAEguAAIgbgBg");
	this.shape_65.setTransform(1428.4,-5.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#308300").s().p("AjyAgIAAgxQAFgMASABQAJABAIAPQADgBADgEIAGgHQAUgLAGAJIAWgFQAMgCAKAFQASAJgBAKQASgFAGACIAJADIAGAFIASAGQAGADAEgBIAQgFQAIgFAIAAQAEAAANAGQALADAHgCIAMgGIAGgBIAFAAIAMgDQAIgCAGABQAHAAATAJQAQAFAKgDQADgBALgGQAMgHALgBQAKgBATAFQAiAGAIAQQAGARgGADg");
	this.shape_66.setTransform(1427.8,-6.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#075D00").s().p("ACPAoIhRgEQhHgEhAAAIiVAAQgFgOAHgPQAHgMANgGQAPgHAdADQAHABADAGQAFAIADACQAEACAIAAIAOgBQgGABABAIQACAJAHgBQAEAAADgHIADgKQAJgOATAAQAEAAALAFQAGADAGABQAAAEASAHQAEgFALgDQALgEADgDIAHgFQAHgCAGAHQAEAEgDADIgFAGQgFAMAJADIAFgMQAEgGAFABQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAIADACQAFACAFgFIAJgHQALgIAMABIAUAHQABgJAKgEIAQgGQADgCACgGQACgFAFgBQANgDAQAIIAFADIAEADIAJAAIAFACQAIAFACAHIAMAGIADAXQACAPgBAKQgSABgXAAIgogBg");
	this.shape_67.setTransform(1274.5,-6.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#308300").s().p("AjwAoQgDgCABgLIACgMQAIgUAigIQAVgFAIABQAMABALAJIAHAGIAHADQAKADAQgHQATgLAHAAQAGgBAIADIAMAEIAGgBIAFACIAMAHQAIADALgFQAMgHAEAAQAIAAAJAGIAPAHQAFABAGgDIARgIIAHgGIAIgFQAGgBASAFQAAgMARgKQAKgGAMACIAXAGQACgGAKACQAHACAGAEIAGAJQADAFAEAAQAGgSAKAAQARgCAHAPIAAA9g");
	this.shape_68.setTransform(1275.2,-7.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#0C6900").s().p("AlXATQgjgFgoAAIgUAAQgQgBAAgGQARgJAGgBQALgEAaAHQAYADAfgLQAMgGAUgBIAigDQAdgGAiAEQAJABAYALQAUAIAOgBIAzgQQATgFAXAFIAcABQAHABAcAHQAfAIApAAQAeAAAHAAIAdgFQAGAAAKAEQAKABAEAAQAFABAHgEQAJgGAFgBIgFAKQgCAEAEAFQAFgQAGgGQAGgGAKAAIARAAIAHgBIAIAAIALAGQAEACAGgEIAKgHQAAADgIALQgIAJAFADQAFADADgGIAGgLQAFgLAOgBIAYACIAPgCQAJgBAEAFQAGgFAQACIAIABQACACACAHQADAGADABQACABAIgCQAJgDACABQATABAAAKIAHAJQggAKgwAAIpFACQhgAAgpgFg");
	this.shape_69.setTransform(1205.6,-4.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#308300").s().p("AEUAeIgigMQhkAAgUABIigAGQgaABhkgGQg6gDhXAAIhTACQg0ABgggCQADgPANgFIAagIQAcgKAfAMIAJADIAIAAIAYgMQAXgHAaABIAZADIAVgEIBXAQQAGAAAOgDQApgKAVAAIA2ABQAJABAQAFQARAEAKABIATADQAMADAHgBIAMgDQAIgCARACQARABAIgBQAcgDAJACQASAEAEgCIAfgQQAkgLAVAQIAAADQABgRAhgBIAYADIAFgBIAFgCQAHgBAKADQALAEAFAAIAMgBQAHAAAGADIAMAIQAGAEAGgBQAygCgGAVQgEAAgDAHQgDAHgDAAIgagEQgSgDgTABIglAAQgUAAgTgEQgFgBgHAJQgGAJgFABQAAAGgIAAQgGAAgMgEg");
	this.shape_70.setTransform(1204.7,-4.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#004E00").s().p("AiJAeIgrgIIgHgJQAHgIgGgFIgGgFIgFgGQgEgKAPgCQAFgBAHADIAMAFIANADIAOgCQAIgCAEADIALAMQAHAHAGgCIgBgGIgEgIQAEAAACgDIAFgFQAFgCALAAIAaADIgDAPQgBAKAJgHIAEgLIAMgKIAMgJQAOgEAGABIAFABIAEACIALAAQAUAEAEAEIgNAJQgEAFABAIIAQgNQADgDAPgBIAMgEIARgBIAJgGQAKgFANABQAZAAAAANQAeAAAAARQAJACAFAGQAGAIgBAJIg7ACQgjABgXAEQgZAEhTABIgUAAQg6AAghgFg");
	this.shape_71.setTransform(1363.4,-5.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#197500").s().p("AigAkIg3gEIgIgCQgCAAgBgFQgDgJAGgJQAHgIABgEIAAgLQASgLANgCQAIgCAKADQAMADAFAAIANAAIACACIADACIANAAIAIAEQAFADAEABQAGgNAWAAQAFAAATAFQAAAAABABQAAAAABAAQAAABAAAAQABAAAAABIAEABIAhgXQAJgGAKADIAJADIAGgCIAFAAQADABAIAHIADAEIAEADIAVgBIAAADQAIAEAOgIQAQgKAFAAQASgDAVAIIAkARQAPAGAKANIAGAIIAIAIQAEAFgDAGQgDAEgGABIgLAAIhRACQgyAAgeAFQgdAEgmAAQg6AAhRgJg");
	this.shape_72.setTransform(1362.9,-6.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#308300").s().p("AAKAZQghgDgLABQguABgHAAQgLAAgBgEQgBgCAEgFIAGgGQADgCAGABIAKAAQAdgGAHAAIAIACIAFgCIAIgCQAGgDACgDQAGgKASADQAPAEAKAJIAGgDQAEgBABgCIADgIIAIgFIAHgCIAGgBIAGgDIANAEIADAFQABAEgBAXQAAARgEABIgMABg");
	this.shape_73.setTransform(1395.1,-5.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#46332C").s().p("AgHgEIAPAAIgPAJg");
	this.shape_74.setTransform(1323.8,-24);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#952D00").s().p("AgHARIAAghIAPAAIAAAhg");
	this.shape_75.setTransform(1332.8,-8.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#B3D6F0").s().p("AgNABIAAgBIAbAAIAAABg");
	this.shape_76.setTransform(1333.4,-11);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#913526").s().p("AgBAEIAAgHIADAAIAAAHg");
	this.shape_77.setTransform(1321.5,-28.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#913526").s().p("AgBAGIAAgLIADAAIAAALg");
	this.shape_78.setTransform(1320.6,-28.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#7A0B00").s().p("AgNABIAAgBIAbAAIAAABg");
	this.shape_79.setTransform(1321.1,-27.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#4983AE").s().p("AgBAJIAAgRIADAAIAAARg");
	this.shape_80.setTransform(1340.6,-10.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#4983AE").s().p("AgBAJIAAgRIADAAIAAARg");
	this.shape_81.setTransform(1339.8,-10.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#4983AE").s().p("AgKABIAAgBIAVAAIAAABg");
	this.shape_82.setTransform(1339.8,-11.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#4983AE").s().p("AgBAJIAAgRIADAAIAAARg");
	this.shape_83.setTransform(1338.9,-10.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#4983AE").s().p("AgBAEIAAgHIADAAIAAAHg");
	this.shape_84.setTransform(1340.6,-14.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#00135D").s().p("AgBADIAAgFIADAAIAAAFg");
	this.shape_85.setTransform(1340.6,-15.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#4983AE").s().p("AgBAEIAAgHIADAAIAAAHg");
	this.shape_86.setTransform(1339.8,-14.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#00135D").s().p("AgBADIAAgFIADAAIAAAFg");
	this.shape_87.setTransform(1339.8,-15.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#4983AE").s().p("AAAAEIAAgHIABAAIAAAHg");
	this.shape_88.setTransform(1335.6,-14.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#00135D").s().p("AAAADIAAgFIABAAIAAAFg");
	this.shape_89.setTransform(1335.6,-15.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#4983AE").s().p("AgBAEIAAgHIADAAIAAAHg");
	this.shape_90.setTransform(1336.2,-14.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#00135D").s().p("AgBADIAAgFIADAAIAAAFg");
	this.shape_91.setTransform(1336.2,-15.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#4983AE").s().p("AgBAEIAAgHIADAAIAAAHg");
	this.shape_92.setTransform(1338.9,-14.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#00135D").s().p("AgBADIAAgFIADAAIAAAFg");
	this.shape_93.setTransform(1338.9,-15.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#4983AE").s().p("AgBAJIAAgRIADAAIAAARg");
	this.shape_94.setTransform(1329.2,-10.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#4983AE").s().p("AgBAJIAAgRIADAAIAAARg");
	this.shape_95.setTransform(1328.3,-10.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#4983AE").s().p("AgKABIAAgBIAVAAIAAABg");
	this.shape_96.setTransform(1328.3,-11.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#4983AE").s().p("AgBAJIAAgRIADAAIAAARg");
	this.shape_97.setTransform(1327.5,-10.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#4983AE").s().p("AgBAEIAAgHIADAAIAAAHg");
	this.shape_98.setTransform(1329.2,-14.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#00135D").s().p("AgBADIAAgFIADAAIAAAFg");
	this.shape_99.setTransform(1329.2,-15.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#4983AE").s().p("AgBAEIAAgHIADAAIAAAHg");
	this.shape_100.setTransform(1328.3,-14.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#00135D").s().p("AgBADIAAgFIADAAIAAAFg");
	this.shape_101.setTransform(1328.3,-15.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#4983AE").s().p("AgBAEIAAgHIADAAIAAAHg");
	this.shape_102.setTransform(1327.5,-14.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#00135D").s().p("AgBADIAAgFIADAAIAAAFg");
	this.shape_103.setTransform(1327.5,-15.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#4983AE").s().p("AgBAJIAAgRIADAAIAAARg");
	this.shape_104.setTransform(1318.1,-10.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#4983AE").s().p("AgBAJIAAgRIADAAIAAARg");
	this.shape_105.setTransform(1317.2,-10.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#4983AE").s().p("AgKABIAAgBIAVAAIAAABg");
	this.shape_106.setTransform(1317.2,-11.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#4983AE").s().p("AgBAJIAAgRIADAAIAAARg");
	this.shape_107.setTransform(1316.4,-10.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#4983AE").s().p("AgBAEIAAgHIADAAIAAAHg");
	this.shape_108.setTransform(1318.1,-14.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#00135D").s().p("AgBADIAAgFIADAAIAAAFg");
	this.shape_109.setTransform(1318.1,-15.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#4983AE").s().p("AgBAEIAAgHIADAAIAAAHg");
	this.shape_110.setTransform(1317.2,-14.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#00135D").s().p("AgBADIAAgFIADAAIAAAFg");
	this.shape_111.setTransform(1317.2,-15.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#4983AE").s().p("AgBAEIAAgHIADAAIAAAHg");
	this.shape_112.setTransform(1316.4,-14.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#00135D").s().p("AgBADIAAgFIADAAIAAAFg");
	this.shape_113.setTransform(1316.4,-15.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#913526").s().p("AgNAUIAAgoIAbAAIAAAog");
	this.shape_114.setTransform(1321.1,-25.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#B8B0AE").s().p("AgRAFIAAgJIAjAAIAAAJg");
	this.shape_115.setTransform(1321.1,-24);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#63524D").s().p("AiiAtIAAhZIFFAAIAABZg");
	this.shape_116.setTransform(1327,-20);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#82BCE6").s().p("AifADIAAgFIE/AAIAAAFg");
	this.shape_117.setTransform(1327,-15.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AifA8IAAh3IE/AAIAAB3g");
	this.shape_118.setTransform(1327,-9.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#004E00").s().p("AgtAKIAFgDIAGgCIABgDIACgCQADgBAJgCQAIgBACgFIABgDIACgEQACgBAIACQAHABACgCIACgDIADgCQACgCAKAGIAHAFIgBATQAEABAGAGIgHADIgUAAQgMgBgRADIgfAEQgFgJABgEg");
	this.shape_119.setTransform(1332.7,-25.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#2E7500").s().p("Ag0AeQgDgBAAgLIABgKQABgEAEAAIAHgDIADgBIAEgEIAJgDQAGgCACgCQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAFgIADgBQADAAAGACQADACADgBIADgFQACgEAEAAQAFgBALAJIAKAEQACACAAAEIABAGIADADQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAgBABQAAAAAAABQgBAAAAABQAAABAAAAQANgCgCAOIAAAGIgsgCQgOgBgKABIgUAGQgIACgFAAQgEAAgDgBg");
	this.shape_120.setTransform(1332.8,-25.9);

	this.instance_1 = new lib.Symbol28("synched",0);
	this.instance_1.setTransform(1294.3,-13.2,1,1,0,0,0,-0.1,-0.1);

	this.instance_2 = new lib.Symbol27("synched",0);
	this.instance_2.setTransform(1275.5,-9.9,1,1,0,0,0,-0.1,-0.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#B5ADAA").s().p("AgCAoIAAhPIAFAAIAABPg");
	this.shape_121.setTransform(1256.5,-17.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#4E3B35").s().p("AgCAjIAAhGIAFAAIAABGg");
	this.shape_122.setTransform(1257.1,-17.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#63524D").s().p("Ah6AlIAAhJICrAAIBKBJg");
	this.shape_123.setTransform(1269.1,-17.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#737A63").s().p("Ah4AEIAAgHIDxAAIAAAHg");
	this.shape_124.setTransform(1268.4,-13);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#A8B099").s().p("Ah4ArIAAhVIDxAAIAABVg");
	this.shape_125.setTransform(1268.4,-9.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#7F716D").s().p("Ah8AiIAAhDID6AAIAABDg");
	this.shape_126.setTransform(1244.2,-14.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#737A63").s().p("AiIAEIAAgHIERAAIAAAHg");
	this.shape_127.setTransform(1245.7,-11.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#8F9780").s().p("AiHArIAAhVIEPAAIAABVg");
	this.shape_128.setTransform(1245.7,-7.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#005B00").s().p("AgHCXIhQgEQgSgCgFgBQgLgEgGgKIgIgNIgIgBQgGAAgDgCIgEgGIgIgFQgFgCgCgEQgDgGAHgVQAGgVAVAAIAQAAQAHgBgFgGQgCgDgHgDIgLgGQgIgIgBgFIgBgIQACgJAKgCQAKgFAIADQADgOAYASQABgDAEgEQADgCgCgFQAAgDgGgGIgGgKIgDgJQgBgHACgCQADgFAMgBIAQAAQAAgGgMAAIgSAAIACgEIACgEQAFgFAMgCIASgCQgOgTAJgOQAOgTAtARQgBgHAJgGQAGgFAIAAQgCAAAHgMQAFgEAIgBQANgCAVAIIAhAOQAQAHAIAXIABAFIAGACQARAGACADQADAEgCAFIgDAKIAAAEIAAAFIgGAHQgCAEgBAAIAEAGIAEAEQABADgBAEQgCAGgMADQgMADgDAEQgCADABACIAFAFQANARgWADIAcALQAPAJAEAMIABAKIAEAGIACAHIgDAIIACAFIAEADQAFAGAAADIgDAKQgCAKgSAQQgLAKgWACIgmACQg3ADgWAAIgJAAg");
	this.shape_129.setTransform(1393.8,-18.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#2E7500").s().p("Ag6AwQgDgCAAgFQAAgFgCgCIgIgGQgEgCABgGQgTgEAWgeIAHgOQACgEAIgEQAJgEACAEQACgJAJgBQAIAAAJAEIAIAFQADACAEgDIABgGQAFgIAFgCQAFgCAKABQAPABAIALIALARQAAgBAAgBQABAAAAAAQABAAAAAAQABAAABAAQAIAOADAKIAHAOQAEAKgDAHQgEAJgQAEIgZAEQgcAKgMABIgdACQgUgBgHgIg");
	this.shape_130.setTransform(1228.9,-10.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#48332D").s().p("AgFgGIALAAIgLANg");
	this.shape_131.setTransform(1151.5,-12.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#857873").s().p("AgDAWIAAgrIAHAAIAAArg");
	this.shape_132.setTransform(1150.4,-14.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#2B7E00").s().p("AgRBXQgRgBgFgEIgDgFIgNgCQgLgDgFgEQgHgGABgEIgKgGQgHgDgCgEQgFgHAEgLQAEgJgBgCIgKgMQgBgDABgFIACgKQABgJAIgCQAIgBADADQABgEAJABQAIACACADQgBgDABgGQACgFALgEQAAgGAJAAQAGABAGADQgCgLABgFQABgEAIgIQgIgIAMgGIAPgCQAGgDAIAGQAIAFAAALQAPACAAADQAKACAAALQAGACABAEQACAFgFAEQgDAEgBADIAIABQAFACgBADQAGgFALAIQAMAJACAMIAOAKQAGAFgKAJIgQAPQgEAFAAADIABAJQgBAPgfABIgLAAIgLABIgTAJQgFABgIAAIgLAAg");
	this.shape_133.setTransform(1283.7,-16.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#004E00").s().p("AggABQACgBAKgGQAOgJAGAAQAJAAAGAEIAEAHIADADIACABQAFgBAEABQADADgBAFIgFABIgVgCQgSgFgXAOQgFgJAFgGg");
	this.shape_134.setTransform(1264.4,-21);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#004E00").s().p("AhDAoQAAgFAGgGQAFgEAGAAIALAAIAKgFIALgBIALABQgGgHgJABIgRADQAHgRARgHQAMgGAGABQAGAAAPAGQgFgLgCgBIgIAAIgHgFQgJgDgMAJIgTAOQAEgQACgEQAFgKANgBIAOgCIABgEIADgEQACgBAIAAQAMABACACIACAFIAGADQADACABAEIAAAJIAFAWQAOACABABQAEADgIALQANAAgBATIAAAFIgyABIgYgDQgPgDgKACIgVAFIgGAAQgIAAgBgGg");
	this.shape_135.setTransform(1244.1,-21.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#2E7500").s().p("AitBCIABgQIAIgUQAEgKALgFIAIAAQAFAAACgBIAAgIIABgIIAEgKIABgOIAEgEIAFgDIADgKIAIgIQAFgEAMABQAHgPAUABQAOAAAIAKIAGAJQADAFAGAGQAMAKgHAWQAMABADADQAEADgCAQIAHACIADASIAWAAIAOADQAJABADgCQADgCACgHQACgHADgCIAGgBIAHAAIABgNQAEgBABgCIACgFQAEgKASgGIAJgEQAMgGAEAAQAHABAFAEIAIAHIAFACIAOAPQAEAGAAAGIgCAGIgDAHIgBAHIgCAHQgEAHgIACIgRACQgGAAgiAJQgSAFgsABQg8ACh+gBIgLABQgJAAgCgDg");
	this.shape_136.setTransform(1251.9,-21.3);

	this.instance_3 = new lib.Symbol26("synched",0);
	this.instance_3.setTransform(1220,-11.6,1,1,0,0,0,0,-0.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#004E00").s().p("AA+A8IjUgEIgGgOQgDgIABgGQABgGAEgDIAIgHIAHgLIAHgBQAEgBABgCIAAgFIAAgFQACgFANgIQANgHgBgFQgIAAgKAGQgLAIgFABQgCgSAQgLQAPgLATAGQARAGgBAIIgGAMQgCACgEABIgGACQgJAHABATQAHgKAZgLQAMgGAIAJQAHAHABAGIAAAFQABABADADQAJAIAIgHQAKgIAGACIgGADQgCACgCAHQgFARAEAIIACgOIAEgHIADgCIABgCIAEgLQADgDAFgCIAKgDQgBgJACgIIAJgPIAAgIQADgLAPADQAOABAEADQALAIgJALIgFADIgFAFIgBAEIAAAEIgLAIQgEAIAJAIQgBgTAVgFQABgKAJgIQAKgIAKABQACgLANAHQAJAFAFAHIAVAaQAFAGAAAIIAAARQgBAOgDAGQgFAHgMAEQgRAGgtAAIgOAAg");
	this.shape_137.setTransform(1201.9,-10.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#2E7500").s().p("AA8BIIg4gFQgggDgWACIg+AEQgnAAgUgQQgKgIAEgRQAEgSANAAQACgNAOgIQgGgQAHgRQADgIALgGIARgJIAIgFQAOgDASAMQAKAHAEAJQAEAKgHAJQAHgEAKADQAJADAFAHQADAEADAQIAQgIQAKgGAGAGQAAgFAEgIQAFgIAAgDIAAgLQgBgGADgEQAKgPArANIAVAIQAMgTATAGQAIADAGAHQAGAIgBAIIANASQACAFAKAMQAJAMABAJQADAYgkAQQgVAJguAAIgSgBg");
	this.shape_138.setTransform(1202.2,-11);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#2B7E00").s().p("AgrAxQgPgEAGgSIAEgHIAAgJQACgGAFgDIALgDQgBgSADgIQAFgMAQgCQgCgLAKACQALABAFAFQAFAEADAHIAEANIAHANQADAHABAFQAQgBgBAXIAAAJQAAAIgGACIgOAAIgmAEIgSABQgNAAgJgCg");
	this.shape_139.setTransform(1177,-9.9);

	this.instance_4 = new lib.Symbol25("synched",0);
	this.instance_4.setTransform(1160.3,-8.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#0C6900").s().p("AhCBaIgugJQgcgHgTADIgcAGQgSADgJgFQgFgCgEgNQgDgKAEgJIAIgSIAEgNQACgGAGgGQAKgGAQgJQAIgEAKABIAhACQAJAAAHADIAHAEQACgCAEgBIATgEQAKAAALAJIASAMQgBgIAKAAIAQACQABgGgCgQQgDgPACgIQACgOAQgIQATgIAIAMQAKgEAMAMIARAUQAFgBABgGIADgKQAJgOAVABIAEgWQAEgIAQACQAUAEAGAOIACALQABAHADADQACACAKAFQAGAEAAAJIAHAJQAGgBADAEIAEAJIAQARQAKAOgEAIQgCAFgLAGQgMAIgEAEIgTAZQgLANgRAAQgQABghgDQgggEgRABIg5AFIgjABIgYgBg");
	this.shape_140.setTransform(1157.6,-10.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#2B7E00").s().p("AgfA/IgngFQgbgFgFgZIgEgUIgEgIIgCgGQgFgeAQgJQAFgCAFAEIAGgIQAGgKAFAAIAAABQAQgFABAJIAIAFQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAAgEIACgCIACgGIAEgCIADgDQACgDACgBIAEgCIACgDQADgEAEADIALAKIAHAEQACADABACIABAEIADACIADADIACAFIAFADIAHgMQABgDAEACIABgJQABgFADgCIAMgCQAIABACAEQASAAABAGIAAAGQABAAABABQAAAAABAAQAAABAAAAQABABAAAAIACAFIADAAIADgBIAAADQAOgCADADQAJAHgFALQAGADgDALQgCAJABACIAEAHIACAHIgBAnIgBATIABAHIgCAHIgGABIgHAAIg1AFg");
	this.shape_141.setTransform(1300.7,-15.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#48342D").s().p("AgaAnIAAhNIA1BNg");
	this.shape_142.setTransform(1202.8,-13.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#6D5C57").s().p("AjeAwIAAhfIG9AAIAAA0IhbAAIAAArg");
	this.shape_143.setTransform(1186.7,-18.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#998E8A").s().p("AifADIAAgFIE/AAIAAAFg");
	this.shape_144.setTransform(1192.3,-17.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#998E8A").s().p("AifADIAAgFIE/AAIAAAFg");
	this.shape_145.setTransform(1183.8,-13.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#C3BDBB").s().p("AjWA7IAAh1IGtAAIAAB1g");
	this.shape_146.setTransform(1186.9,-12.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#857873").s().p("AhkAWIAAgrIDJAAIAAArg");
	this.shape_147.setTransform(1154,-11.3);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#004E00").s().p("AggAEQABgEALgMQAOgRAGAAQAIgBAHAIIAEAOIADAEIACAEQAFgEAEAFQADAGgBAJIgFACQgJAAgMgFQgLgGgKAFQgIAEgMAOQgFgQAFgKg");
	this.shape_148.setTransform(1212.2,-15.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#2E7500").s().p("AhQARIASAAIAOADQAKACADgDQADgBACgIQABgHADgBIAHgCIAHAAIAAgLQAFgBAAgBIACgIQAEgJARgHIAIgDQAMgHAFAAQAGABAFAEIAIAIIAGACIAFAHQAMAPABAGIgDAFIgDAGIAAAHIgCAHQgEAIgIABIgRACQgGAAgiAJQgQAFgtABIgdABg");
	this.shape_149.setTransform(1208.7,-15.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#004E00").s().p("AgpAjQgBgDAEgGQADgDAEgBIAHAAIAGgEIAHgBIAHABQgEgHgFABIgLADQAEgPALgGQAIgFADAAQADABAKAFQgDgKgBgBQgCgBgDABIgFgEQgFgDgHAIIgMANIADgTQADgIAIgBIAJgCIAAgEIACgDIAHgBQAGAAADADIABAEIADADIADAGIAAAHIADAUIAKACQACADgFAKQAIAAAAARIAAAEIggABIgOgDQgKgCgGABIgNAEIgEABQgFAAAAgGg");
	this.shape_150.setTransform(1227.8,-19.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#2E7500").s().p("Ag4A7IAAgPIAGgRQACgJAHgEIAFAAIAEgBIABgOIABgFIABgEIABgMIADgEIACgDIADgJIAEgHQAEgEAHACQAFgOALABQAIABAFAIIAKASQAIAJgFATQAIACABACQACABAAAQIAGABIABAQIACAAIgBAbIhiABQgNAAgBgCg");
	this.shape_151.setTransform(1227.5,-19.1);

	this.instance_5 = new lib.Symbol24("synched",0);
	this.instance_5.setTransform(1376.8,-16.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#005B00").s().p("AALB7IiqgNIgHAAIgDgFQgCgHACgIQACgNAOgFQAOgFAMAIIAGgHIAGgGIAFgHIAGgHQAGgEAKABIAOAEQAJADAEgBQgDgNgUgBQgOgBgPAFQgPAEgMALQgBgMAIgJQAHgJAMABQAAgNARgEQACgOgBgDQgBgDgFgFQgEgEgBgEQgCgNAKgNQALgOABgIQACgQAFgGQAGgGAGgCIANgEIAMgHQAHgDAHABQAUACAIAJQgDADgJAEQgJAEgEAGQgIAKgBANQgBAPAJAJQACgWATgUQASgUAWAAQAGAAAGAEIALAHIARAHQANgaALAEQAAgYAeAKQAMAEAIAHQAJAJgBAIIAPAzIgBAHIAAAIIgNAeQgDAIAAAcQgBAWgJALQgXAag8ATQgPAEgZAAIgKAAg");
	this.shape_152.setTransform(1350.2,-14.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#287C00").s().p("AjBCOQgZgFgKgPIgGgNQgJgQABgHQABgZAUgGIAQgBQABgRAYgOQAXgNASACQAAgGADgFIAEgIQABgEgDgHIgDgIQgEgTAFgPQAGgRAQgHIAGgBIADgEIAAgPQABgTAOgGQAbgNAoALIAcAPQAGgMAOAGIAUAMQAEgDABgHQACgJABgCQAJgQAcAEQAVAEAMALIAHAGQAQAKACACQADgOAXAaQAGAHAIAbIAhAXQAQAOAFAMQADAJgDAGIgHALQgEAHAAAOQgBARgCAGQgLAjgkAGQgGABgfgBIgNgBQgFADgEAIIgHAMQgTAXgqgCIhBgJQgEgBg1AGIgqAGQgZAEgRAAQgcAAgNgDg");
	this.shape_153.setTransform(1351,-15);

	this.instance_6 = new lib.Symbol23("synched",0);
	this.instance_6.setTransform(1160.8,-18.3);

	this.instance_7 = new lib.Symbol22("synched",0);
	this.instance_7.setTransform(1141.1,-16.4);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#005B00").s().p("AALB7IiAgMIgxgBIgDgFQgCgJACgGQACgNAPgFQANgFAMAIIAGgHIAGgGIALgOQAGgEAKABIAOAEQAJADAEgBQgDgNgUgBQgOgBgOAFQgQAEgLALQgBgMAHgJQAIgJALABQAAgOASgDIAAgRQgBgDgFgFQgEgEgBgEQgCgNAKgNQALgOABgIQACgQAFgGQAGgGAGgCIANgEIAMgHQAHgDAHABQATACAJAJQgDADgJAEQgJAEgEAGQgIAKgBANQgBAPAJAJQACgWAUgUQASgUAVAAQAGAAAGAEIALAHIARAHQANgaALAEQABgYAdAKQAMAEAIAHQAJAJgBAIIAPAzIgBAPQgBAHgFAJIgHAOQgDAIAAAcQAAAWgKALQgXAag8ATQgPAEgZAAIgKAAg");
	this.shape_154.setTransform(1118,-14.4);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#2B7E00").s().p("AjkB6IgHgNQgIgPABgIQABgZATgGIARgBQAAgRAZgOQAXgNASACQgBgGADgFIAEgIQACgEgDgHIgDgIQgEgSAFgQQAFgRAQgHIAGgBIADgEIABgHIgBgIQACgTAOgGQAbgNAnALIAdAPQAFgMAOAGIAVAMQADgDACgHIADgLQAJgQAcAEQAUAEANALIAHAGQAPAKACACQAEgOAWAaQAGAGAIAcIAhAXQARAOAEAMQADAJgCAGIgIALQgDAHgBAOQAAARgCAGQgLAjgkAGQgGABgfgBIgNgBQgFADgEAIIgHAMQgTAXgqgCIhBgJQgLgBgSACIhGAKQgZAEgRAAQg9AAgPgXg");
	this.shape_155.setTransform(1118.9,-15);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#005300").s().p("AgcCFIgigLQgOAAgQgQQgPgPABgOQABgIAFgIQAGgIAIAAIAGgUQAFgNAUgLQARgJAPAAQgBgRgmAJQgLADgCAFQgCAGgDADQgIAIgXgJQgSgHAEgMQADgLAOgNQAMgLAPgGQAFgCAHAAIANABIAAgSQABgKAFgFQADgEAGgCIAKgFQgJAAgZAHIgEADQgBACgEgCQgLgHAMgMQAFgFAMgBQARgBACgBQAEgCAKgJQAJgIAGAAQAIAAAHALQAJAKAAAJIAPgKQAKgHAEABQAEABACAFQADAGACABQAEABAHgCQAHgBAEACQAJAEALAOQAFAHAAAQQAAASADAHIANAWQAHAMABALQABATgKAaIgGAVQgDAEgNACQgOACgEABQgKAFgIAJIgOARQgLALgPADIgbADIgKAEIgJACIgCgBg");
	this.shape_156.setTransform(1101.2,-18.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#2B7E00").s().p("AiICbQhOgNgNgEQgLgEgFAAQgBgMAEgIQAGgNAQAAIAOABIAOgBIAQgKQAJgDAKAEIARAHQAFABAQAAQAOABAHACQgFgEABgKQABgIAEgGQgIgHADgLQADgKAIgGQgCgJgJgHQgEgEgGgBIgMgBQgPgEgEgPIgBgFIgHgHQgEgIADgMQADgKAHgHIAHgMQAKgPASgHQATgJAOAIQgFgNAFgQQAFgQALgIIAMgFIANgEIAFgDQAdgPAYADQALACAKAHQANAIgBAKQADgCAHgBIAVABIAJgFQAGgEAEgBQAOgDANAOQAMAOAAAPIAgA1QADgCAKAKQAWAUACASIgBAJQACAGAJAIQAKAJACAEQAIAQgHAiQgFAagVANQgoAXhEALQhKALg/AAQg4AAgygIg");
	this.shape_157.setTransform(1099.1,-17);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#005300").s().p("AjEBpIgIgaIgNgeQgDgGACgIIAEgGIADgEIABgJQAFgJAIgDIAhgEQAGAAAGAHIAEAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAABQAAACgEAEIgGAFQgEAJADAOQAEAOAIACIAAgOQAAgJADgEIAFgCIAGgDQABgCAAgEIABgFQABgDAHgDQAGgCABgFQAAgCgDgDQgDgDABgDQABgFAFgCIAIgFQADgDAEgJQADgIAFgFQAQgOATAAQApAAAEAhQAKgNAMAAIAGgLQADgGAHAAQAHgBABAEQACAFACABIAcAFIAHgiQAMgdALgFIAYAEQAXACAHACQAQAGALANIAVAYQAKAKAEAGQADAHABANIACAgQABAWgFAMQgIATgnAUQgKAFgRAAIhhABQgLABgTAGIgcAIQgSAEg8AAQhTAAgWgEg");
	this.shape_158.setTransform(1071.9,-12.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#2B7E00").s().p("AB+B9IgmgEQgVgCghACQgoAEgMAAQgmAAgXgFIg5gMQgSgCghAFQgiAGgQgBQgMAAgEgHIgBgHIAAgGIgIgRQgKgbAlggQAMgLAQgCQAKgCAVACIAQAEIAFACQABAAADgHIAPgMIACgFIABgGQACgIAJgKIAOgQQAIgMAEgCQAKgFAcAHQAQADAEACQALAFgBAKQAVACADABIAEgNQAAgIAEgEQAFgHANgIQAVgPAQARQAHgIAMgIIAUgOIAHgHIAJgGQASgIAYAPQASALACAIIA1AxQAiAfACAvQADA1gsARQgRAHgsANQgMADgPAAIgKAAg");
	this.shape_159.setTransform(1072.9,-14.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#005300").s().p("ABnCdIgqgEQiUgGgTgCQgogFgcAAIguAAIAAiGIADgGIAGgIQALgNATAHQAFgTAKgFIAWgGIgBANIgIAZQgCANAGAMQAIANAOABIgCgeQgDgQADgMQAEgRAKgLQALgNAJgHIAHgCIALgVQAHgOALAAQAGAAADAIQADAJAFACQgYAggGANQgPAhAaALIAAgUQABgEALgYQAIgRATgOQAYgTAJAAIAFgDQAHgCAEAGQAEAGgDAHQgCAIgIACIgOAEQgHAEgDAMQgEAQgEAEIgLAJQgGAEgBAJQgEAXANATQABgcACgGQADgLAJgJIAOgQQANgQAFgEQALgIAQABQACgIAAgVQgBgUAEgJQAFgNAQgKQASgLAJALQADADADAOIABARIgIAPQAEAHAAADIgBANQAAAJAGADQADACANgBIARgCQAsgDAOARIAEAJIADAJQALAgAAAFQADAWgOAcIgYA5QgPAggcAMQgKAEgTAAIgLAAg");
	this.shape_160.setTransform(1041.8,-17.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#1F7500").s().p("ABACwQgdAAgugEIhOgGIieADIAAiUQgCgWAfgWIAkgUIAKgPQAHgLAJgGQAYgPAQAAIAGgJIAKgGIAJgTQAOgSAPAPQAFAFAPAZQAFgRAUACQARACALAMQALgHAEgPIAGgcQAIgZAYgDQARgBAKAVQADAGALAPQAKANACAJQACAHgEANQgEAPABAGQAPABAPgCQAYgFAKADQAMAEAMAPQANAOACAMQACAKgHASIAZAUIAKARQAIAUgLAsQgNAwgaARQgJAHgPABIgaACQgiADgeAAIgZgBg");
	this.shape_161.setTransform(1043.1,-19.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.instance_7},{t:this.instance_6},{t:this.shape_153},{t:this.shape_152},{t:this.instance_5},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.instance_4},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.instance_3},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.instance_2},{t:this.instance_1},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.instance},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.7,-36.9,1477.9,37);


(lib.mutebutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"on":0,"off":1});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
		this.stop();
	}
	this.frame_1 = function() {
		/* stop();*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// sq
	this.instance = new lib.sq();
	this.instance.setTransform(-1.3,-1.3,1.444,1.244);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgZgeQANAAAJAJQAHAKAAALQAAANgHAJQgJAJgNAAAgag3QAXAAAOARQARAQAAAWQAAAXgRAQQgOARgYAA");
	this.shape.setTransform(13,6.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFAdIgmAAIAAg5IAmAAIAxglIAACDg");
	this.shape_1.setTransform(4.5,6.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,-1.3,19.6,16.8);


(lib.mountain_moves = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{move_right:1,move_left:51});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();
		*/
		this.stop();
	}
	this.frame_1 = function() {
		/* play();
		*/
		this.play();
	}
	this.frame_49 = function() {
		/* stop();
		*/
		this.stop();
	}
	this.frame_50 = function() {
		/* stop();
		*/
		this.stop();
	}
	this.frame_51 = function() {
		/* play();
		*/
		this.play();
	}
	this.frame_99 = function() {
		/* stop();
		*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(48).call(this.frame_49).wait(1).call(this.frame_50).wait(1).call(this.frame_51).wait(48).call(this.frame_99).wait(1));

	// Layer 1
	this.instance = new lib.mountain_sym();
	this.instance.setTransform(960,-34.7,1,1,0,0,0,960,34.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:0.1},49,cjs.Ease.get(1)).wait(1).to({x:960},49,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-69.4,1919.9,69.4);


(lib.ground_moves = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"move_right":1,"move_left":51});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();
		*/
		this.stop();
	}
	this.frame_1 = function() {
		/* play();
		*/
		this.play();
	}
	this.frame_49 = function() {
		/* stop();
		*/
		this.stop();
	}
	this.frame_50 = function() {
		/* stop();
		*/
		this.stop();
	}
	this.frame_51 = function() {
		/* play();
		*/
		this.play();
	}
	this.frame_99 = function() {
		/* stop();
		*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(48).call(this.frame_49).wait(1).call(this.frame_50).wait(1).call(this.frame_51).wait(48).call(this.frame_99).wait(1));

	// Layer 1
	this.instance = new lib.land_sym();
	this.instance.setTransform(960,-22.5,1,1,0,0,0,960,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:0.1},49,cjs.Ease.get(0.8)).wait(1).to({x:960},49,cjs.Ease.get(-0.8)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-55,1920,65.1);


(lib.cloud2_moves = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"move_right":1,"move_left":51});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();
		*/
		this.stop();
	}
	this.frame_1 = function() {
		/* play();
		*/
		this.play();
	}
	this.frame_49 = function() {
		/* stop();
		*/
		this.stop();
	}
	this.frame_50 = function() {
		/* stop();
		*/
		this.stop();
	}
	this.frame_51 = function() {
		/* play();
		*/
		this.play();
	}
	this.frame_99 = function() {
		/* stop();
		*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(48).call(this.frame_49).wait(1).call(this.frame_50).wait(1).call(this.frame_51).wait(48).call(this.frame_99).wait(1));

	// Layer 1
	this.instance = new lib.cloud2("single",0);
	this.instance.setTransform(1499.3,203.9,1,1,0,0,180);

	this.instance_1 = new lib.cloud2("single",0);
	this.instance_1.setTransform(0,203.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{x:0}},{t:this.instance,p:{x:1499.3}}]}).to({state:[{t:this.instance_1,p:{x:-962.1}},{t:this.instance,p:{x:537.2}}]},49).to({state:[{t:this.instance_1,p:{x:-962.1}},{t:this.instance,p:{x:537.2}}]},1).to({state:[{t:this.instance_1,p:{x:0}},{t:this.instance,p:{x:1499.3}}]},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1499.3,203.9);


(lib.cloud1_moves = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"move_right":1,"move_left":51});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();
		*/
		this.stop();
	}
	this.frame_1 = function() {
		/* play();
		*/
		this.play();
	}
	this.frame_49 = function() {
		/* stop();
		*/
		this.stop();
	}
	this.frame_50 = function() {
		/* stop();
		*/
		this.stop();
	}
	this.frame_51 = function() {
		/* play();
		*/
		this.play();
	}
	this.frame_99 = function() {
		/* stop();
		*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(48).call(this.frame_49).wait(1).call(this.frame_50).wait(1).call(this.frame_51).wait(48).call(this.frame_99).wait(1));

	// Layer 1
	this.instance = new lib.cloud2_symbol();
	this.instance.setTransform(960,262.4,1,1,0,0,0,960,262.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:0},49,cjs.Ease.get(0.65)).wait(1).to({x:960},49,cjs.Ease.get(-0.65)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1920,524.9);


(lib.bird2_move = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.bird = new lib.bird2();
	this.bird.setTransform(10.9,-29.9,0.3,0.3,0,0,0,20.2,27.7);
	this.bird.alpha = 0.602;
	this.bird._off = true;

	this.timeline.addTween(cjs.Tween.get(this.bird).wait(59).to({_off:false},0).to({regX:20,x:1070.9},340).to({_off:true},1).wait(335));

	// Layer 2
	this.bird_1 = new lib.bird2();
	this.bird_1.setTransform(-19.1,-14.9,0.4,0.4,0,0,0,20.2,27.7);
	this.bird_1.alpha = 0.602;
	this.bird_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.bird_1).wait(59).to({_off:false},0).to({x:1110.9},340).to({_off:true},1).wait(335));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.cloud2_symbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cloud1("synched",0);
	this.instance.setTransform(960,524.9);

	this.instance_1 = new lib.cloud1("synched",0);
	this.instance_1.setTransform(0,524.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1920,524.9);


(lib.cloud2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cloud2("single",0);
	this.instance.setTransform(1499.3,203.9,1,1,0,0,180);

	this.instance_1 = new lib.cloud2("single",0);
	this.instance_1.setTransform(0,203.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1499.3,203.9);


(lib.but_nextphoto = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();
		*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.mcNextArrow = new lib.bakarrow();
	this.mcNextArrow.setTransform(120.9,9.4,1,1.003,0,0,180,4.7,9.3);
	this.mcNextArrow.alpha = 0.5;

	this.txtBehindNextPho = new cjs.Text("", "12px 'franklin-gothic-urw'", "#4C4C4C");
	this.txtBehindNextPho.name = "txtBehindNextPho";
	this.txtBehindNextPho.textAlign = "right";
	this.txtBehindNextPho.lineHeight = 13;
	this.txtBehindNextPho.lineWidth = 110;
	this.txtBehindNextPho.setTransform(109,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txtBehindNextPho},{t:this.mcNextArrow}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,0.1,128.6,19.5);


(lib.but_backtofacts = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// arrow
	this.mcBakArrow = new lib.bakarrow();
	this.mcBakArrow.setTransform(4.7,9.3,1,1,0,0,0,4.7,9.3);
	this.mcBakArrow.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.mcBakArrow).wait(1));

	// txt
	this.txtBackToFacts = new cjs.Text("", "12px 'franklin-gothic-urw'", "#4C4C4C");
	this.txtBackToFacts.name = "txtBackToFacts";
	this.txtBackToFacts.lineHeight = 13;
	this.txtBackToFacts.lineWidth = 130;
	this.txtBackToFacts.setTransform(13.6,3);

	this.timeline.addTween(cjs.Tween.get(this.txtBackToFacts).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,145.1,19.6);


(lib.behindthescenes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// frames
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AYnYDMAAAgwGMAlqAAAMAAAAwGgAZEXlMAkuAAAMAAAgvJMgkuAAAgEg+QAYDMAAAgwGMBVJAAAMAAAAwGgEg9xAXlMBULAAAMAAAgvJMhULAAAg");
	this.shape.setTransform(481.5,282);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// pho ph
	this.mcBehindPho = new lib.empty();
	this.mcBehindPho.setTransform(639,129.2);

	this.timeline.addTween(cjs.Tween.get(this.mcBehindPho).wait(1));

	// txt
	this.butBehindNextPho = new lib.but_nextphoto();
	this.butBehindNextPho.setTransform(754,442.5);

	this.butBackToFacts = new lib.but_backtofacts();
	this.butBackToFacts.setTransform(821,0);

	this.txtBehindTxt = new cjs.Text("", "16px 'franklin-gothic-urw'", "#4C4C4C");
	this.txtBehindTxt.name = "txtBehindTxt";
	this.txtBehindTxt.textAlign = "center";
	this.txtBehindTxt.lineHeight = 11;
	this.txtBehindTxt.lineWidth = 957;
	this.txtBehindTxt.setTransform(480.5,102);

	this.txtBehindHea = new cjs.Text("", "45px 'franklin-gothic-urw'", "#4C4C4C");
	this.txtBehindHea.name = "txtBehindHea";
	this.txtBehindHea.textAlign = "center";
	this.txtBehindHea.lineHeight = 40;
	this.txtBehindHea.lineWidth = 956;
	this.txtBehindHea.setTransform(480.9,53);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txtBehindHea},{t:this.txtBehindTxt},{t:this.butBackToFacts},{t:this.butBehindNextPho}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-18,966.1,548);


(lib.messagesmove = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"off":0,enter:1,"on":9,exit:10});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
		this.stop();
	}
	this.frame_9 = function() {
		/* stop();*/
		this.stop();
	}
	this.frame_19 = function() {
		/* 
		Selection.setFocus("_parent.txtInput");
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10).call(this.frame_19).wait(1));

	// Layer 1
	this.mcMessages = new lib.messages();

	this.timeline.addTween(cjs.Tween.get(this.mcMessages).to({x:451.2},9).to({x:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,451,203.1);


(lib.menu = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// lines
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8EE4FF").ss(1,1,1).p("AAAkXIAAIv");
	this.shape.setTransform(753.5,29.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#8EE4FF").ss(1,1,1).p("AAAkXIAAIv");
	this.shape_1.setTransform(577.9,29.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#8EE4FF").ss(1,1,1).p("AAAkXIAAIv");
	this.shape_2.setTransform(700.8,29.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#8EE4FF").ss(1,1,1).p("AAAkXIAAIv");
	this.shape_3.setTransform(636.1,29.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#8EE4FF").ss(1,1,1).p("AAAkXIAAIv");
	this.shape_4.setTransform(519.4,29.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#8EE4FF").ss(1,1,1).p("AAAkXIAAIv");
	this.shape_5.setTransform(476,29.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#8EE4FF").ss(1,1,1).p("AAAkXIAAIv");
	this.shape_6.setTransform(424,29.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#8EE4FF").ss(1,1,1).p("AAAkXIAAIv");
	this.shape_7.setTransform(359.6,29.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#8EE4FF").ss(1,1,1).p("AAAkXIAAIv");
	this.shape_8.setTransform(316,29.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#8EE4FF").ss(1,1,1).p("AAAkXIAAIv");
	this.shape_9.setTransform(260.4,29.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#8EE4FF").ss(1,1,1).p("AAAkXIAAIv");
	this.shape_10.setTransform(209.5,29.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// button
	this.butMenuNext = new lib.but_menuhighlight();
	this.butMenuNext.setTransform(753.5,0.1,0.935,1);
	new cjs.ButtonHelper(this.butMenuNext, 0, 1, 2, false, new lib.but_menuhighlight(), 3);

	this.butMenuSlices = new lib.but_menuhighlight();
	this.butMenuSlices.setTransform(700.7,0.1,0.815,1);
	new cjs.ButtonHelper(this.butMenuSlices, 0, 1, 2, false, new lib.but_menuhighlight(), 3);

	this.butMenuDiapers = new lib.but_menuhighlight();
	this.butMenuDiapers.setTransform(636.2,0.1,0.997,1);
	new cjs.ButtonHelper(this.butMenuDiapers, 0, 1, 2, false, new lib.but_menuhighlight(), 3);

	this.butMenuPotatoes = new lib.but_menuhighlight();
	this.butMenuPotatoes.setTransform(578,0.1,0.898,1);
	new cjs.ButtonHelper(this.butMenuPotatoes, 0, 1, 2, false, new lib.but_menuhighlight(), 3);

	this.butMenuShowers = new lib.but_menuhighlight();
	this.butMenuShowers.setTransform(519.4,0.1,0.903,1);
	new cjs.ButtonHelper(this.butMenuShowers, 0, 1, 2, false, new lib.but_menuhighlight(), 3);

	this.butMenuSodas = new lib.but_menuhighlight();
	this.butMenuSodas.setTransform(475.9,0.1,0.671,1);
	new cjs.ButtonHelper(this.butMenuSodas, 0, 1, 2, false, new lib.but_menuhighlight(), 3);

	this.butMenuBananas = new lib.but_menuhighlight();
	this.butMenuBananas.setTransform(423.9,0.1,0.804,1);
	new cjs.ButtonHelper(this.butMenuBananas, 0, 1, 2, false, new lib.but_menuhighlight(), 3);

	this.butMenuCarMiles = new lib.but_menuhighlight();
	this.butMenuCarMiles.setTransform(359.6,0.1,0.994,1);
	new cjs.ButtonHelper(this.butMenuCarMiles, 0, 1, 2, false, new lib.but_menuhighlight(), 3);

	this.butMenuMilks = new lib.but_menuhighlight();
	this.butMenuMilks.setTransform(316.1,0.1,0.671,1);
	new cjs.ButtonHelper(this.butMenuMilks, 0, 1, 2, false, new lib.but_menuhighlight(), 3);

	this.butMenuNewspapers = new lib.but_menuhighlight();
	this.butMenuNewspapers.setTransform(260.4,0.1,0.859,1);
	new cjs.ButtonHelper(this.butMenuNewspapers, 0, 1, 2, false, new lib.but_menuhighlight(), 3);

	this.butMenuEggs = new lib.but_menuhighlight();
	this.butMenuEggs.setTransform(208.9,0.1,0.795,1);
	new cjs.ButtonHelper(this.butMenuEggs, 0, 1, 2, false, new lib.but_menuhighlight(), 3);

	this.butMenuLast = new lib.but_menuhighlight();
	this.butMenuLast.setTransform(144.1,0.1);
	new cjs.ButtonHelper(this.butMenuLast, 0, 1, 2, false, new lib.but_menuhighlight(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.butMenuLast},{t:this.butMenuEggs},{t:this.butMenuNewspapers},{t:this.butMenuMilks},{t:this.butMenuCarMiles},{t:this.butMenuBananas},{t:this.butMenuSodas},{t:this.butMenuShowers},{t:this.butMenuPotatoes},{t:this.butMenuDiapers},{t:this.butMenuSlices},{t:this.butMenuNext}]}).wait(1));

	// items
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AA8BrQgtgJhYjDIAPgJQBADCBEAKQgFAJgGAAIgDAAg");
	this.shape_11.setTransform(656.4,38.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CCCCCC").s().p("AAuBQQgJhChIg/IgRgoQAkAGAUAaQAgAnARBoQgCAEgBAAQgCAAgCgKg");
	this.shape_12.setTransform(656.4,38.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E6E6E6").s().p("AgxgWQAiAWARAAQAUAAAcgJQgeAfgUAAQgRABgggtg");
	this.shape_13.setTransform(667.2,47);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhLBWQADADAGgBQApgHAnhQQANgXAPgmIATguIAQAJQhZDDgsAJIgDAAQgLAAgFgVg");
	this.shape_14.setTransform(678,38.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CCCCCC").s().p("Ag1BPQARhjAeglQAVgbAngFIgRApQhHA+gKBDQgCAJgCAAQgCAAgDgLg");
	this.shape_15.setTransform(678.6,38.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgGASIAAgiIAOAAIAAAig");
	this.shape_16.setTransform(687.1,16.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#63A1CC").s().p("AAAAKQgJgBABgJQABgKAIABIAIABIgCASg");
	this.shape_17.setTransform(684.8,16.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#759EC7").ss(1,1,1,3,true).p("AAJgIIgIgBQgIgBgBAKQgBAJAJABIAHAAg");
	this.shape_18.setTransform(684.8,16.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#B3B3B3").ss(1,1,1,3,true).p("AgTgJQAUAAAOAGQAGACAAADQAAAFgHABQgOADgUgC");
	this.shape_19.setTransform(687.7,16.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#B3B3B3").ss(1,1,1,3,true).p("AADgFQgEAAgBAFQAAAFAEAB");
	this.shape_20.setTransform(689,16.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgHASIAAgiIAPAAIAAAig");
	this.shape_21.setTransform(647.8,16.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#63A1CC").s().p("AgIgJIAHAAQAJgCABALQACAIgLABIgGABg");
	this.shape_22.setTransform(650,15.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#759EC7").ss(1,1,1,3,true).p("AgIgJIAHAAQAJgCABALQACAIgLABIgGABg");
	this.shape_23.setTransform(650,15.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#B3B3B3").ss(1,1,1,3,true).p("AATgKQgUACgOAHQgGABABAEQAAAEAHACQANACAVgD");
	this.shape_24.setTransform(647.2,16);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#B3B3B3").ss(1,1,1,3,true).p("AgCgEQAEgBABAFQABAFgEAB");
	this.shape_25.setTransform(645.8,16.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E6E6E6").s().p("AhMgmQA6A1AeAAQAhAAAggOQgiAmghAAQgdAAg5hNg");
	this.shape_26.setTransform(666.5,22.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E6E6E6").s().p("AgRALQgPgDgTgOQATAGAQAAQAQAAA0gMQgjAZgYAAIgKgCg");
	this.shape_27.setTransform(669.7,20.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAADFQgTABghgUQgNh3gnguQgUgXghgGIgWgDQgLgCgDgCQgGgDgGhRQgGhSAHgFQAHgGBFARQBTAWApAAQAqAABXgVQBJgSAHAGQAHAFgGBSQgGBRgGADQgDADgLABIgWADQghAGgUAXQgnAugNB3QgdATgWAAIgCAAg");
	this.shape_28.setTransform(667.3,31.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E6E6E6").s().p("AhHhuIBHgPIBRAvQhYDDgtAJIgDAAQgoAAAYjsg");
	this.shape_29.setTransform(677.5,36.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E6E6E6").s().p("AA1B+QgtgJhYjDIBQgvIBIAPQAYDsgoAAIgDAAg");
	this.shape_30.setTransform(657.1,36.7);

	this.mcMenuNext = new lib.thenextone();
	this.mcMenuNext.setTransform(781.8,28.3,1,1,0,0,0,24.2,20.3);

	this.mcMenuLast = new lib.thelastone();
	this.mcMenuLast.setTransform(177,28.3,1,1,0,0,0,24,20.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#C29E6B").s().p("AAAAEQgDgCAAgCQABgEACACQAFABgCACQAAAAgBABQAAABgBAAQAAAAgBABQAAAAAAAAIAAAAg");
	this.shape_31.setTransform(719.4,36.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#C29E6B").s().p("AAAAGQgGgCABgFQABgGAFACQAHACgCAFQgCAFgDAAIgBgBg");
	this.shape_32.setTransform(730.3,15.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#C29E6B").s().p("AAAAHQgIgCACgGQADgIAFADQAGACgBAGQgBAGgFAAIgBgBg");
	this.shape_33.setTransform(722.2,35.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#C29E6B").s().p("AgIAEQgDgJAKgDQAHgEADAHQAEAFgLAHQgCADgDAAQgEAAgBgGg");
	this.shape_34.setTransform(724.3,32.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#C29E6B").s().p("AAAAHQgJgCADgGQADgIAFADQAHACgCAGQgBAGgFAAIgBgBg");
	this.shape_35.setTransform(726.9,34.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D39C63").s().p("AgCABQgBgCADgBQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQABABgEACIAAABQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBg");
	this.shape_36.setTransform(712.8,25.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D39C63").s().p("AgGADQgCgHAHgCQAFgDADAGQACADgIAGQgBACgCAAQgDAAgBgFg");
	this.shape_37.setTransform(710.3,25.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D39C63").s().p("AAAAFQgFgCACgDQACgFACABQAFACgBADQgBAEgDAAIgBAAg");
	this.shape_38.setTransform(711.3,28.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#C29E6B").s().p("AAAAHQgEgBAAgGQABgIAEADQAGADgCAEQgCAFgDAAIAAAAg");
	this.shape_39.setTransform(732.8,22.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#C29E6B").s().p("AgDAFQgFgDAEgEQAEgGAEAFQAGADgFAEQgDADgCAAIgDgCg");
	this.shape_40.setTransform(734.2,20.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#C29E6B").s().p("AgCABQgBgCADgBQACgBABACQACABgEADIgBABQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBg");
	this.shape_41.setTransform(737.4,32.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#C29E6B").s().p("AgHAEQgDgIAJgDQAGgDADAGQAEAEgKAHQgCACgCAAQgEAAgBgFg");
	this.shape_42.setTransform(734.5,33.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#C29E6B").s().p("AAAAFQgGgCACgDQACgHADACQAFADgBAEQAAAEgEAAIgBgBg");
	this.shape_43.setTransform(735.7,36.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#C29E6B").s().p("AAAADQgEAAACgDQABgEACABQADABAAADQAAAAgBABQAAABAAAAQgBAAAAAAQgBABgBAAIAAgBg");
	this.shape_44.setTransform(722.4,28.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#C29E6B").s().p("AgDABQgBgCAEgBQACgBABACQACABgFADIgBABQAAAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_45.setTransform(722.6,20.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#C29E6B").s().p("AAAAGQgHgCACgFQACgHAEADQAGACgBAFQgBAFgEAAIgBgBg");
	this.shape_46.setTransform(724.9,23.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#C29E6B").s().p("AgFACQgBgEAGgCQADgDADAFQACACgHAEIgCACQgDAAgBgEg");
	this.shape_47.setTransform(719.9,21.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#EDC997").s().p("AAJCSIhsAAQgTAAgEgHQgEgIABg8IABgOIADhXQgohHBKggIAJgEIAGgBIAGgDIAEgBIAEAAQAcgGAeAAQA/AAAoAYQA2AigjA/QACAoABAsIABAOQABA8gEAIQgEAHgTAAIg8AAIgIgBIgRAEg");
	this.shape_48.setTransform(728,27.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#D39C63").s().p("AhwCkQgWgBgEgIQgFgKABhAIADgtIACgJIgCgIIABguQgeg3AegiIAKgGIAFgIIAIgDIADgCIACgDQAugZBAAAQAiAAAiAJIAGADIAHAAIAGADIAGADIAJADQBRAkgsBPIACBbIACARQAABCgEAIQgEAIgWABg");
	this.shape_49.setTransform(728.1,27.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#333333").s().p("Ah9CjQAVADAPAAQBVAAA6g8QA8g8AAhTQAAhLgxg5QA9A7AABUQAABQg6A6Qg7A6hQAAQgcAAgagHg");
	this.shape_50.setTransform(399,31.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#666666").s().p("Ah9AbQAAhQA7g6QA6g6BQAAQAcAAAaAHQgVgDgPAAQhVAAg6A8Qg8A8AABTQAABLAxA5Qg9g7AAhUg");
	this.shape_51.setTransform(384.7,25.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#4C4C4C").s().p("AgZAcQgEgIAWgaQAUgbAIACIAGAFQghAVgOAlg");
	this.shape_52.setTransform(382.9,21.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#4C4C4C").s().p("AgIACQgIggAHgGIAGgBIAAAMQAAAhAQAcIgHACQgGgBgIgjg");
	this.shape_53.setTransform(380.6,30.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#4C4C4C").s().p("AgEAJQgggNABgJIADgGQAdAaAnAEIgDAIQgCABgDAAQgKAAgWgLg");
	this.shape_54.setTransform(386.9,38.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#4C4C4C").s().p("AgfAUIgEgHQAngGAcgbIAEAIQABAIggAOQgVALgKAAQgDAAgCgBg");
	this.shape_55.setTransform(396.8,38.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#4C4C4C").s().p("AgNAlQAQgdAAgfIgBgPIAJADQAHAFgIAgQgHAjgHABg");
	this.shape_56.setTransform(403,30.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#4C4C4C").s().p("AgbgaIAHgFQAIgDAVAcQAWAagEAHIgHAGQgOglghgWg");
	this.shape_57.setTransform(400.6,21.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#4C4C4C").s().p("AAAABQgSAAgUAGIAAgHQAEgGAigBQAjABADAGQABACgBAGQgTgHgTAAg");
	this.shape_58.setTransform(391.8,16.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#333333").s().p("AgBABQAAAAgBgBQAAAAAAAAQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAAAAAQABAAABABQAAAAAAAAQABABAAAAQAAAAAAAAQAAAAgBAAQAAABAAABIgCABIgBgCg");
	this.shape_59.setTransform(395.7,20.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#333333").s().p("AAAADQAAgBAAAAQgBAAAAgBQgBAAAAgBQAAAAAAAAQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAAAAAQABAAABABQAAAAABABQAAAAAAAAQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAIAAAAg");
	this.shape_60.setTransform(400.7,26.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#333333").s().p("AgCABQAAgBAAAAQAAAAAAAAQAAAAABgBQAAAAABAAQAAgBAAAAQAAAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAAAAAABQAAAAgBABQAAAAgBAAIgBABQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_61.setTransform(398.9,34.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#333333").s().p("AAAADQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAABABQABAAAAAAQAAABABAAQAAAAAAAAQAAAAAAABQgBAAAAABQgBAAAAAAQAAAAgBABQAAAAAAAAIAAAAg");
	this.shape_62.setTransform(391.7,37.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#333333").s().p("AgCAAQAAAAAAAAQAAAAAAAAQABgBAAAAQABAAAAgBQAAAAAAAAQABAAAAAAQABABAAAAQABABAAAAQAAAAAAAAQAAABgBAAQAAABgBAAQAAABgBAAIAAAAQAAAAAAAAQAAAAAAgBQgBAAAAgBQAAAAgBgBg");
	this.shape_63.setTransform(384.6,34.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#333333").s().p("AAAACQgBAAAAgBQgBAAAAgBQAAAAAAAAQAAAAABAAQAAgBABAAQAAgBAAAAQAAAAAAAAQABABAAAAQABAAAAABQABAAAAAAQAAAAAAAAQAAABgBAAIgCACIAAgBg");
	this.shape_64.setTransform(382.9,26.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#333333").s().p("AgCAAQAAAAAAAAQAAAAAAAAQABAAAAgBQABgBAAAAQACgBABADQABABgEACIAAAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQgBgBAAgBg");
	this.shape_65.setTransform(395.7,27.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#666666").s().p("AgFACQgCgEAGgDQAFgCACAGQACAEgHADIgBAAQgDAAgCgEg");
	this.shape_66.setTransform(395.7,27.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#808080").s().p("AgKADQgDgJALgDQAJgEAEALQADAJgLAEIgDAAQgHAAgDgIg");
	this.shape_67.setTransform(395.7,27.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#333333").s().p("AgBACQgDgCAEgBQABgCACADQAAAAAAAAQAAAAAAAAQAAABAAAAQgBABAAAAIgCABIgBgBg");
	this.shape_68.setTransform(394.1,31.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#666666").s().p("AgEAEQgEgEAFgEQAEgEAEAGQAEADgGAEIgDACQgCAAgCgDg");
	this.shape_69.setTransform(394.1,31.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#808080").s().p("AgIAHQgHgJAKgGQAHgHAHAKQAHAHgKAHQgEADgCAAQgEAAgEgFg");
	this.shape_70.setTransform(394.1,31.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#333333").s().p("AAAACQgEgCADgBQABAAAAgBQAAAAAAAAQAAAAAAAAQABAAABABQAAAAABABQAAAAAAAAQAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIAAgBg");
	this.shape_71.setTransform(389.3,31.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#666666").s().p("AgCAFQgGgEAEgEQAEgFAEAEQAFAEgEADQgCAEgDAAIgCgCg");
	this.shape_72.setTransform(389.3,31.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#808080").s().p("AgGAJQgJgHAHgIQAHgJAHAHQAKAHgHAHQgEAGgFAAQgBAAgFgDg");
	this.shape_73.setTransform(389.3,31.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#333333").s().p("AAAADQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAQABgDACABQAAAAABABQAAAAABABQAAAAAAAAQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAAAgBAAIAAAAg");
	this.shape_74.setTransform(387.9,27.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#666666").s().p("AgBAFQgGgCACgEQACgGAFACQAGABgCAFQgCAFgDAAIgCgBg");
	this.shape_75.setTransform(387.9,27.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#808080").s().p("AgCALQgLgEADgJQAEgLAJADQAMAEgEAJQgDAJgHAAIgDgBg");
	this.shape_76.setTransform(387.9,27.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#333333").s().p("AgCAAQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQAAAAABAAQABAAAAABQABAAAAABQAAAAAAAAQAAAAAAABQAAABgBAAQAAABgBAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAgBAAAAg");
	this.shape_77.setTransform(391.8,24.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#666666").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_78.setTransform(391.8,24.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#808080").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_79.setTransform(391.8,24.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#333333").s().p("AgCAAQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQAAAAABAAQABAAAAABQABAAAAABQAAAAAAAAQAAAAAAABQAAABgBAAQAAABgBAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAgBAAAAg");
	this.shape_80.setTransform(391.8,24.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#666666").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_81.setTransform(391.8,24.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#808080").s().p("AgKAAQAAgKAKAAQALAAAAAKQAAALgLAAQgKAAAAgLg");
	this.shape_82.setTransform(391.8,24.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#333333").s().p("AgOAkIgWgaQgEgHAMgTQAMgUAHgCQAIgCAUAbQAXAagFAIQgDAGgWAHQgMAFgGAAQgGAAgCgDg");
	this.shape_83.setTransform(399.6,21.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#333333").s().p("AgMAbQgUgNABgIIAHgfQACgIAWgDQAXgDAGAEQAHAFgHAgQgIAjgIACIgCAAQgHAAgQgMg");
	this.shape_84.setTransform(401.1,30.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#333333").s().p("AgdAiQgGgEgCgYQgCgWAGgEIAfgPQAGgDARARQARAQAAAFQABAJggAQQgVALgKAAQgDAAgCgCg");
	this.shape_85.setTransform(396.6,37.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#333333").s().p("AgGAZQgggQABgIQABgGAQgQQASgRAFADIAfAPQAGAEgCAWQgCAXgFAFQgCACgEAAQgJAAgWgLg");
	this.shape_86.setTransform(387.1,37.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#333333").s().p("AgLAnQgIgCgIgiQgIghAHgFQAGgEAWADQAXADACAIIAIAfQABAIgUANQgQAMgIAAIgBAAg");
	this.shape_87.setTransform(382.5,30.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#333333").s().p("AgLAiQgWgHgDgGQgEgIAWgaQAUgbAIACQAHACAMAUQAMATgEAGIgVAbQgDADgFAAQgHAAgMgFg");
	this.shape_88.setTransform(384,21.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#333333").s().p("AgPAeQgIgBgJgXQgIgTADgHQADgIAigBQAjABADAIQADAHgIATQgIAXgIABg");
	this.shape_89.setTransform(391.8,18.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#333333").s().p("AgCAAQAAAAAAAAQABAAAAgBQABAAAAAAQAAgBAAAAQABAAAAABQABAAAAAAQAAABABAAQAAAAAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAgBAAAAg");
	this.shape_90.setTransform(387.8,20.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#333333").s().p("AgOAQQgHgHAAgJQAAgIAHgHQAGgGAIAAQAJAAAGAGQAHAHAAAIQAAAJgHAHQgGAGgJAAQgIAAgGgGg");
	this.shape_91.setTransform(391.8,28.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#B3B3B3").s().p("AhcBdQgmgnAAg2QAAg1AmgnQAngmA1AAQA2AAAnAmQAmAnAAA1QAAA2gmAnQgnAmg2AAQg1AAgngmg");
	this.shape_92.setTransform(391.8,28.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#808080").s().p("AhiBjQgpgpAAg6QAAg4ApgqQAqgpA4AAQA6AAApApQApAqAAA4QAAA6gpApQgpApg6AAQg4AAgqgpg");
	this.shape_93.setTransform(391.8,28.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#404040").s().p("AiRCRQg8g8AAhVQAAhUA8g8QA9g9BUAAQBVAAA9A9QA8A8AABUQAABVg8A8Qg9A9hVAAQhUAAg9g9g");
	this.shape_94.setTransform(391.8,28.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#E3D463").s().p("AgSCLIgKgKQARgDgCgHQgDgNAGgLQANgZgMi6IASgWIAUAEIgDCtQgBA1gOASIgCAMQgCAJgFAEQgFAEgKAAIgFAAg");
	this.shape_95.setTransform(452.3,37.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#F6EDA9").s().p("AA2BZQgJgCgFgOIgZhOQgVg+gcAEQgMAAgLAKIgHAGQAHgUANgCQAJgBAJgIQAJgIACAAQAHgEAMADQAUAEAJARQArBOgOBIQgBAFgGAAIgBAAg");
	this.shape_96.setTransform(457.9,29.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#F6EDA9").s().p("Ag5BAQACghAIgjQAOg9AVgIIALAEQAKAEAKgBIASgEQAPAAAEAPQADAGgCABQgNgegUAUQgLAMgXA0IgeA9IgEAHIgEAAQgKAAABgKg");
	this.shape_97.setTransform(445.6,29.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#E3D463").s().p("AAlBFIgQg0QgPgsgMgXQgTgegdAcIgFAFIAAgKIAIgKIAhgMIAsArIAiBzIgIABQgKAAgFgLg");
	this.shape_98.setTransform(457.5,30.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#E3D463").s().p("AggA5QANg9AQgfQANgfAXALQgIAHgCAEIgyBng");
	this.shape_99.setTransform(439.6,29.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#E3D463").s().p("Ag3BHIBGiIIAXgFIAKAGIAIANQABAOgDgEIgGgLQgFgJgGABQgUACglBcQgMAigIADIgGAAIgJAAg");
	this.shape_100.setTransform(445.9,30.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#F0E170").s().p("AAACNQglgdgDhIIgGiZIAlgbIAQAPIACAGIARgRIAVAEIgDCtQAAA1gPASIgCAMQgCAJgFAEQgHAEgJAAIgEAAg");
	this.shape_101.setTransform(450.5,37.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#F6EDA9").s().p("Ag5BCQANg3AJgaQAJgfAXgGQAKgDAKgHQASgLAVAGIACAaIg2AAIgNAFIgsBqg");
	this.shape_102.setTransform(441.7,27.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#F3F0CA").s().p("AAdBgIgMAEQgBhagQgsQgKgigZgZIgKgKQgCgDAIAAIACAAQAEAAARAGQA8AhABCNIABAaIgIAHg");
	this.shape_103.setTransform(449.9,14.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#F8F8E8").s().p("AgVBDQAGhFgZg8IgOghQgFgMAHgGQAMgKAQACIARAFQA8AiABCNIADA9IhSADg");
	this.shape_104.setTransform(449,16.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#E3D463").s().p("AAdBAQgSgCgIgTIgjhaQgLAEAOgNQAPgNATANIAYApQARBPgQAAIgBAAg");
	this.shape_105.setTransform(457.5,26.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#F6EDA9").s().p("AgNABQAEgFAFgGQAKAAAFAKIADAFIgPAGg");
	this.shape_106.setTransform(454.6,20.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#8DCA6E").s().p("AgDgJIADgEIAEAYIgEADg");
	this.shape_107.setTransform(604.1,13);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#8DCA6E").s().p("AgGgEIAFgFIAIAMIgHAHg");
	this.shape_108.setTransform(601.5,13.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#8DCA6E").s().p("AgEgBIAJgCIAAAFIgJACg");
	this.shape_109.setTransform(605.4,10.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#8DCA6E").s().p("AgHABIAJgHIAGAGIgMAHg");
	this.shape_110.setTransform(603.9,9.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#8DCA6E").s().p("AgJgGIAHgDIAMASIgJABg");
	this.shape_111.setTransform(602.9,10.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#8DCA6E").s().p("AgMAEIAUgLIAFAHIgUAIg");
	this.shape_112.setTransform(600.6,10.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#8DCA6E").s().p("AgLAAIAVgGIADAGIgVAHg");
	this.shape_113.setTransform(599.1,12.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#8DCA6E").s().p("AgCANIACgbIADACIAAAbg");
	this.shape_114.setTransform(596.4,17.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#8DCA6E").s().p("AgDALIADgWIAEABIgDAWg");
	this.shape_115.setTransform(595.8,17);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#8DCA6E").s().p("AgRAIIATgRIAFAGIAFgJIAFAHIgRAOIgEgDIgIAHg");
	this.shape_116.setTransform(606.9,12.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#8DCA6E").s().p("AgIgFIAFgFIAMASIgIADg");
	this.shape_117.setTransform(603,12.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#8DCA6E").s().p("AgNAGIAWgPIAFAHIgXAMg");
	this.shape_118.setTransform(601.3,11.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#8DCA6E").s().p("AgKACIABgHIAUAFIgEAGg");
	this.shape_119.setTransform(597.8,10.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#8DCA6E").s().p("AAAgOIAEAAIgEAZIgDAEg");
	this.shape_120.setTransform(620.9,22.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#8DCA6E").s().p("AgDgJIAHAOIgHAFg");
	this.shape_121.setTransform(619.8,19.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#8DCA6E").s().p("AAAABIgOgLIAHgGIAJANIALAAIACAUQgKgLgFgFg");
	this.shape_122.setTransform(611.5,14.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#8DCA6E").s().p("AgKgFIAHgEIAOARIgHACg");
	this.shape_123.setTransform(613.6,17.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#8DCA6E").s().p("AgBAOIgDgbIAEAAIAFAbg");
	this.shape_124.setTransform(613.7,25.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#8DCA6E").s().p("AgCALIACgWIADAAIgCAXg");
	this.shape_125.setTransform(604.3,19);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#8DCA6E").s().p("AgIgHIAHgCIALAQIgIADg");
	this.shape_126.setTransform(603.6,16.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#8DCA6E").s().p("AgGAKIAGgWIAHACIgFAXg");
	this.shape_127.setTransform(605.5,18.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#8DCA6E").s().p("AgIABIACgCIAOAAIAAADg");
	this.shape_128.setTransform(601.3,16.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#8DCA6E").s().p("AgLgKIAGgDIARAYIgIACg");
	this.shape_129.setTransform(598.3,17.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#8DCA6E").s().p("AgIgBIAHgHIAKALIgGAFg");
	this.shape_130.setTransform(597.2,14.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#8DCA6E").s().p("AgMAAIAYgEIABAEIgWAFg");
	this.shape_131.setTransform(599.4,13.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#8DCA6E").s().p("AgFADIAFgJIAGADIgGAKg");
	this.shape_132.setTransform(606.7,13.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#8DCA6E").s().p("AgCALIABgVIAFAAIAAAVg");
	this.shape_133.setTransform(605.1,15.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#F3F3F3").s().p("AA7AsQgfgJgSgIQgKgBgCgDQgFgEgGgNQgbAEgEgbQgGAAgMgEQgMAKgIgKQgfAWgVgcQgMgQAKgSQACAhAkgCQAZgCATgJQANgGARAEQAPADALAOIATAaQAXAeAjgIQAVgFgDgTQgBgKgGgKIAVAeQANASANgQIAEgHQACAGgEAJQgEAKgMgBIgMAAQAJAQgKAEIgPACQgKANgIAAQgKAAgIgSg");
	this.shape_134.setTransform(607.2,22.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#A3774A").s().p("AgGAEQgDgEAIgDQAFgEADAEQADADgHAEQgDACgCAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAg");
	this.shape_135.setTransform(617.6,42.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#A3774A").s().p("AgUACQgBgGAVgCQAUgCABAHQABAFgWADIgHAAQgMAAgBgFg");
	this.shape_136.setTransform(613.5,43.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#8C6133").s().p("AgFADQgCgDAHgDQAEgEACAFQACADgGADIgDABQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_137.setTransform(596.2,23.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#8C6133").s().p("AgHAAQABgNAGABQAIgBgBANQABANgIAAQgGAAgBgNg");
	this.shape_138.setTransform(593.8,34.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#8C6133").s().p("AgBAAQAAgCABgDQACAAAAAFQAAAGgCAAQgBgDAAgDg");
	this.shape_139.setTransform(589.5,31.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#8C6133").s().p("AAAAAQAAgBAAgDQABAAAAAEQAAAFgBAAIAAgFg");
	this.shape_140.setTransform(591.3,31.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#8C6133").s().p("AgEAAQAAgIAEAAQAFAAAAAIQAAAJgFAAQgEAAAAgJg");
	this.shape_141.setTransform(591.8,34.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#8C6133").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQgBgBAAAAg");
	this.shape_142.setTransform(612.2,35.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#8C6133").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAEgFAAQgEAAAAgEg");
	this.shape_143.setTransform(611,36.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#8C6133").s().p("AgCAAQAAAAAAAAQABgBAAAAQABAAAAgBQAAAAAAAAQAAAAABAAQABABAAAAQAAAAABABQAAAAAAAAQAAAAAAABQgBAAAAABQAAAAgBABQgBAAAAAAQAAAAAAAAQAAgBgBAAQAAgBgBAAQAAgBAAAAg");
	this.shape_144.setTransform(609.9,33.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#8C6133").s().p("AgFAAQgBgFAGAAQAGAAAAAFQAAAGgGAAQgGAAABgGg");
	this.shape_145.setTransform(613.4,36.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#8C6133").s().p("AgHAAQAAgHAHAAQAIAAAAAHQAAAIgIAAQgHAAAAgIg");
	this.shape_146.setTransform(609.7,38.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AA7BPQgfgKgSgHQgKgCgCgDQgFgEgGgNQgbAEgEgdQgGABgMgFQgMALgIgKQgfAXgVgdQgNgQAOgVIAVgbQAFgOANgIQALgHAZgHQATgGAXAPIAZAYQANgFAKAOIAkgLIACALQAGgDADAGIAEAIQAfAEAGAaQACAIAAAJIAAANQANAIADAEQAGAJgFANQgEAJgMAAIgMAAQAJAPgKAEIgPACQgKAOgIAAQgKAAgIgSg");
	this.shape_147.setTransform(607.2,19.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#8C6133").s().p("AgRADQgBgGASgDQAQgDACAIQABAGgTACIgHABQgJAAgBgFg");
	this.shape_148.setTransform(601.6,21.9);

	this.instance = new lib.Symbol50("synched",0);
	this.instance.setTransform(620,29.9,1,1,0,0,0,0.1,0.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#8C6133").s().p("ABCAjQgngNgUACQgTACAMgPIgZAAQgcAAAEgmIgHADQgNAGgDgQQgBADgaAIQgQAFgMgSIAFgDQAdgOA2gBICNA1IAaAfQgRAEgRAQQgGAFgFAAQgKAAgHgUg");
	this.shape_149.setTransform(606.9,24.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#8C6133").s().p("AgjAVQgdgFAOgQQATgXA2ABIAgAYIgyARQgHAEgNAAQgJAAgLgCg");
	this.shape_150.setTransform(604.3,25.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#8C6133").s().p("Ag8AOQAfgGATgFQARgEARgJQAMgGADABQAQABAHAGIgEAEQgyAUgpAAQgOAAgNgCg");
	this.shape_151.setTransform(607.2,27.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#8C6133").s().p("AgMBnQhdgPglglQgcgcgJgiQAVAxBFATQBMAVBKgmQAggXAHgIQALgLALAAQAOgBACASQABALAGAFQAEAFAGgDQAPgGgFgbQgOhUgygXIAXgCQAzAlAEA8QAIBmhUARQgQADgWAAQghAAgsgHg");
	this.shape_152.setTransform(606.8,34.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#A3774A").s().p("AgKB9QhdgPglglQgvgwAIg6QAHg5A1gaQAZgNAwgCQAxgCAwAMQB8AgAGBhQAIBohUARQgQAEgWAAQghAAgsgIg");
	this.shape_153.setTransform(606.6,32.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AAAACQgFAAAAgCQAAgBAFAAQAHABgBAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgCAAg");
	this.shape_154.setTransform(502.2,9.7);

	this.instance_1 = new lib.Symbol48("synched",0);
	this.instance_1.setTransform(497.5,11.3);

	this.instance_2 = new lib.Symbol47("synched",0);
	this.instance_2.setTransform(496.1,10);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#E6E6E6").s().p("AgFAQIgJgFIgNgNQgGgKAVgDQASgCALAKIAKAJQAGAKgLADIgCABg");
	this.shape_155.setTransform(497,10.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AgLAPIgCgBIgCgCIgMgMQgHgMAVgCQAQgCAOALIALAIQAEAIgFAEIgTABIgTgBg");
	this.shape_156.setTransform(496.9,10.6);

	this.instance_3 = new lib.Symbol46("synched",0);
	this.instance_3.setTransform(497.6,10.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#F3F3F3").s().p("Ag7AMQgZgGAAgGQAAgGAZgFQAZgFAiAAQAiAAAaAFQAYAFAAAGQAAAGgYAGQgaAFgiAAQgiAAgZgFg");
	this.shape_157.setTransform(497.6,10.9);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#B3B3B3").s().p("AhTAAQgEgFAFgGQAEgFBQADQBNgDAEAFQAGAHgGAEQgDAFgXAFQgXAFggAAQhJAAgMgPg");
	this.shape_158.setTransform(497.6,11.8);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("rgba(0,66,161,0.298)").s().p("AhUgCIADgJICkAAIACAHQgSAQhBAAQhIAAgOgOg");
	this.shape_159.setTransform(497.7,13.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#BACFE3").s().p("AhlBuQAMgkATgFIAYgFQAUgDATgHQA+gZgTg7QgJghAogZQAigUABgSIgBAcQgIAKgQAIQgTALgDAZIACAcQACAsgbAZQgVAVgjACQgfACgGABQgQADgGAKQgJAXgJAMg");
	this.shape_160.setTransform(498,29.6);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("rgba(255,255,255,0.408)").s().p("AAChrQgBgagEgNIgFgPIAIAQIAEAKQAEAIABASIAAELIgHAEg");
	this.shape_161.setTransform(506,28.8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("rgba(0,66,161,0.2)").s().p("AgNCjQgLgIgDgEQgBgEgBgKIgFkEQAAgRAGgIIAKgOQAHgKgBgDIAaABIAVAGIgCAJQgTAFAAArIABEfQgTgGgJgHg");
	this.shape_162.setTransform(490.8,29.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#759EC7").s().p("AgFC0QgPgBgYgFQgbgGgLgIQgMgJgCgEQgBgDgBgKIgGkFQABgRAFgHIALgPQAGgJAAgEICjAAQAAADARAZQAFAHABARIgGEFQAAAKgBADQgDAEgMAJQgLAIgbAGQgYAFgOABg");
	this.shape_163.setTransform(497.7,29.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#666666").s().p("AhGAAQgKgFgCgKIClAAQgCAKgKAFQgcAQgrAAQgpAAgdgQg");
	this.shape_164.setTransform(497.9,47);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AgDAAQABgCACgBQADABAAACQAAADgDAAQgCAAgBgDg");
	this.shape_165.setTransform(539.9,17.9);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#999999").s().p("AgJAAQAAgJAJAAQAKAAAAAJQAAAKgKAAQgJAAAAgKg");
	this.shape_166.setTransform(540.1,18.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#F3F3F3").s().p("AgPAAQAAgPAPAAQAQAAAAAPQAAAQgQAAQgPAAAAgQg");
	this.shape_167.setTransform(540.4,18.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFD7D").s().p("AhagXQAUgkBtAFQAkAAAVgHQgJAKgrAEQg9AFgKADQgnAHgFAVQgHAYAsAxQhOgxAWgkg");
	this.shape_168.setTransform(548.4,38.4);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#E3C254").s().p("AgEAUQgagKgDgKQgBgDADAAIAIAAIgHgOQgFgMAHACIAXAGQANACAFgIQABgCAGAAQgKASANALQAVAVgTAIIgBABg");
	this.shape_169.setTransform(532.6,20.4);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#F3EB75").s().p("AhfCcQgngHgTg1IgBgMQAAgcAKgRQALgUAdgRQAHgCAFgMQAGgRgRgMIgCgDQg2gNgGgSQgBgEAEgBIAIAAIgIgNQgEgMAHACIAWAFQAQADAEgIQACgCAFAAQAggwA0gDIABAAQARACALAHQAcANACAaQAEArglArQgdAnAtgJIAPgEIATgEQARgEAlgEQAFAAAbgkQABgPAFgIQAKgGAHARQAIAVgBAWQgDAZgUASQgUASgoAEIhoAFQgdAGgHAUQgHAVAEAGIAXAYQgUAXgbAAIgLgBg");
	this.shape_170.setTransform(545.7,28);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#DCD161").s().p("AhgCjQgngLgVgdQgSgYAAgeQAAgbAKgSQALgUAcgPQAHgDAFgMQAGgRgQgMIgDgEQg1gMgGgTQgBgEADAAIAIAAIgHgOQgFgLAHABIAXAGQAPACAFgHQABgCAGgBQAmg6A/AJQBBAJABA4QACAkgmAnQgTAWAXgBQAJgBAOgEQARgFAngEQAFgBAagjQAFhBAhBEIAXAvQAOAlgEAhQgFAngXAbQgVAbgeAGQglAIg8ACIgYAAQg0AAgegIg");
	this.shape_171.setTransform(547.8,29.4);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#C2C2A8").s().p("AgoA4IAAiLIBRAWIAACRg");
	this.shape_172.setTransform(332.7,28.8);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#C8C8B9").s().p("AgIgWIAGgBIAAATIAEgUIAGgCIgGAUIAHAcIgGABIgDgWIgCAGIAAASIgGACg");
	this.shape_173.setTransform(346.5,22.9);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#C8C8B9").s().p("AgHgXIAHgBIAAAoIAHgCIAAAIIgOADg");
	this.shape_174.setTransform(344.5,23.4);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#C8C8B9").s().p("AgCgXIAFgBIAAAwIgFABg");
	this.shape_175.setTransform(342.8,23.7);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#C8C8B9").s().p("AgLgUIAIgCIADAaIAAAAIAEgdIAIgCIAAAxIgFABIAAglIAAAAIgGAmIgBABIgFgkIgBAAIAAAlIgFABg");
	this.shape_176.setTransform(340.7,24.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#F7F7F2").s().p("AgygEIAAgQIBlAZIAAAQg");
	this.shape_177.setTransform(332.7,18.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#C8C8B9").s().p("AgyADIBlgVIAAAQIhlAVg");
	this.shape_178.setTransform(343,18.9);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#C8C8B9").s().p("AgyADIBlgkIAAAfIhlAkg");
	this.shape_179.setTransform(343,39.7);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#C8C8B9").s().p("AgyANIBlgkIAAALIhlAkg");
	this.shape_180.setTransform(343,42.3);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#F7F7F2").s().p("AgygOIAAgLIBlAnIAAAMg");
	this.shape_181.setTransform(332.7,42.2);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#F7F7F2").s().p("AgygDIAAgfIBlAnIAAAeg");
	this.shape_182.setTransform(332.7,39.5);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#DCE3D1").s().p("AgygEIBlgRIAAAaIhlARg");
	this.shape_183.setTransform(338.1,6.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#CCD4C2").s().p("AgdAbIA0g2IAHANIg3Aqg");
	this.shape_184.setTransform(330.6,11.4);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#B5B59C").s().p("AgyAOIA0g3IAxBTg");
	this.shape_185.setTransform(332.7,12.7);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#D7D7BD").s().p("AgyCJIAAk6IBlAbIAAFIg");
	this.shape_186.setTransform(332.7,32);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#A3A38A").s().p("AgyiYIBlgXIAAE5IhlAmg");
	this.shape_187.setTransform(343,32.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#A3A38A").s().p("AhLggIBmgQIAxBKIhlAXg");
	this.shape_188.setTransform(340.5,11.9);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#E6E6E6").s().p("AgvATQA/gKAcggIAEAGQgcAfhAAKg");
	this.shape_189.setTransform(287.8,33.3);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#E6E6E6").s().p("AgvAUQBAgLAbggIAEAFQgbAghAAKg");
	this.shape_190.setTransform(287,31.9);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#E6E6E6").s().p("AgvATQBAgKAbggIAEAEQgcAig/AJg");
	this.shape_191.setTransform(286.3,30.7);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#E6E6E6").s().p("AgvATQBAgKAbggIAEAFQgcAgg/AKg");
	this.shape_192.setTransform(285.6,29.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#E6E6E6").s().p("AgvATQBAgKAbghIAEAGQgcAhg/AKg");
	this.shape_193.setTransform(284.8,27.8);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#E6E6E6").s().p("AgvATQBAgKAbghIAEAGQgcAgg/ALg");
	this.shape_194.setTransform(283.9,26.5);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#666666").s().p("AghgJQALgWAPAAQAHAAAAAKQAAAKAJgDQALgDAHAHIAHANQgcACgOAbg");
	this.shape_195.setTransform(292.4,22.2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#999999").s().p("AgUAQQgNgGA5gaQgjAhgIAAIgBgBg");
	this.shape_196.setTransform(291,47.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#999999").s().p("AAdgWQATAMhQAiQAzg1AKAHg");
	this.shape_197.setTransform(301.7,38.7);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#B3B3B3").s().p("AhJAzIgIgQQAlgCAeghQBChIAXAeIAHAPQgVgcg9BCQgjAogjAAIgDAAg");
	this.shape_198.setTransform(284.5,18.8);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#CCCCCC").s().p("Ag9gFQANgBADgBQA5gLATgbQAPAdAQATQgqArg0ABg");
	this.shape_199.setTransform(290.5,38.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#CCCCCC").s().p("Ag9geQAhgmAVADQAQAfA1A/QgZgOgoA0Qg0hVgGgMg");
	this.shape_200.setTransform(298.3,30.9);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#CCCCCC").s().p("AhFgVQAhgIASgJQAJgFAagVIA1BaQgfAhg8AGg");
	this.shape_201.setTransform(286.1,29.9);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#999999").s().p("AgvgUQAUgVANgGQAUgJAKARIAgA2QgfgCgVAmg");
	this.shape_202.setTransform(291.9,21.6);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#B3B3B3").s().p("AguATQAvgGAkgsIAKATQggAjg2AJg");
	this.shape_203.setTransform(282.5,23.5);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#CCCCCC").s().p("AhFA6IgRgeQAiAEApgrQA/hEAZAhIAKAYQgLgLgZALQgWAKgSARQgsA1gjAAIgBAAg");
	this.shape_204.setTransform(282.8,15.5);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#E6E6E6").s().p("AgeDGIACgKIgIACIiXj4IAMABIgKgVIAPACIgSgiIAQABIgIgOQA3AJBQhLQAogfAbARQAWA5ATAlQAvBaBHBPQAJALgCAIQgHAWg4AZQhEAegcAQQgdASgOAUg");
	this.shape_205.setTransform(287.5,29.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#CCCCCC").s().p("AhhAsIAZgkQCPhjATAQQAOANgNASQgPATgqAVQghAQgcAaQgjAfgGAEQgHAFgFAAQgPAAgCgig");
	this.shape_206.setTransform(296.3,43.2);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#DEDEC7").s().p("Ah7CDQAgAXAvAAQA6AAAkgmQAggiAJg6QAIg0gOg7QgOg5gegpQAoAdAXA/QAXA9gDA9QgDBEggAqQglAvhBAAQhJAAglg3g");
	this.shape_207.setTransform(236.5,31);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#F9F9EE").s().p("AgRAbQgGgEABgKQACgLAIgKQAIgLAHgGQAKgFAFAEQAGAEgBAKQgCALgIAKQgIALgHAFQgGAEgFAAIgEgCg");
	this.shape_208.setTransform(229.1,17.3);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#F0F0D9").s().p("AhxCHQggg2AIhRQAHhNAmg5QAog9A0AAQA1AAApA9QAlA6AHBMQAIBRggA2QglA9hNAAQhMAAglg9g");
	this.shape_209.setTransform(235,29.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.instance_3},{t:this.shape_156},{t:this.shape_155},{t:this.instance_2},{t:this.instance_1},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.instance},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.mcMenuLast},{t:this.mcMenuNext},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).wait(1));

	// bkd
	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("rgba(255,255,255,0.6)").s().p("EhK/AEcIAAo4MCV/AAAIAAI4g");
	this.shape_210.setTransform(480,28.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_210).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,960,58.9);


(lib.sodas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"stop":0,"play":1});

	// timeline functions:
	this.frame_0 = function() {
		/* 
		// sodas
		var mcSodaFill:MovieClip = this.createEmptyMovieClip("mcSodaFill", this.getNextHighestDepth());
		var auSodaFill:Sound = new Sound(mcSodaFill);
		auSodaFill.attachSound("soda_fill");
		auSodaFill.setVolume(50);
		
		stop();
		*/
		this.stop();
	}
	this.frame_1 = function() {
		/* play();
		*/
		this.play();
	}
	this.frame_7 = function() {
		/* 
		if (_parent.curMusicState == "on") {
			auSodaFill.start();
		}*/
	}
	this.frame_60 = function() {
		/* stop();
		*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(6).call(this.frame_7).wait(53).call(this.frame_60).wait(1));

	// bubbles
	this.instance = new lib.soda_bubbles();
	this.instance.setTransform(43,-354.9,1,1,0,0,0,119.3,28);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60).to({_off:false},0).wait(1));

	// splash
	this.instance_1 = new lib.cokedrips();
	this.instance_1.setTransform(20.7,-68.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({scaleX:3,scaleY:3,x:48.7,y:-395.8},45,cjs.Ease.get(1)).to({_off:true},6).wait(1));

	// stream
	this.instance_2 = new lib.cokestream();
	this.instance_2.setTransform(20,-1049,0.504,1);
	this.instance_2.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-569.7},9,cjs.Ease.get(-1)).to({scaleX:0.5,x:48,y:-882},45,cjs.Ease.get(1)).to({scaleY:0.01,y:-379},5,cjs.Ease.get(-1)).to({_off:true},1).wait(1));

	// can
	this.instance_3 = new lib.soda_can();
	this.instance_3.setTransform(14.8,1.7,0.14,0.14,0,0,0,131.1,493.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({regX:130.7,regY:494.3},0).to({regX:130.8,regY:493.8,scaleX:0.83,scaleY:0.83},45,cjs.Ease.get(1)).wait(7));

	// shadow
	this.instance_4 = new lib.soda_shadow();
	this.instance_4.setTransform(15,1.5,0.14,0.14,0,0,0,30.7,16.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({regX:32,regY:16.6,scaleX:0.75,scaleY:0.75,x:20.2,y:-0.8},45,cjs.Ease.get(1)).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.1,-1072.9,75.7,1075.9);


(lib.shower_water_move = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhKrAhNMAAAhCOQFCB0FHiTQDECICxiFIAwAgQA1AeA4ANQCwAoCviAIAZAeQAYAaAaAOQBRAnBZhZIAZAeQAXAaAaAMQBSAmBxhVIAhAdQAcAWAeAKQBZAeBuhHIAoAXQAjATAhAEQBnAQBjhxIAoAfQAaASAbAGQBNAQCDhHQBdAnAWAHQBGAZA7AGQCfAPCfhwQBwB7CLhxQCZCCB3iCQBfBFBwASQCrAcCkhpQBAAuBIABQBLADBEgyQAYAiAwAFQA4AGAugtQApAlBJAJQBdANBKg7QASAIA5AeQAsAYAiAHQBlAVCthaQCmBFCCAOQDSAXCYhqIA4AtQAYAVARADQAWAFAigNQAhgNBCgmQAvAbARAIQAjARAbADQBEAJA6hKQBMAvBBAMQBxAWA4hbQAmAmA1AIQBNANBKg7QBAAtBFAHQBdALBUg/QAvAqA5AFQBFAHA8g2QBCA7BsADQByADBGhBQC4CDClh5QCOBiBuhiQAxAsBCAJQBYAMBOhBQAYAUAlANQApAOApACQBoAEA1hJUAATAC+AAKBAqg");
	mask.setTransform(478.1,216.5);

	// bubbles
	this.instance = new lib.shower_bubbles_move();
	this.instance.setTransform(554.1,216.5,1,1,0,0,0,342.9,182.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 5
	this.instance_1 = new lib.water2();
	this.instance_1.setTransform(479.7,520.9);
	this.instance_1.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.3,-8.8,970,529.7);


(lib.potatoes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"stop":0,"play":1});

	// timeline functions:
	this.frame_0 = function() {
		/* 
		// potato grow1
		var mcPotatoGrow1:MovieClip = this.createEmptyMovieClip("mcPotatoGrow1", this.getNextHighestDepth());
		var auPotatoGrow1:Sound = new Sound(mcPotatoGrow1);
		auPotatoGrow1.attachSound("potato_grow1");
		auPotatoGrow1.setVolume(50);
		
		// potato grow2
		var mcPotatoGrow2:MovieClip = this.createEmptyMovieClip("mcPotatoGrow2", this.getNextHighestDepth());
		var auPotatoGrow2:Sound = new Sound(mcPotatoGrow2);
		auPotatoGrow2.attachSound("potato_grow2");
		auPotatoGrow2.setVolume(70);
		
		// potato butter
		var mcPotatoButter:MovieClip = this.createEmptyMovieClip("mcPotatoButter", this.getNextHighestDepth());
		var auPotatoButter:Sound = new Sound(mcPotatoButter);
		auPotatoButter.attachSound("potato_butter");
		auPotatoButter.setVolume(50);
		
		// potato sour cream
		var mcPotatoSourCream:MovieClip = this.createEmptyMovieClip("mcPotatoSourCream", this.getNextHighestDepth());
		var auPotatoSourCream:Sound = new Sound(mcPotatoSourCream);
		auPotatoSourCream.attachSound("potato_sourcream");
		auPotatoSourCream.setVolume(50);
		
		stop();
		*/
		this.stop();
	}
	this.frame_1 = function() {
		/* 
		if (_parent.curMusicState == "on") {
			auPotatoGrow1.start();
		}
		
		play();
		*/
	}
	this.frame_24 = function() {
		/* 
		if (_parent.curMusicState == "on") {
			auPotatoGrow1.start();
		}*/
	}
	this.frame_49 = function() {
		/* 
		if (_parent.curMusicState == "on") {
			auPotatoGrow2.start();
		}*/
	}
	this.frame_94 = function() {
		/* 
		if (_parent.curMusicState == "on") {
			auPotatoButter.start();
		}*/
	}
	this.frame_169 = function() {
		/* 
		if (_parent.curMusicState == "on") {
			auPotatoSourCream.start();
		}*/
	}
	this.frame_279 = function() {
		/* stop();
		*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(23).call(this.frame_24).wait(25).call(this.frame_49).wait(45).call(this.frame_94).wait(75).call(this.frame_169).wait(110).call(this.frame_279).wait(1));

	// ground plant right
	this.instance = new lib.dirt_plant_right();
	this.instance.setTransform(248.8,439.5,1,1,0,0,0,7.2,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:253.8,y:420.5},14,cjs.Ease.get(-1)).wait(10).to({y:415.5},15,cjs.Ease.get(-1)).wait(10).to({x:263.8,y:411.5},30,cjs.Ease.get(-1)).wait(201));

	// ground plant left
	this.instance_1 = new lib.Tween8("synched",0);
	this.instance_1.setTransform(184.5,436.1);

	this.instance_2 = new lib.Tween9("synched",0);
	this.instance_2.setTransform(181.5,421.1);
	this.instance_2._off = true;

	this.instance_3 = new lib.dirt_plant_left();
	this.instance_3.setTransform(144.4,407.1,1,1,0,0,0,9.3,7.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},14).to({state:[{t:this.instance_2}]},10).to({state:[{t:this.instance_2}]},15).to({state:[{t:this.instance_2}]},10).to({state:[{t:this.instance_3}]},30).wait(201));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,x:181.5,y:421.1},14,cjs.Ease.get(-1)).wait(266));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:false},14,cjs.Ease.get(-1)).wait(10).to({startPosition:0},0).to({x:151.5,y:413.1},15,cjs.Ease.get(-1)).wait(10).to({startPosition:0},0).to({_off:true,regX:9.3,regY:7.8,x:144.4,y:407.1,mode:"independent"},30,cjs.Ease.get(-1)).wait(201));

	// ground
	this.instance_4 = new lib.ground();
	this.instance_4.setTransform(323.9,460,0.737,0.6,0,0,0,266.3,51.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleY:0.8,y:460.1},14,cjs.Ease.get(-1)).wait(10).to({scaleX:1,scaleY:0.9},15,cjs.Ease.get(-1)).wait(10).to({regX:266.2,scaleY:1,x:323.8},30,cjs.Ease.get(-1)).wait(201));

	// bacon bits
	this.instance_5 = new lib.potato_baconbits_splat();
	this.instance_5.setTransform(112.6,105.5,1,1,0,0,0,25.2,41.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(264).to({_off:false},0).wait(16));

	// chives
	this.instance_6 = new lib.potato_chives_splat();
	this.instance_6.setTransform(113.7,113.4,1,1,0,0,0,43,75.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(224).to({_off:false},0).wait(56));

	// sourcream
	this.instance_7 = new lib.potato_sourcream_splat();
	this.instance_7.setTransform(-11.4,-251.5,1,0.6,-30,0,0,36.1,93.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(164).to({_off:false},0).to({regY:93.7,scaleY:0.8,rotation:0,guide:{path:[-11.3,-251.4,52.1,-208.6,79.6,-87.3,89.8,-42.5,96.5,19.6,98.3,37.1,103.8,102]}},10,cjs.Ease.get(-1)).to({scaleY:0.9,guide:{path:[103.8,102,104.2,106.9,104.6,111.9]}},5,cjs.Ease.get(1)).to({regY:93.8,scaleY:1,guide:{path:[104.6,111.9,105,116.8,105.4,121.9]}},30).wait(71));

	// sourcreamdrip
	this.instance_8 = new lib.potato_sourcream_drip();
	this.instance_8.setTransform(95.5,198.5,1,1,0,0,0,4.2,43.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(189).to({_off:false},0).to({y:268.5},50,cjs.Ease.get(0.5)).wait(41));

	// butter
	this.instance_9 = new lib._potato_butter_splat();
	this.instance_9.setTransform(-251.4,-131.5,0.8,0.8,0,0,0,35.6,49.4);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(89).to({_off:false},0).to({rotation:360,guide:{path:[-251.3,-131.3,-67.5,-125.6,44.4,-13.4,81.8,23.9,115.6,78.3,124.4,92.5,139.9,119.3,149.1,135.4,154.9,144.8]}},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:0.9,guide:{path:[154.9,144.8,157.5,149,159.4,151.9]}},5,cjs.Ease.get(1)).to({scaleY:1,y:166},30).wait(146));

	// butter drip mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_114 = new cjs.Graphics().p("AneThMAAAgnBIO9AAMAAAAnBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(114).to({graphics:mask_graphics_114,x:171.6,y:272.5}).wait(166));

	// butter drip 1
	this.instance_10 = new lib.potato_butterdrip2();
	this.instance_10.setTransform(156.9,130.3,1,1,-4,0,0,6.7,66.3);
	this.instance_10._off = true;

	this.instance_10.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(114).to({_off:false},0).to({rotation:0,y:250.3},66,cjs.Ease.get(0.5)).wait(100));

	// butter drip 2
	this.instance_11 = new lib.potato_butterdrip1();
	this.instance_11.setTransform(194.1,83.5,1,1,6,0,0,7.9,101.6);
	this.instance_11._off = true;

	this.instance_11.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(119).to({_off:false},0).to({regY:101.5,rotation:0,x:189.1,y:273.4},86).wait(75));

	// potato mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("A2i4UMAz+AAoMgIoA53I9MAeg");
	var mask_1_graphics_1 = new cjs.Graphics().p("A2i4UMAz+AAoMgIoA53I9MAeg");
	var mask_1_graphics_2 = new cjs.Graphics().p("A2i4UMAz+AAoMgIoA53I9MAeg");
	var mask_1_graphics_3 = new cjs.Graphics().p("A2i4UMAz+AAoMgIoA53I9MAeg");
	var mask_1_graphics_4 = new cjs.Graphics().p("A2i4UMAz+AAoMgIoA53I9MAeg");
	var mask_1_graphics_5 = new cjs.Graphics().p("A2i4UMAz+AAoMgIoA53I9MAeg");
	var mask_1_graphics_6 = new cjs.Graphics().p("A2i4UMAz+AAoMgIoA53I9MAeg");
	var mask_1_graphics_7 = new cjs.Graphics().p("A2i4UMAz+AAoMgIoA53I9MAeg");
	var mask_1_graphics_8 = new cjs.Graphics().p("A2i4UMAz+AAoMgIoA53I9MAeg");
	var mask_1_graphics_9 = new cjs.Graphics().p("A2i4UMAz+AAoMgIoA53I9MAeg");
	var mask_1_graphics_10 = new cjs.Graphics().p("A2i4UMAz+AAoMgIoA53I9MAeg");
	var mask_1_graphics_11 = new cjs.Graphics().p("A2i4UMAz+AAoMgIoA53I9MAeg");
	var mask_1_graphics_12 = new cjs.Graphics().p("A2i4UMAz+AAoMgIoA53I9MAeg");
	var mask_1_graphics_13 = new cjs.Graphics().p("A2i4UMAz+AAoMgIoA53I9MAeg");
	var mask_1_graphics_14 = new cjs.Graphics().p("A2i4UMAz+AAoMgIoA53I9MAeg");
	var mask_1_graphics_24 = new cjs.Graphics().p("A0QtqMAw1AA4MgIHAvqI7bALg");
	var mask_1_graphics_25 = new cjs.Graphics().p("A0VtrMAw6AA5MgIHAvqI7eALg");
	var mask_1_graphics_26 = new cjs.Graphics().p("A0jtrMAxJAA5MgIKAvqI7mALg");
	var mask_1_graphics_27 = new cjs.Graphics().p("A05trMAxgAA6MgIOAvqI7zAKg");
	var mask_1_graphics_28 = new cjs.Graphics().p("A1ZtsMAyCAA8MgIUAvqI8GAJg");
	var mask_1_graphics_29 = new cjs.Graphics().p("A2CttMAytAA/MgIbAvpI8eAIg");
	var mask_1_graphics_30 = new cjs.Graphics().p("A20tuMAziABCMgIkAvoI88AGg");
	var mask_1_graphics_31 = new cjs.Graphics().p("A3wtwMA0hABGMgIuAvoI9fAEg");
	var mask_1_graphics_32 = new cjs.Graphics().p("A40txMA1pABKMgI6AvnI+IABg");
	var mask_1_graphics_33 = new cjs.Graphics().p("EgLEAjAMgO+gw0MA27ABPMgJIAvng");
	var mask_1_graphics_34 = new cjs.Graphics().p("EgMCAi+MgPWgw1MA4VABUMgJWAvmg");
	var mask_1_graphics_35 = new cjs.Graphics().p("EgNGAi8MgPygw3MA57ABaMgJoAvlg");
	var mask_1_graphics_36 = new cjs.Graphics().p("EgNkAi5MgQQgw5MA7pABiMgJ6Avjg");
	var mask_1_graphics_37 = new cjs.Graphics().p("EgOAAi2MgQwgw7MA9hABpMgKNAvig");
	var mask_1_graphics_38 = new cjs.Graphics().p("EgOdAizMgRUgw9MA/jABxMgKjAvgg");
	var mask_1_graphics_39 = new cjs.Graphics().p("EgO9AiwMgR5gxAMBBtAB5MgK6Avgg");
	var mask_1_graphics_49 = new cjs.Graphics().p("EgO9AiwMgR5gxAMBBtAB5MgK6Avgg");
	var mask_1_graphics_50 = new cjs.Graphics().p("EgO9AiwMgR6gxBMBBvAB5MgK7Avgg");
	var mask_1_graphics_51 = new cjs.Graphics().p("EgO9AiwMgR6gxFMBBvAB4MgK7Avlg");
	var mask_1_graphics_52 = new cjs.Graphics().p("EgO9AiwMgR6gxNMBBvAB5MgK7Avsg");
	var mask_1_graphics_53 = new cjs.Graphics().p("EgO9AiwMgR6gxXMBBvAB4MgK7Av3g");
	var mask_1_graphics_54 = new cjs.Graphics().p("EgO9AixMgR6gxlMBBvAB3MgK7AwFg");
	var mask_1_graphics_55 = new cjs.Graphics().p("EgO9AixMgR6gx1MBBvAB3MgK7AwUg");
	var mask_1_graphics_56 = new cjs.Graphics().p("EgO9AixMgR6gyIMBBvAB2MgK7Awog");
	var mask_1_graphics_57 = new cjs.Graphics().p("EgO9AiyMgR6gyfMBBvAB1MgK7Aw/g");
	var mask_1_graphics_58 = new cjs.Graphics().p("EgO9AiyMgR6gy4MBBvAB0MgK7AxYg");
	var mask_1_graphics_59 = new cjs.Graphics().p("EgO9AizMgR6gzUMBBvAByMgK7Ax0g");
	var mask_1_graphics_60 = new cjs.Graphics().p("EgO9AizMgR6gzzMBBvABxMgK7AyUg");
	var mask_1_graphics_61 = new cjs.Graphics().p("EgO9Ai0MgR6g0VMBBvABvMgK7Ay2g");
	var mask_1_graphics_62 = new cjs.Graphics().p("EgO9Ai0MgR6g06MBBvABuMgK7Azbg");
	var mask_1_graphics_63 = new cjs.Graphics().p("EgO9Ai1MgR6g1iMBBvABsMgK7A0Eg");
	var mask_1_graphics_64 = new cjs.Graphics().p("EgO9Ai2MgR6g2OMBBvABrMgK7A0vg");
	var mask_1_graphics_65 = new cjs.Graphics().p("EgO9Ai3MgR6g28MBBvABpMgK7A1dg");
	var mask_1_graphics_66 = new cjs.Graphics().p("EgO9Ai4MgR6g3tMBBvABnMgK7A2Og");
	var mask_1_graphics_67 = new cjs.Graphics().p("EgO9Ai4MgR6g4gMBBvABkMgK7A3Dg");
	var mask_1_graphics_68 = new cjs.Graphics().p("EgO9Ai5MgR6g5XMBBvABiMgK7A36g");
	var mask_1_graphics_69 = new cjs.Graphics().p("EgO9Ai7MgR6g6SMBBvABgMgK7A4zg");
	var mask_1_graphics_70 = new cjs.Graphics().p("Egg3gYTMBBvABdMgK7A5xMgk6AAAg");
	var mask_1_graphics_71 = new cjs.Graphics().p("Egg3gZSMBBvABaMgK7A6wMgk6AADg");
	var mask_1_graphics_72 = new cjs.Graphics().p("Egg3gaVMBBvABXMgK7A70Mgk6AAFg");
	var mask_1_graphics_73 = new cjs.Graphics().p("Egg3gbbMBBvABUMgK7A86Mgk6AAIg");
	var mask_1_graphics_74 = new cjs.Graphics().p("Egg3gckMBBvABRMgK7A+DMgk6AALg");
	var mask_1_graphics_75 = new cjs.Graphics().p("Egg3gdwMBBvABOMgK7A/PMgk6AAOg");
	var mask_1_graphics_76 = new cjs.Graphics().p("Egg3ge/MBBvABLMgK7BAeMgk6AARg");
	var mask_1_graphics_77 = new cjs.Graphics().p("Egg3ggQMBBvABHMgK7BBwMgk6AAUg");
	var mask_1_graphics_78 = new cjs.Graphics().p("Egg3ghlMBBvABDMgK7BDFMgk6AAYg");
	var mask_1_graphics_79 = new cjs.Graphics().p("Egg2gi7MBBtAA/MgK6BEeMgk6AAag");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:188.5,y:221.8}).wait(1).to({graphics:mask_1_graphics_1,x:188.5,y:221.8}).wait(1).to({graphics:mask_1_graphics_2,x:188.5,y:221.8}).wait(1).to({graphics:mask_1_graphics_3,x:188.5,y:221.8}).wait(1).to({graphics:mask_1_graphics_4,x:188.5,y:221.8}).wait(1).to({graphics:mask_1_graphics_5,x:188.5,y:221.8}).wait(1).to({graphics:mask_1_graphics_6,x:188.5,y:221.8}).wait(1).to({graphics:mask_1_graphics_7,x:188.5,y:221.8}).wait(1).to({graphics:mask_1_graphics_8,x:188.5,y:221.8}).wait(1).to({graphics:mask_1_graphics_9,x:188.5,y:221.8}).wait(1).to({graphics:mask_1_graphics_10,x:188.5,y:221.8}).wait(1).to({graphics:mask_1_graphics_11,x:188.5,y:221.8}).wait(1).to({graphics:mask_1_graphics_12,x:188.5,y:221.8}).wait(1).to({graphics:mask_1_graphics_13,x:188.5,y:221.8}).wait(1).to({graphics:mask_1_graphics_14,x:188.5,y:221.8}).wait(10).to({graphics:mask_1_graphics_24,x:182.9,y:224.4}).wait(1).to({graphics:mask_1_graphics_25,x:183,y:224.4}).wait(1).to({graphics:mask_1_graphics_26,x:183,y:224.4}).wait(1).to({graphics:mask_1_graphics_27,x:183.2,y:224.4}).wait(1).to({graphics:mask_1_graphics_28,x:183.3,y:224.3}).wait(1).to({graphics:mask_1_graphics_29,x:183.6,y:224.3}).wait(1).to({graphics:mask_1_graphics_30,x:183.8,y:224.3}).wait(1).to({graphics:mask_1_graphics_31,x:184.1,y:224.2}).wait(1).to({graphics:mask_1_graphics_32,x:184.5,y:224.2}).wait(1).to({graphics:mask_1_graphics_33,x:184.9,y:224.2}).wait(1).to({graphics:mask_1_graphics_34,x:185.4,y:224.3}).wait(1).to({graphics:mask_1_graphics_35,x:185.9,y:224.4}).wait(1).to({graphics:mask_1_graphics_36,x:182,y:224.5}).wait(1).to({graphics:mask_1_graphics_37,x:177.2,y:224.7}).wait(1).to({graphics:mask_1_graphics_38,x:172,y:224.8}).wait(1).to({graphics:mask_1_graphics_39,x:166.5,y:224.9}).wait(10).to({graphics:mask_1_graphics_49,x:166.5,y:224.9}).wait(1).to({graphics:mask_1_graphics_50,x:166.6,y:224.9}).wait(1).to({graphics:mask_1_graphics_51,x:166.6,y:224.9}).wait(1).to({graphics:mask_1_graphics_52,x:166.6,y:224.9}).wait(1).to({graphics:mask_1_graphics_53,x:166.6,y:224.9}).wait(1).to({graphics:mask_1_graphics_54,x:166.6,y:224.8}).wait(1).to({graphics:mask_1_graphics_55,x:166.6,y:224.8}).wait(1).to({graphics:mask_1_graphics_56,x:166.6,y:224.8}).wait(1).to({graphics:mask_1_graphics_57,x:166.6,y:224.7}).wait(1).to({graphics:mask_1_graphics_58,x:166.6,y:224.7}).wait(1).to({graphics:mask_1_graphics_59,x:166.7,y:224.6}).wait(1).to({graphics:mask_1_graphics_60,x:166.7,y:224.5}).wait(1).to({graphics:mask_1_graphics_61,x:166.7,y:224.5}).wait(1).to({graphics:mask_1_graphics_62,x:166.7,y:224.4}).wait(1).to({graphics:mask_1_graphics_63,x:166.8,y:224.3}).wait(1).to({graphics:mask_1_graphics_64,x:166.8,y:224.2}).wait(1).to({graphics:mask_1_graphics_65,x:166.8,y:224.1}).wait(1).to({graphics:mask_1_graphics_66,x:166.9,y:224}).wait(1).to({graphics:mask_1_graphics_67,x:166.9,y:223.9}).wait(1).to({graphics:mask_1_graphics_68,x:167,y:223.8}).wait(1).to({graphics:mask_1_graphics_69,x:167,y:223.7}).wait(1).to({graphics:mask_1_graphics_70,x:167,y:223.6}).wait(1).to({graphics:mask_1_graphics_71,x:167.1,y:223.6}).wait(1).to({graphics:mask_1_graphics_72,x:167.1,y:223.6}).wait(1).to({graphics:mask_1_graphics_73,x:167.2,y:223.6}).wait(1).to({graphics:mask_1_graphics_74,x:167.2,y:223.6}).wait(1).to({graphics:mask_1_graphics_75,x:167.3,y:223.5}).wait(1).to({graphics:mask_1_graphics_76,x:167.4,y:223.5}).wait(1).to({graphics:mask_1_graphics_77,x:167.4,y:223.5}).wait(1).to({graphics:mask_1_graphics_78,x:167.5,y:223.5}).wait(1).to({graphics:mask_1_graphics_79,x:167.5,y:223.3}).wait(201));

	// potato
	this.instance_12 = new lib.potato_breakingground();
	this.instance_12.setTransform(192.9,689,1,1,6,0,0,126.9,256.8);

	this.instance_12.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({regY:256.9,x:197.9,y:619},14,cjs.Ease.get(-1)).wait(10).to({regX:126.8,rotation:-3,x:190.8,y:499},15,cjs.Ease.get(-1)).wait(10).to({regY:256.8,rotation:0,y:269},30,cjs.Ease.get(-1)).wait(201));

	// dirt splatter right
	this.instance_13 = new lib.dirt_splatter_right();
	this.instance_13.setTransform(295.8,431.3,1,1,-45,0,0,18.2,9.1);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(64).to({_off:false},0).to({rotation:0,x:325.3,y:427.5},15,cjs.Ease.get(-1)).wait(201));

	// dirt splatter left
	this.instance_14 = new lib.dirt_splatter_left();
	this.instance_14.setTransform(92.1,438.1,1,1,45,0,0,21.7,12.8);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(64).to({_off:false},0).to({rotation:0,x:56.1,y:428.8},15,cjs.Ease.get(-1)).wait(201));

	// ground dirt L
	this.instance_15 = new lib.ground_dirt();
	this.instance_15.setTransform(176.5,435.8,1,1,0,0,180,15.7,4.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({x:159.5,y:426.8},14,cjs.Ease.get(-1)).wait(10).to({x:151.5,y:428.8},0).to({x:66.5,y:427.8},15,cjs.Ease.get(-1)).wait(10).to({x:71.5,y:422.8},30,cjs.Ease.get(-1)).wait(201));

	// ground dirt R
	this.instance_16 = new lib.ground_dirt();
	this.instance_16.setTransform(262.5,434.8,1,1,0,0,0,15.7,4.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({x:295.5,y:427.8},14,cjs.Ease.get(-1)).wait(10).to({x:301.5,y:428.8},0).to({x:316.5,y:427.8},15,cjs.Ease.get(-1)).wait(10).to({x:311.5,y:426.8},0).to({y:423.8},30,cjs.Ease.get(-1)).wait(201));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(44.2,420.3,301.6,39.6);


(lib.newspaper_tree = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"stop":0,"play":1});

	// timeline functions:
	this.frame_0 = function() {
		/* 
		// paper fall ani
		var mcPaperFall:MovieClip = this.createEmptyMovieClip("mcPaperFall", this.getNextHighestDepth());
		var auPaperFall:Sound = new Sound(mcPaperFall);
		auPaperFall.attachSound("paper_fall");
		auPaperFall.setVolume(30);
		
		stop();
		*/
		this.stop();
	}
	this.frame_1 = function() {
		/* play();
		*/
		this.play();
	}
	this.frame_158 = function() {
		/* 
		if (_parent.curMusicState == "on") {
			auPaperFall.start();
		}*/
	}
	this.frame_334 = function() {
		/* 
		if (_parent.curMusicState == "on") {
			auPaperFall.start();
		}*/
	}
	this.frame_426 = function() {
		/* 
		if (_parent.curMusicState == "on") {
			auPaperFall.start();
		}*/
	}
	this.frame_504 = function() {
		/* stop();
		*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(157).call(this.frame_158).wait(176).call(this.frame_334).wait(92).call(this.frame_426).wait(78).call(this.frame_504).wait(1));

	// newspaper_grow
	this.instance = new lib.newspaper_grow();
	this.instance.setTransform(90.6,232,0.999,0.999,-75,0,0,0.3,0.8);

	this.instance_1 = new lib.newspaper();
	this.instance_1.setTransform(90.6,232,0.999,0.999,-75,0,0,0.3,0.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},29).to({state:[{t:this.instance_1}]},124).to({state:[{t:this.instance_1}]},15).to({state:[{t:this.instance_1}]},15).to({state:[{t:this.instance_1}]},20).to({state:[{t:this.instance_1}]},25).wait(277));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(153).to({_off:false},0).to({regX:0.4,regY:1,scaleX:0.92,scaleY:0.87,rotation:0,skewX:30,skewY:48.8,guide:{path:[90.6,232,89.2,239.5,84.4,249.5,79,261,71.2,271,51,297.1,25.4,301.5,25.4,301.5,25.5,301.5]}},15).to({scaleX:0.91,skewX:-60,skewY:-76.6,guide:{path:[25.4,301.6,41.7,328.6,72.9,338.9,98.7,347.3,126.2,342.5,126.2,342.5,126.2,342.5]}},15).to({scaleX:0.91,rotation:360,skewX:75,skewY:92,guide:{path:[126.2,342.5,113.2,375.2,85.1,391.4,45.5,414.5,-26.6,407.5,-26.6,407.5,-26.6,407.5]}},20).to({regX:0.5,regY:0.9,scaleX:0.88,scaleY:0.74,skewX:-60,skewY:-27.9,guide:{path:[-26.5,407.5,0.4,442.5,30.9,459.4,66.6,479.3,112.2,477.5]}},25).wait(277));

	// newspaper_grow
	this.instance_2 = new lib.newspaper_grow();
	this.instance_2.setTransform(248.6,8.7,1,1,-172.2,0,0,0.4,0.8);

	this.instance_3 = new lib.newspaper();
	this.instance_3.setTransform(248.6,8.7,1,1,-172.2,0,0,0.4,0.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},24).to({state:[{t:this.instance_3}]},304).to({state:[{t:this.instance_3}]},15).to({state:[{t:this.instance_3}]},15).to({state:[{t:this.instance_3}]},30).to({state:[{t:this.instance_3}]},45).to({state:[{t:this.instance_3}]},15).wait(57));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(328).to({_off:false},0).to({regX:0.2,scaleX:0.91,rotation:-127.2,guide:{path:[248.6,8.9,242.7,25.2,231.6,43.8,209.4,80.9,183.3,92.5]}},15,cjs.Ease.get(1)).to({regX:0.4,scaleX:0.91,scaleY:0.89,rotation:0,skewX:112.8,skewY:100.1,guide:{path:[183.2,92.5,183.2,92.5,183.2,92.5,198.7,109.6,230.4,116.9,244.4,120.2,257.8,120.2,271.4,120.2,281.2,116.9]}},15,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:607.8,skewX:0,skewY:0,guide:{path:[281.1,116.9,281.2,116.9,281.2,116.8,276.5,130.5,264.4,148.2,250.7,168.3,233.5,183.9,213.2,202.2,192.2,210.4,167.6,219.9,144.2,214.5,144.2,214.5,144.2,214.5]}},30,cjs.Ease.get(1)).to({scaleX:0.92,scaleY:0.92,rotation:157.8,guide:{path:[144.4,214.5,146.7,232.1,170.8,265,195.7,299.2,229.2,328.3,267.5,361.7,302.3,375.1,343.1,390.7,372.2,375.5,372.2,375.5,372.2,375.5]}},45,cjs.Ease.get(1)).to({regY:0.7,scaleX:0.72,scaleY:1,rotation:292.8,guide:{path:[372.2,375.5,370.9,416.6,357.5,442.4,337.5,481.5,292.2,482.5]}},15,cjs.Ease.get(1)).wait(57));

	// newspaper_grow
	this.instance_4 = new lib.newspaper_grow();
	this.instance_4.setTransform(296.5,235.6,0.999,0.999,-90,0,0,0.3,0.9);

	this.instance_5 = new lib.newspaper();
	this.instance_5.setTransform(296.5,235.6,0.999,0.999,-90,0,0,0.3,0.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},44).to({state:[{t:this.instance_5}]},374).to({state:[{t:this.instance_5}]},30).to({state:[{t:this.instance_5}]},15).to({state:[{t:this.instance_5}]},30).to({state:[{t:this.instance_5}]},11).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(418).to({_off:false},0).to({scaleX:0.88,rotation:315,guide:{path:[296.4,235.5,295.3,248.3,291.1,262.4,285.8,279.9,277.2,293.5,254.1,329.7,214.2,327.5]}},30,cjs.Ease.get(1)).to({regX:0.4,scaleX:0.83,rotation:195,guide:{path:[214.2,327.5,214.2,327.5,214.2,327.5,210.2,339.1,218.8,349.6,226.5,359,242.8,365.9,258.2,372.3,276.2,374.5,294.7,376.7,309.2,373.5,309.2,373.5,309.2,373.5]}},15,cjs.Ease.get(1)).to({regX:0.2,scaleX:0.93,scaleY:0.93,rotation:-405,guide:{path:[309.2,373.5,303,384.7,286.1,395.6,268.8,406.8,246.1,414.1,221.5,421.9,196.7,422.9,169,424.1,145.6,416.5]}},30,cjs.Ease.get(1)).to({regX:0.3,regY:1,scaleX:0.88,scaleY:0.86,rotation:-360,skewX:-75,skewY:-55.4,guide:{path:[145.4,416.6,145.3,416.5,145.2,416.5,143.7,465.9,186.2,477.5]}},11,cjs.Ease.get(1)).wait(1));

	// newspaper_grow
	this.instance_6 = new lib.newspaper_grow();
	this.instance_6.setTransform(207.5,367.2,0.999,0.999,-155,0,0,0.3,0.8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(98).to({_off:false},0).wait(407));

	// newspaper_grow
	this.instance_7 = new lib.newspaper_grow();
	this.instance_7.setTransform(153,378.9,0.999,0.999,-170,0,0,0.3,0.8);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(103).to({_off:false},0).wait(402));

	// newspaper_grow
	this.instance_8 = new lib.newspaper_grow();
	this.instance_8.setTransform(98.1,370.8,0.999,0.999,15,0,0,0.4,0.8);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(4).to({_off:false},0).wait(501));

	// newspaper_grow
	this.instance_9 = new lib.newspaper_grow();
	this.instance_9.setTransform(77.8,307.8,0.999,0.999,0,0,0,0.3,0.9);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(49).to({_off:false},0).wait(456));

	// newspaper_grow
	this.instance_10 = new lib.newspaper_grow();
	this.instance_10.setTransform(265.8,275.3,0.999,0.999,-45,0,0,0.4,0.9);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(79).to({_off:false},0).wait(426));

	// newspaper_grow
	this.instance_11 = new lib.newspaper_grow();
	this.instance_11.setTransform(22.5,188.1,1,1,-97.2,0,0,0.3,0.8);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(24).to({_off:false},0).wait(481));

	// newspaper_grow
	this.instance_12 = new lib.newspaper_grow();
	this.instance_12.setTransform(84.8,168,1,1,-52.2,0,0,0.3,0.8);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(44).to({_off:false},0).wait(461));

	// newspaper_grow
	this.instance_13 = new lib.newspaper_grow();
	this.instance_13.setTransform(160.3,172.7,1,1,-127.2,0,0,0.2,0.8);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(73).to({_off:false},0).wait(432));

	// newspaper_grow
	this.instance_14 = new lib.newspaper_grow();
	this.instance_14.setTransform(214.3,80.1,1,1,172.8,0,0,0.2,0.8);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(103).to({_off:false},0).wait(402));

	// newspaper_grow
	this.instance_15 = new lib.newspaper_grow();
	this.instance_15.setTransform(253.3,141.1,1,1,67.8,0,0,0.2,0.8);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(128).to({_off:false},0).wait(377));

	// newspaper_grow
	this.instance_16 = new lib.newspaper_grow();
	this.instance_16.setTransform(296.7,120.1,1,1,-7.2,0,0,0.3,0.8);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(49).to({_off:false},0).wait(456));

	// newspaper_grow
	this.instance_17 = new lib.newspaper_grow();
	this.instance_17.setTransform(292.4,52.2,1,1,-127.2,0,0,0.4,0.8);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(4).to({_off:false},0).wait(501));

	// newspaper_grow
	this.instance_18 = new lib.newspaper_grow();
	this.instance_18.setTransform(192.2,29,1,1,0,0,0,0.4,0.8);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(79).to({_off:false},0).wait(426));

	// newspaper_grow
	this.instance_19 = new lib.newspaper_grow();
	this.instance_19.setTransform(133.1,14.3,1,1,135,0,0,0.4,0.8);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(4).to({_off:false},0).wait(501));

	// tree
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#505A42").s().p("AA5AuQAGgSgRgQQgOgMgZgGIgogPQgWgIgFgQQADgNAHgMIAFgIIgFAIQgGAMgCAOQAEALAWAJIAoANQAYAHAQANQASARgHAVQgHAWgJAKQAJgKAFgXg");
	this.shape.setTransform(278.6,428.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#505A42").s().p("AAFgFQgggwgmgZQAoAWAgAxQAiAuAZApQgdgngggug");
	this.shape_1.setTransform(319.6,461.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#505A42").s().p("AgDADIgjhKQARAhAVAoQARArAWAbQgYgagSgrg");
	this.shape_2.setTransform(300.2,458.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#505A42").s().p("AAAABQgWgcgLgdQANAbAUAdQAUAeAOAbQgPgZgTgfg");
	this.shape_3.setTransform(310.9,462.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#505A42").s().p("AgNAPQgpgjgDgzQAGAxAnAiQAkAlAiAXQgkgUgjglg");
	this.shape_4.setTransform(291.5,471.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#505A42").s().p("AgHARQgXgNgTgWIgNgVIAOAUQATAVAYAMQAkARAgAIQghgFglgRg");
	this.shape_5.setTransform(278.8,471.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#505A42").s().p("AgjBZQAZgoAhgmQAegmAAg3QAAgQgDgRIgBgLIACALQAEARAAAQQACA4gfAoQgiAngaAmQgXAiADACQgEgCAXgkgAAxh+IAAAAIAAAAg");
	this.shape_6.setTransform(254.4,485.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#505A42").s().p("AAIAmQAHgUgGgSQgHgggPgSQAQASAHAfQAHAUgIATQgEAKgEADQAEgEADgJg");
	this.shape_7.setTransform(242.8,437.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#505A42").s().p("AAOAHIAngsQAVgZAGgQQAHgSgEgRIgEgJIgCgCIACACIAEAIQAGASgHATQgGASgUAaIgnAsQg7A8grA3QAog7A7g8g");
	this.shape_8.setTransform(226.6,470.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#505A42").s().p("ABeBuQgIgOgLgOQgigugrgdQgvgdgdg0QgPgZgEgUQAYBLBJAtQAsAeAhAxQALAQAGAOIAEAKIgEgKg");
	this.shape_9.setTransform(264,439);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#505A42").s().p("AAlBHQAGgwgKgrQgLgwghgZQgLgHgLgFIgJgDIAJACQAMAEALAHQAjAXAMAyQAKAtgIAwQgEAZgGANQAEgOAEgYg");
	this.shape_10.setTransform(290,346.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#505A42").s().p("AAvBeQACAAAAgJQAAgKgDgOQgJgmgYgdQgggxgdgnQAfAkAgAyQAZAdAHAoQADAOgBALQAAAJgCAAIAAgBg");
	this.shape_11.setTransform(284.6,317.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#505A42").s().p("AANgDQgOg1gYgkQAZAiAQA1QARA0gKAuQAIgugSgyg");
	this.shape_12.setTransform(266.8,340.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#505A42").s().p("AA3AtQgHgngagaQgkgtgrgMQAtAJAkAtQAbAbAFAoQADAVgDANQACgNgDgUg");
	this.shape_13.setTransform(252.5,331.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#505A42").s().p("AATBIQACABADgGQADgHABgKQACgcgSgZQgSgpgWgbQAYAZASAqQASAagDAcQgCALgDAGQgCAFgCAAIgBAAg");
	this.shape_14.setTransform(252.5,338.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#505A42").s().p("AgbAwQAFgdALgXQASgnAYgZQgWAagSAnQgLAWgGAdIgEAVIADgVg");
	this.shape_15.setTransform(227.8,415.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#505A42").s().p("AgCgHQAHgPAOgTIgTAjQgRAagFAcQADgcARgbgAAWgvIABAAIgBABIAAgBg");
	this.shape_16.setTransform(233.2,420.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#505A42").s().p("AAKAKQAWgLAKgZQAFgMAAgJQABAJgFANQgKAZgWAMQgeAWgbAOQAagPAegXg");
	this.shape_17.setTransform(195.1,462.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#505A42").s().p("AgFgHQAegpAkgTQgiAWgeAoIg5BJQAXgkAggng");
	this.shape_18.setTransform(192,451.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#505A42").s().p("AgFAEQgRgjgIghQAKAgARAjQAQAjASAbQgUgagQgjg");
	this.shape_19.setTransform(284.3,458.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#505A42").s().p("AAAAAIAVgkIgVAkIgUAlIAUglg");
	this.shape_20.setTransform(287.5,406.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#505A42").s().p("AAWAuIAAgOQAAgXgKgPQgPgbgUgPQAVANAQAbQAKASAAAWIgBAOIAAAEIgBgEg");
	this.shape_21.setTransform(289.3,421.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#505A42").s().p("AAAABQgNgmgIghIAVBGIAWBHIgWhGg");
	this.shape_22.setTransform(273.4,458.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#505A42").s().p("AgLgCQAXhVAOhGQgKBIgXBVQgYBUAMBKQgQhKAYhWg");
	this.shape_23.setTransform(264,469);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#505A42").s().p("AAABIQAMghgCgkQgGg3AKgtQgHAtAFA3QADAlgPAhQgGAQgHAJQAGgKAHgQg");
	this.shape_24.setTransform(247.9,457.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#505A42").s().p("AAMAMQAfgoAbg0IAWgqQgZBGg0BEQgfAqgpAlIgiAcQA0grAzhEg");
	this.shape_25.setTransform(202.1,475.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#505A42").s().p("AgDgDQAvhIAvgzQgrA3gwBHIhaB/QAlg9AyhFg");
	this.shape_26.setTransform(221,464.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#505A42").s().p("AgBACIgUgeIAVAdIAWAcIgXgbg");
	this.shape_27.setTransform(199.4,270.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#505A42").s().p("AADgCQgKgVgOgLQAPALAKAUQAMATAGATQgHgSgMgTg");
	this.shape_28.setTransform(263.4,324.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#505A42").s().p("AAEgDQAjgSAagWIgKAIQgYAWgaANQgnATgeAZQAdgcAngTg");
	this.shape_29.setTransform(262.2,417.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#505A42").s().p("AgMgGQANgmAXgkIATgdIgRAeQgWAmgNAlQgXA7gKA3QAHg4AXg8g");
	this.shape_30.setTransform(248.8,421.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#505A42").s().p("AgFgFQATgfAXgRQgWATgTAeQgUAdgMAdQAKgeAVgdg");
	this.shape_31.setTransform(247.7,407.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#505A42").s().p("AgRAyQAcgXAWgbQAKgKgEgCIgQgCQgUgFgEgPQgHgTABgOQAAAOAHASQAFAPASACQAMgBAFAFQAGAGgLAJQgWAdgeAWIgYAQIAYgSg");
	this.shape_32.setTransform(241.2,398.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#505A42").s().p("AAJAAQAWgYAJgfIAEgRQAAAIgDAKQgIAhgVAXQgdAogaAfg");
	this.shape_33.setTransform(257.7,346.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#505A42").s().p("AAAAAIgBg4IACA4IABA6IgCg6g");
	this.shape_34.setTransform(267.7,358);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#505A42").s().p("AgEBSQAJgqAFgmQADglgBgrIgDgjIAEAjQAEAqgEAmQgGAogKAoIgLAgIAKggg");
	this.shape_35.setTransform(270,369.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#505A42").s().p("AACABIAShBQgGAfgKAiQgIAmgPAaQANgcAIgkg");
	this.shape_36.setTransform(292.7,384.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#505A42").s().p("AAHABIgDhiQAEAtABA1QACA6gUAnQASgpgCg4g");
	this.shape_37.setTransform(286.2,379.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#505A42").s().p("AAJgBQgJgwgPggQARAgAKAuQAIAugHAnQAEgngIgsg");
	this.shape_38.setTransform(275.3,341.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#505A42").s().p("AAUgLQgTg5gjgYQAJAFANANQAXAaAMAkQAUA4gMAxQAJgxgUg3g");
	this.shape_39.setTransform(208.5,171.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#505A42").s().p("AAFALQAHgpAAgkQACAkgHAqQgFAbgMAZIgCADQAMgYAFggg");
	this.shape_40.setTransform(212.7,186.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#505A42").s().p("AALAKQAYgTALgfQAGgPAAgMQABAMgGAPQgKAhgYATQghAhgfAXQAdgaAhggg");
	this.shape_41.setTransform(198.6,196.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#505A42").s().p("AAAAHQgegJgZgKIA3AQQAUAJAUgDQARgCgCgEQADAEgSADIgNACQgOAAgNgGg");
	this.shape_42.setTransform(70.2,257.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#505A42").s().p("AgBADQgagagXgWQAYAUAaAaQAZAcAaARQgbgPgZgcg");
	this.shape_43.setTransform(103.8,268.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#505A42").s().p("AAOgLQgigwglgdQAnAaAjAwQAlAwAEA3QgHg2glgug");
	this.shape_44.setTransform(205.5,292.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#505A42").s().p("AgBAGQgegQgYgRIA3AfQAdARAbAHQgcgFgdgRg");
	this.shape_45.setTransform(222,273.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#505A42").s().p("AgBAEIgxgvQAXAVAbAYIAzAqIg0gog");
	this.shape_46.setTransform(228.8,306.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#505A42").s().p("AgJAgQghgcgjgkIgbgdQALAKARARQAlAjAgAcQAkAlAqgIQAPgCALgIQAJgGgCgCQADACgKAHQgKAIgPADQgJACgJAAQgiAAgdgeg");
	this.shape_47.setTransform(223.2,287.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#505A42").s().p("AAAAAIgRgfIARAfIASAgIgSggg");
	this.shape_48.setTransform(191.3,267.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#505A42").s().p("AgEADQgIgVAAgTQACATAGAUQAGAWALAOQgMgNgFgWg");
	this.shape_49.setTransform(181.8,261.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#505A42").s().p("AAAgDQArABAjACQgjAAgrAAQgqgBgjAGQAigJArABg");
	this.shape_50.setTransform(176.5,274.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#505A42").s().p("AAFAQQBPgxA/grQg8AwhPAyQhPA1hLACQBKgIBNg1g");
	this.shape_51.setTransform(152.4,296.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#505A42").s().p("AgBAAQAUgsAVgjIgoBPIgmBQQAQglAVgrg");
	this.shape_52.setTransform(185.2,225.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#505A42").s().p("AgFAAQgEgyAFgqQgDAqAFAyQADAzAHAqQgIgogFg1g");
	this.shape_53.setTransform(179.7,247.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#505A42").s().p("AAZC7IgTgpQgehIgFhIQgChHAYhLIANgrQAHgPgCAAQACAAgGAPIgLAsQgVBMACBFQAEBFAcBKIARAqQAGAPgDABQADgBgHgPg");
	this.shape_54.setTransform(191.4,247.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#505A42").s().p("AgtAWQgRgWABgMQADgOAXgIQAUgFAeACQAeADARAKQgRgIgegBQgdgBgUAFQgSACgDAQQgCAPAQANQAKALASAEQAOADAPgEQAPgEADgJQAEgLgNgKQgRgLgNAIQgIAEgDADQADgEAHgEQAOgJASAKQAPAFgDASQgEAVgSAAIgOABQgbAAgUgRg");
	this.shape_55.setTransform(188.1,281.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#505A42").s().p("ABxAOQg6gGg4AHQg6AHg5gWQgcgJgQgMQBDApBcgLQBagJBIAWQgSgFgegDg");
	this.shape_56.setTransform(146.2,226.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#505A42").s().p("AAAAAIgvgYIAvAYQAbAMAVANIgwgZg");
	this.shape_57.setTransform(112,290.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#505A42").s().p("AAvAUQgfgNgggEQgRgCgUgLQgOgJAEgFQgBADAMAIQAWANAOAAQAgADAgAPQAKAEAHAGIgSgIgAg2gZIgIAAIAIgCQAJAAAHAGQgGgEgKAAg");
	this.shape_58.setTransform(89.3,262.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#505A42").s().p("ABbBdQgVgBgVglIgSghQgLgTgLgIQgsgig8gjQgtgaAAgBIAuAYQA8AfAuAjQAOAMAbAyQATAlAUACQAfACASAKQgSgIgggBgAiMhlIAAAAIAAAAg");
	this.shape_59.setTransform(106.5,277.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#505A42").s().p("ABbA9Qg2gIgqggQgzgTgsggQglgdAEgEQgCAEAkAbQAsAeA0ASQAqAgA1AKQAaAFARAAIgOABQgNAAgRgDg");
	this.shape_60.setTransform(124.7,223.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#505A42").s().p("AAGAAQACgxgEg4IgDguIAGAtQAFA5gDAxQgHBVgLBDQAJhEAGhUg");
	this.shape_61.setTransform(169.1,83.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#505A42").s().p("AgRBqQgFgMgEgNQgKgsAPgqQAVhBAfgrQgdAtgUBBQgPAoAJArQAFAVAHANIgFgIg");
	this.shape_62.setTransform(170.9,102);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#505A42").s().p("ABACHQhAgPgug9Qgvg6gRhLQgGgZgCgWIAAgRIABAQQADAWAHAYQATBMAuA1QAqA8BBASQAVAGASABQAKAAAFgBQADABgRABIgEAAQgSAAgTgEg");
	this.shape_63.setTransform(172.5,133.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#505A42").s().p("ACGA3Qgog9hOAcQg6AKhBhAQgbgagNgVQAAgCALAOQAPAUAQAOQA4AzBBgEQA4gEATACQAoAHAIAiIAJAbQgGgOgIgLg");
	this.shape_64.setTransform(179.7,146.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#505A42").s().p("AhRBPQAIgTAggPQAlgSALgPQAqgjAdg5IAQgiIAGgMIgFAMIgOAkQgcA6gqAkQgOARglARQgfAOgHAQIgVAvQAIgSAKgeg");
	this.shape_65.setTransform(216.6,137.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#505A42").s().p("AA4CtQAEgdgKgeQgIgcgegwQgqhBgLgXQgQgXgBggQAAgdAMgYQALgZARgIQASgJAQARQAMAkgUATQgGAGgGADIgDABIADgBQAFgEAGgGQASgUgLgfQgOgOgQAJQgPAHgKAXQgKAXABAbQABAdAPAWQAGAMAtBLQAeAxAHAeQAIAggEAdQgCAOgEAIQADgIABgOg");
	this.shape_66.setTransform(203.3,166.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#505A42").s().p("ABOBAIg4gJQghgEgaAAIg8gGQgjgDgVABIgyAKQgOAFgJgFQgMgGAGgQQALgoAFggQAEgQAAgJIgCAZQgEAigJAnQgEAPAGAAIAVgCQAkgJAOgCQAYgDAhADIA9AFQAaAAAgAFIA4AKQBAALAdgOQAdgSAVgcIAKgPIAEgFIgEAGIgJAPQgTAegeAUQgUALgiAAQgSAAgXgDg");
	this.shape_67.setTransform(228.9,199);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#505A42").s().p("AgCgBQANggAQgWQgPAYgMAfIgaA4QAKgbAOgeg");
	this.shape_68.setTransform(304.9,294.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#505A42").s().p("AAFADQAAhLAXg5QgUA5ABBLQAAAygRAsQgJAWgKALQAhgxgBhOg");
	this.shape_69.setTransform(297.8,312.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#505A42").s().p("AAAAFIgigXIAiAVIAiAQIgigOg");
	this.shape_70.setTransform(213.9,273.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#505A42").s().p("ADeBwIgHgJQANAPANAIQAAABgBAAQAAAAAAABQgBAAAAAAQAAAAgBAAQgFAAgLgQgAC0A7Qg1g4hDgGQAlAAANADQArAFAeA0IAOAWIgRgUgAgpgxIgNgbQgIgOgKgFQgdgPg5gHQgzgEgfgGQAgADAyABQA7AFAfAPQAQAJATAoQARAlASAHQALAEARACQgPABgPADQgYgKgRgngAA4gDIgagBQAQgBAOACIgEAAgAAegEIAAAAg");
	this.shape_71.setTransform(253.3,293.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#505A42").s().p("AAQAKQAJgMABgRQgBgUgVAHQgQAEgIATQgIARAHAMQAIAHAIgFIAFgEIgFAEQgIAGgKgHQgHgNAHgSQAJgUAQgGQAZgIAAAYQABAKgEAJQgDAIgEAEQgJARgDALQADgMAIgRg");
	this.shape_72.setTransform(177,227.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#505A42").s().p("AiDCqQADgaAJgcQAdhXBIgvQBFghAwhMQANgVAMgaIAJgPIgHAQQgLAbgNAWQguBQhGAiQhGAtggBSQgKAcgEAZQgDAVADgBIAAAAQgDAAACgUg");
	this.shape_73.setTransform(193.5,210.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#505A42").s().p("AAAAFQgxAAgvgHQgpgIABgEQAAAEAoAFQAvAFAxAAQAwAKAxACQAZAAAPgBQgPADgZAAIgJABQgtAAgrgKg");
	this.shape_74.setTransform(142.5,223.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#505A42").s().p("AA6AtQgPgjgcgRQgsgbgjgaIBRAyQAcASAPAkIAFARIgHgQg");
	this.shape_75.setTransform(168.7,227.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#505A42").s().p("ABsCwQgOgVgGgdQgDgNgDgZIgEgrQgGg3gVgkQgrhMhDgrQgWgNgVgIQgKgEgGAAQAFAAALACQAWAHAXAMQBGAoAsBOQAWAmAFA4IADAsQACAZACANQAFAcANAWIAKAQQgEgEgHgLg");
	this.shape_76.setTransform(166.4,240.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#505A42").s().p("AiWESIgQgRQgZghgJgxQgThuBhirIAthXQAfg1AagPQAngYBJAMQBAAOAwgEQgxAIhAgLQhFgJgmAZQgYAOgcA0IgsBWQhgCoANBoQAHAvAYAiIAOASIAEAFIgEgEg");
	this.shape_77.setTransform(201.5,234.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#505A42").s().p("AibA/QABADArgcQBCgpAngXQAzgbA+gHQAegDATABQgTAAgeAFQg9AKgyAbIhpA9QgnAXgGAAIgBgBg");
	this.shape_78.setTransform(161.7,288.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#505A42").s().p("Aj3B0QgQgHgLgTQgOgaAKgcQAYgWAeAcIAXAbQAPASAIAHQAuAfBTg8IB5haQBAgvApgRQAngSAmgGQATgDAKAAIgcAFQgmAIgmAUQgmAThAAxIh3BcQhaBAg0gmQgJgIgPgTIgWgaQgZgagSARQgKAVANAZQAKAVAOAGQALAEAJgGIAFgEIABAAIgBABIgFAEQgGAEgHAAIgIgBg");
	this.shape_79.setTransform(148,287);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#505A42").s().p("AjLBKQAUgOA+g2QA+g0ApgeQA0gnBBgHQA4gGAtAVQA3AUAgAUQABADgYgMQgigSgggJQhzgfhgBFQglAahBA1Qg8AxgaARQgyAhgjALQAigNAxglg");
	this.shape_80.setTransform(165.9,280.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#505A42").s().p("AglBdIAvhWQAQg0APgsQAOgpACABQgDgBgoCLQgTAmgeAwQgWAiABABQgBgBAUgkg");
	this.shape_81.setTransform(180.9,300.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#505A42").s().p("Ah0BBIASgxQAchJA0gHQA2gEAvAnQAOAMAMAPIAIAIIgJgHQgMgOgOgLQgwgkgzAEQg0APgbA7QgGAOgIAYQgDALgCAAIgBAAg");
	this.shape_82.setTransform(195.9,295.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#505A42").s().p("AEgEMIgKgZQgSgpghggQgRgSgegSQgOgJgsgXQhVgugrgrQgtgng5hZIgpg8QgVgdgUgPQgigfglgPQgSgIgLgCQALABATAHQAmAMAkAeQAUAPAYAdQAOASAcAoQA8BZAoAjQApAoBVAxQBQAuAZAdQAhAiAQArIAIAZIADAJIgDgIg");
	this.shape_83.setTransform(226.3,309.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#505A42").s().p("ACnCIQgSgNAAgRQACgNAIgFIAGgCIgGADQgHAFgCAMQABAOASAMQATANANgRQAJgXgLgfQgMgigbALQgJAEgPALIgbAWQgjAZgggPQgtggg0hAIgmgvQgUgZgQgNQgbgcgegSIgYgMIAZAKQAfAQAdAbQAQANAVAYIAnAvQA0A+AsAcQAZAOAfgXIAbgUQAQgMAMgEQAjgKAMAnQAGAPgBATQAAAQgFALQgKALgLAAQgIAAgJgGg");
	this.shape_84.setTransform(221,289.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#505A42").s().p("AFLFhIgYgVQgogmgcg5QgJgPgCgaIAAguQgBgbgFgQQgHgWgUgMQgYgUg8gGQhEgHgfgRQhTglhThJQgvgphJhPQglgxgPg8IgHghQgCgMgCACQACgCADAMIAJAgQASA7AlAsQBPBOArAkQBTBFBRAkQATALAbAGIAwAHQA+AHAdAYQAkAbAAA+IgBAvQAAAZAIAMQAZA3AmAqIAWAWQAIAHgBABQABgBgIgGg");
	this.shape_85.setTransform(224,283.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#505A42").s().p("ACAGiQgKgXgGgaQgUhZAdhjIAjgxQASgdgDgbQgDgWgbgeQglgkgLgTQgPgdgBg3QgBg5gLgVQgehMg7g2QgpgmgUgPQgjgZgZgCQgdAEARAnQANAfAcAdQAUAVAaAiIApA2QAjAmADACQARANgMgnQgOgygggkQgagdgegNIAAgFQAhANAcAbQAiAkATA1QAGASgBAOQgBAAAAABQAAAAAAABQAAAAAAABQAAABAAAAIACAEQABAGgNAFIgOgFQgQgJgeghIgrg1QgagggVgUQgggkgOgdQgQgSAIggQAJghAbAAQAmADAmAbIA/A2QA/A7AgBTQAMAeABA6QABA1ALATQAGANANAPIAYAYQAdAhAFAhQABAkgWAhIgTAYQgMAOgFAIQgfBZAQBaQAEAbAIAXIAFANgAhKkSQgOgNAAgOQACALANAPIAKAKg");
	this.shape_86.setTransform(271.9,341.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#505A42").s().p("Ag8BzQAKgOAUgBQAIAAAaAFQAYADANgCQAVgEAMgTQAJgfgFg7QgEg6AIgWQAIgbAOgUQAGgKAFgEIgLAPQgMAUgGAbQgHAUAFA6QAGA6gKAlQgQAVgWAFQgPADgXgEIgigGQgSAAgKAMQggAagYAFQAXgHAfgbg");
	this.shape_87.setTransform(244.9,463.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#505A42").s().p("ACGC1QgUgMgVgTQhAg5glhSQgkhMg6hFIgignIgNgOIAOANQAUATAQASQA8BCAlBOQAlBRA8A7QAUAUATAMQAPALAAgCIAAAAQgDAAgMgHgACVC8IAAAAIAAAAg");
	this.shape_88.setTransform(298.2,461.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#505A42").s().p("ABpBwQgNgGgMgPQgGgJgOgYQgcgwgZgMQg6gjg8gzIgjgeIgOgKIAyAlQBAAvA4AjQAdAOAZAxIAUAhQAKAQAMAFQAeAYAYgEIgKABQgUAAgZgRg");
	this.shape_89.setTransform(312.1,458.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#505A42").s().p("ABGAIQAFgXgIgFQgFgDgSAFQgUAFgLgCQgRgCgMgUQgKgTgQgDQgPgCgOALQgTAPAlAcQAbARATAGQgTgFgcgPQgRgMgFgHQgNgRAPgPQAOgNASADQAUADAKAUQAIARAQAEQAKABAXgDQATgDAGAFQAJAGgGAXQACAlAIAWQgJgVgEgmg");
	this.shape_90.setTransform(274.3,433.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#505A42").s().p("ABOCfQg5gzgYgbQgcgUgNgnQgOgoAMgmQAHg0gBgbQgCgsgVgKQgXgBgWAbIgQAZQgLAOgNgHQgMgrAUgkQAEgJAJgLIgMAWQgQAlAKAiQAIADAIgKIAQgXQAXgjAcADQAfAQACAwQABAQgDAZIgEAoQgLAnALAhQALAgAZAXIBQBRQAvAtAZAgQgbgegwgqg");
	this.shape_91.setTransform(292,438);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#505A42").s().p("AADAAQAHgeABgbQABAbgIAfQgFAfgJAZIANg5g");
	this.shape_92.setTransform(267.5,467.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#505A42").s().p("AAlBFQgJgMgcgzQgYgsgXgbQgog4AKArQACAJAWA/QAQAlAJAZIgcg9QgSgngIgfQgMgiAVAIQAUAHALAXQAYAcAXAtQAcA4AGAJQAXAlAZAAIgDAAQgZAAgWgjg");
	this.shape_93.setTransform(280.6,460.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#505A42").s().p("ACgJqQgSgPgZgrIgxhTQhDiHhnADQghgIgagjQgIgMgfg5QgTgxAlgnQAagcApgNQBCgpAZhEQAVg4gChVIgEhKIgFhHQgFhRANgpQANhhgJhPQgDgcgGgTQgFgPgCABQACgCAGAQQAHASADAcQAPBRgLBhIgEB7QAABOAMA6QAPBQgfBOQgiBShEAqQhgAmAWA3QAuBgAjAEQA+AAAxAyQApAnAZA7IAtBWQAXArAQAPIAtAmQgQgNgfgVg");
	this.shape_94.setTransform(279.4,406.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#505A42").s().p("AgXE5QASgvAFgZQAKgtgFgqQgDhLADgaIAFgcQAEgPAUgJIAGAJQAIgFAEgKQAThqgWhcQgRhGgggaQAQADAIAIQAOAMAIAZIAOAsQANBCACAiQAEA7gOAwQgGAQgLAJIgGAEIgMgEQABgBAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAIgEgGQACAGgEAKQgHAQABAGQgDAaACBIQAHBFgpBeQgqBTgIA7QAFg8AnhVgAgJksQgPgDgEgKQAPAEANAKIgJgBgAgkk7QAChAgUguQgGgPgIgKQgEgGgDgCQADABAFAHQAIAKAHAPQAXAugBA+IACAEIgIgCg");
	this.shape_95.setTransform(290.5,362.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#505A42").s().p("AhLGhQAsg5gThMQgBgXAJgaQAFgOAPgiQAbg/gCgpQACgfgKgaQgKgUgXgYIgqgtQgZgdgOgdQgOhGAmhEQAVglA3g4QA6hBAOgKQAdgYALgEQANgJALAPQAKANgEANQgIAugWAgQgWAfgYAAQgQgRAJgQIAHgKIACgBIgIALQgIASAPALQAUAAAUggQAUggAFgpQAEgug4A1QgKAJg8BEQgxA0gWApQgiA9ANA5QAJAWAYAbIAqAuQAZAcAIAWQAOAfgDAiQABAxgeBAQgRAjgEAKQgJAZAAATQAJApgLApQgKAhgTAUQgUAZgKAPQAJgQASgag");
	this.shape_96.setTransform(262.2,442.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#505A42").s().p("Ai9GJQAGABBYhhIDVj0QAYgtAFgrQAIg2gZgbQgvgyAmhoQAdhWAogkQglAngZBWQgOAugBAZQgBAsAbAbQAdAigGA6QgHAtgaAzQh/COhdBiQhYBagJAAIgBAAg");
	this.shape_97.setTransform(224.2,447);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#505A42").s().p("Ag7DwQgDgKAEgIIAHgOIA4h3QAfg9AIhAQAGg6gOgzQgGgrAQgfQAFgJAGgIIAEgFIgDAFQgGAIgEAJQgPAgAIApIAJAzQAGAigDAbQgMBFgbA7IgcA/IglBGIgDAGQAIADALgFQAPgKASgXQAhgvASgjQgQAjghAzQgRAZgPAKQgIAFgIAAQgFAAgGgCg");
	this.shape_98.setTransform(260.7,373.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#505A42").s().p("AhDBhQgFgUAEgdQAMhYgCAAQADAAgIBZQgFBSAigVQAigSAbhHQAVg0AMg8IAEgYQgCACgEAAQgIAAgBAEQgNAGgMAaQgWAyADAjQgFgjAUg1QANgcANgHQAIgFACgBQAHgBAIAGIgEAbQgMBAgVAyQgcBKglATQgIAEgHAAQgQAAgFgZg");
	this.shape_99.setTransform(249.1,381);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#505A42").s().p("AgCgFQAggaAdgTIg8AwQgiAZgYAcQAWgeAjgag");
	this.shape_100.setTransform(208.6,457.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#505A42").s().p("AiMCFQAMgJAWgUIApgkQA1gsAvgPQAVgJAkgIIA2gQQA7gUAFgpQgMgngBggQgBgcAGABQgGABACAZQADAgAOAoQgHAvg7AXIg3APQgkAKgUAKQgtAOg2AqIgoAiQgXATgOAJQguAggeAOQAegRAsgig");
	this.shape_101.setTransform(203.7,447.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#505A42").s().p("AkFChQgCAEAagFQAegGAhgPQBmgwBBhoQAoglBFgTIAzgNQAbgHAQgJQAggPAUgcIALgRIADgFIgDAFIgKASQgTAeggARQgQAKgbAJIgzAPQhEAWgkAhQhCBphqArQgjAOgeAEIgSACQgIAAACgDg");
	this.shape_102.setTransform(194.6,452.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#505A42").s().p("AhsDxQAYgbAvhKQA1hVAggpQARgTApgeQAlgbAOgTQASgaADgjQACgfgMgaQgQgsACgsIADgYIABgIIgBAIIgBAYQAAAsARApQAOAagBAjQgCAngUAdQgPAWgmAbQgoAcgPAUQgbAig6BYQgwBIgbAbQgxAwggAbIBNhPg");
	this.shape_103.setTransform(215.8,454.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#505A42").s().p("AjiLPIALgEQATgJAPgTQAQgRATgyQAbhHANgZQAEgKAbgpQAUgeAHgYQAIghgJgeQgKgigcgQQgmgVAHg5QAGgwAbggQAfgyBLhLQCJg+AnitQAPg+AChSQACgegChiQgGhegjhRIgVgtQgGgMAAgDQAAADAGALIAYArQAnBRALBgQALCDgTCTQgFBOg6BHQgrA0hNA0QhKBKgcAsQg8BdAzAdQAfATANArQALAqgMAjQgKAcgVAfIghAwQgLAVgfBHQgWAxgRARQgSATgTAHIgLADIgDABIADgBg");
	this.shape_104.setTransform(251.7,401.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#505A42").s().p("AA/D4QAQgoAlgVQAdgFAMgbQAMgZgEglQgEgjgPgmQgRgkgXgbQhShlhthJQgggVgjgTIgYgOIAZAMQAkARAgATQBxBDBVBoQA2BLAGBDQAHAngUAfQgSAcgaAFQglATgQAlIgIAXQACgNAEgLg");
	this.shape_105.setTransform(247.4,331.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#505A42").s().p("AiaGOQgJgOgHgUQgUg/AZhNQAKgtAkgnQAWgYA3gpQA4gsAagbQAugsAXg1QA4hygBh9QAAhQghAmQgLAMgmBCQgoBNgEAzQgBAVAIAPIAFAIIABADIgBgDIgGgHQgJgPAAgWQACg1AlhQQAPggAfgzQAEgMAQgIQASgIAJATQALAaABAiQADCDg6B4QgaA5gvAtQgdAdg4ApQg4ApgVAUQgkAkgJApQgcBIARA/QAFAUAJAOQAIANABgEIgBABQgCAAgHgJg");
	this.shape_106.setTransform(243.5,397.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#3A432E").s().p("AgfGtQAcg5AlgcQAigXhIgLQgzgIhTAAQgwAAhJAcIh4AyQg7AXhfAQQhlARgygJQA8gjCgi+QASgWgdgCIgfABQgVAAgMgBQgUgDgzAYQg2AbgZAAQgkAAhEgLQhAgKgggJQAYgVAogRIBHgcQAsgSAagUQAigcAVgoQAmhJBkgmQAfgMAugKIA8gOQAmgLArhXQAMgZAXg0QAXg0ALgWQAthaBbgpQG2DnBGA2QgOBdBSBQQAeAdAkATQAfASAUADQAhAEAsAkQAqAiAQAhQAXAvBrAkQgaAPhDAKQhJALgigNIhJgbQgmgKgJATQBtBJAkAiQg3AUhygUQhNgNhFgWQg3gSicAdQAFAPgNAUQgOAVgRAEQgWAFhKA1QhLA4gRAcQgWgRAdg6g");
	this.shape_107.setTransform(250.5,448.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#3A432E").s().p("ADBDcQhIg9hIgBQgPgBgXACIgmAGQg1AFgmgMQg3gTgcg4QgOgnAPgoQADgIAJgRQAHgNABgFQAHgQADgVQAEgWgCgKIgDgGQgCADgKgCQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBIgCgKIgFhNQAAgFACgFQACgEADAAQAdgJAkAjQAmAlgGAoQAAAkgIAcQgGAVgPAeIgWAnQgGAMADABQAFAMALANQAMAOANAEQAXAMAwAAQA+ABAWADQBTALBGBMQAEAEgHALQgFAIgEAAIgCgBg");
	this.shape_108.setTransform(283.6,454.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#3A432E").s().p("Ak3GNQgEgHAAgKQgBgYAIgCQAagCAfgZIA6gzQAlgiAdgPQApgVArADICPADQAbACAigKIAEgBQgGgZg7hVIgXgkQgOgYgJgSQgbgzgDhBQAFhAAUg0QAQgmAig0QAkgyAtgZQA9giBBAYQAIADACAJQACAIgEAKIg7CKIgDAGQABgLgPAJQgOAIgUAVQgzA3gBApQgEALANAiQAMAgAUAhQAGAOANAXIAVAmQAZAyAHA8QACAzgfAhQgPAPgQAGIgZAHQgdAFg2gEIiOgVQgcgJgfANQgVAJglAbQgsAhgUAKQgnAXgmAFQgFAAgDgGg");
	this.shape_109.setTransform(234.6,443.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#3A432E").s().p("AChEVIgkgkQgeghgngEQgNgCgcADQggADgPAAQg/gCgmg5QgWg1gDhFIAAg1QABgggCgTQgFg6gKgVQgMgWgdACIgCgFIgBgLIAEhVQABgIACgDQADgEADABQAeACAfAWQAiAZANAkQAMAfAEAlQABASAAAqIgHBqQgDA6AKAaQAIAZAsAIIBZAIQAaACAYASQAQAMAWAbQAYAdAGAHQARAPANgDQAEAAAEAOQAFAPgIABQgHACgHAAQgUAAgTgPg");
	this.shape_110.setTransform(304.2,436.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#3A432E").s().p("AmdFMQgBgXAIgCQAegCAXgYQAQgPAYgoQAdgwAOgTQAdgmAigWQApgUAvAMQAPAEAXAJIAgAMQAlAMAMAAQAPgBACgPQAEgKAAgrIABhTQAHhnA7hVQAyhPBVgnQBjgtBWAxQAFACABAHQABAIgEAJIgzBzQgDAGgGAIQgEAFgCgBQgjgbgsAPQgsAOgtAzQgSAUgNAcQgNAcgEAbQgDAMgBAXIgCApQgFA2gUAyQgLAbgeATQgeAUgagEQgUgBgWgJIgkgQIg8geQgegLgOAIQgVAFgZAdIgtA9QgdAngaATQgjAbgoABIgBAAQgJAAgBgVg");
	this.shape_111.setTransform(220.4,430.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#3A432E").s().p("Ai8CzQgDgCADgEQAjgrBAguIA2glQAggVASgRQAsggAqhCIAxhGIABgCIADgCIALgQIABAAIAPAMQARAPgNgLIAAABIgGALQgCAEgMALIgCABIguA9QgtBDgwAgQgWAQgeAUIg3AiQhBAqgjAqIgDABIgCgBg");
	this.shape_112.setTransform(117.4,320.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#3A432E").s().p("AjIELQgCgDADgEQBjhSBnikQAVgeBChtQA1hZAjg0IADgCIADABIARAQIABAEIgBAEQgkAxg4BWQhFBpgWAfQhuChhmBPIgEABQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_113.setTransform(117.1,328.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#3A432E").s().p("AAEBeIgBgBQgCgTAAgdIABguQABg6gNghIAAgCIABAAQAQAiABA7IAAAuQAAAcADASIAAABIgBABIgFACg");
	this.shape_114.setTransform(154.4,31);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#3A432E").s().p("AhGDoIgCgDQgFg+AQhBQAMgyAbg+IAxhsQAdhAAMgvQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQABAAAAABQAAAAABABQAAAAAAABQAAABAAABQgMAvgbBCIgtBwQgZA+gKAwQgNA8AGA2IAAADIgCABIgOAHg");
	this.shape_115.setTransform(183.5,108.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#3A432E").s().p("AiAD1QgxhGAchfQAZhQA8gzQAlgoBHg7QBPhAAfgfQADgDACADQADADgEAEQgfAhhMBDQhFA+giAoQg4A3gUBFQgWBQAtA5IABAEIgCAEIgQAOIgDABg");
	this.shape_116.setTransform(245.5,65.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#3A432E").s().p("AASDNIgBgCQgYiLgJg+QgRhwgBhbQAAgBABgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAABABQAAAAAAAAQABABAAAAQAAABAAABQADBbAVBuQAJA9AfCIIAAADIgCACIgNADg");
	this.shape_117.setTransform(228.3,53.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#3A432E").s().p("AitL+IgBgBIgOgGQgNgEgRgQQgPgOgHgbQgGgZAEgUQAHghAQgdIAfguQAYgkAtgpQAPgOA4guQA8g6AghiQAghcgChnQgBgmgFg/QgHhPgBgaQgJgyASg/QADgKAhhZQAbhBAiiCQAmiLAWg9QAFgNAIAEQAJAGgEAMQgUA7ghCNQgfCEgaBGQgrBOAHByQACAcAJBKQAJBBABApQAGBzgfBoQgjBxhFBKQhMA3gzBQQggAwgPAtIAVAMIAGAEIATgIIAGgDIAAAAIAAgCIgBgFIAEAIQAIAVgGARIgHAOIgEAGIAAABIglANg");
	this.shape_118.setTransform(223.5,91);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#3A432E").s().p("AAZCVIgBgBIAAgBQALg7gehYIgYhJQgOgsgFgfIABgEIADADQAFAgAQAqIAaBIQAhBWgJBDIgBACIgBAAg");
	this.shape_119.setTransform(301.6,289.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#3A432E").s().p("AhuBuIgKgGIgBgBIAAgCQAhhHBMg1QAVgRAsgbIBCgqQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAQgTAOguAgQgrAcgUASQhIA3gcBDIgBABg");
	this.shape_120.setTransform(300,331.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#3A432E").s().p("AiiC5IgDgBIAAgEQARhEAqg2QAegpA5gqIBehKQA3grAegrQACgDACACQACACgCAEQgdAsg2AvIhbBPQg2AsgdAnQgmAzgLA9IgBACIgDABg");
	this.shape_121.setTransform(310,314.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#3A432E").s().p("Ah9KYIglgZQgEgCAAgEQAAgEACgFQAshXATg8QAZhQgFhNIgDhVQAAg2AKgmQAMgmAVgsIAjhIQBWi0Afh+QAMg0AIhyQAIhyANg5QACgLAHACQAHADgCALQgKA2gEBxQgEBzgLA6QgdCDhTC6IgfBLQgUAtgHAdQgIAeACAuIAGBWQAPCQhfDDQgCAEgEACIgDAAIgDAAg");
	this.shape_122.setTransform(295.3,325.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#3A432E").s().p("AhSA3IAAAAIgCgIIAAgCIAAAAQAlgOAvgfIBTg2IACAAIgBACIhRA6QguAhglAQg");
	this.shape_123.setTransform(262.5,106.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#3A432E").s().p("AktBkIgRgUIgBgEIACgEQBBg+BXgYQA9gSBlgFQCDgHAfgEQBagNA/gnQAFgDACAFQACAFgFACQg/AqhcASQgmAHh8AMQhlAKg5ARQhRAag2A7IgDACg");
	this.shape_124.setTransform(259.6,114);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#3A432E").s().p("AkdBZIgDgDIAAgEIAKgXIACgDIADAAQA5APBUgHQA3gFBZgTQAegKAlgWIBCgoQBUg3A3gKQAFgBABAEQAAAFgEABQg2AMhQA6IhBAsQglAXghANQhwAbgiAFQgjAEggAAQgvAAgqgJg");
	this.shape_125.setTransform(240.5,136.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#3A432E").s().p("AhABoQAQhUAXgrQAfhEA5gPIACAAIAAABIAAAKIAAACIgCABQhUAPgoC2QAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAgBABIAAgDg");
	this.shape_126.setTransform(95.9,294.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#3A432E").s().p("AgdA+QhIghgqghQg7gygUhDQgCgFAEgBQACgBACAEQAWA/A6AtQAqAfBGAdQBjAlCRASIADABIABADIgCAWIgCADIgDABQiUgYhigrg");
	this.shape_127.setTransform(93.1,277.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#3A432E").s().p("AiVCdQgBgDADgCQBFgyBOhfICIijIACgBIABAAIAKANIABADIgBACIiMCcQhTBchHAwIgCABIgCgBg");
	this.shape_128.setTransform(29.4,270.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#3A432E").s().p("ACJBKIgCgBQgrhEhTgjQhFgghWgGQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAABAAQDMAJBcB/IAAACIgBACIgKAHg");
	this.shape_129.setTransform(38,247.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#3A432E").s().p("ABqCeQhCgug6hhQgRgbgfg5Qgfg6gQgbQgBAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAQAZAiA6QAgA3ATAaQA7BdA/AnIABACIAAADIgFANIgCACg");
	this.shape_130.setTransform(89.5,248.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#3A432E").s().p("ABfBlIgBgBQhViBhwhCIgBgDQAAgBAAAAQAAAAABAAQAAgBABAAQAAAAABABQBzA+BbB/IAAACIAAACIgIAHg");
	this.shape_131.setTransform(46.1,165.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#3A432E").s().p("AgCAkQhpgJhSg5QgBgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABABQCwBsDIhXIACABIABACIgBAPIgBACIgCACQhJAfhRAAQgSAAgSgCg");
	this.shape_132.setTransform(40.7,181.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#3A432E").s().p("ADKBsQgkgchAg6QhBg6gfgYQhehXh2gVQh7gXhsA5QgHADgDgHQgCgGAHgEQBshACDASQB9ASBmBVQAbAVBIA8QA/AzAlAaQB2BTBegJIAFACIADAGIAFAqQAAAEgCABIgGADIgHAAQhxAAh2hbg");
	this.shape_133.setTransform(51.5,181.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#3A432E").s().p("ADJCLQgbguhBghIg5gbQgmgRgSgKQiQhKhIhAQgDgDACgDQABgDAEACQBKA9CPBFQATAJAmAOQAqAPARAIQBFAgAkA2IABAEIgBADIgQAKIgDAAg");
	this.shape_134.setTransform(127.8,202.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#3A432E").s().p("AFkMgIg6gPQgFgCgCgEQgDgFABgEQANhWhGhZQg5hHhhg6QgygdgmguQgrgygTg9QgfhjAKiXQACglAKhQQAKhQADgmQAIiHgwhJQiairhpjBQgHgNAJgHQAJgHAHAMQBtC5CfClQA9BdgECTQgBAmgJBUQgIBNAAAmQgJB+AjBcQAkBoBXAmQBvA+BCBMQAsAwAXA+QAbBHgJBGQAAAHgFAGQgDAEgDAAIgCgBg");
	this.shape_135.setTransform(174.7,94.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#3A432E").s().p("Ag+BJIAAgBIAAgBQALgOARgcIAcgoQAggxAkgRIACAAIgBACQgiATgfAxIg1BUIgBABg");
	this.shape_136.setTransform(176.6,72.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#3A432E").s().p("Ah1HFIgDgGQgyjaC5jsQAtg0AUglQAdg0ADg3QAEgogChQQgChSAEgoQAAgIAFABQAGABAAAHQgCAnAEBRQAEBQgDAqQAABkhgBzQhHBhggBmQgoB4AdBlIgBAGIgDADIgdAMg");
	this.shape_137.setTransform(179.4,76.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#3A432E").s().p("AiNAnQhHgTgwg3QgDgEACgDQACgDAEADQAxAzBEAQQBBAPBCgXICAgqQBOgZA7ADIADACIACADIgCAYIgBADIgDABQg2gGhNAUIiBAlQgkALgkAAQghAAghgJg");
	this.shape_138.setTransform(166,155.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#3A432E").s().p("AgwClIgCgCIABgCQARgsAch4QAYhtAbg4QAAAAAAgBQABAAAAAAQAAAAABAAQAAgBABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABgBABQgZA4gVBtQgXB5gRAwIgBABIgBAAg");
	this.shape_139.setTransform(254.5,80.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#3A432E").s().p("AkvFTQAAgBgBAAQgBAAAAgBQAAAAgBgBQAAAAAAgBIAAgGQAdhwBmhaQAQgOBHg4QA2gqAcgcQCEh+CrjMQAFgGADAFQAEAEgEAGQinDWiBCBQgbAgg0AtIhTBJQheBZgTBdIgCAFIgFABg");
	this.shape_140.setTransform(257.9,90.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#3A432E").s().p("AAFGBIgTgPIgCgEIABgFQAphMgBhiQgBhFgah0QgiiSgHgqQgQhtAThVQABgHAEACQAFABgCAGQgRBTAUBpQAHAoAPA2IAYBdQAfByADBKQAEBqgsBbIgDAEIgBAAIgCgBg");
	this.shape_141.setTransform(219.3,97.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#3A432E").s().p("AA1DgIgJgPIgBgCIABgDQAYghgWhBQgHgVgQgiIhGibQgbg/gBg0QAAgBAAgBQAAgBABAAQAAgBAAAAQABAAAAAAQADABAAADQADAyAcA9IAyBmQAlBHAMAhQAOAkACAZQADAmgWAZIgCACg");
	this.shape_142.setTransform(244.6,175);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#3A432E").s().p("AhGBtIgHgGIgBgCIAAgCQALgTASgrQATgsALgUQAlhLA7gGQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAAAgBAAQg4AIgiBJQgIATgTAuQgQAtgLAVIgCABg");
	this.shape_143.setTransform(245,234.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#3A432E").s().p("AioAYIgCgBIAAgDIAFgNIACgBIACAAQAjAPAtgGQAcgEA1gPQA5gUAagEQAwgKAmAJQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAQgBAAgBAAQglgHguAMQgWAFg8AVQgyAUggAFQgPACgPAAQgeAAgcgKg");
	this.shape_144.setTransform(256.4,254.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#3A432E").s().p("AgFAdQgXgMgkgXIg5glIgBgBIAAgCIAFgKIABgBIABAAIA4AoQAkAYAWANQBBAoA5gIQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAQgNACgNAAQgwAAg0gdg");
	this.shape_145.setTransform(257.6,262);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#3A432E").s().p("AiGAZIgBAAIgBgCIABgMIAAgCIACgBQAyAEBTgPQBjgUAkgCQAAAAAAABQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAABQAAAAAAAAQgBABAAAAQgBAAAAAAQgjADhjAXQhPAUgzAAIgFgBg");
	this.shape_146.setTransform(289.3,233);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#3A432E").s().p("ADUBLQhYgUiDg2QhygyhoADQh9AEg4BWIgEADIgFAAIgegTIgDgFIADgHQA9hqCgAAQBtABB0A7QCDA6BUAXQB6AhBmgRQAIgBAAAHQABAHgHABQguAKgyAAQg/AAhHgQg");
	this.shape_147.setTransform(234.1,254.7);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#3A432E").s().p("AmZBbQgCgCAAgDIgHgkIABgFIAEgEQArgKA4gXIBjgpQB9g1BVgEQAugBA7ALQAeAGBKASQBCAQAlAFQA5AJAvgFQAHAAABAGQAAAHgHABQgwAGg6gFQgngFhCgNQhLgPgdgEQg6gIgrAEQhNAFh5A4IhjAvQg5AagtAOIgCAAIgEAAg");
	this.shape_148.setTransform(267.6,242.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#3A432E").s().p("AiQChQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAqgVAkgvQAUgaAnhAQAjg/AYgdQAmgvAugVIACgBIACACIAEAQIAAADIgCABQgpARgmAqQgXAbgnA7QgnBAgWAbQgnAugrAUIgBABQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBg");
	this.shape_149.setTransform(134.3,246.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#3A432E").s().p("AlygDQgGgEADgFQADgFAFAEQCLBaDig4QBbgVBXgsQA4gXAsADQATADAfALQAdALANABIAEACIABAFIgBAgIgCADIgGABQgsgbgvgBQgmgCgyASIhZAgQg3AUgoAEQhJAQhCAAQiLAAhfhEg");
	this.shape_150.setTransform(126.5,231.3);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#3A432E").s().p("AivBuQgCgDADgCIBJhOQAsgrAngVQAbgSBDgRQA9gRAcgVIACgBIACACIAIAOIAAADIgCACQghAXg/AOQhDAOgZAQQglASgtAoIhMBLIgCACIgCgCg");
	this.shape_151.setTransform(54.1,265.3);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#3A432E").s().p("ADlC0QgOgOgWgbIgigpQgbglgpgoIhLhEQhWhOhJgpQheg0hYgFQgHgBAAgGQAAgGAHABQBaAABiAyQBOAnBZBLQAkAXArArIBIBOQAsAxAbAYQAnAhAiAKIAEADIACAFIACAiQAAAAAAABQAAABgBAAQAAABAAAAQgBAAAAABIgGABQg0gLgsgtg");
	this.shape_152.setTransform(64.2,249);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#3A432E").s().p("AiYAEQgBAAgBAAQAAAAAAgBQAAAAgBgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAQCOAkCeg6IACAAIABABIAEANIAAACIgCABQhcAchTAAQhEAAg/gTg");
	this.shape_153.setTransform(74,284.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#3A432E").s().p("AmWBVQgBgHAHgBQAvgIA2gXQAigOA/ggQBCgiAhgOQA4gYAvgKQBygYBkA6IBdA3QA1AcApAAIAEACIACAFIAAAmQAAACgCACIgGACQgygDg6giIhdg8QhZg5hqASQgsAHg3AVQgfAMhEAeQhAAegjANQg5AVgwAGIgCAAQgFAAAAgFg");
	this.shape_154.setTransform(88.7,291);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#3A432E").s().p("AkkHHQgDgHAGgEIBshLQA6guAiguQAkgrAKhSQADgTAFg3QAEgvAEgcQARhCAchJQATgwAphUQAzhcAcggQA4hABHgCQAFAAACADQAEABgBAEIgGAsIgCAFIgFADQhNgIhcCkQhTCfgaBfQgEAZgFAuIgJBKQgQBagpAvQgmAxg+AsIhuBGIgFACQgDAAgCgEg");
	this.shape_155.setTransform(169.8,325.8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#3A432E").s().p("AgfEnQgCgDACgEQAeg7AEhOQAFg2gGhbQgGh0gBggQgBhVAPhBIACgCIADgBIARAIIACACIAAADQgSA7gBBSQAAAYAEB6QAEBbgIA5QgJBQgfA8QAAABAAAAQgBABAAAAQgBAAAAAAQAAABgBAAIgCgBg");
	this.shape_156.setTransform(181.7,324);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#3A432E").s().p("AiKBxQAAAAAAgBQAAgBAAAAQABAAAAgBQAAAAABAAQBfgvA1gtQAngdAbgfQATgVAKgOIAMgQIgEgBIgCgBIAAgDIAFgNIABgCIACAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABIAIAGQALAKgKANIgPASQgKANgWAXQgeAegnAcQg1AqhjArIgBAAIgDgBg");
	this.shape_157.setTransform(162.4,323.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#3A432E").s().p("AioAuIgIgNIAAgCIABgDQBIg+BkgKQBUgJBeAgQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQhfgchRANQhfAOhDA+IgDABg");
	this.shape_158.setTransform(296.8,192.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#3A432E").s().p("Ah2ENIgMgTIAAgDIABgDQAogmAehOIAwiLQA1iTBThsQACgEADADQACADgCADQhOBugyCUQgGAVgOAvIgWBJQgdBUgsAuIgDACg");
	this.shape_159.setTransform(298.2,164.6);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#3A432E").s().p("ApjE7QgEgBgCgEIgeg0QgCgGACgEQABgFAFgDQBXguBngGQBEgDBzARQB/ATAwABQBeABBJgjQCthJByiZIA7hPQAmgyAYgcQBMhZBNgdQAMgEACALQACAKgKAFQhGAdhGBYQgXAdgkAzIg5BSQhzCmi1BVQhPAohlAEQg9ADh6gMQh3gMg4AEQhbAGg/AqQgDACgCAAIgDgBg");
	this.shape_160.setTransform(257,182.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#3A432E").s().p("AAfBZQgSgRgdgwIgqhEQgZgqgVgYQAAAAAAgBQgBAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAABQAWAVAbAqIAsBFQAYAnAWASQAdAXAigDIABAAIABACIAEAMIgBACIgCABQgIACgHAAQgeAAgbgag");
	this.shape_161.setTransform(159.6,194.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#3A432E").s().p("ABUERQg8hngLi4QgQiQhmhuQgDgEACgCQACgDAEADQBpBsAXCUQAJBWAPA7QATBKAjA5IABAEIgCACIgQAMIgCAAg");
	this.shape_162.setTransform(167.2,198.8);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#3A432E").s().p("AgKA5IAAgBIgBgCIgDgIIgGgRIgGgSQgCgLgBgIIgBgIIAAgIIABgCIAAgBIADgBIAEgXIgBAAIAAAAIABAAIAAgCIAAgCIAAgBIArAFIAAANQABAIACAEIAHAJIAAANIgGATIgFADIAAAeIgeAJg");
	this.shape_163.setTransform(261.7,338);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#3A432E").s().p("AgHCJIgJgSIgCgYIgDgOIgFgSIgUhNQAAgEgRg1IgUgsIAAAAIAcgcIAAAAIAAABIADADIAAAAIAOAUIAVAdIARAVIAbAgQACABAVAkIASAdIAKAaQACAFABAHQADAMgBAMQgHAKgJgJIgFgGIgBgBQgOgQgEgKIgIgVIAEADQANAdAQANQAAABAGADQgCgSgIgMQgQgkgpguIgPgPIAAAAIAiBeIAMASIAKAKIAFAOIgCAXIgOASIgTAGIgOABg");
	this.shape_164.setTransform(256.9,339.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#3A432E").s().p("ACPH1Igrg8IgEgcIAMggIAbgcIALgVIAMggQAEgGASg+QASg/gCgFQAFgGgCgyQgDgxgDABQgKgpgVgbQgJgVgUgcIgtgvIgrgeQg4gogEgFQgFAAgcgiQgcghADgCIgog0IgbgrQgBgFghgyQgQgZgQgYQgcgbgPgNIgegaIAKABQAoAaAlAlIAfAmIAuA6QAsA7ARATQAiAnAiAWIBRAnIAhAaIAvAqQAaAaASAcQAeArANAtQAQAwACBHQABA9gOBJQgLAsgMArIgJAxIgBAkIgRAeIgjAYg");
	this.shape_165.setTransform(233.5,335.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#3A432E").s().p("AnYEzQAIgHACgEQAAAIgDAGQACgDAhgNQAlgNAOgIQAWgKATgRQAXgWARgwQAGgUAEglIAKhAQAGgfASgfQAIgOAZgoQAshUAFgRQAGgKAMgdIAPglQALgZAQgSQAfgiA3gDQAoAAA8AeQArAUA4AkQBAAsAnAYQApAaAeAPQANAEAdAHIAfgCIAbATIAbAqIgGA2IgbArIgXAbIgeAKIglgRIgggnIgYgTIghgUQgHgCg8gzQg7gzgEgHQgEgHgugiQgtgigBABQgpgagZACQgagHgLAMQAAgFgQAeIgTAnQAAAFgRAfIgRAeIg3BNQgHADgYAhQgYAjACADIgMBNQgQA4gGAGIgOAXQgPAYgTAOQgcAWgfAHQgoAQgUAFQgCgBgOAGIgDABQgHAAgBgMg");
	this.shape_166.setTransform(198.7,313.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#3A432E").s().p("ACqd8QglgYhChUQgniKALh6QAehvBIhiQAOggAkg+IAWgxQAXgyAEgMIAbhBQAVg7ABg6QAHhggehhQgDgPgVgiQgdguglgiQg4g2hJgqQgvgdhQgmIiLhCQh8hZhEhCQgCAEgcgeQgbgdghgpQhXhrgCgeQgphMgEhLQgEgvAIgyQAEgZAEgOQAGgXAMgeQAXg9AZgrQAYgrAggxIAfgvIAkgtQAlgvAWghQApg5ALg4QAFhQhXhSIgQgQIAAgBIgMhLIAAADIgBgEIABAAIAAgBIASgZQARgXAHgGQAWgWAegWIAfgVQACgDATgLIArgYQBCgpAhgzQAjgzAShUQAFgYAEgaIADgTQABAAgBhYIgCiUQgBhPAThXIANArQgEBDAICDQAICIgCBFQgLB3gqBOQgcA+hBA5Ig1AsQggAagPAOQgSAPgMAOIAHAHQBgBjABB4QgDB1g4BvQgRAjgiA2QgkA7gMAWQgqBVgTBIQgVBQASAfQACAeAcApQAsA+BUA4QBCAuBpA0ICCA2QBPAhA6AcQBjAuBFAxQBdBDBDBaQBSB0AmCYQAhCKgFCdQgJBmghBrQgGAUgyCLQgTBaADArQAQAjAWAAIgKACQgFADgBAHQghAggDBPQgvBBgsBKQg/AghKAVQgSAEgaAAQgcAAgngEg");
	this.shape_167.setTransform(238.4,259);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#3A432E").s().p("AjsA6IgXACIgRAEIgQgGIgQgTIgBgbIAVglIAMgHIARADIASAOIAMAFIARADIBKAPQAEACA2AFIBOADQAeABADgBIAcgFIAogKIAsgGIA5gTIA9gTIAdgPIAUgIIgEAEIgwAcIg7AcQgsATg5ASQggAOgQAGIgWADQgdAFgjABIhiADg");
	this.shape_168.setTransform(262.9,203.8);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#3A432E").s().p("AnFGzIgnghIgageIgJgnIASg1QAegjAOgMIAZgeQgBgBAmgoQAJgJAXgOQAigVAfgHQAdgIAigCIAgAAQAJgBBAAHIA/AHIBkANQA8AMAFAAIAhAAQAhgDAEgDQAHAAArgeQAPgNAPgPQAdgfAAgHQAEgCAbgoIAbgsIA5iIQABgGAkhDQATgjATggQAXgvAOgVIAggrIgDAQQgiA4gaA7IgaA4QgPAngRA0IgtB+QgcBHggAzQgrBJgsAeQgPAKgkAMQg9AUhdgIIhdgGQhGgBgkAGQhCAGglAYQgVAKgbAjQgLAmAAAFQAAAbACAGIgQAcIgkAgg");
	this.shape_169.setTransform(227.2,185.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#3A432E").s().p("AmiCbIgagZIgRgXQgDgOgBgPIAQglQAbgYAHgFIAUgRQAUgUAIgEQAEgNA/gQQA9gPAFAIIAzABIAtAEIB3APIAWACIAcgBQArgJAAgBIA8gUIBDgTIBXghQAEgFBdgQQgBgCAwgHQAQgCASgBIgIAHIh0AeQgFABgyAWIi7BaQgXAJgPAGIgjAGQgVAFgdAAIh4gDQgsABgeAEQgvAHgdAQQgYANgOASQgHALgFAQIAAAXIgMASQgHAEgUAPg");
	this.shape_170.setTransform(224.4,249.8);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#3A432E").s().p("AHVI5QgPgRgcgsQgDgKgMhFIgOgnIgKgVIgOgYQgYgtgbgWQgSgPgegOIgegNQgFgFhNgJQhLgKgDACQhpgEghgFIgzgSQgegMgWgQQgBACgrggQgrgfgGgGIgpgeIghgcQgXgYgWgXQgrgxgCgIQgGgGgfhCQgfhCACAAQgPgbgjhIIghhRQgDgKhLi6IALAAIAsBQIA0BxQBECIB1CTQBCA8AvAaQAaAWAXALQBQA3BKAHQAYACBggDQBngHA0AFQB6AMBNA/QAvAqA0BWIAuA5IAlAWIAPAjQgBAbAFAjQgOAjgLAnQgYAXgdAUQgTAKgcAJQgNgCgjgOg");
	this.shape_171.setTransform(135.9,213.2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#3A432E").s().p("AD/EHQgpgDACgDQgugQgogiIg8g4IhFhbQhFhNgIgFQgIgHhDgsQABgCg1gdQg0gcgHgCQgGgGg6gbQg6gcgBACQg0gKguAAQgRgCgSgBIgrAAQgHgDhcANQhdAOAAAEIhZAoQgeAOghANIALgRQBQgwBHgfQA7gTAQgDQAygRBGgMQCugVCdBGQA8AQBeAuIA7AuQAuAnBvBtQBJA+AUABQAdACBXgrQAggNAngbQAOgKA7gsQBYg/AbgRQAnghAggUQAXgXAhgVQApgEAlAGQAzAeAdAlQgDAsgJAoQgaAegQAeQgMAWgIAaQgJAMgHARQgLAAgRAFQgRgIghgGIghAJQgjARgLAIIhpA7QhpA4gRAAIhlAcQgYAIggAAIgUgBg");
	this.shape_172.setTransform(108.5,278.3);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#3A432E").s().p("ADeanQhEgQg+gpQgmg7gnhSQgGhSAHhtQAjhZArhRQAXhKAKgcQAchuAKgjQAMgoAZhDQAchMBCh1IAohGIAHgLIAHACQgMgahhhtQgwg2gngnQgogpAAAFQhyhfh/hFQhDg3h0hOIhhhAQgZgQgZgcQgdgggMgfQgKgagGgZIgEgZQgNgwgFhcQgEhAALg+QAEgYAKghQAUhEAdgwQAcgyAogwIAogtIAsgnQAsgmAXgaQAZgaAKglQAGgXgCgKQgMhVhQhqQgVgigZggIgTgWIgEgFIgEgBQgLgGgPgBIhHgJQgjABgpgfQgogegUgoQgohEgRhZQgIgtgCgdIANAFQAQBsA1BPQAxBIA4AMQASAEASgHQAKgEAWgMQAUgMAMgEQASgGASAFQA6AeAkArIAdAmQASAZAOAPQBLBoAVBlQAQA+gTBMQgSBGgkAuQgYAjgoAuQgvA3gLAOQhWCFAhCJQABAeAFAnIAEAZIAdAPQBGAnAUAJQB6A5BQAvQCRBJB7BdQBYA+A+A1QBLBBBGBNQA7BFAeBRQAVA0ABBOQABBHgRAxQgVBHgdBFIgmBgQgiBXgdCpQgBBKAFBSQATBAAQAgIgRBEQgTANgXADQgSACgpgDQg2BAgKBeQgUAhgnATQggAQgiAAIgRgBg");
	this.shape_173.setTransform(226.5,288.5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#3A432E").s().p("ACyG0QgZgqgog0IhJhaQhahyglhZQgVgygQhEQgIgkgQhXQgOhOgLgrQgRhBgWgxQgDgIAFgDQAEgDADAHQAZAyATBCQANArARBOQATBYAJAgQARBCAVAtQAkBSBbBrIBNBYQArAzAdAsIACAGIgCAFIgZAWIgFABg");
	this.shape_174.setTransform(142.2,189.5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#3A432E").s().p("Ag9CjQAAgBAAgBQgBAAAAgBQAAAAAAgBQAAAAABAAQAOggALgzIAch/QAGgbAFgRQASgwAkgSIACgBIABACIADANIgBACIgBABQgcATgTAmQgOAdgKAzIgUBXQgMAygQAgIgCABIgBAAg");
	this.shape_175.setTransform(216.1,354.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#3A432E").s().p("AjHDwQgDgBACgFQAahIA4g/QAfgjBPhCQBGg/AhgoQAyg/ARhIIAlAOIADADIgBAEQgXBQg5A/QglAqhNA2QhUA/gfAdQg7A5gbBEQgBAEgCAAIgCgBg");
	this.shape_176.setTransform(218.1,340.3);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#73A93A").s().p("AgMgXQAUgPAdAOIgcAOQgVALgNATQAQgPAUgKIAagQQgKAegSAMQgJAIgTACIgRABQgCgkAagTg");
	this.shape_177.setTransform(126,208.2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#73A93A").s().p("AgZAXIAKgFQAHgDAEgEQANgNAJgPQgMANgMALQgEAFgGADIgJAFIAGgPQAFgKAFgHQALgPAYACQABAZgOAPQgJALgNAAQgMAAgEgDg");
	this.shape_178.setTransform(135.6,180.9);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#73A93A").s().p("AgeARQAGgYASgKQAJgHAPAFQALAFACAFIgLAAQgHABgFACQgQAHgMAKIAegNQAEgDAHgBIAKgBIgKAKQgIAKgHAFQgGAEgIAAQgKAAgMgFg");
	this.shape_179.setTransform(127,191.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#73A93A").s().p("AgNgOQAIgLANgDQAMgCADAEIgJAGQgGAEgEAFQgLAOgIAQIAWgbQADgGAGgDIAIgHIgEARQgEAKgFAIQgLARgWABQgDgaAMgRg");
	this.shape_180.setTransform(160.6,207.8);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#73A93A").s().p("AgEARQgRgJgGgUQAUgKAMAHQANAEAKAUIgTgHQgOgEgMgGQALAIAOAFIAUAGQgLAIgLAAQgGAAgEgCg");
	this.shape_181.setTransform(120.3,158.1);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#73A93A").s().p("AgMgXQAUgPAdAOIgcAOQgVALgNATQAQgPAUgKIAagQQgKAegSAMQgJAIgTACIgRAAQgCgkAagSg");
	this.shape_182.setTransform(121.2,163.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#73A93A").s().p("AgFAQQgRgJgFgVQAUgIALAHQAHADAIAKIAJAJIgUgFQgOgEgMgIQALAKAOAFIAVAEQgEAFgJADQgFACgGAAQgEAAgFgDg");
	this.shape_183.setTransform(116.1,144.8);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#73A93A").s().p("AgPAGQgDgJABgSIABgQQAGAAAHAFQAOAIAFAQQAHAUgLAZIgHgaQgFgWgJgPQAHASADAUIAJAaQgTgOgGgSg");
	this.shape_184.setTransform(118.6,141.2);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#73A93A").s().p("AgQAKQAAgMAGgHQAKgQAQAAQADAWgKALQgEAIgHADIgJAHQADgMAFgGIAOgZQgKAKgGANQgGAHgCANQgDgDAAgNg");
	this.shape_185.setTransform(168.4,133.1);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#73A93A").s().p("AgRgJQALgZAWgHIgNAbQgFAOgCAOIgDAOIAEgNQADgPAGgMIALgbQAHAegHAQQgFAUgWAPQgPgYAIgbg");
	this.shape_186.setTransform(208.9,373.5);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#73A93A").s().p("AgKAEQgEgKAIgTIAEASIAGAZIgEgaIgFgSQAMAHAEAQQAEAOgJAQQgMgJgEgOg");
	this.shape_187.setTransform(218.9,350.1);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#73A93A").s().p("AgHATQgIgGgIgMIgKgOIALAEIANAFIAgASQgNgNgSgJQgFgDgIgCIgMgCQADgFAOgDQAQgFAKAJQATANAFAbQgLAFgKAAQgMAAgIgHg");
	this.shape_188.setTransform(222,346.4);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#73A93A").s().p("AgTAOQgIgPADgZQACgMADgJQAaAMAMAYQAIAMgBAWQgBAPgDAJIgNghIgWgsQAHAXALAYIAOAfQgcgPgKgTg");
	this.shape_189.setTransform(213.2,335.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#73A93A").s().p("AgpAOQALgfAagHQAOgEAQAKQAOAIACAHQgXgDgGACQgXAEgSAJQATgGAWgDIAcAAIgPALQgMALgKADIgJABQgRAAgTgMg");
	this.shape_190.setTransform(193.7,364.8);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#73A93A").s().p("AgVADIAPgBIAUgCIgUAAIgPABQALgMAKgBQAMgBAKAMQgKANgMABIAAAAQgMAAgJgKg");
	this.shape_191.setTransform(257.7,79.2);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#73A93A").s().p("AgBAUQAGggAFgbQgKAagGAfIgLAnIgGgbQgEgVADgPQAFgWATgSQAIgIAIgDQAEAKADAMQAGAagFASQgEATgQAQQgKALgIACIANglg");
	this.shape_192.setTransform(260.9,124.4);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#73A93A").s().p("AADAEQgCgKgGgFQAFAGABAJIAEAOIgFgGQgFgFAAgEQgFgFACgOQAJAAAHALQAFAOgIAJg");
	this.shape_193.setTransform(268.8,130.1);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#73A93A").s().p("AgUAeQgRgCgFgHQAHAAAXgMQAVgMAUgJQgVAFgWALQgZAOgBAAIAJgSQAIgQAOgIQAOgKAWAJIANAHIADAEIgLAOQgLARgNAIQgIAFgOAAIgGAAg");
	this.shape_194.setTransform(274.4,129.9);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#73A93A").s().p("AgaANIASgIIAbgKQgOABgOAGIgSAJQAJgUAOgHQAQgFAQANQgJATgPAFQgEACgFAAQgJAAgMgFg");
	this.shape_195.setTransform(162.9,170.9);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#73A93A").s().p("AgHAJQgHgJACgQIAIAOQAEAJAIAFQgGgGgEgKIgIgMQALACAFAKQAHAFAAAQIgEAAQgJAAgHgIg");
	this.shape_196.setTransform(171.1,160.9);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#73A93A").s().p("AgFAXQAKgTAFgUQADgLAAgIQgBAIgEAKQgIARgJATIgTAkQgEgtALgTQAHgPAOgPIAQgQQAAgCAEAHIAHARQAIAegLAWQgQAhgiAFQAQgXAFgLg");
	this.shape_197.setTransform(111.3,183.3);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#73A93A").s().p("AAAAWQgUgBgQgVQARgVATAAQAVAAAQAVIgZgBQgTAAgRABQARACATABIAZgBQgTAUgSAAIAAAAg");
	this.shape_198.setTransform(155.7,126);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#73A93A").s().p("AgBAQQgRgGgHgRQAQgLALAEQAGAAARAOIgRAAQgNAAgMgEQAMAGANAAIASgBQgDAEgGAFQgIAGgJAAIgBAAg");
	this.shape_199.setTransform(212.8,85.5);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#73A93A").s().p("AgdAWQAFgaAQgMQAOgMAXAGIgUAPQgQAKgMAMQAPgJAPgKIATgQQgGAagPALQgJAIgMAAQgIAAgJgDg");
	this.shape_200.setTransform(212.5,88.2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#73A93A").s().p("AgiAhIAYgVQARgRARgOQgTAJgSASIgXAXQACghAUgTQAWgSAdALQgHAjgTAOQgLAMgZAAIgJAAg");
	this.shape_201.setTransform(220.4,75.7);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#73A93A").s().p("AgXAoQgWgUgOgkQgGgUgDgRQANgEATAAQAkgBAVAUQAUAPANAdIAPAmIgugfQgkgbgggVQAbAcAkAcQALAIAPAJIAYALQgNAIgYABIgDAAQgdAAgWgSg");
	this.shape_202.setTransform(214.2,112);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#73A93A").s().p("AgLAHQgCgJADgMQACgIADgDIADATQABAJAEAJIAFAGIgEgHQgEgKAAgHIgEgTIAHAJQAGAHABAHQAGAIgEAUQgOgBgJgSg");
	this.shape_203.setTransform(302.7,158.8);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#73A93A").s().p("AANAlQgBgOgEgIQgIgfgPgWQALAZAIAeQADAIABANIACASIgOgSQgMgPgGgMQgLgZAJgpQAhAGAPAjQAJATgHAaQgGAVgHAEg");
	this.shape_204.setTransform(296.3,151.5);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#73A93A").s().p("AgcAHIAUgEQAOgDAOgDQgOABgPACIgUAFQALgSAQgEQAPgDARAOQgLAUgRAEIgEAAQgOAAgMgLg");
	this.shape_205.setTransform(271.3,170);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#73A93A").s().p("AgKAaQgagQgGgjQAfgMAUAOQALAGAKAPIANARIgegKQgWgKgUgLQASAQAXAKIAfAJQgHAGgOAFQgGABgHAAQgJAAgKgFg");
	this.shape_206.setTransform(261.3,164.8);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#73A93A").s().p("AgBAQQgSgGgGgSQARgKAKAEQAJABAPAPIgSgCQgNAAgMgFQALAGAOABIASACQgKAMgOAAIgDAAg");
	this.shape_207.setTransform(23.2,261.2);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#73A93A").s().p("AgIAZQgHgNAAgNQAFgZARgKQAMAWgDAPQAAAKgHAMIgJAOIABgZQgBgMADgNIABgMIgDALQgCAOABALIAAAaQgEgEgEgIg");
	this.shape_208.setTransform(27,256.9);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#73A93A").s().p("AgBATQgMgEgSgPQAOgaAYAIQAOAFAGANQAFALAAAIIgIgIQgGgGgFgCQgQgKgQAGQAQgBAPAIIAKAHIAJAIQgdAAgDgCg");
	this.shape_209.setTransform(306.4,259.4);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#73A93A").s().p("AAAARQADgRgCgSIgBgPIAAAPQAAASgCAQIgDAiQgSgiADgQQgBgYAVgaQAVAVAAAeQgDAggVASg");
	this.shape_210.setTransform(309.8,255);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#73A93A").s().p("AgKAVQgQgLgLgkIAaAUQAMAGAOAMIALAKIgKgLQgNgNgLgJIgbgRQAdgMAVARQAWAWABAiIgNABQgXAAgMgNg");
	this.shape_211.setTransform(319.4,193.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#73A93A").s().p("AgdAJQgHgaAOgdQANgZAJABQgJAVAEAcQAFAoAMAdQgIgggEgmQgDgZAEgWQABAGAMAUQAMAUAEAQQAHAhgTAtQglgSgKgsg");
	this.shape_212.setTransform(314.6,199.5);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#73A93A").s().p("AgKgDQABgIAIgIIAIgLIgFAWQgBAKgEALIgFAJIAGgIQAFgLACgKIADgXQADAEADAKQAEAOgDALQgLAUgRACQgFgZAIgJg");
	this.shape_213.setTransform(160.5,56.4);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#73A93A").s().p("AgmADQAQgXAWgCQAUgBATAWIgbAAQgUAAgRADIAmgBIAagBQgTAXgUAAIgBAAQgSAAgTgUg");
	this.shape_214.setTransform(157.3,52.5);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#73A93A").s().p("AgPgLQAHgMALgIQAJgFAGgBIgOAYQgKATgFATIASgkIANgYQAEAggIAMQgKAVgWAIQgJgcAKgVg");
	this.shape_215.setTransform(250.1,118.1);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#73A93A").s().p("AgWAAQgBgRAMgSQAHgMAGgFIgCAQQgBAMAAAHQgBAdAGAYQgDgYAAgcIADgkQARAjABARQACAWgRAfQgagSgDgjg");
	this.shape_216.setTransform(277.4,77.5);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#73A93A").s().p("AgGAaQgWgIgQggIBKAaQgTgMgYgHIgegJQAagUAYAKQAaALAMAiQgSALgQAAQgKAAgHgEg");
	this.shape_217.setTransform(282.2,72.9);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#73A93A").s().p("AgRgLQAIgUAagMIgOAdQgIAXgGAVQAKgTAIgXIAMgeQAKAegLAXQgKAYgaAKQgLgfAMgZg");
	this.shape_218.setTransform(244.6,187.9);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#73A93A").s().p("AgEAeQgRgGgPgTQgIgIgFgIQAHgHAKgFQAWgLAQAFQANAEAOANIARAPIgQgBQgKAAgIgCQgagEgXgEQAWAIAbAGQAIACAKgBIAQgBQgEAJgPAIQgNAIgOAAIgIgBg");
	this.shape_219.setTransform(242.5,182.1);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#73A93A").s().p("AgTgWQAOgQASACQAOABAFAGIgNAEQgJADgFAGQgTAQgGAWQAKgUARgPQAFgFAIgDIAMgFIgJATQgHAMgFAHQgLAPgaAKQgNghAUgag");
	this.shape_220.setTransform(245.8,145);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#73A93A").s().p("AgTAPQgOgXAHgmIARAhIAaAuQgIgZgOgYIgTggQAeAGAPAbQAPAbgKAlQgfgIgOgag");
	this.shape_221.setTransform(251.7,145.6);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#73A93A").s().p("AgWArQgDgiAJgRQAGgMAXgWIgIAfQgHAXgMASQAOgPAIgZQADgGACgLIADgPQAEAHADAPQAEAUgIAPQgOAcgaAAIgBAAg");
	this.shape_222.setTransform(310.3,166.5);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#73A93A").s().p("AAAAKQABgQAEgNQgFAMgCAQIgEAUQgJgPADgSQAFgRAPgHQAJATgFANQgCAMgOANg");
	this.shape_223.setTransform(248.8,222.2);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#73A93A").s().p("AgKAKQgJgLAEgVQAPABAJAOQAGAHACAWIgMgPQgIgKgIgMQAGANAIAKIANAPIgEAAQgMAAgKgNg");
	this.shape_224.setTransform(247,222.5);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#73A93A").s().p("AgKAYQgLAAgEgEIAKgEQAGgDAEgEQAMgLAKgMIgYAUIgJAHIgJAFIAGgPQAFgJAGgGQAIgKAOgBQAHAAAFACQgCAWgOAOQgIAJgKAAIgCAAg");
	this.shape_225.setTransform(286.9,230.7);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#73A93A").s().p("AgMACQgDgNAKgUQAOAJAFAVQACANgLATIgCgWQgCgQgEgOIADAfIADAWQgMgMgDgSg");
	this.shape_226.setTransform(284,229);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#73A93A").s().p("AgKAPQgJgKAAgOQAAgNADgDIADALQACAHADADQAKAOALAIQgKgLgIgMQgDgEgDgHIgDgJIALAGQAHAFAEAFQAMAKAAAZIgGAAQgOAAgKgLg");
	this.shape_227.setTransform(287.9,240.9);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#73A93A").s().p("AgJgJQAJgMAMAAIgKANQgHAJgBANQADgMAHgIIAKgOQAAATgGAGQgEAKgNAHQgHgQAHgPg");
	this.shape_228.setTransform(284.5,240.7);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#73A93A").s().p("AgEgFQAEgIAKAAIgIAJIgHANIAJgMIAGgKQAAANgEAGQgFAGgKACQgCgLAHgIg");
	this.shape_229.setTransform(276.7,265);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#73A93A").s().p("AgLAHQgFgKADgWIAJASQAFANAHAMIgKgaIgKgSQAPAFAHAPQAIANgGATQgQgEgHgPg");
	this.shape_230.setTransform(279.9,265.5);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#73A93A").s().p("AgLAEQgCgJAFgLQAEgIADgCIgBAJIABAKQABAPAFAKQgEgMgBgNIAAgTIAFAKQAEAIACAGQAEAMgIARQgNgHgFgQg");
	this.shape_231.setTransform(255,269);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#73A93A").s().p("AgKgMQALgOASACIgPAPQgKALgFAPQAHgNAKgKIANgRQAAAXgKAKQgIAMgSAEQgEgWALgQg");
	this.shape_232.setTransform(253,267.6);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#73A93A").s().p("AgOgDQACgNAKgKQAHgJAEABQgIAQgBAGQgCATACAQQAAgQADgSIAHgWIADAPQADAMgBAHQgCARgNARQgRgQADgWg");
	this.shape_233.setTransform(262.6,256.2);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#73A93A").s().p("AgGALQgFgFgFgIIgGgNIAIADQAGACADAEQAMAJAJAMQgHgOgMgKQgEgEgGgCIgKgCQACgEAMgCQANgCAIALQAPAOgFAYQgUgCgIgLg");
	this.shape_234.setTransform(267.7,255);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#73A93A").s().p("AgJARQgJgJgFgNQgCgKAAgHIARASQALANAOAHQgMgKgMgNIgQgRQAXADAIAIQAOAMAEAXQgIADgHAAQgLAAgJgIg");
	this.shape_235.setTransform(311,327.4);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#73A93A").s().p("AgHALQgKgLAAgUQAQgCAJAMQAKAKAAATIgMgOIgRgSQAHALAJAKIAMANIgEAAQgNAAgHgKg");
	this.shape_236.setTransform(306.4,271.8);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#73A93A").s().p("AgKgEQAFgMANgJIgHASIgGAYQAFgLADgMIAGgSQAGASgFALQgGAQgMAEQgGgSAEgLg");
	this.shape_237.setTransform(317.9,308.6);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#73A93A").s().p("AgNAMQgIgPAIgXIAHAWQAGAQAKAIQgKgKgEgPIgHgWQAOAKAGANIAGARIADAMIgDACIgIABQgNgCgHgOg");
	this.shape_238.setTransform(321.4,308.8);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#73A93A").s().p("AgCAQQgHgDgHgIIgKgIIAJABIAKACQAOACAMAHQgLgJgOgDIgUgCQADgEAIgFQAMgFAIAEQASAIAEAVQgLAEgIAAQgHAAgDgCg");
	this.shape_239.setTransform(313.8,283.8);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#73A93A").s().p("AgdAbIAVgRIAdgZQgQAIgPANIgVATQAAgIAFgMQAGgOALgJQAPgNAaAIQgEAcgTAOQgJAIgSAAIgLAAg");
	this.shape_240.setTransform(314.8,279.7);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#73A93A").s().p("AgGALQAJgUAOgOQgRALgKAUIgOAaQgCgIABgNQABgQAIgNQAQgVAaAEQgBAhgNAMQgIAOgaAJg");
	this.shape_241.setTransform(329.9,292.3);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#73A93A").s().p("AgBARQgUgDgHgXQASgJALACQAHABAJAFIAMAIIgUACQgPAAgNgFQAMAHAQAAQAFAAAGgCIAJAAQgCADgIAHQgJAIgJAAIgCgBg");
	this.shape_242.setTransform(295.6,280.7);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#73A93A").s().p("AATAxQgZgBgRgTQgQgTgFgdQgDgQAAgNQAKgBAOACQAbAGAOASQALAMAJAVIAKAdIgQgKQgMgHgGgIIguguIAMARQAQATAOAQQAHAIANAGIASAJQgGAGgSAAIgFAAg");
	this.shape_243.setTransform(297.3,303.2);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#73A93A").s().p("AgHAMQgKgJgBgQIALAMQAJAHAKADQgKgFgHgIIgNgKQAOgEAIAJQAFAFAFAHIAFAIQgDADgFACIgHABQgFAAgGgFg");
	this.shape_244.setTransform(272.5,269);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#73A93A").s().p("AgUAMQADgQAOgIQAHgEARAHIgPAFQgLAEgIAIQAJgGAKgDIAPgHQgFAPgMAFQgEADgGAAQgGAAgIgDg");
	this.shape_245.setTransform(260.9,270.5);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#73A93A").s().p("AgHAfIgFgKQgHgQAGgNQAFgLAJgHIAMgGIgKAVQgHAPgBASQADgQAHgPIAKgWQACAFAAALQAAAOgEAHQgDAHgJALIgGAJIgCgCg");
	this.shape_246.setTransform(263.8,271.7);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#73A93A").s().p("AgFAKQALgOAKgPQgMAMgLAOIgPAUQgCgaANgNQAMgSAWACQABAcgMANQgMAQgVAAg");
	this.shape_247.setTransform(276.3,257.7);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#73A93A").s().p("AgVAoQgQgCgKgFIAigTQAagRAUgUIgwAfIghAVQAQgqATgNQAYgUAlAMQgGAqgbAVQgOALgRAAIgFAAg");
	this.shape_248.setTransform(283.6,258);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#73A93A").s().p("AAEABQgEgFgFgCQAFADADAFIADAJIgIgIQgEgDgCgJQAIgEAGAHQAFAGgEALg");
	this.shape_249.setTransform(270.8,249.3);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#73A93A").s().p("AgIAKQANgQAOgMQgQAIgNARIgSAVQgBgcAQgRQASgRAYAHQgEAegPANQgKAMgaACg");
	this.shape_250.setTransform(276.4,248.2);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#73A93A").s().p("AgEAKQgLgIACgNQAMABADADIANAJIgFABIgGgBQgHgCgGgGQAEAHAIADQADABAEgBIAFgBQAAADgGAEQgEACgEAAQgBAAgEgCg");
	this.shape_251.setTransform(258,250.3);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#73A93A").s().p("AAIgcQgIATgEAWIgGAeQgMgcAFgUQAHgZAWgMQAMAcgGAUQgFAYgVANg");
	this.shape_252.setTransform(261.7,247.6);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#73A93A").s().p("AgEAIQAJgKAJgKIgUARIgNAOQAAgTANgKQAKgMAQAEQgCAVgKAKQgIAHgSAAg");
	this.shape_253.setTransform(302.3,233.2);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#73A93A").s().p("AgMANQgOgTAGgYIANAXQAKARAMAMIgTggIgPgVQAXAGAJAOQAMAQgDAbQgWgBgMgSg");
	this.shape_254.setTransform(299.8,244.4);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#73A93A").s().p("AgOgLQAHgMAKgGQAJgEAGAAIgOAVQgKAQgDATQAGgSAKgPIAMgWIAAATQAAANgFAHQgHASgUAJQgKgYAJgVg");
	this.shape_255.setTransform(296.2,243.7);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#73A93A").s().p("AgEAUQgRgHgKgXIAVAJQAQAGAQAEQgOgIgRgFIgWgIQATgNARAHQATAIAIAYQgOAIgMAAQgGAAgEgCg");
	this.shape_256.setTransform(312.9,240.6);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#73A93A").s().p("AgdAiIAVgXIAdghQgRAMgPASIgTAYQACghAOgQQARgVAcAGQgCAhgQAQQgNARgXAAIgGAAg");
	this.shape_257.setTransform(311.4,235.6);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#73A93A").s().p("AgFAIQgIgIACgMQALABADAHQAFADAEALIgJgHQgGgDgFgHQAEAHAGAFIAJAGQgDACgDAAQgFAAgFgFg");
	this.shape_258.setTransform(292.9,228.3);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#73A93A").s().p("AgHAOQANgYAOgUQgSAQgNAZIgRAgQgIgkARgaQATgZAfABQADAngRATQgLATggAKg");
	this.shape_259.setTransform(297.7,225.5);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#73A93A").s().p("AgRAHIANgEIAQgGIgRAEIgMAFQADgLAMgEQAKgFAKAJQgGANgKADIgCABQgGAAgLgFg");
	this.shape_260.setTransform(252,225.1);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#73A93A").s().p("AgHAQQgJgFgMgaIAvAcQgLgLgPgIIgUgMQASgJASAMQAOAKAGAYQgJAEgIAAQgLAAgIgHg");
	this.shape_261.setTransform(251,228);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#73A93A").s().p("AACAGQgCgLgEgJQAEAKABALIADAPIgFgIQgFgFgBgFQgFgKAFgPQAMAGAEAMQAEAQgIAJg");
	this.shape_262.setTransform(242.4,227.7);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#73A93A").s().p("AggAAQAPgTARAAQANgBAUARIgXABQgQACgQAAQAQADARgCIAWgBQgNASgUACQgRAAgPgUg");
	this.shape_263.setTransform(240.1,231.3);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#73A93A").s().p("AgkAVQAGgeAXgMQAKgJATAJQATAIgFALQgEgLgWAHQgUAHgPANIAkgQQAUgGADAGQgEgBgGAIQgJAMgJAFQgGAEgLAAQgMAAgNgFg");
	this.shape_264.setTransform(299,182.8);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#73A93A").s().p("AgNAIQgIgTALgWQASAKAGARQAHANgGAaIgKgXQgGgQgGgQQACASAIAQIAKAWQgSgHgIgTg");
	this.shape_265.setTransform(301.8,177.9);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#73A93A").s().p("AgIgFQAHgNAKgCIgHANQgEAJgCAMQAEgLAEgJIAGgNQACATgDADQgEAMgLAGQgGgOAEgMg");
	this.shape_266.setTransform(291.7,201.2);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#73A93A").s().p("AALAbQgMgFgIgIQgQgOAAgbIASAUIAZAaQgJgQgOgOIgSgSQAXAAANANQAKALACASQABAKgBAHIgOgDg");
	this.shape_267.setTransform(295.8,201.7);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#73A93A").s().p("AgMgHQAFgOASgLIgJAWQgFAQgEAQIAMgfIAIgWQAHAWgHAQQgFARgSAJQgKgVAIgTg");
	this.shape_268.setTransform(299.7,192.9);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#73A93A").s().p("AgNAHQgHgRAJgVIAHAXQAEARAIANIgJggIgIgWQARALAGAQQAGAPgIAXQgSgGgHgUg");
	this.shape_269.setTransform(302.9,192.5);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#73A93A").s().p("AgXABQAAgXAQgTQAHgJAGgEIAIATQAJAVAAAOQABAXgSAgIgDglQgDgdACgZQgFAYADAeIADAlQgYgZgCgdg");
	this.shape_270.setTransform(278.8,228.8);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#73A93A").s().p("AgVASIAOgMQAHgGAIgEIAHgEQgNACgKAJIgOANQACgSANgLQAOgKAQALQgHATgLAGQgFAGgLAAIgKgBg");
	this.shape_271.setTransform(241.3,152.6);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#73A93A").s().p("AAAAOQADgVABgTQgEASgCAVIgFAbIgGgRQgEgOABgKQADgZAUgOQANAXgDAUQgBAOgKAMQgGAKgFACQAFgWAAgFg");
	this.shape_272.setTransform(239,149.8);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#73A93A").s().p("AgEAOQgRgIABgTQAQgCAGADIATAMIgPAAQgLAAgJgIQAHAKANAAIAPgCQgBAEgGAFQgGAGgIAAIgEgBg");
	this.shape_273.setTransform(238.5,167.2);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#73A93A").s().p("AgNgQQAJgJALgDQAKgDAGABIgSASQgNAOgHASQAKgQAMgMIARgUQgCAcgLALQgKAQgWAEQgGgbAOgUg");
	this.shape_274.setTransform(238.8,171.9);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#73A93A").s().p("AAAANQgMgCgIgLIAOAAIAVABIgUgCIgOgBQAKgLAKABQAMACAIAMQgLALgKAAIAAAAg");
	this.shape_275.setTransform(249.2,174.4);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#73A93A").s().p("AgDARIASg0QgOAWgJAcIgNAkQgJgqAIgUQAIgVASgMQALgGAIgBIADAWQACAZgGAPQgGARgQANQgKAJgIACIAPgjg");
	this.shape_276.setTransform(247.9,168.6);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#73A93A").s().p("AACAHQgBgMgEgKQADAKAAAMIACAQQgKgOAAgHQgDgJAGgPQALAFAEAPQACAOgJALg");
	this.shape_277.setTransform(276.7,142.6);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#73A93A").s().p("AgFAUQgSgIgKgXQAVgQARAJQAPAGAMAXIgWgIQgQgHgQgEQAPAIAQAGQAVAHAEgBQgFAGgMADIgLABQgGAAgFgCg");
	this.shape_278.setTransform(269.9,150.6);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#73A93A").s().p("AgFAMQgJgIgEgRIAMALIATAMQgIgIgJgGIgOgKQAPgFAJAIQALAKACARIgKABQgJAAgFgFg");
	this.shape_279.setTransform(280.3,148.5);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#73A93A").s().p("AgfAhIAXgVIAeghQgRANgQAQIgWAXQAGgkANgNQAUgUAcAHQgEAigQAQQgOAPgUAAIgLgBg");
	this.shape_280.setTransform(283.9,139.3);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#73A93A").s().p("AgCAGQgHgEgBgHIAIAFIAJAEIgJgGIgIgEQAJgDAEADQAHAEACAIQgFACgEAAQgDAAgCgCg");
	this.shape_281.setTransform(272.6,161.3);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#73A93A").s().p("AgmAwIAdgdQAUgaAQgZQgUAVgUAZIgbAfQAGguAPgUQATgcAoACQACAtgVAaQgNAQgUAGQgKACgIAAIgIAAg");
	this.shape_282.setTransform(315.5,133);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#73A93A").s().p("AgLAGQgEgPAIgPIAEATQADANAHAKQgGgLgCgNIgFgSQANALADAKQAFAIgDAUQgOgBgJgSg");
	this.shape_283.setTransform(282,207.5);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#73A93A").s().p("AggAhQgQgFgJgJIAogJQAfgKAagNQgbAHggAJIgmAMQAZgnAYgJQAegNAkAbQgRApghANQgIADgHAAQgMAAgNgFg");
	this.shape_284.setTransform(267.3,188.1);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#73A93A").s().p("AgBASQgUgGgIgTIAUAHQAPAEAOgBQgOgDgOgDIgUgFQAVgMAIADQARADAMASQgOAOgPAAIgCAAg");
	this.shape_285.setTransform(311,146.2);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#73A93A").s().p("AgMAJQgIgMADgbIAbAzQgFgPgIgRIgMgUQARACALAVQAJAPgGAZQgUgEgIgTg");
	this.shape_286.setTransform(308.9,149.2);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#73A93A").s().p("AADAVQgBgigDgdIAAA/IAAArQgYgjgBgbQgCgiAbgfQAaAbACAkQABAUgMAWQgIAPgIAHQADgmAAgFg");
	this.shape_287.setTransform(306.2,135.3);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#73A93A").s().p("AAOAzIgNgHQgSgOgFgWQgDgOADgTIAGgYIALAiQAFAaAKAWQgEgLgHgnQgBgIgFgKIgHgQQAHABAKAMQAQAOADASQAEAOgEAWIgDAWIgFgBg");
	this.shape_288.setTransform(263.5,216);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#73A93A").s().p("AAAARQgJABgSgOIATgCQAOgCANACQgNgEgOACIgUACQADgDAHgGQAJgIAJgBQASACALARQgOAOgNAAIgCAAg");
	this.shape_289.setTransform(325.1,151.4);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#73A93A").s().p("AgFAOQAMgUAKgSQgOAPgMATIgQAaQgCgjALgNQAQgYAZgBQAEAigNARQgJANgMAHQgLAEgHAAg");
	this.shape_290.setTransform(323.8,147.3);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#73A93A").s().p("AgQAUQgKgNgCgSQgCgOACgJIARAbQANAVARALQgPgPgMgUIgTgZQAdAHAKAOQAQAPACAjIgLAAQgTAAgQgQg");
	this.shape_291.setTransform(318.7,161.5);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#73A93A").s().p("AADAYQgJgFgFgKQgHgQAHgUQAQAHAHAPQADAFABALIAAAPIgLgRIgMgaQAEAOAGANQAAACAMAPIgCABQgEAAgGgEg");
	this.shape_292.setTransform(255,129.2);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#73A93A").s().p("AgNgFQADgOAKgHQAGgGAGAAIgKAUQgFARABARQACgRAEgQIAKgUQACAegCAEQgDAPgNAPQgQgRAFgVg");
	this.shape_293.setTransform(260.7,136.3);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#73A93A").s().p("AgMAQQgIgLgDgOQgCgMABgHIAQAWQALAQAOAKIgXgdIgQgUQAYAFAJALQAPAOgBAdIgGAAQgTAAgMgOg");
	this.shape_294.setTransform(264.1,136.2);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#73A93A").s().p("AgjAWIAagNQASgKAQgNIg8AiQAIgdATgLQARgMAbAKQgGAegVAOQgJAGgLAAQgLAAgNgGg");
	this.shape_295.setTransform(272.2,123.7);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#73A93A").s().p("AgSAmIAPgYIAPgnQgKAQgIAVIgOAYIAAgTQAAgQAEgJQAGgPAOgJQAIgFAHAAQABAIAAAJQABATgFALQgFAOgMAIQgKAGgGAAIgBAAg");
	this.shape_296.setTransform(269.3,121.7);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#73A93A").s().p("AgRAiIgCgMQgDgVAIgLQAGgKAIgIIAOgJIgKAaQgJARgGATIASgiIAJgbQADAGABANQACARgIALQgGAKgLAJIgMAHIgCgDg");
	this.shape_297.setTransform(281.5,112.3);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#73A93A").s().p("AgMAIQgGgPAIgTIAGAUQAEAPAKAKQgIgLgEgPIgHgUQARANADAJQAHAKgDAWQgQAAgLgTg");
	this.shape_298.setTransform(284.3,111.3);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#73A93A").s().p("AgYAiQgQgEgHgGQAfgKAEgCQAagNATgRIhQAmIANgUQAMgSAMgIQAYgQAiAPQgIAngbARQgLAHgMAAQgGAAgIgCg");
	this.shape_299.setTransform(297.5,101.7);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#73A93A").s().p("AgVAkIAKgIQAGgGADgHQAKgUAGgTIgTAlQgDAGgGAGIgIAKIACgTQACgQAEgHQAGgOAOgKQAIgEAGgBIACARQACATgGANQgHAPgOAHQgHACgFAAQgEAAgCgBg");
	this.shape_300.setTransform(290.1,100);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#73A93A").s().p("AgEARQAMgYAHgYIgXAtIgQAgQgGgnALgSQANgbAcgJQALAkgNAZQgIAQgOAKQgLAGgJACg");
	this.shape_301.setTransform(276.5,103.3);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#73A93A").s().p("AgFALQAIgUAMgPQgPAMgIAVIgMAbQgDgHAAgNQAAgQAHgPQAQgVAYABQACAggNAOQgHAOgYAMg");
	this.shape_302.setTransform(273.1,96.8);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#73A93A").s().p("AgPAAQAAgUAPgSQAQASAAAUQABAPgPAXIAAgaQgCgTAAgSQgBASABAUIABAaQgPgQgBgXg");
	this.shape_303.setTransform(267.9,97.4);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#73A93A").s().p("AgFANQgMgJgEgRIAOALIAWAMIgUgPIgPgKQARgEAJAHQAMAIAEATQgGADgHAAQgIAAgGgFg");
	this.shape_304.setTransform(264.4,43.4);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#73A93A").s().p("AgVAGQgIgHAAgFIAJAFQAGACAFgBQAQACANgCQgOAAgPgCQgEABgGgDIgIgEIAMgFQAJgEAGAAQAPgBAPASQgMARgSABIAAAAQgLAAgKgMg");
	this.shape_305.setTransform(272.2,82.4);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#73A93A").s().p("AAEAlQgPgJgGgUQgGgZAUgXIAAAeQADAYALAPQgKgRgBgWIgBgdQAPAWADAPQADAIgBASIgBARQgGAAgIgEg");
	this.shape_306.setTransform(269.8,85.6);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#73A93A").s().p("AAKAZQgNgBgIgLQgMgNAEgYQAJAQADAEQAIAOAMAHQgKgKgIgNIgMgSQARAEAJAMQAIAJAEAWQgDACgGAAIgCAAg");
	this.shape_307.setTransform(286.2,67.1);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#73A93A").s().p("AgmACIAaAAQAVAAARgCQgRgBgVAAIgaABQATgVATgBQATgBAUAXQgQAXgXAAIAAAAQgVAAgRgVg");
	this.shape_308.setTransform(288.4,64);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#73A93A").s().p("AgWAhQAGgLAGgIQARgaASgWQgVARgSAbQgHAIgFAMIgHATQgFgJACgWQABgaAOgRQAWgbAkADQABAugUAWQgKAMgQAJIgWAKg");
	this.shape_309.setTransform(293.7,49.8);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#73A93A").s().p("AACASIgCg2QgBAZAAAdIAAAlQgVghAAgVQgBgUAOgUQAHgKAEgFQAFAHAFAKQALAVAAAQQABARgKATQgIAOgGAFIACglg");
	this.shape_310.setTransform(289.5,50.6);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#73A93A").s().p("AgJAMQAPgXAPgRQgTANgOAYQgGAGgEALIgGAPQgEgIABgRQABgWAMgQQATgYAgAFQgBAngRASQgJALggAQg");
	this.shape_311.setTransform(232.7,137.5);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#73A93A").s().p("AACAdIAEg/IADgbQgEAKgDAQQgEAggCAgIgCA8QgOgWgFgLQgOgfACgbQACgmAcgdQAHgKAJgGIAIgEIADAKIAIAWQAMAkgCAYQgBAbgRAdQgMAVgKAKIAEg9g");
	this.shape_312.setTransform(278.9,56);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#73A93A").s().p("AAAAPQgMAAgMgOQAMgOAMgBQAQABAJANIgRAAQgMAAgLAAIAoABQgNAOgLAAIgBAAg");
	this.shape_313.setTransform(249.8,85.3);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#73A93A").s().p("AAHAZQgKgFgGgGQgQgOgBgeQAYgFAQAQQALALACATQABASgEADIgFgNQgDgJgFgFQgNgQgPgKIAZAdQAFAEADAJIAGALQgDgCgMgFg");
	this.shape_314.setTransform(249.3,81.5);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#73A93A").s().p("AgfAMIAWgGQARgGAOgIQgPAGgQAEIgXAHQAPgXAMgEQARgHAUANQgJAYgSAHQgFACgGAAQgNAAgMgJg");
	this.shape_315.setTransform(260.8,70.6);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#73A93A").s().p("Ag4A5IAogkQAfgeAagcQgeAVgfAeIgnAoQABgTAGgVQAKgfAUgSQAfgeAzALQgDA7gjAfQgWAWgpAAIgPgBg");
	this.shape_316.setTransform(265.9,57.1);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#73A93A").s().p("AgVAEQgFgcATgdQAZAUAFAfQADAdgUAaIgDgkQgCgdgFgYIAEA1IADAlQgWgZgCgZg");
	this.shape_317.setTransform(258.2,57.5);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#73A93A").s().p("AgJAIQgIgLADgUQAQACAIAOQAJAMgEATIgJgRIgPgWIANAYIAKAPQgQgEgHgMg");
	this.shape_318.setTransform(254.3,43.7);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#73A93A").s().p("AgSAEQgDgXARgaQAUARADAbQADAYgQAWIgDgfQgDgXgCgVQABAWABAXIAEAfQgTgWgDgUg");
	this.shape_319.setTransform(255.6,40);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#73A93A").s().p("AglAPIAbgIQAUgHAQgKIgmANIgZAKQANgbATgHQASgJAZAPQgKAcgWAKQgGADgGAAQgPAAgQgLg");
	this.shape_320.setTransform(266.5,38.5);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#73A93A").s().p("AgEAWQALglALgeQgRAbgKAlIgQAtIgGggQgDgaAGgTQAJgbAZgQIAQgIIAHgBIADAcQADAegHATQgHAWgUARQgNANgKACQAQgkACgIg");
	this.shape_321.setTransform(263.1,33.4);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#73A93A").s().p("AgIARQgJgIgFgMQgEgKAAgGIARAPQANALAOAGQgNgJgMgKIgRgPQAXgCAHAJQAQAKAFAXQgJADgJAAQgJAAgIgFg");
	this.shape_322.setTransform(248.7,28.1);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#73A93A").s().p("AgfAjIAXgWQARgSANgRQgQAOgRARIgWAYQABghASgSQASgVAeAGQgCAigSASQgOAQgZAAIgGAAg");
	this.shape_323.setTransform(249.6,22.8);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#73A93A").s().p("AAHBDQgTgPgSgcQgMgYgEglIgDglIAIAAQAMAAAMADQAjALASAiQAOAaAAAlQAAAggKgEQAEAJgEgHQgFAIgIAAQgIAAgMgIgAAMAbIAPAeQAHAPAFgFIgCgEIADACIgVgrQgUgugdgcQAWAiAUAtg");
	this.shape_324.setTransform(242.1,8.5);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#73A93A").s().p("AgRAZIANgRQAHgOAJgLQgLAJgHAOIgNARIABgOQACgLAFgIQAHgMAMgCQAHgBAFACIgDANQgCALgFAIQgFAIgJAFQgHADgEAAIgCAAg");
	this.shape_325.setTransform(251.6,11.3);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#73A93A").s().p("AgBAbQABgIAAgGQADgUgDgRQAAASgBATIgGAXIgFgPQgDgNAAgIQABgSAOgTQAQAQAAAWQAAAPgKAMQgGAJgFABg");
	this.shape_326.setTransform(249.1,10.9);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#73A93A").s().p("AAAAIQADgKABgMIgGAVIgGAOQgDgSADgFQADgMALgHQAHAOgEALQgGAQgKACg");
	this.shape_327.setTransform(229.5,45.7);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#73A93A").s().p("AgaAZIALgDQAIgDAEgGQAOgOAIgSQgMAQgNANQgDAFgHADIgKAFIAHgQQAEgLAGgHQAKgRAZgCQAEAdgOASQgKANgPAAIgDABQgMAAgCgGg");
	this.shape_328.setTransform(230.6,48.8);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#73A93A").s().p("AggAIQAKgZAWgCQANAAALAMQAIAHABAHIgKgGQgHgBgFAAQgSgCgOAGQAPgEAQACQAGgBAGAEIAKAEIgOAGQgKAEgIAAIgBABQgNAAgSgMg");
	this.shape_329.setTransform(223.1,31.3);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#73A93A").s().p("AgUATQALAAAGgKQAKgKAHgNIgSAVQgGAIgJACQADgBACgKQACgIAFgHQAIgNATAAQACAVgLANQgFAKgMABIgFAAQgIAAgBgEg");
	this.shape_330.setTransform(231.1,26.9);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#73A93A").s().p("AgFBLQAIgRAAghQgBgpgDgiQgBAjABAoQAAAhgHAOQAAgFgLgWQgLgXgBgTQgCgZAQgeIAMgRQADgEACgBIADAHIAKAQQAQAaACAZQADAYgQAcQgOAXgHAAIgCAAg");
	this.shape_331.setTransform(228.1,23.6);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#73A93A").s().p("AgHAHQgIgJACgSQANABAJALQAEAIABAJIgCALIgHgPQgFgLgIgIQAGAKAFAKIAIAPQgOgHgEgHg");
	this.shape_332.setTransform(189.1,53);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#73A93A").s().p("AglAXIAagOQAUgLASgMQgTAIgUALIgaAPQALgfATgLQATgNAcAOQgIAfgWANQgJAGgLAAQgMAAgOgGg");
	this.shape_333.setTransform(195.8,61.6);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#73A93A").s().p("AgOgQQAJgNAOAAQAMAAAEAEIgKAEQgHAEgEAEQgOAOgHASQAKgQANgMQAEgEAGgEIAKgGIgHAQQgEALgGAGQgJAPgXAFQgGgcAPgSg");
	this.shape_334.setTransform(218.2,125);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#73A93A").s().p("AAAAxQgSgPgGgVQgKgiASglQAgASAJAhQAFAOgCAWIgDAcIgIgRQgGgLgCgJIgTg6QAEAdAKAfQADAJAGALIAKARQgJAAgOgKg");
	this.shape_335.setTransform(210.3,62.5);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#73A93A").s().p("AgDAbQgagGgOgfQATAJAKABQAXAHAUgFQgUgBgWgFIgegJQAbgRASAFQANADAPAMIAOAKQgEAIgJAHQgOAMgQAAIgEAAg");
	this.shape_336.setTransform(187.2,110.2);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#73A93A").s().p("AgfACIAVAAQARgBAPgBQgPAAgRAAIgVAAQANgSASAAQASAAAPASQgPATgSAAIAAAAQgOAAgRgRg");
	this.shape_337.setTransform(193.3,88.4);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#73A93A").s().p("AgBAjQgSgCgSgNIgUgTIAmABQAgADAbgEQgbgBgfgDQgHAAggACQAFgKAPgKQAVgPARADQASACAWARIASAOQgHAKgKAJQgVAQgTAAIgDAAg");
	this.shape_338.setTransform(193.4,99.2);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#73A93A").s().p("AgLAPQgOgPAAgcQAYgDANARQAOAOAAAcIgRgUQgNgPgNgMIAXAdIASATQgYAAgLgOg");
	this.shape_339.setTransform(179.1,101.6);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#73A93A").s().p("AgQARQgQgUAFgkQAbABARAXQAMAQAAAkIgSgaIgdglQALAUAOAVIAUAZQgbAAgQgXg");
	this.shape_340.setTransform(175.4,108.6);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#73A93A").s().p("AgNAnQglgUgPgzQAtgZAiAUQAeAQAWAxIgsgVQgjgQgfgNQAcAUAjARIAuASQgMAIgTAEQgKACgIAAQgQAAgNgIg");
	this.shape_341.setTransform(157.8,100.8);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#73A93A").s().p("AgFAfQgKgNgCgOQgCgNAGgRIAGgQQAWAPADAZQACALgFAPIgGASIgFgcQgEgWgDgUIADArQABAKAGARQgFAAgHgLg");
	this.shape_342.setTransform(176.6,63.2);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#73A93A").s().p("AgDANQgLgFgIgSQAPgKANAHQANAIAEASIgPgLQgKgHgMgCQALAFAKAHIAPAKQgHACgGAAQgJAAgDgEg");
	this.shape_343.setTransform(187.2,58.8);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#73A93A").s().p("AgaAXIATgOQAPgKALgNIgbAUIgTAPQAEgYAQgMQALgLAYAEQgCAZgRAPQgIAGgPAAIgMgBg");
	this.shape_344.setTransform(195.6,41.6);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#73A93A").s().p("AgDAaQgNgDgNgNIgNgOIAdAEQAWAEAUABQgTgFgXgEQgXgEgHABQAFgHANgGQAQgIAMADQAYAFARAbQgTAUgUAAIgIgBg");
	this.shape_345.setTransform(196.8,46.5);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#73A93A").s().p("AAAAKQgJgBgHgKQAIgJAIAAQAKACAHAJIgMgBIgQAAIAQABIAMABQgJAJgIAAIAAgBg");
	this.shape_346.setTransform(188.5,33.9);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#73A93A").s().p("AgUAeIAQgTIASgfQgMAMgJARIgOAUIABgSQACgMAFgKQAIgNAOgEQAIgCAFABIgBAPQgCAPgGAKQgGALgMAGQgIACgFAAIgCAAg");
	this.shape_347.setTransform(195.2,29.1);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#73A93A").s().p("AAAAUQADghAEgdQgHAcgDAhIgDArQgXggAEghQAFgoAggSQAFAJAEAOQAIAZgDARQgDAggaAag");
	this.shape_348.setTransform(191.9,24.3);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#73A93A").s().p("AAEATQgTACgOgVQAQgQANgBQAFgBAJADQAGACADgFQABALgMAFQgQACgOAAQAOAEAQgEQAHgBAEgFQADgHgBgFQAEAAABAGQAAAGgEAGQgHATgNAAIgCAAg");
	this.shape_349.setTransform(148.4,40.6);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#73A93A").s().p("AgJAbQgPAAAAgGQASgFADgEQANgNAIgPIgXAYQgDAFgGACIgKAEQADgDAEgLQAEgJAFgGQAHgKANgEQAIgCAFAAIgBAQQgCAOgIALQgIAMgNAAIgCAAg");
	this.shape_350.setTransform(158.2,28.1);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#73A93A").s().p("AgBAUQgGgCgKgHQgKgHgDgBIAJgCQAHgBAGAAQARACAOAIQgNgKgSgCQgFgCgIADIgKACQAAgEALgJQANgKALADQAQAFAIAQQAEAIAAAHIgMACIgOACIgHgBg");
	this.shape_351.setTransform(159,31.9);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#73A93A").s().p("AgRAeIAIgHIAHgKQAJgPAEgRQgHAPgIAOIgOASIACgQQABgMAEgGQAIgQATgHQAIAXgKASQgGAMgLAEQgHACgEAAIgDAAg");
	this.shape_352.setTransform(163.3,41.2);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#73A93A").s().p("AgFATIAZg2QgRAVgNAdIgRAlQgJgpAOgbQARgeAigHQAJArgQAaQgMAYgiANg");
	this.shape_353.setTransform(143.6,10.3);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#73A93A").s().p("AgrABQAUgZAXgBQAPgDAcAUIgdAEQgWAEgUAAQAUAEAXgEIAdgFQgEAGgJAJQgOANgPADIgCAAQgXAAgUgZg");
	this.shape_354.setTransform(132,17.7);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#73A93A").s().p("AATAzQgYgIgOgOQgegdgHg7QAygQAjAkQAWAUAFAmQAFAlgKAIQgCgYgYgeQgeghgfgTQAbAaAcAhQAYAdAEASQgEgFgYgIg");
	this.shape_355.setTransform(133.7,6.5);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#73A93A").s().p("AgaAZQARgLADgEIAYgcQgCgDgYAcIgKAJIgJAHIAFgRQAEgLAHgJQAJgMAQgBIAKAAIAEACIgEAPQgFAPgHAJQgIALgNACIgIABQgIAAgBgDg");
	this.shape_356.setTransform(147,19.4);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#73A93A").s().p("AgzAEQAXggAbgCQAcgDAZAbIgjACQgbAEgYADQAYABAbgDIAjgEQgYAfgZADIgDAAQgcAAgXgbg");
	this.shape_357.setTransform(135.1,24.3);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#73A93A").s().p("AgbAKQAJgTAPgGQAKgGAUAJIgtASQAOgCANgFIATgJQgIAUgPAGQgFACgEAAQgLAAgMgIg");
	this.shape_358.setTransform(144,33.8);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#73A93A").s().p("AgEgFQAEgIAKAAIgHAJIgJANIAKgMIAHgJQAAAMgFAGQgGAIgKAAQgBgNAHgGg");
	this.shape_359.setTransform(154.8,198);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#73A93A").s().p("AgQgPQAPgYAbgBIgTAaQgOAVgKAVQAOgRANgWIASgcQADAkgOATQgPAXgcACQgFgjAPgVg");
	this.shape_360.setTransform(161.4,188.4);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#73A93A").s().p("AgEARQgRgIgGgVQAUgKAMAIQANAEAKAUIgTgIQgOgEgMgGQALAIAOAFIAUAHQgMAHgLAAQgFAAgEgCg");
	this.shape_361.setTransform(147.1,185.8);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#73A93A").s().p("AgMgXQAUgOAdANIgcAOQgVALgNATQAQgPAUgKIAagQQgKAegSAMQgJAIgTACIgRABQgCgkAagTg");
	this.shape_362.setTransform(148,190.8);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#73A93A").s().p("AgIANQgJgIgBgMQgCgHACgFQAQACAHAIQAKAHAFASIgPgLQgKgHgIgKQAGAMALAIIAPAJQgGADgGAAQgHAAgIgHg");
	this.shape_363.setTransform(151.2,154.5);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#73A93A").s().p("AAAAPQAEgWAAgTIgHAoIgIAaQgHghACgIQADgWASgRQAQAWgEAXQgCAPgMAMQgGAHgGACIAJgag");
	this.shape_364.setTransform(155.8,153.9);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#73A93A").s().p("AAAAUQgLgBgMgMQgGgGgDgDQAQgSASABQANACAKANQAIAJgBAGIgJgHQgGgEgGAAQgRgDgPACIAgAEQAFABAGAEIAJAEIgOAFQgJADgHAAIgBAAg");
	this.shape_365.setTransform(153.5,168.9);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#73A93A").s().p("AgHAiQgLgPgCgPQgCgOAFgUIAGgTQAIADAFAIQAQAPADAUQADAWgRAeIgEgiQgDgagGgWQAEAXACAaIAFAiQgFgFgHgLg");
	this.shape_366.setTransform(158.1,166.2);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#73A93A").s().p("AgoAkIAegWQAWgRARgVIhHA5QAKgpASgPQAWgVAjAIQgEApgXAUQgQAOgUAAQgKAAgKgDg");
	this.shape_367.setTransform(171.3,182.7);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#73A93A").s().p("AgEATIAWg7QgQAZgLAgIgPAnQgLgsALgaQAPgkAlgHQACALAAAOQACAcgIARQgHATgRANQgMAKgKADg");
	this.shape_368.setTransform(174.1,197);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#73A93A").s().p("AgKgKQAGgJAKgCQAIgCAEADIgHAEIgIAIQgJAKgGANQAIgLAJgKIAOgMQgIAWgDAFQgIAMgRACQgDgVAKgMg");
	this.shape_369.setTransform(145.9,160.4);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#73A93A").s().p("AgRgKQAFgNAMgKIAOgLIgLAdQgIAYgFAVQAJgTAIgYQAEgKAFgVQAEAGACAPQADAUgGANQgGAPgOALIgOAJQgNgfALgYg");
	this.shape_370.setTransform(166,149.8);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#73A93A").s().p("AgNgNQAIgPAcgJIgRAaIgWAlQAOgPALgUIAQgaQAGAdgPAWQgPAUgaACQgEggAQgTg");
	this.shape_371.setTransform(137,157);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#73A93A").s().p("AgqAAQAVgWAVgCQAKgCAPAHIARAJIgcAHQgWADgTABQATAEAXgFQADAAAZgIQgDAIgJAJQgNAPgQACIgCAAQgXAAgTgag");
	this.shape_372.setTransform(133.3,153.9);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#73A93A").s().p("AgTARQACgRALgKQAJgKAQAEIgOALQgKAHgHAJIASgOIAOgLQgHATgHAFQgGAIgLAAIgIgBg");
	this.shape_373.setTransform(114,189.9);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#73A93A").s().p("AgKAMQAJgNAMgNIAMgLIgNAJQgNALgKANIgUAdQgCgKACgPQAEgUALgOQAXgXAeAJQgFAmgRAPQgMAQggAGg");
	this.shape_374.setTransform(141.4,170.3);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#73A93A").s().p("AgmAGQAQgZAVgDQALgDAcAPIgaAGQgTAFgSADQATABATgFIAagIQgLAYgZAHIgDABQgUAAgSgSg");
	this.shape_375.setTransform(104.9,194.1);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#73A93A").s().p("AAAAHQADgJACgLIgHATIgGAOQgEgOAFgJQADgLAMgGQAGAOgFAMQgEAIgMAHg");
	this.shape_376.setTransform(74.9,153.3);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#73A93A").s().p("AgPAzQgRgbACgYQADgbARgYQAJgMAGgIQAHAIAHAPQAOAdgDAWQgBASgJAVIgMAcIgEgVQgDgOABgLIABgyIABgWIgEAVQgCAbAAAYQgBALADAQIAFAVQgGAAgOgVg");
	this.shape_377.setTransform(71.6,146.9);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#73A93A").s().p("AAAAQQgNAAgOgQQANgQAQABQARADAJAQIgTgEQgNgCgOACQANAAAOADIATADQgOALgLAAIgDgBg");
	this.shape_378.setTransform(66.7,152.5);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#73A93A").s().p("AAAAeQgegDgSghQAagYAYACQAQABAQAPQALAJAEAIQgagFgHAAQgagCgWgBQAWAFAaACIAhAEQgcAWgUAAIgBAAg");
	this.shape_379.setTransform(69.6,161.9);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#73A93A").s().p("AgVAXQgBgXAMgOQAMgMAUAFIgRANQgMAJgHAOQAJgMAMgIIAPgOQgGAXgIAHQgIAMgSAAIgDAAg");
	this.shape_380.setTransform(28.3,167.3);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#73A93A").s().p("AgGAZQgXgKgMggQAagSAYALQAaAOAHAgIgbgRQgVgNgVgDQATAJAVALIAcAPQgSAFgMAAQgLAAgGgEg");
	this.shape_381.setTransform(4.3,162.8);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#73A93A").s().p("AgDAJQAHgNAGgNIgPAYIgKASQgEgUAJgNQAJgPARgCQAEAWgKAMQgIAPgQACg");
	this.shape_382.setTransform(41.6,155.1);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#73A93A").s().p("AANAcQgNgCgJgIQgRgOgFgeQAagJARAQQAMAJAFAQQAEAOgBAIQgNgRgHgFQgQgOgQgKIAyAwg");
	this.shape_383.setTransform(19.1,157.8);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#73A93A").s().p("AgeAfQgDgdALgSQAJgQAPgLIATgNQgBAKgOAcQgOAdgKAbQAPgYAOgdQANgZAAgPQAGAFACAZQABAZgKARQgLASgSAMIgTAKQgEgKgBgQg");
	this.shape_384.setTransform(7.5,173.6);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#73A93A").s().p("AAAAOQADgWADgTQgGASgEAWIgFAbQgMgaAFgRQAFgZAUgMQANAZgFAUQgDAOgKALQgFAIgGADg");
	this.shape_385.setTransform(78.6,155.9);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#73A93A").s().p("AgDALQAHgPAGgQIgQAcIgKAWQgCgcAGgJQAJgSASgFQAGAYgIAOQgJASgSAFg");
	this.shape_386.setTransform(81,162.8);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#73A93A").s().p("AgcgQQAIgUAUgQQAUgQAAgBQACAHgFAOIgKAaIgcBIQATgeAPgmIAKgcQAEgPgEgMQAMAIADAeQAEAhgMAWQgMAagYAQQgOAIgLAEQgPg3ASgjg");
	this.shape_387.setTransform(29.9,191);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#73A93A").s().p("AAAAOQADgVADgUIgKAnIgGAcQgLgbAFgRQAFgXAVgNQANAYgGAWQgGAWgTANg");
	this.shape_388.setTransform(77.7,185.3);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#73A93A").s().p("AAAAIQABgNAEgMQgFALgBAOIgCASQgDgDgCgHQgEgLACgIQAEgQANgHQAIASgFALQAAAHgMARg");
	this.shape_389.setTransform(36.8,153);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#73A93A").s().p("AgDArQgQgPgFgTQgFgRAEgaQACgNAEgKQAiAMAKAkQAHAagNAoIgMgoQgHgfgMgZIAPA7QACAKALAdQgKgFgJgLg");
	this.shape_390.setTransform(28.8,156.5);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#73A93A").s().p("AgGAKQAMgNALgNQgNAKgMANIgQATQAAgaAOgNQANgQAWAEQgBAagNAOQgLAMgXAAg");
	this.shape_391.setTransform(86.5,170.9);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#73A93A").s().p("AgMAGQgDgGgBgNIAAgPIAMATQAGAPAFAPQgCgRgHgPIgNgTQAFgBAJAFQAKAGAFAMQAHATgKAVQgRgKgGgQg");
	this.shape_392.setTransform(46.9,188.8);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#73A93A").s().p("AgOAZQgHgSAFgOQAHgUAVgMIgKAaQgGAUgBATQAEgSAGgUIAIgaQAKAYgHATQgGATgRAQQgEgGgDgJg");
	this.shape_393.setTransform(42.9,189.5);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#73A93A").s().p("AgBAIQAFgJgBgMQgBAMgFAIIgGANQgCgSAEgDQABgLAKgIQAIAMgDAOQgIAQgJAAg");
	this.shape_394.setTransform(45.2,181);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#73A93A").s().p("AgWAIQgIgeATggQAaASAIAeQAEAQgGAVQgEAQgGAIQgDgegCgIQgGgdgHgYQADAaAFAdIAHAkQgYgZgGgWg");
	this.shape_395.setTransform(35.7,177.4);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#73A93A").s().p("AgGgHQAGgLAMAAIgJAMIgLATQAHgIAFgIIAJgOQABAQgHAJQgHAKgMAAQgCgQAIgJg");
	this.shape_396.setTransform(21.8,181.6);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#73A93A").s().p("AgcAUQABgYAUgOQASgJASANIgVAIQgJAFgKAHIgIAHIAJgFQAKgIAJgCIAUgKQgKAXgNAGQgGAGgMAAQgHAAgJgDg");
	this.shape_397.setTransform(18.5,180.5);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#73A93A").s().p("AgPAVQgTgVABgkQAfgDARAVQAQAQAEAkIgXgYIgigiQANAUASASIAYAXIgKAAQgXAAgPgQg");
	this.shape_398.setTransform(19.7,173.6);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#73A93A").s().p("AgLgHQAEgLAIgFQAIgEAEACIgLAPQgGAMAAAPQACgOAGgMIAKgPIgBANQAAAKgCAEQgFAMgLAMQgNgQAHgSg");
	this.shape_399.setTransform(68.2,194.5);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#73A93A").s().p("AghAVQAGgcAUgNQAQgJAYALIgYALQgRAHgOAOQAPgJASgIIAXgNQgMAdgOAGQgIAGgMAAQgJAAgMgEg");
	this.shape_400.setTransform(64.8,192.4);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#73A93A").s().p("AgMgHQAFgMAJgGQAIgFAFABIgGAIIgGAKQgHAPgCAQQAFgPAGgOIALgSQAAAZgDAHQgGAPgQAKQgKgTAHgSg");
	this.shape_401.setTransform(50.6,237.1);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#73A93A").s().p("AgZAFIASgDQANgCAMAEQgLgGgOACIgSADQAKgRAPgBQANABAIANQAEAEABAGIgKADQgLAEgFAAIAAAAQgMAAgNgLg");
	this.shape_402.setTransform(144,240.2);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#73A93A").s().p("AgNAJQgIgNAGgbIAKAWQAHASAIAOQgFgQgIgRIgLgWQASAEAKAUQAJASgIAXQgTgGgJgSg");
	this.shape_403.setTransform(141.7,243.8);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#73A93A").s().p("AgBAOQgHAAgQgPIARABQAMABAMADQgLgEgMgCIgSgBQALgOAPADQAPAEAIAQQgKAJgLAAIgFgBg");
	this.shape_404.setTransform(126.4,262.1);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#73A93A").s().p("AgQANQgOgRACgmQAdgBATAaQAOAZgIAiIgQggQgLgYgRgPQAOATALAXIARAeQgdgIgLgWg");
	this.shape_405.setTransform(125.2,267.1);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#73A93A").s().p("AgEAeQgLgPgBgOQgBgHACgOIADgRIAFALQAEAHABAHQACAUACATQABgTgDgVQAAgHgEgIIgGgLQAFgBAIAKQANALABARQACANgIAPQgDAJgEAFQgEgDgEgHg");
	this.shape_406.setTransform(134.9,253.9);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#73A93A").s().p("AgPAXQgMgNgIgVIgKgdIAQAMQALAHAGAHQAZAWATAYQgPgdgagWQgGgIgMgHIgQgKQAJgFASABQAXACAQARQAcAdgHAxQgogCgTgYg");
	this.shape_407.setTransform(139.2,252.7);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#73A93A").s().p("AgJAQQgOgMgEgaQAWgHAPAOQAMAKAGAbIgSgRQgOgLgOgJQAMAMAOAMIATAPQgHACgGAAQgNAAgKgKg");
	this.shape_408.setTransform(127.4,249.8);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#73A93A").s().p("AgvAAQAXgbAYAAQAbgBAVAbIgggBQgaABgVABQAWADAZgBIAggCQgYAcgXAAIgBAAQgaAAgVgcg");
	this.shape_409.setTransform(122.6,255);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#73A93A").s().p("AgaAHIASgFQAOgCAMABQgMgCgOABIgSAGQABgGAGgFQAJgKAKgBQARABAKASQgPANgMAAQgHAAgTgJg");
	this.shape_410.setTransform(89,244.2);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#73A93A").s().p("AgoAOQANgcAWgJQALgGARAGQAMAEAFAGIgcAHQgUAGgSAJQATgEAVgHIAbgIQgUAbgPAHQgGADgHAAQgQAAgRgNg");
	this.shape_411.setTransform(79.1,243.6);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#73A93A").s().p("AAIASQgIgEgDgDQgKgIgIgTQARgLAPAMQAKAIABAOQABAMgCADIgEgJQgDgHgDgDQgLgMgNgDQANAGAJALQADADADAGIAEAJg");
	this.shape_412.setTransform(95.3,230.7);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#73A93A").s().p("AAAALIAGggQgGAOgDARIgFAVQgDgEgCgKQgDgNAEgJQAFgRAQgJQAKAUgGARQgEANgQANg");
	this.shape_413.setTransform(98.8,227.8);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#73A93A").s().p("AABAtQgPgNgJgTQgNgaAMgqQAhAIAPAiQAMAagLApIgPgmQgLgegPgXQAKAaALAeIASAlQgKgCgMgJg");
	this.shape_414.setTransform(87.8,223.8);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#73A93A").s().p("AgMAAQAAgNAMgSIAAAWQAAAPAAAPQABgPAAgPIgBgWQAOANAAASQAAASgOAOQgMgQAAgQg");
	this.shape_415.setTransform(103.6,240.7);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#73A93A").s().p("AgrApIAfgaIAqgqQgGADgJAHQgPANgPAPIgeAbIAHgdQAIgUAMgOQAQgSAZAAIARACIAGACIgHAZQgIAZgNAOQgOAPgVADIgMABQgJAAgFgDg");
	this.shape_416.setTransform(106.5,230.2);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#73A93A").s().p("AgQgOQAMgSAagHIgRAaQgLATgIAVIAWgmIAQgaQAFAegNAVQgMAUgaAGQgIgfAOgXg");
	this.shape_417.setTransform(45.1,235.7);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#73A93A").s().p("AAAAOQgMgCgLgOQAMgOANACQAPAFAHAPIgQgGQgLgDgMACQAMABALADIAQAFQgLAHgJAAIgEgBg");
	this.shape_418.setTransform(41.4,230.7);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#73A93A").s().p("AAGAYQgKgDgHgJQgKgPAFgWQASAEAHAOQAGAGAEAZIgNgQQgKgKgHgOQAEAQALAKIAOAPIgEABIgIgCg");
	this.shape_419.setTransform(75.5,228.9);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#73A93A").s().p("AgCASQAIgbAEgYIgQAxIgJAjQgEgHgDgQQgEgVAGgPQAGgQAOgPIAOgLQAEAHAEAMQAGAZgHARQgHAUgaAUg");
	this.shape_420.setTransform(79.8,226.8);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#73A93A").s().p("AgOATIALgMQAHgJAHgJQgIAHgHAJIgLANQAAgSAJgIQAHgLAPABQAAASgJAKQgHAJgKAAIgEAAg");
	this.shape_421.setTransform(48.7,226.4);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#73A93A").s().p("AgRAFQgGgVAOgbQAVAMAHAcQAEAVgOAaIgFgeQgEgXgGgUIAGAsIAHAdQgUgPgEgYg");
	this.shape_422.setTransform(45.2,223.1);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#73A93A").s().p("AgYAVQABgVAKgMQAFgHAKgIQAKgHACgEQAAAPgIANIgVAlQANgOAMgVQAIgOgCgRQAHABACAVQACAUgLANQgKANgOAGIgKADIgEACQgCgIAAgLg");
	this.shape_423.setTransform(28,229.4);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#73A93A").s().p("AgMAdQgQgMgMgWQgFgNgEgKQAJgFAMgCQAagFAPANQAOAJALASIALAaIgggTQgZgQgYgLQAVARAZAQQAIAFAaALQgHAGgRACIgIABQgQAAgMgJg");
	this.shape_424.setTransform(25.4,222.8);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#73A93A").s().p("AgFAKQgKgJgBgQQAOgDAJAJQAJAIACARIgMgMIgQgOIAPAQIAMALIgGAAQgLAAgFgHg");
	this.shape_425.setTransform(47.6,261.2);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#73A93A").s().p("AgDAQQgNgEgLgTIATAHIAaAHQgMgHgOgDIgSgGQAOgMAQAGQAPAGAJATQgMAIgLAAQgFAAgDgCg");
	this.shape_426.setTransform(55.5,265.2);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#73A93A").s().p("AgFAmQgPgRAAgVQAAgRALgQQAIgMAFgEIgEAiQgCAbAFAWQgDgXACgaIAEghIAJAUQAGAQAAAMQAAANgHATIgHASQgHgDgFgJg");
	this.shape_427.setTransform(50.7,269.9);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#73A93A").s().p("AgLAKQARgNASgKQgTAFgSAOIgWAVQgBgIAFgOQAHgRANgJQAWgPAaARQgLAdgSAMQgKAHggAAg");
	this.shape_428.setTransform(59.3,230.3);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#73A93A").s().p("AAAAGIAAgRIAAARIAAAMQgHgHABgLQAAgJAGgJQAIAKAAAIQgBAGgHAMg");
	this.shape_429.setTransform(54.2,230.2);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#73A93A").s().p("AgQgWQANgOARADQAOACAFAFIgNAEQgJADgFAFQgTAOgIAVQALgTASgMQAFgFAIgDIAMgFIgKASQgHAMgHAHQgLAOgbAGQgJgiAWgWg");
	this.shape_430.setTransform(20.6,243.2);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#73A93A").s().p("AgJAGQgHgKADgUQAPACAJAQQAGAMgFASIgHgRQgFgNgIgKIALAYIAIARQgOgEgGgPg");
	this.shape_431.setTransform(23.3,237.2);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#73A93A").s().p("AAEAQQgEgbgEgXQABAYADAbIAGAjQgXgWgEgaQgEgaATgdQAXATAFAeQAEAagSAcg");
	this.shape_432.setTransform(34.8,232.2);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#73A93A").s().p("AgcAJQAIgUASgFQAJgDALAHQAIAGADAFIgUgBQgPACgMAGQANgEAOgCIATAAQgSAPgHACIgGABQgLAAgOgJg");
	this.shape_433.setTransform(34.4,245.5);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#73A93A").s().p("AgUgSQAKgRARgGQANgFAIACIgLALQgIAIgEAHQgPAXgHAZQALgXAPgVIAVgcIgDAYQgDASgGAMQgNAXgcALQgNgjAQgdg");
	this.shape_434.setTransform(37,250.1);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#73A93A").s().p("AgLgIQAGgJAIgEQAGgEAEABIgLAPQgEAHgBAJIgCAJIADgIQACgJAEgHIAKgPIAAANQgBAKgEAEQgCALgOAKQgKgPAGgSg");
	this.shape_435.setTransform(19,268.3);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#73A93A").s().p("AgdATIgQgJQAPgiAegCQAYgBAWAbIgfgCQgYAAgVAHQAVgDAYAAIAfgBQgWAagXAAIgBAAQgMAAgRgIg");
	this.shape_436.setTransform(15.3,264.7);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#73A93A").s().p("AgBAJQgKgEgEgLQALgGAHAEQAHACAGAMIgLgFIgOgEQAGADAIACIALAFQgGAEgGAAIgFgCg");
	this.shape_437.setTransform(36,273.4);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#73A93A").s().p("AgUAJQgKgZANghIALAiIAQAxQgDgZgJgaIgNghQAcARAJAXQAGARgGAZQgDAMgFAHQgYgRgKgZg");
	this.shape_438.setTransform(40,279.8);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#73A93A").s().p("AgMAAQABgQALgOQANAOAAARQAAANgMARIAAgVIgBgeQAAAPAAAPIAAAVQgLgNgBgSg");
	this.shape_439.setTransform(24.9,273.1);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#73A93A").s().p("AgGAiQgegLgTgoQAhgbAgAMQATAHAOAXQAJANAEANQgagPgKgFQgdgMgbgDQAZAKAdAMIAlARQgaAJgSAAQgLAAgGgDg");
	this.shape_440.setTransform(16.1,276);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#73A93A").s().p("AgIAFQgGgLAGgOIAGAPQADAKAFAKIgHgWIgGgOQAMAHAEALQAFAKgFAPQgMgFgFgMg");
	this.shape_441.setTransform(18.1,287.9);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#73A93A").s().p("AgSAAQACgZARgSIgBAdIAAAsQABgUABgXIAAgeQARAYAAATQgBAYgTAUQgSgUABgYg");
	this.shape_442.setTransform(14,291.4);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#73A93A").s().p("AgyAPQAQgkAegIQAVgIAiAVIgjAJQgbAHgXAKQAZgDAagIIAigMQgRAjgcAJQgGACgGAAQgVAAgXgSg");
	this.shape_443.setTransform(8.9,287);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#73A93A").s().p("AgKAKQgMgNACgbQAVAAANASQAGAMABANQAAALgCAGIgLgWQgIgSgMgKQAKANAHARIAMAVQgWgLgFgKg");
	this.shape_444.setTransform(151.6,339);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#73A93A").s().p("AgXAwIAKgNQAHgIADgIQALgZAEgZQgIAXgLAYQgDAIgGAIIgJANIABgXQAAgTAFgLQAJgZAbgOQAPAggLAdQgHATgQAJQgLAGgHAAIgDAAg");
	this.shape_445.setTransform(156.1,337.7);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#73A93A").s().p("AgFATQgKgEgJgPQgHgLABgFQAPAMAFADIAfAMQgNgKgQgGIgUgMIAOgDQAMgCAHAEQANAFAIAPQAEAIABAHIgNAEIgKAAQgIAAgFgCg");
	this.shape_446.setTransform(121,336.9);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#73A93A").s().p("AAHBWIgGgHIgLgRQgUgbgFgdQgFgbAOggQAKgZAKgHIgBAbQgBASACANQAEAbAEAhQADAPABAKQAEAAgKhVIgCg6IATAdQAPAZAEAYQAFAegQAkQgGAMgGAJIgFAGIgBAAg");
	this.shape_447.setTransform(117.8,344.9);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#73A93A").s().p("AAEAjQACgLgCgIQgEgcgGgWIAGAyQABAIAAALIgBAPIgJgSQgJgOgCgNQgGgYAQgfQAZAPAGAfQAEAQgJAUQgIARgGACg");
	this.shape_448.setTransform(100.3,328.6);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#73A93A").s().p("AgBAKQADgRAHgOQgJANgEARIgGAWQgJgVAGgRQAJgTARgFQAHAXgHAOQgEANgRANg");
	this.shape_449.setTransform(121.4,315.4);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#73A93A").s().p("AgHAXQgMgHgLgQIgJgQQAGgFAKgDQAUgHANAJQAMAHAIAPIAKATIgagPQgUgLgUgFIAmAVIAbAMQgHAEgMADIgIAAQgMAAgHgFg");
	this.shape_450.setTransform(64.4,262.8);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#73A93A").s().p("AgCAMIANgmQgKAQgGAUIgHAcQgEgGgCgNQgDgRAFgLQAKgXAWgFQAIAbgIASQgGAMgUASg");
	this.shape_451.setTransform(89,276.4);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#73A93A").s().p("AgNAFIAKgDQAGgCAGAAQgGgBgHABIgKAEQAEgIAKgEQAHgBAIAJQgHAIgIAAIAAABQgEAAgJgEg");
	this.shape_452.setTransform(73.8,265.1);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#73A93A").s().p("AgRAGQgGgWANgbQAWANAHAYQADAPgFARQgEALgEAGIgEgeQgFgXgGgTQAFAUACAXIAGAeQgVgXgDgPg");
	this.shape_453.setTransform(84.7,274.6);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#73A93A").s().p("AgfADQAMgTATgCQAKgCAMAJQAIAHADAEIgXgBQgQABgOACIA0AAIgMAJQgKAHgIABIgCABQgQAAgPgRg");
	this.shape_454.setTransform(73.6,275.3);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#73A93A").s().p("AgNgHQAKgVASgEIgMAWIgMAgQAJgOAGgQIAKgXQAEAdgFAKQgLAVgTAEQgGgaAIgOg");
	this.shape_455.setTransform(75.6,279.2);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#73A93A").s().p("AgEAJIAQgdQgLALgHAQIgLAWQgEgaAJgOQALgTAUABQABAYgIAOQgKAQgSAFg");
	this.shape_456.setTransform(62.9,281.8);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#73A93A").s().p("AgCAmQgNgOgEgQQgIgaAQgfQAZAPAHAcQAGATgLAkIgJgiQgHgagHgWQAEAYAFAaIALAhQgHgDgIgJg");
	this.shape_457.setTransform(59.1,278.9);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#73A93A").s().p("AgMAGQgEgGAAgNIgBgPIANATIANAdQgEgPgHgQQgCgGgMgNQAEgCAKAFQALAGAFAMQAIASgIAWQgTgHgHgSg");
	this.shape_458.setTransform(65.7,300.2);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#73A93A").s().p("AgRgKQAEgQAPgIQAQgIADAIQgMABgHASQgIATAAAVQAEgUAHgTQAGgPAKgDQgDAEAAAMQAAAOgDAGQgGASgQARQgSgYAIgZg");
	this.shape_459.setTransform(61.1,300.8);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#73A93A").s().p("AASAfQgRgDgHgHQgSgMgPgeQAGgGALgDQAWgIAQAMQAPALAHAVQAEAQgCAKIgJgOQgHgJgGgEQgUgSgWgDQAUAIATARQAGAFAHAIIAKAMg");
	this.shape_460.setTransform(56.8,290.9);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#73A93A").s().p("AgQgJQAMgZAUgEIgMAZQgJASgBAUQAEgSAIgTIAMgZQAEAigGAIQgFAVgVANQgMgZAGgXg");
	this.shape_461.setTransform(48,304.6);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#73A93A").s().p("AgwAEQAWgfAagCQAMgBARAIIAUALIgPAEQgKADgIAAIgwAGQAXACAagEQAHAAAZgJQAAAJgOALQgQARgQABIgDABQgaAAgWgag");
	this.shape_462.setTransform(43.6,299.4);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#73A93A").s().p("AgYAOQAGgUANgIQAHgGAWACIgQAMQgLAJgMAHQANgEALgJIAQgNQgBATgQAMQgIAEgGAAQgIAAgKgFg");
	this.shape_463.setTransform(91.1,294.3);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#73A93A").s().p("AgHAZQgZgKgJgiQAbgNAUAIQALAFALANQALAMACABQgEACgYgHIgpgOQASAMAWAHQAXAGAHgEQgDAJgPAGQgJAEgJAAQgGAAgHgDg");
	this.shape_464.setTransform(91.5,289.6);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#73A93A").s().p("AgGAMQgMgMACgPIAKANQAFAFAGAEIAHADIgGgEQgGgFgEgFIgLgMIAKACQAGACAEAEQAJAHAEAPQgGADgGAAQgGAAgGgFg");
	this.shape_465.setTransform(97.6,292.6);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#73A93A").s().p("AgKAIQgHgKAEgWIAJASQAFANAIAKIgLgYIgKgSQAPAFAHAOQAHALgDAUQgPgBgJgQg");
	this.shape_466.setTransform(93.7,299);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#73A93A").s().p("AgqAUQAKgjAagKQARgHAfANIgdAMQgXAIgSAMIBHgdQgDAJgIAKQgLARgOAFQgHAEgKAAQgPAAgRgJg");
	this.shape_467.setTransform(87.1,304.7);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#73A93A").s().p("AgPA1IgHgQQgIgbAHgUQAGgRANgOIAQgPIgKAmQgIAdgDAbIAQg3QACgFAGgiQAGAJADARQAGAXgHAQQgFASgQAQQgHAJgHAFIgDgEg");
	this.shape_468.setTransform(91.8,310.7);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#73A93A").s().p("AgIAJQgHgIgCgUIAMAOIAQAUQgGgNgIgKIgNgNQAEgBAHACQAIACAHAIQAJALgCAVQgRAAgIgNg");
	this.shape_469.setTransform(130.6,318.4);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#73A93A").s().p("AACA6IgKgMQgRgVAAgZQABgdAYgfIAAApQgCAhAFAcQgCgcACghIAAgpQAHAJAHAOQAJAUAAARQgBARgJAXIgJAVQgBAAgEgDg");
	this.shape_470.setTransform(127,328);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#73A93A").s().p("AgCAXQgWgFgOgZQAWgUAUAFQALADALALIAMAMIgZgEQgUgCgSgCQARAEAUAFQAVADAGgCQgDAHgNAGQgKAFgJAAIgGgBg");
	this.shape_471.setTransform(105.8,338.3);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#73A93A").s().p("AARAxQgZgGgNgSQgNgSgHgbIgGgbQABgCAFgBQAIgBALABQAdADAPAWQANAPAFAXQAGAZACADQgIgBgYgbQgWgbgYgUIAqA1IARARQAKAJAJAAQgEAGgMAAQgGAAgJgCg");
	this.shape_472.setTransform(113.7,314.1);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#73A93A").s().p("AgSAGQgFgVAMgbIAHAdIALArQgDgVgFgXIgIgdQAVAOAGAYQAHAXgOAbQgWgOgHgZg");
	this.shape_473.setTransform(107.7,350.8);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#73A93A").s().p("AgHAmQgOgSABgUQAAgPAJgQIALgSIAAAhQgBAbADAYIAAgyIgCgjQAGAFAHANQAJARgBAPQAAAPgIATIgIARQgFgEgHgJg");
	this.shape_474.setTransform(103,355.6);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#73A93A").s().p("AhRA/QABgTAIgZQAPgvAhgWQAmgbBBATIg5AjQgtAdghAjQAmgaAtgcQARgLAmgcQgEAVgMAaQgTAkgZARQgZASgpAAQgUAAgRgDg");
	this.shape_475.setTransform(90.2,359.7);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#73A93A").s().p("AgTgMQAIgQANgJQALgHAIgCIgQAeQgHAPgFARIgEAPIAGgOQAGgRAHgOIAPgeQAFAmgJAPQgJAZgaANQgNggAKgbg");
	this.shape_476.setTransform(96.4,346.8);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#73A93A").s().p("AAAAsQgagCgagYIgPgQIgGgEQACgEAEgEIARgPQAdgVAXADQAUABAWAQQAVAOAFgBQgIAJgmACIhJAAQAhAGAoAAIAcgDQAOgBAHgKQADANgZAWQgXAUgXAAIgFgBg");
	this.shape_477.setTransform(92.6,337.5);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#73A93A").s().p("AAAAHIAAgVIAAAVIAAAPQgIgMAAgKQAAgLAIgKQAKALgBALQgBAMgIAJg");
	this.shape_478.setTransform(168.9,315.4);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#73A93A").s().p("AASAhQgRgBgJgIQgWgNgKgjQAegRAYARQAOAKAIATQAFAPAAALIgZgYQgVgQgVgHQATAMAVAQIAZAVg");
	this.shape_479.setTransform(164.7,317.7);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#73A93A").s().p("AghA0IgCgUQgCggAOgWQAQgXAngNIgYAlQgTAegKAeQAPgaATgdIAWgnQADALgCAUQgCAagLARQgLASgVAMQgLAGgKAEIgDgHg");
	this.shape_480.setTransform(153.7,369.4);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#73A93A").s().p("AgHBCIgKgRQgPgcADgYQACgUAMgVIAPgZIAAAWQAAAOAAALQgFBGADAAIACgVIAEgxQABgLgBgPIgDgWQAJAGAJATQANAagDAWQgCAYgQAXIgNAVIgFgFg");
	this.shape_481.setTransform(160.2,366.6);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#73A93A").s().p("AgEANQgLgGgFgRIAOAJQAKAFAKAEIgTgMIgPgHQAOgHAKAHQANAHAEAQQgIAEgHAAQgGAAgEgDg");
	this.shape_482.setTransform(187.1,323.6);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#73A93A").s().p("AghAiIAZgWIAggiQgTANgRASIgWAXIAEgXQAFgRAKgLQAOgOATgBQAKAAAIACQgEAhgSATQgKALgRADIgMABIgIgBg");
	this.shape_483.setTransform(187.6,317);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#73A93A").s().p("AAFARQgHgEgDgFQgKgIgBgTQAQgDAJALQALAOgEAQIgJgPQgHgLgKgGQAJAIAGALIAKAOg");
	this.shape_484.setTransform(179.8,321.6);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#73A93A").s().p("AgfAQQAGgYAUgLQAVgGAQAPIgXAGQgRAEgNALQAOgJARgDIAWgGQgRAXgKACQgFAEgJAAQgKAAgMgGg");
	this.shape_485.setTransform(178.1,326.4);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#73A93A").s().p("AgRAHQgFgRALgeIAHAcQAEAXAJATQgGgUgEgWIgIgdQAGADAGAJQALALADAOQAGATgJAbQgYgIgHgbg");
	this.shape_486.setTransform(186,339.7);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#73A93A").s().p("AgoAYQgUgOgCgKQAVAHAWgCQAigFAcAEQgcgJgiAEQgVABgVgDIAXgRQATgOATgDQAagDAXAcQAHAJAFAIQAEAJgDAAQgBgBgUAKQgYAMgQADIgDAAQgSAAgUgOg");
	this.shape_487.setTransform(190.1,331.1);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#73A93A").s().p("AgOAEQgCgXAMgOIACAXQACASAFAPQgEgQgBgRIgCgXQAOAUACAKQAEAQgKAVQgQgKgGgUg");
	this.shape_488.setTransform(180.3,355.6);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#73A93A").s().p("AAAATQgOABgSgSQAOgTASgBQASABAOASIgVgBQgRgBgPACQAPgBARACIAVABQgPAQgPAAIgCAAg");
	this.shape_489.setTransform(174.3,351.6);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#73A93A").s().p("AgqArQABgMADgOQAGgZANgPQAOgRAVgCQATgDAHAFQgcATgEAFQgVAXgRAWQAVgRAVgXQAFgHAKgHIAOgLIgIAbQgGATgMANQgOARgXADIgKABIgMgBg");
	this.shape_490.setTransform(172,358.5);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#73A93A").s().p("AgjAQQAHgbAYgLQAVgGATASIgaAFQgLADgMAGIgLAGIAMgEQAMgGAMgBIAYgGQgQAYgQAEQgEADgHAAQgNAAgPgIg");
	this.shape_491.setTransform(143.8,333.7);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#73A93A").s().p("AgGAgQgMgPAAgQQABgOAJgRIAIgNQATAVAAAWQAAALgFAOIgGASIgEgMQgCgJAAgHIgCgsQgBAVABAXQAAAIACAIIAEANQgFAAgHgMg");
	this.shape_492.setTransform(153.4,327.2);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#73A93A").s().p("AAKAyQgXgIgLgVQgLgTgCgbIgBgbQACgBAEAAIARAEQAZAJAMAWQAJAQAEAVIAEAeIgNgOQgJgKgFgIQghg1gEAAIAKASIAXAnQAEAJALAJIAPANQgDACgFAAQgIAAgMgEg");
	this.shape_493.setTransform(145.9,326.9);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#73A93A").s().p("AgMgDQAEgNAOgOIgFAVQgDAPAAAPIAFgdIAFgVQAJARgEAQQgDAPgOAMQgLgRADgRg");
	this.shape_494.setTransform(152.1,349.5);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#73A93A").s().p("AgyAiQAEgsAggVQARgLAXAHQASAFAHAIIgRAEQgNACgHAFQgeAMgTAVQAXgQAcgLQAGgEAMgEIARgFIgPAWQgNASgNAHQgMAJgTAAQgOAAgPgEg");
	this.shape_495.setTransform(147.7,345.4);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#73A93A").s().p("AgLABQgCgGAHgWIAEATQACAOACANQABgOgDgNIgFgTQAEABADAGQAIAHACALQACAOgKAQQgMgKgDgRg");
	this.shape_496.setTransform(147,376.7);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#73A93A").s().p("AgcA1QgPglAKggQAIgeAZgTQAOgMAPgDIgMAWQgIAQgEAMQgPArAAApQAHgnAOgpIAVg0QALA6gJAeQgHAXgVAaQgJANgKAKQgIgLgHgSg");
	this.shape_497.setTransform(139.8,381.4);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#73A93A").s().p("AgRARQgPgVAFgmQAcABARAaQAQAWgGAjIgSgeQgOgWgOgSQALAVANAWIAUAcQgegGgNgUg");
	this.shape_498.setTransform(140.7,361.7);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#73A93A").s().p("AgpAOQALgeAagIQAOgEAQAKQAOAIACAHQgXgCgHACQgWADgRAJQASgGAWgDIAcAAIgPAMQgLAKgLADQgEABgGAAQgQAAgTgMg");
	this.shape_499.setTransform(135.9,370.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(505));

	// birds
	this.instance_20 = new lib.bird2_move();
	this.instance_20.setTransform(-549.3,18.6,1,1,0,0,0,11.8,10.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(505));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,-15.6,339.8,514.7);


(lib.bananas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"stop":0,"play":1});

	// timeline functions:
	this.frame_0 = function() {
		/* 
		// banana thud
		var mcBananaThud:MovieClip = this.createEmptyMovieClip("mcBananaThud", this.getNextHighestDepth());
		var auBananaThud:Sound = new Sound(mcBananaThud);
		auBananaThud.attachSound("banana_thud");
		auBananaThud.setVolume(70);
		
		// banana peelin
		var mcBananaPeelin:MovieClip = this.createEmptyMovieClip("mcBananaPeelin", this.getNextHighestDepth());
		var auBananaPeelin:Sound = new Sound(mcBananaPeelin);
		auBananaPeelin.attachSound("banana_peelin");
		auBananaPeelin.setVolume(100);
		
		stop();
		*/
		this.stop();
	}
	this.frame_1 = function() {
		/* play();
		*/
		this.play();
	}
	this.frame_4 = function() {
		/* 
		if (_parent.curMusicState == "on") {
			auBananaThud.start();
		}*/
	}
	this.frame_17 = function() {
		/* 
		if (_parent.curMusicState == "on") {
			auBananaPeelin.start();
		}*/
	}
	this.frame_39 = function() {
		/* stop();
		*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(3).call(this.frame_4).wait(13).call(this.frame_17).wait(22).call(this.frame_39).wait(1));

	// ground
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#94683A").s().p("AgRAOQgDgPAJgLQALgMARATQAHAGgVAKQgKAGgFAAQgEAAgBgDg");
	this.shape.setTransform(65.8,-26.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#94683A").s().p("Ag0AFQAIgCANADQAKAEAHgEQAFgCgCgTQgCgVANgHQAigQAuAyIh6AxIglAIQALglAQgGg");
	this.shape_1.setTransform(33.5,-18.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#94683A").s().p("AgRABQgKgLAXgBQAUgBAEALQAEAIgQAEIgHABQgKAAgIgLg");
	this.shape_2.setTransform(41.5,-18.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#82DC5E").s().p("AtRC9IC0itQC0hDBsg6QAOgHArgbQAfgTAHAAIBKgRIBcgnIBKgWQBDgSAVAAQAgAAAsAHQAsAHAOAHIAwAWQAvATASAEQADABAzAaQAwAZAJgBQAFAAAnAUQAmATAEgCQAIgFDmB9IB9Dzg");
	this.shape_3.setTransform(51,4.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#94683A").s().p("AiWBBIh6AbIhugMQA5gyAmgIQAlgHAmgNQAVgFBCgcQAfgNANgCIAngFIAkgHQANgDAfAAIBTgCQAagDAQgPQAOgNAOABQAOABASAgQARAhASABQASABAMAVQANATARACQAjAFAeAcIgCAtg");
	this.shape_4.setTransform(51.8,-17.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#94683A").s().p("AgLACQABgFALgDQAOgDgEAJQgEAIgIAAIgCAAQgJAAABgGg");
	this.shape_5.setTransform(103,-9.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#94683A").s().p("AglAGQAEgOAmgEQAPgBAKACQAKADgDAGQgGALgiAEIgQABQgUAAACgIg");
	this.shape_6.setTransform(91.9,-13.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#94683A").s().p("AgPACQABgHAQgEQASgEgFAMQgFALgMABIgDAAQgLAAABgJg");
	this.shape_7.setTransform(97.9,-11.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#94683A").s().p("AgKABQgGgGAOgBQALAAADAGQACAEgKADIgDAAQgGAAgFgGg");
	this.shape_8.setTransform(-8.6,-0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#94683A").s().p("AgkAGQgFgFAKgDQAIgFAQgDQAlgHAIAPQAFAHgkAGQgLACgJAAQgRAAgGgHg");
	this.shape_9.setTransform(10.1,-10.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#94683A").s().p("AgOABQgIgJASgBQAQgBAEAJQAEAHgOADIgFABQgIAAgHgJg");
	this.shape_10.setTransform(6.7,-9.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#94683A").s().p("AgRABQgKgLAXgBQAUgBAEALQAEAIgQAEIgHABQgKAAgIgLg");
	this.shape_11.setTransform(3.5,-5.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#94683A").s().p("AiHAAIgBhrQAUA+AXANQAEADANADQANADAEACQAQAKAKAKQALAJAIAEQAOAKAZAJIAYAIQAcANAPARQAMANAYALIAJAPg");
	this.shape_12.setTransform(100.5,-10.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#94683A").s().p("AiEBKQAYgLAMgNQAOgPAdgPQApgOAUgMQAJgGAKgKQALgKAPgKIAagPQAGgLgCgVIA6BJIkZBqg");
	this.shape_13.setTransform(7.2,-6.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},14).wait(26));

	// Layer 38
	this.instance = new lib.groundchunk2();
	this.instance.setTransform(80.9,-20.2,1,1,0,0,0,7.5,4.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({guide:{path:[80.9,-20.1,88.2,-23,96.9,-23.5,110,-24.2,122.5,-19,135.7,-13.5,145.2,-2.5,155.6,9.4,159.9,26.5]}},9).to({_off:true},1).wait(16));

	// ground chunk
	this.instance_1 = new lib.ground_chunk();
	this.instance_1.setTransform(73.5,-16.5,1,1,0,0,0,6.3,3.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({guide:{path:[73.7,-16.4,87.3,-24.8,96.5,-28.2,110.7,-33.4,124.5,-31.5,160.3,-26.7,199.9,26.5]}},9).to({_off:true},1).wait(16));

	// peel left
	this.instance_2 = new lib.banana_peel_left();
	this.instance_2.setTransform(44,-436,0.3,0.3,50,0,0,92.5,9.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17).to({_off:false},0).to({regX:92.4,regY:9.9,scaleX:1,scaleY:1,rotation:0,guide:{path:[43.9,-435.8,31.4,-432.2,20.2,-424.6,8.3,-416.6,-2,-404.1,-21.3,-380.5,-33,-344.1,-44.7,-307.7,-47.2,-263.6,-47.3,-260.8,-47.5,-258], orient:'auto'}},17,cjs.Ease.get(1)).wait(6));

	// peel right
	this.instance_3 = new lib.banana_peel_right();
	this.instance_3.setTransform(51.6,-425.9,0.5,0.4,55,0,0,29.2,17.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(17).to({_off:false},0).to({regX:29.3,regY:17.8,scaleX:1,scaleY:1,rotation:0,guide:{path:[51.5,-425.7,9.5,-391.5,-1.4,-322.9,-6.7,-289.9,-4.6,-250.3], orient:'auto'}},17,cjs.Ease.get(0.95)).wait(6));

	// Layer 32 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_15 = new cjs.Graphics().p("EAEjAlSQgdgDg8gtQhAgxhPhRQjDjLiwkgQjdlqiEmcQignygPoPUgA8ggeAS4gA8IF5kdQBGBOBMBGIANAMIi0CHUgS4AA8AA8AgeQAPH4CTHfQB7GPDOFkQCnEfDCDWQBPBXBGA8QBAA3ApATQACmsg2ioIhSjSQhajohGjUQjmqxgWm+QgOknBAlOQAykABokzQAihmA0iOIBOjUQBPjbAFhaQAohBA5g4QgzA0gkA7QgFBahPDbIhODUQg0COgiBmQhoEzgyEAQhAFOAOEpQAWG8DmKxQBGDUBaDoIBSDSQA8C7gJGyIjmBng");
	var mask_graphics_16 = new cjs.Graphics().p("EACjAkXQgdgEg8gtQhAgxhNhQQjFjMiwkgQjdlpiEmdQignxgPoPUgA8ggfAS4gA7IDdinIAZAIICYCKIgqAfUgS4AA8AA8AgeQAPH4CTHfQB7GPDQFkQClEeDCDXQBPBXBGA8QBAA3ApATQACmsg2ipIhSjSQhajnhGjUQjkqxgWm8QgOkqBAlNQAwkABokzQAihmA0iOIBOjUQBPjbAFhbQAohAA5g4QgzA0gkA7QgFBahPDbIhODUQg0COgiBmQhoEzgyD/Qg+FPAOEpQAWG8DkKxQBGDUBaDnIBSDSQA8C8gJGyIjmBngEAO5glmIAFgVIAOAcIgNAFg");
	var mask_graphics_17 = new cjs.Graphics().p("EACjAkOQgdgEg8gtQhAgxhNhRQjFjLiwkgQjdlqiEmcQignxgPoPQg5/KRViIIAyBcQsbFgAxagQAPH4CTHeQB7GQDQFkQClEeDCDXQBPBXBGA8QBAA2ApAUQACmsg2ipIhSjSQhajnhGjVQjkqwgWm9QgOkpBAlOQAwj/BokzQAihnA0iNIBOjUQAUg2AOguIAHgBIgfBbIhODUQg0CNgiBnQhoEzgyD/Qg+FOAOEpQAWG9DkKwQBGDVBaDnIBSDSQA8C7gJGzIjmBmgEAO5glvIAFgVIAOAcIgNAEg");
	var mask_graphics_18 = new cjs.Graphics().p("EACjAkOQgdgEg8gtQhAgxhNhRQjFjLiwkgQjdlqiEmcQignxgPoPQgx6yMtlVICJCLQpLHPAqW3QAPH4CTHeQB7GQDQFkQClEeDCDXQBPBXBGA8QBAA2ApAUQACmsg2ipIhSjSQhajnhGjVQjkqwgWm9QgOkpBAlOQAwj/BokzQAihnA0iNIA0iLIAAAPIgqByQg0CNgiBnQhoEzgyD/Qg+FOAOEpQAWG9DkKwQBGDVBaDnIBSDSQA8C7gJGzIjmBmgEAO5glvIAFgVIAOAcIgNAEg");
	var mask_graphics_19 = new cjs.Graphics().p("EACjAkOQgdgEg8gtQhAgxhNhRQjFjLiwkgQjdlqiEmcQignxgPoPQgq2nI+nVIDXCYQmrIHAkTnQAPH4CTHeQB7GQDQFkQClEeDCDXQBPBXBGA8QBAA2ApAUQACmsg2ipIhSjSQhajnhGjVQjkqwgWm9QgOkpBAlOQAwj/BokzIAph4IAAAVIgfBZQhoEzgyD/Qg+FOAOEpQAWG9DkKwQBGDVBaDnIBSDSQA8C7gJGzIjmBmgEAO5glvIAFgVIAOAcIgNAEg");
	var mask_graphics_20 = new cjs.Graphics().p("EACjAkOQgdgEg8gtQhAgxhNhRQjFjLiwkgQjdlqiEmcQignxgPoPQgjzOGZoLIECCbQkzIYAfQwQAPH4CTHeQB7GQDQFkQClEeDCDXQBPBXBGA8QBAA2ApAUQACmsg2ipIhSjSQhajnhGjVQjkqwgWm9QgOkpBAlOQAwj/BokzIATg4IACAMIgLAiQhoEzgyD/Qg+FOAOEpQAWG9DkKwQBGDVBaDnIBSDSQA8C7gJGzIjmBmgEAO5glvIAFgVIAOAcIgNAEg");
	var mask_graphics_21 = new cjs.Graphics().p("EACjAkOQgdgEg8gtQhAgxhNhRQjFjLiwkgQjdlqiEmcQignxgPoPQgdwAEWoWIEsCDQjbIMAaORQAPH4CTHeQB7GQDQFkQClEeDCDXQBPBXBGA8QBAA2ApAUQACmsg2ipIhSjSQhajnhGjVQjkqwgWm9QgOkpBAlOQAojWBQj7IAHgCQhND2gqDTQg+FOAOEpQAWG9DkKwQBGDVBaDnIBSDSQA8C7gJGzIjmBmgEAO5glvIAFgVIAOAcIgNAEg");
	var mask_graphics_22 = new cjs.Graphics().p("EACjAkOQgdgEg8gtQhAgxhNhRQjFjLiwkgQjdlqiEmcQignxgPoPQgYtRC7n/IFCBvQiXHsAWL/QAPH4CTHeQB7GQDQFkQClEeDCDXQBPBXBGA8QBAA2ApAUQACmsg2ipIhSjSQhajnhGjVQjkqwgWm9QgOkpBAlOQAfinA4i9IADALQgzCygfCdQg+FOAOEpQAWG9DkKwQBGDVBaDnIBSDSQA8C7gJGzIjmBmgEAO5glvIAFgVIAOAcIgNAEg");
	var mask_graphics_23 = new cjs.Graphics().p("EACjAkOQgdgEg8gtQhAgxhNhRQjFjLiwkgQjdlqiEmcQignxgPoPQgVrYCHngIFIB4QhoHEASKGQAPH4CTHeQB7GQDQFkQClEeDCDXQBPBXBGA8QBAA2ApAUQACmsg2ipIhSjSQhajnhGjVQjkqwgWm9QgOkpBAlOQARhgAbhoIAHAAQgZBigSBcQg+FOAOEpQAWG9DkKwQBGDVBaDnIBSDSQA8C7gJGzIjmBmgEAO5glvIAFgVIAOAcIgNAEg");
	var mask_graphics_24 = new cjs.Graphics().p("EACjAkOQgdgEg8gtQhAgxhNhRQjFjLiwkgQjdlqiEmcQignxgPoPQgRpYBYmwIALgwICGAvQA6AVA5AXIBUAiIgGAgQhEGQAPIVQAPH4CTHeQB7GQDQFkQClEeDCDXQBPBXBGA8QBAA2ApAUQACmsg2ipIhSjSQhajnhGjVQjkqwgWm9QgOkpBAlOQAPhUAWhaIAGAIQgUBRgPBLQg+FOAOEpQAWG9DkKwQBGDVBaDnIBSDSQA8C7gJGzIjmBmgEAHVghCIAcgeIgcAfgEAO5glvIAFgVIAOAcIgNAEg");
	var mask_graphics_25 = new cjs.Graphics().p("EACjAkOQgdgEg8gtQhAgxhNhRQjFjLiwkgQjdlqiEmcQignxgPoPQgPoYBFmSIANADIBzAoQAlANAlAOIB3AtIASAHQgyFrANHPQAPH4CTHeQB7GQDQFkQClEeDCDXQBPBXBGA8QBAA2ApAUQACmsg2ipIhSjSQhajnhGjVQjkqwgWm9QgOkpBAlOIAThgIAHACIgSBUQg+FOAOEpQAWG9DkKwQBGDVBaDnIBSDSQA8C7gJGzIjmBmgEAO5glvIAFgVIAOAcIgNAEg");
	var mask_graphics_26 = new cjs.Graphics().p("EACjAkOQgdgEg8gtQhAgxhNhRQjFjLiwkgQjdlqiEmcQignxgPoPQgNnHAwllIAdAKQBoAhBmAmQAmAOAlAQIAgAOQggE6ALF/QAPH4CTHeQB7GQDQFkQClEeDCDXQBPBXBGA8QBAA2ApAUQACmsg2ipIhSjSQhajnhGjVQjkqwgWm9QgOkpBAlOIAQhSIAGAFIgOBDQg+FOAOEpQAWG9DkKwQBGDVBaDnIBSDSQA8C7gJGzIjmBmgEAO5glvIAFgVIAOAcIgNAEg");
	var mask_graphics_27 = new cjs.Graphics().p("EACjAkOQgdgEg8gtQhAgxhNhRQjFjLiwkgQjdlqiEmcQignxgPoPQgLmBAgk7IA3ARQA9ATA8AWQAzASAyAWQAjANAiAPQgUENAJE7QAPH4CTHeQB7GQDQFkQClEeDCDXQBPBXBGA8QBAA2ApAUQACmsg2ipIhSjSQhajnhGjVQjkqwgWm9QgMj5AskUIAHAHQgoEKALDyQAWG9DkKwQBGDVBaDnIBSDSQA8C7gJGzIjmBmgEAO5glvIAFgVIAOAcIgNAEg");
	var mask_graphics_28 = new cjs.Graphics().p("EACjAkOQgdgEg8gtQhAgxhNhRQjFjLiwkgQjdlqiEmcQignxgPoPQgKlLAXkYIABAAIBsAnQBpAoBpAmIAeAKQgNDnAHEHQAPH4CTHeQB7GQDQFkQClEeDCDXQBPBXBGA8QBAA2ApAUQACmsg2ipIhSjSQhajnhGjVQjkqwgWm9QgMj+AtkZIAIAEQgrESAMD3QAWG9DkKwQBGDVBaDnIBSDSQA8C7gJGzIjmBmgEAO5glvIAFgVIAOAcIgNAEg");
	var mask_graphics_29 = new cjs.Graphics().p("EACjAkOQgdgEg8gtQhAgxhNhRQjFjLiwkgQjdlqiEmcQignxgPoPQgIkZAPjzIAbAHQA1AQA0ASQBtAnBuAkQgIDGAGDcQAPH4CTHeQB7GQDQFkQClEeDCDXQBPBXBGA8QBAA2ApAUQACmsg2ipIhSjSQhajnhGjVQjkqwgWm9QgJjJAajbIAIAFQgYDTAJDCQAWG9DkKwQBGDVBaDnIBSDSQA8C7gJGzIjmBmgEAO5glvIAFgVIAOAcIgNAEg");
	var mask_graphics_30 = new cjs.Graphics().p("EACjAkOQgdgEg8gtQhAgxhNhRQjFjLiwkgQjdlqiEmcQignxgPoPQgHjyAKjWIAkAJQAuANAuARQBiAkBgAqIAeAPQgECfAFCvQAPH4CTHeQB7GQDQFkQClEeDCDXQBPBXBGA8QBAA2ApAUQACmsg2ipIhSjSQhajnhGjVQjkqwgWm9QgKjeAhj0IAIACQgfDtAKDZQAWG9DkKwQBGDVBaDnIBSDSQA8C7gJGzIjmBmgEAO5glvIAFgVIAOAcIgNAEg");
	var mask_graphics_31 = new cjs.Graphics().p("EACjAkOQgdgEg8gtQhAgxhNhRQjFjLiwkgQjdlqiEmcQignxgPoPQgGjVAHjAQBTAbBSAdQA6ATA6AVQAjAOAjANIACgBQgCCNAECYQAPH4CTHeQB7GQDQFkQClEeDCDXQBPBXBGA8QBAA2ApAUQACmsg2ipIhSjSQhajnhGjVQjkqwgWm9QgIizAUjBIABgKIAIAEIgBALQgSC5AICsQAWG9DkKwQBGDVBaDnIBSDSQA8C7gJGzIjmBmgEAO5glvIAFgVIAOAcIgNAEg");
	var mask_graphics_32 = new cjs.Graphics().p("EACjAkOQgdgEg8gtQhAgxhNhRQjFjLiwkgQjdlqiEmcQignxgPoPQgGjDAGixQCZArCRBAQAUAJATALIARgBQgBB8ADCEQAPH4CTHeQB7GQDQFkQClEeDCDXQBPBXBGA8QBAA2ApAUQACmsg2ipIhSjSQhajnhGjVQjkqwgWm9QgJi/AYjPIAIACQgWDJAJC5QAWG9DkKwQBGDVBaDnIBSDSQA8C7gJGzIjmBmgEAO5glvIAFgVIAOAcIgNAEg");
	var mask_graphics_33 = new cjs.Graphics().p("EACjAkOQgdgEg8gtQhAgxhNhRQjFjLiwkgQjdlqiEmcQignxgPoPQgFi2AEimQArAMApAOQCDAvCGAjIAGABQgBB5ADCAQAPH4CTHeQB7GQDQFkQClEeDCDXQBPBXBGA8QBAA2ApAUQACmsg2ipIhSjSQhajnhGjVQjkqwgWm9QgIi2AUjFIAJADQgTC+AICwQAWG9DkKwQBGDVBaDnIBSDSQA8C7gJGzIjmBmgEAO5glvIAFgVIAOAcIgNAEg");
	var mask_graphics_34 = new cjs.Graphics().p("EACjAkOQgdgEg8gtQhAgxhNhRQjFjLiwkgQjdlqiEmcQignxgPoPQgFi2AEimQArAMApAOQBOAcBOAYIBbAjIAYAJQgBByADB6QAPH4CTHeQB7GQDQFkQClEeDCDXQBPBXBGA8QBAA2ApAUQACmsg2ipIhSjSQhajnhGjVQjkqwgWm9QgHigAPiqIAJACQgOCkAHCaQAWG9DkKwQBGDVBaDnIBSDSQA8C7gJGzIjmBmgEAO5glvIAFgVIAOAcIgNAEg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(15).to({graphics:mask_graphics_15,x:18.5,y:-220.2}).wait(1).to({graphics:mask_graphics_16,x:31.3,y:-214.3}).wait(1).to({graphics:mask_graphics_17,x:31.3,y:-213.4}).wait(1).to({graphics:mask_graphics_18,x:31.3,y:-213.4}).wait(1).to({graphics:mask_graphics_19,x:31.3,y:-213.4}).wait(1).to({graphics:mask_graphics_20,x:31.3,y:-213.4}).wait(1).to({graphics:mask_graphics_21,x:31.3,y:-213.4}).wait(1).to({graphics:mask_graphics_22,x:31.3,y:-213.4}).wait(1).to({graphics:mask_graphics_23,x:31.3,y:-213.4}).wait(1).to({graphics:mask_graphics_24,x:31.3,y:-213.4}).wait(1).to({graphics:mask_graphics_25,x:31.3,y:-213.4}).wait(1).to({graphics:mask_graphics_26,x:31.3,y:-213.4}).wait(1).to({graphics:mask_graphics_27,x:31.3,y:-213.4}).wait(1).to({graphics:mask_graphics_28,x:31.3,y:-213.4}).wait(1).to({graphics:mask_graphics_29,x:31.3,y:-213.4}).wait(1).to({graphics:mask_graphics_30,x:31.3,y:-213.4}).wait(1).to({graphics:mask_graphics_31,x:31.3,y:-213.4}).wait(1).to({graphics:mask_graphics_32,x:31.3,y:-213.4}).wait(1).to({graphics:mask_graphics_33,x:31.3,y:-213.4}).wait(1).to({graphics:mask_graphics_34,x:31.3,y:-213.4}).wait(6));

	// banana outside left
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F0E170").s().p("EACjAl7QgdgEg8gtQhAgxhNhQQjFjMiwkgQjdlpiEmdQignxgPoPUgA8ggfAS4gA7IHlluICrAAIBmA7IgaBEIA8B3IgNAFIg5hyIAUg1ImCEkUgS4AA8AA8AgeQAPH4CTHfQB7GPDQFkQClEeDCDXQBPBXBGA8QBAA3ApATQACmsg2ipIhSjSQhajnhGjUQjkqxgWm+QgOkoBAlNQAwkABokzQAihmA0iOIBOjUQBPjbAFhbQAohAA5g4QgzA0gkA7QgFBahPDbIhODUQg0COgiBmQhoEzgyD/Qg+FPAOEnQAWG+DkKxQBGDUBaDnIBSDSQA8C8gJGyIjmBng");
	this.shape_14.setTransform(31.3,-224.3);
	this.shape_14._off = true;

	this.shape_14.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(15).to({_off:false},0).wait(25));

	// Layer 33 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_15 = new cjs.Graphics().p("EAEyAj1QhGg8hPhXQjAjXinkeQjQlkh7mQQiTnegPn4UgA8ggfAS4gA7ICyiHIBEBTIgCABIgPAHQj8B1hxC2QgFBahPDcIhODUQg0CNgiBnQhmEzgyD/QhAFOAOEpQAWG9DkKwQBGDVBaDnIBSDSQA2CpgCGsQgpgUhAg2g");
	var mask_1_graphics_16 = new cjs.Graphics().p("EAGGAi+QhGg8hPhXQjCjWilkfQjPlkh8mPQiTnfgOn4UgA8ggeAS4gA8IAigZIAqBDQiJBchMB6QgFBahODbIhODUQg0COgjBmQhnEzgyEAQg/FOAPEpQAWG8DjKxQBHDUBaDoIBSDSQA2CogDGsQgpgThAg3g");
	var mask_1_graphics_17 = new cjs.Graphics().p("EAHCAiKQhGg8hPhXQjCjWilkfQjQlkh7mPQiTnfgPn4Qgy69M3lOIAGAOQBPA7BMBCIA/B+QgVBWgwCHIhODUQg0COgiBmQhoEzgyEAQg+FOAMEpQAWG8DmKxQBGDUBaDoIBSDSQA2CogCGsQgpgThAg3g");
	var mask_1_graphics_18 = new cjs.Graphics().p("EAHCAhOQhGg8hPhXQjCjXilkeQjQlkh7mQQiTnegPn4Qgr3MJbnHQBsA9BkBIQBJA1A/BDIAKCWIhACvQg0CNgiBnQhoEzgyD/Qg+FOAMEpQAWG9DmKwQBGDVBaDnIBSDSQA2CpgCGsQgpgUhAg2g");
	var mask_1_graphics_19 = new cjs.Graphics().p("AHCf9QhGg8hPhXQjCjXilkeQjQlkh7mQQiTnegPn4QgkzqGtoHIADAGIBVAUQDgA4B8C0IAQCpQgxCEggBhQhoEzgyD/Qg+FOAMEpQAWG9DmKwQBGDVBaDnIBSDSQA2CpgCGsQgpgUhAg2g");
	var mask_1_graphics_20 = new cjs.Graphics().p("AHCelQhGg8hPhXQjCjWilkfQjQlkh7mPQiTnfgPn4QgfwqEwoXIAcAfQBDAIA/AVQCjA4CVBZQAcAQAJAlQANA7AIA8IglBrQhoEzgyEAQg+FOAMEpQAWG8DmKxQBGDUBaDoIBSDSQA2CogCGsQgpgThAg3g");
	var mask_1_graphics_21 = new cjs.Graphics().p("AHCdGQhGg8hPhXQjCjXilkeQjQlkh7mPQiTndgPn6Qgat7DQoIIAEAGIAyAFQA8ACA7AKQBqAPBmAZQA9APA8ASQAjAtAZAyQASAkALAnIgJAcQhoEzgyEAQg+FNAMEqQAWG+DmKvQBGDUBaDnIBSDSQA2CpgCGsQgpgThAg3g");
	var mask_1_graphics_22 = new cjs.Graphics().p("AHCbxQhGg8hPhXQjCjWilkfQjQlkh7mPQiTndgPn6QgWrxCSnoIACABQCiAECiALQBTAFBLAhQA6AZA1AlQANAeAPAcQhbEWguDrQg+FOAMEpQAWG+DmKvQBGDUBaDoIBSDSQA2CogCGsQgpgThAg3g");
	var mask_1_graphics_23 = new cjs.Graphics().p("AHCaeQhGg8hPhXQjCjWilkfQjQlkh7mPQiTndgPn6QgSp1Bim8IALAIQAlgHAmAEQDAgODAAOQA2ABAvAeQAlAYAgAeQhHDmgnDHQg+FOAMEpQAWG+DmKvQBGDUBaDoIBSDSQA2CogCGsQgpgThAg3g");
	var mask_1_graphics_24 = new cjs.Graphics().p("AHCZeQhGg8hPhXQjCjWilkfQjQlkh7mPQiTndgPn6QgPoTBDmOIAEAEQBQgMBQgGQCHgMCBAaQBoAVBqAaQgyCtgeCbQg+FOAMEpQAWG+DmKvQBGDUBaDoIBSDSQA2CogCGsQgpgThAg3g");
	var mask_1_graphics_25 = new cjs.Graphics().p("AHCYrQhGg8hPhXQjCjWilkfQjQlkh7mPQiTndgPn6QgNm3AslcQDBgiDBgVQBUgKBOAVQAtAMArAWQgiB+gXB1Qg+FOAMEpQAWG+DmKvQBGDUBaDoIBSDSQA2CogCGsQgpgThAg3g");
	var mask_1_graphics_26 = new cjs.Graphics().p("AHCX8QhGg8hPhXQjCjWilkfQjQlkh7mPQiTndgPn6QgLl2Afk0IAUgDQCyggCzgcQBZgMBVANQAnAGAmAMQgWBYgQBUQg+FOAMEpQAWG+DmKvQBGDUBaDoIBSDSQA2CogCGsQgpgThAg3g");
	var mask_1_graphics_27 = new cjs.Graphics().p("AHCXOQhGg8hPhXQjCjWilkfQjQlkh7mPQiTndgPn6QgJk5AUkLQCMgkCOgYQCCgWCDADQAmABAnAEQgLAzgKAxQg+FOAMEpQAWG+DmKvQBGDUBaDoIBSDSQA2CogCGsQgpgThAg3g");
	var mask_1_graphics_28 = new cjs.Graphics().p("AHCWuQhGg8hPhXQjCjWilkfQjQlkh7mPQiTndgPn6QgHkDAMjkIBMgcQEHhiESAVIgIAmQg+FOAMEpQAWG+DmKvQBGDUBaDoIBSDSQA2CogCGsQgpgThAg3g");
	var mask_1_graphics_29 = new cjs.Graphics().p("AHCWLQhGg8hPhXQjCjWilkfQjQlkh7mPQiTndgPn6QgGjVAHjBQCZgrCagjQB7gcB7gLIAzgCQg5E+AMEcQAWG+DmKvQBGDUBaDoIBSDSQA2CogCGsQgpgThAg3g");
	var mask_1_graphics_30 = new cjs.Graphics().p("AHCVxQhGg8hPhXQjCjWilkfQjQlkh7mNQiTnfgPn6QgFitAEifQA2gUA3gQQDGg5DKglQArgIAtgDQgvEhALEFQAWG+DmKvQBGDUBaDoIBSDSQA2CogCGsQgpgThAg3g");
	var mask_1_graphics_31 = new cjs.Graphics().p("AHCVTQhGg8hPhXQjCjWilkfQjQlkh7mNQiTnfgPn6QgEiTACiKQD5hCD8gzQAsgIArgDQgjEAAJDqQAWG+DmKvQBGDUBaDoIBSDSQA2CogCGsQgpgThAg3g");
	var mask_1_graphics_32 = new cjs.Graphics().p("AHCVTQhGg8hPhXQjCjWilkfQjQlkh7mNQiTnfgPn6QgEh/ABh4QDMg5DKhAQA5gSA4gTQAjgGAjgCQgjEAAJDqQAWG+DmKvQBGDUBaDoIBSDSQA2CogCGsQgpgThAg3g");
	var mask_1_graphics_33 = new cjs.Graphics().p("AHCVTQhGg8hPhXQjCjWilkfQjQlkh7mNQiTnfgPn6QgEh/ABh4QDMg5DKhAQA5gSA4gTQAjgGAjgCQgjEAAJDqQAWG+DmKvQBGDUBaDoIBSDSQA2CogCGsQgpgThAg3g");
	var mask_1_graphics_34 = new cjs.Graphics().p("AHCVTQhGg8hPhXQjCjWilkfQjQlkh7mNQiTnfgPn6QgEh/ABh4QDMg5DKhAQA5gSA4gTQAjgGAjgCQgjEAAJDqQAWG+DmKvQBGDUBaDoIBSDSQA2CogCGsQgpgThAg3g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(15).to({graphics:mask_1_graphics_15,x:39.6,y:-218.1}).wait(1).to({graphics:mask_1_graphics_16,x:31.1,y:-212.6}).wait(1).to({graphics:mask_1_graphics_17,x:25.2,y:-207.4}).wait(1).to({graphics:mask_1_graphics_18,x:25.2,y:-201.4}).wait(1).to({graphics:mask_1_graphics_19,x:25.2,y:-193.3}).wait(1).to({graphics:mask_1_graphics_20,x:25.2,y:-184.5}).wait(1).to({graphics:mask_1_graphics_21,x:25.2,y:-175}).wait(1).to({graphics:mask_1_graphics_22,x:25.2,y:-166.5}).wait(1).to({graphics:mask_1_graphics_23,x:25.2,y:-158.2}).wait(1).to({graphics:mask_1_graphics_24,x:25.2,y:-151.8}).wait(1).to({graphics:mask_1_graphics_25,x:25.2,y:-146.7}).wait(1).to({graphics:mask_1_graphics_26,x:25.2,y:-142}).wait(1).to({graphics:mask_1_graphics_27,x:25.2,y:-137.4}).wait(1).to({graphics:mask_1_graphics_28,x:25.2,y:-134.2}).wait(1).to({graphics:mask_1_graphics_29,x:25.2,y:-130.7}).wait(1).to({graphics:mask_1_graphics_30,x:25.2,y:-128.1}).wait(1).to({graphics:mask_1_graphics_31,x:25.2,y:-125.1}).wait(1).to({graphics:mask_1_graphics_32,x:25.2,y:-125.1}).wait(1).to({graphics:mask_1_graphics_33,x:25.2,y:-125.1}).wait(1).to({graphics:mask_1_graphics_34,x:25.2,y:-125.1}).wait(6));

	// banana outside right
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E3D463").s().p("EADYAlDQhGg8hPhXQjAjWinkfQjQlkh7mPQiTnfgPn4UgA8ggeAS4gA8IGCkjIgUA1IA8B3QmZCAiZD3QgFBahPDbIhODUQg0COggBmQhoEzgyEAQhAFOAOEnQAWG+DkKxQBGDUBaDoIBSDSQA2CogCGsQgpgThAg3g");
	this.shape_15.setTransform(48.6,-225.9);
	this.shape_15._off = true;

	this.shape_15.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(15).to({_off:false},0).wait(25));

	// banana outside
	this.instance_4 = new lib.banana();
	this.instance_4.setTransform(121.2,-839.1,1,1,45,0,0,97.3,254.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:97.2,rotation:0,x:30.2,y:-223.4},14,cjs.Ease.get(-1)).to({_off:true},1).wait(25));

	// banana inside
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F3F0CA").s().p("ACcb0Qicjbh3kNQiKkwhQlQQhZl6gMmMQgbuNEhoVQBzjUCfiOQCEh2Cag/QAjBRhBDcQgYBRgyCPIhdEHQh5Fhg3EDQhMFtATEyQAODsBYFYQAzDJCBGaQB4F+AnCkQBAEIgXB/QiNh7iLjFg");
	this.shape_16.setTransform(18.5,-216.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F8F8E8").s().p("EAGtAiGQhIgchYhIQjEigi4koQjYlWiFmkQiantgQoTQgVquCincQCDmDD1jkQC2itDfg9QBRgXBGgCQA8gDAXALQAxAXALBBQAJA6gWBkQgSBUguCJIhfEOQiKGLg8ECQhdGSAUFJQARELByGeQAoCSBBDTIBrFWQB4GHAVC2QAdD4hxA3QgSAJgYAAQgfAAgpgQg");
	this.shape_17.setTransform(-0.6,-212.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_17},{t:this.shape_16}]},15).wait(25));

	// biirds
	this.instance_5 = new lib.bird2_move();
	this.instance_5.setTransform(-739.3,-444.9,1,1,0,0,0,11.8,10.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(39).to({_off:false},0).wait(1));

	// banana shadow
	this.instance_6 = new lib.banana_shadow();
	this.instance_6.setTransform(12.1,2.8,0.25,1,0,0,0,0,5);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1,alpha:1},14,cjs.Ease.get(-1)).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.7,-1088,497.8,1095.8);


(lib.intro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4C4C4C").ss(1.1,1,1).p("AD2DIIhaAAImRmP");
	this.shape.setTransform(775.9,20.2);

	this.txtThisMenu = new cjs.Text("", "13px 'franklin-gothic-urw'", "#4C4C4C");
	this.txtThisMenu.name = "txtThisMenu";
	this.txtThisMenu.lineHeight = 11;
	this.txtThisMenu.lineWidth = 83;
	this.txtThisMenu.setTransform(806.5,53.4);
	this.txtThisMenu.text = "THIS MENU TO BEGIN AND TO GET AROUND.";

	this.txtUse = new cjs.Text("", "28px 'franklin-gothic-urw'", "#4C4C4C");
	this.txtUse.name = "txtUse";
	this.txtUse.lineHeight = 23;
	this.txtUse.lineWidth = 69;
	this.txtUse.setTransform(804,26.9);
	this.txtUse.text = "USE";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txtUse},{t:this.txtThisMenu},{t:this.shape}]}).wait(1));

	// Layer 1
	this.txtIntroTxt.name = "txtIntroTxt";
	this.txtIntroTxt.lineHeight = 26;
	this.txtIntroTxt.lineWidth = 801;
	this.txtIntroTxt.setTransform(82.8,190.6);
	this.txtIntroTxt.text += "You’re eating the gas the truck used to deliver that egg, the coal used to generate electricity for it’s refrigeration, and resources used to boil, fry or poach that yummy egg. And that’s you're human footprint — how much of the world you use in your lifetime. So, use the menu above to see how many of each item you consume during your lifetime and how that measures up with the rest of the world.\n\n";

	this.txtIntroHea = new cjs.Text("", "43px 'franklin-gothic-urw'", "#4C4C4C");
	this.txtIntroHea.name = "txtIntroHea";	
	this.txtIntroHea.textAlign = "center";
	this.txtIntroHea.lineHeight = 38;
	this.txtIntroHea.lineWidth = 956;
	this.txtIntroHea.setTransform(481.9,128.4);
	this.txtIntroHea.text = "When you eat an egg, you’re not just eating an egg.\n\n";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txtIntroHea},{t:this.txtIntroTxt}]}).wait(1));

	// Layer 3
	this.instance = new lib.bird2_move();
	this.instance.setTransform(-47.6,80.7,1,1,0,0,0,11.8,10.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,-0.8,959.8,430.8);


(lib.factcard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"enter":1,"exit":11});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
		this.stop();
	}
	this.frame_1 = function() {
		/* play();
		*/
		this.play();
	}
	this.frame_6 = function() {
		this.leavesflying1.gotoAndPlay("on");
	}
	this.frame_10 = function() {
		/* stop();*/
		this.stop();
	}
	this.frame_11 = function() {
		/* play();
		*/
		this.play();
	}
	this.frame_14 = function() {
		/* //stop();*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(5).call(this.frame_6).wait(4).call(this.frame_10).wait(1).call(this.frame_11).wait(3).call(this.frame_14).wait(1));

	// text
	this.txtFactTxt2 = new cjs.Text("", "15px 'franklin-gothic-urw'", "#D1CBB9");
	this.txtFactTxt2.name = "txtFactTxt2";
	this.txtFactTxt2.lineHeight = 15;
	this.txtFactTxt2.lineWidth = 285;
	this.txtFactTxt2.setTransform(-205.6,-137.3);

	this.txtFactTxt3 = new cjs.Text("", "15px 'franklin-gothic-urw'", "#D1CBB9");
	this.txtFactTxt3.name = "txtFactTxt3";
	this.txtFactTxt3.lineHeight = 15;
	this.txtFactTxt3.lineWidth = 285;
	this.txtFactTxt3.setTransform(-205.6,-90.6);

	this.txtFactTxt1 = new cjs.Text("", "15px 'franklin-gothic-urw'", "#D1CBB9");
	this.txtFactTxt1.name = "txtFactTxt1";
	this.txtFactTxt1.lineHeight = 15;
	this.txtFactTxt1.lineWidth = 285;
	this.txtFactTxt1.setTransform(-205.6,-182.3);

	this.txtFactHea = new cjs.Text("", "28px 'franklin-gothic-urw'", "#F4F2EE");
	this.txtFactHea.name = "txtFactHea";
	this.txtFactHea.lineHeight = 22;
	this.txtFactHea.lineWidth = 422;
	this.txtFactHea.setTransform(-204.6,-248.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txtFactHea},{t:this.txtFactTxt1},{t:this.txtFactTxt3},{t:this.txtFactTxt2}]}).wait(15));

	// fact graphics
	this.factgraphics = new lib.factgraphics();
	this.factgraphics.setTransform(162.1,-100,1,1,0,0,0,64.7,99);

	this.timeline.addTween(cjs.Tween.get(this.factgraphics).wait(15));

	// earth
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#82DC5E").s().p("EgjcABZIAAiyMBG6AAAIAACyg");
	this.shape.setTransform(-0.2,-263);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7A6B3D").s().p("AgMAAQgBgNALgBQAJgBAFAPQAFAPgPAAQgNAAgBgPg");
	this.shape_1.setTransform(190.9,-238.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7A6B3D").s().p("AgMAAQgBgNALgBQAJgBAFAPQAFAPgPAAQgNAAgBgPg");
	this.shape_2.setTransform(-176.7,-246.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7A6B3D").s().p("AgMAKQgKgJAFgJQAFgLAMABQALABAGAIQAGAIgGAJQgHALgIAAQgFAAgJgJg");
	this.shape_3.setTransform(-164.8,-243.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7A6B3D").s().p("AgOANQgMgMAGgLQAGgMAOABQANABAGAJQAIAKgIALQgHAMgKAAQgGAAgKgJg");
	this.shape_4.setTransform(211.1,-232.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7A6B3D").s().p("AgOAAQgCgPANgBQALgBAGARQAFASgRAAQgPAAgBgSg");
	this.shape_5.setTransform(207.7,-238.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7A6B3D").s().p("AgKAZIgNgPQgFgGABgEQACgHAJgFQAGgCAFgJQADgGADACQAGACgHAOQgFALAFAAQAEABAIgFQAHgGAGADQAHAFgIAHIgSATQgFAFgDgBQgEAAgEgDg");
	this.shape_6.setTransform(-215.1,-243);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7A6B3D").s().p("AgOANQgMgMAGgLQAGgMAOABQANABAHAJQAHAKgHALQgIAMgKAAQgGAAgKgJg");
	this.shape_7.setTransform(-216,-226.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7A6B3D").s().p("AgOAAQgCgPANgBQALgBAGARQAFASgRAAQgPAAgBgSg");
	this.shape_8.setTransform(-219.4,-232.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#49B900").s().p("EgjcAAHIAAgNMBG6AAAIAAANg");
	this.shape_9.setTransform(-0.2,-254.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8C7D4F").s().p("EgjcAVKMAAAgqUMBG6AAAMAAAAqUg");
	this.shape_10.setTransform(-0.2,-136.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(15));

	// leaves
	this.leavesflying1 = new lib.leavesflying1();
	this.leavesflying1.setTransform(-39.5,-327.6,1,1,0,0,0,4.2,5.6);

	this.timeline.addTween(cjs.Tween.get(this.leavesflying1).wait(15));

	// behind scenes
	this.butBehind = new lib.but_behindscenes();
	this.butBehind.setTransform(42.7,-218.8);

	this.timeline.addTween(cjs.Tween.get(this.butBehind).to({scaleY:1.08,y:-272.3},6).to({scaleY:0.94,y:-269.8},2).to({scaleY:1,y:-271.8},2).wait(1).to({scaleY:1.08},0).to({scaleY:1,y:-218.8},3).wait(1));

	// trees
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#075D00").s().p("Ag5AcIAAgHQAAgCAOgTQAFgEADgKIANgNIAyAJIAeAJIgJAlg");
	this.shape_11.setTransform(-194.3,-274.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#075D00").s().p("AguAmQAAgEAEgGQADgEAEAAIAIAAIAHgFIAPAAQgEgHgGABIgMADQAEgQANgIQAIgFAEABQADAAALAGQgCgLgDgBIgCAAIgDAAIgFgFQgGgDgIAIIgNAPIAEgUQADgJAJgCIAKgCIAAgEIACgEIAHAAQAIAAACACIABAFIAFAEIACAGIAAAIQAEAQAAAGQAJABABABQADADgGALQAJAAgBATIAAAEIgiABIgQgDQgLgCgHABIgOAFIgDABQgGAAgBgHg");
	this.shape_12.setTransform(-28.5,-278);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2E7500").s().p("Ag+BAIAAgHIABgJIAFgTQADgKAIgEIAFAAQAEAAABgCIABgPIACgKIABgNIADgEIADgDIACgKIAGgIQAEgEAHACQAFgPANABQAJAAAFAKIAFAIQACAFAEAFQAJALgGAVQAJABACADQACACAAARIAGABIACASIACAAIgCAeIh0ABIgBAAQgEAAgCgDg");
	this.shape_13.setTransform(-28.9,-277.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#075D00").s().p("AgkACIAOgJQARgJAFAAQALAAAGAEIACADIACAFIAGAEQAFgCAEACQAEADgBAGIgGABIgXgDQgVgFgYAPQgFgJAEgGg");
	this.shape_14.setTransform(-194.1,-277.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#075D00").s().p("AgHA5QgSgDgKABQgmAGgBgbQAAgFAHgGQAEgFAHABIANgBIALgFIAYgBQgHgIgJACIgTAEQAHgSATgKQANgFAHABQAGAAARAHQgEgNgEgCIgIAAIgEgCIgEgCQgKgEgNAJIgVAQQAEgSACgEQAGgLAOgBIAIAAQAFABADgDIABgFIADgEQACgBAJAAQANABADACQAAAFACABIAGADQAEADABAEIAAAJQAFAXAAAEQAPACACABQAEACgJAMQAOAAgBAVIAAAZIg3ABg");
	this.shape_15.setTransform(-216.4,-277.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#308300").s().p("Ai9BIQgCgCABgGIABgKIAKgVQADgLANgFIAIAAQAGAAACgCIAAgEIAAgEIACgJIAEgLIABgPQABgDADgCIAFgDIAEgMIAIgJQAGgEANACQAJgRAVABQAPABAJAKIAHAKQADAGAHAGQAOALgJAYQAOACACADQADACAAATQADABAFAAIADAUIAYAAIAPAEQAKACAEgDQACgCADgIQACgIADgCIAHgBIAIAAIAAgOQAFgBABgCIACgGQAEgLAVgHIAJgEQAOgHAEABQAHAAAGAEIAJAJIAGACIADAEIADAEIAJAIQAEAGAAAHIgCAHIgDAHIgBAIQAAAFgCADQgFAIgJACIgSACQgIAAgkAKQgUAFgwABQgyACiaAAIgNABQgJAAgCgEg");
	this.shape_16.setTransform(-207.9,-277.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#197500").s().p("AgDATIAEgIIACgFIgBgIIgCgGIgBgDIgCgEIgFgEIAFACQAAgCAGACQAGADAAAMIgDAMQgCAKgFAAIgCgBg");
	this.shape_17.setTransform(-109.5,-273.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#197500").s().p("AgMANQgBgCAFgIQABgDAAgCQgBgFADgCIAEgGQABgEACgBQAGgDAGADQgJAEgEAIIgBAGIAAAEIgEALQAAAEACAGQgIgCgCgIg");
	this.shape_18.setTransform(-132.4,-274.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#197500").s().p("AgLAJQgBgIADgFQAFgPARgBIgBACQAAABgFAEIgHAGIgDAGIAAAEIgEAHIACALQgGgDAAgJg");
	this.shape_19.setTransform(-122.3,-274);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#075D00").s().p("Aj3AlQgDgDgCgGQgDgHACgFIAIgJQACgDgCgIQgBgIAFgEIAGgCIAEgHIAGgGQAIgFAJAAIAQAGIAOgDQAGAAAFAGQAHAHADACQAEABAHgCQAIgDADACIAKAIQAGACAFgEIAKgFQAGgDAIACIANAGQAFABALABQALAAAFACQAQAHAJgGQACgBABgDQAEgCAIAAIAQACQAAgNAFgDQAEgDANAAQATAAAHAEQADACADAGQADAHACABIAKADIAHAEIAHAAIARgFQALgDAGAEIAEAFIADADQAFABAMgCIAOgIQAGgDALAFQAOAHAKgFIAFgEIAFgDQAMgBAKAMIAEAGIAHAEQAIAHgFAIIgJAOg");
	this.shape_20.setTransform(-119,-274.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#197500").s().p("AkGArQgFgGACgNQACgNAFgEQgFgIAJgOQAEgFAIgEIANgHIAFgFQAEgEAIgCQAQgCAGANQAFgHAPADQAMADAIAFIAEAEIAJABQALABAFAHQAEgDASgBIAUgBIARAGQADgDACAAIAHABIAQAGIAHgDIAOgEIAMgBQABgOAQgFQAOgEAPADQAMACAJAKIADAEIAMAFQAHADACAGIAOgEQAOgEALACIAIAEIAHAEQAFACAHgEQAMgGAXAFQAGABAHgDIALgHQAJgDAQAJQALAFAFAGQASAVgMAWg");
	this.shape_21.setTransform(-119.1,-275.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#075D00").s().p("AiXAhIgvgJIgIgJQAIgJgHgGIgGgGIgFgGQgFgMAQgCQAGAAAIADIAMAFIAQADIAOgCQAJgCAFADIAMAOQAHAHAHgCQABgDgCgDIgEgJQAEAAADgEIAEgEQAGgDAMAAQAHAAAWADIgDARQgBALAJgIQACAAABgEIACgIIAGgGIAHgFIAFgGIAIgEQAPgFAHABIAKAEIAMAAQAVAEAFAFIgNAKQgFAFABAJIARgPQAFgDAPgBIAHgCIAGgCIATgBIAKgHQALgFAOAAQAcACAAANQAhAAAAASQAJACAGAIQAGAJgBAJIhAACQgnACgZAEQgdAEhaABIgVAAQhCAAgjgFg");
	this.shape_22.setTransform(-71.7,-273.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#197500").s().p("AiwAoIg9gFIgIgCQgCgBgCgFQgCgJAGgKQAIgJAAgEIAAgNQAUgMAPgCQAIgCALADQAOAEAFAAIAOAAQAAAAAAAAQABAAAAAAQABABAAAAQAAAAABABIADACIAOAAIAJAFQAGADAEAAQAGgNAYgBQAHAAAUAGQAAABABAAQAAAAABAAQAAABABAAQAAAAABABIADABIAlgZQAKgGALACIAKADIAMgBQAFABAHAHIAEAFIADADQAEABAIgBIAMgBIAAAEQAJAEAOgJQATgLAFgBQAUgDAXAKIAoASQAPAHALAPIAHAIIAJAIQAFAGgEAHQgDAEgTACQgVABhDABQg3AAgiAFQgeAEgpAAQhAAAhbgJg");
	this.shape_23.setTransform(-72.2,-273.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#075D00").s().p("Ah4AXQgFgGAVgGQATgGAFABIATABQAJACACgBIAEgEQAHgEAIABQAFgGALgDQAOgDADADQgMALACAFQAPgIAFAAQAHACACAIQASABACgHIABgEQACgEAEgCQAEgCAKAAQACgMANgDQAJgBgBAFIgCACIgBADIAFACIAHAGQAJgDADACIAKAFQAGAIgBAEQAAAIgPACQgVAFghgFQgNgCgbABIgzgBQghAAgKABIgYADIgKACIgEgBg");
	this.shape_24.setTransform(167.2,-272.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#075D00").s().p("Aj2AjQAAgJACgNIAEgUIAMgFQACgHAJgEIAGgCIAKAAIAJgGQATgGANACQAGABACAEQADAGADABIARAGQALAEACAHIAVgGQANAAANAHIAJAGQAGAEAGgCIADgBIADgCQAIAAADAGIAGAKQAKgDgGgLIgGgEQgCgDADgEQAGgGAIABQADAAACACIADADQAEADAMADQAMADAEAEQAUgGAAgEQAGAAAHgCQALgFAGAAQAUgBAKANIAEAIQACAHAFAAQAIABACgIQACgHgHgBIAPABQAJAAAFgCQADgCAFgHQAEgFAHAAQAggDAQAGQAOAFAIALQAIANgGAMIijAAQhRAAhEAEQhhAEgxAAIgggBg");
	this.shape_25.setTransform(201.2,-272.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#308300").s().p("AkKAkIAAg3QAHgNATACQAKAAAIAQQAEAAAEgFQAEgGACgBIAOgGQALgCADAGIAYgGQAOgCALAGQATAIgBAMQAVgFAGABIAjARQAHACAFgBQAEgBANgFQAKgFAIAAQAEAAAOAGQAMAFAJgDIANgHIAMAAIANgEQAJgCAHABQAHAAAVAKQARAGALgDIAJgDIAHgFQALgIAOgBQAGgBAaAEQAkAHAKASIADALQABAKgEACg");
	this.shape_26.setTransform(200.5,-274.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#308300").s().p("AA9AfQgLAAgngEIgxgCIg6ABQgLAAgCgEQgBgCAEgGIAHgGQADgCAHAAIALAAQAhgGAHAAIAJACIAFgCIAIgCQAHgDACgDQAHgMAUAEQARAEAKAKQACgCAFgCQAFgBABgCIABgFIABgDIAJgHIAHgBIAIgBIAGgEIAPAFIACAFQACAFgBAZIAAALQAAAIgEABQgCABgMAAg");
	this.shape_27.setTransform(164.6,-273.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#075D00").s().p("ABFAoQhJgFhMAAIhSABQgxABgggCQgGgPAIgQQAIgNAOgHQARgIAfAEQAHABAEAGQAFAJADACQAFACAJAAIAPgBQgGABABAJQACAKAIgBQAFAAACgIIAEgKQAKgQAUAAQAGAAALAGQAGADAIAAQgBAGAUAHQAEgGAMgDQAMgEAEgDIADgEIAFgDQAIgBAGAIQADAEgCADIgFAGQgHAOAKADIAEgGIACgGQAFgHAGAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABIADACQAGACAGgGIAKgHQAMgJANABIAWAHQABgJALgEIASgHQACgCADgHQACgFAGgCQAOgDASAJIAJAHIAKAAIAGACQAJAFACAIIANAHIADAZQACARAAAKIgcABQgwAAhmgFg");
	this.shape_28.setTransform(-169.3,-273.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#308300").s().p("AkIAsQgDgDABgLIADgOQAJgWAkgJQAagFAGABQAOABAMAKIAHAHIAIADQALAEASgIQAVgMAHgBQAHAAAIADIAOAEIAGAAIAGABIANAIQAIAEAMgGQAOgIAFAAQAIAAAKAGQAMAHAFABQAFACAGgEIAMgFIAHgEIAIgGIAJgFQAHgCATAGQAAgOATgLQALgGAOACIAYAHQAGgMAWAOIAGAJQAEAGADABQAJgUAKgBQASgBAIAQIAABDg");
	this.shape_29.setTransform(-168.6,-275.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#004E00").s().p("AgkACIAOgJQARgJAFAAQALAAAGAEIACADIACAFIAGAEQAFgCAEACQAEADgBAGIgGABIgXgDQgVgFgYAPQgFgJAEgGg");
	this.shape_30.setTransform(135.6,-275);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#004E00").s().p("AhKAsQAAgFAHgHQAEgEAHAAIANgBIALgFIAYAAQgHgIgJABIgTAEQAHgTATgIQANgGAHABQAGAAARAHQgEgNgEgBIgIAAIgEgDIgEgCQgKgDgNAJIgVAQQAEgTACgEQAGgKAOgCIAIABQAFAAADgDIABgEIADgFQACgBAJAAQANABADACQAAAFACABIAGAEQAEACABAFIAAAJQAFAVAAAEQAPABACACQAEADgJAMQAOABgBAUIAAAFIg3ABIgagDQgRgDgLACIgXAFIgGABQgJAAgBgHg");
	this.shape_31.setTransform(113.3,-275.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2E7500").s().p("Ai9BIQgCgCABgGIABgKIAKgVQADgLANgFIAIAAQAGAAACgCIAAgEIAAgEIACgJIAEgLIABgPQABgDADgCIAFgDIAEgMIAIgJQAGgEANACQAJgRAVABQAPABAJAKIAHAKQADAGAHAGQAOALgJAYQAOACACADQADACAAATQADABAFAAIADAUIAYAAIAPAEQAKACAEgDQACgCADgIQACgIADgCIAHgBIAIAAIAAgOQAFgBABgCIACgGQAEgLAVgHIAJgEQAOgHAEABQAHAAAGAEIAJAJIAGACIADAEIADAEIAJAIQAEAGAAAHIgCAHIgDAHIgBAIQAAAFgCADQgFAIgJACIgSACQgIAAgkAKQgUAFgwABQgyACiaAAIgNABQgJAAgCgEg");
	this.shape_32.setTransform(121.8,-275.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-227.2,-285.2,510.9,284.2);


(lib.trees1_move = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"move_right":1,"move_left":51});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();
		*/
		console.log("trees_move 0");
		this.stop();
	}
	this.frame_1 = function() {
		/* play();
		*/
		console.log("trees_move 1");
		this.play();
	}
	this.frame_49 = function() {
		/* stop();
		
		//_parent.showBehind();
		//_parent.showQuestion();
		
		trace(_parent.curScreen);
		if (_parent.curScreen == "question") {
			_parent.showQuestion();
		} else if (_parent.curScreen == "question-answer") {
			_parent.showQuestionAnswer();
		} else {
			_parent.showBehind();
		}
		*/
		console.log("trees_move end 49");
		console.log("parent.curScreen: " + parent.curScreen);
		if (parent.curScreen == "question") {
			parent.showQuestion();
		} else if (parent.curScreen == "question-answer") {
			parent.showQuestionAnswer();
		} else {
			parent.showBehind();
		}
		this.stop();
		
		
		
		
		//alert("stop");
		//fp.test();
		/*this.getStage().fp.console.log("trees_move end 49");
		if (fp.curScreen == "question") {
			fp.showQuestion();
			console.log("fp.curScreen: " + fp.curScreen)
			console.log("fp.showQuestion")
		} else if (fp.curScreen == "question-answer") {
			fp.showQuestionAnswer();
			console.log("fp.curScreen: " + fp.curScreen)
			console.log("fp.showQuestionAnswer")
		} else {
			//fp.showBehind();
			//console.log("fp.curScreen: " + fp.curScreen)
			//console.log("fp.showBehind")
		}*/
	}
	this.frame_50 = function() {
		/* stop();
		*/
		console.log("trees_move end 50");
		//fp.mcEggs.visible = true;
		//fp.mcEggs.gotoAndPlay("play");
		this.stop();
	}
	this.frame_51 = function() {
		/* play();
		*/
		this.play();
	}
	this.frame_99 = function() {
		/* stop();*/
		
		//if (_parent.curScreen == "intro" || _parent.curScreen == "question" || _parent.curScreen == "answer") {
		////if (_parent.curScreen == "behind") {
		//	//_parent.showBehind();
		//	_parent.showQuestion();
		//} else {
		//	_parent.showBehind();
		//	//_parent.showQuestion();
		//}
		
		//parent.showBehind();
		//parent.test();
		console.log("curScreen from trees: " + parent.curScreen);
		if (parent.curScreen == "question") {
			parent.showQuestion();
		} else if (parent.curScreen == "question-answer") {
			parent.showQuestionAnswer();
		} else {
			parent.showBehind();
		}
		console.log("trees_move end 99");
		//fp.mcEggs.visible = true;
		//fp.mcEggs.gotoAndPlay("play");
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(48).call(this.frame_49).wait(1).call(this.frame_50).wait(1).call(this.frame_51).wait(48).call(this.frame_99).wait(1));

	// Layer 1
	this.instance = new lib.trees1("single",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-1002.7},49,cjs.Ease.get(1)).wait(1).to({startPosition:0},0).to({x:0},49,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.7,-36.9,1477.9,37);


(lib.cloud2_moves = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"move_right":1,"move_left":51});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();
		*/
		this.stop();
	}
	this.frame_1 = function() {
		/* play();
		*/
		this.play();
	}
	this.frame_49 = function() {
		/* stop();
		*/
		this.stop();
	}
	this.frame_50 = function() {
		/* stop();
		*/
		this.stop();
	}
	this.frame_51 = function() {
		/* play();
		*/
		this.play();
	}
	this.frame_99 = function() {
		/* stop();
		*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(48).call(this.frame_49).wait(1).call(this.frame_50).wait(1).call(this.frame_51).wait(48).call(this.frame_99).wait(1));

	// Layer 1
	this.instance = new lib.cloud2_1();
	this.instance.setTransform(749.6,101.9,1,1,0,0,0,749.6,101.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-212.5},49).wait(1).to({x:749.6},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1499.3,203.9);


(lib.menu_moves = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{still:0,"enter":1,"exit":15});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
		this.stop;
	}
	this.frame_1 = function() {
		/* play(); */
		this.play;
	}
	this.frame_14 = function() {
		/* stop();*/
		this.stop();
	}
	this.frame_15 = function() {
		/* play();
		*/
		this.play;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(13).call(this.frame_14).wait(1).call(this.frame_15).wait(15));

	// menubutton
	this.butMenu = new lib.menubutton();
	this.butMenu.setTransform(0,57);
	new cjs.ButtonHelper(this.butMenu, 0, 1, 2, false, new lib.menubutton(), 3);
	
	/*this.butMenuNext = new lib.but_menuhighlight();
	this.butMenuNext.setTransform(753.5,0.1,0.935,1);
	new cjs.ButtonHelper(this.butMenuNext, 0, 1, 2, false, new lib.but_menuhighlight(), 3);*/

	this.timeline.addTween(cjs.Tween.get(this.butMenu).wait(1).to({alpha:0},2).wait(1).to({y:27},0).wait(11).to({y:57},0).wait(12).to({alpha:1},2).wait(1));

	// menu
	this.mcMenu = new lib.menu();
	this.mcMenu.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.mcMenu).to({y:56.9},14,cjs.Ease.get(1)).to({y:-0.1},15,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,960,84.8);


(lib.showers = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"stop":0,"play":1});

	// timeline functions:
	this.frame_0 = function() {
		//
		///*shoer_start.stop();
		//shower_loop.stop();
		//shower_duck.stop();*/
		//
		//
		//auShowerLoop.stop();
		//
		//// shower start
		//var mcShowerStart:MovieClip = this.createEmptyMovieClip("mcShowerStart", this.getNextHighestDepth());
		//var auShowerStart:Sound = new Sound(mcShowerStart);
		//auShowerStart.attachSound("shower_start");
		//auShowerStart.setVolume(30);
		//
		//// shower loop
		//var mcShowerLoop:MovieClip = this.createEmptyMovieClip("mcShowerLoop", this.getNextHighestDepth());
		//var auShowerLoop:Sound = new Sound(mcShowerLoop);
		//auShowerLoop.attachSound("shower_loop");
		//auShowerLoop.setVolume(30);
		//
		//// shower duck
		//var mcShowerDuck:MovieClip = this.createEmptyMovieClip("mcShowerDuck", this.getNextHighestDepth());
		//var auShowerDuck:Sound = new Sound(mcShowerDuck);
		//auShowerDuck.attachSound("shower_duck");
		//auShowerDuck.setVolume(30);
		//
		//stop();
		//
		this.stop();
	}
	this.frame_1 = function() {
		/* 
		if (_parent.curMusicState == "on") {
			auShowerStart.start();
		}
		
		play();
		*/
	}
	this.frame_99 = function() {
		/* 
		if (_parent.curMusicState == "on") {
			auShowerLoop.start(0, 20);
		}*/
	}
	this.frame_212 = function() {
		/* 
		if (_parent.curMusicState == "on") {
			auShowerDuck.start();
		}*/
	}
	this.frame_299 = function() {
		/* stop();
		*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(98).call(this.frame_99).wait(113).call(this.frame_212).wait(87).call(this.frame_299).wait(1));

	// Layer 7
	this.instance = new lib.shower_water_move();
	this.instance.setTransform(0,226.5,1,1,0,0,0,480,216.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-133.5},212,cjs.Ease.get(0.5)).wait(88));

	// duck
	this.instance_1 = new lib.showers_duck_bob();
	this.instance_1.setTransform(-554.1,-91.1,1,1,0,0,0,54,49.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({x:-68.1,y:-383.1},183,cjs.Ease.get(0.5)).to({x:231.9},87).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-485.3,1.2,970,744.8);


(lib.factcardmoves = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"off":0,"enter":1,"exit":69});

	// timeline functions:
	this.frame_0 = function() {
		/* 
		// fact card up
		var mcCardAudio:MovieClip = this.createEmptyMovieClip("mcCardAudio", this.getNextHighestDepth());
		var auCardUp:Sound = new Sound(mcCardAudio);
		auCardUp.attachSound("m_cardup");
		auCardUp.setVolume(100);
		
		stop();*/
		this.stop();
	}
	this.frame_1 = function() {
		/* //stop();
		play();
		*/
	}
	this.frame_8 = function() {
		/* this.dirtfalling1.gotoAndPlay("on");
		
		if (_parent.curMusicState == "on") {
			auCardUp.start();
		}
		*/
	}
	this.frame_68 = function() {
		/* stop();*/
		this.stop();
		this.mcFactcard.gotoAndPlay("enter");
	}
	this.frame_70 = function() {
		this.dirtfalling2.gotoAndPlay("on");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(7).call(this.frame_8).wait(60).call(this.frame_68).wait(2).call(this.frame_70).wait(20));

	// factcard
	this.mcFactcard = new lib.factcard();
	this.mcFactcard.setTransform(0,312);

	this.timeline.addTween(cjs.Tween.get(this.mcFactcard).to({scaleY:1.03,y:1.1},9).to({scaleY:0.98},2).to({scaleY:1},2).wait(56).to({scaleY:1.05},0).to({scaleY:1,y:312},20).wait(1));

	// dirtfalling1
	this.dirtfalling1 = new lib.dirtfalling1();
	this.dirtfalling1.setTransform(-185.8,-274.9);

	this.timeline.addTween(cjs.Tween.get(this.dirtfalling1).to({_off:true},69).wait(21));

	// dirtfalling2
	this.dirtfalling2 = new lib.dirtfalling2();
	this.dirtfalling2.setTransform(-7,-282.1);
	this.dirtfalling2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.dirtfalling2).wait(69).to({_off:false},0).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-227.2,-21.2,510.9,332.2);


// stage content:



(lib.footprint30_Scene1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{game:0});

	// timeline functions:
	this.frame_0 = function() {
		//
		//// imports
		//import mx.video.*;
		//import mx.transitions.*;
		//import mx.transitions.easing.*;
		//
		///* var ************************************************************************************/
		//
		///* mc vars */
		var mcBehind = this.mcBehind;
			var txtBehindHea = mcBehind.txtBehindHea;
			var txtBehindTxt = mcBehind.txtBehindTxt;
			var flvBehindVid = mcBehind.flvBehindVid;
			var mcBehindPho = mcBehind.mcBehindPho;
			var butBackToFacts = mcBehind.butBackToFacts;
				var txtBackToFacts = butBackToFacts.txtBackToFacts;
				var mcBakArrow = butBackToFacts.mcBakArrow;
			var butBehindNextPho = mcBehind.butBehindNextPho;
				var txtBehindNextPho = butBehindNextPho.txtBehindNextPho;
				var mcNextArrow = butBehindNextPho.mcNextArrow;
		var mcData = this.mcData;
			var mcJapanAvg = mcData.mcJapanAvg;
				var txtJapanAvg = mcJapanAvg.txtJapanAvg;
				var txtJapanAvgOther = mcJapanAvg.txtJapanAvgOther;
			var mcUSAvg = mcData.mcUSAvg;
				var txtUSAvg = mcUSAvg.txtUSAvg;
				var txtUSAvgOther = mcUSAvg.txtUSAvgOther;
			var mcWorldAvg = mcData.mcWorldAvg;
				var txtWorldAvg = mcWorldAvg.txtWorldAvg;
				var txtWorldAvgOther = mcWorldAvg.txtWorldAvgOther;
			var mcYourAvg = mcData.mcYourAvg;
				var txtYourAvg = mcYourAvg.txtYourAvg;
				var txtYourAvgOther = mcYourAvg.txtYourAvgOther;
		var mcFactCardMoves = this.mcFactCardMoves;
			var mcFactCard = mcFactCardMoves.mcFactcard;
				var mcFactCardGraphics = mcFactCard.factgraphics;
				var txtFactHea = mcFactCard.txtFactHea;
				var txtFactTxt1 = mcFactCard.txtFactTxt1;
				var txtFactTxt2 = mcFactCard.txtFactTxt2;
				var txtFactTxt3 = mcFactCard.txtFactTxt3;
				var butBehind = mcFactCard.butBehind;
					var txtBehind = butBehind.txtBehind;
		var mcIntro = this.mcIntro;
			var txtIntroHea = mcIntro.txtIntroHea;
			var txtIntroTxt = mcIntro.txtIntroTxt;
			var txtUse = mcIntro.txtUse;
			var txtThisMenu = mcIntro.txtThisMenu;
		var mcMessagesMove = this.mcMessagesMove;
			var mcMessages = mcMessagesMove.mcMessages;
				var txtMessages = mcMessages.txtMessages;
				var butMessagesClose = mcMessages.butMessagesClose;
					var txtClose = butMessagesClose.txtClose;
		var butMute = this.butMute;
		var mcQuestion = this.mcQuestion;
			var butEnter = mcQuestion.butEnter;
				var txtEnter = butEnter.txtEnter;
			var txtQuestion = mcQuestion.txtQuestion;
			var txtInput = mcQuestion.txtInput;
			var mcInputBak = mcQuestion.mcInputBak;
		// environment
		var mcCloud1Moves = this.mcCloud1Moves;
		var mcCloud2Moves = this.mcCloud2Moves;
		var mcGroundMoves = this.mcGroundMoves;
		var mcMountainMoves = this.mcMountainMoves;
		var mcTreesMoves = this.mcTreesMoves;
		// items (in menu order)
		var mcEggs = this.mcEggs;mcCloud2Moves
		var mcNewspapers = this.mcNewspapers;
		var mcMilks = this.mcMilks;
		var mcCarMiles = this.mcCarMiles;
		var mcBananas = this.mcBananas;
		var mcSodas = this.mcSodas;
		var mcShowers = this.mcShowers;
		var mcPotatoes = this.mcPotatoes;
		var mcDiapers = this.mcDiapers;
		var mcSlices = this.mcSlices;
		// menu
		var mcMenuMoves = this.mcMenuMoves;
			var mcMenu = this.mcMenuMoves.mcMenu;
			var butMenu = this.mcMenuMoves.butMenu;
				var txtMenu = butMenu.txtMenu;
				// item buttons (in menu order)
				var mcMenuLast = this.mcMenuMoves.mcMenu.mcMenuLast;
					var txtMenuLast = mcMenuLast.txtMenuLast;
				var butMenuLast = this.mcMenuMoves.mcMenu.butMenuLast;
				var butMenuEggs = this.mcMenuMoves.mcMenu.butMenuEggs;
				var butMenuNewspapers = this.mcMenuMoves.mcMenu.butMenuNewspapers;
				var butMenuMilks = this.mcMenuMoves.mcMenu.butMenuMilks;
				var butMenuCarMiles = this.mcMenuMoves.mcMenu.butMenuCarMiles;
				var butMenuBananas = this.mcMenuMoves.mcMenu.butMenuBananas;
				var butMenuSodas = this.mcMenuMoves.mcMenu.butMenuSodas;
				var butMenuShowers = this.mcMenuMoves.mcMenu.butMenuShowers;
				var butMenuPotatoes = this.mcMenuMoves.mcMenu.butMenuPotatoes;
				var butMenuDiapers = this.mcMenuMoves.mcMenu.butMenuDiapers;
				var butMenuSlices = this.mcMenuMoves.mcMenu.butMenuSlices;
				var mcMenuNext = this.mcMenuMoves.mcMenu.mcMenuNext;
					var txtMenuNext = mcMenuNext.txtMenuNext;
				var butMenuNext = this.mcMenuMoves.mcMenu.butMenuNext;
		
		
		///* other vars */
		var curItem;
		var oldItem;
		var curItemMC;
		var curScreen;
		var moveDir;
		var moveTo;
		var curFactCardState;
		var curMusicState;
		var avgLifetime;
		var avgTimeframe;
		var yourAvg;
		var curVidState;
		var arrBehindPho;
		var curPho;
		var phoCount;
		var rawJapanAvg;
		var rawUSAvg;
		var rawWorldAvg;
		var rawYourAvg;
		var doEnter = false;
		//
		//
		//// intro sound
		//var mcIntroAudio:MovieClip = this.createEmptyMovieClip("mcIntroAudio", this.getNextHighestDepth());
		//var auIntro:Sound = new Sound(mcIntroAudio);
		//auIntro.attachSound("m_intro");
		//auIntro.setVolume(30);
		//
		//// game sounds
		//// transition
		//var mcTransitionAudio:MovieClip = this.createEmptyMovieClip("mcTransitionAudio", this.getNextHighestDepth());
		//var auTransition:Sound = new Sound(mcTransitionAudio);
		//auTransition.attachSound("m_transition");
		//auTransition.setVolume(50);
		//
		//// data ani
		//var mcDataAudio:MovieClip = this.createEmptyMovieClip("mcDataAudio", this.getNextHighestDepth());
		//var auData:Sound = new Sound(mcDataAudio);
		//auData.attachSound("m_data");
		//auData.setVolume(100);
		//
		//// behind rollover
		//var mcBehindOverAudio:MovieClip = this.createEmptyMovieClip("mcBehindOverAudio", this.getNextHighestDepth());
		//var auBehindOver:Sound = new Sound(mcBehindOverAudio);
		//auBehindOver.attachSound("m_behind_rollover");
		//auBehindOver.setVolume(100);
		//
		//// behind forward
		//var mcBehindForwardAudio:MovieClip = this.createEmptyMovieClip("mcBehindForwardAudio", this.getNextHighestDepth());
		//var auBehindForward:Sound = new Sound(mcBehindForwardAudio);
		//auBehindForward.attachSound("m_behind_forward");
		//auBehindForward.setVolume(100);
		//
		//// behind back
		//var mcBehindBackAudio:MovieClip = this.createEmptyMovieClip("mcBehindBackAudio", this.getNextHighestDepth());
		//var auBehindBack:Sound = new Sound(mcBehindBackAudio);
		//auBehindBack.attachSound("m_behind_bak");
		//auBehindBack.setVolume(100);
		//
		//// menu over
		//var mcMenuOver:MovieClip = this.createEmptyMovieClip("mcMenuOver", this.getNextHighestDepth());
		//var auMenuOver:Sound = new Sound(mcMenuOver);
		//auMenuOver.attachSound("m_menu_rollover");
		//auMenuOver.setVolume(100);
		//
		//
		///* functions ************************************************************************************/
		//
		///* init function */
		function init() {
			// init vars
			curScreen = "intro";
			curItem = 99;
			oldItem = 99;
			moveDir = "move_left";
			moveTo = "question";
			curFactCardState = "off";
			curMusicState = "on";
			avgLifetime = 77.75;
			avgTimeframe = 52;
			// set other text
			//setOtherContent();
			// start audio
			//auIntro.start();
			//auGame.start(0, 999);
			// init intro
			hideAll();
			//showIntro()
			//showMenu();
			console.log("init");
		}
		//
		///* intro function */
		//function showIntro() {
		//	setIntroContent();
		//	mcIntro._visible = true;
		//}
		//
		///* main functions */
		//function showAnswer() {
		//	if (yourAvg != -1) {
		//		showData();
		//	}
		//}
		//
		//function showBehind() {
		//	doEnter = false;
		//	// stop music
		//	if (curMusicState == "on") {
		//		auGame.stop();
		//	}
		//	curItemMC.gotoAndStop("stop");
		//	setBehindContent();
		//	mcBehind._visible = true;
		//}
		//
		//function showData(ani:Boolean) {
		//	setAvgContent();
		//	mcData._visible = true;
		//	if (ani != false) {
		//		animateData();
		//	}
		//	setFactContent();
		//	mcFactCardMoves._visible = true;
		//}
		//
		//function animateData() {
		//	doEnter = false;
		//	butEnter.enabled = false;	
		//	// order & check range
		//	var arrAvgs:Array = new Array();
		//	arrAvgs.push({mc: "mcUSAvg", avg: int(rawUSAvg)});
		//	arrAvgs.push({mc: "mcJapanAvg", avg: int(rawJapanAvg)});
		//	arrAvgs.push({mc: "mcWorldAvg", avg: int(rawWorldAvg)});
		//	arrAvgs.push({mc: "mcYourAvg", avg: int(rawYourAvg)});
		//	arrAvgs.sortOn("avg", Array.DESCENDING | Array.NUMERIC);
		//	// set order
		//	var top:Number;
		//	var topMC:MovieClip;
		//	var mid1:Number;
		//	var mid1MC:MovieClip;
		//	var mid2:Number;
		//	var mid2MC:MovieClip;
		//	var low:Number;
		//	var lowMC:MovieClip;	
		//	top = arrAvgs[0].avg;
		//	topMC = arrAvgs[0].mc;
		//	mid1 = arrAvgs[1].avg;
		//	mid1MC = arrAvgs[1].mc;
		//	mid2 = arrAvgs[2].avg;
		//	mid2MC = arrAvgs[2].mc;
		//	low = arrAvgs[3].avg;
		//	lowMC = arrAvgs[3].mc;	
		//	// percentage difference between all
		//	var topPercent:Number = top/top;
		//	var mid1Percent:Number = mid1/top;
		//	var mid2Percent:Number = mid2/top;
		//	var lowPercent:Number = low/top;
		//	var percentRange:Number = topPercent - lowPercent;	
		//	var minY:Number = 50;
		//	var maxY:Number = 410;
		//	var rangeY:Number = maxY - minY;	
		//	var topMCY:Number = maxY - (rangeY * topPercent);
		//	var mid1MCY:Number = maxY - (rangeY * mid1Percent);
		//	var mid2MCY:Number = maxY - (rangeY * mid2Percent);
		//	var lowMCY:Number = maxY - (rangeY * lowPercent);	
		//	// space out mcs from top
		//	if (mid1MCY <= (topMCY + 68)) {
		//		mid1MCY = mid1MCY + 64;
		//	}
		//	if (mid2MCY <= (mid1MCY + 68)) {
		//		if (mid2MCY <= mid1MCY) {
		//			mid2MCY = mid1MCY;
		//		}
		//		mid2MCY = mid2MCY + 64;
		//	}
		//	if (lowMCY <= (mid2MCY + 68)) {
		//		if (lowMCY <= mid2MCY) {
		//			lowMCY = mid2MCY;
		//		}
		//		lowMCY = lowMCY + 64;
		//	}
		//	// space out mcs from bottom
		//	if (lowMCY > maxY) {
		//		lowMCY = maxY;
		//	}	
		//	if (mid2MCY + 68 >= lowMCY) {
		//		mid2MCY = lowMCY - 64;
		//	}
		//	if (mid1MCY+ 68 >= mid2MCY) {
		//		mid1MCY = mid2MCY - 64;
		//	}
		//	// tween avg mcs	
		//	var tweenTop:Tween = new Tween(mcData[topMC], "_y", mx.transitions.easing.Strong.easeOut, 535, topMCY, .8, true);
		//	tweenTop.stop();
		//	var tweenMid1:Tween = new Tween(mcData[mid1MC], "_y", mx.transitions.easing.Strong.easeOut, 535, mid1MCY, .8, true);
		//	tweenMid1.stop();
		//	var tweenMid2:Tween = new Tween(mcData[mid2MC], "_y", mx.transitions.easing.Strong.easeOut, 535, mid2MCY, .8, true);
		//	tweenMid2.stop();
		//	var tweenLow:Tween = new Tween(mcData[lowMC], "_y", mx.transitions.easing.Strong.easeOut, 535, lowMCY, .8, true);
		//	tweenLow.stop();
		//	
		//	tweenTop.onMotionStarted = function() {
		//		callData();
		//	};	
		//	
		//	tweenMid1.onMotionStarted = function() {
		//		callData();
		//	};	
		//	tweenMid1.onMotionFinished = function() {
		//		tweenMid2.start();
		//	};
		//	
		//	tweenMid2.onMotionStarted = function() {
		//		callData();
		//	};
		//	tweenMid2.onMotionFinished = function() {
		//		tweenLow.start();
		//	};
		//	
		//	tweenLow.onMotionStarted = function() {
		//		callData();
		//	};
		//	tweenLow.onMotionFinished = function() {
		//		doEnter = true;
		//		butEnter.enabled = true;
		//		if (curFactCardState == "off") {
		//			curFactCardState = "on";
		//			mcFactCard.gotoAndStop(1);
		//			mcFactCardMoves.gotoAndStop(1);
		//			mcFactCardMoves.gotoAndPlay("enter");
		//		}
		//	}	
		//	
		//	tweenTop.start();	
		//}
		//
		//var intervalIdData:Number;
		//function callData() {
		//	intervalIdData = setInterval(this, "playDataAu", 400);
		//}
		//	
		//function playDataAu():Void {
		//	clearInterval(intervalIdData);
		//	if (curMusicState == "on") {
		//		auData.start();
		//	}
		//}
		//
		//function showQuestion() {
		//	doEnter = true;
		//	curItemMC = getItem();
		//	curItemMC._visible = true;
		//	curItemMC.gotoAndPlay("play");
		//	setQuestionContent();
		//	mcQuestion._visible = true;
		//	Selection.setFocus("txtInput");
		//}
		//
		//function showQuestionAnswer() {
		//	doEnter = true;
		//	curItemMC = getItem();
		//	curItemMC.gotoAndPlay("play");
		//	curItemMC._visible = true;
		//	setQuestionContent();
		//	mcQuestion._visible = true;
		//	if (curFactCardState == "off") {
		//		curFactCardState = "on";
		//		mcFactCard.gotoAndStop(1);
		//		mcFactCardMoves.gotoAndStop(1);
		//		mcFactCardMoves.gotoAndPlay("enter");
		//	}
		//	showData(false);
		//}
		//
		//function showMessages(msg:Number) {
		//	doEnter = false;
		//	butEnter.enabled = false;
		//	xmlNodeHandler = xmlRootHandler[2].childNodes;
		//	var txtfMessages:TextFormat = new TextFormat();
		//	txtfMessages.letterSpacing = -.7;
		//	txtfMessages.kerning = true;
		//	txtMessages.setNewTextFormat(txtfMessages);
		//	txtMessages.htmlText = xmlNodeHandler[msg].firstChild.nodeValue;
		//	mcMessagesMove.gotoAndPlay("enter");
		//}
		//
		//function hideMessages() {
		//	if (mcMessagesMove._currentframe == 10) {
		//		doEnter = true;
		//		butEnter.enabled = true;
		//		txtInput.text = "";
		//		Selection.setFocus("txtInput");
		//		mcMessagesMove.gotoAndPlay("exit");
		//	}
		//}
		//
		///* helper functions */
		//function calculateAvg() {
		//	var strInput:String = txtInput.text;
		//	if (strInput == "0")	{		
		//		yourAvg = 0;
		//	} else if (int(strInput) == 0) {
		//		yourAvg = -1;
		//		showMessages(0);
		//	} else {
		//		if (curItem == 3) { // car
		//			avgLifetime = 61.75;
		//			avgTimeframe = 365;
		//		} else if (curItem == 8) { // diapers
		//			avgLifetime = 3;
		//			avgTimeframe = 365;
		//		} else if (curItem == 9) { // bread
		//			avgTimeframe = 365;
		//		} else {		
		//			avgLifetime = 77.75;
		//			avgTimeframe = 52;
		//		}
		//		yourAvg = Math.round((Number(strInput) * avgTimeframe) * avgLifetime);
		//		if (yourAvg > 999999) {
		//			yourAvg = -1;
		//			showMessages(1);
		//		}
		//	}
		//}
		//
		//function addCommas(theNumber) {
		//	numString = theNumber + ""; //convert # to string
		//	newString = ""; //return string
		//	index = 1; // string index
		//	trip = 0; // trip, as in triple.
		//	while(numString.length >= index){
		//  	   if (trip!=3){ //haven't reached 3 chars yet
		//	      newString = numString.charAt(numString.length - index) + newString; //add char	
		//	      index++;
		//	      trip++;
		//	   }
		//	   else{ //reached 3 chars, add comma
		//	      newString = "," + newString;
		//	      trip=0;
		//	   }
		//	}
		//	return (newString);
		//}
		//
		//// content
		//function setOtherContent() {
		//	xmlNodeHandler = xmlRootHandler[3].childNodes;
		//	var txtfOther:TextFormat = new TextFormat();
		//	txtfOther.letterSpacing = -.5;
		//	txtfOther.kerning = true;	
		//	txtMenu.htmlText = xmlNodeHandler[0].firstChild.nodeValue;	
		//	txtMenuLast.setNewTextFormat(txtfOther);
		//	txtMenuLast.htmlText = xmlNodeHandler[1].firstChild.nodeValue;	
		//	txtMenuNext.setNewTextFormat(txtfOther);
		//	txtMenuNext.htmlText = xmlNodeHandler[2].firstChild.nodeValue;	
		//	txtEnter.htmlText = xmlNodeHandler[3].firstChild.nodeValue;	
		//	txtBackToFacts.htmlText = xmlNodeHandler[4].firstChild.nodeValue;
		//	txtBehindNextPho.htmlText = xmlNodeHandler[5].firstChild.nodeValue;	
		//	txtBehind.setNewTextFormat(txtfOther);
		//	txtBehind.htmlText = xmlNodeHandler[6].firstChild.nodeValue;
		//	txtBehind._alpha = 80;
		//	txtJapanAvgOther.setNewTextFormat(txtfOther);
		//	txtJapanAvgOther.htmlText = xmlNodeHandler[12].firstChild.nodeValue;
		//	txtUSAvgOther.setNewTextFormat(txtfOther);
		//	txtUSAvgOther.htmlText = xmlNodeHandler[7].firstChild.nodeValue;	
		//	txtWorldAvgOther.setNewTextFormat(txtfOther);
		//	txtWorldAvgOther.htmlText = xmlNodeHandler[8].firstChild.nodeValue;
		//	txtYourAvgOther.setNewTextFormat(txtfOther);
		//	txtYourAvgOther.htmlText = xmlNodeHandler[9].firstChild.nodeValue;
		//	var txtfClose:TextFormat = new TextFormat();
		//	txtfClose.letterSpacing = 2;
		//	txtfClose.kerning = true;	
		//	txtClose.setNewTextFormat(txtfClose);
		//	txtClose.htmlText = xmlNodeHandler[11].firstChild.nodeValue;	
		//	txtUse.setNewTextFormat(txtfOther);
		//	txtUse.htmlText = xmlNodeHandler[13].firstChild.nodeValue;
		//	txtThisMenu.setNewTextFormat(txtfOther);
		//	txtThisMenu.htmlText = xmlNodeHandler[14].firstChild.nodeValue;
		//}
		//
		//function setIntroContent() {
		//	xmlNodeHandler = xmlRootHandler[0].childNodes;
		//	var txtfIntroHea:TextFormat = new TextFormat();
		//	txtfIntroHea.letterSpacing = -1.5;
		//	txtfIntroHea.kerning = true;
		//	txtIntroHea.setNewTextFormat(txtfIntroHea);
		//	txtIntroHea.htmlText = xmlNodeHandler[0].firstChild.nodeValue;
		//	var txtfIntroTxt:TextFormat = new TextFormat();
		//	txtfIntroTxt.letterSpacing = -.05;
		//	txtfIntroTxt.kerning = true;
		//	txtIntroTxt.setNewTextFormat(txtfIntroTxt);
		//	txtIntroTxt.htmlText = xmlNodeHandler[1].firstChild.nodeValue;
		//}
		//
		//function setQuestionContent() {
		//	xmlNodeHandler = xmlRootHandler[1].childNodes;
		//	xmlNodeHandler2 = xmlNodeHandler[curItem].childNodes;
		//	var txtfQuestion:TextFormat = new TextFormat();
		//	txtfQuestion.letterSpacing = -1.7;
		//	txtfQuestion.kerning = true;
		//	txtQuestion.setNewTextFormat(txtfQuestion);
		//	txtQuestion.htmlText = xmlNodeHandler2[0].firstChild.nodeValue;
		//}
		//
		//function setAvgContent() {
		//	xmlNodeHandler = xmlRootHandler[1].childNodes;
		//	xmlNodeHandler2 = xmlNodeHandler[curItem].childNodes;
		//	rawUSAvg = xmlNodeHandler2[1].firstChild.nodeValue;
		//	var strUSAvg:String = addCommas(rawUSAvg);
		//	txtUSAvg.text = strUSAvg;
		//	rawWorldAvg = xmlNodeHandler2[2].firstChild.nodeValue;
		//	var strWorldAvg:String = addCommas(rawWorldAvg);
		//	txtWorldAvg.text = strWorldAvg;
		//	rawJapanAvg = xmlNodeHandler2[11].firstChild.nodeValue;
		//	var strJapanAvg:String = addCommas(rawJapanAvg);
		//	txtJapanAvg.text = strJapanAvg;
		//	rawYourAvg = yourAvg;
		//	var strYourAvg:String = addCommas(rawYourAvg);
		//	txtYourAvg.text = strYourAvg;	
		//	if (curItem == 8) {
		//		xmlNodeHandler = xmlRootHandler[3].childNodes;
		//		txtYourAvgOther.htmlText = xmlNodeHandler[10].firstChild.nodeValue;
		//	} else {
		//		xmlNodeHandler = xmlRootHandler[3].childNodes;
		//		txtYourAvgOther.htmlText = xmlNodeHandler[9].firstChild.nodeValue;
		//	}
		//}
		//
		//function setFactContent() {
		//	xmlNodeHandler = xmlRootHandler[1].childNodes;
		//	xmlNodeHandler2 = xmlNodeHandler[curItem].childNodes;
		//	var txtfFactHea:TextFormat = new TextFormat();
		//	txtfFactHea.letterSpacing = -1;
		//	txtfFactHea.kerning = true;
		//	txtFactHea.setNewTextFormat(txtfFactHea);
		//	txtFactHea.htmlText = xmlNodeHandler2[3].firstChild.nodeValue;
		//	var txtfFactTxt:TextFormat = new TextFormat();
		//	txtfFactTxt.letterSpacing = -.5;
		//	txtfFactTxt.kerning = true;
		//	txtFactTxt1.setNewTextFormat(txtfFactTxt);
		//	txtFactTxt2.setNewTextFormat(txtfFactTxt);
		//	txtFactTxt3.setNewTextFormat(txtfFactTxt);
		//	txtFactTxt1.htmlText = xmlNodeHandler2[4].firstChild.nodeValue;
		//	txtFactTxt2.htmlText = xmlNodeHandler2[5].firstChild.nodeValue;
		//	txtFactTxt3.htmlText = xmlNodeHandler2[6].firstChild.nodeValue;
		//	mcFactCardGraphics.gotoAndStop(curItem + 1);
		//}
		//
		//function setBehindContent() {
		//	xmlNodeHandler = xmlRootHandler[1].childNodes;
		//	xmlNodeHandler2 = xmlNodeHandler[curItem].childNodes;
		//	var txtfBehindHea:TextFormat = new TextFormat();
		//	txtfBehindHea.letterSpacing = -1.3;
		//	txtfBehindHea.kerning = true;
		//	txtBehindHea.setNewTextFormat(txtfBehindHea);
		//	txtBehindHea.htmlText = xmlNodeHandler2[7].firstChild.nodeValue;
		//	var txtfBehindTxt:TextFormat = new TextFormat();
		//	txtfBehindTxt.letterSpacing = .2;
		//	txtfBehindTxt.kerning = true;
		//	txtBehindTxt.setNewTextFormat(txtfBehindTxt);
		//	txtBehindTxt.htmlText = xmlNodeHandler2[8].firstChild.nodeValue;
		//	var strBehindVid:String = xmlNodeHandler2[9].firstChild.nodeValue;
		//	flvBehindVid.contentPath = strBehindVid;
		//	restartVid();	
		//	var strBehindPho:String = xmlNodeHandler2[10].firstChild.nodeValue;
		//	arrBehindPho = strBehindPho.split(",");
		//	curPho = 0;
		//	phoCount = arrBehindPho.length;
		//	mcBehindPho.loadMovie(arrBehindPho[curPho]);
		//	var tmNextPho:TransitionManager = new TransitionManager(mcBehindPho);
		//	tmNextPho.startTransition({type:Fade, direction:Transition.IN, duration:.5, easing:None.easeNone});	
		//	if (phoCount <= 1) {
		//		butBehindNextPho._visible = false;
		//	}
		//}
		//
		//function getItem():MovieClip {
		//	if (curItem == 0) {
		//		return mcEggs;
		//	} else if (curItem == 1) {
		//		return mcNewspapers;
		//	} else if (curItem == 2) {
		//		return mcMilks;
		//	} else if (curItem == 3) {
		//		return mcCarMiles;
		//	} else if (curItem == 4) {
		//		return mcBananas;
		//	} else if (curItem == 5) {
		//		return mcSodas;
		//	} else if (curItem == 6) {
		//		return mcShowers;
		//	} else if (curItem == 7) {
		//		return mcPotatoes;
		//	} else if (curItem == 8) {
		//		return mcDiapers;
		//	} else if (curItem == 9) {
		//		return mcSlices;
		//	}
		//}
		//
		//function moveEnvironment(dir:String) {
		//	hideAll();
		//	doEnter = false;
		//	mcCloud1Moves.gotoAndPlay(dir);
		//	mcCloud2Moves.gotoAndPlay(dir);
		//	mcGroundMoves.gotoAndPlay(dir);
		//	mcMountainMoves.gotoAndPlay(dir);
		//	mcTreesMoves.gotoAndPlay(dir);
		//}
		//
		function hideAll() {
			hideMenu();
			this.mcBehind.visible = false;
			this.mcData.visible = false;
			this.mcFactCardMoves.visible = false;
			this.mcFactCardMoves.gotoAndStop(1);
			this.curFactCardState = "off";
			this.curItemMC.gotoAndStop("stop");
			this.mcIntro.visible = false;
			this.mcQuestion.visible = false;
			// items (in menu order)
			this.mcEggs.visible = false;
			this.mcNewspapers.visible = false;
			this.mcMilks.visible = false;
			this.mcCarMiles.visible = false;
			this.mcBananas.visible = false;
			this.mcSodas.visible = false;
			this.mcShowers.visible = false;
			this.mcPotatoes.visible = false;
			this.mcDiapers.visible = false;
			this.mcSlices.visible = false;
		}
		//
		//function hideMenu() {
		//	if (this.mcMenuMoves.currentframe == 15) {
		//		this.mcMenuMoves.gotoAndPlay("exit");
		//	}
		//}
		//
		//function showMenu() {
		//	if (curScreen == "intro") {
		//		butMenuLast._visible = false;
		//		butMenuNext._visible = false;
		//		mcMenuLast._visible = false;
		//		mcMenuNext._visible = false;
		//	} else {
		//		butMenuLast._visible = true;
		//		butMenuNext._visible = true;
		//		mcMenuLast._visible = true;
		//		mcMenuNext._visible = true;
		//	}
		//	mcMenuMoves.gotoAndPlay("enter");
		//}
		//
		//function menuClick(item:Number, but:String) {
		//	hideMenu();
		//	if (curItem != item) {
		//		hideMessages();
		//		curItemMC.gotoAndStop("stop");
		//		if (curMusicState == "on") {
		//			auTransition.start();
		//		}
		//		stopVid();
		//		curScreen = "question";
		//		txtInput.text = "";
		//		oldItem = curItem;
		//		curItem = item;
		//		if (but == "last") {
		//			moveDir = "move_left";
		//		} else if (but == "next") {
		//			moveDir = "move_right";
		//		} else {
		//			if (curItem > oldItem) {
		//				moveDir = "move_right";
		//			} else {
		//				moveDir = "move_left";
		//			}
		//		}
		//		moveEnvironment(moveDir);
		//	}
		//}
		//
		//function nextPho() {
		//	trace("nextPho called");
		//	if (curPho < (phoCount - 1)) {
		//		curPho++;
		//	} else {
		//		curPho = 0;
		//	}	
		//	var tmNextPho:TransitionManager = new TransitionManager(mcBehindPho);
		//	tmNextPho.startTransition({type:Fade, direction:Transition.OUT, duration:.5, easing:None.easeNone});	
		//	var lisNextPho:Object = new Object();
		//	lisNextPho.allTransitionsOutDone = function(eventObj:Object) {
		//		trace("allTransitionsOutDone event occurred.");
		//		mcBehindPho.loadMovie(arrBehindPho[curPho]);
		//		tmNextPho.startTransition({type:Fade, direction:Transition.IN, duration:.5, easing:None.easeNone});
		//	};
		//	tmNextPho.addEventListener("allTransitionsOutDone", lisNextPho);
		//}
		//
		//function stopSound() {
		//	stopAllSounds();
		//	butMute.gotoAndStop("off");
		//	curMusicState = "off"	
		//}
		//
		//function startSound() {	
		//	auGame.start(0, 999);
		//	butMute.gotoAndStop("on");
		//	curMusicState = "on"
		//}
		//
		//function stopVid() {
		//	if (flvBehindVid.state == "playing") {
		//		flvBehindVid.stop();
		//		// start music
		//		if (curMusicState == "on") {
		//			auGame.start(0, 999);
		//		}
		//	}
		//}
		//
		//function restartVid() {
		//	if (flvBehindVid.state == "stopped") {
		//		// stop music
		//		if (curMusicState == "on") {
		//			auGame.stop();
		//		}
		//		flvBehindVid.play();
		//	}
		//}
		//
		//
		///* event handlers */
		//
		///* buttons */
		//butEnter.onPress = function() {
		//	var colorEnter:Color = new Color(txtEnter);
		//	colorEnter.setRGB(0x4c4c4c);
		//	hideMenu();
		//	calculateAvg();
		//	curScreen = "answer";
		//	showAnswer();
		//}
		//
		//butEnter.onRelease = function() {
		//	var colorEnter:Color = new Color(txtEnter);
		//	colorEnter.setRGB(0x4c4c4c);
		//}
		//
		//butEnter.onReleaseOutside = function() {
		//	var colorEnter:Color = new Color(txtEnter);
		//	colorEnter.setRGB(0x4c4c4c);
		//}
		//
		//butEnter.onRollOver = function() {
		//	var colorEnter:Color = new Color(txtEnter);
		//	colorEnter.setRGB(0x990000);
		//}
		//
		//butEnter.onRollOut = function() {
		//	var colorEnter:Color = new Color(txtEnter);
		//	colorEnter.setRGB(0x4c4c4c);
		//}
		//
		//butBackToFacts.onPress = function() {
		//	var colorBackToFacts:Color = new Color(txtBackToFacts);
		//	colorBackToFacts.setRGB(0x4c4c4c);
		//	var colorBakArrow:Color = new Color(mcBakArrow);
		//	colorBakArrow.setRGB(0x479cb8);
		//	mcBakArrow._alpha = 50;
		//	if (curMusicState == "on") {
		//		auBehindBack.start();
		//	}
		//	stopVid();	
		//	curScreen = "question-answer";
		//	var moveDirBehind:String;
		//	if (moveDir == "move_left") {
		//		moveDirBehind = "move_right"
		//	} else {
		//		moveDirBehind = "move_left"
		//	}
		//	moveEnvironment(moveDirBehind);
		//}
		//
		//butBackToFacts.onRollOver = function() {
		//	var colorBackToFacts:Color = new Color(txtBackToFacts);
		//	colorBackToFacts.setRGB(0x333333);
		//	var colorBakArrow:Color = new Color(mcBakArrow);
		//	colorBakArrow.setRGB(0xffffff);
		//	mcBakArrow._alpha = 100;
		//}
		//
		//butBackToFacts.onRollOut = function() {
		//	var colorBackToFacts:Color = new Color(txtBackToFacts);
		//	colorBackToFacts.setRGB(0x4c4c4c);
		//	var colorBakArrow:Color = new Color(mcBakArrow);
		//	colorBakArrow.setRGB(0x479cb8);
		//	mcBakArrow._alpha = 50;
		//}
		//
		//butBehind.onPress = function() {
		//	if (curMusicState == "on") {
		//		auBehindForward.start();
		//	}
		//	txtBehind._alpha = 80;
		//	curScreen = "behind";
		//	moveEnvironment(moveDir);
		//}
		//
		//butBehind.onRollOver = function() {
		//	txtBehind._alpha = 100;
		//	if (curMusicState == "on") {
		//		auBehindOver.start();
		//	}
		//}
		//
		//butBehind.onRollOut = function() {
		//	txtBehind._alpha = 80;
		//}
		//
		//butBehindNextPho.onPress = function() {
		//	var colorNextPho:Color = new Color(txtBehindNextPho);
		//	colorNextPho.setRGB(0x4c4c4c);
		//	var colorNextArrow:Color = new Color(mcNextArrow);
		//	colorNextArrow.setRGB(0x479cb8);
		//	mcNextArrow._alpha = 50;
		//	nextPho();
		//}
		//
		//butBehindNextPho.onRollOver = function() {
		//	var colorNextPho:Color = new Color(txtBehindNextPho);
		//	colorNextPho.setRGB(0x333333);
		//	var colorNextArrow:Color = new Color(mcNextArrow);
		//	colorNextArrow.setRGB(0xffffff);
		//	mcNextArrow._alpha = 100;
		//}
		//
		//butBehindNextPho.onRollOut = function() {
		//	var colorNextPho:Color = new Color(txtBehindNextPho);
		//	colorNextPho.setRGB(0x4c4c4c);
		//	var colorNextArrow:Color = new Color(mcNextArrow);
		//	colorNextArrow.setRGB(0x479cb8);
		//	mcNextArrow._alpha = 50;
		//}
		//
		//butMessagesClose.onPress = function() {
		//	var colorClose:Color = new Color(txtClose);
		//	colorClose.setRGB(0xcccccc);
		//	hideMessages();
		//}
		//
		//butMessagesClose.onRollOver = function() {
		//	var colorClose:Color = new Color(txtClose);
		//	colorClose.setRGB(0xffffff);
		//}
		//
		//butMessagesClose.onRollOut = function() {
		//	var colorClose:Color = new Color(txtClose);
		//	colorClose.setRGB(0xcccccc);
		//}
		//
		//butMenu.onRollOver = function() {
		//	showMenu();
		//}
		//
		//butMute.onPress = function() {
		//	if (curMusicState == "on") {
		//		stopSound();
		//	} else {
		//		startSound();
		//	}
		//}
		//
		//// menu (in menu order)
		//butMenuLast.onPress = function() {	
		//	var lastItem:Number;
		//	if (curItem > 0) {
		//		lastItem = curItem - 1;
		//	} else {
		//		lastItem = 9;
		//	}
		//	menuClick(lastItem, "last");
		//}
		//
		//butMenuLast.onRollOver = function() {
		//	if (curMusicState == "on") {
		//		auMenuOver.start();
		//	}
		//}
		//
		//butMenuEggs.onPress = function() {
		//	menuClick(0, "menu");
		//}
		//
		//butMenuEggs.onRollOver = function() {
		//	if (curMusicState == "on") {
		//		auMenuOver.start();
		//	}
		//}
		//
		//butMenuNewspapers.onPress = function() {
		//	menuClick(1, "menu");
		//}
		//
		//butMenuNewspapers.onRollOver = function() {
		//	if (curMusicState == "on") {
		//		auMenuOver.start();
		//	}
		//}
		//
		//butMenuMilks.onPress = function() {
		//	menuClick(2, "menu");
		//}
		//
		//butMenuMilks.onRollOver = function() {
		//	if (curMusicState == "on") {
		//		auMenuOver.start();
		//	}
		//}
		//
		//butMenuCarMiles.onPress = function() {
		//	menuClick(3, "menu");
		//}
		//
		//butMenuCarMiles.onRollOver = function() {
		//	if (curMusicState == "on") {
		//		auMenuOver.start();
		//	}
		//}
		//
		//butMenuBananas.onPress = function() {
		//	menuClick(4, "menu");
		//}
		//
		//butMenuBananas.onRollOver = function() {
		//	if (curMusicState == "on") {
		//		auMenuOver.start();
		//	}
		//}
		//
		//butMenuSodas.onPress = function() {
		//	menuClick(5, "menu");
		//}
		//
		//butMenuSodas.onRollOver = function() {
		//	if (curMusicState == "on") {
		//		auMenuOver.start();
		//	}
		//}
		//
		//butMenuShowers.onPress = function() {
		//	menuClick(6, "menu");
		//}
		//
		//butMenuShowers.onRollOver = function() {
		//	if (curMusicState == "on") {
		//		auMenuOver.start();
		//	}
		//}
		//
		//butMenuPotatoes.onPress = function() {
		//	menuClick(7, "menu");
		//}
		//
		//butMenuPotatoes.onRollOver = function() {
		//	if (curMusicState == "on") {
		//		auMenuOver.start();
		//	}
		//}
		//
		//butMenuDiapers.onPress = function() {
		//	menuClick(8, "menu");
		//}
		//
		//butMenuDiapers.onRollOver = function() {
		//	if (curMusicState == "on") {
		//		auMenuOver.start();
		//	}
		//}
		//
		//butMenuSlices.onPress = function() {
		//	menuClick(9, "menu");
		//}
		//
		//butMenuSlices.onRollOver = function() {
		//	if (curMusicState == "on") {
		//		auMenuOver.start();
		//	}
		//}
		//
		//butMenuNext.onPress = function() {
		//	var nextItem:Number;
		//	if (curItem < 9) {
		//		nextItem = curItem + 1;
		//	} else {
		//		nextItem = 0;
		//	}
		//	menuClick(nextItem, "next");
		//}
		//
		//butMenuNext.onRollOver = function() {
		//	if (curMusicState == "on") {
		//		auMenuOver.start();
		//	}
		//}
		//
		//
		//// enter key listener
		//var keyListener:Object = new Object();
		//keyListener.onKeyDown = function() {
		//    if (Key.getCode() == Key.ENTER && doEnter == true) {
		//		hideMenu();
		//		calculateAvg();
		//		curScreen = "answer";
		//		showAnswer();
		//    }
		//};
		//Key.addListener(keyListener);
		//
		//
		//init();
		//stop();
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// fonts
	this.text = new cjs.Text("regular bold italic", "18px 'franklin-gothic-urw'", "#4C4C4C");
	this.text.lineHeight = 30;
	this.text.lineWidth = 392;
	this.text.setTransform(-446.9,41.5);

	this.text_1 = new cjs.Text("regular bold italic", "18px 'franklin-gothic-urw'", "#4C4C4C");
	this.text_1.lineHeight = 30;
	this.text_1.lineWidth = 392;
	this.text_1.setTransform(-446.9,11.5);

	this.text_2 = new cjs.Text("regular bold italic", "18px 'franklin-gothic-urw'", "#4C4C4C");
	this.text_2.lineHeight = 30;
	this.text_2.lineWidth = 392;
	this.text_2.setTransform(-446.9,-18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

	// menu
	this.mcMenuMoves = new lib.menu_moves();
	this.mcMenuMoves.setTransform(480,-28.3,1,1,0,0,0,480,28.7);

	this.timeline.addTween(cjs.Tween.get(this.mcMenuMoves).wait(1));

	// messages
	this.mcMessagesMove = new lib.messagesmove();
	this.mcMessagesMove.setTransform(-230.2,255.5,1,1,0,0,0,225.5,101.5);

	this.timeline.addTween(cjs.Tween.get(this.mcMessagesMove).wait(1));

	// eggs
	this.mcEggs = new lib.eggs();
	this.mcEggs.setTransform(676.3,530.2);

	this.timeline.addTween(cjs.Tween.get(this.mcEggs).wait(1));

	// newspapers
	this.mcNewspapers = new lib.newspaper_tree();
	this.mcNewspapers.setTransform(765.5,493.9,1,1,0,0,0,258.8,455.4);

	this.timeline.addTween(cjs.Tween.get(this.mcNewspapers).wait(1));

	// milks
	this.mcMilks = new lib.milks();
	this.mcMilks.setTransform(513.7,291.1,1,1,0,0,0,123.6,165.7);

	this.timeline.addTween(cjs.Tween.get(this.mcMilks).wait(1));

	// carmiles
	this.mcCarMiles = new lib.carmiles();
	this.mcCarMiles.setTransform(692.7,289.7,1,1,0,0,0,2.2,2.2);

	this.timeline.addTween(cjs.Tween.get(this.mcCarMiles).wait(1));

	// bananas
	this.mcBananas = new lib.bananas();
	this.mcBananas.setTransform(717.1,526.4);

	this.timeline.addTween(cjs.Tween.get(this.mcBananas).wait(1));

	// sodas
	this.mcSodas = new lib.sodas();
	this.mcSodas.setTransform(687.9,527.9);

	this.timeline.addTween(cjs.Tween.get(this.mcSodas).wait(1));

	// showers
	this.mcShowers = new lib.showers();
	this.mcShowers.setTransform(480,533.5);

	this.timeline.addTween(cjs.Tween.get(this.mcShowers).wait(1));

	// potatoes
	this.mcPotatoes = new lib.potatoes();
	this.mcPotatoes.setTransform(669,301.2,1,1,0,0,0,162.6,224.7);

	this.timeline.addTween(cjs.Tween.get(this.mcPotatoes).wait(1));

	// diapers
	this.mcDiapers = new lib.diapercan();
	this.mcDiapers.setTransform(672,595.1);

	this.timeline.addTween(cjs.Tween.get(this.mcDiapers).wait(1));

	// slices
	this.mcSlices = new lib.slices();
	this.mcSlices.setTransform(641.5,261.2,1,1,0,0,0,148.8,158.3);

	this.timeline.addTween(cjs.Tween.get(this.mcSlices).wait(1));

	// mute
	this.butMute = new lib.mutebutton();
	this.butMute.setTransform(945.4,521.4,1,1,0,0,0,8.2,6.7);
	this.butMute.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.butMute).wait(1));

	// question
	this.mcQuestion = new lib.question();
	this.mcQuestion.setTransform(307.5,150.9,1,1,0,0,0,274.2,87.3);

	this.timeline.addTween(cjs.Tween.get(this.mcQuestion).wait(1));

	// INTRODUCTION
	this.mcIntro = new lib.intro();
	this.mcIntro.setTransform(480.4,212.1,1,1,0,0,0,479.9,156.8);

	this.timeline.addTween(cjs.Tween.get(this.mcIntro).wait(1));

	// BEHINDSCENES
	this.mcBehind = new lib.behindthescenes();
	this.mcBehind.setTransform(482,250.1,1,1,0,0,0,483,231.9);

	this.timeline.addTween(cjs.Tween.get(this.mcBehind).wait(1));

	// trees
	this.mcTreesMoves = new lib.trees1_move();
	this.mcTreesMoves.setTransform(-20.2,525.5);

	this.timeline.addTween(cjs.Tween.get(this.mcTreesMoves).wait(1));

	// land
	this.mcGroundMoves = new lib.ground_moves();
	this.mcGroundMoves.setTransform(0,535);

	this.timeline.addTween(cjs.Tween.get(this.mcGroundMoves).wait(1));

	// data
	this.mcData = new lib.data();
	this.mcData.setTransform(899.6,267.5,1,1,0,0,0,71.4,267.5);

	this.timeline.addTween(cjs.Tween.get(this.mcData).wait(1));

	// fact card
	this.mcFactCardMoves = new lib.factcardmoves();
	this.mcFactCardMoves.setTransform(266,534);

	this.timeline.addTween(cjs.Tween.get(this.mcFactCardMoves).wait(1));

	// mountains
	this.mcMountainMoves = new lib.mountain_moves();
	this.mcMountainMoves.setTransform(0,535);

	this.timeline.addTween(cjs.Tween.get(this.mcMountainMoves).wait(1));

	// clouds
	this.mcCloud2Moves = new lib.cloud2_moves();
	this.mcCloud2Moves.setTransform(163,433.1,1,1,0,0,0,319.4,101.9);

	this.mcCloud1Moves = new lib.cloud1_moves();
	this.mcCloud1Moves.setTransform(480,272.5,1,1,0,0,0,480,262.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mcCloud1Moves},{t:this.mcCloud2Moves}]}).wait(1));

	// bkd
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8EE4FF").s().p("EhK/ApyMAAAhTkMCV/AAAMAAABTkg");
	this.shape.setTransform(480,267.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(24.3,-294.1,2375.7,1841.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;