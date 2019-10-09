let color_lawn = {
	title: "lawn",
	color: "#00FF00",
	rating: 0
}

//INCORRECT
const rateColorInc = function(color,rating){
	color.rating = rating;
	return rating;
}

//CORRECT
const rateColorCorFunc = function(color, rating){
	return Object.assign({},color,{rating:rating})
}

rateColorCorFunc(color_lawn,5);

//CORRECT
const rateColorCorArrow = (color, rating) => ({	...color, rating });

let elementOfrateColorCorFunc = rateColorCorFunc(color_lawn, 6);
console.table(elementOfrateColorCorFunc.rating);

let elementOfrateColorCorArrow = rateColorCorArrow(color_lawn, 4);
console.table(elementOfrateColorCorArrow.rating);

const rate = (color, rating, title) => ({ ...color, rating, title})
let rateTest = rate(color_lawn,9,"Blue")
console.log(rateTest);

const rate1 = (color, rating, title) => {
	return Object.assign({}, color, {rating: rating, title: title})
}
let rate1Test = rate1(color_lawn,3,"lime")
console.log(rate1Test);

let list = [
	{title: "Corrent"},
	{title: "Tulpan"},
	{title: "MomentoMori"}
]

const addElement = (list, element) =>{
	list.concat({title: element});
}
addElement(list, "Gustav")
console.table(list)

let schools = {
	"School#1" : 1,
	"School#2" : 2,
	"School#3" : 5
}

const convertToObject = object => {
	return array = Object.keys(schools).map(key => 
		({

			name: key,
			wins: schools[key]
		})
	)
}
console.log(convertToObject(schools))
