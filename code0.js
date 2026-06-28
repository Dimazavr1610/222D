gdjs._49Code = {};
gdjs._49Code.localVariables = [];
gdjs._49Code.idToCallbackMap = new Map();
gdjs._49Code.GDNewSprite2Objects1= [];
gdjs._49Code.GDNewSprite2Objects2= [];
gdjs._49Code.GDNewSprite3Objects1= [];
gdjs._49Code.GDNewSprite3Objects2= [];
gdjs._49Code.GDBugObjects1= [];
gdjs._49Code.GDBugObjects2= [];
gdjs._49Code.GDNewSprite4Objects1= [];
gdjs._49Code.GDNewSprite4Objects2= [];
gdjs._49Code.GDNewSprite5Objects1= [];
gdjs._49Code.GDNewSprite5Objects2= [];
gdjs._49Code.GDNewSprite6Objects1= [];
gdjs._49Code.GDNewSprite6Objects2= [];
gdjs._49Code.GDNewSprite7Objects1= [];
gdjs._49Code.GDNewSprite7Objects2= [];
gdjs._49Code.GDNewSprite8Objects1= [];
gdjs._49Code.GDNewSprite8Objects2= [];
gdjs._49Code.GDNewSprite9Objects1= [];
gdjs._49Code.GDNewSprite9Objects2= [];
gdjs._49Code.GDCoinObjects1= [];
gdjs._49Code.GDCoinObjects2= [];
gdjs._49Code.GDCointextObjects1= [];
gdjs._49Code.GDCointextObjects2= [];
gdjs._49Code.GDLeftObjects1= [];
gdjs._49Code.GDLeftObjects2= [];
gdjs._49Code.GDRightObjects1= [];
gdjs._49Code.GDRightObjects2= [];
gdjs._49Code.GDEnemyParticleObjects1= [];
gdjs._49Code.GDEnemyParticleObjects2= [];
gdjs._49Code.GDPlayerObjects1= [];
gdjs._49Code.GDPlayerObjects2= [];


gdjs._49Code.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs._49Code.GDPlayerObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._49Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs._49Code.GDPlayerObjects1[k] = gdjs._49Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._49Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs._49Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._49Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationIndex(2);
}
}
}

}


};gdjs._49Code.mapOfGDgdjs_9546_959549Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs._49Code.GDPlayerObjects1});
gdjs._49Code.mapOfGDgdjs_9546_959549Code_9546GDNewSprite7Objects1Objects = Hashtable.newFrom({"NewSprite7": gdjs._49Code.GDNewSprite7Objects1});
gdjs._49Code.asyncCallback15262244 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._49Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Player"), gdjs._49Code.GDPlayerObjects2);

