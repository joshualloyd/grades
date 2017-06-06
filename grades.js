var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var numberF = 0;
var numberD = 0;
var numberC = 0;
var numberB = 0;
var numberA = 0;

var lowScore = 100;
var highScore = 0;

// for (var i = 0; i < scores.length; i++) {
// 	if (scores[i] <= 60 && scores[i] >= 50) {
// 		numberF++;
// 	} else if (scores[i] >= 61 && scores[i] <= 70) {
// 		numberD++;
// 	} else if (scores[i] >= 71 && scores[i] <= 80) {
// 		numberC++;
// 	} else if (scores[i] >= 81 && scores[i] <= 90) {
// 		numberB++;
// 	} else if (scores[i] >= 91 && scores[i] <= 100) {
// 		numberA++;
// 	} else {
// 		console.log('Invalid score');
// 	}
// }

scores.forEach(function(score){
	if (score <= 60 && score >= 50) {
		numberF++;
	} else if (score >= 61 && score <= 70) {
		numberD++;
	} else if (score >= 71 && score <= 80) {
		numberC++;
	} else if (score >= 81 && score <= 90) {
		numberB++;
	} else if (score >= 91 && score <= 100) {
		numberA++;
	} else {
		console.log('Invalid score');
	}
});

// for (var i = 0; i < scores.length; i++) {
// 	if ( scores[i] < lowScore ) {
// 		lowScore = scores[i];
// 	}
// 	if ( scores[i] > highScore) {
// 		highScore = scores[i];
// 	}
// }

// var lowScore = Math.max.apply(null, scores);

// var highScore = Math.max.apply(null, scores);

var lowScore = Math.min(...scores);

var highScore = Math.max(...scores);


console.log(`There were ${numberF} F's, ${numberD} D's, ${numberC} C's, ${numberB} B's and ${numberA} A's`);

console.log(`The lowest grade is ${lowScore}`);
console.log(`The highest grade is ${highScore}`);



