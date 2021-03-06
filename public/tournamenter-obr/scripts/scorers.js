var app = angular.module('app.scorers', [])

.factory('FLL2018', function (){

  var model = {
    m01: {
      'm01Pts': 0,
    },
    m02:{
      'm02Pts': 0,
    },
    m03:{
      'm03Pts': 0,
    },
    m04:{
      'm04Pts': 0,
    },
    m05:{
     'm05Pts': 0,
    },
    m06:{
     'm06Pts': 0,
    },
    m07:{
     'm07Pts': 0,
    },
    m08:{
     'm08Pts': 0,
    },
    m09:{
     'm09Pts': 0,
    },
    m10:{
     'm10Pts': 0,
    },
    m11:{
     'm11Pts': 0,
    },
    m12:{
     'm12Pts': 0,
    },
    m13:{
     'm13Pts': 0,
    },
    m14:{
     'm14Pts': 0,
    },
    m15:{
     'm15Pts': 0,
    },
  };

  var scorings ={
    m01: [0, 22, 14, 10],
    m02: [0, 22, 18],
    m03: [0,22,18],
    m04: [0,20],
    m05: [0,16,12,10],
    m06: [0,16,16,14],
    m07: [0,22,18],
    m08: [0,22,20,18],
    m09: [0,16],
    m10: [0,16],
    m11: [0,24],
    m12: [0,8,8,8],
    m13: [0,20,18,16],
    m14: [0,12,12,8,8],
    m15: [0,22,20,16],
  }

  return {
    view: 'views/FLL2018.html?r='+Math.random(),
    model: model,
    scorings: scorings,
    totalTime: 150,
    score: function (model){
      var scored = {
        total: 0,
      };

      for(var k in model){
        scored[k] = {};
        var group = model[k];

        for(var i in group){
          var mission = group[i];
          if(mission === false) mission = 0;
          if(mission === true) mission = 1;

          var pointsGroup = scorings[k];
          var points;
          if(typeof pointsGroup == 'number'){ 
            points = pointsGroup * mission;
          }
          else{
             points = scorings[k][mission];
          }

          scored[k][i] = points
          scored.total += points || 0;
        }
      }

      return scored;
    }
  }
})

.factory('RescueScorer2017Nacional', function (){

  var model = {
    rooms: {
      'first': 0,
      'secc': 0,
    },
    corridors: {
      'ramp': 0,
    },
    gaps: {

    },
    squares1: {
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
    },
    squares2: {
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
    },
    squares3: {
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
    },
    obstacles: {

    },
    speedbump: {

    },
    intersection: {

    },
    passage: {

    },
    becos: {

    },

    saiu_salvamento: {
      'final': 0,
    },

    victims: {
      '1a': 0,
      '2a': 0,
      '3a': 0,
    },

    victims_lower_dead: {
      '1a': 0,
    },

    victims_lower_live: {
      '1a': 0,
    },

    victims_upper_dead: {
      '1a': 0,
    },

    victims_upper_live: {
      '1a': 0,
    },
  };

  var scorings ={
    rooms: [0, 60, 40, 20, 0],
    corridors: [0,30,20,10,0],
    gaps: [0,10],

    squares1: 3,
    squares2: 2,
    squares3: 1,

    obstacles: [0,10],
    speedbump: [0, 5],
    intersection: [0,15],
    passage: [0, 10],

    becos: [0, 15],

    saiu_salvamento: [0, 20],

    victims: [0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400],

    victims_lower_dead: [0, 15, 30, 45,  60,  75,  90, 105, 120],
    victims_lower_live: [0, 30, 60, 90, 120, 150, 180, 210, 240],

    victims_upper_dead: [0, 20, 40,  60,  80, 100, 120, 140, 160],
    victims_upper_live: [0, 40, 80, 120, 160, 200, 240, 280, 320],
  }

  return {
    view: 'views/rescue_scorer_2017_nacional.html?r='+Math.random(),
    model: model,
    scorings: scorings,
    totalTime: 480,
    score: function (model){
      var scored = {
        total: 0,
      };

      for(var k in model){
        scored[k] = {};
        var group = model[k];

        for(var i in group){
          var mission = group[i];
          if(mission === false) mission = 0;
          if(mission === true) mission = 1;

          var pointsGroup = scorings[k];
          var points;
          if(typeof pointsGroup == 'number'){
            points = pointsGroup * mission;
          }else{
            points = scorings[k][mission];
          }

          scored[k][i] = points
          scored.total += points || 0;
        }
      }

      return scored;
    }
  }
})


