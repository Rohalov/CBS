internal class Program
{
    private static void Main(string[] args)
    {
        var userInput = GetUserInput();
        var fibNumbers = GetFibonachiNumbers(userInput);
        ShowNumbers(fibNumbers);
        fibNumbers = GetFibNumWithReqursive(userInput);
        ShowNumbers(fibNumbers);
    }


    private static List<int> GetFibNumWithReqursive(int userInput)
    {
        List<int> fib = new List<int>();
        int n1 = 0,
            n2 = 1;
        fib.Add(n1);
        if (userInput > 0)
        {
            fib.Add(n2);
        }
        GetFibNum(n1, n2, ref fib, userInput);
        return fib;
    }

    private static void GetFibNum(int n1, int n2, ref List<int> fib, int userInput)
    {
        if (n1 + n2 <= userInput)
        {
            fib.Add(n1 + n2);
            GetFibNum(n2, n1 + n2, ref fib, userInput);
        }
    }

    private static List<int> GetFibonachiNumbers(int userInput)
    {
        List<int> numbers = new List<int>();
        int n1 = 0,
            n2 = 1,
        currNum = 1;
        numbers.Add(n1);
        for (int i = 0; currNum <= userInput; i++)
        {
            numbers.Add(currNum);
            currNum = n1 + n2;
            n1 = n2;
            n2 = currNum;
        }
        return numbers;
    }

    private static int GetUserInput()
    {
        Console.WriteLine("Enter number");
        var result = Convert.ToInt32(Console.ReadLine());
        return result;
    }
    private static void ShowNumbers(List<int> numbers)
    {
        foreach (int n in numbers)
        {
            Console.Write(n + " ");
        }
        Console.WriteLine();
    }
}