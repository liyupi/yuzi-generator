package com.yupi.cli.utils;

import picocli.CommandLine.Option;
import picocli.CommandLine;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.Arrays;

/**
 * cil的相关工具类
 */
public class CilUtils {

    /**
     * 传入原先的参数和对应的属性，返回添加了必须的参数
     * 需要在Option里面添加required = true
     *
     * @param args 原先参数
     * @param fields 所有属性
     * @return
     */
    public static String[] addRequireArgs(String []args, Field[] fields){
        ArrayList<String> lists = new ArrayList<>(Arrays.asList(args));

        for(Field field:fields){
            Option annotation = field.getAnnotation(Option.class);
            if(annotation!=null && annotation.required()){
//                判断原先里面是否有对应的参数
                boolean isHas = false;
               for(int i = 0;i<annotation.names().length;i++){
                   if(lists.contains(annotation.names()[i])){
                       isHas = true;
                       break;
                   }
               }
                if(!isHas){
                    lists.add(annotation.names()[0]);
                }
            }
        }

        return lists.toArray(new String[0]);
    }


}