.factory('RescueScorer2017Regional', function (){

  var model = {
    rooms: {
      'first': 0,
      'secc': 0,
    },
    corridors: {
      'ramp': 0,
    },
    gaps: {

    },
    obstacles: {

    },
    speedbump: {

    },
    intersection: {

    },
    passage: {

    },

    victims: {
      '1a': 0,
      '2a': 0,
      '3a': 0,
      'desafio': 0,
    },
  };

  var scorings ={
    rooms: [0, 60, 40, 20, 0],
    corridors: [0,30,20,10,0],
    gaps: [0,10],

    obstacles: [0,10],
    speedbump: [0, 5],
    intersection: [0,10],
    passage: [0, 10],

    victims: [0, 60, 40, 20],
  }

  return {
    view: 'views/rescue_scorer_2017_regional.html?r='+Math.random(),
    model: model,
    scorings: scorings,
    totalTime: 300,
    score: function (model){
      var scored = {
        total: 0,
      };

      for(var k in model){
        scored[k] = {};
        var group = model[k];

        for(var i in group){
          var mission = group[i];
          if(mission === false) mission = 0;
          if(mission === true) mission = 1;

          var pointsGroup = scorings[k];
          var points;
          if(typeof pointsGroup == 'number'){
            points = pointsGroup * mission;
          }else{
            points = scorings[k][mission];
          }

          scored[k][i] = points
          scored.total += points || 0;
        }
      }

      return scored;
    }
  }
})

// =========================================
// =========== Versões antigas =============
// =========================================

.factory('RescueAScorer', function (){

  var model = {
    rooms: {
      'first': 0,
      'secc': 0,
      'last': 0,
    },
    corridors: {
      'ramp': 0,
      'hallway': 0,
    },
    gaps: {

    },
    obstacles: {

    },
    speedbump: {

    },
    intersection: {

    },
    victim: {
      raise: 0,
      touch: 0,
    }
  };

  var scorings ={
    rooms: [0, 60, 40, 20, 0],
    corridors: [0,30,20,10,0],
    gaps: [0,10],

    obstacles: [0,10],
    speedbump: [0, 5],
    intersection: [0,10],

    victim: [0, 20],
  }

  return {
    view: 'views/rescue_scorer_2014.html?r='+Math.random(),
    model: model,
    scorings: scorings,
    score: function (model){
      var scored = {
        total: 0,
      };

      for(var k in model){
        scored[k] = {};
        var group = model[k];

        for(var i in group){
          var mission = group[i];
          if(mission === false) mission = 0;
          if(mission === true) mission = 1;

          var points = scorings[k][mission];

          scored[k][i] = points
          scored.total += points || 0;
        }
      }

      return scored;
    }
  }

})

.factory('RescueScorer2015Regional', function (){

  var model = {
    rooms: {
      'first': 0,
      'secc': 0,
    },
    corridors: {
      'ramp': 0,
    },
    gaps: {

    },
    obstacles: {

    },
    speedbump: {

    },
    intersection: {

    },
    passage: {

    },

    victims: {
      '1a': 0,
      '2a': 0,
      '3a': 0,
    },
  };

  var scorings ={
    rooms: [0, 60, 40, 20, 0],
    corridors: [0,30,20,10,0],
    gaps: [0,10],

    obstacles: [0,10],
    speedbump: [0, 5],
    intersection: [0,10],
    passage: [0, 10],

    victims: [0, 60, 40, 20, 0],
  }

  return {
    view: 'views/rescue_scorer_2016_regional.html?r='+Math.random(),
    model: model,
    scorings: scorings,
    score: function (model){
      var scored = {
        total: 0,
      };

      for(var k in model){
        scored[k] = {};
        var group = model[k];

        for(var i in group){
          var mission = group[i];
          if(mission === false) mission = 0;
          if(mission === true) mission = 1;

          var points = scorings[k][mission];

          scored[k][i] = points
          scored.total += points || 0;
        }
      }

      return scored;
    }
  }
})


