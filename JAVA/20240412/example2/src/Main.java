public class Main {
    public static void main(String[] args) {
        Ship container = ContainerShipFactory.getInstance().orderShip("armyso9506@gmail.com");
        System.out.println(container);

        Ship oilTanker = OilTankerShipFactory.getInstance().orderShip("armyso9506@plateer.com");
        System.out.println(oilTanker);
    }
}