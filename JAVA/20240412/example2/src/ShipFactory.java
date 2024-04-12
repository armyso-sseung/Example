public abstract class ShipFactory {
    final Ship orderShip(String email) {
        validate(email);
        Ship ship = createShip();

        sendEmail(email, ship);
        return ship;
    }

    private void validate(String email) {
        if (email == null) {
            throw new IllegalArgumentException("이메일을 확인해주시기 바랍니다.");
        }
    }

    private void sendEmail(String email, Ship ship) {
        System.out.println(ship.name + "이 정상적으로 만들어져 " + email + "로 메일을 보냈습니다.");
    }

    abstract protected Ship createShip();
}
