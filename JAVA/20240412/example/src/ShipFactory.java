public abstract class ShipFactory {
    final Ship orderShip(String email) {
        validate(email);

        Ship ship = createShip();
        sendEmail(email, ship);
        return ship;
    }

    abstract protected Ship createShip();

    private void validate(String email) {
        if (email == null) {
            throw new IllegalArgumentException("이메일을 입력해주세요.");
        }
    }

    private void sendEmail(String email, Ship ship) {
        System.out.println(ship.name + "이 완성 되었습니다. " + email + "로 메일 전송이 완료되었습니다.");
    }
}
