package stepDefinitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.support.PageFactory;
import pageObjects.CreateAnAccountPage;
import pageObjects.IndexPage;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.IsCollectionContaining.hasItem;
import static org.junit.Assert.assertEquals;

public class UserStory4Steps {

    private CreateAnAccountPage createAnAccountPage = PageFactory.initElements(CreateAnAccountPage.driver, CreateAnAccountPage.class);

    @Given("^I am on the create account page with random email address$")
    public void iAmOnTheCreateAccountPageWithRandomEmailAddress() throws Throwable {
        createAnAccountPage.gotoCreateAccountPage();
        assertEquals("Have not landed on the create account page", "CREATE AN ACCOUNT",createAnAccountPage.getPageHeader() );
    }

    @And("^title as \"([^\"]*)\"$")
    public void titleAs(String title) throws Throwable {
        createAnAccountPage.selectTitle(title);
    }


    @And("^first name as \"([^\"]*)\"$")
    public void firstNameAs(String name) throws Throwable {
        createAnAccountPage.enterFirstName(name);
    }

    @And("^last name as \"([^\"]*)\"$")
    public void lastNameAs(String name) throws Throwable {
        createAnAccountPage.enterLastName(name);
    }

    @And("^password as \"([^\"]*)\"$")
    public void passwordAs(String pass) throws Throwable {
        createAnAccountPage.enterPassword(pass);

    }

    @And("^date of Birth as \"([^\"]*)\"$")
    public void dateOfBirthAs(String date) throws Throwable {
        createAnAccountPage.enterDOB(date);
    }

    @And("^sign in for newspaper as \"([^\"]*)\"$")
    public void signInForNewspaperAs(String newsletter) throws Throwable {
        createAnAccountPage.optInNewsLetters(newsletter);
    }


    @And("^opt in for offers as \"([^\"]*)\"$")
    public void optInForOffersAs(String specialOffer) throws Throwable {
        createAnAccountPage.optInSpecialOffers(specialOffer);
    }

    @And("^address as \"([^\"]*)\"$")
    public void addressAs(String address) throws Throwable {
        createAnAccountPage.enterAddress(address);
    }


    @And("^city as \"([^\"]*)\"$")
    public void cityAs(String city) throws Throwable {
        createAnAccountPage.enterCity(city);
    }

    @And("^state as \"([^\"]*)\"$")
    public void stateAs(String state) throws Throwable {
        createAnAccountPage.enterState(state);
    }

    @And("^postalCode as \"([^\"]*)\"$")
    public void postalcodeAs(String postCode) throws Throwable {
        createAnAccountPage.enterPCode(postCode);
    }

    @And("^country as \"([^\"]*)\"$")
    public void countryAs(String country) throws Throwable {
        createAnAccountPage.enterCountry(country);
    }

    @And("^mobilePhone as \"([^\"]*)\"$")
    public void mobilephoneAs(String number) throws Throwable {
        createAnAccountPage.enterMobileNumber(number);
    }

    @When("^I create an account$")
    public void iCreateAnAccount() throws Throwable {
       createAnAccountPage.submitAccount();
    }

    @Then("^an account is created$")
    public void anAccountIsCreated() throws Throwable {
        createAnAccountPage.waitForMyAccountsPage();
        assertEquals("Have not landed on my account page", "MY ACCOUNT",createAnAccountPage.getPageHeader() );
    }

    @Then("^an \"([^\"]*)\" message is displayed$")
    public void anMessageIsDisplayed(String errorMessage) throws Throwable {
        assertThat(createAnAccountPage.getErrors(), hasItem(errorMessage));

    }

    @Then("^I am on my account page$")
    public void iAmOnMyAccountPage() throws Throwable {
        createAnAccountPage.waitForMyAccountsPage();
        assertEquals("Have not landed on my account page", "MY ACCOUNT",createAnAccountPage.getPageHeader() );
    }

    @Then("^I can see account name on top right$")
    public void iCanSeeAccountNameOnTopRight() throws Throwable {
        assertEquals("Have incorrect name on my account page", "MY ACCOUNT",createAnAccountPage.getPageHeader() );
    }

    @Then("^I can see account name on top right \"([^\"]*)\"$")
    public void iCanSeeAccountNameOnTopRight(String fullname) throws Throwable {
        assertEquals("Have incorrect name on my account page", fullname,createAnAccountPage.getAccountName() );

    }

}
