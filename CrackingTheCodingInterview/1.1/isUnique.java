import java.util.HashMap;

public class OnePointOne {
    //Implement an algorithm to determine if a string has all unique characters.

    public static Boolean isUnique(String input){
        String[] inputArray = input.split("");
        HashMap<String, Boolean> charMap = new HashMap<>();
        int inputArrayLength = inputArray.length;
        for(int i=0; i<inputArrayLength; i++){
            if(charMap.get(inputArray[i]) == null){
                charMap.put(inputArray[i], true);
            }else{
                return false;
            }
        }
        return true;
    }

    //use main to test
    public static void main(String[] args){
        System.out.println(OnePointOne.isUnique("abc"));
        System.out.println(OnePointOne.isUnique("pancakes"));
    }
}
