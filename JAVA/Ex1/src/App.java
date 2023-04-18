public class App {
    public int x;
    public int y;

    public App() {
        System.out.println("Plateer");
    }

    public App( int num1, int num2 ) {
        this.x = num1;
        this.y = num2;
    }

    public void plateer() {
        this.x = 20;
        this.y = 50;
    }

    public static void main(String[] args) {
        App example1 = new App(10, 20);
        App example2 = new App();
        example1.plateer();
        example2.plateer();
    }
}
