database = require('./database');
_ = require("lodash/fp");

const run = async ()=> {
    let deps = await database.getDepartments();

    let labels = [];
    let data = [];
    let results = {};
    for (let key in deps['Items']){
        let depatrment = deps['Items'][key]['name'];
        let hints = await database.getHintsByHelperDep(deps['Items'][key]['name'])

        for (let hint in hints) {
            let impact = parseInt(hints[hint]['impact'])
            console.log(hints[hint]['impact'])
            console.log(depatrment)
            if (depatrment in results){
                results[depatrment] += impact
            }else {
                results[depatrment] = impact
            }
            // console.log(results)
        }
            // if ("impact" in item['Items'][0]){
            //     console.log(item['Items'][0].impact)
            // }

    }
    console.log(results)

}

const sortResults = function (results) {
    console.log(results)
    // Create items array
    let items = Object.keys(results).map(function(key) {
        return [key, results[key]];
    });

// Sort the array based on the second element
    items.sort(function(first, second) {
        return second[1] - first[1];
    });

// Create a new array with only the first 5 items
    console.log(items.slice(0, 5));
}

module.exports = {
    run,
    sortResults
}

// run()

sortResults({ IC: 10, Infra: 25 })