{for(var i = 0, len = gdjs._49Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs._49Code.GDPlayerObjects2[i].setPosition(1119,588);
}
}
gdjs._49Code.localVariables.length = 0;
}
gdjs._49Code.idToCallbackMap.set(15262244, gdjs._49Code.asyncCallback15262244);
gdjs._49Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._49Code.localVariables);
for (const obj of gdjs._49Code.GDPlayerObjects1) asyncObjectsList.addObject("Player", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs._49Code.asyncCallback15262244(runtimeScene, asyncObjectsList)), 15262244, asyncObjectsList);
}
}

}


};gdjs._49Code.eventsList2 = function(runtimeScene) {

};gdjs._49Code.mapOfGDgdjs_9546_959549Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs._49Code.GDPlayerObjects1});
gdjs._49Code.mapOfGDgdjs_9546_959549Code_9546GDNewSprite8Objects1Objects = Hashtable.newFrom({"NewSprite8": gdjs._49Code.GDNewSprite8Objects1});
gdjs._49Code.eventsList3 = function(runtimeScene) {

};gdjs._49Code.mapOfGDgdjs_9546_959549Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs._49Code.GDPlayerObjects1});
gdjs._49Code.mapOfGDgdjs_9546_959549Code_9546GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs._49Code.GDCoinObjects1});
gdjs._49Code.eventsList4 = function(runtimeScene) {

};gdjs._49Code.eventsList5 = function(runtimeScene) {

};gdjs._49Code.mapOfGDgdjs_9546_959549Code_9546GDBugObjects1Objects = Hashtable.newFrom({"Bug": gdjs._49Code.GDBugObjects1});
gdjs._49Code.mapOfGDgdjs_9546_959549Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs._49Code.GDPlayerObjects1});
gdjs._49Code.asyncCallback15276892 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._49Code.localVariables);
gdjs._49Code.localVariables.length = 0;
}
gdjs._49Code.idToCallbackMap.set(15276892, gdjs._49Code.asyncCallback15276892);
gdjs._49Code.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._49Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs._49Code.asyncCallback15276892(runtimeScene, asyncObjectsList)), 15276892, asyncObjectsList);
}
}

}


};gdjs._49Code.mapOfGDgdjs_9546_959549Code_9546GDBugObjects1Objects = Hashtable.newFrom({"Bug": gdjs._49Code.GDBugObjects1});
gdjs._49Code.mapOfGDgdjs_9546_959549Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs._49Code.GDPlayerObjects1});
gdjs._49Code.mapOfGDgdjs_9546_959549Code_9546GDEnemyParticleObjects1Objects = Hashtable.newFrom({"EnemyParticle": gdjs._49Code.GDEnemyParticleObjects1});
gdjs._49Code.eventsList7 = function(runtimeScene) {

};gdjs._49Code.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._49Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._49Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs._49Code.GDPlayerObjects1[k] = gdjs._49Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._49Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs._49Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._49Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}

{ //Subevents
gdjs._49Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._49Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._49Code.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs._49Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs._49Code.GDPlayerObjects1[k] = gdjs._49Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._49Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs._49Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._49Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._49Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs._49Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._49Code.GDPlayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._49Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs._49Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._49Code.GDPlayerObjects1[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._49Code.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs._49Code.GDPlayerObjects1.length !== 0 ? gdjs._49Code.GDPlayerObjects1[0] : null), true, "", 0);
}
{gdjs.evtTools.camera.clampCamera(runtimeScene, 0, 0, 1000000, 700, "", 0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs._49Code.GDNewSprite7Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._49Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._49Code.mapOfGDgdjs_9546_959549Code_9546GDPlayerObjects1Objects, gdjs._49Code.mapOfGDgdjs_9546_959549Code_9546GDNewSprite7Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._49Code.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs._49Code.GDPlayerObjects1[i].getBehavior("Health").IsDamageCooldownActive(null)) ) {
        isConditionTrue_0 = true;
        gdjs._49Code.GDPlayerObjects1[k] = gdjs._49Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs._49Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs._49Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._49Code.GDPlayerObjects1[i].getBehavior("Health").Hit(10, true, true, null);
}
}
{for(var i = 0, len = gdjs._49Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._49Code.GDPlayerObjects1[i].getBehavior("Health").TriggerDamageCooldown(null);
}
}
{for(var i = 0, len = gdjs._49Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._49Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Jump");
}
}

{ //Subevents
gdjs._49Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._49Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._49Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDPlayerObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs._49Code.GDPlayerObjects1[k] = gdjs._49Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._49Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs._49Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._49Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "t");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15264996);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._49Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs._49Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._49Code.GDPlayerObjects1[i].getBehavior("HorizontalDash").SimulateDashKey(null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._49Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._49Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDPlayerObjects1[i].getBehavior("HorizontalDash").IsDashing(null) ) {
        isConditionTrue_0 = true;
        gdjs._49Code.GDPlayerObjects1[k] = gdjs._49Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._49Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs._49Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._49Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationIndex(3);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "LShift");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._49Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs._49Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._49Code.GDPlayerObjects1[i].getBehavior("DiveDash").SimulateDiveKey(null);
}
}
}

}


