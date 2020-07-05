Test Automation For Carcheck test
Framework Design Approach
Behaviour driven developemnt(BDD) approach using Selenuim-cucumber was used to write the automation test scripts.
Page Object Model is the design pattern used to create Object Repository for web UI elements.With the help of PageFactory class, we use annotations @FindBy to find WebElement. We use initElements method to initialize web elements.

For UI Tests : Selenium-cucumber-Maven with PageFactory Design Pattern.

Tools And Environment
IntelliJ IDEA 2016
Java-11
Maven-3.5.3
Enable cucumber-java plugin in IntelliJ
Required driver versions (Chrome-v83.0.4103.39 & Gecko-v0.26.0)
Required browsers (Chrome-v83.0.4103.116 & Firefox-v77.0.1)
Operating system: Windows(64-bit) and MAC OS


Steps to run the tests
Please make sure to have all the tools and libraries mentioned in the "Tools And Environment" section.

Step-1: Import the project into intellij

Step-2: Use the following maven commands to run the tests.

"mvn test" executes RunTest
mvn test -Dcucumber.options="--tags" to run the tests
or
select RunTest from intellij 


readFile - reads the input file (car_input.txt)
readFileInList - reads the output file(car_output.txt)
taxcheckContent - List of info from the website
outputFile - List made from the output file

Method match patterns has the regex patterns which can be used for adding further more patterns.

The List from the website is compared to the List from the output file and only the difference
i.e the record does not match is highlighted.There will be one failed test.