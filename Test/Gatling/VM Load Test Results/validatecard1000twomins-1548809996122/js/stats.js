var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "240000",
        "ok": "3689",
        "ko": "236311"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "89",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "156915",
        "ok": "156915",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "2202",
        "ok": "143240",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "17733",
        "ok": "15975",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "144334",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "148820",
        "ko": "0"
    },
    "percentiles3": {
        "total": "0",
        "ok": "154781",
        "ko": "0"
    },
    "percentiles4": {
        "total": "141965",
        "ok": "156266",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 5,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 3684,
        "percentage": 2
    },
    "group4": {
        "name": "failed",
        "count": 236311,
        "percentage": 98
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "830.45",
        "ok": "12.765",
        "ko": "817.685"
    }
},
contents: {
"req_monolith-paymen-39ec7": {
        type: "REQUEST",
        name: "Monolith Payment Validate Card",
path: "Monolith Payment Validate Card",
pathFormatted: "req_monolith-paymen-39ec7",
stats: {
    "name": "Monolith Payment Validate Card",
    "numberOfRequests": {
        "total": "120000",
        "ok": "1723",
        "ko": "118277"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "89",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "153849",
        "ok": "153849",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "1991",
        "ok": "138680",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "16673",
        "ok": "20101",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "141824",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "144065",
        "ko": "0"
    },
    "percentiles3": {
        "total": "0",
        "ok": "146563",
        "ko": "0"
    },
    "percentiles4": {
        "total": "140325",
        "ok": "147084",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 5,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1718,
        "percentage": 1
    },
    "group4": {
        "name": "failed",
        "count": 118277,
        "percentage": 99
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "415.225",
        "ok": "5.962",
        "ko": "409.263"
    }
}
    },"req_microservice-pa-91118": {
        type: "REQUEST",
        name: "Microservice Payment Validate Card",
path: "Microservice Payment Validate Card",
pathFormatted: "req_microservice-pa-91118",
stats: {
    "name": "Microservice Payment Validate Card",
    "numberOfRequests": {
        "total": "120000",
        "ok": "1966",
        "ko": "118034"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "13134",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "156915",
        "ok": "156915",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "2412",
        "ok": "147236",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "18730",
        "ok": "9516",
        "ko": "0"
    },
    "percentiles1": {
        "total": "0",
        "ok": "148495",
        "ko": "0"
    },
    "percentiles2": {
        "total": "0",
        "ok": "152108",
        "ko": "0"
    },
    "percentiles3": {
        "total": "0",
        "ok": "155605",
        "ko": "0"
    },
    "percentiles4": {
        "total": "146896",
        "ok": "156336",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1966,
        "percentage": 2
    },
    "group4": {
        "name": "failed",
        "count": 118034,
        "percentage": 98
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "415.225",
        "ok": "6.803",
        "ko": "408.422"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
