import java.util.Scanner;

public class Example {
    private static int plus(int x, int y) { return x + y; }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("\n\n숫자를 입력해주세요\n");

        System.out.print("첫번째 숫자 : ");
        int x = sc.nextInt();
        System.out.print("두번째 숫자 : ");
        int y = sc.nextInt();

        System.out.println("더하기 결과: " + plus(x, y));
    }
}