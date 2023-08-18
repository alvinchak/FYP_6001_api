"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var nutri_score_exports = {};
__export(nutri_score_exports, {
  nutriPoint: () => nutriPoint
});
module.exports = __toCommonJS(nutri_score_exports);
const nutriPoint = (foodtype, energy, sugars, satuFat, sodium, fruitVeget, fibre, protein) => {
  let negPoint1 = 0, negPoint2 = 0, negPoint3 = 0, negPoint4 = 0, posPoint1 = 0, posPoint2 = 0, posPoint3 = 0, finalScore = 0, grade = "Undefined";
  if (foodtype.toLowerCase() == "food" || foodtype.toLowerCase() == "foods") {
    switch (true) {
      case energy >= 800:
        negPoint1 = 10;
        break;
      case energy >= 720:
        negPoint1 = 9;
        break;
      case energy >= 640:
        negPoint1 = 8;
        break;
      case energy >= 560:
        negPoint1 = 7;
        break;
      case energy >= 480:
        negPoint1 = 6;
        break;
      case energy >= 400:
        negPoint1 = 5;
        break;
      case energy >= 320:
        negPoint1 = 4;
        break;
      case energy >= 240:
        negPoint1 = 3;
        break;
      case energy >= 160:
        negPoint1 = 2;
        break;
      case energy >= 80:
        negPoint1 = 1;
        break;
      default:
        negPoint1 = 0;
    }
    switch (true) {
      case sugars >= 45e3:
        negPoint2 = 10;
        break;
      case sugars >= 4e4:
        negPoint2 = 9;
        break;
      case sugars >= 36e3:
        negPoint2 = 8;
        break;
      case sugars >= 31e3:
        negPoint2 = 7;
        break;
      case sugars >= 27e3:
        negPoint2 = 6;
        break;
      case sugars >= 22500:
        negPoint2 = 5;
        break;
      case sugars >= 18e3:
        negPoint2 = 4;
        break;
      case sugars >= 13500:
        negPoint2 = 3;
        break;
      case sugars >= 9e3:
        negPoint2 = 2;
        break;
      case sugars >= 4500:
        negPoint2 = 1;
        break;
      default:
        negPoint2 = 0;
    }
    switch (true) {
      case satuFat >= 1e4:
        negPoint3 = 10;
        break;
      case satuFat >= 9e3:
        negPoint3 = 9;
        break;
      case satuFat >= 8e3:
        negPoint3 = 8;
        break;
      case satuFat >= 7e3:
        negPoint3 = 7;
        break;
      case satuFat >= 6e3:
        negPoint3 = 6;
        break;
      case satuFat >= 5e3:
        negPoint3 = 5;
        break;
      case satuFat >= 4e3:
        negPoint3 = 4;
        break;
      case satuFat >= 3e3:
        negPoint3 = 3;
        break;
      case satuFat >= 2e3:
        negPoint3 = 2;
        break;
      case satuFat > 1e3:
        negPoint3 = 1;
        break;
      default:
        negPoint3 = 0;
    }
    switch (true) {
      case sodium >= 900:
        negPoint4 = 10;
        break;
      case sodium >= 810:
        negPoint4 = 9;
        break;
      case sodium >= 720:
        negPoint4 = 8;
        break;
      case sodium >= 630:
        negPoint4 = 7;
        break;
      case sodium >= 540:
        negPoint4 = 6;
        break;
      case sodium >= 450:
        negPoint4 = 5;
        break;
      case sodium >= 360:
        negPoint4 = 4;
        break;
      case sodium >= 270:
        negPoint4 = 3;
        break;
      case sodium >= 180:
        negPoint4 = 2;
        break;
      case sodium >= 90:
        negPoint4 = 1;
        break;
      default:
        negPoint4 = 0;
    }
    switch (true) {
      case fruitVeget >= 80:
        posPoint1 = 5;
        break;
      case fruitVeget >= 60:
        posPoint1 = 2;
        break;
      case fruitVeget >= 40:
        posPoint1 = 1;
        break;
      default:
        posPoint1 = 0;
    }
    switch (true) {
      case fibre >= 3500:
        posPoint2 = 5;
        break;
      case fibre >= 2800:
        posPoint2 = 4;
        break;
      case fibre >= 2100:
        posPoint2 = 3;
        break;
      case fibre >= 1400:
        posPoint2 = 2;
        break;
      case fibre >= 700:
        posPoint2 = 1;
        break;
      default:
        posPoint2 = 0;
    }
    switch (true) {
      case protein >= 8e3:
        posPoint3 = 5;
        break;
      case protein >= 6400:
        posPoint3 = 4;
        break;
      case protein >= 4800:
        posPoint3 = 3;
        break;
      case protein >= 3200:
        posPoint3 = 2;
        break;
      case protein >= 1600:
        posPoint3 = 1;
        break;
      default:
        posPoint3 = 0;
    }
    console.log("negPoint1:" + negPoint1);
    console.log("negPoint2:" + negPoint2);
    console.log("negPoint3:" + negPoint3);
    console.log("negPoint4:" + negPoint4);
    console.log("posPoint1:" + posPoint1);
    console.log("posPoint2:" + posPoint2);
    finalScore = negPoint1 + negPoint2 + negPoint3 + negPoint4 - posPoint1 - posPoint2 - posPoint3;
    finalScore = finalScore.toFixed(1);
    switch (true) {
      case finalScore <= -1:
        grade = "A";
        break;
      case finalScore <= 2:
        grade = "B";
        break;
      case finalScore <= 10:
        grade = "C";
        break;
      case finalScore <= 18:
        grade = "D";
        break;
      case finalScore <= 40:
        grade = "E";
        break;
    }
    return [finalScore, grade];
  } else if (foodtype.toLowerCase() == "beverage" || foodtype.toLowerCase() == "beverages") {
    switch (true) {
      case energy >= 64.5:
        negPoint1 = 10;
        break;
      case energy >= 57.4:
        negPoint1 = 9;
        break;
      case energy >= 50.2:
        negPoint1 = 8;
        break;
      case energy >= 43:
        negPoint1 = 7;
        break;
      case energy >= 35.9:
        negPoint1 = 6;
        break;
      case energy >= 28.5:
        negPoint1 = 5;
        break;
      case energy >= 21.5:
        negPoint1 = 4;
        break;
      case energy >= 14.3:
        negPoint1 = 3;
        break;
      case energy >= 7.2:
        negPoint1 = 2;
        break;
      case energy > 0:
        negPoint1 = 1;
        break;
      default:
        negPoint1 = 0;
    }
    switch (true) {
      case sugars >= 13500:
        negPoint2 = 10;
        break;
      case sugars >= 12e3:
        negPoint2 = 9;
        break;
      case sugars >= 10500:
        negPoint2 = 8;
        break;
      case sugars >= 9e3:
        negPoint2 = 7;
        break;
      case sugars >= 7500:
        negPoint2 = 6;
        break;
      case sugars >= 6e3:
        negPoint2 = 5;
        break;
      case sugars >= 4500:
        negPoint2 = 4;
        break;
      case sugars >= 3e3:
        negPoint2 = 3;
        break;
      case sugars >= 1500:
        negPoint2 = 2;
        break;
      case sugars >= 0:
        negPoint2 = 1;
        break;
      default:
        negPoint2 = 0;
    }
    switch (true) {
      case satuFat >= 1e4:
        negPoint3 = 10;
        break;
      case satuFat >= 9e3:
        negPoint3 = 9;
        break;
      case satuFat >= 8e3:
        negPoint3 = 8;
        break;
      case satuFat >= 7e3:
        negPoint3 = 7;
        break;
      case satuFat >= 6e3:
        negPoint3 = 6;
        break;
      case satuFat >= 5e3:
        negPoint3 = 5;
        break;
      case satuFat >= 4e3:
        negPoint3 = 4;
        break;
      case satuFat >= 3e3:
        negPoint3 = 3;
        break;
      case satuFat >= 2e3:
        negPoint3 = 2;
        break;
      case satuFat > 1e3:
        negPoint3 = 1;
        break;
      default:
        negPoint3 = 0;
    }
    switch (true) {
      case sodium >= 900:
        negPoint4 = 10;
        break;
      case sodium >= 810:
        negPoint4 = 9;
        break;
      case sodium >= 720:
        negPoint4 = 8;
        break;
      case sodium >= 630:
        negPoint4 = 7;
        break;
      case sodium >= 540:
        negPoint4 = 6;
        break;
      case sodium >= 450:
        negPoint4 = 5;
        break;
      case sodium >= 360:
        negPoint4 = 4;
        break;
      case sodium >= 270:
        negPoint4 = 3;
        break;
      case sodium >= 180:
        negPoint4 = 2;
        break;
      case sodium >= 90:
        negPoint4 = 1;
        break;
      default:
        negPoint4 = 0;
    }
    switch (true) {
      case fruitVeget >= 80:
        posPoint1 = 10;
        break;
      case fruitVeget >= 60:
        posPoint1 = 4;
        break;
      case fruitVeget >= 40:
        posPoint1 = 2;
        break;
      default:
        posPoint1 = 0;
    }
    switch (true) {
      case fibre >= 3500:
        posPoint2 = 5;
        break;
      case fibre >= 2800:
        posPoint2 = 4;
        break;
      case fibre >= 2100:
        posPoint2 = 3;
        break;
      case fibre >= 1400:
        posPoint2 = 2;
        break;
      case fibre >= 700:
        posPoint2 = 1;
        break;
      default:
        posPoint2 = 0;
    }
    switch (true) {
      case protein >= 8e3:
        posPoint3 = 5;
        break;
      case protein >= 6400:
        posPoint3 = 4;
        break;
      case protein >= 4800:
        posPoint3 = 3;
        break;
      case protein >= 3200:
        posPoint3 = 2;
        break;
      case protein >= 1600:
        posPoint3 = 1;
        break;
      default:
        posPoint3 = 0;
    }
    finalScore = negPoint1 + negPoint2 + negPoint3 + negPoint4 - posPoint1 - posPoint2 - posPoint3;
    finalScore = finalScore.toFixed(1);
    switch (true) {
      case finalScore <= -1:
        grade = "A";
        break;
      case finalScore <= 2:
        grade = "B";
        break;
      case finalScore <= 10:
        grade = "C";
        break;
      case finalScore <= 18:
        grade = "D";
        break;
      case finalScore <= 40:
        grade = "E";
        break;
    }
    return [finalScore, grade];
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  nutriPoint
});
//# sourceMappingURL=nutri-score.js.map
