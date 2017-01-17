var alpha = 'mpeuorwr';
var s1 = '';
var s2 = '';

for (var index = 0; index < alpha.length; index++) {
if (index % 2 == 0) {
s1 = s1 + alpha.substr(index, 1);1
 } else {
s2 = s2 + alpha.substr(index, 1);
}
}
console.log(s1 + s2);
