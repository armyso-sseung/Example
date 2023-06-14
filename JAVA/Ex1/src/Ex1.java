class Ex1 {
    String name;
    String age;
    String addr;
    
    public Ex1 () {
        this.name = "미입력";
        this.age = "미입력";
        this.addr = "미입력";
    }

    public Ex1 (String name) {
        this.name = name;
        this.age = "미입력";
        this.addr = "미입력";
    }

    public Ex1 (String name, String age) {
        this.name = name;
        this.age = age;
        this.addr = "미입력";
    }

    public Ex1 (String name, String age, String addr) {
        this.name = name;
        this.age = age;
        this.addr = addr;
    }

    
}
