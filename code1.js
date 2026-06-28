gdjs._50Code = {};
gdjs._50Code.localVariables = [];
gdjs._50Code.idToCallbackMap = new Map();
gdjs._50Code.GDNewSpriteObjects1= [];
gdjs._50Code.GDNewSpriteObjects2= [];
gdjs._50Code.GDNewSprite2Objects1= [];
gdjs._50Code.GDNewSprite2Objects2= [];
gdjs._50Code.GDNewSprite3Objects1= [];
gdjs._50Code.GDNewSprite3Objects2= [];
gdjs._50Code.GDNewSprite4Objects1= [];
gdjs._50Code.GDNewSprite4Objects2= [];
gdjs._50Code.GDBugObjects1= [];
gdjs._50Code.GDBugObjects2= [];
gdjs._50Code.GDleftObjects1= [];
gdjs._50Code.GDleftObjects2= [];
gdjs._50Code.GDrightObjects1= [];
gdjs._50Code.GDrightObjects2= [];
gdjs._50Code.GDNewSprite5Objects1= [];
gdjs._50Code.GDNewSprite5Objects2= [];
gdjs._50Code.GDtrophieObjects1= [];
gdjs._50Code.GDtrophieObjects2= [];
gdjs._50Code.GDDoorObjects1= [];
gdjs._50Code.GDDoorObjects2= [];
gdjs._50Code.GDPlayerObjects1= [];
gdjs._50Code.GDPlayerObjects2= [];


gdjs._50Code.eventsList0 = function(runtimeScene) {

};gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDBugObjects1Objects = Hashtable.newFrom({"Bug": gdjs._50Code.GDBugObjects1});
gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDleftObjects1Objects = Hashtable.newFrom({"left": gdjs._50Code.GDleftObjects1});
gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDBugObjects1Objects = Hashtable.newFrom({"Bug": gdjs._50Code.GDBugObjects1});
gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs._50Code.GDPlayerObjects1});
gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDBugObjects1Objects = Hashtable.newFrom({"Bug": gdjs._50Code.GDBugObjects1});
gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs._50Code.GDPlayerObjects1});
gdjs._50Code.asyncCallback15380436 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._50Code.localVariables);
gdjs._50Code.localVariables.length = 0;
}
gdjs._50Code.idToCallbackMap.set(15380436, gdjs._50Code.asyncCallback15380436);
gdjs._50Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._50Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs._50Code.asyncCallback15380436(runtimeScene, asyncObjectsList)), 15380436, asyncObjectsList);
}
}

}


};gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDBugObjects1Objects = Hashtable.newFrom({"Bug": gdjs._50Code.GDBugObjects1});
gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDrightObjects1Objects = Hashtable.newFrom({"right": gdjs._50Code.GDrightObjects1});
gdjs._50Code.eventsList2 = function(runtimeScene) {

};gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs._50Code.GDPlayerObjects1});
gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDNewSprite5Objects1Objects = Hashtable.newFrom({"NewSprite5": gdjs._50Code.GDNewSprite5Objects1});
gdjs._50Code.eventsList3 = function(runtimeScene) {

};gdjs._50Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._50Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._50Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs._50Code.GDPlayerObjects1[i].getY() > 705 ) {
        isConditionTrue_0 = true;
        gdjs._50Code.GDPlayerObjects1[k] = gdjs._50Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs._50Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._50Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs._50Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._50Code.GDPlayerObjects1[i].setPosition(1119,588);
}
}
}

}


