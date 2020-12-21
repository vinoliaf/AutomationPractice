package stepDefinitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.openqa.selenium.support.PageFactory;
import pageObjects.IndexPage;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.StringContains.containsString;
import static org.junit.Assert.assertEquals;

public class UserStory2Steps {

    private IndexPage indexPage = PageFactory.initElements(IndexPage.driver, IndexPage.class);

    @Then("^I navigate to summer dresses from menu WOMAN$")
    public void iNavigateToSummerDressesFromMenuWOMAN() throws Throwable {
        indexPage.navigateToSummerDresses();

    }

    @Given("^I am on the home page$")
    public void iAmOnTheHomePage() throws Throwable {

    }

    @Then("^I landed on the summer dresses page$")
    public void iLandedOnTheSummerDressesPage() throws Throwable {
        assertEquals("Incorrect banner text on shopping cart", "SUMMER DRESSES " , indexPage.summerDressesPageHeadingText() );
    }

    @Then("^I could see the items are displayed inside the search results$")
    public void iCouldSeeTheItemsAreDisplayedInsideTheSearchResults() throws Throwable {
        assertThat("Incorrect search count on summer dresses" ,indexPage.searchCountText(), containsString("Showing 1 - 3 of 3 items"));
    }
}
