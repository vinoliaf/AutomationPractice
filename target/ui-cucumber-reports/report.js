$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("test.feature");
formatter.feature({
  "line": 1,
  "name": "CarTaxCheck test",
  "description": "",
  "id": "cartaxcheck-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "carcheck test",
  "description": "",
  "id": "cartaxcheck-test;carcheck-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@FeatureAutomationTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I use the input file \"\u003cinputFile\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "we get the regex from the file",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I search for the regex in \"\u003cWebsite\u003e\" website",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the result should match the details in the output file \"\u003coutputFileName\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "cartaxcheck-test;carcheck-test;",
  "rows": [
    {
      "cells": [
        "inputFile",
        "Website",
        "outputFileName"
      ],
      "line": 10,
      "id": "cartaxcheck-test;carcheck-test;;1"
    },
    {
      "cells": [
        "car_input.txt",
        "",
        "car_output.txt"
      ],
      "line": 11,
      "id": "cartaxcheck-test;carcheck-test;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1576601284,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "carcheck test",
  "description": "",
  "id": "cartaxcheck-test;carcheck-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@FeatureAutomationTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I use the input file \"car_input.txt\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "we get the regex from the file",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I search for the regex in \"\" website",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the result should match the details in the output file \"car_output.txt\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "car_input.txt",
      "offset": 22
    }
  ],
  "location": "StepDefs.iUseTheInputFile(String)"
});
formatter.result({
  "duration": 130326539,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.weGetTheRegexFromTheFile()"
});
formatter.result({
  "duration": 224886,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 27
    }
  ],
  "location": "StepDefs.iSearchForTheRegexInWebsite(String)"
});
formatter.result({
  "duration": 9443281144,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "car_output.txt",
      "offset": 56
    }
  ],
  "location": "StepDefs.theResultShouldMatchTheDetailsInTheOutputFile(String)"
});
formatter.result({
  "duration": 3099133,
  "error_message": "java.lang.AssertionError: The following records doesnt match[REGISTRATION,MAKE,MODEL,COLOR,YEAR, BW57BOF,Toyota,Yaris T2,Black,2010]\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat stepDefinitions.StepDefs.theResultShouldMatchTheDetailsInTheOutputFile(StepDefs.java:66)\n\tat ✽.Then the result should match the details in the output file \"car_output.txt\"(test.feature:8)\n",
  "status": "failed"
});
formatter.after({
  "duration": 95629049,
  "status": "passed"
});
});