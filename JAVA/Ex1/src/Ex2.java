import java.util.List;
import java.util.Scanner;

public class Ex2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        List<String> fruits = List.of("수박", "참외", "사과", "딸기", "오렌지", "바나나", "포도");

        System.out.print("과일을 입력해주시기 바랍니다.\n답변: ");
        fuitFun(sc.nextLine(), fruits);

        
    }

    public static void fuitFun( String answer, List<String> fruits ) {
        if ( fruits.contains(answer) ) {
            System.out.print(answer + " is fruit");
        } else {
            System.out.print("This is not fruit");
        }
    }
}