.factory('RescueScorer2016Regional', function (){

  var model = {
    rooms: {
      'first': 0,
      'secc': 0,
    },
    corridors: {
      'ramp': 0,
    },
    gaps: {

    },
    squares1: {
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
    },
    squares2: {
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
    },
    squares3: {
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
    },
    obstacles: {

    },
    speedbump: {

    },
    intersection: {

    },
    passage: {

    },

    victims: {
      '1a': 0,
      '2a': 0,
      '3a': 0,
    },
  };

  var scorings ={
    rooms: [0, 60, 40, 20, 0],
    corridors: [0,30,20,10,0],
    gaps: [0,10],

    squares1: 3,
    squares2: 2,
    squares3: 1,

    obstacles: [0,10],
    speedbump: [0, 5],
    intersection: [0,15],
    passage: [0, 10],

    victims: [0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400],
  }

  return {
    view: 'views/rescue_scorer_2016_regional.html?r='+Math.random(),
    model: model,
    scorings: scorings,
    score: function (model){
      var scored = {
        total: 0,
      };

      for(var k in model){
        scored[k] = {};
        var group = model[k];

        for(var i in group){
          var mission = group[i];
          if(mission === false) mission = 0;
          if(mission === true) mission = 1;

          var pointsGroup = scorings[k];
          var points;
          if(typeof pointsGroup == 'number'){
            points = pointsGroup * mission;
          }else{
            points = scorings[k][mission];
          }

          scored[k][i] = points
          scored.total += points || 0;
        }
      }

      return scored;
    }
  }
})

.factory('FLLWorldClassScorer', function (){

  var model = {
    door:0,
    cloud:0,
    collective:0,
    insert:0,
    insertLoop:0,
    sense:0,
    outbox:0,
    remote:0,
    search:0,
    searchLoops:0,
    sports:0,
    reverseBasker:0,
    reverseReplicate:0,
    adapt:0,
    learnBound:0,
    learnTouch:0,
    projects:0,
    engage:0,
    gyros: 0,
    penalties:0,
  };

  var scorings ={
    door: [0,15],
    cloud: [0,30],
    collective: [0,25],
    insert: [0,25],
    // insertLoop: special, if insert, then [0,30]
    sense: [0,40],
    outbox: [0,25,40],
    remote: [0,40],
    search: [0,15],
    // searchLoops: special, if search, then [0,45]
    sports: [0,30,60],
    reverseBasker: [0,30],
    // reverseReplicate: special, if reverseBasker, [0,15]
    adapt: [0,15],
    learnBound: [0,20],
    // learnTouch: special, if learnBound, [0,15],
    projects: [0,20,30,40,50,60,70,80,90],
    penalties: [0,-10,-20,-30,-40,-50,-60,-70,-80],
    // engage: [0,20],
    // gyros: special, if engage, then crazy calculus
  }

  return {
    view: 'views/fll_scorer_world_class.html',
    model: model,
    scorings: scorings,
    score: function (model){
      var scored = {
        total: 0,
      };
      // Usual scoring, based on a table data
      for(var mission in model){
        // console.log(mission);
        if(!scorings[mission]) continue;
        var score = model[mission];
        if(score === false) score = 0;
        if(score === true) score = 1;

        var points = scorings[mission][score];
        scored[mission] = points
        scored.total += points || 0;
      }

      // Special cases
      scored.insertLoop = [0,30][model.insertLoop * model.insert];
      scored.total += scored.insertLoop;

      scored.searchLoops = [0,45][model.searchLoops * model.search];
      scored.total += scored.searchLoops;

      scored.reverseReplicate = [0,15][model.reverseReplicate * model.reverseBasker];
      scored.total += scored.reverseReplicate;

      scored.learnTouch = [0,15][model.learnTouch * model.learnBound];
      scored.total += scored.learnTouch;

      scored.engage = [0,20][model.engage];
      scored.gyros = 0;
      if(model.engage){
        var percentage = (model.gyros ? model.gyros*1 + 9 : 0) / 100.0;
        percentage = Math.min(percentage, 0.58);
        scored.gyros = scored.total * percentage;
      }
      scored.total += scored.engage
      scored.total += scored.gyros;

      // Limit to zero the minimum score
      scored.total = Math.max(0, Math.round(scored.total));

      // Invalidate score
      if(scored.searchLoops && model.projects > 6)
        scored.total = null;

      return scored;
    }
  }
})
