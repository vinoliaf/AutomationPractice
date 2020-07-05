package helpers;

import java.io.*;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Properties;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Utils {
    public static String fs = File.separator;
    public static HashMap<String, List<String>> context = new HashMap<String, List<String>>();

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

    public static String readFile(String fileName) throws IOException {
        BufferedReader br = new BufferedReader(new FileReader(fileName));
        try {
            StringBuilder sb = new StringBuilder();
            String line = br.readLine();
            while (line != null) {
                sb.append(line);
                sb.append("\n");
                line = br.readLine();
            }
            return sb.toString();
        } finally {
            br.close();
        }
    }

    public static List<String> readFileInList(String fileName) throws IOException {
        List<String> content = new ArrayList<String>();
        BufferedReader br = new BufferedReader(new FileReader(fileName));
        try {
            String line = br.readLine();
            while (line != null) {
                content.add(line);
                line = br.readLine();
            }
            return content;
        } finally {
            br.close();
        }
    }

    public static List<String> matchPatterns(String fileContent) throws IOException {
        List<String> listOfRegNumbers = new ArrayList<String>();
        List<String> patterns = new ArrayList<>();
        patterns.add("\\s[A-Z][A-Z]\\d\\d[A-Z][A-Z][A-Z]");
        patterns.add("\\s[A-Z][A-Z]\\d\\d\\s[A-Z][A-Z][A-Z]");
        for (int i = 0; i < patterns.size(); i++) {
            Pattern p = Pattern.compile(patterns.get(i));
            boolean found = p.matcher(fileContent).lookingAt();
            Matcher matcher = p.matcher(fileContent);
            while (matcher.find()) {
                listOfRegNumbers.add(matcher.group(0).trim());
            }
        }
        return listOfRegNumbers;
    }

    public static void setContext(String key, List<String> value) {
        context.put(key, value);
    }

    public static List<String> getContext(String key) {
        return context.get(key);
    }


}

