package stepDefinitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.support.PageFactory;
import pageObjects.IndexPage;

import java.util.logging.Logger;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

public class UserStory1Steps {

    private IndexPage indexPage = PageFactory.initElements(IndexPage.driver, IndexPage.class);
    public static Logger log = Logger.getLogger(String.valueOf(UserStory1Steps.class));


    @Given("^I have an item already in my shopping basket$")
    public void iHaveAnItemAlreadyInMyShoppingBasket() throws Throwable {
        indexPage.selectAnyDress();
        indexPage.clickAddToCart();
        log.info("");
    }

    @When("^I go to shopping basket$")
    public void iGoToShoppingBasket() throws Throwable {
        indexPage.proceedToCheckout();
    }


    @Then("^I should see a delete button$")
    public void iShouldSeeADeleteButton() throws Throwable {
        assertTrue("The delete button on shopping cart does not present", indexPage.isShoppingCartDeletePresent());
    }

    @When("^I delete an item$")
    public void iDeleteAnItem() throws Throwable {
        indexPage.deleteAnItem();
    }

    @Then("^the item has to be removed from my shopping cart$")
    public void theItemHasToBeRemovedFromMyShoppingCart() throws Throwable {
//        assertFalse("The cart summary is present after deleting all the items", indexPage.isCartSummaryPresent());

    }

    @And("^a banner saying \"([^\"]*)\" is displayed$")
    public void aBannerSayingIsDisplayed(String alertText) throws Throwable {
        assertEquals("Incorrect banner text on shopping cart", alertText , indexPage.cartAlertText() );
    }

}
