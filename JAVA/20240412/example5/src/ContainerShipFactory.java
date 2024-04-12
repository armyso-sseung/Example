public class ContainerShopFactory extends ShipFactory {
    private ContainerShopFactory() {}
    private static class SingleInstanceHolder {
        private static final ContainerShopFactory INSTANCE = new ContainerShopFactory();
    }

    public static ContainerShopFactory getInstance() {
        return SingleInstanceHolder.INSTANCE;
    }

    @Override
    protected Ship createShip() {
        return new ContainerShip("ContainerShip", "green", "20t");
    }
}
