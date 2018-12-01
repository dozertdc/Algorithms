public class FibonacciBasic {
    
    public int fib(int n) {
        // terminating conditions
        if (n <= 0) {
            return 0;
        } else if (n == 1) {
            return 1;
        } else {
            // recursive calls
            return fib(n - 1) + fib(n - 2);
        }
    }

}
