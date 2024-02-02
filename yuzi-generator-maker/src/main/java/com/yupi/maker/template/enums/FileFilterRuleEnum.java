package com.yupi.maker.template.enums;

import cn.hutool.core.util.ObjectUtil;
import lombok.Getter;

/**
 * 文件过滤规则枚举
 */
@Getter
public enum FileFilterRuleEnum {

    CONTAINS("包含", "contains"),
    STARTS_WITH("前缀匹配", "startsWith"),
    ENDS_WITH("后缀匹配", "endsWith"),
    REGEX("正则", "regex"),
    EQUALS("相等", "equals");

    private final String text;

    private final String value;

    FileFilterRuleEnum(String text, String value) {
        this.text = text;
        this.value = value;
    }

    /**
     * 根据 value 获取枚举
     *
     * @param value
     * @return
     */
    public static FileFilterRuleEnum getEnumByValue(String value) {
        if (ObjectUtil.isEmpty(value)) {
            return null;
        }
        for (FileFilterRuleEnum anEnum : FileFilterRuleEnum.values()) {
            if (anEnum.value.equals(value)) {
                return anEnum;
            }
        }
        return null;
    }
}