{


gdjs._49Code.eventsList2(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite8"), gdjs._49Code.GDNewSprite8Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._49Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._49Code.mapOfGDgdjs_9546_959549Code_9546GDPlayerObjects1Objects, gdjs._49Code.mapOfGDgdjs_9546_959549Code_9546GDNewSprite8Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "2", false);
}
}

}


{


gdjs._49Code.eventsList3(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs._49Code.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._49Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._49Code.mapOfGDgdjs_9546_959549Code_9546GDPlayerObjects1Objects, gdjs._49Code.mapOfGDgdjs_9546_959549Code_9546GDCoinObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs._49Code.GDCoinObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Cointext"), gdjs._49Code.GDCointextObjects1);
{for(var i = 0, len = gdjs._49Code.GDCoinObjects1.length ;i < len;++i) {
    gdjs._49Code.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs._49Code.GDCointextObjects1.length ;i < len;++i) {
    gdjs._49Code.GDCointextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
}
}
}

}


{


gdjs._49Code.eventsList4(runtimeScene);
}


{


gdjs._49Code.eventsList5(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Bug"), gdjs._49Code.GDBugObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._49Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._49Code.mapOfGDgdjs_9546_959549Code_9546GDBugObjects1Objects, gdjs._49Code.mapOfGDgdjs_9546_959549Code_9546GDPlayerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._49Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs._49Code.GDPlayerObjects1[k] = gdjs._49Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs._49Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs._49Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._49Code.GDPlayerObjects1[i].setPosition(1119,588);
}
}
{for(var i = 0, len = gdjs._49Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._49Code.GDPlayerObjects1[i].getBehavior("Health").Hit(100, false, false, null);
}
}

