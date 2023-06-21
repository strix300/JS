import data from './data.json' assert {type: "json"};

// console.log(data);

for (let names of data.users) {
    console.log(names.firstName);
    console.log(names.lastName);
    console.log(names.dateOfBirth);
    console.log(names.knowsAs);
}