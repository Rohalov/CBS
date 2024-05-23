using System.Collections.Generic;

namespace Task1
{
    public class Parser : IParser
    {
        public void Parse(string input)
        {
            var words = input.Split(' ');

            int sorted = 0, length = 1;
            while (sorted < words.Length)
            {
                var w = words.Where(x => x.Length == length).ToList();

                if (w.Count > 0)
                {
                    Console.WriteLine($"Words of length: {length}, Count: {w.Distinct().Count()}");
                }

                foreach (var value in w.Distinct())
                {
                    Console.WriteLine(value);
                }

                sorted += w.Count;
                length++;
            }
        }
    }
}
