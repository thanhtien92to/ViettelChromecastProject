/**
 * Author: nt.tien
 * Created: 18/12/2017 version 0.0.0
 */
/**
 * sceneName = ???
 * SCENENAME_ = ???
 * scene/???
 * n part = ???
 * n list = ???
 *
 * _partName1 = ???
 * partName1 = ???
 * PartName1 = ???
 * PARTNAME1 = ???
 *
 * _partName2 = ???
 * partName2 = ???
 * PartName2 = ???
 * PARTNAME2 = ???
 *
 * _partName3 = ???
 * partName3 = ???
 * PartName3 = ???
 * PARTNAME3 = ???
 *
 * _listName1 = ???
 * listName1 = ???
 * ListName1 = ???
 * LISTNAME1 = ???
 *
 * _listName2 = ???
 * listName2 = ???
 * ListName2 = ???
 * LISTNAME2 = ???
 *
 * _listName3 = ???
 * listName3 = ???
 * ListName3 = ???
 * LISTNAME3 = ???
 *
 * n state = ???
 *
 * STATE_NAME_0 = ???
 * STATE_NAME_1 = ???
 * STATE_NAME_3 = ???
 *
 * n animation = 2
 *
 * animationName1Animation = ???
 * animationName2Animation = ???
 * animationName3Animation = ???
 */
