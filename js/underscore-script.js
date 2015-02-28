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

var js2 = [{name : 'ember', niche : 'Ember JS'}, {name : 'angular', niche : 'angular js'}];

var niches2 = _.pluck(js2, 'niche');

var names2 = _.pluck(js2, 'name');

console.log(names2);




/**
	Map

	With a map, each element can be mutated or otherwise changed through a function.
	
**/ 

var names = _(JS).pluck('name').map(function (value){return value + '.js'});
console.log(names);



var SE = [{name : 'Google', niche : 'Google is a search engine'}, {name : 'Bing', niche : 'Bing is a search engine'}, {name : 'Yahoo', niche : 'Yahoo is a search engine'}, {name : 'Duck Duck Go', niche : 'Duck Duck Go is another search engine'} ]

var names = _(SE).pluck('name').map(function (value){ return value + ' + '});

console.log(names);

var Scores = [3, 3, 88, 78,  67];
var hasPassed =  _(Scores).all(function (value) {return value  });

console.log(hasPassed);

var uniqTest = _.uniq([1, 5,4,4,4,4,47,7,8,2,1,5,8,8,8,9,2,1]);

console.log(uniqTest);


var tens = _.range(0, 100, 10);
var fives = _.range(0, 100, 5);
var eights = _.range(0, 100, 8);

var common = _.intersection(tens, fives, eights);

console.log(tens );
console.log(fives);

console.log(common);



