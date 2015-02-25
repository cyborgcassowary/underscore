// 	var scores = [84, 99, 91, 65, 87, 55, 72, 68, 95, 42], 
// topScorers = [], scoreLimit = 90;
 
// for (i=0; i<=scores.length; i++)
// {
//     if (scores[i]>scoreLimit)
//     {
//         topScorers.push(scores[i]);
//     }
// }
 
// console.log(topScorers);

// vs


var scores = [84, 99, 91, 65, 87, 55, 72, 68,95, 42], topScorers = [], scoreLimit = 90;

// functional approach
// topScorers = _.select(scores, function(score){ return score > scoreLimit;});

// object oriented approach

topScorers = _(scores).select(function(score){ return score > scoreLimit; });

// There is no real 'right' way to do things but keep in mind that you can 
// jQuery-esque method chaining with the latter method.

console.log(topScorers);


/**
	Pluck

	Arrays have always been very difficult for me to pluck out.
	It's pretty easy to pluck them out with Underscore JS.
**/

var JS = [{name : 'Ember', niche : 'Ember JS'}, {name : 'Angular',  niche : 'Angular JS'}, {name : 'Underscore',  niche : 'Underscore JS'}, { name : 'Meteor', niche : 'Meteor JS'}];
var niches = _.pluck(JS, 'niche');

console.log(niches);


/**
	Map

	With a map, each element can be mutated or otherwise changed through a function.
	
**/ 

var names = _(JS).pluck('name').map(function (value){return value + '.js'});
console.log(names);