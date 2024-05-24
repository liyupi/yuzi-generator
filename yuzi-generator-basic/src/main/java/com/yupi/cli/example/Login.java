package com.yupi.cli.example;

import picocli.CommandLine;
import picocli.CommandLine.Option;

import java.util.concurrent.Callable;

public class Login implements Callable<Integer> {
    @Option(names = {"-u", "--user"}, description = "User name")
    String user;

    // 设置了 arity 参数，可选交互式
    @Option(names = {"-p", "--password"}, arity = "0..1", description = "Passphrase", interactive = true)
    String password;

    // 设置了 arity 参数，可选交互式
    @Option(names = {"-cp", "--checkPassword"}, arity = "0..1", description = "Check Password", interactive = true)
    String checkPassword;

    public Integer call() throws Exception {
        System.out.println("password = " + password);
        System.out.println("checkPassword = " + checkPassword);
        return 0;
    }

    public static void main(String[] args) {
        List<String> argList = new ArrayList<>(Arrays.asList(args));
        argList.add("-u");
        argList.add("user888");
        //动态检查是否包含 -p 和 -cp 选项，如果不包含，则将它们添加到参数列表中。
        if (!argList.contains("-p")) {
            argList.add("-p");
        }
        if (!argList.contains("-cp")) {
            argList.add("-cp");
        }
        new CommandLine(new SingleLogin()).execute(argList.toArray(new String[0]));
        //new CommandLine(new Login()).execute("-u", "user123", "-p", "123", "-cp", "456");
    }
}
