

internal class Program
{
    private static void Main(string[] args)
    {
        int[] numbers = { 1, 2, 3, 4, 4, 56 };

        numbers = RemoveDuplicates(numbers);
        foreach (int i in numbers)
        {
            Console.Write(i + "  ");
        }
    }

    private static int[] RemoveDuplicates(int[] numbers)
    {
        int[] result = new int[numbers.Length];
        result[0] = numbers[0];
        int index = 1;
        for (int i = 1; i < numbers.Length; i++)
        {
            if (numbers[i - 1] != numbers[i])
            {
                result[index] = numbers[i];
                index++;
            }
        }
        int[] unique = new int[index];
        Array.Copy(result, unique, index);
        return unique;
    }

}