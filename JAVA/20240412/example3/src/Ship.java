public class Ship {
    String name;
    String color;
    String capacity;

    public String toString() {
        return String.format("Ship { name: '%s', color: '%s', logo: '%s' }\n", name, color, capacity);
    }
}