W.defineModule([], function() {
    // Define config var
    var Config = {
        FOCUS_ANI_TIME: 300
    };
    // Define const
    var SCENENAME_CONST = {
        WINDOW_WIDTH: 1280, // Window size
        WINDOW_HEIGHT: 720, // Window size
        SCENENAME: "sceneName", //  scene name
        STATE: { // STATE CONST
            STATE_NAME_0: 0,
            STATE_NAME_1: 1,
            STATE_NAME_3: 'N'
        },
        DEBUG_LEVEL : 0
        // Some Const here
    };

    var _this;
    var _sceneContext = this;
    var _backgroundDiv; // Scene Background Div
    var _partName1Div; // Div tag for part 1
    var _partName2Div; // Div tag for part 2
    var _partName3Div; // Div tag for part N
    var _listName1Div; // Div tag for part 1
    var _listName2Div; // Div tag for part 2
    var _listName3Div; // Div tag for part N
    var data; // Data object contain all information of this scene
    var currentState; // Current State on scene
    var previouState; // Previous State of scene
    var partName1NeedUpdateData;
    var partName2NeedUpdateData;
    var partName3NeedUpdateData;
    var listName1NeedUpdateData;
    var listName2NeedUpdateData;
    var listName3NeedUpdateData;

    var PartName1Part = function(){
        var PARTNAME1_CONST = {
            PART_WIDTH: "", // part width value
            PART_HEIGHT: "", // part height value
            PARTNAME: "PartName1Part", //  scene name
            STATE: { // STATE CONST
                STATE_NAME_0: 0,
                STATE_NAME_1: 1,
                STATE_NAME_3: 3
            }
            // Some const here
        };

        var _partName1Context = this;
        var _partName1Div;
        var _parentDiv;
        var data; // Data object contain all information of this scene
        var currentState; // Current State on scene
        var previouState; // Previous State of scene
        var areaFocused; // true if focused else false

        this.mcreate = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+PARTNAME1_CONST.PARTNAME+'] --- mcreate');
            _parentDiv = _sceneContext.get_partName1Div();
            _partName1Div = new W.Div({id:PARTNAME1_CONST.PARTNAME+'_partName1Div',x:0,y:0});
            _parentDiv.add(_partName1Div);
        };
        this.initData = function (param){ // Should Redefine this function
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+PARTNAME1_CONST.PARTNAME+'] --- initData');
            data = param.data;
        };
        this.initState = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+PARTNAME1_CONST.PARTNAME+'] --- initState');
            currentState = 'initState'; // any value in SCENENAME_CONST.
            previouState = -1;
            areaFocused = false;
        };
        this.initUIWithData = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+PARTNAME1_CONST.PARTNAME+'] --- initUIWithData');
        };
        this.initUIWithState = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+PARTNAME1_CONST.PARTNAME+'] --- initUIWithState');
        };
        this.updateData =  function (data) {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+PARTNAME1_CONST.PARTNAME+'] --- updateData');
        };
        this.updateUIDataChanged = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+PARTNAME1_CONST.PARTNAME+'] --- updateUIDataChanged');
        };
        this.updateState = function(param){
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+PARTNAME1_CONST.PARTNAME+'] --- updateState');
        };
        this.updateUIStateChanged = function () {
            // Check current state and previous state and Update the child component correspond
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+PARTNAME1_CONST.PARTNAME+'] --- updateUIStateChanged');
        };
        this.inArea = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+PARTNAME1_CONST.PARTNAME+'] --- inArea');
        };
        this.outArea = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+PARTNAME1_CONST.PARTNAME+'] --- outArea');
        };
        this.animationName1Animation = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+PARTNAME1_CONST.PARTNAME+'] --- animationName1Animation');
        };
        this.animationName2Animation = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+PARTNAME1_CONST.PARTNAME+'] --- animationName2Animation');
        };
        this.animationName3Animation = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+PARTNAME1_CONST.PARTNAME+'] --- animationName2Animation');
        };
        this.onKeyPressed = function(event){
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+PARTNAME1_CONST.PARTNAME+'] --- onKeyPressed');
        }
    };
    var partName1Part = new PartName1Part();
    var PartName2Part = function(){
        var PARTNAME2_CONST = {
            PART_WIDTH: "", // part width value
            PART_HEIGHT: "", // part height value
            PARTNAME: "PartName2Part", //  scene name
            STATE: { // STATE CONST
                STATE_NAME_0: 0,
                STATE_NAME_1: 1,
                STATE_NAME_3: 3
            }
            // Some const here
        };

        var _partName2Context = this;
        var _partName2Div;
        var _parentDiv;
        var data; // Data object contain all information of this scene
        var currentState; // Current State on scene
        var previouState; // Previous State of scene
        var areaFocused; // true if focused else false

        this.mcreate = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+PARTNAME2_CONST.PARTNAME+'] --- mcreate');
            _parentDiv = _sceneContext.get_partName2Div();
            _partName2Div = new W.Div({id:PARTNAME2_CONST.PARTNAME+'_partName2Div',x:0,y:0});
            _parentDiv.add(_partName2Div);
        };
        this.initData = function (param){ // Should Redefine this function
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+PARTNAME2_CONST.PARTNAME+'] --- initData');
            data = param.data;
        };
        this.initState = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+PARTNAME2_CONST.PARTNAME+'] --- initState');
            currentState = 'initState'; // any value in SCENENAME_CONST.
            previouState = -1;
            areaFocused = false;
        };
        this.initUIWithData = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+PARTNAME2_CONST.PARTNAME+'] --- initUIWithData');
        };
        this.initUIWithState = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+PARTNAME2_CONST.PARTNAME+'] --- initUIWithState');
        };
        this.updateData =  function (data) {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+PARTNAME2_CONST.PARTNAME+'] --- updateData');
        };
        this.updateUIDataChanged = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+PARTNAME2_CONST.PARTNAME+'] --- updateUIDataChanged');
        };
        this.updateState = function(param){
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+PARTNAME2_CONST.PARTNAME+'] --- updateState');
        };
        this.updateUIStateChanged = function () {
            // Check current state and previous state and Update the child component correspond
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+PARTNAME2_CONST.PARTNAME+'] --- updateUIStateChanged');
        };
        this.inArea = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+PARTNAME2_CONST.PARTNAME+'] --- inArea');
        };
        this.outArea = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+PARTNAME2_CONST.PARTNAME+'] --- outArea');
        };
        this.animationName1Animation = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+PARTNAME2_CONST.PARTNAME+'] --- animationName1Animation');
        };
        this.animationName2Animation = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+PARTNAME2_CONST.PARTNAME+'] --- animationName2Animation');
        };
        this.animationName3Animation = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+PARTNAME2_CONST.PARTNAME+'] --- animationName2Animation');
        };
        this.onKeyPressed = function(event){
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+PARTNAME2_CONST.PARTNAME+'] --- onKeyPressed');
        }
    };
    var partName2Part = new PartName2Part();
    var PartName3Part = function(){
        var PARTNAME3_CONST = {
            PART_WIDTH: "", // part width value
            PART_HEIGHT: "", // part height value
            PARTNAME: "PartName3Part", //  scene name
            STATE: { // STATE CONST
                STATE_NAME_0: 0,
                STATE_NAME_1: 1,
                STATE_NAME_3: 3
            }
            // Some const here
        };

        var _partName3Context = this;
        var _partName3Div;
        var _parentDiv;
        var data; // Data object contain all information of this scene
        var currentState; // Current State on scene
        var previouState; // Previous State of scene
        var areaFocused; // true if focused else false

        this.mcreate = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+PARTNAME3_CONST.PARTNAME+'] --- mcreate');
            _parentDiv = _sceneContext.get_partName3Div();
            _partName3Div = new W.Div({id:PARTNAME3_CONST.PARTNAME+'_partName3Div',x:0,y:0});
            _parentDiv.add(_partName3Div);
        };
        this.initData = function (param){ // Should Redefine this function
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+PARTNAME3_CONST.PARTNAME+'] --- initData');
            data = param.data;
        };
        this.initState = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+PARTNAME3_CONST.PARTNAME+'] --- initState');
            currentState = 'initState'; // any value in SCENENAME_CONST.
            previouState = -1;
            areaFocused = false;
        };
        this.initUIWithData = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+PARTNAME3_CONST.PARTNAME+'] --- initUIWithData');
        };
        this.initUIWithState = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+PARTNAME3_CONST.PARTNAME+'] --- initUIWithState');
        };
        this.updateData =  function (data) {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+PARTNAME3_CONST.PARTNAME+'] --- updateData');
        };
        this.updateUIDataChanged = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+PARTNAME3_CONST.PARTNAME+'] --- updateUIDataChanged');
        };
        this.updateState = function(param){
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+PARTNAME3_CONST.PARTNAME+'] --- updateState');
        };
        this.updateUIStateChanged = function () {
            // Check current state and previous state and Update the child component correspond
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+PARTNAME3_CONST.PARTNAME+'] --- updateUIStateChanged');
        };
        this.inArea = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+PARTNAME3_CONST.PARTNAME+'] --- inArea');
        };
        this.outArea = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+PARTNAME3_CONST.PARTNAME+'] --- outArea');
        };
        this.animationName1Animation = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+PARTNAME3_CONST.PARTNAME+'] --- animationName1Animation');
        };
        this.animationName2Animation = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+PARTNAME3_CONST.PARTNAME+'] --- animationName2Animation');
        };
        this.animationName3Animation = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+PARTNAME3_CONST.PARTNAME+'] --- animationName2Animation');
        };
        this.onKeyPressed = function(event){
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+PARTNAME3_CONST.PARTNAME+'] --- onKeyPressed');
        }
    };
    var partName3Part = new PartName3Part();
    var ListName1Part = function(){
        // This is starting point of horizontal listview
        var LISTNAME1_CONST = {
            LIST_WIDTH: 0, // part width value
            LIST_HEIGHT: 0, // part height value
            LIST_X: 0,
            LIST_Y: 0,
            PARTNAME: "ListName1Part", //  scene name
            STATE: { // STATE CONST
                STATE_NAME_0: 0,
                STATE_NAME_1: 1,
                STATE_NAME_3: 3
            },
            NLINE: 1, // Number line displayed
            NITEM_PER_LINE: 0,
            CELL_WIDTH: 0,
            CELL_HEIGHT: 0,
            LEFT_MARGIN: 0,
            RIGHT_MARGIN: 0,
            TOP_MARGIN: 0,
            BOTTOM_MARGIN: 0,
            LIST_OVERFLOW: "hidden"
            // Some Const here
        };

        var _listName1Context = this;
        var _listName1Div;
        var _parentDiv;
        var _cellListDiv;
        var _focusDiv;
        var data; // Data object contain all information of this scene
        var currentState; // Current State on scene
        var previouState; // Previous State of scene
        var areaFocused; // true if focused else false

        // +        mcreate() // Gen UI component
        // +        initData(data), initState() -> initUIWithData(), initUIWithState()
        // +        updateData(data) -> updateUIDataChanged()
        // +        updateState(state) -> updateUIStateChanged()
        // +        animationFunction();
        // +        getCurrentState(); // Return Current State
        // +        getPreviousState(); // Return Previous State
        // +        getIndex(); // Return Current Index // Using for Listview
        // +        saveData(); // Save dataObject
        // +        getData (); // Get dataObject
        // +        When onKeyPressed: scene onKeyPressed -> check state and forwarding to matching 1rst child onKeyPressed ->
        // check state: update UI of child component Or change state Or call updateState of scene component the call updateUIStateChanged
        this.mcreate = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME1_CONST.PARTNAME+'] --- mcreate');
            _parentDiv = _sceneContext.get_listName1Div();
            _listName1Div = new W.Div({id:LISTNAME1_CONST.PARTNAME+'_listName1Div',x:0,y:0});
            _parentDiv.add(_listName1Div);
        };
        this.genList = function(){
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME1_CONST.PARTNAME+'] --- genList');
            // some tmp variable
            if(_listName1Div._listName1BGDiv){
                _listName1Div.remove(_listName1Div._listName1BGDiv);
            }
            _listName1Div._listName1BGDiv = new W.Div({x: LISTNAME1_CONST.LIST_X, y: LISTNAME1_CONST.LIST_Y, width: LISTNAME1_CONST.LIST_WIDTH, height:LISTNAME1_CONST.LIST_HEIGHT, overflow: LISTNAME1_CONST.LIST_OVERFLOW});
            _listName1Div.add(_listName1Div._listName1BGDiv);
            _cellListDiv = [];
            if(data==null||data.length==null){W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME1_CONST.PARTNAME+'] --- genList: data.length null'); return;}
            for(var i=0; i<data.length; i++){
                _cellListDiv[i] = new W.Div({x:i*(LISTNAME1_CONST.CELL_WIDTH+LISTNAME1_CONST.LEFT_MARGIN),y:0}); // 1 line list
                _listName1Div._listName1BGDiv.add(_cellListDiv[i]);
                // Add item components here

            }
            _focusDiv = new W.Div({x:0, y:0});
            _listName1Div._listName1BGDiv.add(_focusDiv);
            // add focus component here
        };
        this.initListUIWidthData = function(){
            /**
             * data = [cell1Data,cell2Data,...,cellNData];
             * cellData = {
             *      fieldName1: 'value',
             *      fieldName2: 'value',
             *      fieldName3: 'value'
             * }
             */
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME1_CONST.PARTNAME+'] --- initListUIWidthData');
            if(data==null||data.length==null){W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME1_CONST.PARTNAME+'] --- genList: data.length null'); return;}
            for(var i=0; i<data.length; i++){
                // set data _cellListDiv[i]._fieldName1
                // set data _cellListDiv[i]._fieldName2
                // set data _cellListDiv[i]._fieldName3
            }
        };
        this.updateListUIDataChanged = function(){
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME1_CONST.PARTNAME+'] --- updateListUIDataChanged');
        };
        this.initData = function (param){ // Should Redefine this function
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME1_CONST.PARTNAME+'] --- initData');
            data = param.data;
        };
        this.initState = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME1_CONST.PARTNAME+'] --- initState');
            currentState = 'initState'; // any value in SCENENAME_CONST.
            previouState = -1;
            areaFocused = false;
        };
        this.initUIWithData = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME1_CONST.PARTNAME+'] --- initUIWithData');
            _listName1Context.genList();
            _listName1Context.initListUIWidthData();
        };
        this.initUIWithState = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME1_CONST.PARTNAME+'] --- initUIWithState');
        };
        this.updateData =  function (data) {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME1_CONST.PARTNAME+'] --- updateData');
        };
        this.updateUIDataChanged = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME1_CONST.PARTNAME+'] --- updateUIDataChanged');
        };
        this.updateState = function(param){
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME1_CONST.PARTNAME+'] --- updateState');
        };
        this.updateUIStateChanged = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME1_CONST.PARTNAME+'] --- updateUIStateChanged');
            // Check current state and previous state and Update the child component correspond
        };
        this.inArea = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME1_CONST.PARTNAME+'] --- inArea');
        };
        this.outArea = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME1_CONST.PARTNAME+'] --- outArea');
        };
        this.updateFocus = function () {
            // Set focus animation
            _this.ps.makeGroup(Config.FOCUS_ANI_TIME);
            _this.ps.setTimeSpan(0,Config.FOCUS_ANI_TIME);
            // _this.ps.animate(_focusDiv,{x:currentIndex*LISTNAME1_CONST.CELL_WIDTH});
            // add animation here
            _this.ps.start({onTerm : function(){
                }});
            _this.ps.reset();
        };
        this.changeFocusIndex = function (step){
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME1_CONST.PARTNAME+'] --- changeFocusIndex');
            if(data==null||data.length==null){W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME1_CONST.PARTNAME+'] --- changeFocusIndex: data.length null'); return;}
            previousIndex = currentIndex;
            currentIndex += step;
            if(currentIndex >= data.length){
                currentIndex -= data.length;
            }
            if(currentIndex < 0){
                currentIndex += data.length;
            }
        };
        this.getCurrentIndex = function (){
            return currentIndex;
        };
        this.animationName1Animation = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME1_CONST.PARTNAME+'] --- animationName1Animation');
        };
        this.animationName2Animation = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME1_CONST.PARTNAME+'] --- animationName2Animation');
        };
        this.animationName3Animation = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME1_CONST.PARTNAME+'] --- animationName3Animation');
        };
        this.onKeyPressed = function(event){
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME1_CONST.PARTNAME+'] --- onKeyPressed');
        }
    };
    var listName1Part = new ListName1Part();
    var ListName2Part = function(){
        var LISTNAME2_CONST = {
            LIST_WIDTH: 0, // part width value
            LIST_HEIGHT: 0, // part height value
            LIST_X: 0,
            LIST_Y: 0,
            PARTNAME: "ListName2Part", //  scene name
            STATE: { // STATE CONST
                STATE_NAME_0: 0,
                STATE_NAME_1: 1,
                STATE_NAME_3: 3
            },
            NLINE: 1, // Number line displayed
            NITEM_PER_LINE: 0,
            CELL_WIDTH: 0,
            CELL_HEIGHT: 0,
            LEFT_MARGIN: 0,
            RIGHT_MARGIN: 0,
            TOP_MARGIN: 0,
            BOTTOM_MARGIN: 0,
            LIST_OVERFLOW: "hidden"
            // Some Const here
        };

        var _listName2Context = this;
        var _listName2Div;
        var _parentDiv;
        var _cellListDiv;
        var _focusDiv;
        var data; // Data object contain all information of this scene
        var currentState; // Current State on scene
        var previouState; // Previous State of scene
        var areaFocused; // true if focused else false

        // +        mcreate() // Gen UI component
        // +        initData(data), initState() -> initUIWithData(), initUIWithState()
        // +        updateData(data) -> updateUIDataChanged()
        // +        updateState(state) -> updateUIStateChanged()
        // +        animationFunction();
        // +        getCurrentState(); // Return Current State
        // +        getPreviousState(); // Return Previous State
        // +        getIndex(); // Return Current Index // Using for Listview
        // +        saveData(); // Save dataObject
        // +        getData (); // Get dataObject
        // +        When onKeyPressed: scene onKeyPressed -> check state and forwarding to matching 1rst child onKeyPressed ->
        // check state: update UI of child component Or change state Or call updateState of scene component the call updateUIStateChanged
        this.mcreate = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME2_CONST.PARTNAME+'] --- mcreate');
            _parentDiv = _sceneContext.get_listName2Div();
            _listName2Div = new W.Div({id:LISTNAME2_CONST.PARTNAME+'_listName2Div',x:0,y:0});
            _parentDiv.add(_listName2Div);
        };
        this.genList = function(){
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME2_CONST.PARTNAME+'] --- genList');
            // some tmp variable
            if(_listName2Div._listName2BGDiv){
                _listName2Div.remove(_listName2Div._listName2BGDiv);
            }
            _listName2Div._listName2BGDiv = new W.Div({x: LISTNAME2_CONST.LIST_X, y: LISTNAME2_CONST.LIST_Y, width: LISTNAME2_CONST.LIST_WIDTH, height:LISTNAME2_CONST.LIST_HEIGHT, overflow: LISTNAME2_CONST.LIST_OVERFLOW});
            _listName2Div.add(_listName2Div._listName2BGDiv);
            _cellListDiv = [];
            if(data==null||data.length==null){W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME2_CONST.PARTNAME+'] --- genList: data.length null'); return;}
            for(var i=0; i<data.length; i++){
                _cellListDiv[i] = new W.Div({x:i*(LISTNAME2_CONST.CELL_WIDTH+LISTNAME2_CONST.LEFT_MARGIN),y:0}); // 1 line list
                _listName2Div._listName2BGDiv.add(_cellListDiv[i]);
                // Add item components here

            }
            _focusDiv = new W.Div({x:0, y:0});
            _listName2Div._listName2BGDiv.add(_focusDiv);
            // add focus component here
        };
        this.initListUIWidthData = function(){
            /**
             * data = [cell1Data,cell2Data,...,cellNData];
             * cellData = {
             *      fieldName1: 'value',
             *      fieldName2: 'value',
             *      fieldName3: 'value'
             * }
             */
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME2_CONST.PARTNAME+'] --- initListUIWidthData');
            if(data==null||data.length==null){W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME2_CONST.PARTNAME+'] --- genList: data.length null'); return;}
            for(var i=0; i<data.length; i++){
                // set data _cellListDiv[i]._fieldName1
                // set data _cellListDiv[i]._fieldName2
                // set data _cellListDiv[i]._fieldName3
            }
        };
        this.updateListUIDataChanged = function(){
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME2_CONST.PARTNAME+'] --- updateListUIDataChanged');
        };
        this.initData = function (param){ // Should Redefine this function
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME2_CONST.PARTNAME+'] --- initData');
            data = param.data;
        };
        this.initState = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME2_CONST.PARTNAME+'] --- initState');
            currentState = 'initState'; // any value in SCENENAME_CONST.
            previouState = -1;
            areaFocused = false;
        };
        this.initUIWithData = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME2_CONST.PARTNAME+'] --- initUIWithData');
            _listName2Context.genList();
            _listName2Context.initListUIWidthData();
        };
        this.initUIWithState = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME2_CONST.PARTNAME+'] --- initUIWithState');
        };
        this.updateData =  function (data) {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME2_CONST.PARTNAME+'] --- updateData');
        };
        this.updateUIDataChanged = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME2_CONST.PARTNAME+'] --- updateUIDataChanged');
        };
        this.updateState = function(param){
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME2_CONST.PARTNAME+'] --- updateState');
        };
        this.updateUIStateChanged = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME2_CONST.PARTNAME+'] --- updateUIStateChanged');
            // Check current state and previous state and Update the child component correspond
        };
        this.inArea = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME2_CONST.PARTNAME+'] --- inArea');
        };
        this.outArea = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME2_CONST.PARTNAME+'] --- outArea');
        };
        this.updateFocus = function () {
            // Set focus animation
            _this.ps.makeGroup(Config.FOCUS_ANI_TIME);
            _this.ps.setTimeSpan(0,Config.FOCUS_ANI_TIME);
            // _this.ps.animate(_focusDiv,{x:currentIndex*LISTNAME2_CONST.CELL_WIDTH});
            // add animation here
            _this.ps.start({onTerm : function(){
                }});
            _this.ps.reset();
        };
        this.changeFocusIndex = function (step){
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME2_CONST.PARTNAME+'] --- changeFocusIndex');
            if(data==null||data.length==null){W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME2_CONST.PARTNAME+'] --- changeFocusIndex: data.length null'); return;}
            previousIndex = currentIndex;
            currentIndex += step;
            if(currentIndex >= data.length){
                currentIndex -= data.length;
            }
            if(currentIndex < 0){
                currentIndex += data.length;
            }
        };
        this.getCurrentIndex = function (){
            return currentIndex;
        };
        this.animationName1Animation = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME2_CONST.PARTNAME+'] --- animationName1Animation');
        };
        this.animationName2Animation = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME2_CONST.PARTNAME+'] --- animationName2Animation');
        };
        this.animationName3Animation = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME2_CONST.PARTNAME+'] --- animationName3Animation');
        };
        this.onKeyPressed = function(event){
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME2_CONST.PARTNAME+'] --- onKeyPressed');
        }
    };
    var listName2Part = new ListName2Part();
    var ListName3Part = function(){
        var LISTNAME3_CONST = {
            LIST_WIDTH: 0, // part width value
            LIST_HEIGHT: 0, // part height value
            LIST_X: 0,
            LIST_Y: 0,
            PARTNAME: "ListName3Part", //  scene name
            STATE: { // STATE CONST
                STATE_NAME_0: 0,
                STATE_NAME_1: 1,
                STATE_NAME_3: 3
            },
            NLINE: 1, // Number line displayed
            NITEM_PER_LINE: 0,
            CELL_WIDTH: 0,
            CELL_HEIGHT: 0,
            LEFT_MARGIN: 0,
            RIGHT_MARGIN: 0,
            TOP_MARGIN: 0,
            BOTTOM_MARGIN: 0,
            LIST_OVERFLOW: "hidden"
            // Some Const here
        };

        var _listName3Context = this;
        var _listName3Div;
        var _parentDiv;
        var _cellListDiv;
        var _focusDiv;
        var data; // Data object contain all information of this scene
        var currentState; // Current State on scene
        var previouState; // Previous State of scene
        var areaFocused; // true if focused else false

        // +        mcreate() // Gen UI component
        // +        initData(data), initState() -> initUIWithData(), initUIWithState()
        // +        updateData(data) -> updateUIDataChanged()
        // +        updateState(state) -> updateUIStateChanged()
        // +        animationFunction();
        // +        getCurrentState(); // Return Current State
        // +        getPreviousState(); // Return Previous State
        // +        getIndex(); // Return Current Index // Using for Listview
        // +        saveData(); // Save dataObject
        // +        getData (); // Get dataObject
        // +        When onKeyPressed: scene onKeyPressed -> check state and forwarding to matching 1rst child onKeyPressed ->
        // check state: update UI of child component Or change state Or call updateState of scene component the call updateUIStateChanged
        this.mcreate = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME3_CONST.PARTNAME+'] --- mcreate');
            _parentDiv = _sceneContext.get_listName3Div();
            _listName3Div = new W.Div({id:LISTNAME3_CONST.PARTNAME+'_listName3Div',x:0,y:0});
            _parentDiv.add(_listName3Div);
        };
        this.genList = function(){
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME3_CONST.PARTNAME+'] --- genList');
            // some tmp variable
            if(_listName3Div._listName3BGDiv){
                _listName3Div.remove(_listName3Div._listName3BGDiv);
            }
            _listName3Div._listName3BGDiv = new W.Div({x: LISTNAME3_CONST.LIST_X, y: LISTNAME3_CONST.LIST_Y, width: LISTNAME3_CONST.LIST_WIDTH, height:LISTNAME3_CONST.LIST_HEIGHT, overflow: LISTNAME3_CONST.LIST_OVERFLOW});
            _listName3Div.add(_listName3Div._listName3BGDiv);
            _cellListDiv = [];
            if(data==null||data.length==null){W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME3_CONST.PARTNAME+'] --- genList: data.length null'); return;}
            for(var i=0; i<data.length; i++){
                _cellListDiv[i] = new W.Div({x:i*(LISTNAME3_CONST.CELL_WIDTH+LISTNAME3_CONST.LEFT_MARGIN),y:0}); // 1 line list
                _listName3Div._listName3BGDiv.add(_cellListDiv[i]);
                // Add item components here

            }
            _focusDiv = new W.Div({x:0, y:0});
            _listName3Div._listName3BGDiv.add(_focusDiv);
            // add focus component here
        };
        this.initListUIWidthData = function(){
            /**
             * data = [cell1Data,cell2Data,...,cellNData];
             * cellData = {
             *      fieldName1: 'value',
             *      fieldName2: 'value',
             *      fieldName3: 'value'
             * }
             */
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME3_CONST.PARTNAME+'] --- initListUIWidthData');
            if(data==null||data.length==null){W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME3_CONST.PARTNAME+'] --- genList: data.length null'); return;}
            for(var i=0; i<data.length; i++){
                // set data _cellListDiv[i]._fieldName1
                // set data _cellListDiv[i]._fieldName2
                // set data _cellListDiv[i]._fieldName3
            }
        };
        this.updateListUIDataChanged = function(){
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME3_CONST.PARTNAME+'] --- updateListUIDataChanged');
        };
        this.initData = function (param){ // Should Redefine this function
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME3_CONST.PARTNAME+'] --- initData');
            data = param.data;
        };
        this.initState = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME3_CONST.PARTNAME+'] --- initState');
            currentState = 'initState'; // any value in SCENENAME_CONST.
            previouState = -1;
            areaFocused = false;
        };
        this.initUIWithData = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME3_CONST.PARTNAME+'] --- initUIWithData');
            _listName3Context.genList();
            _listName3Context.initListUIWidthData();
        };
        this.initUIWithState = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME3_CONST.PARTNAME+'] --- initUIWithState');
        };
        this.updateData =  function (data) {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME3_CONST.PARTNAME+'] --- updateData');
        };
        this.updateUIDataChanged = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME3_CONST.PARTNAME+'] --- updateUIDataChanged');
        };
        this.updateState = function(param){
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME3_CONST.PARTNAME+'] --- updateState');
        };
        this.updateUIStateChanged = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME3_CONST.PARTNAME+'] --- updateUIStateChanged');
            // Check current state and previous state and Update the child component correspond
        };
        this.inArea = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME3_CONST.PARTNAME+'] --- inArea');
        };
        this.outArea = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME3_CONST.PARTNAME+'] --- outArea');
        };
        this.updateFocus = function () {
            // Set focus animation
            _this.ps.makeGroup(Config.FOCUS_ANI_TIME);
            _this.ps.setTimeSpan(0,Config.FOCUS_ANI_TIME);
            // _this.ps.animate(_focusDiv,{x:currentIndex*LISTNAME3_CONST.CELL_WIDTH});
            // add animation here
            _this.ps.start({onTerm : function(){
                }});
            _this.ps.reset();
        };
        this.changeFocusIndex = function (step){
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME3_CONST.PARTNAME+'] --- changeFocusIndex');
            if(data==null||data.length==null){W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME3_CONST.PARTNAME+'] --- changeFocusIndex: data.length null'); return;}
            previousIndex = currentIndex;
            currentIndex += step;
            if(currentIndex >= data.length){
                currentIndex -= data.length;
            }
            if(currentIndex < 0){
                currentIndex += data.length;
            }
        };
        this.getCurrentIndex = function (){
            return currentIndex;
        };
        this.animationName1Animation = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME3_CONST.PARTNAME+'] --- animationName1Animation');
        };
        this.animationName2Animation = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME3_CONST.PARTNAME+'] --- animationName2Animation');
        };
        this.animationName3Animation = function () {
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME3_CONST.PARTNAME+'] --- animationName3Animation');
        };
        this.onKeyPressed = function(event){
            W.log.info('['+SCENENAME_CONST.SCENENAME+']['+LISTNAME3_CONST.PARTNAME+'] --- onKeyPressed');
        }
    };
    var listName3Part = new ListName3Part();

    // +        mcreate() // Gen UI component
    // +        initData(data), initState() -> initUIWithData(), initUIWithState()
    // +        updateData(data) -> updateUIDataChanged()
    // +        updateState(state) -> updateUIStateChanged()
    // +        animationFunction();
    // +        getCurrentState(); // Return Current State
    // +        getPreviousState(); // Return Previous State
    // +        getIndex(); // Return Current Index // Using for Listview
    // +        saveData(); // Save dataObject
    // +        getData (); // Get dataObject
    // +        When onKeyPressed: scene onKeyPressed -> check state and forwarding to matching 1rst child onKeyPressed ->
    // check state: update UI of child component Or change state Or call updateState of scene component the call updateUIStateChanged
    this.mcreate = function () {
        W.log.info('['+SCENENAME_CONST.SCENENAME+'] --- mcreate');
        _backgroundDiv = new W.Div({id:SCENENAME_CONST.SCENENAME+'_backgroundDiv',x:0, y:0, width: SCENENAME_CONST.WINDOW_WIDTH, height: SCENENAME_CONST.WINDOW_HEIGHT}); // background div
        _this.add(_backgroundDiv);
        // add more back ground component here
        _partName1Div = new W.Div({id:SCENENAME_CONST.SCENENAME+'_partName1Div',x:0,y:0});
        _this.add(_partName1Div);
        _partName2Div = new W.Div({id:SCENENAME_CONST.SCENENAME+'_partName2Div',x:0,y:0});
        _this.add(_partName2Div);
        _partName3Div = new W.Div({id:SCENENAME_CONST.SCENENAME+'_partName3Div',x:0,y:0});
        _this.add(_partName3Div);
        _listName1Div = new W.Div({id:SCENENAME_CONST.SCENENAME+'_listName1Div',x:0,y:0});
        _this.add(_listName1Div);
        _listName2Div = new W.Div({id:SCENENAME_CONST.SCENENAME+'_listName2Div',x:0,y:0});
        _this.add(_listName2Div);
        _listName3Div = new W.Div({id:SCENENAME_CONST.SCENENAME+'_listName3Div',x:0,y:0});
        _this.add(_listName3Div);

        partName1Part.mcreate();
        partName2Part.mcreate();
        partName3Part.mcreate();
        listName1Part.mcreate();
        listName2Part.mcreate();
        listName3Part.mcreate();
    };
    this.initData = function (param){ // Should Redefine this function
        if(SCENENAME_CONST.DEBUG_LEVEL == 1){W.log.info('['+SCENENAME_CONST.SCENENAME+'] --- initData(param): param = ' + JSON.stringify(param));}
        else if(SCENENAME_CONST.DEBUG_LEVEL == 0){W.log.info('['+SCENENAME_CONST.SCENENAME+'] --- initData');}
        data = {dataName: "SceneData",data:{}};
        data.data.partName1Data = {dataName: "partName1Data",data:{}};
        data.data.partName2Data = {dataName: "partName2Data",data:{}};
        data.data.partName3Data = {dataName: "partName3Data",data:{}};
        data.data.listName1Data = {dataName: "listName1Data",data:{}};
        data.data.listName2Data = {dataName: "listName2Data",data:{}};
        data.data.listName3Data = {dataName: "listName3Data",data:{}};
        //data.data.partName1Data.data = ??? // Set Data for each part here
        //data.data.partName2Data.data = ??? // Set Data for each part here
        //data.data.partName3Data.data = ??? // Set Data for each part here
        //data.data.listName1Data.data = ??? // Set Data for each part here
        //data.data.listName2Data.data = ??? // Set Data for each part here
        //data.data.listName3Data.data = ??? // Set Data for each part here
        partName1Part.initData(data.data.partName1Data);
        partName2Part.initData(data.data.partName2Data);
        partName3Part.initData(data.data.partName3Data);
        listName1Part.initData(data.data.listName1Data);
        listName2Part.initData(data.data.listName2Data);
        listName3Part.initData(data.data.listName3Data);
    };
    this.initState = function () {
        W.log.info('['+SCENENAME_CONST.SCENENAME+'] --- initState');
        currentState = 'initState'; // any value in SCENENAME_CONST.
        previouState = -1;
        partName1Part.initState();
        partName2Part.initState();
        partName3Part.initState();
        listName1Part.initState();
        listName2Part.initState();
        listName3Part.initState();
    };
    this.initUIWithData = function () {
        W.log.info('['+SCENENAME_CONST.SCENENAME+'] --- initUIWithData');
        partName1Part.initUIWithData();
        partName2Part.initUIWithData();
        partName3Part.initUIWithData();
        listName1Part.initUIWithData();
        listName2Part.initUIWithData();
        listName3Part.initUIWithData();
    };
    this.initUIWithState = function () {
        W.log.info('['+SCENENAME_CONST.SCENENAME+'] --- initUIWithState');
        partName1Part.initUIWithState();
        partName2Part.initUIWithState();
        partName3Part.initUIWithState();
        listName1Part.initUIWithState();
        listName2Part.initUIWithState();
        listName3Part.initUIWithState();
    };
    this.updateData =  function (data) {
        W.log.info('['+SCENENAME_CONST.SCENENAME+'] --- updateData');
        var partName1Data = {dataName: "partName1Data",data:{}};
        // partName1Data.data = ???
        if(partName1Data != data.data.partName1Data){
            partName1Part.updateData(data.data.partName1Data);
            partName1NeedUpdateData = true
        }else {partName1NeedUpdateData = false}

        var partName2Data = {dataName: "partName2Data",data:{}};
        // partName2Data.data = ???
        if(partName2Data != data.data.partName2Data){
            partName2Data.updateData(data.data.partName2Data);
            partName2NeedUpdateData = true
        }else {partName2NeedUpdateData = false}

        var partName3Data = {dataName: "partName2Data",data:{}};
        // partName2Data.data = ???
        if(partName3Data != data.data.partName3Data){
            partName3Data.updateData(data.data.partName3Data);
            partName3NeedUpdateData = true
        }else {partName3NeedUpdateData = false}

        var listName1Data = {dataName: "listName1Data",data:{}};
        // listName1Data.data = ???
        if(listName1Data != data.data.listName1Data){
            listName1Part.updateData(data.data.listName1Data);
            listName1NeedUpdateData = true
        }else {listName1NeedUpdateData = false}

        var listName2Data = {dataName: "listName2Data",data:{}};
        // listName2Data.data = ???
        if(listName2Data != data.data.listName2Data){
            listName2Data.updateData(data.data.listName2Data);
            listName2NeedUpdateData = true
        }else {listName2NeedUpdateData = false};

        var listName3Data = {dataName: "listName2Data",data:{}};
        // listName2Data.data = ???
        if(listName3Data != data.data.partName3Data){
            listName3Data.updateData(data.data.listName3Data);
            listName3NeedUpdateData = true
        }else {listName3NeedUpdateData = false}
    };
    this.updateUIDataChanged = function () {
        W.log.info('['+SCENENAME_CONST.SCENENAME+'] --- updateUIDataChanged');
        if(partName1NeedUpdateData){partName1Part.updateUIDataChanged()}
        if(partName2NeedUpdateData){partName2Part.updateUIDataChanged()}
        if(partName3NeedUpdateData){partName3Part.updateUIDataChanged()}
        if(listName1NeedUpdateData){listName1Part.updateUIDataChanged()}
        if(listName2NeedUpdateData){listName2Part.updateUIDataChanged()}
        if(listName3NeedUpdateData){listName3Part.updateUIDataChanged()}
    };
    this.updateState = function(param){
        W.log.info('['+SCENENAME_CONST.SCENENAME+'] --- updateState');
        previouState = currentState;
        currentState = param;
    };
    this.updateUIStateChanged = function () {
        W.log.info('['+SCENENAME_CONST.SCENENAME+'] --- updateUIStateChanged');
        // Check current state and previous state and Update the child component correspond
    };
    this.animationName1Animation = function () {
        W.log.info('['+SCENENAME_CONST.SCENENAME+'] --- animationName1Animation');
    };
    this.animationName2Animation = function () {
        W.log.info('['+SCENENAME_CONST.SCENENAME+'] --- animationName2Animation');
    };
    this.animationName3Animation = function () {
        W.log.info('['+SCENENAME_CONST.SCENENAME+'] --- animationName3Animation');
    };
    this.get_partName1Div = function () {
        return  _partName1Div;
    };
    this.get_partName2Div = function () {
        return  _partName2Div;
    };
    this.get_partName3Div = function () {
        return  _partName3Div;
    };
    this.get_listName1Div = function () {
        return  _listName1Div;
    };
    this.get_listName2Div = function () {
        return  _listName2Div;
    };
    this.get_listName3Div = function () {
        return  _listName3Div;
    };

    return W.Scene.extend({
        onCreate : function(param) {
            if(SCENENAME_CONST.DEBUG_LEVEL == 1){W.log.info('['+SCENENAME_CONST.SCENENAME+'] --- onCreate(param): param = ' + JSON.stringify(param));}
            else if(SCENENAME_CONST.DEBUG_LEVEL == 0){W.log.info('['+SCENENAME_CONST.SCENENAME+'] --- onCreate');}
            _this = this;
            _this.setKeys([]); // Registers key list
            _this.ps = new W.AnimationSpec(); // Register animation

            _sceneContext.mcreate(); // Gen UI component
            _sceneContext.initState(); //init state

            if(param==null||param.data==null){W.log.info('['+SCENENAME_CONST.SCENENAME+'] --- onCreate: param.data is null')}
            else{_sceneContext.initData(param.data);}
            _sceneContext.initUIWithData();
            _sceneContext.initUIWithState();
        },
        onStart : function(param) {
            if(SCENENAME_CONST.DEBUG_LEVEL == 1){W.log.info('['+SCENENAME_CONST.SCENENAME+'] --- onStart(param): param = ' + JSON.stringify(param));}
            else if(SCENENAME_CONST.DEBUG_LEVEL == 0){W.log.info('['+SCENENAME_CONST.SCENENAME+'] --- onStart');}
        },
        onKeyPressed : function(event) {
            W.log.info('['+SCENENAME_CONST.SCENENAME+'] --- onKeyPressed: ' + event.keyCode);
            // checks state and forwards key event
            partName1Part.onKeyPressed(event);
            partName2Part.onKeyPressed(event);
            partName3Part.onKeyPressed(event);
            listName1Part.onKeyPressed(event);
            listName2Part.onKeyPressed(event);
            listName3Part.onKeyPressed(event);

            switch(event.keyCode){
                case W.KEY.HOME:
                    break;
                case W.KEY.LEFT:
                    break;
                case W.KEY.RIGHT:
                    break;
                case W.KEY.UP:
                    break;
                case W.KEY.DOWN:
                    break;
                case W.KEY.BACK_SPACE:
                    W.SceneManager.historyBack();
                    break;
            }
        },
        onPause: function() {
            W.log.info('['+SCENENAME_CONST.SCENENAME+'] --- onPause' );
        },
        onResume: function() {
            W.log.info('['+SCENENAME_CONST.SCENENAME+'] --- onResume' );
        },
        onRefresh: function() {
            W.log.info('['+SCENENAME_CONST.SCENENAME+'] --- onRefresh' );
        },
        onDestroy: function() {
            W.log.info('['+SCENENAME_CONST.SCENENAME+'] --- onDestroy' );
        }
    });

});