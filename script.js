var albums = [
    {'name': 'Gossamer', 'artist': 'Passion Pit'},
    {'name': 'Sigh no more', 'artist': 'Mumford and Sons'},
    {'name': 'Time to Pretend', 'artist': 'MGMT'}
];

// var arr = [1,2,3,4,5,6];
// var result = _.filter(arr, function(n) {return n > 3});
// var result = _.map(arr, function(n) { return n*5});
// var result = _.all(arr, function(n){ return n % 2 != 0});
// var result = _.map(albums, function(a){ return a.artist});
// var result = _.invoke(artist, 'toUpperCase');
// var result = _.where(albums, {'artist': 'MGMT'});
var result = _.min(albums, function(a){return a.year});



console.log(resultg);