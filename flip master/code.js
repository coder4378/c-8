var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["8cec2a19-ea3e-4e73-9ccf-2f705b34a076","af096ae8-4725-4669-ae77-03955489381d","f85d9175-e03a-4ca5-a409-deeb6966d4b3","62de0855-de52-45da-a707-848c339d5845","5caa1369-dd3d-4faa-b2e0-8a4e4a5b459f"],"propsByKey":{"8cec2a19-ea3e-4e73-9ccf-2f705b34a076":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"GFVtGIZ7F2quobQUpq24xXV3BpembqJI","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/8cec2a19-ea3e-4e73-9ccf-2f705b34a076.png"},"af096ae8-4725-4669-ae77-03955489381d":{"name":"animation_1_copy_3","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"ZyeYQMzkvrf1XIiMdISaWgD0fWbZZ5R6","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/af096ae8-4725-4669-ae77-03955489381d.png"},"f85d9175-e03a-4ca5-a409-deeb6966d4b3":{"name":"animation_1_copy_2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":4,"looping":true,"frameDelay":3,"version":"Y3ltVMgsG1GKAlMyi4RekdIsreg1uYmz","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/f85d9175-e03a-4ca5-a409-deeb6966d4b3.png"},"62de0855-de52-45da-a707-848c339d5845":{"name":"animation_1_copy_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":5,"version":"tnvjGjsEod9HomYwZB8RdB19kglenyT1","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/62de0855-de52-45da-a707-848c339d5845.png"},"5caa1369-dd3d-4faa-b2e0-8a4e4a5b459f":{"name":"animation_2","sourceUrl":null,"frameSize":{"x":350,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"_CCa_2mx.Ln.HaijgoQVV3aUdR6Axo8p","loadedFromSource":true,"saved":true,"sourceSize":{"x":350,"y":60},"rootRelativePath":"assets/5caa1369-dd3d-4faa-b2e0-8a4e4a5b459f.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var person1=createSprite(250);
person1.setAnimation("animation_1")
//var trampoline = createSprite(200, 350);
//trampoline.setAnimation("animation_2");
textSize(15);
function draw() {
  clear()
  text("use up for jump", 200, 15);
  text("use space,enter for stunt", 0, 15);
  createEdgeSprites();
  person1.collide(edges);
  person1.velocityY=person1.velocityY+0.8
 // person1.bounceOff(trampoline);
  if (keyDown("space")) {
    person1.setAnimation("animation_1_copy_2");
  }
  if (keyWentUp("space")) {
    person1.setAnimation("animation_1");
  }
   if (keyDown("enter")) {
    person1.setAnimation("animation_1_copy_1");
  }
  if (keyWentUp("enter")) {
    person1.setAnimation("animation_1");
  }
  if (keyDown("up")) {
    person1.velocityY=-12;
  }
  
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
