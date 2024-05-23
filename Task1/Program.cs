using Task1;

internal class Program
{
    private static void Main(string[] args)
    {
        Console.WriteLine("Enter text");
        var input = Console.ReadLine();
        Parser parser = new Parser();
        parser.Parse(input);
    }
}