{ //Subevents
gdjs._49Code.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bug"), gdjs._49Code.GDBugObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._49Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._49Code.mapOfGDgdjs_9546_959549Code_9546GDBugObjects1Objects, gdjs._49Code.mapOfGDgdjs_9546_959549Code_9546GDPlayerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._49Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs._49Code.GDPlayerObjects1[k] = gdjs._49Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs._49Code.GDBugObjects1 */
gdjs.copyArray(runtimeScene.getObjects("EnemyParticle"), gdjs._49Code.GDEnemyParticleObjects1);
/* Reuse gdjs._49Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs._49Code.GDBugObjects1.length ;i < len;++i) {
    gdjs._49Code.GDBugObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs._49Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._49Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}
{for(var i = 0, len = gdjs._49Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._49Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
{for(var i = 0, len = gdjs._49Code.GDEnemyParticleObjects1.length ;i < len;++i) {
    gdjs._49Code.GDEnemyParticleObjects1[i].recreateParticleSystem();
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs._49Code.mapOfGDgdjs_9546_959549Code_9546GDEnemyParticleObjects1Objects, (( gdjs._49Code.GDBugObjects1.length === 0 ) ? 0 :gdjs._49Code.GDBugObjects1[0].getCenterXInScene()), (( gdjs._49Code.GDBugObjects1.length === 0 ) ? 0 :gdjs._49Code.GDBugObjects1[0].getCenterYInScene()), "");
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs._49Code.eventsList7(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._49Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._49Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDPlayerObjects1[i].getY() > 705 ) {
        isConditionTrue_0 = true;
        gdjs._49Code.GDPlayerObjects1[k] = gdjs._49Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._49Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs._49Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._49Code.GDPlayerObjects1[i].setPosition(1119,588);
}
}
}

}


};

gdjs._49Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._49Code.GDNewSprite2Objects1.length = 0;
gdjs._49Code.GDNewSprite2Objects2.length = 0;
gdjs._49Code.GDNewSprite3Objects1.length = 0;
gdjs._49Code.GDNewSprite3Objects2.length = 0;
gdjs._49Code.GDBugObjects1.length = 0;
gdjs._49Code.GDBugObjects2.length = 0;
gdjs._49Code.GDNewSprite4Objects1.length = 0;
gdjs._49Code.GDNewSprite4Objects2.length = 0;
gdjs._49Code.GDNewSprite5Objects1.length = 0;
gdjs._49Code.GDNewSprite5Objects2.length = 0;
gdjs._49Code.GDNewSprite6Objects1.length = 0;
gdjs._49Code.GDNewSprite6Objects2.length = 0;
gdjs._49Code.GDNewSprite7Objects1.length = 0;
gdjs._49Code.GDNewSprite7Objects2.length = 0;
gdjs._49Code.GDNewSprite8Objects1.length = 0;
gdjs._49Code.GDNewSprite8Objects2.length = 0;
gdjs._49Code.GDNewSprite9Objects1.length = 0;
gdjs._49Code.GDNewSprite9Objects2.length = 0;
gdjs._49Code.GDCoinObjects1.length = 0;
gdjs._49Code.GDCoinObjects2.length = 0;
gdjs._49Code.GDCointextObjects1.length = 0;
gdjs._49Code.GDCointextObjects2.length = 0;
gdjs._49Code.GDLeftObjects1.length = 0;
gdjs._49Code.GDLeftObjects2.length = 0;
gdjs._49Code.GDRightObjects1.length = 0;
gdjs._49Code.GDRightObjects2.length = 0;
gdjs._49Code.GDEnemyParticleObjects1.length = 0;
gdjs._49Code.GDEnemyParticleObjects2.length = 0;
gdjs._49Code.GDPlayerObjects1.length = 0;
gdjs._49Code.GDPlayerObjects2.length = 0;

gdjs._49Code.eventsList8(runtimeScene);
gdjs._49Code.GDNewSprite2Objects1.length = 0;
gdjs._49Code.GDNewSprite2Objects2.length = 0;
gdjs._49Code.GDNewSprite3Objects1.length = 0;
gdjs._49Code.GDNewSprite3Objects2.length = 0;
gdjs._49Code.GDBugObjects1.length = 0;
gdjs._49Code.GDBugObjects2.length = 0;
gdjs._49Code.GDNewSprite4Objects1.length = 0;
gdjs._49Code.GDNewSprite4Objects2.length = 0;
gdjs._49Code.GDNewSprite5Objects1.length = 0;
gdjs._49Code.GDNewSprite5Objects2.length = 0;
gdjs._49Code.GDNewSprite6Objects1.length = 0;
gdjs._49Code.GDNewSprite6Objects2.length = 0;
gdjs._49Code.GDNewSprite7Objects1.length = 0;
gdjs._49Code.GDNewSprite7Objects2.length = 0;
gdjs._49Code.GDNewSprite8Objects1.length = 0;
gdjs._49Code.GDNewSprite8Objects2.length = 0;
gdjs._49Code.GDNewSprite9Objects1.length = 0;
gdjs._49Code.GDNewSprite9Objects2.length = 0;
gdjs._49Code.GDCoinObjects1.length = 0;
gdjs._49Code.GDCoinObjects2.length = 0;
gdjs._49Code.GDCointextObjects1.length = 0;
gdjs._49Code.GDCointextObjects2.length = 0;
gdjs._49Code.GDLeftObjects1.length = 0;
gdjs._49Code.GDLeftObjects2.length = 0;
gdjs._49Code.GDRightObjects1.length = 0;
gdjs._49Code.GDRightObjects2.length = 0;
gdjs._49Code.GDEnemyParticleObjects1.length = 0;
gdjs._49Code.GDEnemyParticleObjects2.length = 0;
gdjs._49Code.GDPlayerObjects1.length = 0;
gdjs._49Code.GDPlayerObjects2.length = 0;


return;

}

gdjs['_49Code'] = gdjs._49Code;
