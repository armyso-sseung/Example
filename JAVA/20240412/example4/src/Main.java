public class Main {
    public static void main(String[] args) {
        Ship containerShip = ContainerShipFactory.getInstance().orderShip("armyso9506@gmail.com");
        System.out.println(containerShip);

        Ship oilTankerShip = OilTankerShipFactory.getInstance().orderShip("armyso9506@plateer.com");
        System.out.println(oilTankerShip);
    }
}