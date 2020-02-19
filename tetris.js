(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlinx-html-js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlinx-html-js'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'tetris'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'tetris'.");
    }
    if (typeof this['kotlinx-html-js'] === 'undefined') {
      throw new Error("Error loading module 'tetris'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'tetris'.");
    }
    root.tetris = factory(typeof tetris === 'undefined' ? {} : tetris, kotlin, this['kotlinx-html-js']);
  }
}(this, function (_, Kotlin, $module$kotlinx_html_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var ensureNotNull = Kotlin.ensureNotNull;
  var Unit = Kotlin.kotlin.Unit;
  var set_style = $module$kotlinx_html_js.kotlinx.html.set_style_ueiko3$;
  var set_id = $module$kotlinx_html_js.kotlinx.html.set_id_ueiko3$;
  var append = $module$kotlinx_html_js.kotlinx.html.dom.append_k9bwru$;
  var equals = Kotlin.equals;
  var throwCCE = Kotlin.throwCCE;
  var attributesMapOf = $module$kotlinx_html_js.kotlinx.html.attributesMapOf_jyasbz$;
  var CANVAS_init = $module$kotlinx_html_js.kotlinx.html.CANVAS;
  var HTMLCanvasElement_0 = HTMLCanvasElement;
  var visitTagAndFinalize = $module$kotlinx_html_js.kotlinx.html.visitTagAndFinalize_g9qte5$;
  var enumEncode = $module$kotlinx_html_js.kotlinx.html.attributes.enumEncode_m4whry$;
  var attributesMapOf_0 = $module$kotlinx_html_js.kotlinx.html.attributesMapOf_alerag$;
  var BUTTON_init = $module$kotlinx_html_js.kotlinx.html.BUTTON;
  var visitTag = $module$kotlinx_html_js.kotlinx.html.visitTag_xwv8ym$;
  var DIV_init = $module$kotlinx_html_js.kotlinx.html.DIV;
  var HTMLDivElement_0 = HTMLDivElement;
  var SPAN_init = $module$kotlinx_html_js.kotlinx.html.SPAN;
  var HTMLSpanElement_0 = HTMLSpanElement;
  var get_milliseconds = Kotlin.kotlin.time.get_milliseconds_yrwdxr$;
  var clear = Kotlin.kotlin.dom.clear_asww5s$;
  var min = Kotlin.kotlin.collections.min_exjks8$;
  var max = Kotlin.kotlin.collections.max_exjks8$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var throwUPAE = Kotlin.throwUPAE;
  var L1000 = Kotlin.Long.fromInt(1000);
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var mutableMapOf = Kotlin.kotlin.collections.mutableMapOf_qfcya0$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Any = Object;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var removeAll = Kotlin.kotlin.collections.removeAll_uhyeqt$;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var Collection = Kotlin.kotlin.collections.Collection;
  var addAll = Kotlin.kotlin.collections.addAll_ye1y7v$;
  var removeAll_0 = Kotlin.kotlin.collections.removeAll_ipc267$;
  var addAll_0 = Kotlin.kotlin.collections.addAll_ipc267$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var numberToInt = Kotlin.numberToInt;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var get_milliseconds_0 = Kotlin.kotlin.time.get_milliseconds_s8ev3n$;
  var toMutableSet = Kotlin.kotlin.collections.toMutableSet_7wnvza$;
  var emptySet = Kotlin.kotlin.collections.emptySet_287e2$;
  var distinct = Kotlin.kotlin.collections.distinct_7wnvza$;
  var sorted = Kotlin.kotlin.collections.sorted_exjks8$;
  var setOf = Kotlin.kotlin.collections.setOf_i5x0yv$;
  var properties = Kotlin.kotlin.properties;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var getValue = Kotlin.kotlin.collections.getValue_t9ocha$;
  var Pair = Kotlin.kotlin.Pair;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var shuffled = Kotlin.kotlin.collections.shuffled_7wnvza$;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var Random = Kotlin.kotlin.random.Random;
  var hashCode = Kotlin.hashCode;
  var abs = Kotlin.kotlin.math.abs_za3lpa$;
  var getCallableRef = Kotlin.getCallableRef;
  CellColor.prototype = Object.create(Enum.prototype);
  CellColor.prototype.constructor = CellColor;
  Command.prototype = Object.create(Enum.prototype);
  Command.prototype.constructor = Command;
  Orientation.prototype = Object.create(Enum.prototype);
  Orientation.prototype.constructor = Orientation;
  S.prototype = Object.create(StandardTetrimino.prototype);
  S.prototype.constructor = S;
  Z.prototype = Object.create(StandardTetrimino.prototype);
  Z.prototype.constructor = Z;
  J.prototype = Object.create(StandardTetrimino.prototype);
  J.prototype.constructor = J;
  L.prototype = Object.create(StandardTetrimino.prototype);
  L.prototype.constructor = L;
  O.prototype = Object.create(StandardTetrimino.prototype);
  O.prototype.constructor = O;
  I.prototype = Object.create(StandardTetrimino.prototype);
  I.prototype.constructor = I;
  T.prototype = Object.create(StandardTetrimino.prototype);
  T.prototype.constructor = T;
  function visitAndFinalize$lambda(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function visit$lambda(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function visitAndFinalize$lambda_0(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function visitAndFinalize$lambda_1(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function main() {
    loadHTML();
    loadGame();
  }
  var BOARD_ID;
  var HOLD_ID;
  var UPCOMING_PIECES_ID;
  var RESTART_ID;
  function loadHTML$lambda$lambda$lambda$lambda($receiver) {
    set_id($receiver, HOLD_ID);
    $receiver.width = '120';
    $receiver.height = '120';
    return Unit;
  }
  function loadHTML$lambda$lambda$lambda$lambda_0($receiver) {
    set_id($receiver, 'restart');
    set_style($receiver, 'display: block');
    $receiver.unaryPlus_pdl1vz$('Restart');
    return Unit;
  }
  function loadHTML$lambda$lambda$lambda(this$) {
    return function ($receiver) {
      set_style($receiver, 'display: inline-block; vertical-align: top');
      var $receiver_0 = this$;
      var tmp$;
      Kotlin.isType(tmp$ = visitTagAndFinalize(new CANVAS_init(attributesMapOf('class', null), $receiver_0), $receiver_0, visitAndFinalize$lambda(loadHTML$lambda$lambda$lambda$lambda)), HTMLCanvasElement_0) ? tmp$ : throwCCE();
      visitTag(new BUTTON_init(attributesMapOf_0(['formenctype', null != null ? enumEncode(null) : null, 'formmethod', null != null ? enumEncode(null) : null, 'name', null, 'type', null != null ? enumEncode(null) : null, 'class', null]), $receiver.consumer), visit$lambda(loadHTML$lambda$lambda$lambda$lambda_0));
      return Unit;
    };
  }
  function loadHTML$lambda$lambda$lambda$lambda_1($receiver) {
    set_id($receiver, BOARD_ID);
    $receiver.width = '300';
    $receiver.height = '600';
    return Unit;
  }
  function loadHTML$lambda$lambda$lambda_0(this$) {
    return function ($receiver) {
      set_style($receiver, 'display: inline-block; vertical-align: top');
      var $receiver_0 = this$;
      var tmp$;
      Kotlin.isType(tmp$ = visitTagAndFinalize(new CANVAS_init(attributesMapOf('class', null), $receiver_0), $receiver_0, visitAndFinalize$lambda(loadHTML$lambda$lambda$lambda$lambda_1)), HTMLCanvasElement_0) ? tmp$ : throwCCE();
      return Unit;
    };
  }
  function loadHTML$lambda$lambda$lambda_1($receiver) {
    set_id($receiver, UPCOMING_PIECES_ID);
    set_style($receiver, 'display: inline-block; vertical-align: top');
    return Unit;
  }
  function loadHTML$lambda$lambda(this$) {
    return function ($receiver) {
      set_style($receiver, 'position: absolute; top: 50%; left: 50%; margin-right: -50%; transform: translate(-50%, -50%)');
      var $receiver_0 = this$;
      var block = loadHTML$lambda$lambda$lambda(this$);
      var tmp$;
      Kotlin.isType(tmp$ = visitTagAndFinalize(new DIV_init(attributesMapOf('class', null), $receiver_0), $receiver_0, visitAndFinalize$lambda_0(block)), HTMLDivElement_0) ? tmp$ : throwCCE();
      $receiver.unaryPlus_pdl1vz$(' ');
      var $receiver_1 = this$;
      var block_0 = loadHTML$lambda$lambda$lambda_0(this$);
      var tmp$_0;
      Kotlin.isType(tmp$_0 = visitTagAndFinalize(new DIV_init(attributesMapOf('class', null), $receiver_1), $receiver_1, visitAndFinalize$lambda_0(block_0)), HTMLDivElement_0) ? tmp$_0 : throwCCE();
      $receiver.unaryPlus_pdl1vz$(' ');
      var $receiver_2 = this$;
      var tmp$_1;
      Kotlin.isType(tmp$_1 = visitTagAndFinalize(new DIV_init(attributesMapOf('class', null), $receiver_2), $receiver_2, visitAndFinalize$lambda_0(loadHTML$lambda$lambda$lambda_1)), HTMLDivElement_0) ? tmp$_1 : throwCCE();
      return Unit;
    };
  }
  function loadHTML$lambda($receiver) {
    var tmp$;
    Kotlin.isType(tmp$ = visitTagAndFinalize(new SPAN_init(attributesMapOf('class', null), $receiver), $receiver, visitAndFinalize$lambda_1(loadHTML$lambda$lambda($receiver))), HTMLSpanElement_0) ? tmp$ : throwCCE();
    return Unit;
  }
  function loadHTML() {
    var $receiver = ensureNotNull(document.body).style;
    $receiver.backgroundSize = 'cover';
    $receiver.backgroundRepeat = 'no-repeat';
    $receiver.backgroundImage = "url('https://media.giphy.com/media/5PjafLZFxMWc/giphy.gif')";
    append(ensureNotNull(document.body), loadHTML$lambda);
  }
  function loadGame$lambda(closure$controller, closure$view) {
    return function () {
      closure$controller.stop();
      closure$controller.run_smlric$(new BaseGame(new BoardImpl(), new GameConfiguration()), closure$view);
      return Unit;
    };
  }
  function loadGame$lambda_0(key) {
    switch (key) {
      case 'arrowleft':
        return 'left';
      case 'arrowright':
        return 'right';
      case 'arrowup':
        return 'up';
      case 'arrowdown':
        return 'down';
      case ' ':
        return 'space';
      case 'shift':
        return 'shift';
      default:return key;
    }
  }
  function loadGame$lambda_1(closure$restartGame, closure$controller, closure$keysToCommand) {
    return function (it) {
      var key = it.key.toLowerCase();
      if (equals(key, 'r')) {
        closure$restartGame();
      }
       else {
        closure$controller.handleKeyPress_61zpoe$(closure$keysToCommand(key));
      }
      return Unit;
    };
  }
  function loadGame$lambda_2(closure$controller, closure$keysToCommand) {
    return function (it) {
      var key = it.key.toLowerCase();
      closure$controller.handleKeyRelease_61zpoe$(closure$keysToCommand(key));
      return Unit;
    };
  }
  function loadGame$lambda_3(closure$restartGame) {
    return function (it) {
      closure$restartGame();
      return Unit;
    };
  }
  function loadGame() {
    var tmp$, tmp$_0, tmp$_1;
    var controller = new ControllerImpl();
    var view = new TetrisWeb();
    var restartGame = loadGame$lambda(controller, view);
    var keysToCommand = loadGame$lambda_0;
    (tmp$ = document.body) != null ? (tmp$.onkeydown = loadGame$lambda_1(restartGame, controller, keysToCommand)) : null;
    (tmp$_0 = document.body) != null ? (tmp$_0.onkeyup = loadGame$lambda_2(controller, keysToCommand)) : null;
    (Kotlin.isType(tmp$_1 = document.getElementById(RESTART_ID), HTMLButtonElement) ? tmp$_1 : throwCCE()).onclick = loadGame$lambda_3(restartGame);
    controller.run_smlric$(new BaseGame(new BoardImpl(), new GameConfiguration()), view);
  }
  function runAtFixedRate$lambda(closure$shouldContinue, closure$event, closure$intervalId) {
    return function () {
      var tmp$;
      if (closure$shouldContinue()) {
        return closure$event();
      }
       else {
        var tmp$_0;
        if ((tmp$ = closure$intervalId.v) != null) {
          window.clearInterval(tmp$);
          tmp$_0 = Unit;
        }
         else
          tmp$_0 = null;
        return tmp$_0;
      }
    };
  }
  function runAtFixedRate(period, shouldContinue, event) {
    var intervalId = {v: null};
    intervalId.v = window.setInterval(runAtFixedRate$lambda(shouldContinue, event, intervalId), period.toInt());
  }
  function sync(lock, f) {
    return f();
  }
  function timeStamp() {
    return get_milliseconds(window.performance.now());
  }
  function TetrisWeb() {
  }
  TetrisWeb.prototype.drawCells_4c630g$ = function (cells) {
    var tmp$;
    var canvas = Kotlin.isType(tmp$ = document.getElementById(BOARD_ID), HTMLCanvasElement) ? tmp$ : throwCCE();
    this.clearBoard_0(canvas);
    this.paintCells_0(canvas, cells);
  };
  TetrisWeb.prototype.clearBoard_0 = function (canvas) {
    var tmp$;
    var ctx = Kotlin.isType(tmp$ = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$ : throwCCE();
    ctx.fillStyle = 'black';
    ctx.fillRect(0.0, 0.0, canvas.width, canvas.height);
  };
  TetrisWeb.prototype.paintCells_0 = function (canvas, cells) {
    var tmp$;
    tmp$ = cells.iterator();
    while (tmp$.hasNext()) {
      var cell = tmp$.next();
      var color = this.htmlColor_0(cell.color);
      var squareSize = canvas.width / 10 | 0;
      this.paintCell_0(canvas, cell.row, cell.col, squareSize, color);
    }
  };
  TetrisWeb.prototype.drawHeldCells_4c630g$ = function (cells) {
    var tmp$;
    var canvas = Kotlin.isType(tmp$ = document.getElementById(HOLD_ID), HTMLCanvasElement) ? tmp$ : throwCCE();
    this.preview_0(canvas, cells);
  };
  TetrisWeb.prototype.drawUpcomingCells_pqtkx7$ = function (cellsQueue) {
    var tmp$, tmp$_0, tmp$_1;
    var pieceQueueDiv = Kotlin.isType(tmp$ = document.getElementById(UPCOMING_PIECES_ID), HTMLDivElement) ? tmp$ : throwCCE();
    clear(pieceQueueDiv);
    tmp$_0 = cellsQueue.iterator();
    while (tmp$_0.hasNext()) {
      var cells = tmp$_0.next();
      var previewCanvas = Kotlin.isType(tmp$_1 = document.createElement('canvas'), HTMLCanvasElement) ? tmp$_1 : throwCCE();
      previewCanvas.width = 120;
      previewCanvas.height = 120;
      previewCanvas.style.display = 'block';
      this.preview_0(previewCanvas, cells);
      pieceQueueDiv.appendChild(previewCanvas);
    }
  };
  TetrisWeb.prototype.preview_0 = function (canvas, cells) {
    this.clearPreviewCanvas_0(canvas);
    this.paintPreviewCells_0(canvas, cells);
  };
  TetrisWeb.prototype.clearPreviewCanvas_0 = function (canvas) {
    var tmp$;
    var ctx = Kotlin.isType(tmp$ = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$ : throwCCE();
    ctx.fillStyle = 'black';
    ctx.fillRect(0.0, 0.0, canvas.width, canvas.height);
  };
  TetrisWeb.prototype.paintPreviewCells_0 = function (canvas, cells) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var PREVIEW_BOX_SIZE = 4;
    var destination = ArrayList_init(collectionSizeOrDefault(cells, 10));
    var tmp$_4;
    tmp$_4 = cells.iterator();
    while (tmp$_4.hasNext()) {
      var item = tmp$_4.next();
      destination.add_11rb$(item.row);
    }
    var rows = destination;
    var destination_0 = ArrayList_init(collectionSizeOrDefault(cells, 10));
    var tmp$_5;
    tmp$_5 = cells.iterator();
    while (tmp$_5.hasNext()) {
      var item_0 = tmp$_5.next();
      destination_0.add_11rb$(item_0.col);
    }
    var cols = destination_0;
    var minRow = (tmp$ = min(rows)) != null ? tmp$ : 0;
    var maxRow = (tmp$_0 = max(rows)) != null ? tmp$_0 : PREVIEW_BOX_SIZE;
    var minCol = (tmp$_1 = min(cols)) != null ? tmp$_1 : 0;
    var maxCol = (tmp$_2 = max(cols)) != null ? tmp$_2 : PREVIEW_BOX_SIZE;
    var dRow = minRow - ((PREVIEW_BOX_SIZE - (maxRow - minRow + 1) | 0) / 2 | 0) | 0;
    var dCol = minCol - ((PREVIEW_BOX_SIZE - (maxCol - minCol + 1) | 0) / 2 | 0) | 0;
    var squareSize = canvas.width / PREVIEW_BOX_SIZE | 0;
    tmp$_3 = cells.iterator();
    while (tmp$_3.hasNext()) {
      var cell = tmp$_3.next();
      var color = this.htmlColor_0(cell.color);
      this.paintCell_0(canvas, cell.row - dRow | 0, cell.col - dCol | 0, squareSize, color);
    }
  };
  TetrisWeb.prototype.paintCell_0 = function (canvas, row, col, squareSize, fillStyle) {
    var tmp$;
    var ctx = Kotlin.isType(tmp$ = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$ : throwCCE();
    var size = squareSize;
    ctx.fillStyle = 'grey';
    ctx.fillRect(col * size, row * size, size, size);
    ctx.fillStyle = fillStyle;
    ctx.fillRect(col * size + 1, row * size + 1, size - 2, size - 2);
  };
  TetrisWeb.prototype.htmlColor_0 = function (color) {
    switch (color.name) {
      case 'GREEN':
        return 'green';
      case 'RED':
        return 'red';
      case 'DARK_BLUE':
        return 'blue';
      case 'ORANGE':
        return 'orange';
      case 'LIGHT_BLUE':
        return 'cyan';
      case 'YELLOW':
        return 'yellow';
      case 'PURPLE':
        return 'purple';
      case 'NULL':
        return 'grey';
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  TetrisWeb.$metadata$ = {kind: Kind_CLASS, simpleName: 'TetrisWeb', interfaces: [TetrisUI]};
  function ControllerImpl() {
    this.fps = 60;
    this.game_w3xoh4$_0 = this.game_w3xoh4$_0;
    this.view_wcbjrp$_0 = this.view_wcbjrp$_0;
    this.keyToCommand_0 = mutableMapOf([to('z', Command$ROTATE_CCW_getInstance()), to('up', Command$ROTATE_CW_getInstance()), to('left', Command$LEFT_getInstance()), to('right', Command$RIGHT_getInstance()), to('down', Command$SOFT_DROP_getInstance()), to('space', Command$HARD_DROP_getInstance()), to('shift', Command$HOLD_getInstance())]);
  }
  Object.defineProperty(ControllerImpl.prototype, 'game', {get: function () {
    if (this.game_w3xoh4$_0 == null)
      return throwUPAE('game');
    return this.game_w3xoh4$_0;
  }, set: function (game) {
    this.game_w3xoh4$_0 = game;
  }});
  Object.defineProperty(ControllerImpl.prototype, 'view', {get: function () {
    if (this.view_wcbjrp$_0 == null)
      return throwUPAE('view');
    return this.view_wcbjrp$_0;
  }, set: function (view) {
    this.view_wcbjrp$_0 = view;
  }});
  function ControllerImpl$run$lambda(closure$view, closure$game, this$ControllerImpl) {
    return function () {
      closure$view.drawCells_4c630g$(this$ControllerImpl.standardize_0(closure$game.allCells()));
      return Unit;
    };
  }
  function ControllerImpl$run$lambda_0(closure$view, closure$game) {
    return function () {
      closure$view.drawHeldCells_4c630g$(closure$game.heldCells());
      return Unit;
    };
  }
  function ControllerImpl$run$lambda_1(closure$view, closure$game) {
    return function () {
      closure$view.drawUpcomingCells_pqtkx7$(closure$game.upcomingCells());
      return Unit;
    };
  }
  function ControllerImpl$run$lambda_2(closure$game) {
    return function () {
      return !closure$game.finished;
    };
  }
  function ControllerImpl$run$lambda_3(closure$game) {
    return function () {
      closure$game.frame();
      return Unit;
    };
  }
  ControllerImpl.prototype.run_smlric$ = function (game, view) {
    this.game = game;
    this.view = view;
    game.onBoardChange_o14v8n$(ControllerImpl$run$lambda(view, game, this));
    game.onHeldPieceChange_o14v8n$(ControllerImpl$run$lambda_0(view, game));
    game.onUpcomingPiecesChange_o14v8n$(ControllerImpl$run$lambda_1(view, game));
    game.start();
    view.drawCells_4c630g$(this.standardize_0(game.allCells()));
    view.drawHeldCells_4c630g$(game.heldCells());
    view.drawUpcomingCells_pqtkx7$(game.upcomingCells());
    runAtFixedRate(L1000.div(Kotlin.Long.fromInt(this.fps)), ControllerImpl$run$lambda_2(game), ControllerImpl$run$lambda_3(game));
  };
  ControllerImpl.prototype.stop = function () {
    this.game.finished = true;
  };
  ControllerImpl.prototype.handleKeyPress_61zpoe$ = function (key) {
    if (this.game.finished)
      return;
    var tmp$;
    this.game.commandInitiated_mzjd4c$((tmp$ = this.keyToCommand_0.get_11rb$(key)) != null ? tmp$ : Command$DO_NOTHING_getInstance());
  };
  ControllerImpl.prototype.handleKeyRelease_61zpoe$ = function (key) {
    if (this.game.finished)
      return;
    var tmp$;
    this.game.commandStopped_mzjd4c$((tmp$ = this.keyToCommand_0.get_11rb$(key)) != null ? tmp$ : Command$DO_NOTHING_getInstance());
  };
  ControllerImpl.prototype.standardize_0 = function ($receiver) {
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.move_vux9f0$(-20, 0));
    }
    var destination_0 = ArrayList_init_0();
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (element.row >= 0)
        destination_0.add_11rb$(element);
    }
    return toSet(destination_0);
  };
  ControllerImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'ControllerImpl', interfaces: [TetrisController]};
  function TetrisController() {
  }
  TetrisController.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'TetrisController', interfaces: []};
  function Board() {
  }
  Board.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Board', interfaces: []};
  var BOARD_WIDTH;
  var BOARD_HEIGHT;
  var VISIBLE_BOARD_HEIGHT;
  var FIRST_VISIBLE_ROW;
  function BoardImpl() {
    this.placedCells_0 = LinkedHashSet_init();
  }
  BoardImpl.prototype.getPlacedCells = function () {
    return toSet(this.placedCells_0);
  };
  BoardImpl.prototype.areValidCells_xyy4xm$ = function (cells) {
    var all$result;
    all$break: do {
      var tmp$;
      loop_label: for (tmp$ = 0; tmp$ !== cells.length; ++tmp$) {
        var element = cells[tmp$];
        var tmp$_0, tmp$_1, tmp$_2;
        tmp$_0 = element.row;
        if (0 <= tmp$_0 && tmp$_0 < 40) {
          tmp$_1 = element.col;
          tmp$_2 = (0 <= tmp$_1 && tmp$_1 < 10);
        }
         else
          tmp$_2 = false;
        var tmp$_3 = tmp$_2;
        if (tmp$_3) {
          var $receiver = this.placedCells_0;
          var all$result_0;
          all$break_0: do {
            var tmp$_4;
            if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
              all$result_0 = true;
              break all$break_0;
            }
            tmp$_4 = $receiver.iterator();
            while (tmp$_4.hasNext()) {
              var element_0 = tmp$_4.next();
              if (!(element !== element_0 && !element_0.sharesPositionWith_xttjpl$(element))) {
                all$result_0 = false;
                break all$break_0;
              }
            }
            all$result_0 = true;
          }
           while (false);
          tmp$_3 = all$result_0;
        }
        if (!tmp$_3) {
          all$result = false;
          break all$break;
        }
      }
      all$result = true;
    }
     while (false);
    return all$result;
  };
  BoardImpl.prototype.placeCells_xyy4xm$ = function (cells) {
    if (!this.areValidCells_xyy4xm$(cells.slice()))
      throw IllegalArgumentException_init('invalid cells for this board');
    addAll(this.placedCells_0, cells);
  };
  function BoardImpl$clearLine$lambda(closure$row) {
    return function (it) {
      return it.row === closure$row;
    };
  }
  BoardImpl.prototype.clearLine_za3lpa$ = function (row) {
    removeAll(this.placedCells_0, BoardImpl$clearLine$lambda(row));
    var toBeRemoved = LinkedHashSet_init();
    var toBeAdded = LinkedHashSet_init();
    var tmp$;
    tmp$ = this.placedCells_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.row < row) {
        toBeRemoved.add_11rb$(element);
        var element_0 = element.move_vux9f0$(1, 0);
        toBeAdded.add_11rb$(element_0);
      }
    }
    removeAll_0(this.placedCells_0, toBeRemoved);
    addAll_0(this.placedCells_0, toBeAdded);
  };
  BoardImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'BoardImpl', interfaces: [Board]};
  function CellColor(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function CellColor_initFields() {
    CellColor_initFields = function () {
    };
    CellColor$GREEN_instance = new CellColor('GREEN', 0);
    CellColor$RED_instance = new CellColor('RED', 1);
    CellColor$DARK_BLUE_instance = new CellColor('DARK_BLUE', 2);
    CellColor$ORANGE_instance = new CellColor('ORANGE', 3);
    CellColor$LIGHT_BLUE_instance = new CellColor('LIGHT_BLUE', 4);
    CellColor$YELLOW_instance = new CellColor('YELLOW', 5);
    CellColor$PURPLE_instance = new CellColor('PURPLE', 6);
    CellColor$NULL_instance = new CellColor('NULL', 7);
  }
  var CellColor$GREEN_instance;
  function CellColor$GREEN_getInstance() {
    CellColor_initFields();
    return CellColor$GREEN_instance;
  }
  var CellColor$RED_instance;
  function CellColor$RED_getInstance() {
    CellColor_initFields();
    return CellColor$RED_instance;
  }
  var CellColor$DARK_BLUE_instance;
  function CellColor$DARK_BLUE_getInstance() {
    CellColor_initFields();
    return CellColor$DARK_BLUE_instance;
  }
  var CellColor$ORANGE_instance;
  function CellColor$ORANGE_getInstance() {
    CellColor_initFields();
    return CellColor$ORANGE_instance;
  }
  var CellColor$LIGHT_BLUE_instance;
  function CellColor$LIGHT_BLUE_getInstance() {
    CellColor_initFields();
    return CellColor$LIGHT_BLUE_instance;
  }
  var CellColor$YELLOW_instance;
  function CellColor$YELLOW_getInstance() {
    CellColor_initFields();
    return CellColor$YELLOW_instance;
  }
  var CellColor$PURPLE_instance;
  function CellColor$PURPLE_getInstance() {
    CellColor_initFields();
    return CellColor$PURPLE_instance;
  }
  var CellColor$NULL_instance;
  function CellColor$NULL_getInstance() {
    CellColor_initFields();
    return CellColor$NULL_instance;
  }
  CellColor.$metadata$ = {kind: Kind_CLASS, simpleName: 'CellColor', interfaces: [Enum]};
  function CellColor$values() {
    return [CellColor$GREEN_getInstance(), CellColor$RED_getInstance(), CellColor$DARK_BLUE_getInstance(), CellColor$ORANGE_getInstance(), CellColor$LIGHT_BLUE_getInstance(), CellColor$YELLOW_getInstance(), CellColor$PURPLE_getInstance(), CellColor$NULL_getInstance()];
  }
  CellColor.values = CellColor$values;
  function CellColor$valueOf(name) {
    switch (name) {
      case 'GREEN':
        return CellColor$GREEN_getInstance();
      case 'RED':
        return CellColor$RED_getInstance();
      case 'DARK_BLUE':
        return CellColor$DARK_BLUE_getInstance();
      case 'ORANGE':
        return CellColor$ORANGE_getInstance();
      case 'LIGHT_BLUE':
        return CellColor$LIGHT_BLUE_getInstance();
      case 'YELLOW':
        return CellColor$YELLOW_getInstance();
      case 'PURPLE':
        return CellColor$PURPLE_getInstance();
      case 'NULL':
        return CellColor$NULL_getInstance();
      default:throwISE('No enum constant model.cell.CellColor.' + name);
    }
  }
  CellColor.valueOf_61zpoe$ = CellColor$valueOf;
  function Cell() {
  }
  Cell.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Cell', interfaces: []};
  function CellImpl(color, position) {
    this.color_8221ac$_0 = color;
    this.position_0 = position;
  }
  Object.defineProperty(CellImpl.prototype, 'color', {get: function () {
    return this.color_8221ac$_0;
  }});
  Object.defineProperty(CellImpl.prototype, 'row', {get: function () {
    return numberToInt(this.position_0.x);
  }});
  Object.defineProperty(CellImpl.prototype, 'col', {get: function () {
    return numberToInt(this.position_0.y);
  }});
  CellImpl.prototype.move_vux9f0$ = function (dRow, dCol) {
    return new CellImpl(this.color, this.position_0.translate_lu1900$(dRow, dCol));
  };
  CellImpl.prototype.rotate90CWAround_xu224h$ = function (centerOfRotation) {
    return new CellImpl(this.color, this.position_0.rotate90CWAround_xu224h$(centerOfRotation));
  };
  CellImpl.prototype.rotate90CCWAround_xu224h$ = function (centerOfRotation) {
    return new CellImpl(this.color, this.position_0.rotate90CCWAround_xu224h$(centerOfRotation));
  };
  CellImpl.prototype.sharesPositionWith_xttjpl$ = function (other) {
    return this.row === other.row && this.col === other.col;
  };
  CellImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'CellImpl', interfaces: [Cell]};
  function CellImpl_init(color, row, col, $this) {
    $this = $this || Object.create(CellImpl.prototype);
    CellImpl.call($this, color, new Posn(row, col));
    return $this;
  }
  CellImpl.prototype.component1 = function () {
    return this.color;
  };
  CellImpl.prototype.component2_0 = function () {
    return this.position_0;
  };
  CellImpl.prototype.copy_wpxw8f$ = function (color, position) {
    return new CellImpl(color === void 0 ? this.color : color, position === void 0 ? this.position_0 : position);
  };
  CellImpl.prototype.toString = function () {
    return 'CellImpl(color=' + Kotlin.toString(this.color) + (', position=' + Kotlin.toString(this.position_0)) + ')';
  };
  CellImpl.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.color) | 0;
    result = result * 31 + Kotlin.hashCode(this.position_0) | 0;
    return result;
  };
  CellImpl.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.color, other.color) && Kotlin.equals(this.position_0, other.position_0)))));
  };
  function Posn(x, y) {
    this.x = x;
    this.y = y;
  }
  Posn.prototype.translate_lu1900$ = function (dX, dY) {
    return new Posn(this.x + dX, this.y + dY);
  };
  Posn.prototype.rotate90CWAround_lu1900$ = function (centerX, centerY) {
    var dX = this.x - centerX;
    var dY = this.y - centerY;
    return new Posn(dY + centerX, -dX + centerY);
  };
  Posn.prototype.rotate90CWAround_xu224h$ = function (centerOfRotation) {
    return this.rotate90CWAround_lu1900$(centerOfRotation.x, centerOfRotation.y);
  };
  Posn.prototype.rotate90CCWAround_lu1900$ = function (centerX, centerY) {
    var dX = this.x - centerX;
    var dY = this.y - centerY;
    return new Posn(-dY + centerX, dX + centerY);
  };
  Posn.prototype.rotate90CCWAround_xu224h$ = function (centerOfRotation) {
    return this.rotate90CCWAround_lu1900$(centerOfRotation.x, centerOfRotation.y);
  };
  Posn.$metadata$ = {kind: Kind_CLASS, simpleName: 'Posn', interfaces: []};
  Posn.prototype.component1 = function () {
    return this.x;
  };
  Posn.prototype.component2 = function () {
    return this.y;
  };
  Posn.prototype.copy_lu1900$ = function (x, y) {
    return new Posn(x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  Posn.prototype.toString = function () {
    return 'Posn(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + ')';
  };
  Posn.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  Posn.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  function BaseGame(board, config) {
    this.config = config;
    this.finished = false;
    this.board_665yfc$_0 = new BaseGame$board$ObjectLiteral(board, this);
    this.repeatableCmds_awwpko$_0 = setOf([Command$LEFT_getInstance(), Command$RIGHT_getInstance(), Command$SOFT_DROP_getInstance()]);
    this.alreadyStarted_szcpy5$_0 = false;
    this.lastAutoDrop_o9cj4i$_cr8bu5$_0 = properties.Delegates.notNull_30y1fr$();
    this.pressedCmds_1gzr1p$_20rs5h$_0 = this.pressedCmds_1gzr1p$_20rs5h$_0;
    this.initialPress_mw33k7$_w39pe0$_0 = this.initialPress_mw33k7$_w39pe0$_0;
    this.timeOfPrevAction_mokgl5$_g1xyz$_0 = this.timeOfPrevAction_mokgl5$_g1xyz$_0;
    this.heldPiece_aun02d$_0 = null;
    this.alreadyHolding_1bbr1h$_0 = false;
    this.upcomingPiecesQueue_8uxv1e$_ryi04o$_0 = this.upcomingPiecesQueue_8uxv1e$_ryi04o$_0;
    this.autoLockStartTime_hl1607$_0 = null;
    this.activePiece_tptnae$_43zuh1$_0 = this.activePiece_tptnae$_43zuh1$_0;
    this.boardChangeHandlers_kt4o4x$_0 = LinkedHashSet_init();
    this.heldPieceHandlers_kdsr70$_0 = LinkedHashSet_init();
    this.upcomingPiecesHandlers_mk451g$_0 = LinkedHashSet_init();
  }
  var BaseGame$lastAutoDrop_metadata = new PropertyMetadata('lastAutoDrop');
  Object.defineProperty(BaseGame.prototype, 'lastAutoDrop_o9cj4i$_0', {get: function () {
    return this.lastAutoDrop_o9cj4i$_cr8bu5$_0.getValue_lrcp0p$(this, BaseGame$lastAutoDrop_metadata);
  }, set: function (lastAutoDrop) {
    this.lastAutoDrop_o9cj4i$_cr8bu5$_0.setValue_9rddgb$(this, BaseGame$lastAutoDrop_metadata, lastAutoDrop);
  }});
  Object.defineProperty(BaseGame.prototype, 'pressedCmds_1gzr1p$_0', {get: function () {
    if (this.pressedCmds_1gzr1p$_20rs5h$_0 == null)
      return throwUPAE('pressedCmds');
    return this.pressedCmds_1gzr1p$_20rs5h$_0;
  }, set: function (pressedCmds) {
    this.pressedCmds_1gzr1p$_20rs5h$_0 = pressedCmds;
  }});
  Object.defineProperty(BaseGame.prototype, 'initialPress_mw33k7$_0', {get: function () {
    if (this.initialPress_mw33k7$_w39pe0$_0 == null)
      return throwUPAE('initialPress');
    return this.initialPress_mw33k7$_w39pe0$_0;
  }, set: function (initialPress) {
    this.initialPress_mw33k7$_w39pe0$_0 = initialPress;
  }});
  Object.defineProperty(BaseGame.prototype, 'timeOfPrevAction_mokgl5$_0', {get: function () {
    if (this.timeOfPrevAction_mokgl5$_g1xyz$_0 == null)
      return throwUPAE('timeOfPrevAction');
    return this.timeOfPrevAction_mokgl5$_g1xyz$_0;
  }, set: function (timeOfPrevAction) {
    this.timeOfPrevAction_mokgl5$_g1xyz$_0 = timeOfPrevAction;
  }});
  Object.defineProperty(BaseGame.prototype, 'upcomingPiecesQueue_8uxv1e$_0', {get: function () {
    if (this.upcomingPiecesQueue_8uxv1e$_ryi04o$_0 == null)
      return throwUPAE('upcomingPiecesQueue');
    return this.upcomingPiecesQueue_8uxv1e$_ryi04o$_0;
  }, set: function (upcomingPiecesQueue) {
    this.upcomingPiecesQueue_8uxv1e$_ryi04o$_0 = upcomingPiecesQueue;
  }});
  Object.defineProperty(BaseGame.prototype, 'activePiece_tptnae$_0', {get: function () {
    if (this.activePiece_tptnae$_43zuh1$_0 == null)
      return throwUPAE('activePiece');
    return this.activePiece_tptnae$_43zuh1$_0;
  }, set: function (activePiece) {
    this.activePiece_tptnae$_43zuh1$_0 = activePiece;
  }});
  BaseGame.prototype.start = function () {
    if (this.alreadyStarted_szcpy5$_0)
      throw Exception_init('game had already been started');
    this.alreadyStarted_szcpy5$_0 = true;
    this.lastAutoDrop_o9cj4i$_0 = timeStamp();
    this.pressedCmds_1gzr1p$_0 = LinkedHashSet_init();
    this.initialPress_mw33k7$_0 = LinkedHashSet_init();
    this.timeOfPrevAction_mokgl5$_0 = LinkedHashMap_init();
    this.heldPiece_aun02d$_0 = null;
    this.alreadyHolding_1bbr1h$_0 = false;
    this.upcomingPiecesQueue_8uxv1e$_0 = ArrayList_init_0();
    this.autoLockStartTime_hl1607$_0 = null;
    this.activePiece_tptnae$_0 = this.config.generator.generate().moveDown();
    var times = this.config.previewPieces;
    for (var index = 0; index < times; index++) {
      this.upcomingPiecesQueue_8uxv1e$_0.add_11rb$(this.config.generator.generate());
    }
  };
  BaseGame.prototype.frame = function () {
    var tmp$;
    var curTime = timeStamp();
    var autoDropTimePassed = curTime.minus_cgako$(this.lastAutoDrop_o9cj4i$_0).compareTo_11rb$(get_milliseconds_0(this.config.autoDropDelay)) >= 0;
    if (autoDropTimePassed) {
      if (!this.pressedCmds_1gzr1p$_0.contains_11rb$(Command$SOFT_DROP_getInstance())) {
        this.perform_hansvz$_0(Command$SOFT_DROP_getInstance());
      }
      this.lastAutoDrop_o9cj4i$_0 = curTime;
    }
    tmp$ = this.repeatableCmds_awwpko$_0.iterator();
    while (tmp$.hasNext()) {
      var cmd = tmp$.next();
      if (this.pressedCmds_1gzr1p$_0.contains_11rb$(cmd)) {
        var delay = this.initialPress_mw33k7$_0.contains_11rb$(cmd) ? this.config.delayedAutoShift : this.config.autoRepeatRate;
        if (delay === 0) {
          var pieceMoved = this.perform_hansvz$_0(cmd);
          while (pieceMoved) {
            pieceMoved = this.perform_hansvz$_0(cmd);
          }
        }
        var lastPressTime = ensureNotNull(this.timeOfPrevAction_mokgl5$_0.get_11rb$(cmd));
        var delayTimePassed = curTime.minus_cgako$(lastPressTime).compareTo_11rb$(get_milliseconds_0(delay)) >= 0;
        if (delayTimePassed) {
          this.perform_hansvz$_0(cmd);
          this.initialPress_mw33k7$_0.remove_11rb$(cmd);
          this.timeOfPrevAction_mokgl5$_0.put_xwzc9p$(cmd, curTime);
        }
      }
    }
  };
  BaseGame.prototype.allCells = function () {
    var $receiver = toMutableSet(this.board_665yfc$_0.getPlacedCells());
    $receiver.addAll_brywnq$(this.activePiece_tptnae$_0.cells());
    if (this.config.showGhost)
      $receiver.addAll_brywnq$(this.ghostCells_srm34l$_0(this.activePiece_tptnae$_0));
    return $receiver;
  };
  BaseGame.prototype.heldCells = function () {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.heldPiece_aun02d$_0) != null ? tmp$.cells() : null) != null ? tmp$_0 : emptySet();
  };
  BaseGame.prototype.upcomingCells = function () {
    var $receiver = this.upcomingPiecesQueue_8uxv1e$_0;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.cells());
    }
    return destination;
  };
  BaseGame.prototype.commandInitiated_mzjd4c$ = function (cmd) {
    if (!this.pressedCmds_1gzr1p$_0.contains_11rb$(cmd)) {
      this.perform_hansvz$_0(cmd);
      this.pressedCmds_1gzr1p$_0.add_11rb$(cmd);
      this.initialPress_mw33k7$_0.add_11rb$(cmd);
      var $receiver = this.timeOfPrevAction_mokgl5$_0;
      var value = timeStamp();
      $receiver.put_xwzc9p$(cmd, value);
    }
  };
  BaseGame.prototype.commandStopped_mzjd4c$ = function (cmd) {
    this.pressedCmds_1gzr1p$_0.remove_11rb$(cmd);
    this.initialPress_mw33k7$_0.remove_11rb$(cmd);
    this.timeOfPrevAction_mokgl5$_0.remove_11rb$(cmd);
  };
  BaseGame.prototype.onBoardChange_o14v8n$ = function (action) {
    this.boardChangeHandlers_kt4o4x$_0.add_11rb$(action);
  };
  BaseGame.prototype.onHeldPieceChange_o14v8n$ = function (action) {
    this.heldPieceHandlers_kdsr70$_0.add_11rb$(action);
  };
  BaseGame.prototype.onUpcomingPiecesChange_o14v8n$ = function (action) {
    this.upcomingPiecesHandlers_mk451g$_0.add_11rb$(action);
  };
  function BaseGame$forActivePiece$lambda(closure$op, this$BaseGame) {
    return function () {
      var tmp$;
      var candidate = closure$op(this$BaseGame.activePiece_tptnae$_0);
      var next = this$BaseGame.isValid_butbg3$_0(candidate) ? candidate : this$BaseGame.activePiece_tptnae$_0;
      var canMoveDown = this$BaseGame.isValid_butbg3$_0(next.moveDown());
      var pieceMoved = !(next != null ? next.equals(this$BaseGame.activePiece_tptnae$_0) : null);
      this$BaseGame.activePiece_tptnae$_0 = next;
      if (canMoveDown || pieceMoved) {
        this$BaseGame.autoLockStartTime_hl1607$_0 = null;
      }
      if (!canMoveDown) {
        if (this$BaseGame.autoLockStartTime_hl1607$_0 == null) {
          this$BaseGame.autoLockStartTime_hl1607$_0 = timeStamp();
        }
      }
      if (this$BaseGame.autoLockStartTime_hl1607$_0 != null) {
        var lockDelayPassed = timeStamp().minus_cgako$(ensureNotNull(this$BaseGame.autoLockStartTime_hl1607$_0)).compareTo_11rb$(get_milliseconds_0(this$BaseGame.config.lockDelay)) >= 0;
        if (lockDelayPassed) {
          this$BaseGame.activePiece_tptnae$_0 = this$BaseGame.hardDrop_tkg8nx$_0(this$BaseGame.activePiece_tptnae$_0);
          this$BaseGame.autoLockStartTime_hl1607$_0 = null;
        }
      }
      tmp$ = this$BaseGame.boardChangeHandlers_kt4o4x$_0.iterator();
      while (tmp$.hasNext()) {
        var handler = tmp$.next();
        handler();
      }
      return Unit;
    };
  }
  BaseGame.prototype.forActivePiece_laby93$_0 = function (op) {
    var tmp$;
    var prevActivePiece = this.activePiece_tptnae$_0;
    sync(this.activePiece_tptnae$_0, BaseGame$forActivePiece$lambda(op, this));
    return !((tmp$ = this.activePiece_tptnae$_0) != null ? tmp$.equals(prevActivePiece) : null);
  };
  BaseGame.prototype.isValid_butbg3$_0 = function ($receiver) {
    return this.board_665yfc$_0.areValidCells_xyy4xm$(copyToArray($receiver.cells()).slice());
  };
  BaseGame.prototype.hardDrop_tkg8nx$_0 = function ($receiver) {
    var t = $receiver;
    while (this.isValid_butbg3$_0(t.moveDown()))
      t = t.moveDown();
    this.placeOnBoard_ewg1uf$_0(t);
    var $receiver_0 = t.cells();
    var all$result;
    all$break: do {
      var tmp$;
      if (Kotlin.isType($receiver_0, Collection) && $receiver_0.isEmpty()) {
        all$result = true;
        break all$break;
      }
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (!(element.row < 20)) {
          all$result = false;
          break all$break;
        }
      }
      all$result = true;
    }
     while (false);
    if (all$result) {
      this.finished = true;
    }
    this.clearCompletedLines_k96xj2$_0(t);
    var newPiece = this.nextPiece_3tkztf$_0();
    if (!this.isValid_butbg3$_0(newPiece)) {
      this.finished = true;
    }
    if (this.isValid_butbg3$_0(newPiece.moveDown())) {
      newPiece = newPiece.moveDown();
    }
    this.alreadyHolding_1bbr1h$_0 = false;
    return newPiece;
  };
  BaseGame.prototype.placeOnBoard_ewg1uf$_0 = function ($receiver) {
    var cells = copyToArray($receiver.cells());
    this.board_665yfc$_0.placeCells_xyy4xm$(cells.slice());
  };
  BaseGame.prototype.clearCompletedLines_k96xj2$_0 = function ($receiver) {
    var tmp$;
    var $receiver_0 = $receiver.cells();
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_0;
    tmp$_0 = $receiver_0.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(item.row);
    }
    var candidateLines = sorted(distinct(destination));
    tmp$ = candidateLines.iterator();
    while (tmp$.hasNext()) {
      var line = tmp$.next();
      var $receiver_1 = this.board_665yfc$_0.getPlacedCells();
      var destination_0 = ArrayList_init_0();
      var tmp$_1;
      tmp$_1 = $receiver_1.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        if (element.row === line)
          destination_0.add_11rb$(element);
      }
      var cellsInRow = destination_0.size;
      if (cellsInRow === 10)
        this.board_665yfc$_0.clearLine_za3lpa$(line);
    }
  };
  BaseGame.prototype.nextPiece_3tkztf$_0 = function () {
    var tmp$;
    this.upcomingPiecesQueue_8uxv1e$_0.add_11rb$(this.config.generator.generate());
    var next = this.upcomingPiecesQueue_8uxv1e$_0.removeAt_za3lpa$(0);
    tmp$ = this.upcomingPiecesHandlers_mk451g$_0.iterator();
    while (tmp$.hasNext()) {
      var handler = tmp$.next();
      handler();
    }
    return next;
  };
  BaseGame.prototype.hold_df9k6w$_0 = function ($receiver) {
    var tmp$, tmp$_0;
    if (this.alreadyHolding_1bbr1h$_0)
      return $receiver;
    var newPiece;
    if (Kotlin.isType($receiver, S))
      tmp$ = S_init();
    else if (Kotlin.isType($receiver, Z))
      tmp$ = Z_init();
    else if (Kotlin.isType($receiver, J))
      tmp$ = J_init();
    else if (Kotlin.isType($receiver, L))
      tmp$ = L_init();
    else if (Kotlin.isType($receiver, O))
      tmp$ = O_init();
    else if (Kotlin.isType($receiver, I))
      tmp$ = I_init();
    else if (Kotlin.isType($receiver, T))
      tmp$ = T_init();
    else
      tmp$ = Kotlin.noWhenBranchMatched();
    var toHold = tmp$;
    if (this.heldPiece_aun02d$_0 == null) {
      this.heldPiece_aun02d$_0 = toHold;
      newPiece = this.nextPiece_3tkztf$_0();
    }
     else {
      newPiece = ensureNotNull(this.heldPiece_aun02d$_0);
      this.heldPiece_aun02d$_0 = toHold;
    }
    this.alreadyHolding_1bbr1h$_0 = true;
    tmp$_0 = this.heldPieceHandlers_kdsr70$_0.iterator();
    while (tmp$_0.hasNext()) {
      var handler = tmp$_0.next();
      handler();
    }
    return newPiece;
  };
  function BaseGame$ghostCells$lambda(this$ghostCells) {
    return function (ghostCell) {
      var $receiver = this$ghostCells.cells();
      var any$result;
      any$break: do {
        var tmp$;
        if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
          any$result = false;
          break any$break;
        }
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (ghostCell.sharesPositionWith_xttjpl$(element)) {
            any$result = true;
            break any$break;
          }
        }
        any$result = false;
      }
       while (false);
      return any$result;
    };
  }
  BaseGame.prototype.ghostCells_srm34l$_0 = function ($receiver) {
    var t = $receiver;
    while (this.isValid_butbg3$_0(t.moveDown()))
      t = t.moveDown();
    var $receiver_0 = t.cells();
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(CellImpl_init(CellColor$NULL_getInstance(), item.row, item.col));
    }
    var ghostCells = toMutableSet(destination);
    removeAll(ghostCells, BaseGame$ghostCells$lambda($receiver));
    return ghostCells;
  };
  function BaseGame$perform$lambda(this$BaseGame) {
    return function (it) {
      return this$BaseGame.config.rotationSystem.rotate90CCW_zgkodn$(it, this$BaseGame.board_665yfc$_0);
    };
  }
  function BaseGame$perform$lambda_0(this$BaseGame) {
    return function (it) {
      return this$BaseGame.config.rotationSystem.rotate90CW_zgkodn$(it, this$BaseGame.board_665yfc$_0);
    };
  }
  function BaseGame$perform$lambda_1(it) {
    return it.moveLeft();
  }
  function BaseGame$perform$lambda_2(it) {
    return it.moveRight();
  }
  function BaseGame$perform$lambda_3(it) {
    return it.moveDown();
  }
  function BaseGame$perform$lambda_4(this$BaseGame) {
    return function (it) {
      return this$BaseGame.hardDrop_tkg8nx$_0(it);
    };
  }
  function BaseGame$perform$lambda_5(this$BaseGame) {
    return function (it) {
      return this$BaseGame.hold_df9k6w$_0(it);
    };
  }
  BaseGame.prototype.perform_hansvz$_0 = function (cmd) {
    switch (cmd.name) {
      case 'ROTATE_CCW':
        return this.forActivePiece_laby93$_0(BaseGame$perform$lambda(this));
      case 'ROTATE_CW':
        return this.forActivePiece_laby93$_0(BaseGame$perform$lambda_0(this));
      case 'LEFT':
        return this.forActivePiece_laby93$_0(BaseGame$perform$lambda_1);
      case 'RIGHT':
        return this.forActivePiece_laby93$_0(BaseGame$perform$lambda_2);
      case 'SOFT_DROP':
        return this.forActivePiece_laby93$_0(BaseGame$perform$lambda_3);
      case 'HARD_DROP':
        return this.forActivePiece_laby93$_0(BaseGame$perform$lambda_4(this));
      case 'HOLD':
        return this.forActivePiece_laby93$_0(BaseGame$perform$lambda_5(this));
      case 'DO_NOTHING':
        return false;
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  function BaseGame$board$ObjectLiteral(closure$board, this$BaseGame) {
    this.closure$board = closure$board;
    this.this$BaseGame = this$BaseGame;
  }
  BaseGame$board$ObjectLiteral.prototype.areValidCells_xyy4xm$ = function (cells) {
    return this.closure$board.areValidCells_xyy4xm$(cells.slice());
  };
  BaseGame$board$ObjectLiteral.prototype.placeCells_xyy4xm$ = function (cells) {
    var tmp$;
    this.closure$board.placeCells_xyy4xm$(cells.slice());
    tmp$ = this.this$BaseGame.boardChangeHandlers_kt4o4x$_0.iterator();
    while (tmp$.hasNext()) {
      var handler = tmp$.next();
      handler();
    }
  };
  BaseGame$board$ObjectLiteral.prototype.clearLine_za3lpa$ = function (row) {
    var tmp$;
    this.closure$board.clearLine_za3lpa$(row);
    tmp$ = this.this$BaseGame.boardChangeHandlers_kt4o4x$_0.iterator();
    while (tmp$.hasNext()) {
      var handler = tmp$.next();
      handler();
    }
  };
  BaseGame$board$ObjectLiteral.prototype.getPlacedCells = function () {
    return this.closure$board.getPlacedCells();
  };
  BaseGame$board$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Board]};
  BaseGame.$metadata$ = {kind: Kind_CLASS, simpleName: 'BaseGame', interfaces: []};
  function Command(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Command_initFields() {
    Command_initFields = function () {
    };
    Command$ROTATE_CCW_instance = new Command('ROTATE_CCW', 0);
    Command$ROTATE_CW_instance = new Command('ROTATE_CW', 1);
    Command$LEFT_instance = new Command('LEFT', 2);
    Command$RIGHT_instance = new Command('RIGHT', 3);
    Command$SOFT_DROP_instance = new Command('SOFT_DROP', 4);
    Command$HARD_DROP_instance = new Command('HARD_DROP', 5);
    Command$HOLD_instance = new Command('HOLD', 6);
    Command$DO_NOTHING_instance = new Command('DO_NOTHING', 7);
  }
  var Command$ROTATE_CCW_instance;
  function Command$ROTATE_CCW_getInstance() {
    Command_initFields();
    return Command$ROTATE_CCW_instance;
  }
  var Command$ROTATE_CW_instance;
  function Command$ROTATE_CW_getInstance() {
    Command_initFields();
    return Command$ROTATE_CW_instance;
  }
  var Command$LEFT_instance;
  function Command$LEFT_getInstance() {
    Command_initFields();
    return Command$LEFT_instance;
  }
  var Command$RIGHT_instance;
  function Command$RIGHT_getInstance() {
    Command_initFields();
    return Command$RIGHT_instance;
  }
  var Command$SOFT_DROP_instance;
  function Command$SOFT_DROP_getInstance() {
    Command_initFields();
    return Command$SOFT_DROP_instance;
  }
  var Command$HARD_DROP_instance;
  function Command$HARD_DROP_getInstance() {
    Command_initFields();
    return Command$HARD_DROP_instance;
  }
  var Command$HOLD_instance;
  function Command$HOLD_getInstance() {
    Command_initFields();
    return Command$HOLD_instance;
  }
  var Command$DO_NOTHING_instance;
  function Command$DO_NOTHING_getInstance() {
    Command_initFields();
    return Command$DO_NOTHING_instance;
  }
  Command.$metadata$ = {kind: Kind_CLASS, simpleName: 'Command', interfaces: [Enum]};
  function Command$values() {
    return [Command$ROTATE_CCW_getInstance(), Command$ROTATE_CW_getInstance(), Command$LEFT_getInstance(), Command$RIGHT_getInstance(), Command$SOFT_DROP_getInstance(), Command$HARD_DROP_getInstance(), Command$HOLD_getInstance(), Command$DO_NOTHING_getInstance()];
  }
  Command.values = Command$values;
  function Command$valueOf(name) {
    switch (name) {
      case 'ROTATE_CCW':
        return Command$ROTATE_CCW_getInstance();
      case 'ROTATE_CW':
        return Command$ROTATE_CW_getInstance();
      case 'LEFT':
        return Command$LEFT_getInstance();
      case 'RIGHT':
        return Command$RIGHT_getInstance();
      case 'SOFT_DROP':
        return Command$SOFT_DROP_getInstance();
      case 'HARD_DROP':
        return Command$HARD_DROP_getInstance();
      case 'HOLD':
        return Command$HOLD_getInstance();
      case 'DO_NOTHING':
        return Command$DO_NOTHING_getInstance();
      default:throwISE('No enum constant model.game.Command.' + name);
    }
  }
  Command.valueOf_61zpoe$ = Command$valueOf;
  function GameConfiguration() {
    this.showGhost = true;
    this.autoRepeatRate_76xv75$_0 = 30;
    this.delayedAutoShift_yeibsa$_0 = 140;
    this.autoDropDelay_4ya9kk$_0 = 1000;
    this.previewPieces_f2ntqs$_0 = 5;
    this.lockDelay_ybxztt$_0 = 500;
    this.rotationSystem = new SuperRotation();
    this.generator = new RandomBagOf7();
  }
  Object.defineProperty(GameConfiguration.prototype, 'autoRepeatRate', {get: function () {
    return this.autoRepeatRate_76xv75$_0;
  }, set: function (value) {
    if (value < 0) {
      throw IllegalArgumentException_init('Auto repeat rate must be nonnegative');
    }
    this.autoRepeatRate_76xv75$_0 = value;
  }});
  Object.defineProperty(GameConfiguration.prototype, 'delayedAutoShift', {get: function () {
    return this.delayedAutoShift_yeibsa$_0;
  }, set: function (value) {
    if (value < 0) {
      throw IllegalArgumentException_init('Delayed auto shift must be nonnegative');
    }
    this.delayedAutoShift_yeibsa$_0 = value;
  }});
  Object.defineProperty(GameConfiguration.prototype, 'autoDropDelay', {get: function () {
    return this.autoDropDelay_4ya9kk$_0;
  }, set: function (value) {
    if (value <= 0) {
      throw IllegalArgumentException_init('Auto drop delay must be positive');
    }
    this.autoDropDelay_4ya9kk$_0 = value;
  }});
  Object.defineProperty(GameConfiguration.prototype, 'previewPieces', {get: function () {
    return this.previewPieces_f2ntqs$_0;
  }, set: function (value) {
    if (!(0 <= value && value <= 6)) {
      throw IllegalArgumentException_init('Number of preview pieces should be between 0 and 6, inclusive.');
    }
    this.previewPieces_f2ntqs$_0 = value;
  }});
  Object.defineProperty(GameConfiguration.prototype, 'lockDelay', {get: function () {
    return this.lockDelay_ybxztt$_0;
  }, set: function (value) {
    if (value < 0) {
      throw IllegalArgumentException_init('Lock delay must be nonnegative.');
    }
    this.lockDelay_ybxztt$_0 = value;
  }});
  GameConfiguration.$metadata$ = {kind: Kind_CLASS, simpleName: 'GameConfiguration', interfaces: []};
  function RotationSystem() {
  }
  RotationSystem.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'RotationSystem', interfaces: []};
  function SuperRotation() {
    this.jlstzoData_0 = mapOf([to(Orientation$UP_getInstance(), mapOf([to(Orientation$LEFT_getInstance(), listOf([new Pair(1, 0), new Pair(1, 1), new Pair(0, -2), new Pair(1, -2)])), to(Orientation$RIGHT_getInstance(), listOf([new Pair(-1, 0), new Pair(-1, 1), new Pair(0, -2), new Pair(-1, -2)]))])), to(Orientation$RIGHT_getInstance(), mapOf([to(Orientation$UP_getInstance(), listOf([new Pair(1, 0), new Pair(1, -1), new Pair(0, 2), new Pair(1, 2)])), to(Orientation$DOWN_getInstance(), listOf([new Pair(1, 0), new Pair(1, -1), new Pair(0, 2), new Pair(1, 2)]))])), to(Orientation$DOWN_getInstance(), mapOf([to(Orientation$RIGHT_getInstance(), listOf([new Pair(-1, 0), new Pair(-1, 1), new Pair(0, -2), new Pair(-1, -2)])), to(Orientation$LEFT_getInstance(), listOf([new Pair(1, 0), new Pair(1, 1), new Pair(0, -2), new Pair(1, -2)]))])), to(Orientation$LEFT_getInstance(), mapOf([to(Orientation$DOWN_getInstance(), listOf([new Pair(-1, 0), new Pair(-1, -1), new Pair(0, 2), new Pair(-1, 2)])), to(Orientation$UP_getInstance(), listOf([new Pair(-1, 0), new Pair(-1, -1), new Pair(0, 2), new Pair(-1, 2)]))]))]);
    this.iData_0 = mapOf([to(Orientation$UP_getInstance(), mapOf([to(Orientation$LEFT_getInstance(), listOf([new Pair(-1, 0), new Pair(2, 0), new Pair(-1, 2), new Pair(2, -1)])), to(Orientation$RIGHT_getInstance(), listOf([new Pair(-2, 0), new Pair(1, 0), new Pair(-2, -1), new Pair(1, 2)]))])), to(Orientation$RIGHT_getInstance(), mapOf([to(Orientation$UP_getInstance(), listOf([new Pair(2, 0), new Pair(-1, 0), new Pair(2, 1), new Pair(-1, -2)])), to(Orientation$DOWN_getInstance(), listOf([new Pair(-1, 0), new Pair(2, 0), new Pair(-1, 2), new Pair(2, -1)]))])), to(Orientation$DOWN_getInstance(), mapOf([to(Orientation$RIGHT_getInstance(), listOf([new Pair(1, 0), new Pair(-2, 0), new Pair(1, -2), new Pair(-2, 1)])), to(Orientation$LEFT_getInstance(), listOf([new Pair(2, 0), new Pair(-1, 0), new Pair(2, 1), new Pair(-1, -2)]))])), to(Orientation$LEFT_getInstance(), mapOf([to(Orientation$DOWN_getInstance(), listOf([new Pair(-2, 0), new Pair(1, 0), new Pair(-2, -1), new Pair(1, 2)])), to(Orientation$UP_getInstance(), listOf([new Pair(1, 0), new Pair(-2, 0), new Pair(1, -2), new Pair(-2, 1)]))]))]);
  }
  function SuperRotation$rotate90CW$lambda($receiver) {
    return $receiver.rotate90CW();
  }
  SuperRotation.prototype.rotate90CW_zgkodn$ = function (t, board) {
    return this.superRotate_0(t, board, SuperRotation$rotate90CW$lambda);
  };
  function SuperRotation$rotate90CCW$lambda($receiver) {
    return $receiver.rotate90CCW();
  }
  SuperRotation.prototype.rotate90CCW_zgkodn$ = function (t, board) {
    return this.superRotate_0(t, board, SuperRotation$rotate90CCW$lambda);
  };
  SuperRotation.prototype.superRotate_0 = function (t, board, op) {
    var tmp$;
    var rotated = op(t);
    if (board.areValidCells_xyy4xm$(copyToArray(rotated.cells()).slice()))
      return rotated;
    var targetOrientation = rotated.orientation();
    var data = Kotlin.isType(t, I) ? this.iData_0 : this.jlstzoData_0;
    var testDeltas = getValue(getValue(data, t.orientation()), targetOrientation);
    tmp$ = testDeltas.iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var dCol = tmp$_0.component1(), dRow = tmp$_0.component2();
      var candidate = rotated;
      candidate = candidate.move_vux9f0$(dRow, dCol);
      if (board.areValidCells_xyy4xm$(copyToArray(candidate.cells()).slice()))
        return candidate;
    }
    return t;
  };
  SuperRotation.$metadata$ = {kind: Kind_CLASS, simpleName: 'SuperRotation', interfaces: [RotationSystem]};
  function StandardTetriminoGenerator() {
  }
  StandardTetriminoGenerator.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'StandardTetriminoGenerator', interfaces: []};
  var allStandardPieces;
  function RandomBagOf7() {
    this.currentBag_0 = this.newBag_0();
  }
  RandomBagOf7.prototype.generate = function () {
    if (this.currentBag_0.isEmpty())
      this.currentBag_0 = this.newBag_0();
    return this.currentBag_0.removeAt_za3lpa$(0);
  };
  RandomBagOf7.prototype.newBag_0 = function () {
    return toMutableList(shuffled(allStandardPieces));
  };
  RandomBagOf7.prototype.reset = function () {
    this.currentBag_0 = this.newBag_0();
  };
  RandomBagOf7.$metadata$ = {kind: Kind_CLASS, simpleName: 'RandomBagOf7', interfaces: [StandardTetriminoGenerator]};
  function Tetrimino() {
  }
  Tetrimino.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Tetrimino', interfaces: []};
  function Orientation(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Orientation_initFields() {
    Orientation_initFields = function () {
    };
    Orientation$UP_instance = new Orientation('UP', 0);
    Orientation$DOWN_instance = new Orientation('DOWN', 1);
    Orientation$LEFT_instance = new Orientation('LEFT', 2);
    Orientation$RIGHT_instance = new Orientation('RIGHT', 3);
  }
  var Orientation$UP_instance;
  function Orientation$UP_getInstance() {
    Orientation_initFields();
    return Orientation$UP_instance;
  }
  var Orientation$DOWN_instance;
  function Orientation$DOWN_getInstance() {
    Orientation_initFields();
    return Orientation$DOWN_instance;
  }
  var Orientation$LEFT_instance;
  function Orientation$LEFT_getInstance() {
    Orientation_initFields();
    return Orientation$LEFT_instance;
  }
  var Orientation$RIGHT_instance;
  function Orientation$RIGHT_getInstance() {
    Orientation_initFields();
    return Orientation$RIGHT_instance;
  }
  Orientation.$metadata$ = {kind: Kind_CLASS, simpleName: 'Orientation', interfaces: [Enum]};
  function Orientation$values() {
    return [Orientation$UP_getInstance(), Orientation$DOWN_getInstance(), Orientation$LEFT_getInstance(), Orientation$RIGHT_getInstance()];
  }
  Orientation.values = Orientation$values;
  function Orientation$valueOf(name) {
    switch (name) {
      case 'UP':
        return Orientation$UP_getInstance();
      case 'DOWN':
        return Orientation$DOWN_getInstance();
      case 'LEFT':
        return Orientation$LEFT_getInstance();
      case 'RIGHT':
        return Orientation$RIGHT_getInstance();
      default:throwISE('No enum constant model.tetrimino.Orientation.' + name);
    }
  }
  Orientation.valueOf_61zpoe$ = Orientation$valueOf;
  function StandardTetrimino(t) {
    this.t_9jkhsm$_0 = t;
  }
  StandardTetrimino.prototype.move_vux9f0$ = function (dRow, dCol) {
    return this.newPiece_kfscpn$(this.t_9jkhsm$_0.move_vux9f0$(dRow, dCol));
  };
  StandardTetrimino.prototype.moveUp = function () {
    return this.newPiece_kfscpn$(this.t_9jkhsm$_0.moveUp());
  };
  StandardTetrimino.prototype.moveDown = function () {
    return this.newPiece_kfscpn$(this.t_9jkhsm$_0.moveDown());
  };
  StandardTetrimino.prototype.moveLeft = function () {
    return this.newPiece_kfscpn$(this.t_9jkhsm$_0.moveLeft());
  };
  StandardTetrimino.prototype.moveRight = function () {
    return this.newPiece_kfscpn$(this.t_9jkhsm$_0.moveRight());
  };
  StandardTetrimino.prototype.rotate90CW = function () {
    return this.newPiece_kfscpn$(this.t_9jkhsm$_0.rotate90CW());
  };
  StandardTetrimino.prototype.rotate90CCW = function () {
    return this.newPiece_kfscpn$(this.t_9jkhsm$_0.rotate90CCW());
  };
  StandardTetrimino.prototype.cells = function () {
    return this.t_9jkhsm$_0.cells();
  };
  StandardTetrimino.prototype.orientation = function () {
    return this.t_9jkhsm$_0.orientation();
  };
  StandardTetrimino.prototype.equals = function (other) {
    if (!Kotlin.isType(other, StandardTetrimino))
      return false;
    return equals(this.t_9jkhsm$_0, other.t_9jkhsm$_0);
  };
  StandardTetrimino.prototype.hashCode = function () {
    return 37 * hashCode(this.t_9jkhsm$_0) | 0;
  };
  StandardTetrimino.$metadata$ = {kind: Kind_CLASS, simpleName: 'StandardTetrimino', interfaces: [Tetrimino]};
  function S(t) {
    StandardTetrimino.call(this, t);
  }
  S.prototype.newPiece_kfscpn$ = function (t) {
    return new S(t);
  };
  S.$metadata$ = {kind: Kind_CLASS, simpleName: 'S', interfaces: [StandardTetrimino]};
  function S_init($this) {
    $this = $this || Object.create(S.prototype);
    S.call($this, new TetriminoImpl(new Posn(20 - 1.0, 4), setOf([CellImpl_init(CellColor$GREEN_getInstance(), 18, 5), CellImpl_init(CellColor$GREEN_getInstance(), 18, 4), CellImpl_init(CellColor$GREEN_getInstance(), 19, 4), CellImpl_init(CellColor$GREEN_getInstance(), 19, 3)]), Orientation$UP_getInstance()));
    return $this;
  }
  function Z(t) {
    StandardTetrimino.call(this, t);
  }
  Z.prototype.newPiece_kfscpn$ = function (t) {
    return new Z(t);
  };
  Z.$metadata$ = {kind: Kind_CLASS, simpleName: 'Z', interfaces: [StandardTetrimino]};
  function Z_init($this) {
    $this = $this || Object.create(Z.prototype);
    Z.call($this, new TetriminoImpl(new Posn(20 - 1.0, 4), setOf([CellImpl_init(CellColor$RED_getInstance(), 18, 3), CellImpl_init(CellColor$RED_getInstance(), 18, 4), CellImpl_init(CellColor$RED_getInstance(), 19, 4), CellImpl_init(CellColor$RED_getInstance(), 19, 5)]), Orientation$UP_getInstance()));
    return $this;
  }
  function J(t) {
    StandardTetrimino.call(this, t);
  }
  J.prototype.newPiece_kfscpn$ = function (t) {
    return new J(t);
  };
  J.$metadata$ = {kind: Kind_CLASS, simpleName: 'J', interfaces: [StandardTetrimino]};
  function J_init($this) {
    $this = $this || Object.create(J.prototype);
    J.call($this, new TetriminoImpl(new Posn(20 - 1.0, 4), setOf([CellImpl_init(CellColor$DARK_BLUE_getInstance(), 18, 3), CellImpl_init(CellColor$DARK_BLUE_getInstance(), 19, 3), CellImpl_init(CellColor$DARK_BLUE_getInstance(), 19, 4), CellImpl_init(CellColor$DARK_BLUE_getInstance(), 19, 5)]), Orientation$UP_getInstance()));
    return $this;
  }
  function L(t) {
    StandardTetrimino.call(this, t);
  }
  L.prototype.newPiece_kfscpn$ = function (t) {
    return new L(t);
  };
  L.$metadata$ = {kind: Kind_CLASS, simpleName: 'L', interfaces: [StandardTetrimino]};
  function L_init($this) {
    $this = $this || Object.create(L.prototype);
    L.call($this, new TetriminoImpl(new Posn(20 - 1.0, 4), setOf([CellImpl_init(CellColor$ORANGE_getInstance(), 18, 5), CellImpl_init(CellColor$ORANGE_getInstance(), 19, 5), CellImpl_init(CellColor$ORANGE_getInstance(), 19, 4), CellImpl_init(CellColor$ORANGE_getInstance(), 19, 3)]), Orientation$UP_getInstance()));
    return $this;
  }
  function O(t) {
    StandardTetrimino.call(this, t);
  }
  O.prototype.newPiece_kfscpn$ = function (t) {
    return new O(t);
  };
  O.$metadata$ = {kind: Kind_CLASS, simpleName: 'O', interfaces: [StandardTetrimino]};
  function O_init($this) {
    $this = $this || Object.create(O.prototype);
    O.call($this, new TetriminoImpl(new Posn(20 - 1.5, 9 / 2.0), setOf([CellImpl_init(CellColor$YELLOW_getInstance(), 18, 4), CellImpl_init(CellColor$YELLOW_getInstance(), 18, 5), CellImpl_init(CellColor$YELLOW_getInstance(), 19, 4), CellImpl_init(CellColor$YELLOW_getInstance(), 19, 5)]), Orientation$UP_getInstance()));
    return $this;
  }
  function I(t) {
    StandardTetrimino.call(this, t);
  }
  I.prototype.newPiece_kfscpn$ = function (t) {
    return new I(t);
  };
  I.$metadata$ = {kind: Kind_CLASS, simpleName: 'I', interfaces: [StandardTetrimino]};
  function I_init($this) {
    $this = $this || Object.create(I.prototype);
    I.call($this, new TetriminoImpl(new Posn(20 - 0.5, 9 / 2.0), setOf([CellImpl_init(CellColor$LIGHT_BLUE_getInstance(), 19, 3), CellImpl_init(CellColor$LIGHT_BLUE_getInstance(), 19, 4), CellImpl_init(CellColor$LIGHT_BLUE_getInstance(), 19, 5), CellImpl_init(CellColor$LIGHT_BLUE_getInstance(), 19, 6)]), Orientation$UP_getInstance()));
    return $this;
  }
  function T(t) {
    StandardTetrimino.call(this, t);
  }
  T.prototype.newPiece_kfscpn$ = function (t) {
    return new T(t);
  };
  T.$metadata$ = {kind: Kind_CLASS, simpleName: 'T', interfaces: [StandardTetrimino]};
  function T_init($this) {
    $this = $this || Object.create(T.prototype);
    T.call($this, new TetriminoImpl(new Posn(20 - 1.0, 4), setOf([CellImpl_init(CellColor$PURPLE_getInstance(), 18, 4), CellImpl_init(CellColor$PURPLE_getInstance(), 19, 3), CellImpl_init(CellColor$PURPLE_getInstance(), 19, 4), CellImpl_init(CellColor$PURPLE_getInstance(), 19, 5)]), Orientation$UP_getInstance()));
    return $this;
  }
  function TetriminoImpl(centerOfRotation, blocks, orientation) {
    this.centerOfRotation_nj6jib$_0 = centerOfRotation;
    this.blocks_bg29gf$_0 = blocks;
    this.orientation_f6c61v$_0 = orientation;
    if (this.blocks_bg29gf$_0.size !== 4) {
      throw IllegalArgumentException_init('Tetrimino should have exactly 4 cells');
    }
    if (!this.allAdjacent_fxfaud$_0(this.blocks_bg29gf$_0)) {
      throw IllegalArgumentException_init('Each cell should be adjacent with at least 1 other cell');
    }
  }
  TetriminoImpl.prototype.allAdjacent_fxfaud$_0 = function ($receiver) {
    var all$result;
    all$break: do {
      var tmp$;
      if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
        all$result = true;
        break all$break;
      }
      tmp$ = $receiver.iterator();
      loop_label: while (tmp$.hasNext()) {
        var element = tmp$.next();
        var any$result;
        any$break: do {
          var tmp$_0;
          if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
            any$result = false;
            break any$break;
          }
          tmp$_0 = $receiver.iterator();
          while (tmp$_0.hasNext()) {
            var element_0 = tmp$_0.next();
            var dx = abs(element_0.col - element.col | 0);
            var dy = abs(element_0.row - element.row | 0);
            var manhattanDist = dx + dy | 0;
            if (manhattanDist === 1) {
              any$result = true;
              break any$break;
            }
          }
          any$result = false;
        }
         while (false);
        if (!any$result) {
          all$result = false;
          break all$break;
        }
      }
      all$result = true;
    }
     while (false);
    return all$result;
  };
  TetriminoImpl.prototype.cells = function () {
    return toSet(this.blocks_bg29gf$_0);
  };
  TetriminoImpl.prototype.move_vux9f0$ = function (dRow, dCol) {
    var tmp$ = this.centerOfRotation_nj6jib$_0.translate_lu1900$(-dRow, dCol);
    var $receiver = this.blocks_bg29gf$_0;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(item.move_vux9f0$(-dRow | 0, dCol));
    }
    return new TetriminoImpl(tmp$, toSet(destination), this.orientation_f6c61v$_0);
  };
  TetriminoImpl.prototype.moveUp = function () {
    return this.move_vux9f0$(1, 0);
  };
  TetriminoImpl.prototype.moveDown = function () {
    return this.move_vux9f0$(-1, 0);
  };
  TetriminoImpl.prototype.moveLeft = function () {
    return this.move_vux9f0$(0, -1);
  };
  TetriminoImpl.prototype.moveRight = function () {
    return this.move_vux9f0$(0, 1);
  };
  TetriminoImpl.prototype.rotate90CW = function () {
    return this.rotateHelper_89uj09$_0(getCallableRef('rotate90CWAround', function ($receiver, centerOfRotation) {
      return $receiver.rotate90CWAround_xu224h$(centerOfRotation);
    }), 1);
  };
  TetriminoImpl.prototype.rotate90CCW = function () {
    return this.rotateHelper_89uj09$_0(getCallableRef('rotate90CCWAround', function ($receiver, centerOfRotation) {
      return $receiver.rotate90CCWAround_xu224h$(centerOfRotation);
    }), -1);
  };
  TetriminoImpl.prototype.rotateHelper_89uj09$_0 = function (cellFunc, dOrientationIdx) {
    var tmp$ = this.centerOfRotation_nj6jib$_0;
    var $receiver = this.blocks_bg29gf$_0;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(cellFunc(item, this.centerOfRotation_nj6jib$_0));
    }
    var tmp$_1 = toSet(destination);
    var tmp$_2;
    var r = orientationWheel.indexOf_11rb$(this.orientation_f6c61v$_0) + dOrientationIdx | 0;
    var n = orientationWheel.size;
    if (r < 0)
      tmp$_2 = n + r | 0;
    else if (r >= n)
      tmp$_2 = n - r | 0;
    else
      tmp$_2 = r;
    var newIdx = tmp$_2;
    return new TetriminoImpl(tmp$, tmp$_1, orientationWheel.get_za3lpa$(newIdx));
  };
  TetriminoImpl.prototype.orientation = function () {
    return this.orientation_f6c61v$_0;
  };
  TetriminoImpl.prototype.equals = function (other) {
    if (!Kotlin.isType(other, Tetrimino))
      return false;
    return this.cells().size === other.cells().size && this.cells().containsAll_brywnq$(other.cells());
  };
  TetriminoImpl.prototype.hashCode = function () {
    var hash = {v: 3};
    hash.v = hash.v + (23 * this.centerOfRotation_nj6jib$_0.hashCode() | 0) | 0;
    var tmp$;
    tmp$ = this.blocks_bg29gf$_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      hash.v = hash.v + (31 * hashCode(element) | 0) | 0;
    }
    hash.v = hash.v + this.orientation_f6c61v$_0.hashCode() | 0;
    return hash.v;
  };
  TetriminoImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'TetriminoImpl', interfaces: [Tetrimino]};
  var orientationWheel;
  function TetrisUI() {
  }
  TetrisUI.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'TetrisUI', interfaces: []};
  _.main = main;
  $$importsForInline$$['kotlinx-html-js'] = $module$kotlinx_html_js;
  _.loadHTML = loadHTML;
  _.loadGame = loadGame;
  var package$controller = _.controller || (_.controller = {});
  package$controller.runAtFixedRate_ld8oi5$ = runAtFixedRate;
  var package$model = _.model || (_.model = {});
  package$model.sync_eocq09$ = sync;
  var package$game = package$model.game || (package$model.game = {});
  package$game.timeStamp = timeStamp;
  var package$view = _.view || (_.view = {});
  package$view.TetrisWeb = TetrisWeb;
  package$controller.ControllerImpl = ControllerImpl;
  package$controller.TetrisController = TetrisController;
  var package$board = package$model.board || (package$model.board = {});
  package$board.Board = Board;
  package$board.BoardImpl = BoardImpl;
  Object.defineProperty(CellColor, 'GREEN', {get: CellColor$GREEN_getInstance});
  Object.defineProperty(CellColor, 'RED', {get: CellColor$RED_getInstance});
  Object.defineProperty(CellColor, 'DARK_BLUE', {get: CellColor$DARK_BLUE_getInstance});
  Object.defineProperty(CellColor, 'ORANGE', {get: CellColor$ORANGE_getInstance});
  Object.defineProperty(CellColor, 'LIGHT_BLUE', {get: CellColor$LIGHT_BLUE_getInstance});
  Object.defineProperty(CellColor, 'YELLOW', {get: CellColor$YELLOW_getInstance});
  Object.defineProperty(CellColor, 'PURPLE', {get: CellColor$PURPLE_getInstance});
  Object.defineProperty(CellColor, 'NULL', {get: CellColor$NULL_getInstance});
  var package$cell = package$model.cell || (package$model.cell = {});
  package$cell.CellColor = CellColor;
  package$cell.Cell = Cell;
  package$cell.CellImpl_init_9fmg7u$ = CellImpl_init;
  package$cell.CellImpl = CellImpl;
  package$cell.Posn = Posn;
  package$game.BaseGame = BaseGame;
  Object.defineProperty(Command, 'ROTATE_CCW', {get: Command$ROTATE_CCW_getInstance});
  Object.defineProperty(Command, 'ROTATE_CW', {get: Command$ROTATE_CW_getInstance});
  Object.defineProperty(Command, 'LEFT', {get: Command$LEFT_getInstance});
  Object.defineProperty(Command, 'RIGHT', {get: Command$RIGHT_getInstance});
  Object.defineProperty(Command, 'SOFT_DROP', {get: Command$SOFT_DROP_getInstance});
  Object.defineProperty(Command, 'HARD_DROP', {get: Command$HARD_DROP_getInstance});
  Object.defineProperty(Command, 'HOLD', {get: Command$HOLD_getInstance});
  Object.defineProperty(Command, 'DO_NOTHING', {get: Command$DO_NOTHING_getInstance});
  package$game.Command = Command;
  var package$config = package$game.config || (package$game.config = {});
  package$config.GameConfiguration = GameConfiguration;
  package$config.RotationSystem = RotationSystem;
  package$config.SuperRotation = SuperRotation;
  package$config.StandardTetriminoGenerator = StandardTetriminoGenerator;
  package$config.RandomBagOf7 = RandomBagOf7;
  var package$tetrimino = package$model.tetrimino || (package$model.tetrimino = {});
  package$tetrimino.Tetrimino = Tetrimino;
  Object.defineProperty(Orientation, 'UP', {get: Orientation$UP_getInstance});
  Object.defineProperty(Orientation, 'DOWN', {get: Orientation$DOWN_getInstance});
  Object.defineProperty(Orientation, 'LEFT', {get: Orientation$LEFT_getInstance});
  Object.defineProperty(Orientation, 'RIGHT', {get: Orientation$RIGHT_getInstance});
  package$tetrimino.Orientation = Orientation;
  package$tetrimino.StandardTetrimino = StandardTetrimino;
  package$tetrimino.S_init = S_init;
  package$tetrimino.S = S;
  package$tetrimino.Z_init = Z_init;
  package$tetrimino.Z = Z;
  package$tetrimino.J_init = J_init;
  package$tetrimino.J = J;
  package$tetrimino.L_init = L_init;
  package$tetrimino.L = L;
  package$tetrimino.O_init = O_init;
  package$tetrimino.O = O;
  package$tetrimino.I_init = I_init;
  package$tetrimino.I = I;
  package$tetrimino.T_init = T_init;
  package$tetrimino.T = T;
  package$tetrimino.TetriminoImpl = TetriminoImpl;
  package$view.TetrisUI = TetrisUI;
  BOARD_ID = 'board';
  HOLD_ID = 'hold';
  UPCOMING_PIECES_ID = 'upcomingPieces';
  RESTART_ID = 'restart';
  BOARD_WIDTH = 10;
  BOARD_HEIGHT = 40;
  VISIBLE_BOARD_HEIGHT = 20;
  FIRST_VISIBLE_ROW = 20;
  allStandardPieces = setOf([Z_init(), S_init(), L_init(), J_init(), T_init(), I_init(), O_init()]);
  orientationWheel = listOf([Orientation$UP_getInstance(), Orientation$RIGHT_getInstance(), Orientation$DOWN_getInstance(), Orientation$LEFT_getInstance()]);
  main();
  return _;
}));

//# sourceMappingURL=tetris.js.map
