const testCases = [
  {
    name: "cpp : hello world",
    reqObject: {
      language: "cpp",
      script:
        "#include<bits/stdc++.h>\n" +
        "using namespace std;\n" +
        "int main(){\n" +
        '    cout << "hello world";\n' +
        "return 0;\n" +
        "}\n",
    },
    expectedResponse: {
      val: "hello world",
      status: 200,
      error: 0,
    },
  },
  {
    name: "cpp : print stdin",
    reqObject: {
      language: "cpp",
      script:
        "#include<bits/stdc++.h>\n\n" +
        "using namespace std;\n" +
        "int main(){\n\n" +
        "    int a;\n" +
        "    while(cin >> a){\n" +
        "        cout << a << endl;\n" +
        "    }\n" +
        "    return 0;\n\n" +
        "}\n",
      stdin: "1 2 3",
    },
    expectedResponse: {
      val: "1\n2\n3\n",
      status: 200,
      error: 0,
    },
  },
  {
    name: "nodejs : hello world",
    reqObject: {
      language: "nodejs",
      script: "console.log('hello world')",
    },
    expectedResponse: {
      val: "hello world\n",
      status: 200,
      error: 0,
    },
  },
  {
    name: "nodejs : print stdin",
    reqObject: {
      language: "nodejs",
      script:
        "process.stdin.setEncoding('utf8'); \n " +
        "process.stdin.on('data', (input) => { \n " +
        "  console.log(input); \n " +
        " \n " +
        "}); \n ",
      stdin: "1 2 3",
    },
    expectedResponse: {
      val: "1 2 3\n",
      status: 200,
      error: 0,
    },
  },
  {
    name: "python : hello world",
    reqObject: {
      language: "python",
      script: "print('hello world')",
    },
    expectedResponse: {
      val: "hello world\n",
      status: 200,
      error: 0,
    },
  },
  {
    name: "python : print stdin",
    reqObject: {
      language: "python",
      script:
        "try:\n" +
        "    while(True):\n" +
        "        line = input()\n" +
        "        if not line:\n" +
        "            break\n" +
        "        print(line)\n" +
        "except EOFError:\n" +
        "    pass",
      stdin: "1 2 3",
    },
    expectedResponse: {
      val: "1 2 3\n",
      status: 200,
      error: 0,
    },
  },
  {
    name: "c : hello world",
    reqObject: {
      language: "c",
      script:
        "#include<stdio.h>\n\n" +
        "int main(){\n\n" +
        '    printf("hello world");\n' +
        "    return 0;\n" +
        "}\n",
    },
    expectedResponse: {
      val: "hello world",
      status: 200,
      error: 0,
    },
  },
  {
    name: "c : print stdin",
    reqObject: {
      language: "c",
      script:
        "#include <stdio.h>\n" +
        "int main() {\n" +
        "    int number;\n" +
        '    while (scanf("%d", &number) == 1) {\n' +
        '        printf("%d\\n", number);\n' +
        "    } \n" +
        "    return 0;\n" +
        "}",
      stdin: "1 2 3",
    },
    expectedResponse: {
      val: "1\n2\n3\n",
      status: 200,
      error: 0,
    },
  },
  {
    name: "java : print stdin",
    reqObject: {
      language: "java",
      script:
        "import java.util.Scanner;\n" +
        "public class Solution {\n" +
        "    public static void main(String[] args) {\n" +
        '        System.out.println("hello world");\n' +
        "    }\n" +
        "}\n",
    },
    expectedResponse: {
      val: "hello world\n",
      status: 200,
      error: 0,
    },
  },
  {
    name: "java : print stdin",
    reqObject: {
      language: "java",
      script:
        "import java.util.Scanner;\n" +
        "public class Solution {\n" +
        "    public static void main(String[] args) {\n" +
        "        Scanner scanner = new Scanner(System.in);\n" +
        "        while (scanner.hasNextInt()) {\n" +
        "            int number = scanner.nextInt();\n" +
        "            System.out.println(number);\n" +
        "        } \n" +
        "        scanner.close();\n" +
        "    }\n" +
        "}\n",
      stdin: "1 2 3",
    },
    expectedResponse: {
      val: "1\n2\n3\n",
      status: 200,
      error: 0,
    },
  },
  {
    name: "ruby : print hello world",
    reqObject: {
      language: "ruby",
      script: 'print "hello world"',
    },
    expectedResponse: {
      val: "hello world",
      status: 200,
      error: 0,
    },
  },
  {
    name: "ruby : print stdin",
    reqObject: {
      language: "ruby",
      script: "user_input = gets.chomp\n" + "puts user_input",
      stdin: "10\n",
    },
    expectedResponse: {
      val: "10\n",
      status: 200,
      error: 0,
    },
  },

  // TASK 2 : Additional test cases for the given languages.

  {
    name: "cpp : sum of two numbers",
    reqObject: {
      language: "cpp",
      script:
        "#include<bits/stdc++.h>\n" +
        "using namespace std;\n" +
        "int main(){\n" +
        "    int a, b;\n" +
        "    cin >> a >> b;\n" +
        "    cout << a + b;\n" +
        "    return 0;\n" +
        "}\n",
      stdin: "2 3",
    },
    expectedResponse: {
      val: "5",
      status: 200,
      error: 0,
    },
  },

  {
    name: "nodejs : reverse string",
    reqObject: {
      language: "nodejs",
      script:
        'const readline = require("readline");\n' +
        "const rl = readline.createInterface({\n" +
        "  input: process.stdin,\n" +
        "  output: process.stdout\n" +
        "});\n" +
        'rl.on("line", (input) => {\n' +
        '  console.log(input.split("").reverse().join(""));\n' +
        "  rl.close();\n" +
        "});\n",
      stdin: "world",
    },
    expectedResponse: {
      val: "dlrow\n",
      status: 200,
      error: 0,
    },
  },

  {
    name: "python : large output",
    reqObject: {
      language: "python",
      script: "for i in range(100000):\n" + '    print(i, end=" ")',
    },
    expectedResponse: {
      val: Array.from({ length: 100000 }, (_, i) => i).join(" ") + " ",
      status: 200,
      error: 0,
    },
  },

  {
    name: "c : syntax error",
    reqObject: {
      language: "c",
      script:
        "#include<stdio.h>\n\n" +
        "int main(){\n" +
        '    printf("hello world");\n',
    },
    expectedResponse: {
      val: "error: expected '}' at end of input",
      status: 200,
      error: 1,
    },
  },

  {
    name: "java : syntax error",
    reqObject: {
      language: "java",
      script:
        "public class Solution {\n" +
        "    public static void main(String[] args) {\n" +
        '        System.out.println("hello world"\n' +
        "    }\n" +
        "}\n",
    },
    expectedResponse: {
      val: "Error: reached end of file while parsing",
      status: 200,
      error: 1,
    },
  },

  {
    name: "ruby : large output",
    reqObject: {
      language: "ruby",
      script: "for i in 0..99999\n" + '    print "#{i} "\n' + "end",
    },
    expectedResponse: {
      val: Array.from({ length: 100000 }, (_, i) => i).join(" ") + " ",
      status: 200,
      error: 0,
    },
  },

  //TASK 1: Support for 3 additional languages, including tests.
  // PHP Test Cases
  {
    name: "php : hello world",
    reqObject: {
      language: "php",
      script: '<?php echo "hello world"; ?>',
    },
    expectedResponse: {
      val: "hello world",
      status: 200,
      error: 0,
    },
  },

  {
    name: "php : print stdin",
    reqObject: {
      language: "php",
      script:
        "<?php\n" +
        '$input = fopen("php://stdin", "r");\n' +
        "while ($line = fgets($input)) {\n" +
        "    echo $line;\n" +
        "}\n" +
        "fclose($input);\n" +
        "?>",
      stdin: "1 2 3",
    },
    expectedResponse: {
      val: "1 2 3\n",
      status: 200,
      error: 0,
    },
  },

  // Go Test Cases
  {
    name: "go : hello world",
    reqObject: {
      language: "go",
      script:
        "package main\n" +
        'import "fmt"\n' +
        "func main() {\n" +
        '    fmt.Println("hello world")\n' +
        "}",
    },
    expectedResponse: {
      val: "hello world\n",
      status: 200,
      error: 0,
    },
  },

  {
    name: "go : print stdin",
    reqObject: {
      language: "go",
      script:
        "package main\n" +
        "import (\n" +
        '    "bufio"\n' +
        '    "fmt"\n' +
        '    "os"\n' +
        ")\n" +
        "func main() {\n" +
        "    scanner := bufio.NewScanner(os.Stdin)\n" +
        "    for scanner.Scan() {\n" +
        "        fmt.Println(scanner.Text())\n" +
        "    }\n" +
        "}",
      stdin: "1 2 3",
    },
    expectedResponse: {
      val: "1\n2\n3\n",
      status: 200,
      error: 0,
    },
  },

  // R Test Cases
  {
    name: "r : hello world",
    reqObject: {
      language: "r",
      script: 'cat("hello world")',
    },
    expectedResponse: {
      val: "hello world",
      status: 200,
      error: 0,
    },
  },

  {
    name: "r : print stdin",
    reqObject: {
      language: "r",
      script:
        'input <- file("stdin", "r")\n' +
        "lines <- readLines(input)\n" +
        'cat(lines, sep = "\n")\n' +
        "close(input)",
      stdin: "1\n2\n3",
    },
    expectedResponse: {
      val: "1\n2\n3\n",
      status: 200,
      error: 0,
    },
  },

  // end of additional languages

  {
    name: "TLE test",
    reqObject: {
      language: "nodejs",
      script: "for(let i=0 ; ; ){i++}",
    },
    expectedResponse: {
      val: "Time limit exceeded",
      status: 200,
      error: 1,
    },
  },
  {
    name: "MLE test",
    reqObject: {
      language: "python",
      script: "one_gb_data = bytearray(1000 * 1024 * 1024)",
    },
    expectedResponse: {
      val: "Memory limit exceeded",
      status: 200,
      error: 1,
    },
  },
  {
    name: "MLE test 2",
    reqObject: {
      language: "python",
      script:
        "import time\n" +
        "def consume_memory(target_mb, duration_sec):\n" +
        "    float_size = 8\n" +
        "    floats_per_mb = (1024 * 1024) // float_size\n" +
        "    total_floats = target_mb * floats_per_mb\n" +
        "    iterations = int(duration_sec / 0.1)\n" +
        "    floats_per_iteration = total_floats // iterations\n" +
        "    memory_hog = []\n" +
        "    for _ in range(iterations):\n" +
        "        memory_hog.extend([0.0] * floats_per_iteration)\n" +
        "        time.sleep(0.1)\n" +
        "consume_memory(1000, 1)\n",
    },
    expectedResponse: {
      val: "Memory limit exceeded",
      status: 200,
      error: 1,
    },
  },
  {
    name: "MLE test 3",
    reqObject: {
      language: "python",
      script: "a = [100]\n" + "for i in a:\n" + "    a.append(i)\n",
    },
    expectedResponse: {
      val: "Memory limit exceeded",
      status: 200,
      error: 1,
    },
  },
  {
    name: "OPEN AI test promptv1",
    reqObject: {
      language: "promptv1",
      prompt: "The question is what is 2 plus 2. The answer given is 4.",
    },
    expectedResponse: {
      val: {},
      status: 200,
      error: 0,
    },
  },
  {
    name: "OPEN AI test promptv2",
    reqObject: {
      language: "promptv2",
      prompt: "The question is what is 2 plus 2. The answer given is 4.",
    },
    expectedResponse: {
      val: {},
      status: 200,
      error: 0,
    },
  },
];

module.exports = { testCases };
