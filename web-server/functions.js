database = require('./database');
_ = require("lodash");

const getDepartmentsImpact = async ()=> {
    let deps = await database.getDepartments();

    let labels = [];
    let data = [];
    let results = {};
    for (let key in deps['Items']){
        let depatrment = deps['Items'][key]['name'];
        let hints = await database.getHintsByHelperDep(deps['Items'][key]['name'])

        for (let hint in hints) {
            let impact = parseInt(hints[hint]['impact'])
            // console.log(hints[hint]['impact'])
            // console.log(depatrment)
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
    return sortResults(results)
}

const sortResults = function (results) {

    let data = {"labels": [], "data": []}
    let count = 5;
    let items = Object.keys(results).map(function(key) {
        return [key, results[key]];
    });

// Sort the array based on the second element
    items.sort(function(first, second) {
        return second[1] - first[1];
    });

    for (let i in items){
        if (count > 0) {
            data['labels'] = data['labels'].concat(items[i][0])
            data['data'] = data['data'].concat(items[i][1])
            count -= 1;
        }else{
            break
        }
    }

    return data
}

const getLast6Month = function () {
    let month_list = [];
    let date = new Date();
    for (let i=0; i<6; i++) {
        month_list.push(date.getMonth() - i);
    }
    return month_list
}

const getTagLast6MonthData = function(items, tag, labels) {
    console.log(labels)

    let data = []

    labels.forEach(function(month){
        data.push((_.filter(items, function(item) { return (ts_get_month(item.created_ts) === month && item.tags.indexOf(tag) > -1) })).length);
    });

    return data
}

const ts_get_month = function (ts) {
    let date = new Date(parseInt(ts))
    return date.getMonth()
}

const getHintsByTagDepStatus = async (tags, dep, status) => {
    // let tags = ['test_1', "angular"]
    return database.getHintsByTag(dep, status).then(function (res) {

        let labels = getLast6Month();
        let data = [];
        for (let tag in tags) {
            data.push({label: tags[tag], data: getTagLast6MonthData(res, tags[tag], labels)});
        }

        return {"labels": labels, "data": data};

    })
};



module.exports = {
    getDepartmentsImpact,
    sortResults,
    getHintsByTagDepStatus
}

// getDepartmentsImpact()

// sortResults({ IC: 10, Infra: 25, Mobile: 20, Video: 40, Super: 100, Aura: 1 })
// let tags = ['test_1', "angular"]
// database.getHintsByTag('test', 'open').then(function (res) {
//
//     let labels = getLast6Month();
//     let data = [];
//     for (let tag in tags) {
//         data.push({label: tags[tag], data: getTagLast6MonthData(res, tags[tag], labels)});
//     }
//
//
//     return {labels: labels, data: data};
//
//     console.log("labels", labels)
//     console.log(data)
// })

