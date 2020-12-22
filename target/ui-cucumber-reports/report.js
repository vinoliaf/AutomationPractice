$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("UserStory3.feature");
formatter.feature({
  "line": 2,
  "name": "User Story 3",
  "description": "As a user when searching for a summer dress\nI want to change the price range $16 - $20\nso that I see the search result change\n\nAcceptance Criteria\n1. slider changes the price range\n2. Search results are updated\n3. Items returned are within price range",
  "id": "user-story-3",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FeatureAutomationTest"
    }
  ]
});
formatter.before({
  "duration": 5114570637,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "slider changes the price range",
  "description": "",
  "id": "user-story-3;slider-changes-the-price-range",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I navigate to summer dresses from menu WOMAN",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the price range is \"$16.00 - $32.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I move the slider to \"$20\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the price range is changed to \"$16 -$20\"",
  "keyword": "Then "
});
formatter.match({
  "location": "UserStory2Steps.iNavigateToSummerDressesFromMenuWOMAN()"
});
formatter.result({
  "duration": 2387185633,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$16.00 - $32.00",
      "offset": 20
    }
  ],
  "location": "UserStory3Steps.thePriceRangeIs(String)"
});
formatter.result({
  "duration": 71768640,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$20",
      "offset": 22
    }
  ],
  "location": "UserStory3Steps.iMoveTheSliderTo(String)"
});
formatter.result({
  "duration": 121245124,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$16 -$20",
      "offset": 31
    }
  ],
  "location": "UserStory3Steps.thePriceRangeIsChangedTo(String)"
});
formatter.result({
  "duration": 49375805,
  "error_message": "org.junit.ComparisonFailure: Incorrect price range on the summer dress page expected:\u003c$16[ -$2]0\u003e but was:\u003c$16[.00 - $32.0]0\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat stepDefinitions.UserStory3Steps.thePriceRangeIsChangedTo(UserStory3Steps.java:33)\n\tat ✽.Then the price range is changed to \"$16 -$20\"(UserStory3.feature:16)\n",
  "status": "failed"
});
formatter.after({
  "duration": 98972122,
  "status": "passed"
});
formatter.before({
  "duration": 3977896074,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Search results are updated",
  "description": "",
  "id": "user-story-3;search-results-are-updated",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "I navigate to summer dresses from menu WOMAN",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "the price range is \"$16.00 - $32.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I move the slider to \"$20\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "the search results are updated",
  "keyword": "Then "
});
formatter.match({
  "location": "UserStory2Steps.iNavigateToSummerDressesFromMenuWOMAN()"
});
formatter.result({
  "duration": 2221701237,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$16.00 - $32.00",
      "offset": 20
    }
  ],
  "location": "UserStory3Steps.thePriceRangeIs(String)"
});
formatter.result({
  "duration": 64280115,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$20",
      "offset": 22
    }
  ],
  "location": "UserStory3Steps.iMoveTheSliderTo(String)"
});
formatter.result({
  "duration": 148855312,
  "status": "passed"
});
formatter.match({
  "location": "UserStory3Steps.theSearchResultsAreUpdated()"
});
formatter.result({
  "duration": 66946433,
  "error_message": "java.lang.AssertionError: Incorrect search count on summer dresses\nExpected: a string containing \"Showing 1 of 1 items\"\n     but: was \"Showing 1 - 3 of 3 items\"\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat stepDefinitions.UserStory3Steps.theSearchResultsAreUpdated(UserStory3Steps.java:38)\n\tat ✽.Then the search results are updated(UserStory3.feature:22)\n",
  "status": "failed"
});
formatter.after({
  "duration": 96461717,
  "status": "passed"
});
formatter.before({
  "duration": 4411183739,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Items returned are within price range",
  "description": "",
  "id": "user-story-3;items-returned-are-within-price-range",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "I navigate to summer dresses from menu WOMAN",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "the price range is \"$16.00 - $32.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I move the slider to \"$20\"",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "the items returned are within price range",
  "keyword": "Then "
});
formatter.match({
  "location": "UserStory2Steps.iNavigateToSummerDressesFromMenuWOMAN()"
});
