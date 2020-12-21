package stepDefinitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.openqa.selenium.support.PageFactory;
import pageObjects.IndexPage;

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
        assertEquals("Incorrect banner text on shopping cart", "SUMMER DRESSES" , indexPage.summerDressesPageHeadingText() );

    }
}
