package helpers;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import stepDefinitions.Hooks;

import java.io.FileInputStream;
import java.io.IOException;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.List;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

public class Utils extends Hooks {
    public static HashMap<String, List<String>> context = new HashMap<String, List<String>>();

    public Utils() throws IOException {
    }

    /**
     * This is the method to read the config.properties file
     */
    public static Properties readPropertiesFile() throws IOException {
        String path = "src/test/resources/config.properties";
        String configPath = Paths.get(path).toAbsolutePath().toString();
        FileInputStream fis;
        fis = new FileInputStream(configPath);
        Properties property = new Properties();
        property.load(fis);
        return property;
    }

    public void waitForElement(WebElement element, long seconds) {
        WebDriverWait wait = new WebDriverWait(driver, seconds);
        wait.until(ExpectedConditions.elementToBeClickable(element));
    }

    public void implicitWait(){
        driver.manage().timeouts().implicitlyWait(200, TimeUnit.SECONDS);
    }


    public void waitForFrame(WebElement frame) {
        WebDriverWait wait=new WebDriverWait(driver, 20);
        wait.until(ExpectedConditions.frameToBeAvailableAndSwitchToIt(frame));
    }

    public static void setContext(String key, List<String> value) {
        context.put(key, value);
    }

    public static List<String> getContext(String key) {
        return context.get(key);
    }


}

