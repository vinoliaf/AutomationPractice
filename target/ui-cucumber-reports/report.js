$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("UserStory1.feature");
formatter.feature({
  "line": 1,
  "name": "User Story 1",
  "description": "As a user if there is an item already inside my basket\nI want to be able to delete the item from the basket page\nSo that I can see the basket is empty\n\nACC\nShopping cart has delete button\nitem is removed from basket /cart\nbanner must display your shopping cart it empty",
  "id": "user-story-1",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4821063131,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Delete button is present on the shopping cart",
  "description": "",
  "id": "user-story-1;delete-button-is-present-on-the-shopping-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@FeatureAutomationTest"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I have an item already in my shopping basket",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I go to shopping basket",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should see a delete button",
  "keyword": "Then "
});
formatter.match({
  "location": "UserStory1Steps.iHaveAnItemAlreadyInMyShoppingBasket()"
});
formatter.result({
  "duration": 2429593264,
  "status": "passed"
});
formatter.match({
  "location": "UserStory1Steps.iGoToShoppingBasket()"
});
formatter.result({
  "duration": 2114652177,
  "status": "passed"
});
formatter.match({
  "location": "UserStory1Steps.iShouldSeeADeleteButton()"
});
formatter.result({
  "duration": 68394672,
  "status": "passed"
});
formatter.after({
  "duration": 91343004,
  "status": "passed"
});
});