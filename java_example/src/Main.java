import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Integer> lottoList = new ArrayList<>();

        while (true) {
            int num = (int) ((Math.random() * 45) + 1);
            if ( !lottoList.contains(num) ) {
                lottoList.add(num);
            }

            if ( lottoList.size() == 6 ) { break; }
        }

        System.out.println("Lotto ==> " + Arrays.asList(lottoList));
    }
}