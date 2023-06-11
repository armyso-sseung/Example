class ClassP {
    int func1(int a, int b) {
        return a+b;
    }

    int func2(int a, int b) {
        return a-b;
    }

    int func3(int a, int b) {
        return a*b;
    }
}

public class ClassA extends ClassP {
    int func1 (int a, int b) {
        return a%b;
    }

    double func2 (double a, double b) {
        return a*b;
    }

    int func3 (int a, int b) {
        return a/b;
    }

    public static void main(String[] args) {
        ClassP p = new ClassA();
        System.out.print(p.func1(5, 2) + ", " + p.func2(5, 2) + ", " + p.func3(5, 2));
    }
}