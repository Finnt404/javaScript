function leap_year_rule(fractional, error){
var rule = [];
var margin = fractional;
var leap_period = 1;
while(margin > error){
var rate = Math.floor(1 / margin);
leap_period *= rate;
rule.push(leap_period);
margin = 1 - rate * margin;
}
return rule;
}
var fractional;
var error =Math.pow(0.1, 10);
//console.log(leap_year_rule(0.31, error));
//console.log(leap_year_rule(0.88, error));
console.log(leap_year_rule(0.2422, error)); //earth
