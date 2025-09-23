// // Interface
// interface Animal {
//     void eat();   // abstract method
//     void sleep();
// }

// Class implementing interface
class Dog {
    // Providing body for eat()
    public void eat() {
        System.out.println("Dog is eating...");
    }

    // Providing body for sleep()
    public void sleep() {
        System.out.println("Dog is sleeping...");
    }
}

public class InterfaceExample {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.eat();
        d.sleep();
    }
}
