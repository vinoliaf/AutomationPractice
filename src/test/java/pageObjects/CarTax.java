package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import stepDefinitions.Hooks;

import java.io.IOException;

public class CarTax extends Hooks {
    public CarTax() throws IOException {
    }

    @FindBy(how = How.ID, using = "vrm-input")
    public static WebElement vrmText;

    @FindBy(how = How.CSS, using = "form button")
    public static WebElement freeCarCheckButton;


    public void navigateTo(String url) {
        driver.navigate().to(url);
    }

    public void enterVRM(String VRM) {
        vrmText.sendKeys(VRM);
    }

    public void clickFreeCarCheckButton() {
        freeCarCheckButton.click();
    }
}
