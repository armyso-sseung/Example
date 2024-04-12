public abstract class ShipFactory {
    final Ship orderShip(String email) {
        validate(email);
        Ship ship = createShip();

        sendMail(email, ship);
        return ship;
    }

    private void validate(String email) {
        if (email == null) {
            throw new IllegalArgumentException("이메일 정보를 확인해주세요.");
        }
    }

    private void sendMail(String email, Ship ship) {
        System.out.println(ship.name + "가 완료되어 " + email + "로 메일을 전송하였습니다.");
    }

    abstract protected Ship createShip();
}