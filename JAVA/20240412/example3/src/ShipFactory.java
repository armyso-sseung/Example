public abstract class ShipFactory {
    final Ship orderShip(String email) {
        validate(email);
        Ship ship = createShip();

        sendEmail(email, ship);
        return ship;
    }

    private void validate(String email) {
        if (email == null) {
            throw new IllegalArgumentException("이메일이 올바르지 않습니다.");
        }
    }

    private void sendEmail(String email, Ship ship) {
        System.out.println(ship.name + "이 정상적으로 만들어져 " + email + "으로 정상적으로 메일을 발송하였습니다.");
    }

    abstract protected Ship createShip();
}
