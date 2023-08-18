export const nutriPoint = (foodtype: any,energy: any,sugars: any,satuFat: any,sodium: any,fruitVeget: any,fibre: any,protein: any) => {
  
  let negPoint1:any = 0, negPoint2:any = 0, negPoint3:any = 0, negPoint4:any = 0, posPoint1:any = 0, posPoint2:any = 0, posPoint3:any = 0, finalScore:any = 0, grade = "Undefined";
  
  if (foodtype.toLowerCase()=="food" || foodtype.toLowerCase()=="foods") {

      //Negative point: Engergy
      switch (true) {
        case(energy>=800): negPoint1 = 10; break;
        case(energy>=720): negPoint1 = 9; break;
        case(energy>=640): negPoint1 = 8; break;
        case(energy>=560): negPoint1 = 7; break;
        case(energy>=480): negPoint1 = 6; break;
        case(energy>=400): negPoint1 = 5; break;
        case(energy>=320): negPoint1 = 4; break;
        case(energy>=240): negPoint1 = 3; break;
        case(energy>=160): negPoint1 = 2; break;
        case(energy>=80): negPoint1 = 1; break;
        default: negPoint1 = 0;
      }

      //Negative point: Simple sugars
      switch (true) {
        case(sugars>=45000): negPoint2 = 10; break;
        case(sugars>=40000): negPoint2 = 9; break;
        case(sugars>=36000): negPoint2 = 8; break;
        case(sugars>=31000): negPoint2 = 7; break;
        case(sugars>=27000): negPoint2 = 6; break;
        case(sugars>=22500): negPoint2 = 5; break;
        case(sugars>=18000): negPoint2 = 4; break;
        case(sugars>=13500): negPoint2 = 3; break;
        case(sugars>=9000): negPoint2 = 2; break;
        case(sugars>=4500): negPoint2 = 1; break;
        default: negPoint2 = 0;
      }

      //Negative point: Saturated fats
      switch (true) {
        case(satuFat>=10000): negPoint3 = 10; break;
        case(satuFat>=9000): negPoint3 = 9; break;
        case(satuFat>=8000): negPoint3 = 8; break;
        case(satuFat>=7000): negPoint3 = 7; break;
        case(satuFat>=6000): negPoint3 = 6; break;
        case(satuFat>=5000): negPoint3 = 5; break;
        case(satuFat>=4000): negPoint3 = 4; break;
        case(satuFat>=3000): negPoint3 = 3; break;
        case(satuFat>=2000): negPoint3 = 2; break;
        case(satuFat>1000): negPoint3 = 1; break;
        default: negPoint3 = 0;
      }

      //Negative point: Salt
      switch (true) {
        case(sodium>=900): negPoint4 = 10; break;
        case(sodium>=810): negPoint4 = 9; break;
        case(sodium>=720): negPoint4 = 8; break;
        case(sodium>=630): negPoint4 = 7; break;
        case(sodium>=540): negPoint4 = 6; break;
        case(sodium>=450): negPoint4 = 5; break;
        case(sodium>=360): negPoint4 = 4; break;
        case(sodium>=270): negPoint4 = 3; break;
        case(sodium>=180): negPoint4 = 2; break;
        case(sodium>=90): negPoint4 = 1; break;
        default: negPoint4 = 0;
      }

      //Positive point: Fruit and vegetables
      switch (true) {
        case(fruitVeget>=80): posPoint1 = 5; break;
        case(fruitVeget>=60): posPoint1 = 2; break;
        case(fruitVeget>=40): posPoint1 = 1; break;
        default: posPoint1 = 0;
      }

      //Positive point: Fibre
      switch (true) {
        case(fibre>=3500): posPoint2 = 5; break;
        case(fibre>=2800): posPoint2 = 4; break;
        case(fibre>=2100): posPoint2 = 3; break;
        case(fibre>=1400): posPoint2 = 2; break;
        case(fibre>=700): posPoint2 = 1; break;
        default: posPoint2 = 0;
      }

      //Positive point: Protein
      switch (true) {
        case(protein>=8000): posPoint3 = 5; break;
        case(protein>=6400): posPoint3 = 4; break;
        case(protein>=4800): posPoint3 = 3; break;
        case(protein>=3200): posPoint3 = 2; break;
        case(protein>=1600): posPoint3 = 1; break;
        default: posPoint3 = 0;
      }

    console.log("negPoint1:"+negPoint1)
    console.log("negPoint2:"+negPoint2)
    console.log("negPoint3:"+negPoint3)
    console.log("negPoint4:"+negPoint4)
    console.log("posPoint1:"+posPoint1)
    console.log("posPoint2:"+posPoint2)

      finalScore = negPoint1 + negPoint2 + negPoint3 + negPoint4 - posPoint1 - posPoint2 - posPoint3
      finalScore = finalScore.toFixed(1);
    
      switch (true) {
        case(finalScore <= -1): grade = "A"; break;
        case(finalScore <= 2): grade = "B"; break;
        case(finalScore <= 10): grade = "C"; break;
        case(finalScore <= 18): grade = "D"; break;
        case(finalScore <= 40): grade = "E"; break;
      }
    
      return [finalScore,grade];
    

  } else if (foodtype.toLowerCase()=="beverage" || foodtype.toLowerCase()=="beverages") {
    
      //Negative point: Engergy
      switch (true) {
        case(energy>=64.5): negPoint1 = 10; break;
        case(energy>=57.4): negPoint1 = 9; break;
        case(energy>=50.2): negPoint1 = 8; break;
        case(energy>=43.0): negPoint1 = 7; break;
        case(energy>=35.9): negPoint1 = 6; break;
        case(energy>=28.5): negPoint1 = 5; break;
        case(energy>=21.5): negPoint1 = 4; break;
        case(energy>=14.3): negPoint1 = 3; break;
        case(energy>=7.2): negPoint1 = 2; break;
        case(energy>0): negPoint1 = 1; break;
        default: negPoint1 = 0;
      }

      //Negative point: Simple sugarss
      switch (true) {
        case(sugars>=13500): negPoint2 = 10; break;
        case(sugars>=12000): negPoint2 = 9; break;
        case(sugars>=10500): negPoint2 = 8; break;
        case(sugars>=9000): negPoint2 = 7; break;
        case(sugars>=7500): negPoint2 = 6; break;
        case(sugars>=6000): negPoint2 = 5; break;
        case(sugars>=4500): negPoint2 = 4; break;
        case(sugars>=3000): negPoint2 = 3; break;
        case(sugars>=1500): negPoint2 = 2; break;
        case(sugars>=0): negPoint2 = 1; break;
        default: negPoint2 = 0;
      }

      //Negative point: Saturated fats
      switch (true) {
        case(satuFat>=10000): negPoint3 = 10; break;
        case(satuFat>=9000): negPoint3 = 9; break;
        case(satuFat>=8000): negPoint3 = 8; break;
        case(satuFat>=7000): negPoint3 = 7; break;
        case(satuFat>=6000): negPoint3 = 6; break;
        case(satuFat>=5000): negPoint3 = 5; break;
        case(satuFat>=4000): negPoint3 = 4; break;
        case(satuFat>=3000): negPoint3 = 3; break;
        case(satuFat>=2000): negPoint3 = 2; break;
        case(satuFat>1000): negPoint3 = 1; break;
        default: negPoint3 = 0;
      }

      //Negative point: Salt
      switch (true) {
        case(sodium>=900): negPoint4 = 10; break;
        case(sodium>=810): negPoint4 = 9; break;
        case(sodium>=720): negPoint4 = 8; break;
        case(sodium>=630): negPoint4 = 7; break;
        case(sodium>=540): negPoint4 = 6; break;
        case(sodium>=450): negPoint4 = 5; break;
        case(sodium>=360): negPoint4 = 4; break;
        case(sodium>=270): negPoint4 = 3; break;
        case(sodium>=180): negPoint4 = 2; break;
        case(sodium>=90): negPoint4 = 1; break;
        default: negPoint4 = 0;
      }

      //Positive point: Fruit and vegetables
      switch (true) {
        case(fruitVeget>=80): posPoint1 = 10; break;
        case(fruitVeget>=60): posPoint1 = 4; break;
        case(fruitVeget>=40): posPoint1 = 2; break;
        default: posPoint1 = 0;
      }

      //Positive point: Fibre
      switch (true) {
        case(fibre>=3500): posPoint2 = 5; break;
        case(fibre>=2800): posPoint2 = 4; break;
        case(fibre>=2100): posPoint2 = 3; break;
        case(fibre>=1400): posPoint2 = 2; break;
        case(fibre>=700): posPoint2 = 1; break;
        default: posPoint2 = 0;
      }

      //Positive point: Protein
      switch (true) {
        case(protein>=8000): posPoint3 = 5; break;
        case(protein>=6400): posPoint3 = 4; break;
        case(protein>=4800): posPoint3 = 3; break;
        case(protein>=3200): posPoint3 = 2; break;
        case(protein>=1600): posPoint3 = 1; break;
        default: posPoint3 = 0;
      }

      finalScore = negPoint1 + negPoint2 + negPoint3 + negPoint4 - posPoint1 - posPoint2 - posPoint3
      finalScore = finalScore.toFixed(1);
    
      switch (true) {
        case(finalScore <= -1): grade = "A"; break;
        case(finalScore <= 2): grade = "B"; break;
        case(finalScore <= 10): grade = "C"; break;
        case(finalScore <= 18): grade = "D"; break;
        case(finalScore <= 40): grade = "E"; break;
      }
    
      return [finalScore,grade];

  }

}