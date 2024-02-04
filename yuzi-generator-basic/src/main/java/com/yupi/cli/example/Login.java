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
        String[] params = {"-u", "user123"};
        params = checkParams(params);
        new CommandLine(new Login()).execute(params);
    }

    /**
     * 检查参数是否存在，如果不存在则添加
     *
     * @param params 参数数组
     * @return 新的参数数组
     */
    private static String[] checkParams(String[] params) {
        // 1. 将参数数组转换为 Set 提高查找效率
        Set<String> paramsSet = new HashSet<>(Arrays.asList(params));
        List<String> argument = new ArrayList<>(paramsSet);

        // 2. 获取 Login 类的所有字段
        Class<Login> loginClass = Login.class;
        Field[] declaredFields = loginClass.getDeclaredFields();

        // 3. 遍历所有字段，检查是否有 Option 注解，如果有则检查 interactive 属性
        for (Field declaredField : declaredFields) {
            if (!declaredField.isAnnotationPresent(Option.class)) continue;
            declaredField.setAccessible(true);
            Option option = declaredField.getAnnotation(Option.class);

            // 4. 如果 interactive 属性为 true，则检查参数是否存在，如果不存在则添加
            if (option.interactive()) {
                String[] names = option.names();
                boolean flag = Arrays.stream(names).anyMatch(paramsSet::contains);
                if (!flag && names.length > 0) {
                    argument.add(names[0]);
                }
            }
        }
        return argument.toArray(new String[0]);
    }
}