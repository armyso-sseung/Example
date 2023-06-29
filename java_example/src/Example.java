import java.util.Scanner;

public class Main {
    private static int plus(int x, int y) {
        return x + y;
    }

    private static int minus(int x, int y) {
        return x - y;
    }

    private static int mul(int x, int y) {
        return x * y;
    }

    private static int div(int x, int y) {
        return x / y;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        while ( true ) {
            System.out.print("\n\n계산기 프로그램 입니다.\n아래 보기에서 연산을 골라주세요.\n\n1.더하기\n2.빼기\n3.곱하기\n4.나누기\n5.프로그램 종료\n\n=> ");
            int answer = sc.nextInt();

            if (answer == 5) { break; }

            System.out.println("\n\n숫자를 입력해주세요\n");
            System.out.print("첫번째 숫자 : ");
            int x = sc.nextInt();
            System.out.print("두번째 숫자 : ");
            int y = sc.nextInt();

            System.out.println("\n\n");
            switch (answer) {
                case 1: {
                    System.out.println("더하기 결과 : " + plus(x, y));
                    break;
                }
                case 2: {
                    System.out.println("빼기 결과 : " + minus(x, y));
                    break;
                }
                case 3: {
                    System.out.println("곱하기 결과 : " + mul(x, y));
                    break;
                }
                case 4: {
                    System.out.println("나누기 결과 : " + div(x, y));
                    break;
                }
            }
        }
    }
}