{


gdjs._50Code.eventsList0(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Bug"), gdjs._50Code.GDBugObjects1);
gdjs.copyArray(runtimeScene.getObjects("left"), gdjs._50Code.GDleftObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDBugObjects1Objects, gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDleftObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs._50Code.GDBugObjects1 */
/* Reuse gdjs._50Code.GDleftObjects1 */
{for(var i = 0, len = gdjs._50Code.GDBugObjects1.length ;i < len;++i) {
    gdjs._50Code.GDBugObjects1[i].returnVariable(gdjs._50Code.GDBugObjects1[i].getVariables().getFromIndex(0)).setString("right");
}
}
{for(var i = 0, len = gdjs._50Code.GDBugObjects1.length ;i < len;++i) {
    gdjs._50Code.GDBugObjects1[i].addForceTowardObject((gdjs._50Code.GDleftObjects1.length !== 0 ? gdjs._50Code.GDleftObjects1[0] : null), 100, 0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bug"), gdjs._50Code.GDBugObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._50Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDBugObjects1Objects, gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDPlayerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._50Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs._50Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs._50Code.GDPlayerObjects1[k] = gdjs._50Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs._50Code.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs._50Code.GDBugObjects1 */
/* Reuse gdjs._50Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs._50Code.GDBugObjects1.length ;i < len;++i) {
    gdjs._50Code.GDBugObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs._50Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._50Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}
{for(var i = 0, len = gdjs._50Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._50Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bug"), gdjs._50Code.GDBugObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._50Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDBugObjects1Objects, gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDPlayerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._50Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs._50Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs._50Code.GDPlayerObjects1[k] = gdjs._50Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs._50Code.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs._50Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs._50Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._50Code.GDPlayerObjects1[i].setPosition(1119,588);
}
}
{for(var i = 0, len = gdjs._50Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._50Code.GDPlayerObjects1[i].getBehavior("Health").Hit(100, false, false, null);
}
}

{ //Subevents
gdjs._50Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bug"), gdjs._50Code.GDBugObjects1);
gdjs.copyArray(runtimeScene.getObjects("right"), gdjs._50Code.GDrightObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDBugObjects1Objects, gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDrightObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs._50Code.GDBugObjects1 */
/* Reuse gdjs._50Code.GDrightObjects1 */
{for(var i = 0, len = gdjs._50Code.GDBugObjects1.length ;i < len;++i) {
    gdjs._50Code.GDBugObjects1[i].returnVariable(gdjs._50Code.GDBugObjects1[i].getVariables().getFromIndex(0)).setString("left");
}
}
{for(var i = 0, len = gdjs._50Code.GDBugObjects1.length ;i < len;++i) {
    gdjs._50Code.GDBugObjects1[i].addForceTowardObject((gdjs._50Code.GDrightObjects1.length !== 0 ? gdjs._50Code.GDrightObjects1[0] : null), 100, 0);
}
}
}

}


{


gdjs._50Code.eventsList2(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite5"), gdjs._50Code.GDNewSprite5Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._50Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDPlayerObjects1Objects, gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDNewSprite5Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 5);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._50Code.GDNewSprite5Objects1 */
{for(var i = 0, len = gdjs._50Code.GDNewSprite5Objects1.length ;i < len;++i) {
    gdjs._50Code.GDNewSprite5Objects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "3");
}
}

}


{


gdjs._50Code.eventsList3(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs._50Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._50Code.GDNewSpriteObjects1.length = 0;
gdjs._50Code.GDNewSpriteObjects2.length = 0;
gdjs._50Code.GDNewSprite2Objects1.length = 0;
gdjs._50Code.GDNewSprite2Objects2.length = 0;
gdjs._50Code.GDNewSprite3Objects1.length = 0;
gdjs._50Code.GDNewSprite3Objects2.length = 0;
gdjs._50Code.GDNewSprite4Objects1.length = 0;
gdjs._50Code.GDNewSprite4Objects2.length = 0;
gdjs._50Code.GDBugObjects1.length = 0;
gdjs._50Code.GDBugObjects2.length = 0;
gdjs._50Code.GDleftObjects1.length = 0;
gdjs._50Code.GDleftObjects2.length = 0;
gdjs._50Code.GDrightObjects1.length = 0;
gdjs._50Code.GDrightObjects2.length = 0;
gdjs._50Code.GDNewSprite5Objects1.length = 0;
gdjs._50Code.GDNewSprite5Objects2.length = 0;
gdjs._50Code.GDtrophieObjects1.length = 0;
gdjs._50Code.GDtrophieObjects2.length = 0;
gdjs._50Code.GDDoorObjects1.length = 0;
gdjs._50Code.GDDoorObjects2.length = 0;
gdjs._50Code.GDPlayerObjects1.length = 0;
gdjs._50Code.GDPlayerObjects2.length = 0;

gdjs._50Code.eventsList4(runtimeScene);
gdjs._50Code.GDNewSpriteObjects1.length = 0;
gdjs._50Code.GDNewSpriteObjects2.length = 0;
gdjs._50Code.GDNewSprite2Objects1.length = 0;
gdjs._50Code.GDNewSprite2Objects2.length = 0;
gdjs._50Code.GDNewSprite3Objects1.length = 0;
gdjs._50Code.GDNewSprite3Objects2.length = 0;
gdjs._50Code.GDNewSprite4Objects1.length = 0;
gdjs._50Code.GDNewSprite4Objects2.length = 0;
gdjs._50Code.GDBugObjects1.length = 0;
gdjs._50Code.GDBugObjects2.length = 0;
gdjs._50Code.GDleftObjects1.length = 0;
gdjs._50Code.GDleftObjects2.length = 0;
gdjs._50Code.GDrightObjects1.length = 0;
gdjs._50Code.GDrightObjects2.length = 0;
gdjs._50Code.GDNewSprite5Objects1.length = 0;
gdjs._50Code.GDNewSprite5Objects2.length = 0;
gdjs._50Code.GDtrophieObjects1.length = 0;
gdjs._50Code.GDtrophieObjects2.length = 0;
gdjs._50Code.GDDoorObjects1.length = 0;
gdjs._50Code.GDDoorObjects2.length = 0;
gdjs._50Code.GDPlayerObjects1.length = 0;
gdjs._50Code.GDPlayerObjects2.length = 0;


return;

}

gdjs['_50Code'] = gdjs._50Code;
