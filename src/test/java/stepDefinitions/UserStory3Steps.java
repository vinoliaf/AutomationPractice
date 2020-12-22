package stepDefinitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.support.PageFactory;
import pageObjects.IndexPage;

import java.io.IOException;
import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.StringContains.containsString;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

public class UserStory3Steps {
    private IndexPage indexPage = PageFactory.initElements(IndexPage.driver, IndexPage.class);

    @And("^the price range is \"([^\"]*)\"$")
    public void thePriceRangeIs(String price) {
        assertEquals("Incorrect price range on the summer dress page", price, indexPage.getPriceRange());
    }

    @And("^I move the slider to \"([^\"]*)\"$")
    public void iMoveTheSliderTo(String price) {
        indexPage.moveSlider();
    }

    @Then("^the price range is changed to \"([^\"]*)\"$")
    public void thePriceRangeIsChangedTo(String price) {
        assertEquals("Incorrect price range on the summer dress page", price, indexPage.getPriceRange());
    }

    @Then("^the search results are updated$")
    public void theSearchResultsAreUpdated() throws Throwable {
        assertThat("Incorrect search count on summer dresses", indexPage.searchCountText(), containsString("Showing 1 of 1 items"));
    }

    @Then("^the items returned are within price range$")
    public void theItemsReturnedAreWithinPriceRange() throws Throwable {
        List<Integer> itemsPriceList = indexPage.priceList();
        itemsPriceList.stream().forEach(i->{
            assertTrue(i.intValue() > 16 && i.intValue() < 20);
        });

    }
}
