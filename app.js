// 1) Turn an array of numbers into a total of all the numbers
const arr = [ 1, 2, 3 ];

const sum = arr.reduce((acc, currentVal) => {
	return acc + currentVal;
});

console.log(sum);

// 2) Turn an array of numbers into a long string of all those numbers.
const nums = [ 2, 3, 4 ];

const string = nums.reduce((accumulator, currentVal) => {
	return accumulator + currentVal.toString();
});

console.log(string);

// 3) Turn an array of voter objects into a count of how many people voted

let voters = [
	{
		name: 'Bob',
		age: 30,
		voted: true
	},
	{
		name: 'Jake',
		age: 32,
		voted: true
	},
	{
		name: 'Kate',
		age: 25,
		voted: false
	},
	{
		name: 'Sam',
		age: 20,
		voted: false
	},
	{
		name: 'Phil',
		age: 21,
		voted: true
	},
	{
		name: 'Ed',
		age: 55,
		voted: true
	},
	{
		name: 'Tami',
		age: 54,
		voted: true
	},
	{
		name: 'Mary',
		age: 31,
		voted: false
	},
	{
		name: 'Becky',
		age: 43,
		voted: false
	},
	{
		name: 'Joey',
		age: 41,
		voted: true
	},
	{
		name: 'Jeff',
		age: 30,
		voted: true
	},
	{
		name: 'Zack',
		age: 19,
		voted: false
	}
];

let count = 0;
voters.forEach((voter) => {
	if (voter.voted === true) {
		count++;
	} else {
		count += 0;
	}
	return count;
});

console.log(count);

// 4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

const wishlist = [
	{
		title: 'Tesla Model S',
		price: 90000
	},
	{
		title: '4 carat diamond ring',
		price: 45000
	},
	{
		title: 'Fancy hacky Sack',
		price: 5
	},
	{
		title: 'Gold fidgit spinner',
		price: 2000
	},
	{
		title: 'A second Tesla Model S',
		price: 90000
	}
];

let totalCost = 0;
wishlist.forEach((item) => {
	totalCost += item.price;
	return totalCost;
});

console.log(totalCost);

//5) Given an array of arrays, flatten them into a single array

let arrays = [ [ '1', '2', '3' ], [ true ], [ 4, 5, 6 ] ];

const combinedArray = [].concat.apply([], arrays);

console.log(combinedArray);

//6)Given an array of potential voters, return an object representing the results of the vote

/*
Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties.
Example result:
{ youngVotes: 1,
  youth: 4,
  midVotes: 3,
  mids: 4,
  oldVotes: 3,
  olds: 4
}
*/

const voters2 = [
	{ name: 'Bob', age: 30, voted: true },
	{ name: 'Jake', age: 32, voted: true },
	{ name: 'Kate', age: 25, voted: false },
	{ name: 'Sam', age: 20, voted: false },
	{ name: 'Phil', age: 21, voted: true },
	{ name: 'Ed', age: 55, voted: true },
	{ name: 'Tami', age: 54, voted: true },
	{ name: 'Mary', age: 31, voted: false },
	{ name: 'Becky', age: 43, voted: false },
	{ name: 'Joey', age: 41, voted: true },
	{ name: 'Jeff', age: 30, voted: true },
	{ name: 'Zack', age: 19, voted: false }
];

const startingPoint = {
	youngVotes: 0,
	youth: 0,
	midVotes: 0,
	mids: 0,
	oldVotes: 0,
	olds: 0
};

const result = voters2.reduce((groupedVoters, voter) => {
	if (voter.age >= 18 && voter.age <= 25) {
		groupedVoters.youth++;
		if (voter.voted) {
			groupedVoters.youngVotes++;
		}
	} else if (voter.age >= 26 && voter.age <= 35) {
		groupedVoters.mids++;
		if (voter.voted) {
			groupedVoters.midVotes++;
		}
	} else if (voter.age >= 36 && voter.age <= 55) {
		groupedVoters.olds++;
		if (voter.voted) {
			groupedVoters.oldVotes++;
		}
	}
}, startingPoint);

console.log(result);
