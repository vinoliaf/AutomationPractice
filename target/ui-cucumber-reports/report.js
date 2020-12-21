$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("UserStory1.feature");
formatter.feature({
  "line": 1,
  "name": "User Story 1",
  "description": "As a user if there is an item already inside my basket\nI want to be able to delete the item from the basket page\nSo that I can see the basket is empty\n\nACC\nShopping cart has delete button\nitem is removed from basket /cart\nbanner must display your shopping cart it empty",
  "id": "user-story-1",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4649676009,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "user able to delete an item from shopping cart",
  "description": "",
  "id": "user-story-1;user-able-to-delete-an-item-from-shopping-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@FeatureAutomationTest"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I have an item already in my shopping basket",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I go to shopping basket",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I delete an item",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "the item has to be removed from my shopping cart",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "a banner saying \"Your shopping cart is empty.\" is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "UserStory1Steps.iHaveAnItemAlreadyInMyShoppingBasket()"
});
formatter.result({
  "duration": 1520275531,
  "status": "passed"
});
formatter.match({
  "location": "UserStory1Steps.iGoToShoppingBasket()"
});
formatter.result({
  "duration": 2557159213,
  "status": "passed"
});
formatter.match({
  "location": "UserStory1Steps.iDeleteAnItem()"
});
formatter.result({
  "duration": 82038199,
  "status": "passed"
});
formatter.match({
  "location": "UserStory1Steps.theItemHasToBeRemovedFromMyShoppingCart()"
});
formatter.result({
  "duration": 23762,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your shopping cart is empty.",
      "offset": 17
    }
  ],
  "location": "UserStory1Steps.aBannerSayingIsDisplayed(String)"
});
formatter.result({
  "duration": 1792278631,
  "status": "passed"
});
formatter.after({
  "duration": 92767347,
  "status": "passed"
});
});